const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const faqIdx = js.indexOf('faq');
console.log('faq mentions in trek-details.js:');
let pos = 0;
while ((pos = js.indexOf('faq', pos)) !== -1) {
  console.log(`Found 'faq' at char ${pos}:`);
  console.log(js.slice(pos - 20, pos + 300));
  pos += 300;
}
