const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === '.git' || file === 'node_modules' || file === 'scratch') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles('.');
console.log(`Auditing ${htmlFiles.length} HTML files for trek image references...`);

let totalRefs = 0;
let brokenRefs = 0;
const pageBreakdown = {};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match any src or content attribute containing images/treks/
  const matches = [...content.matchAll(/(?:src|content)=["']([^"']*images\/treks\/[^"']*)["']/gi)];
  if (matches.length > 0) {
    pageBreakdown[file] = [];
    matches.forEach(m => {
      totalRefs++;
      const rawUrl = m[1];
      // Resolve path on disk relative to HTML file directory
      let diskPath;
      if (rawUrl.startsWith('http')) {
        // e.g. https://namastehikingtrek.com/images/treks/...
        const rel = rawUrl.replace(/^https?:\/\/[^\/]+\//, '');
        diskPath = path.resolve('.', rel);
      } else {
        diskPath = path.resolve(path.dirname(file), rawUrl);
      }

      const exists = fs.existsSync(diskPath);
      if (!exists) {
        console.error(`[BROKEN] File: ${file} -> Ref: ${rawUrl} (Resolved: ${diskPath})`);
        brokenRefs++;
        pageBreakdown[file].push({ url: rawUrl, status: 'MISSING' });
      } else {
        pageBreakdown[file].push({ url: rawUrl, status: 'OK' });
      }
    });
  }
});

console.log('\n================ AUDIT SUMMARY ================');
console.log(`Total HTML files with authentic trek images: ${Object.keys(pageBreakdown).length}`);
console.log(`Total image references verified: ${totalRefs}`);
console.log(`Broken / 404 references: ${brokenRefs}`);
console.log('================================================\n');

Object.keys(pageBreakdown).forEach(file => {
  const okCount = pageBreakdown[file].filter(x => x.status === 'OK').length;
  const missingCount = pageBreakdown[file].filter(x => x.status === 'MISSING').length;
  console.log(`✓ ${file}: ${okCount} valid references${missingCount > 0 ? ` (${missingCount} MISSING!)` : ''}`);
});
