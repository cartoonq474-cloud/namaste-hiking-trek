const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const startTag = '<section id="section-overview"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const overview = act.substring(start, end);
console.log('ACT Overview length:', overview.length);
console.log('First 1500 chars:\n', overview.substring(0, 1500));
