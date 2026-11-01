const fs = require('fs');

const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const detailsPos = html.indexOf('id="section-details"');
if (detailsPos !== -1) {
  console.log(html.substring(detailsPos, detailsPos + 3000));
}
