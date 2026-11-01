const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('Why Book the Everest View Trek with Namaste Hiking Trek?');
const eIdx = evt.indexOf('</section>', sIdx);
const wbChunk = evt.slice(sIdx, eIdx);

const cards = [];
const cardRegex = /<h4[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
let m;
while ((m = cardRegex.exec(wbChunk)) !== null) {
  cards.push({
    title: m[1].replace(/<[^>]+>/g, '').trim(),
    desc: m[2].replace(/<[^>]+>/g, '').trim()
  });
}

console.log('Extracted Why Book cards count:', cards.length);
cards.forEach((c, i) => console.log(`${i + 1}. ${c.title}`));
fs.writeFileSync('scratch/evt_10_why_book.json', JSON.stringify(cards, null, 2), 'utf8');
