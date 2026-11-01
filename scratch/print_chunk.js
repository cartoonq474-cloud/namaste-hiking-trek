const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.detail-accordion-content-inner');
console.log(JSON.stringify(css.substring(pos, pos + 500)));

