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
console.log(`Auditing ${htmlFiles.length} HTML files for header nav update...`);

let updatedCount = 0;
let skippedCount = 0;
let alreadyPresentCount = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if header nav has tab-everest
  const tabEverestIdx = content.indexOf('id="tab-everest"');
  if (tabEverestIdx === -1) {
    skippedCount++;
    return;
  }

  // Check if already present in header
  const headerStart = content.indexOf('<header');
  const headerEnd = content.indexOf('</header>', headerStart);
  if (headerStart !== -1 && headerEnd !== -1) {
    const headerHtml = content.substring(headerStart, headerEnd);
    if (headerHtml.includes('everest-base-camp-luxury-trek')) {
      alreadyPresentCount++;
      return;
    }
  }

  let modified = false;

  // 1. Update tab-everest in mega menu
  // Match High Expedition and EBC link
  const ebcRegex = /(<div\s+class="mega-col-title">\s*High Expedition\s*<\/div>\s*<a\s+href="([^"]*trek\/everest-base-camp-trek\/)"\s+class="mega-trek-link">\s*<span>Everest Base Camp Trek<\/span>\s*<span class="days-badge">14 DAYS<\/span>\s*<\/a>)/i;

  const tabEverestSnippet = content.substring(tabEverestIdx, tabEverestIdx + 1200);
  const match = tabEverestSnippet.match(ebcRegex);

  if (match) {
    const fullMatchedStr = match[1];
    const prefix = match[2].replace('trek/everest-base-camp-trek/', '');
    const replacement = `${fullMatchedStr}
                        <a href="${prefix}trek/everest-base-camp-luxury-trek/" class="mega-trek-link"><span>Everest Base Camp Luxury Trek</span> <span class="days-badge">12 DAYS</span></a>`;

    content = content.replace(fullMatchedStr, replacement);
    modified = true;
  } else {
    console.warn(`WARNING: Could not match EBC link inside tab-everest in ${file}`);
  }

  // 2. Update mobile-accordion-menu if present
  if (content.includes('class="mobile-accordion-menu"')) {
    const mobRegex = /(<a\s+href="([^"]*trek\/everest-base-camp-trek\/)"\s+class="nav-dropdown-link">\s*<span>Everest Base Camp Trek<\/span>\s*<span class="days-badge">14 DAYS<\/span>\s*<\/a>)/i;
    const mobMatch = content.match(mobRegex);
    if (mobMatch) {
      const mobFullMatch = mobMatch[1];
      const prefix = mobMatch[2].replace('trek/everest-base-camp-trek/', '');
      const mobReplacement = `${mobFullMatch}
              <a href="${prefix}trek/everest-base-camp-luxury-trek/" class="nav-dropdown-link"><span>Everest Base Camp Luxury Trek</span> <span class="days-badge">12 DAYS</span></a>`;
      content = content.replace(mobFullMatch, mobReplacement);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
});

console.log(`\n=== Update Complete ===`);
console.log(`Successfully updated: ${updatedCount} files`);
console.log(`Already present: ${alreadyPresentCount} files`);
console.log(`Skipped (no tab-everest): ${skippedCount} files`);
