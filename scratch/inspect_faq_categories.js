const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('class="faq-category-nav"');
const eIdx = html.indexOf('class="faq-items-list"');

console.log(html.slice(sIdx, eIdx));

