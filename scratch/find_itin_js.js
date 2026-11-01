const fs = require('fs');

const jsContent = fs.readFileSync('js/trek-details.js', 'utf8');

const idx = jsContent.indexOf('itinerary');
console.log('Trek details itinerary logic:');
console.log(jsContent.slice(idx - 100, idx + 1200));
