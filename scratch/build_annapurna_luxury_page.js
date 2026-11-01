const fs = require('fs');
const path = require('path');

const headHero = require('./content_abc_luxury_head_hero');
const overview = require('./content_abc_luxury_overview');
const itinerary = require('./content_abc_luxury_itinerary');
const includesDatesPacking = require('./content_abc_luxury_includes_dates_packing');
const guides = require('./content_abc_luxury_guides');
const altitudeWeatherFaqs = require('./content_abc_luxury_altitude_weather_faqs');

const targetDir = path.join(__dirname, '..', 'trek', 'annapurna-base-camp-luxury-trek');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, 'index.html');

console.log('Assembling Annapurna Base Camp Luxury Trek page...');

const parts = [
  headHero.getHeadAndHero(),
  `    <!-- Main Content Layout with Sticky Booking Sidebar -->
    <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="abc_luxury">
      <div class="container trek-detail-layout" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
        
        <!-- Main Details Column (Sequential Sections) -->
        <div style="min-width: 0;">`,
  overview.getOverviewSection(),
  itinerary.getItinerarySection(),
  includesDatesPacking.getIncludesDatesPackingSection(),
  guides.getGuidesSection(),
  altitudeWeatherFaqs.getAltitudeWeatherFaqsSection()
];

const fullHtml = parts.join('\n');

fs.writeFileSync(targetFile, fullHtml, 'utf8');

console.log('File successfully written to:', targetFile);
console.log('File size in bytes:', Buffer.byteLength(fullHtml, 'utf8'));
console.log('Total characters:', fullHtml.length);

// Audit checks
const itinCards = [...fullHtml.matchAll(/class="itinerary-card/g)].length;
const detailGuides = [...fullHtml.matchAll(/class="detail-accordion-card/g)].length;
const faqItems = [...fullHtml.matchAll(/class="faq-item"/g)].length;
const sectionIds = [...fullHtml.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);

console.log('\n--- AUDIT RESULTS ---');
console.log('Itinerary cards count:', itinCards);
console.log('Detail guides count:', detailGuides);
console.log('FAQ items count:', faqItems);
console.log('Section IDs:', sectionIds);

// Check for any AI emojis (surrogate pairs or unicode emoji ranges)
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const emojiMatches = fullHtml.match(new RegExp(emojiRegex, 'gu'));
if (emojiMatches && emojiMatches.length > 0) {
  console.warn('WARNING: Found emojis in HTML:', emojiMatches);
} else {
  console.log('EMOJI CHECK: PASSED (Zero emojis found, 100% SVG icons!)');
}
