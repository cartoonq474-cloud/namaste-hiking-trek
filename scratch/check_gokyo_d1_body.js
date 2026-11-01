const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-itinerary"');
console.log('Gokyo Day 1 body part:');
console.log(gokyo.slice(sIdx + 1300, sIdx + 3000));
