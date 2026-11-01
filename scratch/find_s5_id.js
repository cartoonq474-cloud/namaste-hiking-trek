const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const pos = html.indexOf('Read Before You Book');
console.log('Pos of Read Before You Book:', pos);
if (pos !== -1) {
  console.log(html.substring(pos - 300, pos + 300));
}

