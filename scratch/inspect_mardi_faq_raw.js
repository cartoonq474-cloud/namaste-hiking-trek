const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-faqs"');
console.log('Mardi FAQs first 1200 chars:');
console.log(mardi.slice(sIdx, sIdx + 1200));
