const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const idx = ebc.indexOf('id="video-review-modal"');
if (idx !== -1) {
  const endDiv = ebc.indexOf('</section>', idx);
  console.log(ebc.slice(idx - 30, endDiv));
}
