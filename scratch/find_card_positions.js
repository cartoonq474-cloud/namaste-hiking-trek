const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

let pos = 0;
let idx = 0;
while ((pos = html.indexOf('class="itinerary-card', pos)) !== null && pos !== -1) {
  const dayMatch = html.slice(pos, pos + 200).match(/Day\s+(\d+)/);
  console.log(`Itinerary card ${idx++} at ${pos}: ${dayMatch ? dayMatch[0] : 'Unknown'}`);
  pos += 21;
}

pos = 0;
idx = 0;
while ((pos = html.indexOf('class="detail-accordion-card"', pos)) !== null && pos !== -1) {
  const titleMatch = html.slice(pos, pos + 300).match(/<h3[^>]*>(.*?)<\/h3>/);
  console.log(`Guide card ${idx++} at ${pos}: ${titleMatch ? titleMatch[1] : 'Unknown'}`);
  pos += 30;
}
