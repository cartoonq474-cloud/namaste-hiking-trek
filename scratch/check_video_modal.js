const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const idx = ebc.indexOf('video-review-modal');
console.log('EBC has video-review-modal:', idx !== -1);
if (idx !== -1) {
  console.log(ebc.slice(idx - 50, idx + 500));
}
