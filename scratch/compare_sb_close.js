const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const actSbIdx = actHtml.indexOf('INSTANT HELP');
const ebcSbIdx = ebcHtml.indexOf('INSTANT HELP');

console.log('--- ACT after INSTANT HELP (1000 chars) ---');
console.log(actHtml.slice(actSbIdx, actSbIdx + 1000));

console.log('\n--- EBC after INSTANT HELP (1000 chars) ---');
console.log(ebcHtml.slice(ebcSbIdx, ebcSbIdx + 1000));
