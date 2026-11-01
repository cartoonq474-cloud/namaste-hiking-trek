const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-overview"');
const eIdx = gokyo.indexOf('id="section-itinerary"');
console.log('Gokyo overview length:', eIdx - sIdx);
console.log('Gokyo overview first 3000 chars:');
console.log(gokyo.slice(sIdx, sIdx + 3000));
