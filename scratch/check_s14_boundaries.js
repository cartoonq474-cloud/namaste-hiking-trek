const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

console.log('--- Lines 4250 to 4270 (End of team-specialists and start of Section 14) ---');
console.log(lines.slice(4250, 4270).join('\n'));

console.log('\n--- Lines 4710 to 4730 (End of Section 14 and start of resources-section) ---');
console.log(lines.slice(4710, 4730).join('\n'));
