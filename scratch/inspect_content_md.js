const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

console.log('Snippet from start:');
console.log(content.slice(0, 500));

// Find positions of "Tilicho"
let idx = 0;
let count = 0;
while ((idx = content.indexOf('Tilicho', idx)) !== -1 && count < 10) {
  console.log(`Found Tilicho at ${idx}:`);
  console.log(content.slice(Math.max(0, idx - 50), idx + 100));
  idx += 7;
  count++;
}
