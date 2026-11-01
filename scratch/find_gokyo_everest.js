const fs = require('fs');
const html = fs.readFileSync('everest-region-treks/index.html', 'utf8');

const lines = html.split('\n');
lines.forEach((line, index) => {
  if (line.toLowerCase().includes('gokyo')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
