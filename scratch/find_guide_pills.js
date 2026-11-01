const fs = require('fs');
const path = require('path');

function searchAll(dir, str) {
  let matches = [];
  try {
    for (const f of fs.readdirSync(dir)) {
      if (f === '.git' || f === 'node_modules') continue;
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        matches = matches.concat(searchAll(full, str));
      } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css')) {
        const c = fs.readFileSync(full, 'utf8');
        if (c.includes(str)) matches.push(full);
      }
    }
  } catch(e) {}
  return matches;
}

console.log('guide-pill-btn in:', searchAll('.', 'guide-pill-btn'));

