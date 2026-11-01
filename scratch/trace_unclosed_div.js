const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

let stack = [];
for (let i = 843; i < 1076; i++) {
  const line = lines[i];
  const divOpens = line.match(/<div[\s>]/gi) || [];
  const divCloses = line.match(/<\/div>/gi) || [];
  
  for (const o of divOpens) {
    stack.push({ lineNum: i + 1, line: line.trim() });
  }
  for (const c of divCloses) {
    if (stack.length > 0) {
      stack.pop();
    } else {
      console.log(`Extra close at line ${i + 1}: ${line.trim()}`);
    }
  }
}

console.log('Unclosed divs at end of slice:');
stack.forEach(s => console.log(`Line ${s.lineNum}: ${s.line}`));
