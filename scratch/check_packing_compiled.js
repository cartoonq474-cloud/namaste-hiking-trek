const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');
const p = html.indexOf('id="section-packing"');
console.log('section-packing index:', p);
console.log(html.substring(p, p + 1200));
