const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<section id="section-faqs"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const chunk = act.substring(start, end);

const faqItemIdx = chunk.indexOf('class="faq-item"');
if (faqItemIdx !== -1) {
  console.log(chunk.substring(faqItemIdx, faqItemIdx + 1000));
} else {
  console.log(chunk.substring(0, 1500));
}
