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
console.log('Total HTML files:', htmlFiles.length);

let logoUsages = [];
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('logo.png')) {
      logoUsages.push({ file: path.relative('.', file), line: idx + 1, text: line.trim() });
    }
  });
}

console.log('Total logo.png references in HTML:', logoUsages.length);

const types = {};
logoUsages.forEach(u => {
  let type = 'other';
  if (u.text.includes('rel="icon"')) type = 'favicon';
  else if (u.text.includes('rel="apple-touch-icon"')) type = 'apple-touch-icon';
  else if (u.text.includes('Namaste Hiking Trek Logo')) type = 'img-logo';
  types[type] = (types[type] || 0) + 1;
});
console.log('Usage breakdown:', types);

const otherList = logoUsages.filter(u => !u.text.includes('rel="icon"') && !u.text.includes('rel="apple-touch-icon"') && !u.text.includes('Namaste Hiking Trek Logo'));
if (otherList.length > 0) {
  console.log('Other references:', otherList);
}
