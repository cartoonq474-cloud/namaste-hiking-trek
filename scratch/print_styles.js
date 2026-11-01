const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const styleMatches = content.match(/<style[\s\S]*?<\/style>/gi);
if (styleMatches) {
  styleMatches.forEach((s, i) => {
    console.log(`\n=== Style tag [${i}] ===`);
    console.log(s.slice(0, 300));
  });
}
