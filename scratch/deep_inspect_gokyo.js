const fs = require('fs');

const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

console.log('=== ITINERARY SECTION INSPECTION ===');
const itinMatch = html.match(/<section id="section-itinerary"[\s\S]*?<\/section>/);
if (itinMatch) {
  const itinHtml = itinMatch[0];
  console.log('Itinerary section found, length:', itinHtml.length);
  // Match any cards
  const days = [...itinHtml.matchAll(/Day\s*([0-9]+)/gi)].map(m => m[0]);
  console.log('Days found in itinerary:', [...new Set(days)]);
  // Classes used in itinerary
  const classMatches = [...itinHtml.matchAll(/class="([^"]+)"/g)].map(m => m[1]);
  const uniqueClasses = [...new Set(classMatches.flatMap(c => c.split(/\s+/)))];
  console.log('Itinerary card classes:', uniqueClasses.filter(c => c.includes('itin') || c.includes('card') || c.includes('accor')));
} else {
  console.log('section-itinerary NOT FOUND');
}

console.log('\n=== INCLUDES SECTION INSPECTION ===');
const inclMatch = html.match(/<section id="section-includes"[\s\S]*?<\/section>/);
if (inclMatch) {
  const inclHtml = inclMatch[0];
  console.log('Includes section found, length:', inclHtml.length);
  const classMatches = [...inclHtml.matchAll(/class="([^"]+)"/g)].map(m => m[1]);
  const uniqueClasses = [...new Set(classMatches.flatMap(c => c.split(/\s+/)))];
  console.log('Includes classes:', uniqueClasses.filter(c => c.includes('incl') || c.includes('excl') || c.includes('item') || c.includes('card')));
  const liCount = (inclHtml.match(/<li/g) || []).length;
  console.log('LI elements in includes:', liCount);
} else {
  console.log('section-includes NOT FOUND');
}

console.log('\n=== FAQ SECTION INSPECTION ===');
const faqMatch = html.match(/<section id="section-faqs"[\s\S]*?<\/section>/);
if (faqMatch) {
  const faqHtml = faqMatch[0];
  console.log('FAQ section found, length:', faqHtml.length);
  const faqItems = [...faqHtml.matchAll(/class="([^"]*faq-item[^"]*)"/g)].map(m => m[1]);
  console.log('Total faq-item class matches:', faqItems.length);
  const catPanels = [...faqHtml.matchAll(/class="([^"]*faq-category-content[^"]*|[^"]*faq-category-panel[^"]*)"/g)].map(m => m[1]);
  console.log('FAQ category panels:', catPanels.length);
  // Inspect question titles
  const questions = [...faqHtml.matchAll(/<h4[^>]*>([^<]+)<\/h4>/g)].map(m => m[1].trim());
  console.log('Sample questions (first 5):', questions.slice(0, 5));
  console.log('Total questions found:', questions.length);
  const uniqueQuestions = [...new Set(questions)];
  console.log('Unique questions count:', uniqueQuestions.length);
} else {
  console.log('section-faqs NOT FOUND');
}

console.log('\n=== ALTITUDE SECTION INSPECTION ===');
const altMatch = html.match(/<section id="section-altitude-profile"[\s\S]*?<\/section>/);
if (altMatch) {
  console.log('Altitude section snippet:\n', altMatch[0].slice(0, 500));
}
