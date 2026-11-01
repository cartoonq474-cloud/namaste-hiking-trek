const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const factsStart = template.indexOf('<!-- Key Trip Facts Grid -->');
const nextContainer = template.indexOf('<div class="container">', factsStart);
console.log(template.substring(nextContainer - 200, nextContainer + 200));
