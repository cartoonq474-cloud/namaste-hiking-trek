const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const idx = css.indexOf('.itinerary-expand-all-btn');
console.log('found .itinerary-expand-all-btn:', idx !== -1);
if (idx !== -1) {
  console.log(css.slice(idx, idx + 800));
}
