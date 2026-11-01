const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = evt.split('\n');

let inHl = false;
for (let i = 1150; i < 1440; i++) {
  const l = lines[i];
  if (l.includes('class="ebc-highlight-card-title"')) {
    console.log(`L${i+1}: ${l.replace(/<[^>]+>/g, '').trim()}`);
  }
}
