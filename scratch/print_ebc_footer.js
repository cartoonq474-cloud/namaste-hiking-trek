const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const footerMatch = ebc.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log(footerMatch[0]);
}
