const fs = require('fs');

const text = fs.readFileSync('scratch/kanchenjunga_prompt.txt', 'utf8');
const lines = text.split('\n');

console.log('Total lines in prompt:', lines.length);

for (let i = 800; i < lines.length; i += 20) {
  console.log(`Line ${i}: ${lines[i].substring(0, 80)}`);
}
