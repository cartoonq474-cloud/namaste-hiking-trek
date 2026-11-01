const fs = require('fs');

const lines = fs.readFileSync('index.html', 'utf8').split('\n');

for (let i = 4480; i < 4650; i++) {
  if (lines[i] !== undefined) {
    console.log((i + 1) + ': ' + lines[i]);
  }
}
