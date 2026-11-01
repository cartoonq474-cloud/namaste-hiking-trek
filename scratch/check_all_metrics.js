const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const dayCardRegex = /<!--\s*Day\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*Day\s*\d+\s*-->|<div class="itinerary-actions|<section|<\/article|$)/gi;

let match;
while ((match = dayCardRegex.exec(html)) !== null) {
  const dayNum = parseInt(match[1]);
  const cardHtml = match[2];
  const metricsMatch = cardHtml.match(/<div class="itinerary-metrics-list">([\s\S]*?)<div class="itinerary-meta-box">/i);
  if (metricsMatch) {
    const text = metricsMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`Day ${dayNum} metrics:`, text);
  } else {
    console.log(`Day ${dayNum} metrics: NOT FOUND`);
  }
}
