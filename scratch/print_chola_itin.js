const fs = require('fs');

const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const sIdx = chola.indexOf('id="section-itinerary"');
console.log(chola.slice(sIdx, sIdx + 1500));
