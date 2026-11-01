const fs = require('fs');
const html = fs.readFileSync('scratch/test_semantic_hierarchy.html', 'utf8');

const s = html.indexOf('id="faq-cat-general"');
console.log(html.substring(s, s + 1200));
