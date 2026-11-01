const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const start = ebc.indexOf('<div class="itinerary-timeline">');
console.log('Distance from start:', start);
console.log(ebc.slice(start - 500, start + 300));
