const fs = require('fs');
const lines = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('padding: 30px 0 10px 0') || l.includes('trek-gallery') || l.includes('trek-content-grid')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});
