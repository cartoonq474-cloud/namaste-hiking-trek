const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sectionRegex = /<section id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
let m;
while ((m = sectionRegex.exec(gokyo)) !== null) {
  const id = m[1];
  const content = m[2];
  const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'No H2';
  console.log(`Section #${id}: "${h2}" (Length: ${content.length})`);
}
