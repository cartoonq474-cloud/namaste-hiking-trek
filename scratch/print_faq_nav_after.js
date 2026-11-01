const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sFaqs = gokyo.indexOf('id="section-faqs"');
console.log(gokyo.slice(sFaqs + 2500, sFaqs + 4500));
