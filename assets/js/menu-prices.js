/*
 * Amrut Kitchen – Dynamic Menu Prices
 * CSV columns: S.No, Item Name, Price (₹), Category
 * If sheet unavailable, HTML fallback prices remain unchanged.
 */

(function () {
  function normalize(str) {
    return str.toLowerCase()
      .replace(/[–\-]/g, ' ')
      .replace(/\([^)]*\)/g, '')
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function parseCSV(text) {
    var prices = {};
    var lines = text.split('\n');
    // Columns: S.No, Item Name, Price (₹), Category
    for (var i = 1; i < lines.length; i++) {
      var cols = lines[i].split(',');
      if (cols.length < 3) continue;
      var name = cols[1].replace(/^"|"$/g, '').trim();
      var price = cols[2].replace(/^"|"$/g, '').trim();
      if (name && price && !isNaN(price)) {
        prices[normalize(name)] = '₹' + price;
      }
    }
    return prices;
  }

  function applyPrices(prices) {
    document.querySelectorAll('.menu-item').forEach(function (card) {
      var nameEl = card.querySelector('.item-name');
      var priceEl = card.querySelector('.item-price');
      if (!nameEl || !priceEl) return;
      var key = normalize(nameEl.textContent.trim());
      if (prices[key]) priceEl.textContent = prices[key];
    });

    document.querySelectorAll('.buffet-item').forEach(function (card) {
      var nameEl = card.querySelector('.buffet-name');
      var priceEl = card.querySelector('.buffet-price');
      if (!nameEl || !priceEl) return;
      var key = normalize(nameEl.textContent.trim());
      if (prices[key]) {
        var span = priceEl.querySelector('span');
        priceEl.innerHTML = prices[key] + (span ? span.outerHTML : '');
      }
    });
  }

  fetch('/api/prices', { cache: 'no-store' })
    .then(function (r) { return r.text(); })
    .then(function (csv) { applyPrices(parseCSV(csv)); })
    .catch(function () {});
})();
