const fs = require('fs');
const path = require('path');

function search(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== '.git' && f !== 'node_modules' && f !== 'scratch') search(full);
    } else if (f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js')) {
      const c = fs.readFileSync(full, 'utf8');
      const matches = c.match(/[^"'()\s]*logo[^"'()\s]*/gi);
      if (matches) {
        const unique = [...new Set(matches)];
        console.log(full, unique);
      }
    }
  }
}

search('.');
