const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.detail-accordion-content-inner');
console.log(css.substring(pos - 100, pos + 500));

