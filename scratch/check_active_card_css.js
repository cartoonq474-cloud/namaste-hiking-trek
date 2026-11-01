const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

console.log('has .itinerary-card.active .itinerary-content:', css.includes('.itinerary-card.active .itinerary-content'));

// Look for .itinerary-card.active
const idx = css.indexOf('.itinerary-card.active');
console.log(css.slice(idx, idx + 800));
