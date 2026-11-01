const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const ovIdx = ebc.indexOf('id="section-overview"');
console.log(ebc.substring(ovIdx, ovIdx + 2500));
