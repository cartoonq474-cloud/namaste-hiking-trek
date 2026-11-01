const fs = require('fs');
const html = fs.readFileSync('scratch/test_semantic_hierarchy.html', 'utf8');

const s = html.indexOf('<h5 style="color: var(--color-primary-navy)');
console.log('Index:', s);
console.log(html.substring(s - 100, s + 300));
