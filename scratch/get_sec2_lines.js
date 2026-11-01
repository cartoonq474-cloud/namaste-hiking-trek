const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = content.split('\n');

let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- SECTION 2: ITINERARY -->')) {
    startLine = i + 1;
  }
  if (lines[i].includes('<!-- SECTION 3: INCLUDES & EXCLUDES -->')) {
    endLine = i + 1;
    break;
  }
}

console.log(`startLine: ${startLine}, endLine: ${endLine}`);
console.log(`Line ${startLine}: ${lines[startLine - 1]}`);
console.log(`Line ${endLine - 1}: ${lines[endLine - 2]}`);
console.log(`Line ${endLine}: ${lines[endLine - 1]}`);
