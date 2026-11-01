const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const start = content.indexOf('id="section-reviews"');
const end = content.indexOf('id="section-faqs"');
console.log('Reviews length:', end - start);
console.log('First 600 chars of reviews:\n', content.slice(start, start + 600));
