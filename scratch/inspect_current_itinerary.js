const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find all day cards
const dayRegex = /<!--\s*Day\s*(\d+)\s*-->([\s\S]*?)(?=<!--\s*Day\s*\d+\s*-->|<div class="itinerary-actions|<section|<\/article|$)/gi;

let matches = [];
let match;
while ((match = dayRegex.exec(content)) !== null) {
  const dayNum = parseInt(match[1]);
  const cardHtml = match[2];
  
  // Extract title
  const titleMatch = cardHtml.match(/<h4[^>]*class="itinerary-day-title-new"[^>]*>([\s\S]*?)<\/h4>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO TITLE';
  
  // Extract subtitle
  const subMatch = cardHtml.match(/<p[^>]*class="itinerary-day-subtitle-new"[^>]*>([\s\S]*?)<\/p>/i);
  const subtitle = subMatch ? subMatch[1].replace(/<[^>]+>/g, '').trim() : 'NO SUBTITLE';
  
  // Extract paragraphs from itinerary-description
  const descMatch = cardHtml.match(/<div class="itinerary-description">([\s\S]*?)<\/div>/i);
  const desc = descMatch ? descMatch[1].trim() : 'NO DESC';
  
  // Extract meta box items
  const metaMatch = cardHtml.match(/<div class="itinerary-meta-box">([\s\S]*?)<\/div>/i);
  const meta = metaMatch ? metaMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NO META';

  // Extract metrics list
  const metricsMatch = cardHtml.match(/<div class="itinerary-metrics-list">([\s\S]*?)<\/div>/i);
  const metrics = metricsMatch ? metricsMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NO METRICS';

  matches.push({ dayNum, title, subtitle, metrics, meta, descPreview: desc.substring(0, 100).replace(/\r?\n/g, ' ') });
}

console.log('Total day cards found:', matches.length);
matches.forEach(m => {
  console.log(`\n--- Day ${m.dayNum} ---`);
  console.log('Title:', m.title);
  console.log('Subtitle:', m.subtitle);
  console.log('Metrics:', m.metrics);
  console.log('Meta:', m.meta);
  console.log('Desc preview:', m.descPreview);
});
