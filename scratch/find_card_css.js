const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const startIdx = css.indexOf('.itinerary-card {');
console.log('=== .itinerary-card styles ===');
console.log(css.slice(startIdx, startIdx + 3000));
