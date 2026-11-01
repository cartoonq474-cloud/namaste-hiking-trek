const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sFaqs = gokyo.indexOf('id="section-faqs"');
const sContent = gokyo.indexOf('class="faq-content-column"', sFaqs);
console.log(gokyo.slice(sContent, sContent + 1500));
