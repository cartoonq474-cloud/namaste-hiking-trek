const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<section id="section-includes"');
const eIdx = evt.indexOf('</section>', sIdx) + 10;
console.log('Section 3 in EVT:');
console.log(evt.slice(sIdx, sIdx + 700));
console.log('--- End of Section 3 ---');
console.log(evt.slice(eIdx - 400, eIdx));
