const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, list = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === '.system_generated' || file === 'scratch') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath, filter, list);
    } else if (filter(file)) {
      list.push(fullPath);
    }
  }
  return list;
}

const htmlFiles = findFiles('.', f => f.endsWith('.html'));

let patterns = new Map();
let filesWithoutGroup = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<a[^>]*class="[^"]*logo-brand[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
  if (match) {
    const inner = match[1].replace(/\r?\n\s*/g, ' ').trim();
    if (!patterns.has(inner)) {
      patterns.set(inner, []);
    }
    patterns.get(inner).push(path.relative('.', file));
  } else {
    filesWithoutGroup.push(path.relative('.', file));
  }
}

console.log('Files without logo-brand anchor:', filesWithoutGroup);
console.log('Unique inner HTML patterns count:', patterns.size);
for (const [pattern, flist] of patterns.entries()) {
  console.log(`\nPattern found in ${flist.length} files:`);
  console.log('Pattern content:\n', pattern);
  console.log('Sample files:', flist.slice(0, 3));
}
