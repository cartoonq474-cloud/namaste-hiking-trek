const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const comments = [
  '<!-- Section 1: Overview -->',
  '<!-- Section 2: Itinerary -->',
  '<!-- Section 3: Includes and Excludes -->',
  '<!-- Section 4: Dates and Availability -->',
  '<!-- Section 5: Packing List -->',
  '<!-- Section 6: Important Details & Trip Notes -->',
  '<!-- Section: Elevation Profile Interactive Chart -->',
  '<!-- Section: Weather Forecast / Best Seasons -->',
  '<!-- Section: Route Map -->',
  '<!-- Section: Reviews -->',
  '<!-- Section: Frequently Asked Questions -->'
];

comments.forEach(c => {
  console.log(`${c}: index ${refHtml.indexOf(c)}`);
});
