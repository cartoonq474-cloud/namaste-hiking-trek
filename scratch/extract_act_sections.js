const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

function getSection(id) {
  const startTag = `<section id="${id}"`;
  const start = act.indexOf(startTag);
  if (start === -1) return '';
  const end = act.indexOf('</section>', start) + '</section>'.length;
  return act.substring(start, end);
}

const dates = getSection('section-dates');
const packing = getSection('section-packing');
const map = getSection('section-map');
const booking = getSection('section-booking');
const reviews = getSection('section-reviews');
const faqs = getSection('section-faqs');

console.log('Dates length:', dates.length);
console.log('Packing length:', packing.length);
console.log('Map length:', map.length);
console.log('Booking length:', booking.length);
console.log('Reviews length:', reviews.length);
console.log('Faqs length:', faqs.length);
