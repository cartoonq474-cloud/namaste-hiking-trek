const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Check head and nav end
const navEndIdx = content.indexOf('</header>');
console.log('Nav ends at index:', navEndIdx);

// Check sidebar booking card start
const sidebarIdx = content.indexOf('sidebar-booking-card');
console.log('Sidebar booking card found at index:', sidebarIdx);

// Check site-footer start
const footerIdx = content.indexOf('<footer class="site-footer">');
console.log('Site footer found at index:', footerIdx);

// Check script tags at bottom
const scriptsStartIdx = content.indexOf('<!-- Dynamic Navigation Highlight & Active State Script -->');
console.log('Scripts start at index:', scriptsStartIdx);
