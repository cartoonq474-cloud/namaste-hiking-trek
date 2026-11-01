const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Check tab-everest in index.html
const evHighExp = 'High Expedition</div>';
const evHighIdx = indexHtml.indexOf(evHighExp);

if (evHighIdx !== -1) {
  // Check if mera-peak-climbing already exists
  if (!indexHtml.includes('trek/mera-peak-climbing/')) {
    const insertPos = indexHtml.indexOf('</div>', evHighIdx);
    const linkHtml = `\n                        <a href="trek/mera-peak-climbing/" class="mega-trek-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>`;
    indexHtml = indexHtml.slice(0, insertPos) + linkHtml + indexHtml.slice(insertPos);
    console.log('Added Mera Peak Climbing to tab-everest High Expedition column in index.html');
  }
}

// Add to mobile drawer menu under popular treks in index.html
const mobileDrawerGroup = 'Popular Himalayan Treks</div>';
const mobileDrawerIdx = indexHtml.indexOf(mobileDrawerGroup);

if (mobileDrawerIdx !== -1) {
  if (!indexHtml.slice(mobileDrawerIdx, mobileDrawerIdx + 2000).includes('trek/mera-peak-climbing/')) {
    const insertPos = indexHtml.indexOf('</div>', mobileDrawerIdx) + 6;
    const mobileLinkHtml = `\n              <a href="trek/mera-peak-climbing/" class="nav-dropdown-link"><span>Mera Peak Climbing</span> <span class="days-badge">18 DAYS</span></a>`;
    indexHtml = indexHtml.slice(0, insertPos) + mobileLinkHtml + indexHtml.slice(insertPos);
    console.log('Added Mera Peak Climbing to mobile drawer in index.html');
  }
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html successfully.');

// 2. Update peak-climbing-nepal/index.html
if (fs.existsSync('peak-climbing-nepal/index.html')) {
  let pcHtml = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');
  const countBefore = (pcHtml.match(/mera-peak-climbing-trek/g) || []).length;
  pcHtml = pcHtml.replace(/mera-peak-climbing-trek/g, 'mera-peak-climbing');
  fs.writeFileSync('peak-climbing-nepal/index.html', pcHtml, 'utf8');
  console.log(`Updated peak-climbing-nepal/index.html: replaced ${countBefore} occurrences of mera-peak-climbing-trek with mera-peak-climbing.`);
}
