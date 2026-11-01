const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const cardIndex = ebc.indexOf('itinerary-card');
console.log('itinerary-card index:', cardIndex);
if (cardIndex !== -1) {
  console.log('=== EBC FIRST ITINERARY CARD ===');
  console.log(ebc.slice(cardIndex - 100, cardIndex + 1500));
}
