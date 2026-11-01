const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');
const tabIdx = content.indexOf('id="tab-everest"');
console.log(content.substring(tabIdx, tabIdx + 1100));
