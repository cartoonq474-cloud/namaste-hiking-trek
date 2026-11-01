const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sbIdx = html.indexOf('sidebar-booking-card');
console.log(html.slice(sbIdx, sbIdx + 3000));

