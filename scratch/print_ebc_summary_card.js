const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const sStart = html.indexOf('class="platform-summary-card"');
console.log(html.substring(sStart, sStart + 1500));
