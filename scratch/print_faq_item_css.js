const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.faq-item-question');
console.log(css.slice(pos, pos + 1000));
