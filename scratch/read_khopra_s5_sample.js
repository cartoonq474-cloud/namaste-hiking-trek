const fs = require('fs');

const s5 = fs.readFileSync('scratch/current_khopra_section5.html', 'utf8');

const cards = s5.split('<div class="detail-accordion-card"');
console.log('Cards count:', cards.length - 1);

for (let i = 1; i <= Math.min(3, cards.length - 1); i++) {
  console.log(`\n================ KHOPRA CARD ${i} ================\n`);
  console.log(cards[i].substring(0, 1500));
}
