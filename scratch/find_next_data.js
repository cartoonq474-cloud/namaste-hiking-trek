const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

let pos = 0;
const indices = [];
while ((pos = content.indexOf('Jagat via Besisahar', pos)) !== -1) {
  indices.push(pos);
  pos += 19;
}
console.log('Indices of "Jagat via Besisahar":', indices);
indices.forEach((idx, i) => {
  console.log(`\n--- Match ${i} at ${idx} ---`);
  console.log(content.slice(idx, idx + 500));
});
