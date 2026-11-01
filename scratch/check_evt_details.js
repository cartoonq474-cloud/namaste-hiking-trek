const fs = require('fs');

const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const pos = html.indexOf('Read before you book');
console.log('Pos in EVT:', pos);
if (pos !== -1) {
  console.log(html.substring(pos - 100, pos + 2500));
}
