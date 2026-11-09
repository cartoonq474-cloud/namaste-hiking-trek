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

console.log(`Starting site-wide brand typography rollout across all ${prodPages.length} active pages...\n`);

let updatedCount = 0;
let errors = 0;

for (const file of prodPages) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const depth = file.split('/').length - 1;
    const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';

    // 1. Header Brand Lockup Replacement
    const headerRegex = /<a[^>]*class="logo-brand"[^>]*>[\s\S]*?<\/a>/;
    if (!headerRegex.test(content)) {
      console.error(`[FAIL] No <a class="logo-brand"> found in ${file}`);
      errors++;
      continue;
    }

    const headerBrandLockup = `<a href="${prefix}index.html" class="logo-brand" aria-label="Namaste Hiking Trek">
        <img src="${prefix}images/logo.png" alt="Namaste Hiking Trek Logo" width="52" height="52">
        <div class="logo-text-group">
          <span class="brand-title">NAMASTE</span>
          <span class="brand-subtitle">HIKING TREK</span>
        </div>
      </a>`;

    content = content.replace(headerRegex, headerBrandLockup);

    // 2. Footer Brand Harmonization
    content = content.replace('<span class="footer-logo-sub">Hiking Trek</span>', '<span class="footer-logo-sub">HIKING TREK</span>');
    content = content.replace('class="footer-logo-img" width="44" height="44"', 'class="footer-logo-img" width="46" height="46"');

    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`[${updatedCount}/${prodPages.length}] [Depth ${depth}] Brand lockup added: ${file}`);
  } catch (err) {
    console.error(`[ERROR] Failed to update ${file}:`, err.message);
    errors++;
  }
}

console.log(`\n========================================`);
console.log(`Successfully updated: ${updatedCount} pages`);
console.log(`Errors encountered:   ${errors}`);
console.log(`========================================`);
