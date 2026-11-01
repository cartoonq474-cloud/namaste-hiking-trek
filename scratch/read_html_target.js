const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');

for (let i = 4010; i < 4060; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
