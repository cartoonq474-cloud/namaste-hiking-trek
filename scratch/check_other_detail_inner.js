const fs = require('fs');

['trek/annapurna-circuit-trek/index.html', 'trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'trek/tilicho-lake-trek/index.html'].forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const count = (html.match(/class="detail-content-inner"/g) || []).length;
    console.log(f, 'has detail-content-inner count:', count);
  }
});

