const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const lines = content.split('\n');
console.log('Total lines in EBC:', lines.length);

lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('review') && (line.includes('<section') || line.includes('<h2') || line.includes('id=') || line.includes('class="'))) {
    if (line.includes('<section') || line.includes('<h2') || line.includes('id=')) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  }
});
