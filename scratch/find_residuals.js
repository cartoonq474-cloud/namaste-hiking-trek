const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
lines.forEach((line, idx) => {
  if (line.match(/Lukla/i) || line.match(/Namche/i) || line.match(/\bEBC\b/i)) {
    console.log(`Line ${idx + 1}: ${line.trim().substring(0, 120)}`);
  }
});
