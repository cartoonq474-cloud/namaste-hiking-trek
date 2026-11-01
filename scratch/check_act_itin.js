const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<section id="section-itinerary"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const itin = act.substring(start, end);

console.log('ACT Itinerary length:', itin.length);
console.log('First 1200 chars:\n', itin.substring(0, 1200));
