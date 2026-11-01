const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaq = html.indexOf('id="section-faqs"');
const footerIdx = html.indexOf('<footer');
console.log('sFaq:', sFaq, 'footerIdx:', footerIdx);
console.log('Before footer:');
console.log(html.substring(footerIdx - 120, footerIdx + 50));

