const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const s5 = html.indexOf('id="section-details"');
const s6 = html.indexOf('<!-- Section 6:', s5);
const block = html.substring(s5, s6);

const cardRegex = /<div class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g;
let match;
let count = 0;
while ((match = cardRegex.exec(block)) !== null) {
  count++;
  console.log(`${count}. [${match[1]}] ${match[2].trim()}`);
}
