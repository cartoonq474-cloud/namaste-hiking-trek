const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('<main');
console.log('Gokyo main to section-overview:');
console.log(gokyo.slice(sIdx, sIdx + 1500));
