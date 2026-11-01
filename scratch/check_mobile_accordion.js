const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const mobileIdx = about.indexOf('mobile-accordion-menu');
if (mobileIdx !== -1) {
  console.log('about.html mobile accordion snippet:\n', about.substring(mobileIdx, mobileIdx + 600));
} else {
  console.log('mobile-accordion-menu not found in about.html');
}
