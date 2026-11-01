const fs = require('fs');
const content = fs.readFileSync('scratch/gen_everest_section7_12.js', 'utf8');
const lines = content.split('\n');

console.log('--- Lines 525 to 535 ---');
for (let i = 524; i < Math.min(535, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- Lines 615 to 625 ---');
for (let i = 614; i < Math.min(625, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
