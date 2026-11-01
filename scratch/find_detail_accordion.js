const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

let pos = 0;
while (true) {
  const idx = js.indexOf('detail-accordion', pos);
  if (idx === -1) break;
  console.log(`Match at ${idx}:`);
  console.log(js.slice(Math.max(0, idx - 50), Math.min(js.length, idx + 200)));
  console.log('---');
  pos = idx + 16;
}
