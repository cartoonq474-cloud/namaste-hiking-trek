const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = ebc.split('\n');

const items = [];
let currentItem = null;

for (let i = 4153; i < 7045; i++) {
  const l = lines[i];
  if (l.includes('class="detail-accordion-card"')) {
    const idMatch = l.match(/data-detail-id="([^"]+)"/);
    currentItem = { id: idMatch ? idMatch[1] : '', title: '', icon: '' };
    items.push(currentItem);
  }
  if (currentItem && l.includes('class="detail-accordion-title"')) {
    currentItem.title = l.replace(/<[^>]+>/g, '').trim();
  }
}

console.log('EBC 21 Items found:', items.length);
items.forEach((it, idx) => {
  console.log(`${idx + 1}. [id: ${it.id}] ${it.title}`);
});
