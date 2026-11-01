const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const lines = html.split(/\r?\n/);
for (let i = 5890; i < 5920 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

