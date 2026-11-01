const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const sOverview = refHtml.indexOf('<section id="section-overview"');
const sItin = refHtml.indexOf('<section id="section-itinerary"');
const sInc = refHtml.indexOf('id="section-includes"');
const sDates = refHtml.indexOf('id="section-dates"');
const sPack = refHtml.indexOf('id="section-packing"');
const sDet = refHtml.indexOf('id="section-details"');
const sAlt = refHtml.indexOf('id="section-altitude-profile"');
const sMap = refHtml.indexOf('id="section-map"');
const sWeather = refHtml.indexOf('id="section-weather"');
const sRev = refHtml.indexOf('id="section-reviews"');
const sFaqs = refHtml.indexOf('id="section-faqs"');

console.log({
  sOverview,
  sItin,
  sInc,
  sDates,
  sPack,
  sDet,
  sAlt,
  sMap,
  sWeather,
  sRev,
  sFaqs
});
