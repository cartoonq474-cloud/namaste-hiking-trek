const fs = require('fs');
const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const idx = html.indexOf('class="itinerary-content"');
console.log('Mardi day 1 content snippet:');
console.log(html.substring(idx, idx + 1500));
