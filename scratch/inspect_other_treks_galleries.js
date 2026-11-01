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
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const hasGallery = html.includes('class="trek-gallery-collage"');
    console.log(`${p}: has trek-gallery-collage = ${hasGallery}`);
  } else {
    console.log(`${p}: NOT FOUND`);
  }
});
