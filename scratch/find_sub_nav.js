const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('class="trek-sub-nav"');
if (sIdx !== -1) {
  const eIdx = evt.indexOf('</nav>', sIdx) + 6;
  console.log(evt.slice(sIdx - 10, eIdx));
} else {
  console.log('trek-sub-nav not found by exact string, searching sub-nav');
  const s2 = evt.indexOf('sub-nav');
  console.log(evt.slice(s2 - 50, s2 + 400));
}
