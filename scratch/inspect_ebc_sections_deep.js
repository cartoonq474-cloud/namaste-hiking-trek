const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function inspectSec(id) {
  const pos = ebc.indexOf(`id="${id}"`);
  if (pos !== -1) {
    console.log(`\n=================== ${id} ===================`);
    console.log(ebc.substring(pos, pos + 800));
  } else {
    console.log(`\n=================== ${id} NOT FOUND ===================`);
  }
}

inspectSec('section-dates');
inspectSec('section-packing');
inspectSec('section-map');
inspectSec('section-booking');
inspectSec('section-reviews');
inspectSec('section-faqs');
