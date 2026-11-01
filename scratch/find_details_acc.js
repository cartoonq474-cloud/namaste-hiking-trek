const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const sIdx = js.indexOf('setupDetailsAccordions');
if (sIdx !== -1) {
  console.log(js.slice(sIdx, sIdx + 1500));
} else {
  console.log('setupDetailsAccordions not found! Searching for detail-accordion:');
  const dIdx = js.indexOf('detail-accordion');
  console.log(js.slice(dIdx - 100, dIdx + 1000));
}
