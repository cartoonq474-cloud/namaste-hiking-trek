const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = evt.split('\n');

for (let i = 1360; i < 1475; i++) {
  const l = lines[i];
  if (l.includes('class="why-book-card-title"')) {
    console.log(`L${i+1}: ${l.replace(/<[^>]+>/g, '').trim()}`);
  }
}
