const fs = require('fs');

const origContent = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = origContent.split('\n');

for (let i = 1065; i < 1120; i++) {
  console.log((i + 1) + ': ' + lines[i]);
}
