const fs = require('fs');
const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

const start = abc.indexOf('id="section-dates"');
const end = abc.indexOf('</section>', start);
console.log(abc.substring(start, end));
