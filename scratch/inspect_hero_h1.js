const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const heroH1 = refHtml.indexOf('<h1');
console.log('Hero H1 is at:', heroH1);
console.log(refHtml.slice(heroH1 - 200, heroH1 + 400));
