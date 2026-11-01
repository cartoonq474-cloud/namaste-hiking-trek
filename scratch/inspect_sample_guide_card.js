const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-details"');
const eIdx = mardi.indexOf('id="section-altitude-profile"');
const currentDetails = mardi.slice(sIdx, eIdx);

const firstCard = currentDetails.match(/<div class="itinerary-card"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log('Sample card currently in section-details:');
console.log(firstCard ? firstCard[0].slice(0, 800) : 'none');
