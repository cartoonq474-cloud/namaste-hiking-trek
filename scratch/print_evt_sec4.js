const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<section id="section-dates"');
const eIdx = evt.indexOf('</section>', sIdx) + 10;
console.log('EVT Section 4:');
console.log(evt.slice(sIdx, eIdx));
