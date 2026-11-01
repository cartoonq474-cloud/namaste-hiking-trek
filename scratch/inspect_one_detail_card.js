const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sDetails = html.indexOf('id="section-details"');
const firstCard = html.indexOf('class="detail-accordion-card"', sDetails);
const secondCard = html.indexOf('class="detail-accordion-card"', firstCard + 1);

console.log(html.substring(firstCard, secondCard));

