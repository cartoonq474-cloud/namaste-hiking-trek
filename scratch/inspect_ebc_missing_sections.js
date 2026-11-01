const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function getSectionDetails(id) {
  const startTag = `<section id="${id}"`;
  const start = ebc.indexOf(startTag);
  if (start === -1) return null;
  const end = ebc.indexOf('</section>', start) + '</section>'.length;
  const chunk = ebc.substring(start, end);
  return {
    length: chunk.length,
    first500: chunk.substring(0, 500)
  };
}

['section-dates', 'section-packing', 'section-map', 'section-booking', 'section-reviews', 'section-faqs'].forEach(id => {
  const d = getSectionDetails(id);
  console.log(`\n=== ${id} (${d ? d.length : 0} bytes) ===`);
  if (d) console.log(d.first500);
});
