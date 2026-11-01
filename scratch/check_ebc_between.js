const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('details-progress-wrapper');
const lIdx = ebc.indexOf('detail-accordion-list');
console.log('Between progress and accordion list in EBC:');
console.log(ebc.slice(sIdx, lIdx + 40));
