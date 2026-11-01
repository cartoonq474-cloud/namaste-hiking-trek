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
console.log('Total HTML files found:', htmlFiles.length);

const filesWithTabEverest = [];
const filesWithHeader = [];

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('id="tab-everest"')) {
    filesWithTabEverest.push(f);
  }
  if (content.includes('class="main-header"')) {
    filesWithHeader.push(f);
  }
}

console.log('Files with id="tab-everest":', filesWithTabEverest.length);
console.log('Files with class="main-header":', filesWithHeader.length);

console.log('\nSample files with tab-everest:');
filesWithTabEverest.slice(0, 15).forEach(f => console.log(' -', f));
