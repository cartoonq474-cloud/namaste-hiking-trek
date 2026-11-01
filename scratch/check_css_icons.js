const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const classes = [
  'itinerary-metric-icon',
  'itinerary-metrics-grid',
  'trip-fact-item',
  'inc-exc-icon-box',
  'detail-icon-container',
  'icon-svg',
  'icon-sm',
  'icon-xs'
];

classes.forEach(c => {
  const idx = css.indexOf(c);
  console.log(`Class .${c}: ${idx !== -1 ? 'FOUND in index.css at ' + idx : 'NOT FOUND IN index.css!'}`);
});
