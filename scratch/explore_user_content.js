const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

console.log('Total characters:', content.length);

// Let's find lines that look like major headers or sections
const lines = content.split(/\r?\n/);
console.log('Total lines:', lines.length);

console.log('--- First 100 lines ---');
for (let i = 0; i < Math.min(100, lines.length); i++) {
  if (lines[i].trim().length > 0 && lines[i].length < 80) {
    console.log(`L${i+1}: ${lines[i]}`);
  }
}

