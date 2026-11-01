const highlights = [
  "Scheduled helicopter flight from Kathmandu directly into Lukla, avoiding road diversions to Ramechhap.",
  "Upgraded luxury lodge accommodations (e.g., Yeti Mountain Home or premium lodges) where available along the trail.",
  "Stand at world-famous Everest Base Camp (5,364 m) directly beneath the cascading Khumbu Icefall.",
  "Pre-dawn summit ascent of Kala Patthar (5,545 m) for the classic unobstructed panoramic sunrise over Mount Everest and Lhotse.",
  "Two built-in active acclimatization stages in Namche Bazaar (3,440 m) and Dingboche (4,410 m) for optimal physiological adaptation.",
  "Visit the historic Tengboche Monastery, the spiritual heart of the Khumbu, framed beneath the towering pyramid of Ama Dablam.",
  "Cross suspension bridges draped in prayer flags high above the rushing turquoise waters of the Dudh Koshi.",
  "Planned helicopter return from Pheriche back to Kathmandu, bypassing 3–4 days of repetitive downhill knee-straining descent.",
  "Dedicated certified local Sherpa mountain guide and porter support team with daily pulse oximeter health monitoring.",
  "Pre- and post-trek deluxe 5-star hotel accommodation and celebration farewell dinner in Kathmandu."
];

const stageTableRows = [
  { day: "Day 1", route: "Arrival in Kathmandu", dist: "Transfer", elev: "1,400 m", terrain: "Airport transfer & hotel check-in" },
  { day: "Day 2", route: "Heli to Lukla & trek to Phakding", dist: "7.5 km", elev: "2,610 m", terrain: "Gentle net downhill river valley trail" },
  { day: "Day 3", route: "Phakding to Namche Bazaar", dist: "10.5 km", elev: "3,440 m", terrain: "River crossings & steep pine forest switchbacks" },
  { day: "Day 4", route: "Acclimatization in Namche Bazaar", dist: "5.0 km", elev: "3,880 m", terrain: "Ridge ascent to Everest View Hotel & Khumjung" },
  { day: "Day 5", route: "Namche Bazaar to Deboche", dist: "9.5 km", elev: "3,860 m", terrain: "High contour path, river descent & Tengboche climb" },
  { day: "Day 6", route: "Deboche to Dingboche", dist: "10.5 km", elev: "4,410 m", terrain: "Crossing treeline into wide alpine Imja Valley" },
  { day: "Day 7", route: "Acclimatization in Dingboche", dist: "4.5 km", elev: "4,700 m", terrain: "Steep alpine ridge climb up Nangkartshang Peak" },
  { day: "Day 8", route: "Dingboche to Lobuche", dist: "8.5 km", elev: "4,910 m", terrain: "Thokla Pass moraine climb & memorial ridge" },
  { day: "Day 9", route: "Lobuche to Gorak Shep & EBC", dist: "13.0 km", elev: "5,364 m", terrain: "Glacial moraine, rocky ridges & active ice" },
  { day: "Day 10", route: "Kala Patthar ascent & descent to Pheriche", dist: "12.0 km", elev: "5,545 m / 4,371 m", terrain: "Pre-dawn steep rocky climb & wide valley descent" },
  { day: "Day 11", route: "Helicopter from Pheriche to Kathmandu", dist: "Heli", elev: "1,400 m", terrain: "Scenic Khumbu flight directly into Kathmandu" },
  { day: "Day 12", route: "Final departure from Kathmandu", dist: "Transfer", elev: "1,400 m", terrain: "Private airport transfer for onward flight" }
];

