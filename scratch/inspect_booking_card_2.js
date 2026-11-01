const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const idx = html.indexOf('class="sidebar-booking-card"');
console.log(html.substring(idx + 1500, idx + 4000));

