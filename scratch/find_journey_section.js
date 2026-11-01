const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('journey feels like') || l.toLowerCase().includes('himalaya experience') || l.toLowerCase().includes('what your journey')) {
    console.log(`L${idx + 1}: ${l}`);
  }
});
