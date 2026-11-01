const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const regex = /<script[\s\S]*?<\/script>/gi;
let m;
while ((m = regex.exec(evt)) !== null) {
  console.log('Script tag in EVT:\n', m[0].slice(0, 150));
  console.log('---');
}
