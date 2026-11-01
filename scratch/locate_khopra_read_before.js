const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');
const pos = js.indexOf('detail-accordion');
console.log('detail-accordion in js/trek-details.js:', pos);
if (pos !== -1) {
  console.log(js.substring(pos - 100, pos + 2500));
}
