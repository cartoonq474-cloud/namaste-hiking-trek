const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const pos = ebcHtml.indexOf('class="sidebar-booking-card"');
console.log('--- EBC PARENT OF SIDEBAR ---');
console.log(ebcHtml.slice(pos - 200, pos + 50));
