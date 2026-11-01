const fs = require('fs');

const lines = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8').split('\n');

for (let i = 844; i < 1076; i++) {
  if (lines[i].includes('<!-- Highlight')) {
    console.log(lines[i].trim());
  }
  if (lines[i].includes('<svg')) {
    console.log('  SVG: ' + lines[i].trim());
  }
}
