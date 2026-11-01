const fs = require('fs');

const htmlPath = 'trek/gokyo-lakes-trek/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

console.log('Original length:', html.length);

// 1. Fix "15-day draft" wording
html = html.replaceAll('15-day draft includes', '15-day expedition includes');
html = html.replaceAll('15-day draft itinerary', '15-day expedition itinerary');

// 2. Remove redundant Key Trip Facts table that causes mobile overflow
const tableStartStr = '<!-- Key Trip Facts Table -->';
const tableEndStr = '<!-- Part 2: Where is the Gokyo Lake Trek? -->';
const tableStartIdx = html.indexOf(tableStartStr);
const tableEndIdx = html.indexOf(tableEndStr);

if (tableStartIdx !== -1 && tableEndIdx !== -1) {
  html = html.substring(0, tableStartIdx) + html.substring(tableEndIdx);
  console.log('Removed redundant Key Trip Facts table successfully.');
} else {
  console.warn('Could not find duplicate table markers!');
}

// 3. Align departure pricing: $1,499 -> $1,250 with strikethrough $1,499
const oldPricePattern = /<div class="departure-price"><span class="price-val">\$1,499<\/span> <span class="price-unit">pp<\/span><\/div>/g;
const newPriceReplacement = '<div class="departure-price"><span class="price-old" style="text-decoration: line-through; color: #94a3b8; font-size: 0.85rem; margin-right: 6px; font-weight: 500;">$1,499</span><span class="price-val">$1,250</span> <span class="price-unit">pp</span></div>';
const priceMatches = html.match(oldPricePattern);
console.log('Found price occurrences to update:', priceMatches ? priceMatches.length : 0);
html = html.replaceAll(oldPricePattern, newPriceReplacement);

// 4. Update weather widget data-trek-key from "ebc" to "gokyo"
html = html.replace(
  '<div id="weather-chart-wrapper" data-trek-key="ebc"></div>',
  '<div id="weather-chart-wrapper" data-trek-key="gokyo"></div>'
);

// 5. Update route map from ebc-map.png to gokyo-route-map.jpg
html = html.replace(
  '<img src="../../images/ebc-map.png" alt="Gokyo Lakes Trek Route Map" style="display: block; width: 100%; height: auto; border-radius: var(--radius-md);">',
  '<img src="../../images/gokyo-route-map.jpg" alt="Gokyo Lakes Trek Route Map" style="display: block; width: 100%; height: auto; border-radius: var(--radius-md);">'
);
html = html.replaceAll(
  '<a href="../../images/ebc-map.png" target="_blank"',
  '<a href="../../images/gokyo-route-map.jpg" target="_blank"'
);

// 6. Itinerary photo replacements (replace repetitive EBC team photos with authentic Gokyo lake photos)
// Replaces in itinerary photo grids:
html = html.replaceAll(
  '../../images/treks/everest-base-camp/everest-base-camp-trekkers-team-circle-02.jpg',
  '../../images/treks/gokyo-lakes/gokyo-trek-lakeside-village-04.jpg'
);
html = html.replaceAll(
  '../../images/treks/everest-base-camp/everest-base-camp-trekking-group-village-lodge-08.jpg',
  '../../images/treks/gokyo-lakes/gokyo-trek-turquoise-alpine-lake-03.jpg'
);
html = html.replaceAll(
  '../../images/treks/everest-base-camp/everest-base-camp-mountain-trail-view-12.jpg',
  '../../images/treks/gokyo-lakes/gokyo-trek-hiker-lake-view-05.jpg'
);
html = html.replaceAll(
  '../../images/treks/everest-base-camp/everest-base-camp-trekking-group-trail-monument-04.jpg',
  '../../images/treks/gokyo-lakes/gokyo-trek-lake-mountain-reflection-14.jpg'
);

// 7. Add mobile sticky bottom bar before </body>
const mobileBarHtml = `
  <!-- Mobile Floating Sticky Booking Bar -->
  <aside class="mobile-sticky-bottom-bar" id="mobileStickyBar" aria-label="Mobile Quick Booking">
    <div class="mobile-sticky-bar-inner">
      <div class="mobile-sticky-price">
        <span class="mobile-sticky-label">From</span>
        <div class="mobile-sticky-price-row">
          <span class="mobile-sticky-amount">$1,250</span>
          <span class="mobile-sticky-unit">/ person</span>
        </div>
      </div>
      <div class="mobile-sticky-actions">
        <a href="#section-booking" class="mobile-sticky-btn-book">Book Now</a>
        <a href="https://wa.me/9779851000000?text=Hello%20Namaste%20Hiking%20Trek,%20I%20am%20interested%20in%20the%20Gokyo%20Lake%20Trek%20(15%20Days)" class="mobile-sticky-btn-wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </div>
  </aside>
`;

if (!html.includes('mobile-sticky-bottom-bar')) {
  html = html.replace('</body>', `${mobileBarHtml}\n</body>`);
  console.log('Mobile sticky bottom bar injected.');
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Updated HTML saved. New length:', html.length);
