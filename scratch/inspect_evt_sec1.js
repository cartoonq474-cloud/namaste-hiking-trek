const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<section id="section-overview"');
const eIdx = evt.indexOf('</section>', sIdx) + 10;
console.log('EVT Section 1 full length:', eIdx - sIdx);

const sec1 = evt.slice(sIdx, eIdx);
const hMatches = sec1.match(/<h[2-4][^>]*>[\s\S]*?<\/h[2-4]>/gi) || [];
console.log('EVT Section 1 Headings:');
hMatches.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
