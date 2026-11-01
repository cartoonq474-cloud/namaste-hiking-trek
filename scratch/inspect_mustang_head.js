const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const head = content.match(/<head>[\s\S]*?<\/head>/i);
if (head) {
  console.log('Upper Mustang Head:');
  console.log(head[0]);
}
