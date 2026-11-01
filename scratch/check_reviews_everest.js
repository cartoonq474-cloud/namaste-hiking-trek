const fs = require('fs');

const content = fs.readFileSync('reviews.html', 'utf8');
const everestIdx = content.indexOf('Everest', content.indexOf('<nav'));
console.log(content.substring(everestIdx, everestIdx + 1000));
