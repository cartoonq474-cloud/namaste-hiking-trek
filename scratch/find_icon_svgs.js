const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('class="icon-svg') && !line.includes('width=')) {
    console.log((idx+1) + ': ' + line.trim().substring(0, 100));
  }
});
