const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const matches = [];
const regex = /href="([^"]*#[^"]*)"/g;
let m;
while ((m = regex.exec(content)) !== null) {
  matches.push(m[1]);
}
console.log('Found hrefs with #:');
console.log([...new Set(matches)]);
