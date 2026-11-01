const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const pos = ebc.indexOf('detail-accordion-card');
const end = ebc.indexOf('</section>', pos);
const cards = ebc.substring(pos, end).split('detail-accordion-card');

console.log('EBC cards count:', cards.length - 1);
for (let i = 1; i <= Math.min(5, cards.length - 1); i++) {
  console.log(`\n=== EBC CARD ${i} HEADER & START ===`);
  console.log(cards[i].substring(0, 800));
}
