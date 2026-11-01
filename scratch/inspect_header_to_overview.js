const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const navEnd = content.indexOf('</header>');
const overviewStart = content.indexOf('<section id="section-overview"');

console.log('From </header> to <section id="section-overview":');
console.log(content.slice(navEnd, overviewStart));
