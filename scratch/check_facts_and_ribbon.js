const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const factsStart = template.indexOf('<!-- Key Trip Facts Grid -->');
console.log('Template around factsStart:');
console.log(template.substring(factsStart, factsStart + 1500));

const nextComment = template.indexOf('<!--', factsStart + 30);
console.log('\nNext comment after factsStart:', template.substring(nextComment, nextComment + 60));

const ribbonIdx = template.indexOf('BEST SELLER');
console.log('\nRibbon in template:');
console.log(template.substring(ribbonIdx - 100, ribbonIdx + 150));
