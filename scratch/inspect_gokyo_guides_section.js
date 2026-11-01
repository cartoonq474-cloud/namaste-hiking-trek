const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const lines = html.split('\n');

const startIdx = lines.findIndex(l => l.includes('Read Before You Book: 16 In-Depth Gokyo Guides'));
console.log('Start line:', startIdx + 1);

const items = [];
let currentCategory = '';
let currentTitle = '';
let currentStart = 0;
let inItem = false;

for (let i = startIdx; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('class="detail-accordion-card"') || line.includes('class="guide-accordion-card"')) {
    currentStart = i + 1;
    inItem = true;
  }
  if (line.includes('class="detail-category-tag"') || line.includes('class="guide-category-tag"')) {
    currentCategory = line.replace(/<[^>]+>/g, '').trim();
  }
  if (line.includes('class="detail-accordion-title"') || line.includes('class="guide-accordion-title"') || (inItem && line.includes('<h3'))) {
    currentTitle = line.replace(/<[^>]+>/g, '').trim();
    items.push({
      line: currentStart,
      category: currentCategory,
      title: currentTitle
    });
    inItem = false;
  }
  if (line.includes('Altitude Profile of Gokyo Lake Trek')) {
    console.log('End of guides section at line:', i + 1);
    break;
  }
}

console.log(`Total guides found: ${items.length}`);
items.forEach((it, idx) => {
  console.log(`${idx + 1}. [${it.category}] ${it.title} (Line ${it.line})`);
});
