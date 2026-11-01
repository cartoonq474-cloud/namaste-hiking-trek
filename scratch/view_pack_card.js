const fs = require('fs');

const c = fs.readFileSync('nepal-trekking-packages/index.html', 'utf8');
const lines = c.split(/\r?\n/);
for (let i = 540; i < 575; i++) {
  console.log((i+1) + ': ' + lines[i]);
}
