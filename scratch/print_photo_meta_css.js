const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

function findCssBlock(selector) {
  const idx = css.indexOf(selector);
  if (idx === -1) return `${selector} not found`;
  return css.slice(idx, idx + 1000);
}

console.log('=== .itinerary-photos-grid ===');
console.log(findCssBlock('.itinerary-photos-grid'));

console.log('\n=== .itinerary-meta-box ===');
console.log(findCssBlock('.itinerary-meta-box'));

console.log('\n=== .itinerary-metrics-list ===');
console.log(findCssBlock('.itinerary-metrics-list'));
