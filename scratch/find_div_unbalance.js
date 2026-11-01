const fs = require('fs');

const lines = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8').split('\n');

let balance = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const o = (line.match(/<div[\s>]/gi) || []).length;
  const c = (line.match(/<\/div>/gi) || []).length;
  balance += (o - c);
  if (balance < 0) {
    console.log(`Div balance negative at line ${i + 1}: balance=${balance}, line: ${line.trim()}`);
  }
}
console.log('Final div balance:', balance);
