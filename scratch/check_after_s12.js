const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s12Start = ebc.indexOf('<section id="section-faqs"');
const s12End = ebc.indexOf('</section>', s12Start) + 10;
console.log('After section-faqs:');
console.log(ebc.slice(s12End, s12End + 2000));
