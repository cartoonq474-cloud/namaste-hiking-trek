const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const sbStart = ebc.indexOf('class="sidebar-booking-card"');
console.log(ebc.substring(sbStart - 100, sbStart + 2200));
