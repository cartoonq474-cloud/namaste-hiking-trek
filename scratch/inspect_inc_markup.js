const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const incStart = html.indexOf('<section id="section-includes"');
const datesStart = html.indexOf('<section id="section-dates"');

const snippet = html.slice(incStart, datesStart);
const cardIdx = snippet.indexOf('class="inc-exc-card"');
console.log(snippet.slice(cardIdx, cardIdx + 800));
