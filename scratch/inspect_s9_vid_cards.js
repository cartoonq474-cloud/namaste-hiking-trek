const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

const vidMatch = s9.match(/<div id="video-reviews"[\s\S]*?(?=<div id="customer-reviews")/);
if (vidMatch) {
  const cards = vidMatch[0].match(/<div class="video-card[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
  console.log('Found video cards:', cards.length);
  cards.slice(0, 4).forEach((c, idx) => {
    console.log(`\nCard ${idx + 1}:`);
    const bg = c.match(/background-image:\s*url\('([^']+)'\)/);
    const name = c.match(/<h5>([^<]+)/);
    const role = c.match(/<span>([^<]+)/);
    console.log('  Background:', bg ? bg[1] : 'none');
    console.log('  Name:', name ? name[1].trim() : 'none');
    console.log('  Role:', role ? role[1].trim() : 'none');
  });
}
