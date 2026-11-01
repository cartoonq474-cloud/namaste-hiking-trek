const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = content.split('\n');
console.log('EBC Day 4 lines:');
console.log(lines.slice(2095, 2190).join('\n'));
