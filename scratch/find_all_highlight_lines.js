const fs = require('fs');

const lines = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8').split('\n');

lines.forEach((line, idx) => {
  if (/highlight/i.test(line)) {
    console.log(`L${idx + 1}: ${line.trim()}`);
  }
});
