const fs = require('fs');

const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const bodyD1 = content.indexOf('<span class="day-label">Day 1:</span>');
console.log('HTML Body Day 1 snippet:');
console.log(content.slice(bodyD1 - 100, bodyD1 + 1200));
