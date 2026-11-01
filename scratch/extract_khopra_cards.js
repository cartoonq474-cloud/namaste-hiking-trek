const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const s5 = html.indexOf('id="section-details"');
const s6 = html.indexOf('<!-- Section 6:', s5);
const block = html.substring(s5, s6);

const cardRegex = /<div class="detail-accordion-card"[^>]*data-detail-id="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

let match;
let i = 0;
while ((match = cardRegex.exec(block)) !== null) {
  i++;
  const id = match[1];
  const inner = match[2];
  
  // extract icon svg
  const iconMatch = inner.match(/<div class="detail-icon-container">([\s\S]*?)<div class="detail-check-bubble">/);
  const iconSvg = iconMatch ? iconMatch[1].trim() : 'NO_ICON';

  // extract title
  const titleMatch = inner.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : 'NO_TITLE';

  // extract content inner
  const contentMatch = inner.match(/<div class="detail-content-inner">([\s\S]*)$/);
  const content = contentMatch ? contentMatch[1].trim() : 'NO_CONTENT';

  console.log(`CARD ${i}: [${id}] - ${title} (content length: ${content.length})`);
}
console.log('Total extracted:', i);
