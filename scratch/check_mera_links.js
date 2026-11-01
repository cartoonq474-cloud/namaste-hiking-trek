const fs = require('fs');

['index.html', 'peak-climbing-nepal/index.html', 'everest-region-treks/index.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/href="[^"]*mera[^"]*"/gi);
    console.log(f, matches);
  }
});

