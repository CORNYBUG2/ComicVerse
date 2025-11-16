const CART_KEY = 'comicverse_cart_v1';

function loadCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch(e){ return {}; }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const cart = loadCart();
  const count = Object.values(cart).reduce((s,i)=>s+i.q,0);
  document.querySelectorAll('#cart-count').forEach(el=>el.textContent = count);
}

function addToCart(id, qty=1){
  const cart = loadCart();
  if(cart[id]) cart[id].q += qty;
  else cart[id] = { id, q: qty };
  saveCart(cart);
}

function removeFromCart(id){
  const cart = loadCart();
  delete cart[id];
  saveCart(cart);
}

function setQty(id, q){
  const cart = loadCart();
  if(cart[id]) cart[id].q = q;
  if(cart[id] && cart[id].q <= 0) delete cart[id];
  saveCart(cart);
}

function makeCardHTML(c){
  return `
    <div class="card">
      <img src="${c.cover}" alt="${c.title}">
      <h4>${c.title}</h4>
      <div class="meta">${c.publisher} • ${c.series}</div>
      <div class="price">₹${c.price.toFixed(2)}</div>
      <a href="comic-detail.html?id=${c.id}">View</a>
    </div>
  `;
}

function mountIndex(){
  const hero = document.getElementById('hero-track');
  if(!hero) return;

  const featured = COMICS.slice(0,6);

  hero.innerHTML = featured.map(c=>`
    <section class="hero-slide">
      <img src="${c.cover}" alt="${c.title}">
      <div class="hero-info">
        <h1>${c.title}</h1>
        <p>${c.synopsis}</p>
        <div style="margin-top:1rem">
          <a class="btn" href="comic-detail.html?id=${c.id}">View Comic</a>
        </div>
      </div>
    </section>
  `).join('');

  let index = 0;
  const slides = hero.children;
  const total = slides.length;

  function show(i){
    hero.style.transform = `translateX(${-i * 100}%)`;
    index = i;
  }

  document.getElementById('prev').addEventListener('click',()=>show((index-1+total)%total));
  document.getElementById('next').addEventListener('click',()=>show((index+1)%total));

  setInterval(()=>show((index+1)%total),6000);

  document.getElementById('new-grid').innerHTML =
    [...COMICS].sort((a,b)=>new Date(b.release)-new Date(a.release))
      .slice(0,6)
      .map(makeCardHTML).join('');

  document.getElementById('popular-grid').innerHTML =
    COMICS.slice(0,6).map(makeCardHTML).join('');
}

function mountBrowse(){
  const grid = document.getElementById('browse-grid');
  if(!grid) return;

  const pubSel = document.getElementById('filter-publisher');
  const genSel = document.getElementById('filter-genre');
  const search = document.getElementById('search');
  const sort = document.getElementById('sort');

  [...new Set(COMICS.map(c=>c.publisher))].forEach(p=>{
    pubSel.innerHTML += `<option value="${p}">${p}</option>`;
  });
  [...new Set(COMICS.map(c=>c.genre))].forEach(g=>{
    genSel.innerHTML += `<option value="${g}">${g}</option>`;
  });

  function render(){
    let list = COMICS.slice();
    const p = pubSel.value;
    const g = genSel.value;
    const q = search.value.trim().toLowerCase();

    if(p) list = list.filter(c=>c.publisher===p);
    if(g) list = list.filter(c=>c.genre===g);
    if(q) list = list.filter(c=>c.title.toLowerCase().includes(q) || c.characters.join(' ').toLowerCase().includes(q));

    const s = sort.value;
    if(s==='price-asc') list.sort((a,b)=>a.price-b.price);
    if(s==='title-asc') list.sort((a,b)=>a.title.localeCompare(b.title));
    if(s==='release-desc') list.sort((a,b)=>new Date(b.release)-new Date(a.release));

    grid.innerHTML = list.map(makeCardHTML).join('');
  }

  pubSel.addEventListener('change',render);
  genSel.addEventListener('change',render);
  search.addEventListener('input',render);
  sort.addEventListener('change',render);
  render();
}

function mountDetail(){
  const el = document.getElementById('detail');
  if(!el) return;

  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const c = getComicById(id);

  if(!c){
    el.innerHTML = '<p>Comic not found.</p>';
    return;
  }

  el.innerHTML = `
    <div class="cover"><img src="${c.cover}" alt="${c.title}"></div>
    <div class="info">
      <h2>${c.title}</h2>
      <div class="meta">${c.publisher} • ${c.series} • ${formatsDate(c.release)}</div>
      <p style="margin-top:.75rem">${c.synopsis}</p>
      <p class="meta">Creators: ${c.creators}</p>
      <div style="margin-top:1rem;font-weight:800">₹${c.price.toFixed(2)}</div>
      <div style="margin-top:1rem">
        <button id="add-cart" class="btn">Add to Cart</button>
      </div>
    </div>
  `;

  document.getElementById('add-cart')
    .addEventListener('click',()=>addToCart(c.id,1));
}

function mountCart(){
  const listEl = document.getElementById('cart-list');
  if(!listEl) return;

  function render(){
    const cart = loadCart();
    const items = Object.values(cart);

    if(items.length===0){
      listEl.innerHTML = '<p>Your cart is empty.</p>';
      document.getElementById('cart-total').textContent = '₹0.00';
      return;
    }

    listEl.innerHTML = items.map(it=>{
      const c = getComicById(it.id);
      return `
        <div class="cart-item">
          <img src="${c.cover}" alt="${c.title}"
               style="width:72px;height:100px;object-fit:cover;border-radius:6px;border:1px solid #333">
          <div style="flex:1">
            <div style="font-weight:700">${c.title}</div>
            <div class="meta">${c.publisher} • ${c.series}</div>
            <div style="margin-top:.5rem">₹${c.price.toFixed(2)}</div>
          </div>
          <div>
            <input class="qty" data-id="${c.id}" type="number" min="0" value="${it.q}">
            <div style="margin-top:.5rem">
              <button class="btn remove" data-id="${c.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.remove')
      .forEach(b=>b.addEventListener('click', e=>{
        removeFromCart(e.target.dataset.id);
        render();
      }));

    document.querySelectorAll('.qty')
      .forEach(inp=>inp.addEventListener('change', e=>{
        setQty(e.target.dataset.id,Number(e.target.value));
        render();
      }));

    const total = items.reduce((s,it)=> s + getComicById(it.id).price * it.q,0);
    document.getElementById('cart-total').textContent='₹'+total.toFixed(2);
  }

  render();

  const checkout = document.getElementById('checkout');
  if(checkout){
    checkout.addEventListener('click',()=>{
      localStorage.removeItem(CART_KEY);
      alert('Thank you for your simulated order!');
      render();
      updateCartCount();
    });
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  updateCartCount();
  mountIndex();
  mountBrowse();
  mountDetail();
  mountCart();
});
