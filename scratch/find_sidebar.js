const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

function findSidebarContainer(html) {
  const m = html.match(/class="[^"]*sidebar[^"]*"/g);
  return m ? [...new Set(m)] : [];
}

console.log('EBC sidebar classes:', findSidebarContainer(ebc));
console.log('ABC sidebar classes:', findSidebarContainer(abc));
