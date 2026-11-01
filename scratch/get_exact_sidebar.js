const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('<div class="sidebar-booking-card">');
const nextSec = ebc.indexOf('<section', sIdx);
console.log('Sidebar section from', sIdx, 'to next section', nextSec);
const exactSidebar = ebc.slice(sIdx, nextSec);
fs.writeFileSync('scratch/exact_ebc_sidebar.html', exactSidebar);
console.log('Done, length:', exactSidebar.length);
