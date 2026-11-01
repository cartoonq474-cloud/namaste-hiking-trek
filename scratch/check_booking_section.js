const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const idx = ebc.indexOf('id="section-booking"');
if (idx !== -1) {
  console.log(ebc.slice(idx - 50, idx + 1000));
} else {
  console.log('Not found');
}
