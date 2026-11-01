const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const start = css.indexOf('.itinerary-day-title-new');
console.log(css.slice(start - 50, start + 2500));
