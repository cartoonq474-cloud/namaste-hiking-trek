const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (item === 'node_modules' || item === '.git' || item === 'scratch') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getHtmlFiles('.');
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (!c.includes('id="tab-everest"')) {
    console.log('Skipped file:', f);
  }
});
