const fs = require('fs');

const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');
const lines = content.split(/\r?\n/);

console.log('=== Lines 1 to 35 ===');
for (let i = 0; i < 35; i++) console.log((i+1) + ': ' + lines[i]);

console.log('\n=== Lines 395 to 440 ===');
for (let i = 394; i < 440; i++) console.log((i+1) + ': ' + lines[i]);

console.log('\n=== Lines 620 to 680 ===');
for (let i = 620; i < 680; i++) console.log((i+1) + ': ' + lines[i]);
