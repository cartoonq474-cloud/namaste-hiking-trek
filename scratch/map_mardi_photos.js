const fs = require('fs');

const files = fs.readdirSync('images/treks/mardi-himal').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
console.log('Total images:', files.length);

// Distribute 4 per day across 8 days
const days = 8;
for (let d = 1; d <= days; d++) {
  const dayImages = files.slice((d - 1) * 4, d * 4);
  console.log(`Day ${d} images:`, dayImages);
}
