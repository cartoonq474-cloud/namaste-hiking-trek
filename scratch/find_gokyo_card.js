const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const cardIndex = gokyo.indexOf('itinerary-accordion-card');
console.log('itinerary-accordion-card index:', cardIndex);
if (cardIndex !== -1) {
  console.log('=== GOKYO FIRST ITINERARY CARD ===');
  console.log(gokyo.slice(cardIndex - 50, cardIndex + 1500));
}
