const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const heroH1 = refHtml.indexOf('<h1');
const overviewStart = refHtml.indexOf('<section id="section-overview"');

console.log('Between Hero H1 and Overview Start is length:', overviewStart - heroH1);
console.log(refHtml.slice(heroH1, heroH1 + 1000));
console.log('--- Middle snippet ---');
console.log(refHtml.slice(overviewStart - 500, overviewStart));
