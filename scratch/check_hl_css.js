const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const sIdx = css.indexOf('.ebc-highlight');
if (sIdx !== -1) {
  console.log(css.substring(sIdx, sIdx + 1200));
} else {
  console.log('Not found in index.css');
}

