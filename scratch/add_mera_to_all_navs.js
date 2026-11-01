const fs = require('fs');
const path = require('path');

const allowedExts = new Set(['.html']);
const ignoreDirs = new Set(['node_modules', '.git', 'scratch', 'images', 'brain']);

function findHtmlFiles(dir) {
  const list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.isDirectory()) {
      if (!ignoreDirs.has(ent.name)) {
        list.push(...findHtmlFiles(path.join(dir, ent.name)));
      }
    } else {
      if (allowedExts.has(path.extname(ent.name).toLowerCase())) {
        list.push(path.join(dir, ent.name));
      }
    }
  }
  return list;
}

const htmlFiles = findHtmlFiles('.');
console.log(`Found ${htmlFiles.length} HTML files.`);

let updatedCount = 0;
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Determine relative prefix to root
  const depth = file.split(path.sep).length - 1;
  const relPrefix = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  // Check if file has tab-everest
  const evTabIdx = content.indexOf('id="tab-everest"');
  if (evTabIdx !== -1) {
    // Check if mera peak already in tab-everest
    const evTabSnippet = content.slice(evTabIdx, evTabIdx + 2000);
    if (!evTabSnippet.includes('mera-peak-climbing')) {
      const highExpMarker = 'High Expedition</div>';
      const highExpIdx = content.indexOf(highExpMarker, evTabIdx);
      if (highExpIdx !== -1) {
        const insertPos = content.indexOf('</div>', highExpIdx);
        const link = `\n                        <a href="${relPrefix}trek/mera-peak-climbing/" class="mega-trek-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>`;
        content = content.slice(0, insertPos) + link + content.slice(insertPos);
        changed = true;
      }
    }
  }

  // Check if file has mobile drawer Popular Treks
  const mobGroup = 'Popular Himalayan Treks</div>';
  const mobIdx = content.indexOf(mobGroup);
  if (mobIdx !== -1) {
    const mobSnippet = content.slice(mobIdx, mobIdx + 2000);
    if (!mobSnippet.includes('mera-peak-climbing')) {
      const insertPos = content.indexOf('</div>', mobIdx) + 6;
      const mobLink = `\n              <a href="${relPrefix}trek/mera-peak-climbing/" class="nav-dropdown-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>`;
      content = content.slice(0, insertPos) + mobLink + content.slice(insertPos);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated nav in: ${file}`);
  }
}

console.log(`Finished: updated header navigation in ${updatedCount} files.`);

