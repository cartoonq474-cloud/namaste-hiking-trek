const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getHtmlFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;
    if (fs.statSync(fullPath).isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log('Total HTML files:', htmlFiles.length);

const occurrences = [];
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(rootDir, file);
  if (content.includes('everest-base-camp-via-gokyo-lakes') || content.includes('gokyo-lakes-and-cho-la-pass') || content.includes('Cho La Pass & Gokyo Lakes')) {
    occurrences.push(rel);
  }
});

console.log('Files with Cho La / Gokyo references:', occurrences);
