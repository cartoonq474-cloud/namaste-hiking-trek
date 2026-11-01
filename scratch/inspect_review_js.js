const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const idx = js.indexOf('review-tab-btn');
if (idx !== -1) {
  console.log(js.slice(idx - 100, idx + 1000));
}
