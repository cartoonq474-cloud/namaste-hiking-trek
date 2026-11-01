const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

const phrase = 'Trek From Manang to Tilicho Base Camp';
let idx = 0;
while ((idx = content.indexOf(phrase, idx)) !== -1) {
  console.log(`Match at ${idx}:`);
  console.log(content.slice(idx - 50, idx + 250));
  console.log('---');
  idx += phrase.length;
}
