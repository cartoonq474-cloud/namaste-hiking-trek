const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const start = content.indexOf('class="rich-highlights-container"');
console.log(content.substring(start, start + 1600));
