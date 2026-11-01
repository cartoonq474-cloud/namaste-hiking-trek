const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('<div class="detail-accordion-card"');
const eIdx = ebc.indexOf('<div class="detail-accordion-card"', sIdx + 10);
console.log('EBC Card 1 Full Markup:');
console.log(ebc.slice(sIdx, eIdx));
