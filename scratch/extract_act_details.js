const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

function getSection(id) {
  const startTag = `<section id="${id}"`;
  const start = act.indexOf(startTag);
  if (start === -1) return '';
  const end = act.indexOf('</section>', start) + '</section>'.length;
  return act.substring(start, end);
}

const details = getSection('section-details');
console.log('Details length:', details.length);
console.log('First 600 chars:\n', details.substring(0, 600));
