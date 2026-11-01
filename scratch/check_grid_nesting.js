const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const gridStart = actHtml.indexOf('grid-template-columns: 2.2fr 1fr');
const gridSlice = actHtml.slice(gridStart - 100, gridStart + 30000);

const sbStart = actHtml.indexOf('class="sidebar-booking-card"');
const beforeSb = actHtml.slice(gridStart, sbStart);

const openDivsBeforeSb = (beforeSb.match(/<div(\s|>)/gi) || []).length;
const closeDivsBeforeSb = (beforeSb.match(/<\/div>/gi) || []).length;

console.log('Inside 2-column grid before sidebar-booking-card:');
console.log('Open divs:', openDivsBeforeSb, 'Close divs:', closeDivsBeforeSb, 'Diff:', openDivsBeforeSb - closeDivsBeforeSb);
