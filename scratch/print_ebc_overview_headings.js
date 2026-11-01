const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-overview"');
const eIdx = ebc.indexOf('id="section-itinerary"');
const overviewContent = ebc.slice(sIdx, eIdx);

// Find headings in overview
const hMatches = overviewContent.match(/<h[234][^>]*>[\s\S]*?<\/h[234]>/g) || [];
console.log('=== EBC Overview Headings ===');
hMatches.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
