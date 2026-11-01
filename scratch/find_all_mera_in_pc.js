const fs = require('fs');

const content = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');
const regex = /mera/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log('Match at', match.index);
  console.log(content.slice(Math.max(0, match.index - 50), Math.min(content.length, match.index + 200)));
  console.log('-------------------');
}

