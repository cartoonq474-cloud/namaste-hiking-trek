const fs = require('fs');

const hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');

const regex = /<div class="exotic-trek-card"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;
const cardBlocks = [...hub.matchAll(/<!-- Package Card \d+ -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];

console.log('Total package cards in hub:', cardBlocks.length);
cardBlocks.forEach((c, idx) => {
  const title = (c[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) || [])[1]?.trim();
  const link = (c[0].match(/href="([^"]+)"/i) || [])[1];
  const days = (c[0].match(/(\d+\s*DAYS)/i) || [])[1];
  console.log(`Card ${idx + 1}: [${days}] "${title}" -> ${link}`);
});
