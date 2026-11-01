const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actSbIdx = actHtml.indexOf('class="sidebar-booking-card"');
const ebcSbIdx = ebcHtml.indexOf('class="sidebar-booking-card"');

console.log('--- ACT after sidebar (3000 chars) ---');
console.log(actHtml.slice(actSbIdx + 2000, actSbIdx + 4500));

console.log('\n--- EBC after sidebar (3000 chars) ---');
console.log(ebcHtml.slice(ebcSbIdx + 2000, ebcSbIdx + 4500));
