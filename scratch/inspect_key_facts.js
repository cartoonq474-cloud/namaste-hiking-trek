const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('Key Trip Facts');
console.log(html.substring(s - 100, s + 300));
