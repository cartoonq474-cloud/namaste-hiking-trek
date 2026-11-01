const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('id="section-dates"');
console.log(html.substring(s, s + 1500));
