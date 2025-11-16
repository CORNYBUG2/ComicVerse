# ComicVerse

Static multi-page comic store built using plain HTML, CSS, and JavaScript.  
All data is stored locally in `comics.js`.  
No backend. No frameworks.

## Features
- Homepage with custom JS carousel
- Browse page with client-side filtering, sorting, and search
- Comic detail page using URL parameters (`?id=xyz`)
- LocalStorage shopping cart with quantity updates and total price
- Fully responsive grey/black/white UI

## Structure
comicverse-hub/  
├── index.html  
├── browse.html  
├── comic-detail.html  
├── cart.html  
├── comics.js  
├── css/styles.css  
├── js/main.js  
└── assets/images/

## Run Locally
Open `index.html` in a browser. No server needed.

## Deploy (GitHub Pages)
Settings → Pages → Deploy from branch → main → /root.

## Notes
Everything is client-side. The cart and state persist via LocalStorage.
