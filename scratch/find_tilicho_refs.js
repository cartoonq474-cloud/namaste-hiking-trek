const fs = require('fs');
const path = require('path');

function searchDir(dir, results = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchDir(fullPath, results);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('tilicho-lake-trek')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const matches = searchDir('.');
console.log('Files referencing tilicho-lake-trek:');
matches.forEach(m => console.log(' -', m));
