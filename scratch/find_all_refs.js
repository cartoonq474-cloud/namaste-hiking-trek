const fs = require('fs');
const path = require('path');

const allowedExts = new Set(['.html', '.js', '.json', '.css', '.md', '.xml']);
const ignoreDirs = new Set(['node_modules', '.git', 'images', 'brain']);

function searchFast(dir) {
  const matches = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.isDirectory()) {
      if (!ignoreDirs.has(ent.name)) {
        matches.push(...searchFast(path.join(dir, ent.name)));
      }
    } else {
      const ext = path.extname(ent.name).toLowerCase();
      if (allowedExts.has(ext)) {
        try {
          const content = fs.readFileSync(path.join(dir, ent.name), 'utf8');
          if (content.includes('mera-peak-climbing-trek')) {
            matches.push(path.join(dir, ent.name));
          }
        } catch(e) {}
      }
    }
  }
  return matches;
}

const found = searchFast('.');
console.log('Files with mera-peak-climbing-trek (' + found.length + '):');
found.forEach(f => console.log(' - ' + f));
