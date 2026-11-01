const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sidebarIdx = html.indexOf('<aside');
console.log('Sidebar index:', sidebarIdx);
if (sidebarIdx !== -1) {
  console.log(html.slice(sidebarIdx, sidebarIdx + 1500));
}
