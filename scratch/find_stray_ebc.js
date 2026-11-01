const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const regexes = [
  /Everest Base Camp Trek/gi,
  /\bEBC\b/g,
  /Gorak Shep/gi,
  /Kala Patthar/gi
];

for (const reg of regexes) {
  const matches = html.match(reg);
  console.log(`Matches for ${reg}:`, matches ? matches.length : 0);
  if (matches && matches.length > 0) {
    let m;
    let count = 0;
    while ((m = reg.exec(html)) !== null && count < 5) {
      const start = Math.max(0, m.index - 40);
      const end = Math.min(html.length, m.index + 60);
      console.log('   Context:', html.substring(start, end).replace(/\n/g, ' '));
      count++;
    }
  }
}

