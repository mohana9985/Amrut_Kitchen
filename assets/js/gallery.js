/*
 * Amrut Kitchen — Gallery Slideshow + Lightbox
 * ==============================================
 * Used by: gallery.html
 *
 * How it works:
 *   - 5 category tiles, each auto-sliding through its images every 5 seconds
 *   - Each tile starts 1 second apart to avoid all switching at the same time
 *   - Clicking a tile opens a fullscreen lightbox
 *   - Lightbox supports keyboard navigation (← → Escape)
 *
 * To add a new image: add an object { src, cap } to the correct category array
 * To add a new category: add a new { images: [...] } object and add a 6th tile in gallery.html
 */

/* ── IMAGE DATA ──────────────────────────────────────────────────────────── */
/* Each category = one tile on the gallery page */
const categories = [
  // Tile 0 (featured) — Non-Veg Starters
  { images: [
    { src: 'assets/images/menu/non-veg-starters/chicken-65.jpg',          cap: 'Chicken 65' },
    { src: 'assets/images/menu/non-veg-starters/chicken-lollipops.jpg',   cap: 'Chicken Lollipops' },
    { src: 'assets/images/menu/non-veg-starters/chilli-chicken.jpg',      cap: 'Chilli Chicken' },
    { src: 'assets/images/menu/non-veg-starters/chicken-manchuria.jpg',   cap: 'Chicken Manchuria' },
    { src: 'assets/images/menu/non-veg-starters/chicken-majestic.jpg',    cap: 'Chicken Majestic' },
    { src: 'assets/images/menu/non-veg-starters/chicken-555.jpg',         cap: 'Chicken 555' },
    { src: 'assets/images/menu/non-veg-starters/chicken-wings.jpg',       cap: 'Chicken Wings' },
    { src: 'assets/images/menu/non-veg-starters/dragon-chicken.jpg',      cap: 'Dragon Chicken' },
    { src: 'assets/images/menu/non-veg-starters/pepper-chicken.jpg',      cap: 'Pepper Chicken' },
    { src: 'assets/images/menu/non-veg-starters/crispy-chicken.jpg',      cap: 'Crispy Chicken' },
    { src: 'assets/images/menu/non-veg-starters/schezwan-chicken.jpg',    cap: 'Schezwan Chicken' },
    { src: 'assets/images/menu/non-veg-starters/cashew-chicken.jpg',      cap: 'Cashew Chicken' },
    { src: 'assets/images/menu/non-veg-starters/rajadhani-chicken.jpg',   cap: 'Rajadhani Chicken' },
    { src: 'assets/images/menu/non-veg-starters/rr-chicken.jpg',          cap: 'RR Chicken' },
    { src: 'assets/images/menu/non-veg-starters/loose-chicken.jpg',       cap: 'Loose Chicken' },
    { src: 'assets/images/menu/non-veg-starters/chicken-drum-sticks.jpg', cap: 'Chicken Drum Sticks' },
    { src: 'assets/images/menu/non-veg-starters/egg-65.jpeg',             cap: 'Egg 65' },
    { src: 'assets/images/menu/non-veg-starters/egg-chilli.jpg',          cap: 'Egg Chilli' },
    { src: 'assets/images/menu/non-veg-starters/egg-manchuria.jpg',       cap: 'Egg Manchuria' },
    { src: 'assets/images/menu/non-veg-starters/boiled-eggs.jpg',         cap: 'Boiled Eggs' },
    { src: 'assets/images/menu/non-veg-starters/masala-omelette.jpg',     cap: 'Masala Omelette' },
    { src: 'assets/images/menu/non-veg-starters/mutton-keema-balls.jpg',  cap: 'Mutton Keema Balls' },
    { src: 'assets/images/menu/non-veg-starters/loose-prawn.jpg',         cap: 'Loose Prawn' },
    { src: 'assets/images/menu/non-veg-starters/chicken-noodles.jpg',     cap: 'Chicken Noodles' },
    { src: 'assets/images/menu/non-veg-starters/egg-noodles.jpg',         cap: 'Egg Noodles' },
  ]},
  // Tile 1 — Veg Starters
  { images: [
    { src: 'assets/images/menu/veg-starters/paneer-65.jpg',           cap: 'Paneer 65' },
    { src: 'assets/images/menu/veg-starters/paneer-chilli.jpg',       cap: 'Paneer Chilli' },
    { src: 'assets/images/menu/veg-starters/paneer-manchuria.jpg',    cap: 'Paneer Manchuria' },
    { src: 'assets/images/menu/veg-starters/gobi-65.jpg',             cap: 'Gobi 65' },
    { src: 'assets/images/menu/veg-starters/gobi-manchuria.jpg',      cap: 'Gobi Manchuria' },
    { src: 'assets/images/menu/veg-starters/mushroom-65.jpg',         cap: 'Mushroom 65' },
    { src: 'assets/images/menu/veg-starters/mushroom-chilli.jpg',     cap: 'Mushroom Chilli' },
    { src: 'assets/images/menu/veg-starters/mushroom-manchuria.jpg',  cap: 'Mushroom Manchuria' },
    { src: 'assets/images/menu/veg-starters/baby-corn-65.jpg',        cap: 'Baby Corn 65' },
    { src: 'assets/images/menu/veg-starters/baby-corn-chilli.jpg',    cap: 'Baby Corn Chilli' },
    { src: 'assets/images/menu/veg-starters/baby-corn-manchuria.jpg', cap: 'Baby Corn Manchuria' },
    { src: 'assets/images/menu/veg-starters/crispy-baby-corn.jpg',    cap: 'Crispy Baby Corn' },
    { src: 'assets/images/menu/veg-starters/crispy-veg.jpg',          cap: 'Crispy Veg' },
    { src: 'assets/images/menu/veg-starters/veg-manchuria.jpg',       cap: 'Veg Manchuria' },
    { src: 'assets/images/menu/veg-starters/onion-pakoda.jpg',        cap: 'Onion Pakoda' },
    { src: 'assets/images/menu/veg-starters/onion-rings.jpg',         cap: 'Onion Rings' },
    { src: 'assets/images/menu/veg-starters/french-fries.jpg',        cap: 'French Fries' },
    { src: 'assets/images/menu/veg-starters/malai-pakoda.jpg',        cap: 'Malai Pakoda' },
    { src: 'assets/images/menu/veg-starters/veg-noodles.jpg',         cap: 'Veg Noodles' },
    { src: 'assets/images/menu/veg-starters/schezwan-noodles.jpg',    cap: 'Schezwan Noodles' },
    { src: 'assets/images/menu/veg-starters/veg-salad.jpg',           cap: 'Veg Salad' },
  ]},
  // Tile 2 — Biryanis
  { images: [
    { src: 'assets/images/menu/biryanis/chicken-dum-biryani.jpg',       cap: 'Chicken Dum Biryani' },
    { src: 'assets/images/menu/biryanis/chicken-fry-biryani.jpg',       cap: 'Chicken Fry Biryani' },
    { src: 'assets/images/menu/biryanis/chicken-wings-biryani.jpg',     cap: 'Chicken Wings Biryani' },
    { src: 'assets/images/menu/biryanis/sp-chicken-biryani.jpg',        cap: 'SP Chicken Biryani' },
    { src: 'assets/images/menu/biryanis/mutton-dum-biryani.jpg',        cap: 'Mutton Dum Biryani' },
    { src: 'assets/images/menu/biryanis/mutton-fry-piece-biryani.jpg',  cap: 'Mutton Fry Piece Biryani' },
    { src: 'assets/images/menu/biryanis/mutton-keema-biryani.jpg',      cap: 'Mutton Keema Biryani' },
    { src: 'assets/images/menu/biryanis/fish-biryani.jpg',              cap: 'Fish Biryani' },
    { src: 'assets/images/menu/biryanis/prawn-biryani.jpg',             cap: 'Prawn Biryani' },
    { src: 'assets/images/menu/biryanis/muttomn-paya.jpg',              cap: 'Mutton Paya' },
  ]},
  // Tile 3 — Non-Veg Curries
  { images: [
    { src: 'assets/images/menu/non-veg-curries/butter-chicken-curry.jpg',    cap: 'Butter Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/afghani-chicken-curry.jpg',   cap: 'Afghani Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/cashew-chicken-curry.jpg',    cap: 'Cashew Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/dum-chicken-curry.jpg',       cap: 'Dum Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/kadai-chicken-curry.jpg',     cap: 'Kadai Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/kolhapuri-chicken--curry.jpg',cap: 'Kolhapuri Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/lemon-chicken.jpg',           cap: 'Lemon Chicken' },
    { src: 'assets/images/menu/non-veg-curries/maharani-chicken.jpg',        cap: 'Maharani Chicken' },
    { src: 'assets/images/menu/non-veg-curries/malai-chicken.jpg',           cap: 'Malai Chicken' },
    { src: 'assets/images/menu/non-veg-curries/methi-chicken-curry.jpg',     cap: 'Methi Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/punjabi-chicken.jpg',         cap: 'Punjabi Chicken' },
    { src: 'assets/images/menu/non-veg-curries/sp-chicken-curry.jpg',        cap: 'SP Chicken Curry' },
    { src: 'assets/images/menu/non-veg-curries/egg-curry.jpg',               cap: 'Egg Curry' },
  ]},
  // Tile 4 — Fried Rice
  { images: [
    { src: 'assets/images/menu/fried-rice/chicken-fried-rice.jpg',          cap: 'Chicken Fried Rice' },
    { src: 'assets/images/menu/fried-rice/egg-fried-rice.jpg',              cap: 'Egg Fried Rice' },
    { src: 'assets/images/menu/fried-rice/prawn-fried-rice.jpg',            cap: 'Prawn Fried Rice' },
    { src: 'assets/images/menu/fried-rice/mixed-non-veg-fried-rice.jpg',    cap: 'Mixed Non Veg Fried Rice' },
    { src: 'assets/images/menu/fried-rice/schezwan-chicken-fried-rice.jpg', cap: 'Schezwan Chicken Fried Rice' },
    { src: 'assets/images/menu/fried-rice/schezwan-egg-fried-rice.jpg',     cap: 'Schezwan Egg Fried Rice' },
    { src: 'assets/images/menu/fried-rice/veg-fried-rice.jpg',              cap: 'Veg Fried Rice' },
    { src: 'assets/images/menu/fried-rice/mixed-veg-fried-rice.jpg',        cap: 'Mixed Veg Fried Rice' },
    { src: 'assets/images/menu/fried-rice/mushroom-fried-rice.jpg',         cap: 'Mushroom Fried Rice' },
    { src: 'assets/images/menu/fried-rice/paneer-fried-rice.jpg',           cap: 'Paneer Fried Rice' },
    { src: 'assets/images/menu/fried-rice/cashew-fried-rice.jpg',           cap: 'Cashew Fried Rice' },
    { src: 'assets/images/menu/fried-rice/schezwan-fried-rice.jpg',         cap: 'Schezwan Fried Rice' },
    { src: 'assets/images/menu/fried-rice/jeera-rice.jpg',                  cap: 'Jeera Rice' },
    { src: 'assets/images/menu/fried-rice/tomato-rice.jpg',                 cap: 'Tomato Rice' },
    { src: 'assets/images/menu/fried-rice/cord-rice.jpg',                   cap: 'Curd Rice' },
    { src: 'assets/images/menu/fried-rice/white-rice.jpg',                  cap: 'White Rice' },
  ]},
];

