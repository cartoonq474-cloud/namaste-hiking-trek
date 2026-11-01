const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p = ebc.indexOf('FAQPage');
if (p !== -1) {
  console.log('FAQPage found at index:', p);
  console.log(ebc.substring(p - 100, p + 400));
} else {
  console.log('FAQPage not found in EBC trek');
}
