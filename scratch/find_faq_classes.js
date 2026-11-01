const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sFaq = html.indexOf('id="section-faqs"');
const secFaq = html.substring(sFaq);

const contentIdx = secFaq.indexOf('class="faq-content-area"');
if (contentIdx !== -1) {
  console.log(secFaq.substring(contentIdx, contentIdx + 1200));
} else {
  console.log('faq-content-area not found, finding any class in secFaq:');
  const cls = secFaq.match(/class="[^"]*faq[^"]*"/g);
  console.log([...new Set(cls)]);
}

