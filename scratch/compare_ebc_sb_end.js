const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('class="sidebar-booking-card"');
const eIdx = ebc.indexOf('<!-- Inquiry Modal -->');

console.log(ebc.slice(eIdx - 500, eIdx));

