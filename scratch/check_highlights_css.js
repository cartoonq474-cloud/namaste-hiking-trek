const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const sIdx = css.indexOf('.ebc-highlights-');
console.log('=== CSS for ebc-highlights- ===');
console.log(css.slice(sIdx, sIdx + 2000));
