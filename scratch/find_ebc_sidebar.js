const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const faqPos = ebc.indexOf('id="section-faqs"');
if (faqPos !== -1) {
  const faqChunk = ebc.substring(faqPos);
  // Find where section-faqs ends
  const secEnd = faqChunk.indexOf('</section>');
  if (secEnd !== -1) {
    console.log('After section-faqs (first 2500 chars):');
    console.log(faqChunk.substring(secEnd, secEnd + 2500));
  }
}
