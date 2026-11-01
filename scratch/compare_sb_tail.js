const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actSbIdx = actHtml.indexOf('class="sidebar-booking-card"');
const ebcSbIdx = ebcHtml.indexOf('class="sidebar-booking-card"');

console.log('--- ACT end of sidebar after 5 bullets ---');
console.log(actHtml.slice(actSbIdx + 4500, actSbIdx + 7000));

console.log('\n--- EBC end of sidebar after 5 bullets ---');
console.log(ebcHtml.slice(ebcSbIdx + 4500, ebcSbIdx + 7000));
