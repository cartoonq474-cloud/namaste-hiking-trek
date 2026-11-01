const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.details-progress-wrapper');
console.log(css.substring(pos, pos + 1200));

