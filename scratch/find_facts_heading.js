const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<h[1-6][^>]*>[\s\S]*?Key Trip Facts[\s\S]*?<\/h[1-6]>/gi;
const m = regex.exec(html);
if (m) {
  console.log('Match:', m[0]);
  console.log('Index:', m.index);
  console.log('Surrounding:', html.substring(m.index - 100, m.index + 200));
} else {
  console.log('No direct match');
}
