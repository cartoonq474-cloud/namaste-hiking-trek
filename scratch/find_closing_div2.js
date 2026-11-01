const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

for (let i = 1130; i < 1170; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
