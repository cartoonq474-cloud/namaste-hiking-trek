const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

for (let i = 4010; i < 4065; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
