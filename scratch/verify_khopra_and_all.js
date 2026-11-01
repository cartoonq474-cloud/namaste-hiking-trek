const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// Check unclosed tags or div count
const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log('Khopra div count:', { openDivs, closeDivs, diff: openDivs - closeDivs });

const openSections = (html.match(/<section(\s|>)/gi) || []).length;
const closeSections = (html.match(/<\/section>/gi) || []).length;
console.log('Khopra section count:', { openSections, closeSections, diff: openSections - closeSections });

// Check for detail-content-inner anywhere in workspace
const path = require('path');
function search(dir) {
  for (const f of fs.readdirSync(dir)) {
    if (f === '.git' || f === 'node_modules') continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) search(full);
    else if (f.endsWith('.html')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('detail-content-inner')) {
        console.log('WARNING: Found detail-content-inner in', full);
      }
    }
  }
}
search('trek');

