const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const start = ebc.indexOf('ebc-highlights-grid');
if (start !== -1) {
  console.log(ebc.substring(start, start + 1500));
}
