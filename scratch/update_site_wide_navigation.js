const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getAllHtmlFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;
    if (fs.statSync(fullPath).isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

const htmlFiles = getAllHtmlFiles(rootDir);
let updatedMegaCount = 0;
let updatedMobileCount = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Determine relative prefix based on depth
  const relPath = path.relative(rootDir, filePath);
  const depth = relPath.split(path.sep).length - 1;
  const prefix = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  // 1. Update Mega Menu Cho La Pass link
  // Pattern 1: href="...trek/everest-base-camp-via-gokyo-lakes/" class="mega-trek-link"><span>Cho La Pass & Gokyo Lakes</span> <span class="days-badge">16 DAYS</span></a>
  const oldMegaRegex = /<a\s+href="[^"]*trek\/everest-base-camp-via-gokyo-lakes\/?"\s+class="mega-trek-link"><span>Cho La Pass & Gokyo Lakes<\/span>\s*<span class="days-badge">16 DAYS<\/span><\/a>/g;
  const newMegaLink = `<a href="${prefix}trek/everest-base-camp-with-cho-la-pass-trek/" class="mega-trek-link"><span>Everest Base Camp with Cho La Pass</span> <span class="days-badge">18 DAYS</span></a>`;

  if (oldMegaRegex.test(content)) {
    content = content.replace(oldMegaRegex, newMegaLink);
    updatedMegaCount++;
  } else {
    // Also check for gokyo-lakes-and-cho-la-pass in mega-trek-link if any
    const oldMegaRegex2 = /<a\s+href="[^"]*trek\/gokyo-lakes-and-cho-la-pass\/?"\s+class="mega-trek-link"><span>[^<]+<\/span>\s*<span class="days-badge">[^<]+<\/span><\/a>/g;
    if (oldMegaRegex2.test(content)) {
      content = content.replace(oldMegaRegex2, newMegaLink);
      updatedMegaCount++;
    }
  }

  // 2. Mobile Accordion Menu: Ensure EBC with Cho La Pass is present under Everest Base Camp
  const ebcMobilePattern = new RegExp(`(<a\\s+href="${prefix.replace(/\//g, '\\/')}trek\\/everest-base-camp-trek\\/?"\\s+class="nav-dropdown-link"><span>Everest Base Camp Trek<\\/span>\\s*<span class="days-badge">14 DAYS<\\/span><\\/a>)`, 'g');
  const cholaMobileLink = `\n              <a href="${prefix}trek/everest-base-camp-with-cho-la-pass-trek/" class="nav-dropdown-link"><span>EBC with Cho La Pass Trek</span> <span class="days-badge">18 DAYS</span></a>`;

  if (!content.includes('trek/everest-base-camp-with-cho-la-pass-trek/" class="nav-dropdown-link"')) {
    if (ebcMobilePattern.test(content)) {
      content = content.replace(ebcMobilePattern, `$1${cholaMobileLink}`);
      updatedMobileCount++;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`Mega menu updated in ${updatedMegaCount} files.`);
console.log(`Mobile accordion drawer updated in ${updatedMobileCount} files.`);
