const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const gridIdx = html.indexOf('grid-template-columns: 2.2fr 1fr');
if (gridIdx !== -1) {
  // Let's find the closing of the main details column and the second column
  console.log(html.slice(gridIdx, gridIdx + 500));
}

// Let's search for "Book This Trek" or "booking-card" or similar in index.html
const m = html.match(/class=\"[^\"]*booking[^\"]*\"/g);
console.log('Booking classes:', [...new Set(m)]);

