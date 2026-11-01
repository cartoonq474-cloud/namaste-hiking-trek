const fs = require('fs');
const mContent = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const sidebarIdx = mContent.indexOf('<aside class="trek-sidebar">');
const sidebarEnd = mContent.indexOf('</aside>', sidebarIdx);

console.log('Sidebar length:', sidebarEnd - sidebarIdx);
console.log(mContent.slice(sidebarIdx, sidebarIdx + 1200));
