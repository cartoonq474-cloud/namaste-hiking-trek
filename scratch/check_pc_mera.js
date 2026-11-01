const fs = require('fs');
const html = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

const meraIdx = html.indexOf('Mera Peak');
console.log('Mera Peak in peak-climbing-nepal/index.html:', meraIdx);
if (meraIdx !== -1) {
  let pos = 0;
  while ((pos = html.indexOf('Mera Peak', pos)) !== null && pos !== -1) {
    console.log('Match at', pos, ':', html.substring(Math.max(0, pos - 100), Math.min(html.length, pos + 250)).replace(/\n/g, ' '));
    pos += 9;
  }
}

