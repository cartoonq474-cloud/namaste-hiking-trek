const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaq = html.indexOf('id="section-faqs"');
console.log('sFaq index:', sFaq);
console.log('Before sFaq:');
console.log(html.substring(sFaq - 120, sFaq + 50));

