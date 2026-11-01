const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexPath, 'utf8');
const lines = content.split('\n');

function inspectRange(start, end, label) {
  console.log(`\n=================== ${label} (Lines ${start}-${end}) ===================`);
  console.log(lines.slice(start - 1, end).join('\n'));
}

// Let's check line 3120 to 3300: how it works end & section 9 start
console.log('--- Lines around 3270-3320 ---');
console.log(lines.slice(3270, 3320).join('\n'));

// Let's check line 4250 to 4300: section 13 end & section 14 start
console.log('\n--- Lines around 4250-4300 ---');
console.log(lines.slice(4250, 4300).join('\n'));
