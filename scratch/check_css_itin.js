const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const classes = [
  'itinerary-card',
  'itinerary-day-title-new',
  'itinerary-accordion-card',
  'itinerary-header',
  'itinerary-toggle-circle',
  'itinerary-toggle-btn-new',
  'itinerary-day-badge',
  'itinerary-timeline',
  'itinerary-header-left',
  'itinerary-header-right',
  'itinerary-content',
  'itinerary-content-inner',
  'itinerary-metrics-list'
];

classes.forEach(cls => {
  const count = (css.match(new RegExp('\\.' + cls, 'g')) || []).length;
  console.log(`.${cls}: ${count} matches in index.css`);
});
