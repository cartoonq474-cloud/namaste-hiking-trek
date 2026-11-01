const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-details"');
const eIdx = gokyo.indexOf('id="section-altitude-profile"');
const details = gokyo.slice(sIdx, eIdx);

const hMatches = details.match(/<h[234][^>]*>[\s\S]*?<\/h[234]>/g) || [];
console.log('=== Gokyo Details Headings ===');
hMatches.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
