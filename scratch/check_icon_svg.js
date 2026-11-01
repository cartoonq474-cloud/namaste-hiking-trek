const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const idx = css.indexOf('.icon-svg');
console.log('CSS for .icon-svg:');
console.log(css.substring(idx, idx + 1000));
