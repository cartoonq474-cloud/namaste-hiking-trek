const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const regex = /mera-peak[^\"]*/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log('Match in index.html:', match[0]);
}

