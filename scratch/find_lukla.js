const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
lines.forEach((line, index) => {
  if (line.toLowerCase().includes('lukla') && !line.includes('mega-trek-link') && !line.includes('schema.org')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
