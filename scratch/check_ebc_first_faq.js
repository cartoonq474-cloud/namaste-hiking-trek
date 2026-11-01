const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const pos = ebcHtml.indexOf('id="faq-cat-general"');
console.log('--- EBC FIRST ITEM IN GENERAL ---');
console.log(ebcHtml.slice(pos, pos + 500));
