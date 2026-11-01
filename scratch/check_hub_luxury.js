const fs = require('fs');
let hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');

// Find all cards mentioning luxury
console.log('Searching for luxury in everest-region-treks/index.html...');
const lines = hub.split('\n');
lines.forEach((line, i) => {
  if (line.toLowerCase().includes('luxury')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
