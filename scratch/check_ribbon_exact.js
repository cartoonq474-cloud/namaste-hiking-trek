const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const p = template.indexOf('BEST SELLER');
console.log('BEST SELLER exact snippet:');
console.log(JSON.stringify(template.substring(p - 120, p + 50)));
