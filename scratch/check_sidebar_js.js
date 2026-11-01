const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('Mentions of group-discount in trek-details.js:');
let pos = 0;
while ((pos = js.indexOf('group-discount', pos)) !== -1) {
  console.log(js.slice(pos - 30, pos + 200));
  pos += 200;
}

console.log('Mentions of sidebar-booking in trek-details.js:');
pos = 0;
while ((pos = js.indexOf('sidebar-booking', pos)) !== -1) {
  console.log(js.slice(pos - 30, pos + 200));
  pos += 200;
}
