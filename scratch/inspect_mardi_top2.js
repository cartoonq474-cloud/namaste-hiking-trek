const fs = require('fs');
const mContent = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const mainIdx = mContent.indexOf('<main');
const overviewIdx = mContent.indexOf('id="section-overview"');

console.log('Mardi main to overview:');
console.log(mContent.slice(mainIdx, overviewIdx));
