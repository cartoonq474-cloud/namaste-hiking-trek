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
let tabEverestMatches = 0;
let mobileMatches = 0;
const issues = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('id="tab-everest"')) {
    tabEverestMatches++;
    // Check if we can find the EBC link in tab-everest
    const ebcMegaRegex = /<a\s+href="([^"]*trek\/everest-base-camp-trek\/)"\s+class="mega-trek-link">\s*<span>Everest Base Camp Trek<\/span>\s*<span class="days-badge">14 DAYS<\/span>\s*<\/a>/i;
    const match = content.match(ebcMegaRegex);
    if (!match) {
      issues.push(`Mega match failed in ${file}`);
    }

    // Check mobile accordion
    const mobileRegex = /<a\s+href="([^"]*trek\/everest-base-camp-trek\/)"\s+class="nav-dropdown-link">\s*<span>Everest Base Camp Trek<\/span>\s*<span class="days-badge">14 DAYS<\/span>\s*<\/a>/i;
    const mobMatch = content.match(mobileRegex);
    if (mobMatch) {
      mobileMatches++;
    }
  }
});

console.log('Files with tab-everest:', tabEverestMatches);
console.log('Mobile matches found:', mobileMatches);
console.log('Issues count:', issues.length);
if (issues.length > 0) {
  console.log('Sample issues:', issues.slice(0, 5));
}
