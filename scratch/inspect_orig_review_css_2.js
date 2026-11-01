const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const start = css.indexOf('Interactive 3-Tab Review Section');
console.log(css.substring(start + 3000, start + 7000));
