const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
let depth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const open = (line.match(/<div(\s+[^>]*)?>/gi) || []).length;
  const close = (line.match(/<\/div>/gi) || []).length;
  
  depth += (open - close);
  if (depth < 0) {
    console.log(`Depth dropped to ${depth} at line ${i + 1}: ${line}`);
    break;
  }
}
console.log('Final depth:', depth);

