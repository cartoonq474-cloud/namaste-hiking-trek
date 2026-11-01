const fs = require('fs');

['peak-climbing-nepal/index.html', 'everest-region-treks/index.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const idx = content.toLowerCase().indexOf('mera');
    if (idx !== -1) {
      console.log(`=== ${f} ===`);
      console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 400)));
    }
  }
});

