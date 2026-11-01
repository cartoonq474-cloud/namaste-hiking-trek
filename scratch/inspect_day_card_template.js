const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const itinStart = html.indexOf('<section id="section-itinerary"');
const day1Idx = html.indexOf('class="itinerary-card', itinStart);
const day2Idx = html.indexOf('class="itinerary-card', day1Idx + 50);

console.log('day1Idx:', day1Idx, 'day2Idx:', day2Idx);
console.log(html.slice(day1Idx - 50, day2Idx));
