const { execSync } = require('child_process');
const orig = execSync('git show HEAD:trek/everest-three-passes-trek/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const lines = orig.split(/\r?\n/);
let depth = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const open = (line.match(/<div(\s+[^>]*)?>/gi) || []).length;
  const close = (line.match(/<\/div>/gi) || []).length;
  depth += (open - close);
  if (depth < 0) {
    console.log(`Original had depth ${depth} at line ${i + 1}: ${line}`);
    break;
  }
}
console.log('Original final depth:', depth);

