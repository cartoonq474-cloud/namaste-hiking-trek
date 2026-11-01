const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const landmarks = [
  '<!DOCTYPE html>',
  '<head>',
  '</head>',
  '<body',
  '<header',
  '</header>',
  '<main',
  'trek-hero',
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-packing',
  'section-trip-details',
  'section-faqs',
  '<footer',
  '</footer>'
];

landmarks.forEach(lm => {
  const idx = refHtml.indexOf(lm);
  console.log(`${lm}: index ${idx}`);
});
