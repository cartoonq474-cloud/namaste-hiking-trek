const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const sbStart = html.indexOf('sidebar-booking-card');
console.log('sbStart:', sbStart);
console.log(html.slice(sbStart - 50, sbStart + 3500));
