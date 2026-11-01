const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const navBtns = [...content.matchAll(/data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('Subnav tabs:', navBtns);

navBtns.forEach(tab => {
  const targetId = `section-${tab}`;
  const exists = content.includes(`id="${targetId}"`);
  console.log(`Tab [${tab}] -> #${targetId}: ${exists ? 'EXISTS' : 'MISSING'}`);
});