/* ── SLIDESHOW STATE ─────────────────────────────────────────────────────── */
const indices = [0, 0, 0, 0, 0]; // current image index for each of the 5 tiles
const INTERVAL = 5000;           // auto-advance every 5 seconds

/* Renders the current image for tile t with a fade transition */
function renderTile(t) {
  const item = categories[t].images[indices[t]];
  const total = categories[t].images.length;
  const img = document.getElementById('img-' + t);
  const cap = document.getElementById('cap-' + t);
  const ctr = document.getElementById('ctr-' + t);

  img.classList.remove('visible');
  setTimeout(function() {
    img.src = item.src;
    img.alt = item.cap;
    img.classList.add('visible');
  }, 300); // 300ms matches the CSS fade-out duration

  cap.textContent = item.cap;
  ctr.textContent = (indices[t] + 1) + '/' + total; // e.g. "3/25"
}

/* Moves to the next image in tile t (wraps around) */
function advanceTile(t) {
  indices[t] = (indices[t] + 1) % categories[t].images.length;
  renderTile(t);
}

/* ── AUTO-SLIDE INIT ─────────────────────────────────────────────────────── */
/* Each tile starts 1 second apart so they don't all switch simultaneously */
for (var t = 0; t < 5; t++) {
  renderTile(t); // show first image immediately
  (function(idx) {
    setTimeout(function() {
      advanceTile(idx);
      setInterval(function() { advanceTile(idx); }, INTERVAL);
    }, idx * 1000); // tile 0: 0s delay, tile 1: 1s, tile 2: 2s ...
  })(t);
}

/* ── LIGHTBOX ─────────────────────────────────────────────────────────────── */
var lbTile = 0; // which tile the lightbox opened from
var lbIdx = 0;  // current image index inside lightbox

/* Opens lightbox showing the current image of the clicked tile */
function openLightbox(tileIdx) {
  lbTile = tileIdx;
  lbIdx = indices[tileIdx];
  var item = categories[lbTile].images[lbIdx];
  document.getElementById('lb-img').src = item.src;
  document.getElementById('lb-caption').textContent = item.cap;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

/* Closes the lightbox and restores page scroll */
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* Closes lightbox if user clicks the dark backdrop (not the image itself) */
function closeLightboxOutside(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
}

/* Navigates lightbox: dir = +1 (next) or -1 (prev), wraps around */
function lbChange(dir) {
  var cat = categories[lbTile];
  lbIdx = (lbIdx + dir + cat.images.length) % cat.images.length;
  var item = cat.images[lbIdx];
  document.getElementById('lb-img').src = item.src;
  document.getElementById('lb-caption').textContent = item.cap;
}

/* Keyboard support: Escape to close, arrow keys to navigate */
document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lbChange(1);
  if (e.key === 'ArrowLeft') lbChange(-1);
});
