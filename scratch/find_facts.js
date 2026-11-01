const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');
const factsIdx = content.indexOf('Key Trip Facts');
if (factsIdx !== -1) {
  console.log(content.substring(factsIdx - 100, factsIdx + 1500));
}
