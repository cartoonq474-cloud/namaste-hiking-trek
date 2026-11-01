const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

console.log('=== Section 9 snippet (lines 3284-3340) ===');
console.log(lines.slice(3283, 3340).join('\n'));

console.log('\n=== Section 14 snippet (lines 4262-4300) ===');
console.log(lines.slice(4261, 4300).join('\n'));
