const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const matches = [...html.matchAll(/<div class="customer-review-card platform-review-item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('Total platform review items:', matches.length);

matches.forEach((m, i) => {
  const pMatch = m[0].match(/data-platform="([^"]+)"/);
  const nMatch = m[0].match(/<span class="reviewer-name">([^<]+)<\/span>/);
  const tMatch = m[0].match(/<h3 class="review-heading-title">([^<]+)<\/h3>/);
  console.log(`Item ${i+1}: platform=${pMatch ? pMatch[1] : ''}, name=${nMatch ? nMatch[1] : ''}, title=${tMatch ? tMatch[1] : ''}`);
});
