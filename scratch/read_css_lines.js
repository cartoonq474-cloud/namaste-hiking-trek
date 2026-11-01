const fs = require('fs');

const lines = fs.readFileSync('index.css', 'utf8').split('\n');

for (let i = 950; i < 965; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
