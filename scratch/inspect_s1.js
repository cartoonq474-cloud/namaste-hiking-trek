const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Idx = html.indexOf('id="section-overview"');
const s2Idx = html.indexOf('id="section-itinerary"');

console.log('=== SECTION OVERVIEW (first 2500 chars) ===');
console.log(html.slice(s1Idx, s1Idx + 2500));

