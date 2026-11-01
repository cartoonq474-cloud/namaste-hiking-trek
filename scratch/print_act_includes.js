const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const startTag = '<section id="section-includes"';
const start = act.indexOf(startTag);
console.log(act.substring(start, start + 1200));
