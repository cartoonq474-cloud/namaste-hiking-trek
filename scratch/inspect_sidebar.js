const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sCard = html.indexOf('class="trek-booking-card"');
console.log('trek-booking-card index:', sCard);
console.log(html.substring(sCard, sCard + 1200));
