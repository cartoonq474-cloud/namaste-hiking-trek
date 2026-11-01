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

function transformContent(content) {
  return content.replace(
    /(<a\s+[^>]*?class=["'][^"']*logo-brand[^"']*["'][^>]*)>([\s\S]*?)<\/a>/i,
    (match, aOpen, inner) => {
      let newAOpen = aOpen;
      if (!newAOpen.includes('aria-label')) {
        newAOpen = newAOpen + ' aria-label="Namaste Hiking Trek"';
      }
      // Remove logo-text-group div and any whitespace around it
      let newInner = inner.replace(/\s*<div\s+class=["']logo-text-group["']>[\s\S]*?<\/div>\s*/i, '\n      ');
      return `${newAOpen}>${newInner}</a>`;
    }
  );
}

const htmlFiles = findFiles('.', f => f.endsWith('.html'));

let updatedFiles = [];
let skippedFiles = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('logo-text-group')) {
    const transformed = transformContent(content);
    if (transformed !== content) {
      fs.writeFileSync(file, transformed, 'utf8');
      updatedFiles.push(path.relative('.', file));
    } else {
      console.warn('File had logo-text-group but transformation did not change content:', file);
      skippedFiles.push(path.relative('.', file));
    }
  }
}

console.log(`Updated ${updatedFiles.length} HTML files.`);
if (skippedFiles.length > 0) {
  console.log(`Skipped ${skippedFiles.length} files:`, skippedFiles);
}
