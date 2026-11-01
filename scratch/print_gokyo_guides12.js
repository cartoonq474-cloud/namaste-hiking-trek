const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-details"');
console.log('Gokyo guide 1 & 2 markup:');
console.log(gokyo.slice(sIdx, sIdx + 2500));
