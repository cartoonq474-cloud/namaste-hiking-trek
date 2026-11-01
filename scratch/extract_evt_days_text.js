const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const regex = /Day (\d): ([^\n<]+)[\s\S]*?<div class="itinerary-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

let match;
while ((match = regex.exec(content)) !== null) {
  const dayNum = match[1];
  const dayTitle = match[2].trim();
  console.log(`=== Day ${dayNum}: ${dayTitle} ===`);
  const body = match[3];
  const pMatches = body.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];
  console.log(`Paragraphs count: ${pMatches.length}`);
  pMatches.forEach((p, idx) => {
    const text = p.replace(/<[^>]+>/g, '').trim();
    console.log(`  P${idx + 1}: ${text.slice(0, 80)}...`);
  });
}
