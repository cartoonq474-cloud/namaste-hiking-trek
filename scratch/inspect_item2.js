const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const item2Start = html.indexOf('<!-- Item 2: Available Food -->');
const item3Start = html.indexOf('<!-- Item 3:', item2Start);

console.log('item2Start:', item2Start, 'item3Start:', item3Start);
console.log(html.substring(item2Start, item3Start));
