const fs = require('fs');
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

function showSec(id) {
  const startTag = `<section id="${id}"`;
  const start = act.indexOf(startTag);
  const end = act.indexOf('</section>', start) + '</section>'.length;
  console.log(`\n=== ACT ${id} ===\n`, act.substring(start, start + 1000));
}

showSec('section-dates');
showSec('section-packing');
