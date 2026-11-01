const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaq = html.indexOf('id="section-faqs"');
const endSecFaq = html.indexOf('</section>', sFaq);
console.log('sFaq:', sFaq, 'endSecFaq:', endSecFaq);
console.log('Around endSecFaq:');
console.log(html.substring(endSecFaq - 50, endSecFaq + 200));

