const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<div class="rich-highlights-grid">');
const eIdx = evt.indexOf('Why Book the Everest View Trek', sIdx);
const hlChunk = evt.slice(sIdx, eIdx);

const cards = [];
const cardRegex = /<div class="highlight-card">([\s\S]*?)<\/div>\s*<\/div>/g;
let m;
while ((m = cardRegex.exec(hlChunk)) !== null) {
  const c = m[1];
  const titleM = c.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
  const descM = c.match(/<p class="highlight-card-desc">([\s\S]*?)<\/p>/);
  cards.push({
    title: titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : '',
    desc: descM ? descM[1].replace(/<[^>]+>/g, '').trim() : ''
  });
}

console.log('Extracted highlights cards count:', cards.length);
cards.forEach((c, i) => console.log(`${i + 1}. ${c.title}`));
fs.writeFileSync('scratch/evt_16_highlights.json', JSON.stringify(cards, null, 2), 'utf8');
