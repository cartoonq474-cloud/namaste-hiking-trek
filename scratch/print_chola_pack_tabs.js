const fs = require('fs');
const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const packIdx = chola.indexOf('id="section-packing"');
console.log(chola.substring(packIdx, packIdx + 2500));
