const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const markers = [
  '<!DOCTYPE html>',
  '<header class="main-header',
  '<main',
  '<section style="padding: 30px 0 10px 0',
  '<div class="trek-gallery-collage',
  'Key Trip Facts',
  'class="trek-sub-nav',
  'id="section-overview"',
  'id="section-itinerary"',
  'id="section-includes"',
  'id="section-dates"',
  'id="section-packing"',
  'id="section-details"',
  'id="section-altitude-profile"',
  'id="section-weather"',
  'id="section-map"',
  'id="section-booking"',
  'id="section-reviews"',
  'id="section-faqs"',
  'class="sidebar-booking-card"',
  'You Might Also Like',
  '<footer class="main-footer',
  '</body>'
];

markers.forEach(m => {
  const idx = html.indexOf(m);
  console.log(`${m.padEnd(35)} : index ${idx}`);
});
