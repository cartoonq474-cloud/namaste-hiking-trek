const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const cards = [...html.matchAll(/<div class="exotic-trek-card"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
cards.slice(0, 10).forEach((c, i) => {
  console.log(`\n--- EXOTIC CARD ${i+1} ---`);
  console.log(c[0].slice(0, 400));
});
