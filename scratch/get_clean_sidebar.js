const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = ebc.indexOf('<div class="sidebar-booking-card">');
const endIdx = ebc.indexOf('</div>\n        </div>\n      </div>\n    </div>', startIdx);
if (startIdx !== -1) {
  const sidebarHtml = ebc.slice(startIdx, startIdx + 4500);
  // find matching closing tags
  fs.writeFileSync('scratch/ebc_sidebar_clean.html', sidebarHtml);
  console.log('Saved ebc_sidebar_clean.html, length:', sidebarHtml.length);
}
