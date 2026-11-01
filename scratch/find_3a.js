const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md', 'utf8');

const pos = content.indexOf('\"itinerary_description\":\"$3a\"');
console.log('Pos of $3a:', pos);
if (pos !== -1) {
  console.log(content.slice(pos - 100, pos + 200));
}

// Find all occurrences of 3a in the file
let match;
const regex = /([0-9a-f]+):/g;
let foundHex = [];
while ((match = regex.exec(content)) !== null) {
  if (match[1] === '3a') {
    foundHex.push(match.index);
  }
}
console.log('Occurrences of 3a: count =', foundHex.length);
foundHex.forEach(idx => {
  console.log('At', idx, ':', content.slice(idx - 20, idx + 150));
});
