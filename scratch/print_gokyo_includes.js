const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-includes"');
console.log('Gokyo Includes Section:');
console.log(gokyo.slice(sIdx, sIdx + 2000));
