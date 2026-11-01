const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const s = html.indexOf('id="section-itinerary"');
const e = html.indexOf('id="section-includes"', s);
const itinBlock = html.substring(s, e);

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let m;
const imgs = [];
while ((m = imgRegex.exec(itinBlock)) !== null) {
  const altM = m[0].match(/alt=["']([^"']*)["']/i);
  imgs.push({
    src: m[1],
    alt: altM ? altM[1] : ''
  });
}

console.log(`Itinerary has ${imgs.length} images:`);
imgs.forEach((img, i) => {
  console.log(`${i + 1}. src="${img.src}" | alt="${img.alt}"`);
});
