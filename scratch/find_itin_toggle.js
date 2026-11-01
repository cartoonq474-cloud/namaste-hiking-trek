const fs = require('fs');

const jsContent = fs.readFileSync('js/trek-details.js', 'utf8');

const matches = [...jsContent.matchAll(/function\s+([a-zA-Z0-9_]+)/g)].map(m => m[1]);
console.log('Functions in trek-details.js:', matches);

const cardIdx = jsContent.indexOf('itinerary-header');
console.log('Snippet around itinerary-header:');
console.log(jsContent.slice(Math.max(0, cardIdx - 200), cardIdx + 1000));
