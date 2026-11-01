const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');

for (let i = 3995; i < 4075; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