function generateOverviewCanonicalHtml() {
  const highlightsHtml = highlights.map(h => `
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1.02rem; color: var(--color-neutral-700); line-height: 1.6;">
                <span style="display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: rgba(16, 185, 129, 0.12); color: #10B981; border-radius: 50%; flex-shrink: 0; margin-top: 2px;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>${h}</span>
              </li>
  `).join('\n');

  const tableRowsHtml = stageTableRows.map(r => `
              <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                <td style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy); white-space: nowrap;">${r.day}</td>
                <td style="padding: 12px 14px; color: var(--color-neutral-800);">${r.route}</td>
                <td style="padding: 12px 14px; color: var(--color-neutral-600); white-space: nowrap;">${r.dist}</td>
                <td style="padding: 12px 14px; font-weight: 600; color: #008060; white-space: nowrap;">${r.elev}</td>
                <td style="padding: 12px 14px; color: var(--color-neutral-600);">${r.terrain}</td>
              </tr>
  `).join('\n');

  return `
            <h2 class="trek-section-title">Everest Base Camp Luxury Trek: Overview</h2>

            <!-- Chapter 1 -->
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The Everest Base Camp Luxury Trek is an elevated high-altitude journey that combines the legendary walking route to the foot of Mount Everest with the highest standard of mountain accommodation and aviation efficiency available in the Himalayas. Designed over 12 calendar days, this route flies by scheduled helicopter directly from Kathmandu to Lukla, follows the historic Khumbu trail on foot through Sherpa villages and Sagarmatha National Park, reaches Everest Base Camp (<span data-altitude-m="5364">5,364 m</span>) and Kala Patthar (<span data-altitude-m="5545">5,545 m</span>), descends to Pheriche, and returns directly to Kathmandu via private helicopter.
            </p>

            <!-- Chapter 2 -->
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Unlike traditional teahouse treks that require three to four days of exhausting downhill retracing back through Namche to Lukla, this luxury itinerary concentrates all your energy on the ascent and high-point objectives. Taking a helicopter flight from Pheriche after completing Kala Patthar bypasses repetitive trail descent, eliminates domestic flight delays at Lukla, and returns you safely to Kathmandu in comfort.
            </p>

            <!-- Chapter 3 -->
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              Accommodation along the trail is selected from the premier boutique lodges in the Everest region, including Yeti Mountain Home properties and the best available en-suite rooms in Namche Bazaar, Phakding, Deboche, and Pheriche. Trekkers enjoy comfortable beds, heated mattress pads or hot water bottles where available, private bathroom amenities at lower and middle elevations, and varied gourmet meal options in warm, insulated dining halls.
            </p>

            <!-- Chapter 4 -->
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              While luxury amenities significantly enhance daily recovery, rest, and comfort, this remains an authentic, physically challenging high-altitude expedition. Walking days range from 4 to 8 hours across rugged terrain, suspension bridges, and active glacial moraine. To prioritize guest safety, our itinerary incorporates two mandatory acclimatization rest days in Namche Bazaar (3,440 m) and Dingboche (4,410 m) with guided day hikes, continuous pulse oximeter monitoring, and seasoned local Sherpa leadership.
            </p>

            <!-- Highlights Section -->
            <h3 style="font-size: 1.45rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 36px; margin-bottom: 16px;">
              Everest Base Camp Luxury Trek Highlights
            </h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
${highlightsHtml}
            </ul>

            <!-- Stage-by-Stage Terrain Table -->
            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 36px; margin-bottom: 14px;">
              Stage-by-Stage Distance, Elevation & Terrain Overview
            </h3>
            <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin-bottom: 16px;">
              Summary of daily walking distances, target sleeping elevations, and terrain characteristics across the 12-day luxury program:
            </p>
            <div style="overflow-x: auto; margin-bottom: 36px; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left; background: white;">
                <thead>
                  <tr style="background: var(--color-neutral-50); border-bottom: 2px solid var(--color-neutral-200);">
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Day</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Route Section</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Distance</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Target Elevation</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Terrain & Activity</th>
                  </tr>
                </thead>
                <tbody>
${tableRowsHtml}
                </tbody>
              </table>
            </div>

            <!-- Why Book With Namaste Hiking Trek -->
            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 36px; margin-bottom: 16px;">
              Why Book the Everest Base Camp Luxury Trek with Namaste Hiking Trek?
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
              <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 40px; height: 40px; background: rgba(0, 128, 96, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Licensed Local Sherpa Leadership</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5;">Our native Khumbu Sherpa guides possess decades of high-altitude experience, wilderness medical certifications, and deep local cultural heritage.</p>
              </div>
              <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 40px; height: 40px; background: rgba(0, 128, 96, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Guaranteed Scheduled Helicopter Transfers</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5;">Direct helicopter connections between Kathmandu and Lukla/Pheriche eliminate long road drives to Ramechhap and days of tedious downhill descent.</p>
              </div>
              <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 40px; height: 40px; background: rgba(0, 128, 96, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Hand-Picked Premium Lodge Upgrades</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5;">We secure the finest available rooms with private en-suite facilities, comfortable bedding, and heated dining rooms across the entire route.</p>
              </div>
              <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 40px; height: 40px; background: rgba(0, 128, 96, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Comprehensive Altitude Health Protocol</h4>
                <p style="margin: 0; font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.5;">Twice-daily pulse oximeter saturation checks, Lake Louise scoring, and 24/7 emergency medical backup ensure your safety in high mountain terrain.</p>
              </div>
            </div>
  `;
}

module.exports = {
  highlights,
  stageTableRows,
  generateOverviewCanonicalHtml
};
