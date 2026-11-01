const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const match = ebc.match(/<button[^>]*expand[^>]*>[\s\S]*?<\/button>/i) || ebc.match(/itin-expand-all-btn/);
console.log('EBC expand button:', match);
if (match) {
  const idx = ebc.indexOf(match[0] || 'itin-expand-all-btn');
  console.log(ebc.slice(idx - 100, idx + 200));
}
