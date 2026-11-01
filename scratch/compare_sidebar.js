const fs = require('fs');

const khopra = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// Find the line numbers in Khopra around 5150
const lines = khopra.split('\n');
console.log('Khopra line 5145-5155:');
for (let i = 5145; i < 5157; i++) {
  console.log(`${i}: ${lines[i]}`);
}

// In Khopra, find what opens before line 5151.
// Let's trace all opening tags from the beginning of the trek content section!
const idxOverview = khopra.indexOf('id="section-overview"');
console.log('\nKhopra section-overview index:', idxOverview);

// Print lines around section-overview
let lineOverview = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="section-overview"')) {
    lineOverview = i;
    break;
  }
}
console.log('section-overview is at line:', lineOverview);
for (let i = Math.max(0, lineOverview - 10); i < lineOverview + 15; i++) {
  console.log(`${i}: ${lines[i]}`);
}
