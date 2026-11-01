const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const start = ebc.indexOf('<div class="itinerary-card active">');
const nextCard = ebc.indexOf('<div class="itinerary-card', start + 50);

console.log('=== FULL EBC DAY 1 CARD (length: ' + (nextCard - start) + ') ===');
console.log(ebc.slice(start, nextCard));
