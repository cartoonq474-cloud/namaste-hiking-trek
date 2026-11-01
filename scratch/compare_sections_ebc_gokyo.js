const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

function getSections(html) {
  const matches = [];
  const regex = /<section\s+id="([^"]+)"[^>]*class="([^"]*)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    matches.push({ id: m[1], class: m[2], index: m.index });
  }
  return matches;
}

console.log('=== EBC SECTIONS ===');
console.log(getSections(ebc));

console.log('\n=== GOKYO SECTIONS ===');
console.log(getSections(gokyo));
