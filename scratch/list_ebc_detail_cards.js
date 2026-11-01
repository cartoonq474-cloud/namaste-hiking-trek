const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const pos = ebc.indexOf('detail-accordion-card');
const end = ebc.indexOf('</section>', pos);
const block = ebc.substring(pos, end);

const cardRegex = /<div class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g;
let match;
let count = 0;
while ((match = cardRegex.exec(block)) !== null) {
  count++;
  console.log(`${count}. [${match[1]}] ${match[2].trim()}`);
}
