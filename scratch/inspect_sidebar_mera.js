const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const cardIdx = html.indexOf('class="sidebar-booking-card"');
console.log(html.slice(cardIdx, cardIdx + 1500));
