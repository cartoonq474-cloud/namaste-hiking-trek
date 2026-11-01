const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

// Find all <main> and </main> positions
const mains = [...html.matchAll(/<\/?main[^>]*>/gi)];
console.log('Main tags found:');
mains.forEach(m => console.log(m[0], 'at pos:', m.index));

// Print context around each main tag
mains.forEach(m => {
  console.log('--- Context around pos', m.index, '---');
  console.log(html.slice(Math.max(0, m.index - 100), Math.min(html.length, m.index + 100)));
});

