const fs = require('fs');

const content = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const lines = content.split('\n');
console.log('Total lines in Manaslu:', lines.length);

lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('review') && (line.includes('<section') || line.includes('<h2') || line.includes('id=section-'))) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
