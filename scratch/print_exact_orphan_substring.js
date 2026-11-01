const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const p1 = content.indexOf('trek-gallery-sub-bottom-right');
const p2 = content.indexOf('Key Trip Facts Grid');

console.log(JSON.stringify(content.substring(p1, p2)));
