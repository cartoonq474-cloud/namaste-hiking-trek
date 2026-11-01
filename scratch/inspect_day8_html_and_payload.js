const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

console.log('--- Rendered HTML snippet around 256080 ---');
console.log(content.slice(256000, 258500));

console.log('\n--- Search for 3a: ---');
const idx3a = content.indexOf('3a:"');
console.log('Index of 3a:" is', idx3a);
if (idx3a !== -1) {
  console.log(content.slice(idx3a, idx3a + 800));
}

const idx3a2 = content.indexOf('"3a"');
console.log('Index of "3a" is', idx3a2);
if (idx3a2 !== -1) {
  console.log(content.slice(idx3a2 - 50, idx3a2 + 800));
}
