const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mainEnd = ebc.indexOf('</main>');
const chunk = ebc.slice(mainEnd - 8000, mainEnd);

console.log('--- Sections near end of EBC main ---');
const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let m;
while ((m = regex.exec(chunk)) !== null) {
  console.log('Section ID:', m[1]);
}

// Check Consultation card
const cardIdx = chunk.indexOf('wa.me/9779800000000');
if (cardIdx !== -1) {
  const start = chunk.lastIndexOf('<section', cardIdx);
  const end = chunk.indexOf('</section>', cardIdx) + 10;
  console.log('\n--- Consultation Card/Section ---');
  console.log(chunk.slice(start, end));
}
