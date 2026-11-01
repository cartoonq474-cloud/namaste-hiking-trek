const fs = require('fs');

['trek/everest-base-camp-trek/index.html', 'trek/gokyo-lakes-trek/index.html', 'trek/annapurna-circuit-trek/index.html', 'index.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const m = html.match(/index\.css\?v=[0-9]+/);
    console.log(f, m ? m[0] : 'no v param');
  }
});

