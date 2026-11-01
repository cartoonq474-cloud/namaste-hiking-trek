const fs = require('fs');

const pages = [
  'trek/mardi-himal-trek/index.html',
  'trek/annapurna-circuit-trek/index.html',
  'trek/tilicho-lake-trek/index.html',
  'trek/annapurna-base-camp/index.html',
  'trek/gokyo-lakes-trek/index.html',
  'trek/gokyo-lakes-and-cho-la-pass/index.html',
  'trek/manaslu-circuit-trek/index.html',
  'trek/gosaikunda-lake-trek/index.html',
  'trek/langtang-valley-trek/index.html'
];

pages.forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  const s = html.indexOf('class="trek-gallery-collage"');
  const e = html.indexOf('</div>\n    </div>\n\n    <!-- Key Trip Facts', s);
  console.log(`\n========================================`);
  console.log(`Page: ${p}`);
  console.log(`========================================`);
  if (s !== -1) {
    const end = html.indexOf('<!-- Key Trip Facts', s);
    console.log(html.substring(s, end !== -1 ? end : s + 1000));
  }
});
