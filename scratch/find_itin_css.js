const fs = require('fs');

const cssContent = fs.readFileSync('index.css', 'utf8');

const classes = [
  'itinerary-card',
  'itinerary-header',
  'itinerary-day-title-new',
  'day-label',
  'itinerary-day-subtitle-new',
  'itinerary-toggle-btn-new',
  'itinerary-content',
  'itinerary-metrics-list',
  'itinerary-metric-item',
  'itinerary-meta-box',
  'itinerary-meta-box-item',
  'itinerary-description',
  'itinerary-photos-grid',
  'itinerary-photo-wrapper'
];

classes.forEach(cls => {
  const regex = new RegExp(`\\.${cls}[\\s\\S]*?\\{([\\s\\S]*?)\\}`, 'i');
  const m = cssContent.match(regex);
  if (m) {
    console.log(`=== .${cls} ===`);
    console.log(m[0].slice(0, 300));
  } else {
    console.log(`=== .${cls} NOT IN index.css ===`);
  }
});
