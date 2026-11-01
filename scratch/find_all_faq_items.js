const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const regex = /class="[^"]*faq-item[^"]*"/gi;
let match;
let count = 0;
while ((match = regex.exec(actHtml)) !== null) {
  count++;
  const pos = match.index;
  // find closest preceding section or div id
  const prevSlice = actHtml.slice(Math.max(0, pos - 500), pos);
  const idMatch = [...prevSlice.matchAll(/id="([^"]+)"/g)].pop();
  console.log(`Match ${count} at ${pos}, preceding id: ${idMatch ? idMatch[1] : 'none'}`);
  if (count >= 10 && count <= 55) {
    // skip printing every single one
    if (count === 10) console.log('... skipping middle ...');
    continue;
  }
}
console.log('Total matches:', count);
