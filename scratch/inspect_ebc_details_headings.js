const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-details"');
const eIdx = ebc.indexOf('id="section-altitude-profile"');
const details = ebc.slice(sIdx, eIdx);

const hMatches = details.match(/<h[234][^>]*>[\s\S]*?<\/h[234]>/g) || [];
console.log('=== EBC Details Headings (first 30) ===');
hMatches.slice(0, 30).forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
