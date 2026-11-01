const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.faq-layout-container');
console.log('--- CSS AROUND .faq-layout-container ---');
console.log(css.slice(pos, pos + 2500));
