const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const pos = css.indexOf('itinerary-day-title-new');
console.log(css.substring(pos - 1200, pos + 1500));
