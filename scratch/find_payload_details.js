const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

// Let's search for "Trek From Manang to Tilicho Base Camp" in content.md
const phrase = 'Trek From Manang to Tilicho Base Camp';
const pos = content.indexOf(phrase);
console.log('Position of phrase:', pos);
if (pos !== -1) {
  console.log(content.slice(pos - 100, pos + 800));
}
