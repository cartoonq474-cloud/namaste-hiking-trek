const fs = require('fs');

const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const start = html.indexOf('id="section-details"');
const end = html.indexOf('id="section-altitude"');
const sectionText = html.substring(start, end);

const cardRegex = /<div class="guidance-card[^"]*"[^>]*data-guide-category="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*(?=(?:<!-- Accordion|<\/div>\s*<\/section>|<div class="guidance-card))/gi;

let match;
const cards = [];
const r = /<div class="guidance-card[\s\S]*?<\/button>\s*<div class="px-6 pb-6[\s\S]*?<\/div>\s*<\/div>/g;
const matches = sectionText.match(r) || [];
console.log('Cards matched by simple regex:', matches.length);

// Let's parse each card cleanly
const cardSplit = sectionText.split(/<!-- Accordion \d+ -->/);
console.log('Chunks by accordion comment:', cardSplit.length - 1);

for (let i = 1; i < cardSplit.length; i++) {
  const chunk = cardSplit[i];
  const catMatch = chunk.match(/data-guide-category="([^"]+)"/);
  const titleMatch = chunk.match(/<span class="w-7 h-7[^>]*>(\d+)<\/span>\s*<span>([^<]+)<\/span>/);
  
  const contentStartIdx = chunk.indexOf('class="px-6 pb-6');
  if (contentStartIdx !== -1 && titleMatch) {
    const afterOpenDiv = chunk.indexOf('>', contentStartIdx) + 1;
    // The content ends before the last two closing </div> tags in the chunk
    const lastTwoDivsIdx = chunk.lastIndexOf('</div>');
    const secondLastDivIdx = chunk.lastIndexOf('</div>', lastTwoDivsIdx - 1);
    
    let content = chunk.substring(afterOpenDiv, secondLastDivIdx).trim();
    if (i === cardSplit.length - 1 && content.endsWith('</div>')) {
      content = content.substring(0, content.lastIndexOf('</div>')).trim();
    }
    cards.push({
      num: parseInt(titleMatch[1], 10),
      category: catMatch ? catMatch[1] : 'general',
      title: titleMatch[2].trim(),
      content: content
    });
  }
}



console.log('Parsed cards count:', cards.length);
fs.writeFileSync('scratch/guidance_cards.json', JSON.stringify(cards, null, 2), 'utf8');
console.log('Categories count:');
const catCounts = {};
cards.forEach(c => {
  catCounts[c.category] = (catCounts[c.category] || 0) + 1;
});
console.log(catCounts);
