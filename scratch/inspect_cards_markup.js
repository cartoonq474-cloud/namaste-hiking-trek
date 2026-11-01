const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const sec3 = html.substring(s3, s4);

const firstCard = sec3.indexOf('class="inc-exc-card"');
const secondCard = sec3.indexOf('class="inc-exc-card"', firstCard + 1);
console.log('First card:');
console.log(sec3.substring(firstCard, secondCard));

const excStart = sec3.indexOf('What’s Not Included');
const firstExcCard = sec3.indexOf('class="inc-exc-card"', excStart);
const secondExcCard = sec3.indexOf('class="inc-exc-card"', firstExcCard + 1);
console.log('First exclude card:');
console.log(sec3.substring(firstExcCard, secondExcCard));

