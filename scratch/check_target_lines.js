const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 4045 - 4065 ---');
for (let i = 4045; i < 4065; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}

console.log('--- Lines 4105 - 4125 ---');
for (let i = 4105; i < 4125; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
