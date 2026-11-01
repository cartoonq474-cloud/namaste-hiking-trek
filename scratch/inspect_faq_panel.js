const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('class="faq-main-panel"');
console.log(mardi.slice(sIdx, sIdx + 1500));
