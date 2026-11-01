// Module 1: Overview, Key Facts, Highlights, Stage Table, Why Book for Gokyo Lake Trek (15 Days)

const heroContent = {
  title: "Gokyo Lake Trek",
  lead: "Walk from Lukla through Namche Bazaar, Dole and Machhermo to the Gokyo Valley, with glacial lakes, the Gokyo Ri viewpoint and the Ngozumpa Glacier landscape. This 15-day draft includes acclimatization in Namche and Machhermo, a Gokyo Ri day and a return through Dole and Namche to Lukla.",
  moreLead: "Ascend past the sacred turquoise waters of Dudh Pokhari to the iconic summit of Gokyo Ri (5,357m), taking in an extraordinary 360-degree panorama of four 8,000-meter giants: Mount Everest, Lhotse, Makalu, and Cho Oyu. Experience tranquil Sherpa villages, ancient mani walls, and the vast terminal moraine of the Ngozumpa Glacier on one of Nepal's most visually rewarding high-altitude adventures.",
  duration: "15 Days",
  altitude: "5,357 m",
  grade: "Challenging High-Altitude",
  activity: "Lodge Trek & Glacial Lakes"
};

const keyFactsData = [
  {
    label: "Duration",
    value: "15 calendar days (Kathmandu to departure)",
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`
  },
  {
    label: "Walking days",
    value: "11 scheduled days (Days 3–13)",
    icon: `<path d="M13 4v16M7 8l6-4 6 4M7 16l6 4 6-4"/>`
  },
  {
    label: "Acclimatization",
    value: "Namche (Day 5) & Machhermo (Day 8)",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
  },
  {
    label: "Route beyond Namche",
    value: "Dole → Machhermo → Gokyo",
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
  },
  {
    label: "Highest viewpoint",
    value: "Gokyo Ri, ~5,357 m (17,575 ft)",
    icon: `<path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/>`
  },
  {
    label: "Main lake",
    value: "Dudh Pokhari (3rd Lake), ~4,790 m",
    icon: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>`
  },
  {
    label: "Main glacier",
    value: "Ngozumpa Glacier (~20 km)",
    icon: `<path d="M3 21h18M5 21V7l7-4 7 4v14"/>`
  },
  {
    label: "Highest sleep",
    value: "Gokyo village, ~4,790 m (15,715 ft)",
    icon: `<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>`
  },
  {
    label: "Starting/Finishing",
    value: "Lukla, ~2,850 m (9,350 ft)",
    icon: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`
  },
  {
    label: "Style",
    value: "Guided teahouse mountain trek",
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`
  },
  {
    label: "Best seasons",
    value: "Sep–Nov (Autumn) & Mar–May (Spring)",
    icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`
  },
  {
    label: "Trek grading",
    value: "Challenging altitude • Non-technical",
    icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`
  },
  {
    label: "Support team",
    value: "Licensed Sherpa guide & porters",
    icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
  },
  {
    label: "Baggage limits",
    value: "Duffel bag (porter) + personal daypack",
    icon: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`
  },
  {
    label: "Flight buffer",
    value: "Day 15 contingency / departure slot",
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 10"/>`
  },
  {
    label: "Base route excludes",
    value: "EBC, Cho La & Renjo La (unless booked)",
    icon: `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`
  }
];

