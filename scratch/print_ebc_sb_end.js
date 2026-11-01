const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sbStart = ebcHtml.indexOf('class="sidebar-booking-card"');
console.log(ebcHtml.slice(sbStart + 4000, sbStart + 7000));
