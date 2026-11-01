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

let matched = [];
let unmatched = [];

// Regular expression to match the logo-brand anchor and its inner content
// We want to remove the .logo-text-group and add aria-label="Namaste Hiking Trek" to the <a> tag
const regex = /<a(\s+[^>]*?class=["'][^"']*logo-brand[^"']*["'][^>]*)>([\s\S]*?)<\/a>/i;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('logo-text-group')) {
    const m = content.match(regex);
    if (m) {
      matched.push({ file: path.relative('.', file), aAttrs: m[1], inner: m[2] });
    } else {
      unmatched.push(path.relative('.', file));
    }
  }
}

console.log('Files with logo-text-group:', matched.length + unmatched.length);
console.log('Matched by regex:', matched.length);
console.log('Unmatched:', unmatched);

if (matched.length > 0) {
  console.log('\nSample match 1 (root):', matched[0].file);
  console.log('Anchor attrs:', matched[0].aAttrs);
  console.log('Inner before:\n', matched[0].inner);
}
