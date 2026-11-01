const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<section[^>]*id="([^"]*)"[^>]*>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[1].toLowerCase().includes('inc') || m[1].toLowerCase().includes('cost') || m[1].toLowerCase().includes('price')) {
    console.log('Section id:', m[1]);
  }
}

const regex2 = /<h[234][^>]*>([\s\S]*?)<\/h[234]>/gi;
while ((m = regex2.exec(html)) !== null) {
  if (m[1].toLowerCase().includes('include')) {
    console.log('Heading:', m[1].replace(/\s+/g, ' '));
  }
}
