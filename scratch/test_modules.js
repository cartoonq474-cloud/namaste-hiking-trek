const { generateOverviewHtml } = require('./build_act_overview');
const { generateItineraryHtml } = require('./build_act_itinerary');
const { generateGuidesHtml } = require('./build_act_guides');
const { generateIncludesHtml, generatePackingHtml } = require('./build_act_includes_packing');
const {
  generateAltitudeProfileHtml,
  generateDatesHtml,
  generateFaqsHtml,
  generateSidebarHtml
} = require('./build_act_altitude_faqs');

console.log('Testing modules:');
console.log('Overview length:', generateOverviewHtml().length);
console.log('Itinerary length:', generateItineraryHtml().length);
console.log('Guides length:', generateGuidesHtml().length);
console.log('Includes length:', generateIncludesHtml().length);
console.log('Packing length:', generatePackingHtml().length);
console.log('Altitude length:', generateAltitudeProfileHtml().length);
console.log('Dates length:', generateDatesHtml().length);
console.log('Faqs length:', generateFaqsHtml().length);
console.log('Sidebar length:', generateSidebarHtml().length);
console.log('All modules compiled successfully!');
