const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actSbEnd = actHtml.indexOf('Call Us Directly');
const ebcSbEnd = ebcHtml.indexOf('Call Us');

console.log('--- ACT after Call Us (600 chars) ---');
console.log(actHtml.slice(actSbEnd, actSbEnd + 600));

console.log('\n--- EBC after Call Us (600 chars) ---');
console.log(ebcHtml.slice(ebcSbEnd, ebcSbEnd + 600));
