/*
 * Amrut Kitchen – Dynamic Menu Prices
 * -------------------------------------
 * Fetches Item|Price from a published Google Sheet CSV.
 * If the sheet is unavailable, HTML fallback prices remain unchanged.
 *
 * SETUP:
 *   1. Open your Google Sheet
 *   2. File → Share → Publish to web → Sheet1 → CSV → Publish
 *   3. Copy the URL and replace SHEET_CSV_URL below
 */

(function () {
  // Read URL from config.js (gitignored — never hardcode here)
  var SHEET_CSV_URL = (typeof AMRUT_CONFIG !== 'undefined') ? AMRUT_CONFIG.sheetUrl : '';

  // If config.js missing or URL not set, silently exit — HTML prices remain
  if (!SHEET_CSV_URL || SHEET_CSV_URL.indexOf('REPLACE') === 0) return;

  function parseCSV(text) {
    var prices = {};
    var lines = text.split('\n');
    for (var i = 1; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var item, price;
      if (line.charAt(0) === '"') {
        var endQuote = line.indexOf('"', 1);
        item = line.substring(1, endQuote);
        price = line.substring(endQuote + 2).replace(/^"|"$/g, '').trim();
      } else {
        var comma = line.indexOf(',');
        if (comma === -1) continue;
        item = line.substring(0, comma).trim();
        price = line.substring(comma + 1).replace(/^"|"$/g, '').trim();
      }
      if (item && price) prices[item.toLowerCase()] = price;
    }
    return prices;
  }

  function applyPrices(prices) {
    // Regular menu items
    document.querySelectorAll('.menu-item').forEach(function (card) {
      var nameEl = card.querySelector('.item-name');
      var priceEl = card.querySelector('.item-price');
      if (!nameEl || !priceEl) return;
      var val = prices[nameEl.textContent.trim().toLowerCase()];
      if (val) priceEl.textContent = val;
    });

    // Buffet items
    document.querySelectorAll('.buffet-item').forEach(function (card) {
      var nameEl = card.querySelector('.buffet-name');
      var priceEl = card.querySelector('.buffet-price');
      if (!nameEl || !priceEl) return;
      var val = prices[nameEl.textContent.trim().toLowerCase()];
      if (val) {
        var span = priceEl.querySelector('span');
        priceEl.innerHTML = val + (span ? span.outerHTML : '');
      }
    });
  }

  var sep = SHEET_CSV_URL.indexOf('?') > -1 ? '&' : '?';
  fetch(SHEET_CSV_URL + sep + 't=' + Date.now())
    .then(function (r) { return r.text(); })
    .then(function (csv) { applyPrices(parseCSV(csv)); })
    .catch(function () { /* sheet unavailable — HTML prices remain as fallback */ });
})();
