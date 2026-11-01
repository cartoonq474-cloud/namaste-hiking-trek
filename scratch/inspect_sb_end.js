const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('class="sidebar-booking-card"');
console.log(html.slice(622500, 623650));

