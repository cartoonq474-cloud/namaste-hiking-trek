const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('id="section-details"');
const nextSec = html.indexOf('</section>', s);
console.log('Section-details ends at:', nextSec);
console.log('Followed by:');
console.log(html.substring(nextSec, nextSec + 300));