function generateKeyFactsHtml() {
  const itemsHtml = keyFactsData.map(f => `
          <!-- ${f.label} -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${f.icon}</svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">${f.label}</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">${f.value}</span>
            </div>
          </div>
  `).join('\n');

  return `
    <!-- Key Trip Facts Grid -->
    <div class="container" style="margin-bottom: 30px;">
      <style>
        .trip-fact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease-in-out;
        }
        .trip-fact-item:hover {
          transform: translateY(-2px);
        }
      </style>
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px 30px;">
        <h2 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h2>
        
        <div class="trek-facts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

function generateOverviewCanonicalHtml() {
  return `
            <h2 class="trek-section-title">Gokyo Lake Trek: Overview & Valley Route</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 20px; line-height: 1.8;">
              The <strong>Gokyo Lake Trek</strong> is a premier high-altitude trekking route through Nepal's Khumbu region that leads from the bustling Lukla–Namche corridor into the serene, glacial sanctuary of the Gokyo Valley. Renowned across the trekking world for its chain of crystalline, turquoise glacial lakes, the breathtaking 360-degree viewpoint from Gokyo Ri (<span data-altitude-m="5357">5,357 m</span>), the colossal Ngozumpa Glacier, and warm Sherpa communities, this journey offers an intimate, tranquil alternative to the busier Everest Base Camp trail.
            </p>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.8;">
              The trek initially follows the historic Himalayan artery used by classic Everest-region expeditions, ascending past Phakding and across suspension bridges over the Dudh Koshi into the Sherpa market hub of Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). Just north of Namche, the trail diverges at Kenjoma and Mong La, veering northwest into the pristine Dudh Koshi gorge toward Dole, Machhermo, and the alpine lake basins of Gokyo. The Nepal Tourism Board highlights Gokyo as one of the ultimate scenic mountain valleys in the Himalayas, presenting an unmatched mountain panorama featuring four of the world's six highest peaks: Cho Oyu (<span data-altitude-m="8188">8,188 m</span>), Mount Everest (<span data-altitude-m="8848">8,848 m</span>), Lhotse (<span data-altitude-m="8516">8,516 m</span>), and Makalu (<span data-altitude-m="8485">8,485 m</span>).
            </p>

            <!-- Key Trip Facts Table -->
            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                Key Trip Facts: Official 15-Day Source Itinerary
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--color-neutral-100); text-align: left; border-bottom: 2px solid var(--color-neutral-200);">
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Trip Fact</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">This Source Itinerary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Duration</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">15 calendar days, including preparation and the final contingency/departure slot</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Mountain walking/hiking days</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">11 scheduled days, Days 3–13; includes two acclimatization hikes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Acclimatization</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Namche Bazaar on Day 5 and Machhermo on Day 8</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Starting / finishing walking point</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Lukla (<span data-altitude-m="2850">2,850 m</span>)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Route beyond Namche</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Dole → Machhermo → Gokyo</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Highest sleeping elevation</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Gokyo village, approximately <span data-altitude-m="4790">4,790 m</span> in the primary itinerary</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Highest planned viewpoint</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Gokyo Ri, approximately <span data-altitude-m="5357">5,357 m (17,575 ft)</span></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Main lake beside village</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Dudh Pokhari (Gokyo 3rd Lake), Ramsar site</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Main glacier landscape</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Ngozumpa Glacier (Himalayas' longest debris-covered glacier, ~20 km)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Style</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Guided teahouse mountain trek</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Best-known seasons</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Spring (Mar–May) and Autumn (Sep–Nov), subject to actual conditions</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Base route excludes</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Everest Base Camp, Kala Patthar, Cho La Pass, and Renjo La Pass (unless booked as an extended circuit)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Contingency buffer</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day 15 serves as a built-in flight contingency buffer or onward departure day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Part 2: Where is the Gokyo Lake Trek? -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span style="display: inline-block; width: 4px; height: 18px; background: #008060; border-radius: 2px;"></span>
                Where is the Gokyo Lake Trek?
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 16px;">
                The Gokyo Valley lies in the western section of the Khumbu region in northeastern Nepal. Situated entirely inside <strong>Sagarmatha National Park</strong> (a UNESCO World Heritage site), the valley is carved by the Dudh Koshi River and feeds directly from the immense Ngozumpa Glacier beneath the sixth-highest peak in the world, Mount Cho Oyu (<span data-altitude-m="8188">8,188 m</span>).
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8;">
                A standard journey begins at Lukla (<span data-altitude-m="2850">2,850 m</span>), ascending through Phakding along the river canyon into Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). From the outskirts of Namche, the trail climbs toward the scenic ridge of Mong La (<span data-altitude-m="3975">3,975 m</span>) before descending to Phortse Tenga and climbing steeply through rhododendron forests to Dole (<span data-altitude-m="4000">4,000 m</span>). Continuing past the yak pastures of Luza and Machhermo (<span data-altitude-m="4470">4,470 m</span>), the trail reaches the moraines of the Ngozumpa Glacier and the glacial lake basin at Gokyo (<span data-altitude-m="4790">4,790 m</span>).
              </p>
            </div>

            <!-- Part 3: What is the trek like? -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span style="display: inline-block; width: 4px; height: 18px; background: #008060; border-radius: 2px;"></span>
                What is the Trek Like? An Evolving Landscape
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 16px;">
                The landscape changes dramatically as the trek gains elevation. The lower trail between Lukla and Namche is characterized by vibrant Sherpa villages, pine and cedar forests, terraced fields, and suspension bridges strung with fluttering Buddhist prayer flags.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 16px;">
                Above Namche, the trail becomes noticeably more alpine. Leaving the main Khumbu thoroughfare at Mong La, the path traverses forested slopes filled with birch and moss-draped rhododendrons (bursting into crimson bloom each spring). Past Dole, trees rapidly give way to alpine juniper scrub, dry scrubland, and high-altitude yak pastures.
              </p>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8;">
                By the time you approach Gokyo, vegetation has disappeared entirely. The terrain transitions into a rugged, windswept high-altitude lunar environment dominated by lateral moraines, shattered glacial boulders, frozen meltwater ponds, and the shimmering turquoise expanse of the sacred lakes beneath colossal snowy massifs. It is this dramatic, multi-stage environmental transition that defines the Gokyo experience.
              </p>
            </div>

            <!-- Part 4: How is Gokyo different from Everest Base Camp? -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span style="display: inline-block; width: 4px; height: 18px; background: #008060; border-radius: 2px;"></span>
                How is Gokyo Different from Everest Base Camp?
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 16px;">
                While both treks share the common gateway from Lukla to Namche Bazaar, they offer distinctly different journeys:
              </p>
              
              <div style="overflow-x: auto; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--color-neutral-100); text-align: left; border-bottom: 2px solid var(--color-neutral-200);">
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Aspect</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">This Gokyo Lake Plan (15 Days)</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Classic Everest Base Camp Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Route Beyond Namche</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Dole, Machhermo, and the Gokyo Valley</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Tengboche, Dingboche, Lobuche, Gorak Shep</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Primary Objective</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Glacial lakes, Ngozumpa Glacier, and Gokyo Ri</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Everest Base Camp & Kala Patthar</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Ultimate Viewpoint</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);"><strong>Gokyo Ri (<span data-altitude-m="5357">5,357 m</span>)</strong> — 360° view of 4 eight-thousanders (Everest, Lhotse, Makalu, Cho Oyu)</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);"><strong>Kala Patthar (<span data-altitude-m="5545">5,545 m</span>)</strong> — Close-up view of Everest and Nuptse</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Crowds & Trail Ambiance</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Substantially quieter, serene teahouse stays, less commercial</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Higher trekking traffic, busy teahouses during peak months</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">High Pass Additions</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">None in base route (Cho La or Renjo La optional extensions)</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">None in classic out-and-back route</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Part 5: Who is this route for? -->
            <div style="margin-bottom: 36px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span style="display: inline-block; width: 4px; height: 18px; background: #008060; border-radius: 2px;"></span>
                Who is this Route For?
              </h3>
              <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 16px;">
                This trek is crafted for mountain enthusiasts, photographers, and adventurers seeking a deeply scenic, contemplative high-Himalayan journey without the sheer volume of trail traffic found along the main Everest corridor. It is particularly rewarding for:
              </p>
              <ul style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; padding-left: 20px; margin-bottom: 16px;">
                <li><strong>Landscape Photographers:</strong> High-altitude reflections in pristine turquoise lakes framed by the towering ramparts of Cho Oyu and Everest.</li>
                <li><strong>Viewpoint Seekers:</strong> Many seasoned Himalayan veterans consider the panoramic view from Gokyo Ri superior to Kala Patthar because it reveals a wider horizon containing four 8,000-meter peaks.</li>
                <li><strong>Paced Trekkers & Beginners:</strong> With two dedicated acclimatization stages (Namche Day 5 and Machhermo Day 8), this 15-day profile provides conservative altitude staging that allows well-prepared hikers of good fitness to succeed safely.</li>
              </ul>
              <div style="background: #eef2f6; border-left: 4px solid #008060; padding: 14px 18px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.95rem; color: var(--color-neutral-700);">
                <strong>Safety Note:</strong> Gokyo should not be marketed as an "easy" walk compared to Everest Base Camp. Sleeping at <span data-altitude-m="4790">4,790 m</span> and climbing to <span data-altitude-m="5357">5,357 m</span> in sub-zero temperatures requires cardiovascular fitness, disciplined pacing, and vigilant altitude awareness.
              </div>
            </div>

            <!-- Highlights Section -->
            <h2 class="trek-section-title" style="margin-top: 40px; margin-bottom: 20px;">Gokyo Lake Trek Highlights</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
              
              <!-- Highlight 1 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Sacred Turquoise Lakes</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Discover the world's highest freshwater lake system. Gaze upon Dudh Pokhari and Longponga Cho, recognized globally as a Ramsar Wetland of International Importance and revered by both Buddhist and Hindu communities.
                </p>
              </div>

              <!-- Highlight 2 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Gokyo Ri Summit (5,357 m)</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Ascend to the summit of Gokyo Ri for a peerless 360-degree panoramic spectacle revealing Mount Everest, Lhotse, Makalu, and Cho Oyu, with the deep turquoise lakes glittering directly below.
                </p>
              </div>

              <!-- Highlight 3 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Ngozumpa Glacier Moraine</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Witness Nepal's largest glacier, stretching ~20 km from Cho Oyu. Marvel at its vast debris-covered moraine ridges, massive ice cliffs, meltwater ponds, and active glacial geology.
                </p>
              </div>

              <!-- Highlight 4 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Authentic Sherpa Culture</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Experience genuine hospitality in high-altitude Sherpa villages, explore historic stone monasteries and ancient mani walls, and stay in traditional family-run mountain teahouses.
                </p>
              </div>

              <!-- Highlight 5 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Two Acclimatization Stays</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Benefit from a conservative, doctor-approved acclimatization schedule with dedicated rest and hiking days in Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>) and Machhermo (<span data-altitude-m="4470">4,470 m</span>).
                </p>
              </div>

              <!-- Highlight 6 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 20px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Upper Lakes Exploration</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Opportunity for seasoned hikers to extend their valley journey toward the 4th (Thonak Cho) and 5th (Ngozumpa Cho) lakes beneath the sheer southern face of Mount Cho Oyu.
                </p>
              </div>

            </div>

            <!-- Planned Stage Summary Table -->
            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; margin-bottom: 36px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Highlights at a Glance: Planned Stages
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: var(--color-neutral-100); text-align: left; border-bottom: 2px solid var(--color-neutral-200);">
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Experience</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: var(--color-primary-navy);">Planned Stage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Lukla flight and Dudh Koshi river-valley approach</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Days 3–4 (Lukla → Phakding → Namche Bazaar)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Namche Bazaar acclimatization hike</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day 5 (Hike toward Syangboche / Everest View Hotel, ~3,900 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Mong La ridge traverse and descent to Dole</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day 6 (Namche → Mong La → Phortse Tenga → Dole)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Machhermo alpine valley and acclimatization</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Days 7–8 (Dole → Machhermo, 4,470 m with daytime acclimatization walk)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Gokyo village arrival and Dudh Pokhari lakes</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day 9 (Terminal moraine → First lakes → Gokyo 3rd Lake, 4,790 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--color-neutral-200); background: #fafbfc;">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Gokyo Ri summit sunrise & valley exploration</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Day 10 (Ascent of Gokyo Ri, 5,357 m, optional 4th/5th lake hike)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-neutral-800);">Scenic return descent through Dole, Namche and Lukla</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700);">Days 11–13 (Gokyo → Dole → Namche Bazaar → Lukla)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Operator Trust Section -->
            <h2 class="trek-section-title" style="margin-top: 40px; margin-bottom: 16px;">Why Book This Trek with Namaste Hiking Trek?</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              Trekking into the remote Gokyo Valley requires experienced field coordination, uncompromising safety protocols, and deep local relationships. Here is how Namaste Hiking Trek ensures a smooth, memorable, and safe journey:
            </p>

            <div class="why-book-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
              
              <!-- Card 1 -->
              <div class="why-book-card" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Veteran Licensed Sherpa Leaders</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Led exclusively by government-licensed, English-speaking Sherpa guides with minimum 6–8 years of high-altitude Khumbu leadership experience, certified in wilderness first aid and high-altitude risk management.
                </p>
              </div>

              <!-- Card 2 -->
              <div class="why-book-card" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Twice-Daily Health & Oximeter Checks</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Your guide carries a medical-grade pulse oximeter and comprehensive first-aid kit, conducting mandatory blood oxygen saturation (SpO2) and pulse checks every morning and evening to ensure safe acclimatization.
                </p>
              </div>

              <!-- Card 3 -->
              <div class="why-book-card" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">Complimentary Gear & Duffle Bag</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Every trekker receives a complimentary heavy-duty waterproof trekking duffle bag (80–100L) yours to keep, plus free rental of an expedition four-season sleeping bag (-20°C) and down jacket upon request.
                </p>
              </div>

              <!-- Card 4 -->
              <div class="why-book-card" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm);">
                <div style="width: 44px; height: 44px; background: #e6f7f0; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px;">24/7 Operations & Helicopter Rescue Link</h3>
                <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Backed by our Kathmandu emergency dispatch center with direct satellite coordination to Nepal's premier helicopter operators and international travel insurance assistance networks for immediate medical response.
                </p>
              </div>

            </div>
  `;
}

module.exports = {
  heroContent,
  keyFactsData,
  generateKeyFactsHtml,
  generateOverviewCanonicalHtml
};
