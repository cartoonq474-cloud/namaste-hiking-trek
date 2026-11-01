const fs = require('fs');
const path = require('path');

function findFiles(dir, matchName, results = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item.startsWith('.')) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item.includes(matchName)) {
        results.push({ type: 'dir', path: fullPath });
      }
      findFiles(fullPath, matchName, results);
    } else {
      if (item.includes(matchName)) {
        results.push({ type: 'file', path: fullPath });
      }
    }
  }
  return results;
}

console.log('Searching for "everest-base-camp":');
console.log(findFiles('.', 'everest-base-camp'));

console.log('\nAll HTML files in root:');
fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(f => console.log(' ', f));
