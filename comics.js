// comics.js — prices updated to realistic INR values
const COMICS = [
  // newly added premium / popular titles
  { id:'m900', title:'Berserk Deluxe Vol. 1', series:'Berserk', publisher:'Dark Horse', characters:['Guts','Griffith','Casca'], genre:'Dark Fantasy', price:1499.00, release:'2019-03-27', cover:'assets/images/berserk_deluxe1.jpg', creators:'Kentaro Miura', synopsis:'The Black Swordsman begins his hunt through a demonic world.' },
  { id:'m901', title:'Monster Vol. 1', series:'Monster', publisher:'Viz Media', characters:['Tenma','Johan'], genre:'Psychological Thriller', price:699.00, release:'2006-02-21', cover:'assets/images/monster1.jpg', creators:'Naoki Urasawa', synopsis:'A surgeon saves a boy who later becomes a notorious killer.' },
  { id:'m902', title:'Orb: On the Movements of Earth Vol. 1', series:'Orb: On the Movements of Earth', publisher:'Shogakukan', characters:['Mihoro','Orb'], genre:'Fantasy', price:599.00, release:'2019-08-30', cover:'assets/images/orb1.jpg', creators:'Uoto', synopsis:'A fantasy world governed by the celestial system surrounding the Orb.' },
  { id:'m903', title:'Bleach Vol. 1', series:'Bleach', publisher:'Shonen Jump', characters:['Ichigo','Rukia'], genre:'Shonen', price:399.00, release:'2001-08-07', cover:'assets/images/bleach1.jpg', creators:'Tite Kubo', synopsis:'A teenager accidentally obtains the powers of a Soul Reaper.' },
  { id:'m904', title:'Dororo Vol. 1', series:'Dororo', publisher:'Vertical', characters:['Hyakkimaru','Dororo'], genre:'Dark Fantasy', price:449.00, release:'2008-02-12', cover:'assets/images/dororo1.jpg', creators:'Osamu Tezuka', synopsis:'A ronin regains stolen body parts by slaying demons.' },
  { id:'m905', title:'Solo Leveling Vol. 1', series:'Solo Leveling', publisher:'D&C', characters:['Jinwoo'], genre:'Action Fantasy', price:699.00, release:'2018-03-04', cover:'assets/images/sololeveling1.jpg', creators:'Chugong', synopsis:'A weak hunter becomes the world’s strongest after awakening a system.' },
  { id:'m906', title:'The Beginning After The End Vol. 1', series:'The Beginning After The End', publisher:'Tapas', characters:['Arthur Leywin'], genre:'Fantasy', price:699.00, release:'2018-07-14', cover:'assets/images/tbate1.jpg', creators:'TurtleMe', synopsis:'A reincarnated king starts over in a magic-filled world.' },

  // expanded manga catalog (realistic INR prices)
  { id:'m001', title:'Attack on Titan Vol. 1', series:'Attack on Titan', publisher:'Kodansha', characters:['Eren','Mikasa','Armin'], genre:'Action', price:499.00, release:'2010-03-17', cover:'assets/images/aot1.jpg', creators:'Hajime Isayama', synopsis:'Humanity trapped behind walls fights man-eating titans.' },
  { id:'m002', title:'Attack on Titan Vol. 2', series:'Attack on Titan', publisher:'Kodansha', characters:['Eren','Levi'], genre:'Action', price:499.00, release:'2010-07-21', cover:'assets/images/aot2.jpg', creators:'Hajime Isayama', synopsis:'The battle intensifies as secrets surrounding titans deepen.' },

  { id:'m010', title:'Naruto Vol. 1', series:'Naruto', publisher:'Shonen Jump', characters:['Naruto','Sasuke','Sakura'], genre:'Shonen', price:399.00, release:'2000-03-03', cover:'assets/images/naruto1.jpg', creators:'Masashi Kishimoto', synopsis:'A loud ninja aims to become Hokage despite being shunned.' },
  { id:'m011', title:'Naruto Vol. 2', series:'Naruto', publisher:'Shonen Jump', characters:['Naruto','Kakashi'], genre:'Shonen', price:399.00, release:'2000-04-04', cover:'assets/images/naruto2.jpg', creators:'Masashi Kishimoto', synopsis:'Team 7 enters their first dangerous mission.' },

  { id:'m020', title:'One Piece Vol. 1', series:'One Piece', publisher:'Shonen Jump', characters:['Luffy','Zoro','Nami'], genre:'Adventure', price:399.00, release:'1997-12-24', cover:'assets/images/op1.jpg', creators:'Eiichiro Oda', synopsis:'A boy with rubber powers sets sail to become Pirate King.' },
  { id:'m021', title:'One Piece Vol. 2', series:'One Piece', publisher:'Shonen Jump', characters:['Luffy','Buggy'], genre:'Adventure', price:399.00, release:'1998-03-18', cover:'assets/images/op2.jpg', creators:'Eiichiro Oda', synopsis:'The crew expands as enemies become more dangerous.' },

  { id:'m030', title:'Jujutsu Kaisen Vol. 1', series:'Jujutsu Kaisen', publisher:'Shonen Jump', characters:['Yuji','Megumi','Gojo'], genre:'Dark Fantasy', price:499.00, release:'2018-07-04', cover:'assets/images/jjk1.jpg', creators:'Gege Akutami', synopsis:'A boy consumes a cursed finger and joins a sorcerer school.' },
  { id:'m031', title:'Jujutsu Kaisen Vol. 2', series:'Jujutsu Kaisen', publisher:'Shonen Jump', characters:['Yuji','Nobara'], genre:'Dark Fantasy', price:499.00, release:'2018-10-03', cover:'assets/images/jjk2.jpg', creators:'Gege Akutami', synopsis:'The team confronts higher-grade curses.' },

  { id:'m040', title:'Demon Slayer Vol. 1', series:'Kimetsu no Yaiba', publisher:'Shonen Jump', characters:['Tanjiro','Nezuko'], genre:'Dark Fantasy', price:499.00, release:'2016-02-03', cover:'assets/images/ds1.jpg', creators:'Koyoharu Gotouge', synopsis:'A boy becomes a demon slayer after tragedy strikes his family.' },
  { id:'m041', title:'Demon Slayer Vol. 2', series:'Kimetsu no Yaiba', publisher:'Shonen Jump', characters:['Tanjiro','Zenitsu','Inosuke'], genre:'Dark Fantasy', price:499.00, release:'2016-05-02', cover:'assets/images/ds2.jpg', creators:'Koyoharu Gotouge', synopsis:'Tanjiro encounters stronger demons on his mission.' },

  { id:'m050', title:'Death Note Vol. 1', series:'Death Note', publisher:'Shonen Jump', characters:['Light','L'], genre:'Psychological', price:399.00, release:'2003-04-01', cover:'assets/images/dn1.jpg', creators:'Tsugumi Ohba, Takeshi Obata', synopsis:'A student obtains a lethal notebook and begins a purge.' },
  { id:'m051', title:'Death Note Vol. 2', series:'Death Note', publisher:'Shonen Jump', characters:['Light','L'], genre:'Psychological', price:399.00, release:'2003-06-01', cover:'assets/images/dn2.jpg', creators:'Tsugumi Ohba, Takeshi Obata', synopsis:'The mind-battle between Light and L escalates.' },

  { id:'m060', title:'Chainsaw Man Vol. 1', series:'Chainsaw Man', publisher:'Shonen Jump', characters:['Denji','Power','Aki'], genre:'Dark Action', price:499.00, release:'2019-03-04', cover:'assets/images/csm1.jpg', creators:'Tatsuki Fujimoto', synopsis:'A boy merges with a chainsaw demon and joins Public Safety.' },
  { id:'m061', title:'Chainsaw Man Vol. 2', series:'Chainsaw Man', publisher:'Shonen Jump', characters:['Denji','Makima'], genre:'Dark Action', price:499.00, release:'2019-06-04', cover:'assets/images/csm2.jpg', creators:'Tatsuki Fujimoto', synopsis:'Denji faces devils far above his level.' },

  { id:'m070', title:'Tokyo Ghoul Vol. 1', series:'Tokyo Ghoul', publisher:'Young Jump', characters:['Kaneki','Touka'], genre:'Horror', price:449.00, release:'2012-09-14', cover:'assets/images/tg1.jpg', creators:'Sui Ishida', synopsis:'A college student becomes half-ghoul after a deadly encounter.' },
  { id:'m071', title:'Tokyo Ghoul Vol. 2', series:'Tokyo Ghoul', publisher:'Young Jump', characters:['Kaneki'], genre:'Horror', price:449.00, release:'2012-12-14', cover:'assets/images/tg2.jpg', creators:'Sui Ishida', synopsis:'Kaneki assimilates into ghoul society.' },

  { id:'m080', title:'Berserk Vol. 1', series:'Berserk', publisher:'Young Animal', characters:['Guts','Griffith'], genre:'Dark Fantasy', price:799.00, release:'1990-11-26', cover:'assets/images/berserk1.jpg', creators:'Kentaro Miura', synopsis:'A mercenary with a colossal sword battles demons and fate.' },
  { id:'m081', title:'Berserk Vol. 2', series:'Berserk', publisher:'Young Animal', characters:['Guts','Casca'], genre:'Dark Fantasy', price:799.00, release:'1991-04-15', cover:'assets/images/berserk2.jpg', creators:'Kentaro Miura', synopsis:'The Band of the Hawk rises to power.' },

  // original demo comics / indie entries
];

// utilities
function getComicById(id){
  return COMICS.find(c => c.id === id);
}

function formatsDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}
