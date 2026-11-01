const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const start = css.indexOf('.itinerary-timeline');
console.log(css.slice(start, start + 3500));
