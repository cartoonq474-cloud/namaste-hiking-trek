const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const sectionMatches = [...html.matchAll(/<section[^>]*id="([^"]*)"[^>]*>/gi)];
console.log('Sections in trek/mera-peak-climbing/index.html:');
sectionMatches.forEach(m => {
  console.log(`- id: "${m[1]}" at index ${m.index}`);
});
