const fs = require('fs');
const html = fs.readFileSync('trek/langtang-valley-trek/index.html', 'utf8');
const s6 = html.indexOf('section-details');
const s7 = html.indexOf('section-altitude-profile');
const text = html.substring(s6, s7);
const matches = [...text.matchAll(/class="detail-accordion-title">([^<]+)<\/h4>/g)];
matches.forEach((m, i) => console.log(i + 1, m[1]));
