const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-itinerary"');
const tIdx = ebc.indexOf('<div class="itinerary-timeline">', sIdx);
console.log(ebc.slice(sIdx, tIdx));
