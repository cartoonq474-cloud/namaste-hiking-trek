const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const item1Start = html.indexOf('<!-- Item 1: Accommodation -->');
const item2Start = html.indexOf('<!-- Item 2:', item1Start);

console.log('item1Start:', item1Start, 'item2Start:', item2Start);
console.log('--- Current Item 1 Content ---');
console.log(html.substring(item1Start, item2Start));
