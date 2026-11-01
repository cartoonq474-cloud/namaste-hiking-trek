const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const pos = html.indexOf('data-trek-key');
console.log('pos of data-trek-key:', pos);
if (pos !== -1) {
  console.log(html.substring(pos - 100, pos + 200));
} else {
  console.log('data-trek-key NOT found in Khopra HTML!');
}
