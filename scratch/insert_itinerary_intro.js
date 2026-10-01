const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

const titleTarget = '<h2 class="trek-section-title">Everest Base Camp Trek Itinerary: Day by Day Details</h2>';
const titleIdx = content.indexOf(titleTarget);
const timelineTarget = '<div class="itinerary-timeline">';
const timelineIdx = content.indexOf(timelineTarget, titleIdx);

if (titleIdx === -1 || timelineIdx === -1) {
  console.error('Failed to locate insertion targets', { titleIdx, timelineIdx });
  process.exit(1);
}

const beforeText = content.substring(0, titleIdx + titleTarget.length);
const afterText = content.substring(timelineIdx);

const newIntroHTML = `

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 14-day Everest Base Camp Trek itinerary is built around a gradual approach to high altitude rather than a race to Everest Base Camp. The classic route takes you from Kathmandu to Lukla, then through Phakding, Namche Bazaar, Tengboche, Dingboche, Lobuche and Gorak Shep before reaching Everest Base Camp at <span data-altitude-m="5364">5,364 m (17,598 ft)</span> and climbing Kala Patthar at approximately <span data-altitude-m="5545">5,545 m (18,192 ft)</span>.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The itinerary includes 11 scheduled trekking days, including two acclimatization days, plus your Kathmandu arrival, Kathmandu return and final departure. The exact walking time each day is approximate and can change according to weather, trail conditions, group pace and how you are responding to altitude.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              The classic Everest route begins at Lukla and follows the Dudh Koshi valley toward Namche Bazaar, then continues through Tengboche and the upper Khumbu before reaching Lobuche, Gorak Shep, Everest Base Camp and Kala Patthar. Nepal Tourism Board also recommends allowing time to acclimatize around Namche and Dingboche rather than trying to complete the route in a hurry.
            </p>

            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
              Before Your Everest Base Camp Trek Starts
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The start date you select is your arrival date in Kathmandu. Your actual trek normally begins the following morning after your pre-trek preparation and briefing.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              For example, if your trip starts on October 5, you arrive in Kathmandu on October 5, complete your preparation and briefing, and travel toward Lukla on October 6, subject to the applicable flight schedule.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              During your pre-trek briefing, your guide will go through the route, altitude profile, daily walking expectations, accommodation, packing, permits, flight arrangements, weather considerations and emergency procedures. This is also the right time to identify anything missing from your trekking equipment before leaving Kathmandu.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              We recommend keeping 2–3 contingency days after the planned return from the Everest region before your international departure. Mountain flights are vulnerable to weather and operational disruptions, so a carefully planned buffer can prevent a delayed Lukla flight from turning into a missed international flight.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
              During some periods, flights serving the Everest region may operate through Ramechhap/Manthali rather than Kathmandu, depending on prevailing aviation arrangements and seasonal operations. Your final flight instructions should therefore be checked close to departure rather than relying on a fixed airport arrangement months in advance.
            </p>
            
            `;

const updatedContent = beforeText + newIntroHTML + afterText;

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully inserted itinerary intro and Before Your Trek Starts content.');
