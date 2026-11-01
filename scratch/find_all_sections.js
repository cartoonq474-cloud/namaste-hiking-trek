const fs = require('fs');

const lines = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('<section id="section-') || line.includes('class="trek-detail-section"')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
}
