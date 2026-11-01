const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (/Everest|Lukla/i.test(line)) {
    console.log(`Line ${idx + 1}: ${line.trim().substring(0, 120)}`);
  }
});
