const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sbStart = ebcHtml.indexOf('<div class="sidebar-booking-card">');
const sbEnd = ebcHtml.indexOf('</div>\n        </div>\n      </div>', sbStart);

console.log('--- FULL EBC SIDEBAR BOOKING CARD ---');
console.log(ebcHtml.slice(sbStart, sbEnd + 30));
