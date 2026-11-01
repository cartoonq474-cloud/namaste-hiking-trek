const getSection7to12 = require('./gen_everest_section7_12');
const sec7_12_full = getSection7to12();

const faqsStart = sec7_12_full.indexOf('id="section-faqs"');
const faqsEnd = sec7_12_full.indexOf('</section>', faqsStart) + 10;
const leftColContent = sec7_12_full.slice(0, faqsEnd);

console.log('Left column content length:', leftColContent.length);
console.log('Ends with:');
console.log(leftColContent.slice(-150));
