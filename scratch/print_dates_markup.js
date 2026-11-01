const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<section id="section-dates"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const chunk = act.substring(start, end);
console.log(chunk.substring(0, 1500));
