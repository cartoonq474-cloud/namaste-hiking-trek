const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = evt.split('\n');

const hlCards = [];
let inCard = false;
let currentCard = {};

for (let i = 840; i < 1090; i++) {
  const line = lines[i];
  if (!line) continue;
  if (line.includes('class="ebc-highlight-card"')) {
    inCard = true;
    currentCard = { start: i + 1, lines: [] };
  } else if (inCard) {
    currentCard.lines.push(line);
    if (line.includes('</div>') && currentCard.lines.filter(l => l.includes('<div')).length <= currentCard.lines.filter(l => l.includes('</div>')).length) {
      inCard = false;
      hlCards.push(currentCard);
    }
  }
}

console.log('Total highlight cards parsed:', hlCards.length);
hlCards.forEach((c, idx) => {
  const text = c.lines.join('\n');
  const titleMatch = text.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const pMatch = text.match(/<p[^>]*class="ebc-highlight-body"[^>]*>([\s\S]*?)<\/p>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO TITLE';
  const body = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO BODY';
  console.log(`\nCard ${idx + 1} (Line ${c.start}): ${title}`);
  console.log(`  Body preview: ${body.slice(0, 120)}... (Length: ${body.length})`);
});
