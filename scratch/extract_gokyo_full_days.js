const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Let's find the itinerary section
const startItin = gokyo.indexOf('id="section-itinerary"');
const endItin = gokyo.indexOf('</section>', startItin);
const itinSection = gokyo.slice(startItin, endItin + 10);

console.log('Itinerary section length:', itinSection.length);

// Let's extract each day
const cardRegex = /<div class="itinerary-accordion-card[^"]*" data-day="(\d+)">([\s\S]*?)(?=<div class="itinerary-accordion-card|<\/div>\s*<\/section>)/g;

let match;
const days = [];
while ((match = cardRegex.exec(itinSection)) !== null) {
  const dayNum = parseInt(match[1]);
  const content = match[2];

  const titleMatch = content.match(/<h3 class="itinerary-title">([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const quickMetaMatches = [...content.matchAll(/<span>([\s\S]*?)<\/span>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  const metricMatches = [...content.matchAll(/<span class="itinerary-metric-label">([\s\S]*?)<\/span>\s*<span class="itinerary-metric-val">([\s\S]*?)<\/span>/g)].map(m => ({
    label: m[1].trim(),
    val: m[2].trim()
  }));

  const textMatch = content.match(/<p class="itinerary-text">([\s\S]*?)<\/p>/);
  const text = textMatch ? textMatch[1].trim() : '';

  const imgMatches = [...content.matchAll(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]+)"/g)].map(m => ({
    src: m[1],
    alt: m[2]
  }));

  days.push({
    dayNum,
    title,
    quickMeta: quickMetaMatches,
    metrics: metricMatches,
    text,
    images: imgMatches
  });
}

console.log('Extracted days:', days.length);
fs.writeFileSync('scratch/gokyo_days_data.json', JSON.stringify(days, null, 2));
console.log('Saved to scratch/gokyo_days_data.json');
