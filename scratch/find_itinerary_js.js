const fs = require('fs');
const path = require('path');

function searchFiles(dir, term) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && !full.includes('node_modules') && !full.includes('.git')) {
      searchFiles(full, term);
    } else if (file.endsWith('.js') || file.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(term)) {
        console.log(`Found in ${full}`);
      }
    }
  }
}

searchFiles('.', 'itinerary-header');
