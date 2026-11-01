const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const pos = ebcHtml.indexOf('<div class="sidebar-booking-card">');
console.log('pos:', pos);
console.log(ebcHtml.slice(pos - 100, pos + 4500));
