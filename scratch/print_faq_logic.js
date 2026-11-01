const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const pos = js.indexOf('.faq-category-btn');
console.log(js.slice(pos - 50, pos + 1800));
