const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Read the parsed user days from scratch/parse_user_itinerary.js logic
// Let's compare day by day
const dayRegex = /<!--\s*Day\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*Day\s*\d+\s*-->|<div class="itinerary-actions|<section|<\/article|$)/gi;

let match;
let currentDays = {};
while ((match = dayRegex.exec(content)) !== null) {
  const dayNum = parseInt(match[1]);
  currentDays[dayNum] = match[2];
}

console.log('Found current day cards in HTML:', Object.keys(currentDays).length);

// Let's print out what the current Day 1, Day 9, Day 14 look like
for (let d = 1; d <= 14; d++) {
  const card = currentDays[d];
  if (!card) {
    console.log(`Day ${d}: NOT FOUND IN HTML`);
    continue;
  }
  
  const descMatch = card.match(/<div class="itinerary-description">([\s\S]*?)<\/div>/i);
  const descHtml = descMatch ? descMatch[1] : '';
  const pTags = descHtml.match(/<p>[\s\S]*?<\/p>/gi) || [];
  
  console.log(`\n=== Current HTML Day ${d} ===`);
  console.log(`Paragraph count: ${pTags.length}`);
  pTags.forEach((p, idx) => {
    const text = p.replace(/<[^>]+>/g, '').trim();
    console.log(`  P${idx+1}: ${text.substring(0, 80)}...`);
  });
}
