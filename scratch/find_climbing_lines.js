const fs = require('fs');

const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

// Find all occurrences of 1544735716-392fe2489ffa
const lines = html.split('\n');
lines.forEach((line, i) => {
  if (line.includes('1544735716-392fe2489ffa') || line.includes('Mera Peak') || line.includes('og:image')) {
    console.log(`L${i + 1}: ${line.trim().slice(0, 120)}`);
  }
});
