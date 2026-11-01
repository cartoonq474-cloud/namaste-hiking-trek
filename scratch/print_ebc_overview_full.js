const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-overview"');
console.log('EBC section-overview:');
console.log(ebc.slice(sIdx, sIdx + 4000));
