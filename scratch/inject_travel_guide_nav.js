const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');
console.log('Checking ' + files.length + ' HTML files...');

let updatedHeaderCount = 0;
let updatedFooterCount = 0;
let alreadyHasTravelGuideCount = 0;
let skippedFiles = [];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative('.', filePath).replace(/\\/g, '/');

  // Skip travel-info.html because it's a redirect page now
  if (relPath === 'travel-info.html') return;

  // Determine relPrefix based on slash depth
  const depth = (relPath.match(/\//g) || []).length;
  let relPrefix = '';
  if (depth === 1) relPrefix = '../';
  if (depth === 2) relPrefix = '../../';

  let modified = false;

  // 1. Check if header exists in content
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/);
  if (headerMatch) {
    const headerContent = headerMatch[0];
    if (headerContent.includes('nepal-travel-guide')) {
      alreadyHasTravelGuideCount++;
    } else {
      // Need to inject Travel Guide dropdown into header
      let travelGuideSnippet = '';

      if (relPath === 'index.html') {
        travelGuideSnippet = `
          <!-- Travel Guide Dropdown -->
          <li class="nav-item-dropdown">
            <div class="nav-link-row">
              <a href="nepal-travel-guide/" class="nav-link">Travel Guide <span class="nav-link-arrow-desktop">▾</span></a>
              <button type="button" class="mobile-dropdown-arrow" aria-label="Toggle Travel Guide submenu">▾</button>
            </div>
            <div class="nav-dropdown-menu">
              <a href="nepal-visa/" class="nav-dropdown-link">Nepal Visa</a>
              <a href="equipment-checklist/" class="nav-dropdown-link">Equipment Checklist</a>
              <a href="travel-insurance/" class="nav-dropdown-link">Travel Insurance</a>
              <a href="recommended-medical-kit/" class="nav-dropdown-link">Recommended Medical Kit</a>
            </div>
          </li>
`;
      } else {
        travelGuideSnippet = `
          <!-- Travel Guide Dropdown -->
          <li class="nav-item-dropdown">
            <a href="${relPrefix}nepal-travel-guide/" class="nav-link">Travel Guide ▾</a>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}nepal-visa/" class="nav-dropdown-link">Nepal Visa</a>
              <a href="${relPrefix}equipment-checklist/" class="nav-dropdown-link">Equipment Checklist</a>
              <a href="${relPrefix}travel-insurance/" class="nav-dropdown-link">Travel Insurance</a>
              <a href="${relPrefix}recommended-medical-kit/" class="nav-dropdown-link">Recommended Medical Kit</a>
            </div>
          </li>
`;
      }

      // Find anchor: Company Info Dropdown
      if (headerContent.includes('<!-- Company Info Dropdown (Non-page Trigger) -->')) {
        const newHeader = headerContent.replace(
          '<!-- Company Info Dropdown (Non-page Trigger) -->',
          `${travelGuideSnippet}          <!-- Company Info Dropdown (Non-page Trigger) -->`
        );
        content = content.replace(headerContent, newHeader);
        modified = true;
        updatedHeaderCount++;
      } else if (headerContent.includes('<!-- Company Info Dropdown -->')) {
        const newHeader = headerContent.replace(
          '<!-- Company Info Dropdown -->',
          `${travelGuideSnippet}          <!-- Company Info Dropdown -->`
        );
        content = content.replace(headerContent, newHeader);
        modified = true;
        updatedHeaderCount++;
      } else {
        // Match by <li class="nav-item-dropdown"> containing Company Info
        const companyLiMatch = headerContent.match(/<li class="nav-item-dropdown"[^>]*>[\s\S]*?<span[^>]*class="[^"]*nav-link[^"]*"[^>]*>\s*Company Info/);
        if (companyLiMatch) {
          const newHeader = headerContent.replace(
            companyLiMatch[0],
            `${travelGuideSnippet}          ${companyLiMatch[0]}`
          );
          content = content.replace(headerContent, newHeader);
          modified = true;
          updatedHeaderCount++;
        } else {
          skippedFiles.push(relPath);
        }
      }
    }
  }

  // 2. Footer update: replace travel-info.html link with nepal-travel-guide/ link
  if (content.includes('travel-info.html')) {
    content = content.replace(
      new RegExp(`href=["']([^"']*?)travel-info\\.html["']`, 'g'),
      `href="$1nepal-travel-guide/"`
    );
    // Also if text was "Travel Guide & AMS", can be "Nepal Travel Guide"
    content = content.replace(
      />Travel Guide & AMS</g,
      `>Nepal Travel Guide<`
    );
    modified = true;
    updatedFooterCount++;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`Updated Header Nav in: ${updatedHeaderCount} files`);
console.log(`Updated Footer Links in: ${updatedFooterCount} files`);
console.log(`Already had Travel Guide in header: ${alreadyHasTravelGuideCount} files`);
if (skippedFiles.length > 0) {
  console.log('Skipped files (no matching Company Info anchor in header):', skippedFiles);
}
