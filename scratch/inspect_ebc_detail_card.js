const fs = require('fs');

const d = fs.readFileSync('scratch/ebc_details.html', 'utf8');
const cardIdx = d.indexOf('class="detail-accordion-card"');
console.log('Sample card in EBC details:');
console.log(d.slice(cardIdx - 5, cardIdx + 1100));
