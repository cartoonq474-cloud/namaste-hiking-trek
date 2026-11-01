const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const start = gokyo.indexOf('id="section-itinerary"');
console.log(gokyo.slice(start, start + 2500));
