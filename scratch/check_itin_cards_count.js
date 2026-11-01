const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const itinCards = [...html.matchAll(/class="itinerary-card/g)].length;
console.log('Total itinerary-card count:', itinCards);

// Let's list each day title in itinerary-card
const titles = [...html.matchAll(/<span class="day-label">([^<]+)<\/span>([^<]+)/g)];
console.log('Day titles:', titles.map(t => `${t[1].trim()} ${t[2].trim()}`));
