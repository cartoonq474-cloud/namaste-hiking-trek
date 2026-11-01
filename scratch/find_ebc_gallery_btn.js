const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('open-gallery-modal');
console.log('open-gallery-modal at:', sIdx);
if (sIdx !== -1) {
  console.log(ebc.slice(sIdx - 100, sIdx + 400));
}
const sIdx2 = ebc.indexOf('open-gallery-modal', sIdx + 20);
console.log('second occurrence:', sIdx2);
if (sIdx2 !== -1) {
  console.log(ebc.slice(sIdx2 - 100, sIdx2 + 400));
}
