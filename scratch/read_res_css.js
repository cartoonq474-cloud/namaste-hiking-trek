const fs = require('fs');

const lines = fs.readFileSync('index.css', 'utf8').split('\n');

for (let i = 2855; i < 2975; i++) {
  if (lines[i] !== undefined) {
    console.log((i + 1) + ': ' + lines[i]);
  }
}
