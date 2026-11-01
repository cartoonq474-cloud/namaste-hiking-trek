const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sbIdx = html.indexOf('sidebar-booking-card');
console.log('Sidebar booking card index:', sbIdx);
if (sbIdx !== -1) {
  console.log(html.slice(sbIdx - 100, sbIdx + 800));
}

