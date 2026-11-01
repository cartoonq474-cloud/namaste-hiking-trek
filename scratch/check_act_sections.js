const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

function extractSection(id) {
  const startTag = `<section id="${id}"`;
  const start = act.indexOf(startTag);
  if (start === -1) return null;
  const end = act.indexOf('</section>', start) + '</section>'.length;
  return act.substring(start, end);
}

['section-dates', 'section-packing', 'section-map', 'section-booking', 'section-reviews', 'section-faqs'].forEach(id => {
  const s = extractSection(id);
  console.log(`ACT ${id}: length = ${s ? s.length : 'NOT FOUND'}`);
});
