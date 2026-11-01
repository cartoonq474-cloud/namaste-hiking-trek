const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('<main');
console.log('EBC main to section-overview:');
console.log(ebc.slice(sIdx, sIdx + 1500));
