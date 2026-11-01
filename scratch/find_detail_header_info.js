const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const pos = css.indexOf('.detail-header-info');
console.log('pos of .detail-header-info:', pos);
if (pos !== -1) {
  console.log(css.substring(pos - 200, pos + 1500));
}
