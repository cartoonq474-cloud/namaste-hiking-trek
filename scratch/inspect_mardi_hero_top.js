const fs = require('fs');
const mContent = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const mainIdx = mContent.indexOf('<main');
const factsIdx = mContent.indexOf('<!-- Key Trip Facts Grid -->');

console.log(mContent.slice(mainIdx, factsIdx));
