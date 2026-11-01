const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-itinerary"');
console.log('Gokyo Day 1 markup:');
console.log(gokyo.slice(sIdx, sIdx + 2000));
