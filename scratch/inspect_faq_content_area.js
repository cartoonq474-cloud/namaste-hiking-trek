const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const s = mardi.indexOf('class="faq-content-area"');
console.log(mardi.slice(s, s + 1500));
