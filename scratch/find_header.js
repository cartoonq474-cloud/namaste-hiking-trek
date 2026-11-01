const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const headerIdx = content.indexOf('<header');
console.log('Header snippet:', content.slice(headerIdx, headerIdx + 200));
