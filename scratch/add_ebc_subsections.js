const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'trek', 'everest-base-camp-trek', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const targetAnchor = `<p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              The standard Everest Base Camp trekking itinerary takes around 12–14 days from Lukla and back, depending on the route and logistics. A well-paced itinerary includes dedicated acclimatization in Namche Bazaar and Dingboche rather than treating the trek as a race to Base Camp. Nepal Tourism Board describes the classic route as a roughly two-week journey beginning and ending at Lukla, with acclimatization around Namche and Dingboche before the trail continues toward Lobuche, Gorak Shep and Everest Base Camp.
            </p>`;

// Also support matching with \r\n or \n
const targetRegex = /<p style="color: var\(--color-neutral-700\); font-size: 1\.05rem; margin-bottom: 24px; line-height: 1\.7;">\s*The standard Everest Base Camp trekking itinerary takes around 12–14 days from Lukla and back[\s\S]*?<\/p>/;

const newSections = `<p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              The standard Everest Base Camp trekking itinerary takes around 12–14 days from Lukla and back, depending on the route and logistics. A well-paced itinerary includes dedicated acclimatization in Namche Bazaar and Dingboche rather than treating the trek as a race to Base Camp. Nepal Tourism Board describes the classic route as a roughly two-week journey beginning and ending at Lukla, with acclimatization around Namche and Dingboche before the trail continues toward Lobuche, Gorak Shep and Everest Base Camp.
            </p>

            <!-- Subsection 1: What the Everest Base Camp Trek is really like? -->
            <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;">
              What the Everest Base Camp Trek is really like?
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Expect approximately 5–7 hours of walking on most trekking days, with a combination of gradual trails, stone steps, suspension bridges, steep climbs and long descents. The terrain is not technical mountaineering, but the altitude makes ordinary walking considerably more demanding. The challenge increases as you move above Namche, particularly on the approach to Lobuche, Gorak Shep and Kala Patthar.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              You do not need to be an elite athlete or experienced mountaineer to undertake an EBC hike. You do, however, need enough endurance to walk for several consecutive days at altitude, cope with uneven Himalayan terrain and follow a gradual acclimatization schedule. Fitness helps with the physical demands, but altitude adaptation cannot simply be replaced by fitness. That is why the itinerary deliberately builds in acclimatization and why your pace should become slower rather than faster as you gain elevation.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              Altitude is one of the defining characteristics of this trek. You begin around 2,860 m at Lukla and eventually sleep above 5,000 m at Gorak Shep, with Kala Patthar taking you substantially higher for the day. Symptoms of altitude sickness can become a serious concern above 3,000 m, so hydration, gradual ascent, adequate rest and immediate communication with your guide about unusual symptoms are essential. Nepal Tourism Board specifically advises high-altitude trekkers to understand Acute Mountain Sickness, avoid alcohol above 3,000 m and follow designated routes and responsible trekking practices.
            </p>

            <!-- Subsection 2: From Lukla to Everest Base Camp -->
            <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;">
              From Lukla to Everest Base Camp
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              For the classic route, the adventure starts with the journey to Lukla, often described as the gateway to the Everest region. From Lukla, the trail follows the Dudh Koshi valley toward Phakding and Monjo, then climbs toward Namche Bazaar. After acclimatizing around Namche, the route continues toward Tengboche and Dingboche, where the forest gradually gives way to a stark alpine environment.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              Beyond Dingboche, the landscape becomes increasingly dominated by rock, moraine, glaciers and high mountain walls. The trail passes Lobuche and the Thukla memorials before reaching Gorak Shep, the final settlement before Everest Base Camp. From here, trekkers make the excursion to Base Camp and, depending on the itinerary and conditions, climb Kala Patthar for the defining Everest viewpoint. The Nepal Tourism Board identifies this sequence; Lukla, Namche, Tengboche, Dingboche/Pheriche, Lobuche, Gorak Shep, Everest Base Camp and Kala Patthar as the classic Everest Base Camp route.
            </p>

            <!-- Subsection 3: More than a mountain trek -->
            <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;">
              More than a mountain trek
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              One of the reasons the EBC Trek in Nepal remains so distinctive is that the mountain scenery is inseparable from the people and culture of the Khumbu. Sherpa settlements, Buddhist monasteries, chortens, prayer flags, mani walls and teahouses are part of the route rather than attractions added around it. UNESCO describes the Sherpa cultural heritage of Sagarmatha as an integral part of the area's outstanding natural and cultural value.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              You will also encounter an extraordinary Himalayan panorama throughout the route, including Ama Dablam, Thamserku, Kangtega, Lhotse, Nuptse, Pumori, Lobuche, Cholatse, Island Peak and Everest. The scenery changes dramatically from green river valleys and pine-rhododendron forests near Lukla to the exposed moraine and glacier landscapes above the tree line.
            </p>

            <!-- Subsection 4: Is the Everest Base Camp Trek right for you? -->
            <h3 class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;">
              Is the Everest Base Camp Trek right for you?
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The answer depends less on whether you have climbed mountains before and more on whether you are prepared for sustained walking, high altitude, basic mountain accommodation and changing weather.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The trek is a strong choice for first-time high-altitude trekkers who are willing to prepare properly and follow an acclimatization-focused itinerary. Experienced hikers may find the terrain familiar but should still respect the altitude. Families, older trekkers and solo travelers can also undertake the journey with appropriate preparation and professional support.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              For foreign trekkers, the Nepal Tourism Board currently lists the Everest Base Camp Trek among the Everest-region routes requiring a licensed trekking guide and agency-issued TIMS card under the revised TIMS provisions.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              A responsible EBC itinerary therefore prioritizes gradual altitude gain, acclimatization, realistic daily walking times, appropriate equipment, reliable local logistics and contingency planning rather than simply reaching Base Camp as quickly as possible.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 28px; line-height: 1.7;">
              The result is not just a hike to a famous location. It is a journey through the Khumbu Valley and Sagarmatha National Park, combining high-altitude trekking, Himalayan scenery, Sherpa culture, Buddhist heritage and the experience of walking beneath Mount Everest.
            </p>`;

if (!targetRegex.test(content)) {
  console.error('ERROR: Could not find target anchor paragraph in file!');
  process.exit(1);
}

content = content.replace(targetRegex, newSections);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added 4 H3 subsections under Trek Overview in trek/everest-base-camp-trek/index.html');
