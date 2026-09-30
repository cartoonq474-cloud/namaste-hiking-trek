const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'trek', 'everest-base-camp-trek', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const oldParagraphsRegex = /<section id="section-overview" class="trek-detail-section">\s*<h2 class="trek-section-title">Trek Overview<\/h2>\s*<p[\s\S]*?<\/p>\s*<p[\s\S]*?<\/p>/;

const newContent = `<section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Trek Overview</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The Everest Base Camp Trek is a high-altitude journey through the heart of Nepal’s Khumbu region, taking you from the mountain gateway of Lukla through Sherpa villages, Buddhist monasteries, glacial valleys and some of the most recognizable Himalayan scenery in the world. The classic route leads through Phakding, Namche Bazaar, Tengboche, Pangboche, Dingboche, Lobuche and Gorak Shep before reaching Everest Base Camp at <span data-altitude-m="5364">5,364 m (17,598 ft)</span> and ascending Kala Patthar at about <span data-altitude-m="5545">5,545 m (18,192 ft)</span> for the clearest panoramic view of Mount Everest.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              This is a trek to Everest Base Camp, not a climb of Mount Everest. The summit of Everest stands at 8,848.86 m, while the trek takes you into the high Himalayan environment beneath the world's highest mountain. From Base Camp, Everest itself is partly hidden by the surrounding peaks, particularly Nuptse. The classic Everest view comes from Kala Patthar, where Everest, Lhotse, Nuptse, Pumori, and other Himalayan giants form the skyline.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The journey is as much about reaching the destination as it is about experiencing the landscape and communities along the way. You cross suspension bridges over the Dudh Koshi, enter Sagarmatha National Park, walk through rhododendron and alpine landscapes, pass mani walls and prayer wheels, and spend nights in locally operated mountain teahouses. At Namche Bazaar, the traditional trading centre of the Khumbu, and Tengboche, home to one of the region's best-known Buddhist monasteries, the trail becomes a meeting point between Himalayan nature, Sherpa culture and modern trekking life. Sagarmatha National Park is also a UNESCO World Heritage Site, recognized for its exceptional mountain, glacier, and valley landscapes and its close connection with Sherpa culture.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              The standard Everest Base Camp trekking itinerary takes around 12–14 days from Lukla and back, depending on the route and logistics. A well-paced itinerary includes dedicated acclimatization in Namche Bazaar and Dingboche rather than treating the trek as a race to Base Camp. Nepal Tourism Board describes the classic route as a roughly two-week journey beginning and ending at Lukla, with acclimatization around Namche and Dingboche before the trail continues toward Lobuche, Gorak Shep and Everest Base Camp.
            </p>`;

if (!oldParagraphsRegex.test(content)) {
  console.error('ERROR: Could not find section-overview pattern in file!');
  process.exit(1);
}

content = content.replace(oldParagraphsRegex, newContent);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Trek Overview in trek/everest-base-camp-trek/index.html');
