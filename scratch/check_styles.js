const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const styleMatches = content.match(/<style[\s\S]*?<\/style>/gi);
console.log('Style tags count:', styleMatches ? styleMatches.length : 0);
if (styleMatches) {
  styleMatches.forEach((s, i) => {
    console.log(`Style tag [${i}] length:`, s.length);
  });
}
