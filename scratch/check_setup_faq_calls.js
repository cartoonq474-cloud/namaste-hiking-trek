const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

let pos = 0;
while ((pos = js.indexOf('setupFaqSection', pos)) !== -1) {
  console.log('setupFaqSection mention at:', pos);
  console.log(js.slice(pos - 50, pos + 100));
  pos += 100;
}
