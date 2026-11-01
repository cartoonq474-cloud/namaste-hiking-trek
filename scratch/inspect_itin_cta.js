const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const ctaIdx = html.indexOf('<div class="custom-trip-cta-card">');
const s3Idx = html.indexOf('<section id="section-includes"');

console.log(html.slice(ctaIdx, s3Idx));

