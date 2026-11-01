const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3 = html.indexOf('id="section-includes"');
const s4 = html.indexOf('id="section-dates"');
const sec3 = html.substring(s3, s4);

const excIdx = sec3.indexOf('What Excludes');
const card1 = sec3.indexOf('class="inc-exc-card"', excIdx);
const card2 = sec3.indexOf('class="inc-exc-card"', card1 + 1);
console.log(sec3.substring(card1, card2));

