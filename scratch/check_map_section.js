const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const idx = ebc.indexOf('id="section-map"');
if (idx !== -1) {
  const nextSec = ebc.indexOf('<section', idx + 20);
  console.log(ebc.slice(idx - 50, nextSec));
}
