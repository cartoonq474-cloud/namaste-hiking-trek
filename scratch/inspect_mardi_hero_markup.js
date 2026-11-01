const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const mainIdx = content.indexOf('<main');
const subnavIdx = content.indexOf('<nav class="trek-subnav"');
const subnavEndIdx = content.indexOf('</nav>', subnavIdx);

console.log('=== HERO TO SUBNAV ===');
console.log(content.slice(mainIdx, subnavIdx));

console.log('=== SUBNAV ===');
console.log(content.slice(subnavIdx, subnavEndIdx + 6));
