const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const revStart = ebc.indexOf('id="section-reviews"');
const revEnd = ebc.indexOf('id="section-faqs"');
const revHtml = ebc.substring(revStart, revEnd);

const ids = [...revHtml.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log('IDs in Reviews:', ids);

const btnTargets = [...revHtml.matchAll(/data-target="([^"]+)"/g)].map(m => m[1]);
console.log('Button data-targets:', btnTargets);
