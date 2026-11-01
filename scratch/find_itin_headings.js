const fs = require('fs');
const html = fs.readFileSync('scratch/test_semantic_hierarchy.html', 'utf8');

const s = html.indexOf('id="section-itinerary"');
const e = html.indexOf('id="section-includes"', s);
const itinBlock = html.substring(s, e);

const hRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
console.log('--- Headings in section-itinerary ---');
while ((m = hRegex.exec(itinBlock)) !== null) {
  console.log(`[${m[1].toUpperCase()}] ${m[3].replace(/<[^>]+>/g, '').trim().substring(0, 60)}`);
}
