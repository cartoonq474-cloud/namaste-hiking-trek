const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('<section id="section-includes"');
const eIdx = ebc.indexOf('</section>', sIdx) + 10;
console.log('EBC Section 3 Start:');
console.log(ebc.slice(sIdx, sIdx + 900));
