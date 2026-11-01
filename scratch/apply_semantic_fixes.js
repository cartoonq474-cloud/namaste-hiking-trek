const fs = require('fs');

let html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. Why Book: change h4.why-book-card-title to div.why-book-card-title (User's primary request)
html = html.replace(/<h4 class="why-book-card-title">([\s\S]*?)<\/h4>/g, '<div class="why-book-card-title">$1</div>');

// 2. Includes & Excludes: change h4.inc-exc-card-title to div.inc-exc-card-title
html = html.replace(/<h4 class="inc-exc-card-title">([\s\S]*?)<\/h4>/g, '<div class="inc-exc-card-title">$1</div>');

// 3. Departure dates: change h4.departure-title to div.departure-title
html = html.replace(/<h4 class="departure-title">([\s\S]*?)<\/h4>/g, '<div class="departure-title">$1</div>');

// 4. Key Trip Facts: change h3 to h2
html = html.replace(
  /<h3([^>]*display:\s*flex[^>]*)>\s*(<svg[\s\S]*?<\/svg>)\s*Key Trip Facts\s*<\/h3>/g,
  '<h2$1>$2 Key Trip Facts</h2>'
);

// 5. Section-details accordions: change h4.detail-accordion-title to h3.detail-accordion-title
html = html.replace(/<h4 class="detail-accordion-title">([\s\S]*?)<\/h4>/g, '<h3 class="detail-accordion-title">$1</h3>');

// And within section-details, change all h5 to h4
const detailsStart = html.indexOf('id="section-details"');
const detailsEnd = html.indexOf('</section>', detailsStart);
if (detailsStart !== -1 && detailsEnd !== -1) {
  let detailsBlock = html.substring(detailsStart, detailsEnd);
  detailsBlock = detailsBlock.replace(/<h5\b([^>]*)>([\s\S]*?)<\/h5>/g, '<h4$1>$2</h4>');
  html = html.substring(0, detailsStart) + detailsBlock + html.substring(detailsEnd);
}

// 6. Footer CTA: change h2.footer-cta-title to div.footer-cta-title
html = html.replace(/<h2 class="footer-cta-title">([\s\S]*?)<\/h2>/g, '<div class="footer-cta-title">$1</div>');

// 7. FAQ section: change faq-active-category-title h3 to div
html = html.replace(/<h3 class="faq-active-category-title" id="faq-current-category-title">([\s\S]*?)<\/h3>/g, '<div class="faq-active-category-title" id="faq-current-category-title">$1</div>');

// 8. FAQ section: change question span to h3.faq-question-title
const faqStart = html.indexOf('id="section-faqs"');
const faqEnd = html.indexOf('</section>', faqStart);
if (faqStart !== -1 && faqEnd !== -1) {
  let faqBlock = html.substring(faqStart, faqEnd + 10);
  faqBlock = faqBlock.replace(
    /<div class="faq-item-question">\s*<span>([\s\S]*?)<\/span>\s*<span class="faq-toggle-circle">/g,
    '<div class="faq-item-question">\n                      <h3 class="faq-question-title">$1</h3>\n                      <span class="faq-toggle-circle">'
  );
  html = html.substring(0, faqStart) + faqBlock + html.substring(faqEnd + 10);
}

fs.writeFileSync('trek/everest-base-camp-trek/index.html', html, 'utf8');
console.log('Successfully written semantic hierarchy fixes to trek/everest-base-camp-trek/index.html');
