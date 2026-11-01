const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('EBC has toggle-all-itinerary:', ebc.includes('toggle-all-itinerary'));
console.log('EBC has itin-expand-all-btn:', ebc.includes('itin-expand-all-btn'));
