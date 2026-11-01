const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('Aug 5 – Aug 18, 2026');
console.log(html.substring(s - 100, s + 300));
