const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

// Search for the section labeled "Interactive 3-Tab Review Section" in index.css
const start = css.indexOf('Interactive 3-Tab Review Section');
if (start !== -1) {
  console.log('Found Interactive 3-Tab Review Section in index.css:');
  console.log(css.substring(start, start + 3500));
} else {
  console.log('Not found');
}
