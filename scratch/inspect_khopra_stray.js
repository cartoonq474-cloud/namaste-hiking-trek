const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
console.log('Total lines:', lines.length);

for (let i = 5230; i < Math.min(lines.length, 5280); i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
