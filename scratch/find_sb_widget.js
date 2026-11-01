const fs = require('fs');

const trekJs = fs.readFileSync('js/trek-details.js', 'utf8');

const swIdx = trekJs.indexOf('setupSidebarWidget');
if (swIdx !== -1) {
  console.log('=== setupSidebarWidget ===');
  console.log(trekJs.slice(swIdx, swIdx + 1200));
} else {
  console.log('NOT FOUND');
}
