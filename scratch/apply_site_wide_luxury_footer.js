const fs = require('fs');
const path = require('path');

const canonical = fs.readFileSync('scratch/canonical_luxury_footer.html', 'utf8');

function generateFooter(depth) {
  const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  let footer = canonical;

  // Replace src="images/..."
  footer = footer.replace(/src="images\//g, `src="${prefix}images/`);

  // Replace relative hrefs that do not start with http, mailto, tel, #, etc.
  footer = footer.replace(/href="([^"]+)"/g, (match, val) => {
    if (val.startsWith('http://') || 
        val.startsWith('https://') || 
        val.startsWith('mailto:') || 
        val.startsWith('tel:') || 
        val.startsWith('#') || 
        val.startsWith('javascript:') ||
        val.startsWith('//')) {
      return match;
    }
    return `href="${prefix}${val}"`;
  });

  return footer;
}

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

// Filter down to the 79 legacy pages
const targetFiles = allFiles.filter(f => !f.startsWith('team images/') && fs.readFileSync(f, 'utf8').includes('site-footer'));

console.log(`Starting site-wide luxury footer update across ${targetFiles.length} target pages...\n`);

let updatedCount = 0;
let errors = 0;

for (const file of targetFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const depth = file.split('/').length - 1;
    const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
    const newFooter = generateFooter(depth);

    // 1. Replace legacy footer
    if (!content.includes('class="site-footer"')) {
      console.warn(`[WARN] Skipping ${file}: site-footer not found.`);
      continue;
    }

    content = content.replace(/<footer class="site-footer"[\s\S]*?<\/footer>/, newFooter);

    // 2. Ensure footer-interactions.js script is present
    if (!content.includes('footer-interactions.js')) {
      const scriptTag = `  <!-- Luxury Footer Interactions (Mobile Accordion & Newsletter Toast) -->\n  <script src="${prefix}js/footer-interactions.js"></script>\n</body>`;
      content = content.replace(/<\/body>/, scriptTag);
    }

    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`[${updatedCount}/${targetFiles.length}] [Depth ${depth}] Updated: ${file}`);
  } catch (err) {
    console.error(`[ERROR] Failed to update ${file}:`, err.message);
    errors++;
  }
}

console.log(`\n========================================`);
console.log(`Successfully updated: ${updatedCount} pages`);
console.log(`Errors encountered:   ${errors}`);
console.log(`========================================`);
