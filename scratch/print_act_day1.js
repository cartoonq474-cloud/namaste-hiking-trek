const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<div class="itinerary-card';
const start = act.indexOf(startTag);
const end = act.indexOf('<!-- Day 02 -->', start);
console.log(act.substring(start, end));
