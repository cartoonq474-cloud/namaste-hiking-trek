const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const pos = ebcHtml.indexOf('<div class="sidebar-booking-card">');
const end = ebcHtml.indexOf('</section>\n\n  <section class="you-might-like-section">', pos);
console.log(ebcHtml.slice(pos - 100, end + 30));
