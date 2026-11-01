const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

let pos = 0;
while ((pos = css.indexOf('detail-accordion-content-inner', pos)) !== -1) {
  console.log(`\nFound at pos ${pos}:`);
  console.log(css.substring(pos - 50, pos + 300));
  pos += 30;
}
