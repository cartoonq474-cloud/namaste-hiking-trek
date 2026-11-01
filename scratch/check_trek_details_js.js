const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('trek-details.js length:', js.length);
console.log('Includes itinerary:', js.includes('itinerary'));
console.log('Includes faq:', js.includes('faq'));
console.log('Includes detail-accordion:', js.includes('detail-accordion'));
console.log('Includes itin-expand-all:', js.includes('itin-expand-all'));
