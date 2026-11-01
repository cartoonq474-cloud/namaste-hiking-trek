const fs = require('fs');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = dir + '/' + f;
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.git' && f !== 'scratch') {
      search(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('mera-peak-climbing') || c.includes('mera-peak')) {
        console.log(full);
      }
    }
  }
}
search('.');

