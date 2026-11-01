const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8').split('\n');

for (let i = 953; i < 1102; i++) {
  console.log((i + 1) + ': ' + css[i]);
}
