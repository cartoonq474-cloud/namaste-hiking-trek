const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

// Look for sidebar or booking card in orig
const sidebarMatch = orig.match(/<div class="[^"]*sidebar[^"]*"|<div id="[^"]*sidebar[^"]*"|<div class="sticky-sidebar/gi);
console.log('Sidebar matches in orig:', sidebarMatch);

// Look for the end of section-faqs
const faqsIndex = orig.indexOf('id="section-faqs"');
if (faqsIndex !== -1) {
  const faqsEnd = orig.indexOf('</section>', faqsIndex);
  console.log('After section-faqs:');
  console.log(orig.slice(faqsEnd + 10, faqsEnd + 3000));
}
