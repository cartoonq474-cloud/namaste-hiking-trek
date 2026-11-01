const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const forbiddenTerms = [
  'Everest Base Camp',
  'Lukla',
  'Namche Bazaar',
  'Tengboche',
  'Kala Patthar',
  'Sagarmatha'
];

forbiddenTerms.forEach(term => {
  let idx = 0;
  console.log(`=== Matches for "${term}" ===`);
  while ((idx = html.indexOf(term, idx)) !== -1) {
    const lineStart = html.lastIndexOf('\n', idx);
    const lineEnd = html.indexOf('\n', idx);
    console.log(`Line around index ${idx}:`);
    console.log(html.substring(lineStart, lineEnd).trim());
    idx += term.length;
  }
});
