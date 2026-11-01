const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = html.indexOf('id="section-details"');
const eIdx = html.indexOf('id="section-altitude"', sIdx);
const detailsBlock = html.substring(sIdx, eIdx !== -1 ? eIdx : sIdx + 50000);

const hRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
let m;
console.log('--- Headings in #section-details ---');
while ((m = hRegex.exec(detailsBlock)) !== null) {
  console.log(`[${m[1].toUpperCase()}] ${m[3].replace(/<[^>]+>/g, '').trim().substring(0, 60)}`);
}
