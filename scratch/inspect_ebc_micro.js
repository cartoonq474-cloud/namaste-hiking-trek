const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function inspectSection(id, maxLen = 1500) {
  const start = ebc.indexOf(`id="${id}"`);
  if (start === -1) {
    console.log(`=== ${id} NOT FOUND ===`);
    return;
  }
  const nextSection = ebc.indexOf('id="section-', start + 20);
  const end = nextSection !== -1 ? nextSection : start + maxLen;
  console.log(`\n=================== ${id} (total length: ${end - start}) ===================`);
  console.log(ebc.slice(start, start + maxLen));
}

inspectSection('section-includes', 1200);
inspectSection('section-dates', 1200);
inspectSection('section-packing', 1200);
inspectSection('section-faqs', 1200);
