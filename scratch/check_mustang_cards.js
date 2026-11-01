const fs = require('fs');

['index.html', 'nepal-trekking-packages/index.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split(/\r?\n/);
  console.log(`=== Matches in ${f} ===`);
  lines.forEach((l, i) => {
    if (/upper-mustang/i.test(l)) {
      for (let j = Math.max(0, i - 4); j <= Math.min(lines.length - 1, i + 8); j++) {
        console.log((j+1) + ': ' + lines[j]);
      }
    }
  });
});
