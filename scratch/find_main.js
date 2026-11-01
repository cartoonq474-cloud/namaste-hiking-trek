const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

console.log('Open <main> count:', (html.match(/<main/g) || []).length);
console.log('Close </main> count:', (html.match(/<\/main>/g) || []).length);

let idx = 0;
while ((idx = html.indexOf('</main>', idx)) !== -1) {
  console.log('Close </main> at index:', idx);
  console.log(html.substring(idx - 100, idx + 50));
  idx += 7;
}
