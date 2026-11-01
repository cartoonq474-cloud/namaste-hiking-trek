const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const hlIdx = gokyo.indexOf('Gokyo Lake Trek Highlights');
console.log('Gokyo Highlights Section:');
console.log(gokyo.slice(hlIdx - 100, hlIdx + 2000));
