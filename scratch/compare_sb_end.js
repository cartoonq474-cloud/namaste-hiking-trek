const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actSbIdx = actHtml.indexOf('class="sidebar-booking-card"');
const ebcSbIdx = ebcHtml.indexOf('class="sidebar-booking-card"');

console.log('--- ACT end of sidebar (last 1500 chars around sidebar end) ---');
console.log(actHtml.slice(actSbIdx + 3000, actSbIdx + 5000));

console.log('\n--- EBC end of sidebar (last 1500 chars around sidebar end) ---');
console.log(ebcHtml.slice(ebcSbIdx + 3000, ebcSbIdx + 5000));
