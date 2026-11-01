const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

function printAllInstances(term) {
  let idx = 0;
  while ((idx = css.indexOf(term, idx)) !== -1) {
    console.log('--- FOUND AT ' + idx + ' ---');
    console.log(css.slice(Math.max(0, idx - 40), idx + 250));
    idx += term.length;
  }
}

console.log('=== .itinerary-content in index.css ===');
printAllInstances('.itinerary-content');

console.log('\n=== .itinerary-card in index.css ===');
printAllInstances('.itinerary-card.active');
