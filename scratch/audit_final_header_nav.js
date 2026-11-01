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
let totalHeaders = 0;
let withLuxuryLink = 0;
const missing = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('class="main-header"')) {
    totalHeaders++;
    const headerStart = content.indexOf('<header');
    const headerEnd = content.indexOf('</header>', headerStart);
    const headerText = content.substring(headerStart, headerEnd);
    if (headerText.includes('everest-base-camp-luxury-trek')) {
      withLuxuryLink++;
    } else {
      missing.push(f);
    }
  }
});

console.log('=== Final Header Verification ===');
console.log('Total pages with main-header:', totalHeaders);
console.log('Pages with Everest Base Camp Luxury Trek in header:', withLuxuryLink);
console.log('Missing count:', missing.length);
if (missing.length > 0) {
  console.log('Missing files:', missing);
}
