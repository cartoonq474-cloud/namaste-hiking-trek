const fs = require('fs');

const files = [
  'trek/annapurna-circuit-trek/index.html',
  'trek/annapurna-circuit-trek-with-tilicho-lake/index.html',
  'trek/tilicho-lake-trek/index.html'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let html = fs.readFileSync(f, 'utf8');
    const before = (html.match(/class="detail-content-inner"/g) || []).length;
    if (before > 0) {
      html = html.replace(/class="detail-content-inner"/g, 'class="detail-accordion-content-inner"');
      fs.writeFileSync(f, html, 'utf8');
      console.log(`Updated ${f}: replaced ${before} occurrences.`);
    } else {
      console.log(`${f} already clean.`);
    }
  }
});

