const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const h1Idx = html.indexOf('<h1');
console.log('h1 index:', h1Idx);
if (h1Idx !== -1) {
  console.log(html.slice(h1Idx - 500, h1Idx + 1500));
}
