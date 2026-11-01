const fs = require('fs');

const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = content.split('\n');

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.includes('id="section-details"')) {
    // Look back a couple of lines for the section comment
    let s = i;
    while (s > 0 && lines[s - 1].includes('<!--')) {
      s--;
    }
    startLine = s + 1;
  }
  if (startLine !== -1 && endLine === -1 && i > startLine) {
    if (l.includes('id="section-altitude-profile"') || l.includes('<!-- SECTION 7') || l.includes('id="section-weather"')) {
      // Look back for comment before section
      let e = i;
      while (e > 0 && lines[e - 1].includes('<!--')) {
        e--;
      }
      endLine = e + 1;
      break;
    }
  }
}

console.log(`startLine: ${startLine}, endLine: ${endLine}`);
console.log(`Line ${startLine}: ${lines[startLine - 1]}`);
console.log(`Line ${startLine + 1}: ${lines[startLine]}`);
console.log(`Line ${startLine + 2}: ${lines[startLine + 1]}`);
console.log(`Line ${endLine - 2}: ${lines[endLine - 3]}`);
console.log(`Line ${endLine - 1}: ${lines[endLine - 2]}`);
console.log(`Line ${endLine}: ${lines[endLine - 1]}`);
