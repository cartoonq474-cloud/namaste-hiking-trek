const path = require('path');
const ebcItems = require(path.join(__dirname, 'ebc_21_items.json'));
const evtCards = require(path.join(__dirname, 'guidance_cards.json'));

console.log('EBC Items count:', ebcItems.length);
console.log('EVT Cards count:', evtCards.length);

for (let i = 0; i < 21; i++) {
  const e = ebcItems[i] || {};
  const g = evtCards[i] || {};
  console.log(`${i + 1}. EBC id: "${e.id}" | EBC title: "${e.title ? e.title.slice(0, 45) : ''}"`);
  console.log(`   EVT num: ${g.num} | EVT title: "${g.title ? g.title.slice(0, 45) : ''}"`);
}
