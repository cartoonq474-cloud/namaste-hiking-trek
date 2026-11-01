const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const dayCardRegex = /<!--\s*Day\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*Day\s*\d+\s*-->|<div class="itinerary-actions|<section|<\/article|$)/gi;

let match;
while ((match = dayCardRegex.exec(html)) !== null) {
  const dayNum = parseInt(match[1]);
  const cardHtml = match[2];
  const metaMatch = cardHtml.match(/<div class="itinerary-meta-box">([\s\S]*?)<div class="itinerary-description">/i);
  if (metaMatch) {
    const text = metaMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`Day ${dayNum} full meta:`, text);
  } else {
    console.log(`Day ${dayNum} full meta: NOT FOUND`);
  }
}
