const fs = require('fs');
const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Look for Day in itinerary
const itinSnippet = html.substring(html.indexOf('id="section-itinerary"'), html.indexOf('id="section-itinerary"') + 2000);
console.log('--- Itinerary snippet ---');
console.log(itinSnippet);

// Look for Section details snippet
const detailsSnippet = html.substring(html.indexOf('id="section-details"'), html.indexOf('id="section-details"') + 2000);
console.log('--- Details snippet ---');
console.log(detailsSnippet);

// Look for FAQs snippet
const faqsSnippet = html.substring(html.indexOf('id="section-faqs"'), html.indexOf('id="section-faqs"') + 2000);
console.log('--- FAQs snippet ---');
console.log(faqsSnippet);
