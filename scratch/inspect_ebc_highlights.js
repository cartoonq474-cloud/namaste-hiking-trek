const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = html.indexOf('class="ebc-highlights-section"');
const endIdx = html.indexOf('class="why-book-section"');

console.log('EBC Highlights length:', endIdx - startIdx);
// Let's print the first 2 cards of EBC
const firstCard = html.indexOf('class="ebc-highlight-card"', startIdx);
const thirdCard = html.indexOf('class="ebc-highlight-card"', html.indexOf('class="ebc-highlight-card"', firstCard + 1) + 1);

console.log(html.substring(firstCard, thirdCard));
