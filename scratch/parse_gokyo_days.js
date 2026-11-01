const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-itinerary"');
const eIdx = gokyo.indexOf('id="section-includes"');
const itin = gokyo.slice(sIdx, eIdx);

const dayCards = itin.split(/<!--\s*Day\s*(\d+)\s*-->/i);
console.log('Split segments length:', dayCards.length);

const daysData = [];
for (let i = 1; i < dayCards.length; i += 2) {
  const dayNum = parseInt(dayCards[i]);
  const content = dayCards[i + 1];
  
  const titleMatch = content.match(/<h3 class="itinerary-title">([^<]+)<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : `Day ${dayNum}`;
  
  const metricsMatches = content.match(/<span class="itinerary-metric-label">([^<]+)<\/span>\s*<span class="itinerary-metric-val">([^<]+)<\/span>/g) || [];
  const metrics = {};
  metricsMatches.forEach(m => {
    const lbl = m.match(/<span class="itinerary-metric-label">([^<]+)<\/span>/)[1].trim();
    const val = m.match(/<span class="itinerary-metric-val">([^<]+)<\/span>/)[1].trim();
    metrics[lbl] = val;
  });
  
  const pMatch = content.match(/<p class="itinerary-text">([\s\S]*?)<\/p>/);
  const text = pMatch ? pMatch[1].trim() : '';
  
  const imgMatches = content.match(/<img[^>]+src="([^">]+)"[^>]+alt="([^">]+)"/g) || [];
  const imgs = imgMatches.map(img => {
    const s = img.match(/src="([^">]+)"/)[1];
    const a = img.match(/alt="([^">]+)"/)[1];
    return { src: s, alt: a };
  });

  daysData.push({ dayNum, title, metrics, textLength: text.length, imgCount: imgs.length });
}

console.log('Parsed Days:');
console.log(daysData);
