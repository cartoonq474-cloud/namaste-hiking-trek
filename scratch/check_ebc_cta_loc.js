const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('custom-trip-cta-card') || l.includes('Not satisfied with this Itinerary')) {
    console.log(`EBC line ${i + 1}: ${l.slice(0, 100)}`);
  }
});
