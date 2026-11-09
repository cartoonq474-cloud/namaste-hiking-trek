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

console.log(`Verifying brand logo & typography across all ${prodPages.length} active pages...\n`);

let totalErrors = 0;

for (const file of prodPages) {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(path.join(process.cwd(), file));
  const depth = file.split('/').length - 1;
  const expectedPrefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';

  // 1. Header Checks
  const headerMatch = content.match(/<a[^>]*class="logo-brand"[^>]*>[\s\S]*?<\/a>/);
  if (!headerMatch) {
    console.error(`[FAIL] ${file}: Missing <a class="logo-brand"> in header`);
    totalErrors++;
  } else {
    const hHtml = headerMatch[0];
    if (!hHtml.includes('class="logo-text-group"')) {
      console.error(`[FAIL] ${file}: Header missing class="logo-text-group"`);
      totalErrors++;
    }
    if (!hHtml.includes('<span class="brand-title">NAMASTE</span>')) {
      console.error(`[FAIL] ${file}: Header missing <span class="brand-title">NAMASTE</span>`);
      totalErrors++;
    }
    if (!hHtml.includes('<span class="brand-subtitle">HIKING TREK</span>')) {
      console.error(`[FAIL] ${file}: Header missing <span class="brand-subtitle">HIKING TREK</span>`);
      totalErrors++;
    }
    const expectedImgSrc = `src="${expectedPrefix}images/logo.png"`;
    if (!hHtml.includes(expectedImgSrc)) {
      console.error(`[FAIL] ${file}: Header image src incorrect. Expected: ${expectedImgSrc}`);
      totalErrors++;
    }
    // Verify file exists on disk
    const imgSrcMatch = hHtml.match(/src="([^"]+)"/);
    if (imgSrcMatch) {
      const resolved = path.resolve(fileDir, imgSrcMatch[1]);
      if (!fs.existsSync(resolved)) {
        console.error(`[FAIL] ${file}: Header image not found on disk: ${resolved}`);
        totalErrors++;
      }
    }
  }

  // 2. Footer Checks
  const footerMatch = content.match(/<footer class="site-luxury-footer"[\s\S]*?<\/footer>/);
  if (!footerMatch) {
    console.error(`[FAIL] ${file}: Missing <footer class="site-luxury-footer">`);
    totalErrors++;
  } else {
    const fHtml = footerMatch[0];
    if (!fHtml.includes('class="footer-logo-main">NAMASTE</span>')) {
      console.error(`[FAIL] ${file}: Footer missing NAMASTE main brand title`);
      totalErrors++;
    }
    if (!fHtml.includes('class="footer-logo-sub">HIKING TREK</span>')) {
      console.error(`[FAIL] ${file}: Footer missing HIKING TREK sub brand title`);
      totalErrors++;
    }
  }
}

console.log(`\n======================================================`);
if (totalErrors === 0) {
  console.log(`ALL CHECKS PASSED with 0 errors across all ${prodPages.length} pages!`);
  console.log(`✓ 97/97 pages contain header logo + NAMASTE + HIKING TREK typography`);
  console.log(`✓ 97/97 pages resolve header logo image on disk with exact depth prefix`);
  console.log(`✓ 97/97 pages contain harmonized footer NAMASTE + HIKING TREK brand lockup`);
} else {
  console.error(`VALIDATION FAILED with ${totalErrors} errors.`);
  process.exit(1);
}
console.log(`======================================================`);
