const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Print all destination ticker cards
console.log('=== DESTINATION TICKER CARDS ===');
const destCards = [...html.matchAll(/<div class="dest-package-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
destCards.forEach((c, i) => {
  const title = c[1].match(/<h4[^>]*>([\s\S]*?)<\/h4>/i) || c[1].match(/class="dest-title"[^>]*>([\s\S]*?)<\/span>/i);
  const img = c[1].match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/i) ||
              c[1].match(/<img[^>]+alt=["']([^"']*)["'][^>]*src=["']([^"']+)["']/i);
  console.log(`[Dest ${i+1}] Title: ${title ? title[1].replace(/<[^>]+>/g, '').trim() : 'Unknown'} | Img: ${img ? img[1] : ''} | Alt: ${img ? img[2] : ''}`);
});

// Print all Activity Cards
console.log('\n=== ACTIVITY CARDS ===');
const actCards = [...html.matchAll(/<div class="act-package-card">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
actCards.forEach((c, i) => {
  const title = c[1].match(/<h4[^>]*>([\s\S]*?)<\/h4>/i) || c[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const img = c[1].match(/<img[^>]+src=["']([^"']+)["']/i);
  console.log(`[Act ${i+1}] Title: ${title ? title[1].replace(/<[^>]+>/g, '').trim() : 'Unknown'} | Img: ${img ? img[1] : ''}`);
});

// Print all Exotic Trek Cards
console.log('\n=== EXOTIC TREK CARDS ===');
const exoticCards = [...html.matchAll(/<div class="exotic-trek-card"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
exoticCards.forEach((c, i) => {
  const title = c[1].match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) || c[1].match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
  const img = c[1].match(/<img[^>]+src=["']([^"']+)["']/i);
  console.log(`[Exotic ${i+1}] Title: ${title ? title[1].replace(/<[^>]+>/g, '').trim() : 'Unknown'} | Img: ${img ? img[1] : ''}`);
});
