const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');
const platStart = s9.indexOf('<div id="platform-reviews"');
const platEnd = s9.indexOf('</section>');
const platHtml = s9.substring(platStart, platEnd);

const platCards = platHtml.match(/<div class="platform-review-card[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Platform review cards count in S9:', platCards.length);
platCards.slice(0, 4).forEach((c, idx) => {
  console.log(`\nPlatform Card ${idx + 1}:`);
  const h4 = c.match(/<h4>([^<]+)/);
  const user = c.match(/<div style="font-weight:700[^>]*>([^<]+)/);
  const date = c.match(/<div style="font-size:0.75rem[^>]*>([^<]+)/);
  console.log('  Headline:', h4 ? h4[1].trim() : 'none');
  console.log('  User:', user ? user[1].trim() : 'none');
  console.log('  Date:', date ? date[1].trim() : 'none');
});
