const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    if (['scratch', '.git', 'node_modules'].includes(file)) continue;
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results.push(...getHtmlFiles(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = getHtmlFiles('.').map(f => path.relative('.', f).split(path.sep).join('/'));
const prodPages = allFiles.filter(f => !f.startsWith('team images/') && !fs.readFileSync(f, 'utf8').includes('http-equiv="refresh"'));

let errors = 0;
prodPages.forEach(file => {
  const p = path.join(__dirname, '..', file);
  if (!fs.existsSync(p)) {
    console.error(`File missing: ${file}`);
    errors++;
    return;
  }
  const html = fs.readFileSync(p, 'utf8');
  
  // Check that recommended strip is present
  if (!html.includes('footer-recommended-strip')) {
    console.error(`Missing footer-recommended-strip in ${file}`);
    errors++;
  }
  
  // Check footer tags
  const openFooters = (html.match(/<footer\b/gi) || []).length;
  const closeFooters = (html.match(/<\/footer>/gi) || []).length;
  if (openFooters !== closeFooters || openFooters !== 1) {
    console.error(`Mismatched footer tags in ${file}: open=${openFooters}, close=${closeFooters}`);
    errors++;
  }

  // Check section tags
  const openSections = (html.match(/<section\b/gi) || []).length;
  const closeSections = (html.match(/<\/section>/gi) || []).length;
  if (openSections !== closeSections) {
    console.error(`Mismatched section tags in ${file}: open=${openSections}, close=${closeSections}`);
    errors++;
  }
});

if (errors === 0) {
  console.log(`DOM Tag Verification: PASSED on all ${prodPages.length} production pages! Zero errors.`);
} else {
  console.error(`DOM Tag Verification FAILED with ${errors} errors.`);
  process.exit(1);
}
