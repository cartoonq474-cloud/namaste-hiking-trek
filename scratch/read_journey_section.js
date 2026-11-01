const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');

console.log('--- Lines 3995 to 4150 of index.html ---');
for (let i = 3994; i < Math.min(lines.length, 4150); i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
