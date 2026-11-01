const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const sbcPos = html.indexOf('class="sidebar-booking-card"');
console.log(html.substring(sbcPos + 1000, sbcPos + 2500));
