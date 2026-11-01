const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('class="inc-exc-card"');
console.log(html.substring(s, s + 1000));
