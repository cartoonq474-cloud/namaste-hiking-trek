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

let updated = 0;
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('class="logo-brand"') || content.includes("class='logo-brand'")) {
    const original = content;
    content = content.replace(
      /(<a[^>]*logo-brand[^>]*>[\s\S]*?<img[^>]*?)(\s+style=["']height:\s*54px;\s*width:\s*auto;\s*object-fit:\s*contain;["'])([\s\S]*?<\/a>)/i,
      '$1$3'
    );
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      updated++;
    }
  }
}

console.log(`Successfully removed inline styles from logo in ${updated} HTML files.`);
