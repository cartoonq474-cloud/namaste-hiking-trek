const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const footerIdx = html.indexOf('<footer');
console.log('footer index:', footerIdx);
if (footerIdx !== -1) {
  console.log(html.substring(footerIdx, footerIdx + 300));
}
const scriptsIdx = html.indexOf('<script src="../../js/trek-details.js"');
console.log('scripts index:', scriptsIdx);
if (scriptsIdx !== -1) {
  console.log(html.substring(scriptsIdx, scriptsIdx + 500));
}
