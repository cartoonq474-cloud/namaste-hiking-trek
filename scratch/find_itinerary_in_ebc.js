const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id="itinerary"') || l.includes('itinerary-day-title-new') || l.includes('itinerary-photo-wrapper') || l.includes('itinerary-card')) {
    console.log(`${i + 1}: ${l.slice(0, 80).trim()}`);
  }
});
