const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const head = content.match(/<head[\s\S]*?<\/head>/i)[0];
const schema = head.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (schema) {
  console.log(schema[0]);
}
