const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-overview"');
const eIdx = gokyo.indexOf('id="section-itinerary"');
const overview = gokyo.slice(sIdx, eIdx);

// Look for headings in Gokyo overview
const hMatches = overview.match(/<h[234][^>]*>[\s\S]*?<\/h[234]>/g) || [];
console.log('=== Gokyo Overview Headings ===');
hMatches.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
