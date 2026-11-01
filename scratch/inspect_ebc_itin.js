const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const itinMatch = ebc.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/i);
if (itinMatch) {
  console.log('Itinerary section found, length:', itinMatch[0].length);
  const days = [...itinMatch[0].matchAll(/<h[34][^>]*>(Day\s*\d+[^<]*)<\/h[34]>/gi)].map(m => m[1]);
  console.log('Days found via h3/h4:', days);
  if (days.length === 0) {
    const titles = [...itinMatch[0].matchAll(/Day\s*\d+[:\s][^<\n]+/gi)].slice(0, 15);
    console.log('Days regex:', titles.map(t => t[0]));
  }
}
