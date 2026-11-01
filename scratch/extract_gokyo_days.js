const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Match each day block
const dayRegex = /<div class="itinerary-accordion-card[^"]*" data-day="(\d+)">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

let match;
let count = 0;
while ((match = dayRegex.exec(gokyo)) !== null) {
  count++;
  const dayNum = match[1];
  const block = match[2];
  
  const titleMatch = block.match(/<h3 class="itinerary-title">([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : 'No title';
  
  console.log(`Day ${dayNum}: ${title}`);
}
console.log('Total days found:', count);
