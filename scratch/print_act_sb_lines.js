const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const actSbStart = actHtml.indexOf('class="sidebar-booking-card"');
// Let's print 120 lines from actSbStart
const sbLines = actHtml.slice(actSbStart).split('\n').slice(0, 150);
console.log('--- ACT Sidebar and following lines (first 150 lines) ---');
sbLines.forEach((l, i) => console.log(`${i}: ${l}`));
