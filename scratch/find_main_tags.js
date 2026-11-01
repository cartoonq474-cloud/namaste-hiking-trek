const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = content.split('\n');

// Find all </main>
lines.forEach((l, idx) => {
  if (l.includes('</main>')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});
