const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');
const allTreksIdx = content.indexOf('All Treks');
console.log(content.substring(allTreksIdx - 100, allTreksIdx + 1500));
