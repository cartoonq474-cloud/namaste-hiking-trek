const fs = require('fs');
const path = require('path');

const packagesHub = path.join(__dirname, '..', 'nepal-trekking-packages', 'index.html');
const content = fs.readFileSync(packagesHub, 'utf8');

const everestCards = [...content.matchAll(/data-region="everest"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)].map(m => {
  const title = m[0].match(/<h3[^>]*>(.*?)<\/h3>/i)?.[1];
  const link = m[0].match(/href="([^"]+)"/i)?.[1];
  return { title, link };
});

console.log('Everest cards in nepal-trekking-packages:', everestCards);
