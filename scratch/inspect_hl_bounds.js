const fs = require('fs');

const lines = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8').split('\n');

let startHl = -1;
let endHl = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- 1B: Distinct Highlights Section -->') || lines[i].includes('class="ebc-highlights-section"')) {
    if (startHl === -1) startHl = i;
  }
  if (lines[i].includes('ebc-glance-box')) {
    endHl = i;
    break;
  }
}

console.log('Detected start line:', startHl + 1, lines[startHl]);
console.log('Glance box line:', endHl + 1, lines[endHl]);

// Print 5 lines around start and end
console.log('\n--- Start context ---');
for (let i = Math.max(0, startHl - 2); i <= startHl + 3; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}

console.log('\n--- End context (before glance box) ---');
for (let i = Math.max(0, endHl - 4); i <= endHl + 1; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
