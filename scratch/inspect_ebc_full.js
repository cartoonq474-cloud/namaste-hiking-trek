const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Footer
const footerMatch = ebc.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  fs.writeFileSync('scratch/ebc_footer.html', footerMatch[0]);
  console.log('Saved ebc_footer.html, length:', footerMatch[0].length);
}

// Sidebar
const sidebarMatch = ebc.match(/<aside class="trek-sidebar-sticky"[\s\S]*?<\/aside>/i);
if (sidebarMatch) {
  fs.writeFileSync('scratch/ebc_sidebar.html', sidebarMatch[0]);
  console.log('Saved ebc_sidebar.html, length:', sidebarMatch[0].length);
}

// Dates
const datesMatch = ebc.match(/<section[^>]*id="section-dates"[\s\S]*?<\/section>/i);
if (datesMatch) {
  fs.writeFileSync('scratch/ebc_dates.html', datesMatch[0]);
  console.log('Saved ebc_dates.html, length:', datesMatch[0].length);
}

// Reviews
const reviewsMatch = ebc.match(/<section[^>]*id="section-reviews"[\s\S]*?<\/section>/i);
if (reviewsMatch) {
  fs.writeFileSync('scratch/ebc_reviews.html', reviewsMatch[0]);
  console.log('Saved ebc_reviews.html, length:', reviewsMatch[0].length);
}

// FAQs
const faqsMatch = ebc.match(/<section[^>]*id="section-faqs"[\s\S]*?<\/section>/i);
if (faqsMatch) {
  fs.writeFileSync('scratch/ebc_faqs.html', faqsMatch[0]);
  console.log('Saved ebc_faqs.html, length:', faqsMatch[0].length);
}
