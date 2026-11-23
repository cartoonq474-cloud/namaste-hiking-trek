const fs = require('fs');

const html = fs.readFileSync('trek/everest-three-high-passes-trek/index.html', 'utf8');

const dayRegex = /<div class="itinerary-day-title-new">[\s\S]*?<span class="day-label">(Day\s*\d+)<\/span>:\s*([^<]+)<\/h4>([\s\S]*?)(?=<div class="itinerary-day-title-new"|<div class="details-summary-card"|<section id="altitude)/gi;

let match;
const days = [];
while ((match = dayRegex.exec(html)) !== null) {
  const dayNum = match[1];
  const dayTitle = match[2].trim();
  const body = match[3];
  const imgs = [];
  const imgR = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let im;
  while ((im = imgR.exec(body)) !== null) {
    imgs.push(im[1]);
  }
  days.push({ dayNum, dayTitle, imgs });
}

console.log('Total itinerary days found:', days.length);
days.forEach(d => {
  console.log(`${d.dayNum}: ${d.dayTitle} (${d.imgs.length} images)`);
  d.imgs.forEach(img => console.log('   -> ' + img));
});
