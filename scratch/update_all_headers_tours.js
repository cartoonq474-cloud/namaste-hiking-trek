const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getAllHtmlFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (file === 'node_modules' || file === '.git' || file === 'scratch') return;

    if (fs.statSync(fullPath).isDirectory()) {
      getAllHtmlFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.html')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllHtmlFiles(rootDir);
let updatedCount = 0;

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Compute depth relative to root to fix relative links (e.g., ../ or ../../)
  const relPath = path.relative(rootDir, filePath);
  const depth = relPath.split(path.sep).length - 1;
  const relPrefix = depth === 0 ? '' : (depth === 1 ? '../' : '../../');

  const tourDropdownHtml = `
          <!-- Standard Tour Packages Dropdown -->
          <li class="nav-item-dropdown">
            <a href="${relPrefix}tours.html" class="nav-link">Nepal Tours ▾</a>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}tours.html" class="nav-dropdown-link">All Tour Packages</a>
              <a href="${relPrefix}tour/kathmandu-pokhara-chitwan-tour/" class="nav-dropdown-link">Best of Nepal (8 Days)</a>
              <a href="${relPrefix}tour/kathmandu-cultural-heritage-tour/" class="nav-dropdown-link">Kathmandu Heritage (4 Days)</a>
              <a href="${relPrefix}tour/pokhara-valley-nature-tour/" class="nav-dropdown-link">Pokhara Scenic (4 Days)</a>
              <a href="${relPrefix}tour/chitwan-national-park-safari/" class="nav-dropdown-link">Chitwan Jungle Safari (3 Days)</a>
              <a href="${relPrefix}tour/nagarkot-sunrise-bhaktapur-tour/" class="nav-dropdown-link">Nagarkot Sunrise (3 Days)</a>
              <a href="${relPrefix}tour/lumbini-birthplace-of-buddha-tour/" class="nav-dropdown-link">Lumbini Buddhist Tour (4 Days)</a>
              <a href="${relPrefix}tour/nepal-luxury-helicopter-tour/" class="nav-dropdown-link">Luxury Helicopter Tour (5 Days)</a>
            </div>
          </li>`;

  // Inject Tour Dropdown if not already present in navigation
  if (!content.includes('href="' + relPrefix + 'tours.html"') && !content.includes('tours.html')) {
    // Insert after mega-nav-item closing </li>
    if (content.includes('</li>\n\n          <!-- Standard Trekking Regions')) {
      content = content.replace(
        '</li>\n\n          <!-- Standard Trekking Regions',
        '</li>\n' + tourDropdownHtml + '\n\n          <!-- Standard Trekking Regions'
      );
      updatedCount++;
    } else if (content.includes('</li>\n          <!-- Standard Trekking Regions')) {
      content = content.replace(
        '</li>\n          <!-- Standard Trekking Regions',
        '</li>\n' + tourDropdownHtml + '\n          <!-- Standard Trekking Regions'
      );
      updatedCount++;
    } else if (content.includes('mega-nav-item">')) {
      // Fallback: replace closing mega-nav-item li
      const idx = content.indexOf('mega-nav-item">');
      const closeLi = content.indexOf('</li>', idx);
      if (closeLi !== -1) {
        content = content.slice(0, closeLi + 5) + '\n' + tourDropdownHtml + content.slice(closeLi + 5);
        updatedCount++;
      }
    }
  }

  // Ensure footer includes Tour Packages link
  if (!content.includes('All Tour Packages</a>')) {
    if (content.includes('All Trek Packages</a></li>')) {
      content = content.replace(
        'All Trek Packages</a></li>',
        `All Trek Packages</a></li>\n            <li><a href="${relPrefix}tours.html">All Tour Packages</a></li>`
      );
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Updated ${updatedCount} HTML files with Nepal Tours nav dropdown & footer links!`);
