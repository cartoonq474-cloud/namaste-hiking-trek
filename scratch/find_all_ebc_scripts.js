const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const regex = /<script[\s\S]*?<\/script>/gi;
let m;
while ((m = regex.exec(ebc)) !== null) {
  console.log('Script tag in EBC:\n', m[0].slice(0, 200));
  console.log('---');
}
