const { buildSectionOverview } = require('./build_overview_component');
const { buildSectionDates } = require('./build_dates_component');
const { buildSectionPacking } = require('./build_packing_component');
const { buildSectionDetails } = require('./build_details_component');
const { buildSectionReviews } = require('./build_reviews_component');
const { buildSectionFaqs } = require('./build_faqs_component');

function testBalance(name, html) {
  const openCount = (html.match(/<div\b[^>]*>/gi) || []).length;
  const closeCount = (html.match(/<\/div>/gi) || []).length;
  console.log(`${name.padEnd(20)}: ${openCount} open vs ${closeCount} close (Diff: ${openCount - closeCount})`);
}

testBalance('Overview', buildSectionOverview());
testBalance('Dates', buildSectionDates());
testBalance('Packing', buildSectionPacking());
testBalance('Details', buildSectionDetails());
testBalance('Reviews', buildSectionReviews());
testBalance('Faqs', buildSectionFaqs());
