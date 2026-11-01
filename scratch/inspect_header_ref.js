const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Upper Mustang Header:');
  console.log(headerMatch[0].slice(0, 1500));
}
