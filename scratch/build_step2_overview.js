const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('scratch/parsed_user_content.json', 'utf8'));

// Format paragraphs with clean semantic tags and altitude spans
function formatText(text) {
  return text
    .replace(/(\d{1,2}(?:,\d{3})*)\s*m(?:etres|eters|eter|s)?/gi, (match, p1) => {
      const num = parseInt(p1.replace(/,/g, ''), 10);
      if (num >= 1000 && num <= 8848) {
        return `<span data-altitude-m="${num}">${num.toLocaleString()} m</span>`;
      }
      return match;
    });
}

// Build 16 Highlight Cards
const highlightsData = [
  {
    num: "01",
    tag: "Summit Milestone",
    title: "The Mera Peak Summit at 6,476 Metres",
    desc: "Standing at approximately 6,476 metres (21,247 ft), Mera Peak offers an accessible yet deeply rewarding mountaineering objective, making it Nepal's premier trekking peak for ambitious climbers entering the world of high-altitude Himalayan summits."
  },
  {
    num: "02",
    tag: "Mountain Vista",
    title: "Panoramic Five 8,000m Mountain Views",
    desc: "From the Mera summit ridge and High Camp, take in an unprecedented 360-degree panorama of five of the world's six highest mountains: Mount Everest (8,848m), Lhotse (8,516m), Makalu (8,485m), Cho Oyu (8,188m), and Kanchenjunga (8,586m)."
  },
  {
    num: "03",
    tag: "Wilderness Valley",
    title: "Trekking Through the Remote Hinku Valley",
    desc: "Unlike the heavily frequented Everest Base Camp highway, the pristine Hinku Valley offers secluded wilderness trails, towering granite canyons, dense virgin forests, and dramatic glacial moraines untouched by commercial mass tourism."
  },
  {
    num: "04",
    tag: "High Mountain Pass",
    title: "Crossing Zatrwa La (4,600m)",
    desc: "Traversing the rugged Zatrwa La pass at 4,600 metres provides an exhilarating mountain crossing, dramatic ridgeline vistas of the Dudh Koshi basin, and essential early acclimatization for the high expedition stages ahead."
  },
  {
    num: "05",
    tag: "Sherpa Heritage",
    title: "Experiencing Traditional Mountain Settlements",
    desc: "Journey through tranquil alpine settlements including Chutanga, Kothe, and Thangnak, visiting the ancient 200-year-old Lungsumgba Buddhist monastery embedded beneath a massive granite rock face."
  },
  {
    num: "06",
    tag: "Staged Adaptation",
    title: "Gradual Progression Toward High Mountains",
    desc: "The 18-day itinerary ensures progressive altitude gain from lush sub-alpine rhododendron and pine forests through alpine meadows and rocky lateral moraines to permanent glacier fields."
  },
  {
    num: "07",
    tag: "Glacier Skills",
    title: "Acclimatization & Climbing Practice at Khare",
    desc: "Khare (5,045m) serves as the primary expedition training base. Trekkers spend dedicated days adjusting to altitude, checking boots and crampons, and practicing roped-travel, fixed-line ascents with jumars, and safe rappel techniques."
  },
  {
    num: "08",
    tag: "Expedition Camping",
    title: "The High-Altitude Experience at Mera High Camp",
    desc: "Perched dramatically at 5,780 metres on a rocky shelf above the Mera glacier icefall, Mera High Camp provides a breathtaking sunset view over Everest and Makalu, with full expedition tents, warm dining, and kitchen support."
  },
  {
    num: "09",
    tag: "Roped Glacier Travel",
    title: "A Guided Glacier & Mountaineering Experience",
    desc: "Travel linked by safety ropes across snow ramps and gentle glacier terrain under the direct supervision of certified UIAGM/NMA climbing Sherpa guides maintaining a safe 1:2 to 1:3 climber-to-guide ratio."
  },
  {
    num: "10",
    tag: "Skill Bridge",
    title: "Seamless Combination of Trekking & Mountaineering",
    desc: "Mera Peak strikes the ultimate balance between scenic mountain trekking and authentic alpine mountaineering, requiring no prior technical rock or ice climbing experience while instilling real mountaineering competence."
  },
  {
    num: "11",
    tag: "Personal Achievement",
    title: "Attempting a First 6,000-Metre Himalayan Summit",
    desc: "Ascending beyond the 6,000m barrier tests physical stamina, mental resilience, and pacing in extreme thin air, providing an immense sense of personal accomplishment upon touching the summit prayer flags."
  },
  {
    num: "12",
    tag: "Alpine Ecology",
    title: "Wildlife & Changing Himalayan Ecosystems",
    desc: "Traverse Makalu-Barun National Park buffer zones home to Himalayan thar, musk deer, snow leopards, blood pheasants, and blooming spring rhododendrons against cascading glacial streams."
  },
  {
    num: "13",
    tag: "Ethical Travel",
    title: "Cultural Respect & Responsible Expedition Ethos",
    desc: "Engage respectfully with indigenous Rai and Sherpa communities, observe Buddhist trail customs around mani walls, and support fair-wage, fully insured porters and local teahouse families."
  },
  {
    num: "14",
    tag: "Safety Buffer",
    title: "Planned Field Contingency Day for Summit Flexibility",
    desc: "A built-in movable reserve day (Day 12) at Khare ensures that unpredictable mountain weather, high winds, or individual acclimatization adjustments do not compromise summit safety or mission success."
  },
  {
    num: "15",
    tag: "End-to-End Care",
    title: "Organized Expedition Support from Start to Finish",
    desc: "From airport transfers in Kathmandu to hotel accommodations, internal flights, climbing permits, high-camp food service, and satellite emergency communications, every logistical detail is handled seamlessly."
  },
  {
    num: "16",
    tag: "Grand Adventure",
    title: "An 18-Day Journey into the High Himalayas",
    desc: "A comprehensively staged calendar that balances physical challenge, safety, acclimatization, summit success, and post-summit flight contingencies for a truly once-in-a-lifetime Himalayan experience."
  }
];

let highlightsCardsHtml = highlightsData.map((h, i) => `
                <div class="highlight-feature-card" style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 22px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, box-shadow 0.2s ease;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                      <span style="font-size: 0.75rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #008060; background: #e6f7f0; padding: 3px 8px; border-radius: 4px;">${h.tag}</span>
                      <span style="font-size: 1.1rem; font-weight: 800; color: #cbd5e1;">${h.num}</span>
                    </div>
                    <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 8px; line-height: 1.35;">${h.title}</h3>
                    <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">${h.desc}</p>
                  </div>
                </div>`).join('\n');

const newOverviewHtml = `<section id="section-overview" class="trek-detail-section">
            <h2 class="trek-section-title">Expedition Overview & Key Facts</h2>
            
            <div style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.75; margin-bottom: 28px;">
              <p style="margin-bottom: 16px;">
                <strong>Mera Peak Climbing</strong> is an 18-calendar-day Himalayan mountaineering expedition designed for adventurous travelers seeking to stand atop a summit above 6,000 metres in Nepal. Rising to a commonly cited elevation of approximately <span data-altitude-m="6476">6,476 metres (21,247 ft)</span>, Mera Peak offers an inspiring combination of rugged high-altitude trekking, glacier travel, mountaineering training, and a summit attempt surrounded by some of the most impressive mountain landscapes on Earth.
              </p>
              <p style="margin-bottom: 16px;">
                This comprehensive package takes you from Kathmandu into the Khumbu region and the wild, remote Hinku Valley. Following a classic trekking approach through Chutanga, Zatrwa La (<span data-altitude-m="4600">4,600 m</span>), Kothe (<span data-altitude-m="3600">3,600 m</span>), Thangnak (<span data-altitude-m="4350">4,350 m</span>), and Khare (<span data-altitude-m="5045">5,045 m</span>) before approaching Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), the expedition integrates structured acclimatization, practical climbing preparation, and a built-in field contingency day to accommodate weather and operational conditions.
              </p>
              <p style="margin-bottom: 16px;">
                Unlike a standard trekking holiday, Mera Peak requires preparation for sustained physical effort, sub-zero alpine conditions, basic tent facilities at High Camp, and the demands of roped climbing on snow and glacier terrain. Although it is widely celebrated as Nepal's most accessible 6,000-metre trekking peak, it is a serious mountaineering undertaking that should never be underestimated. Excellent endurance fitness, suitable technical gear, disciplined acclimatization, and experienced climbing Sherpa support are essential to a safe and successful ascent.
              </p>
              <p style="margin-bottom: 24px;">
                At Khare (<span data-altitude-m="5045">5,045 m</span>), climbers pause for acclimatization and supervised glacier practice before moving to High Camp. On summit day, teams depart under starlight around 2:00 AM to navigate the expansive glacier slopes, arriving at the summit ridge at dawn to witness an unforgettable panorama spanning Mount Everest, Lhotse, Makalu, Cho Oyu, and Kanchenjunga.
              </p>
            </div>

            <!-- Stage Summary Table -->
            <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px; margin-bottom: 36px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Mera Peak Climbing Duration & Route Summary
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Expedition Stage</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Planned Days</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Main Activities & Altitude Milestones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 700; color: #008060;">Stage 1: Arrival & Prep</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-700);">Days 1–2</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-600);">Kathmandu arrival, expedition briefing, gear inspection, permit verification, and city sightseeing (<span data-altitude-m="1350">1,350 m</span>).</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 700; color: #008060;">Stage 2: Approach Trek</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-700);">Days 3–8</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-600);">Scenic flight to Lukla (<span data-altitude-m="2850">2,850 m</span>), trek to Chutanga (<span data-altitude-m="3450">3,450 m</span>), cross Zatrwa La (<span data-altitude-m="4600">4,600 m</span>) to Thuli Kharka, descend to Kothe, trek through Thangnak (<span data-altitude-m="4350">4,350 m</span>) with acclimatization stay, and reach Khare (<span data-altitude-m="5045">5,045 m</span>).</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 14px; font-weight: 700; color: #008060;">Stage 3: Climbing & Summit</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-700);">Days 9–12</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-600);">Glacier training and skills review at Khare, ascent to Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), summit push to Mera Peak (<span data-altitude-m="6476">6,476 m</span>) with safe return to Khare, and dedicated movable weather contingency day.</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 14px; font-weight: 700; color: #008060;">Stage 4: Return Journey</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-700);">Days 13–18</td>
                      <td style="padding: 12px 14px; color: var(--color-neutral-600);">Descent from Khare through Kothe to Thuli Kharka, re-crossing Zatrwa La back to Lukla, return flight to Kathmandu, reserve buffer day, and final departure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 16 Highlights Grid -->
            <div style="margin-bottom: 36px;">
              <div style="text-align: center; margin-bottom: 24px;">
                <span class="pill pill-copper" style="margin-bottom: 8px;">Top Expedition Experiences</span>
                <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Mera Peak Climbing Highlights</h3>
                <p style="color: var(--color-neutral-600); font-size: 1rem; margin-top: 6px;">16 defining moments that make Mera Peak the ultimate Himalayan mountaineering adventure</p>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px;">
${highlightsCardsHtml}
              </div>
            </div>

            <!-- Why Book With Us Section -->
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: var(--radius-md); padding: 30px; color: #ffffff; box-shadow: var(--shadow-md);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <div style="width: 44px; height: 44px; background: #008060; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 style="font-size: 1.35rem; font-weight: 700; color: #ffffff; margin: 0;">Why Choose Our Guided Mera Peak Climbing Package?</h3>
                  <p style="font-size: 0.9rem; color: #94a3b8; margin: 2px 0 0 0;">Dedicated Sherpa leadership, premium expedition infrastructure, and safety-first protocols</p>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 18px;">
                  <div style="font-weight: 700; font-size: 1.05rem; color: #38bdf8; margin-bottom: 6px;">UIAGM / NMA Sherpa Leaders</div>
                  <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0;">Our climbing guides are certified mountaineers with multiple 6,000m to 8,000m summits, maintaining a close 1:2 to 1:3 summit guide ratio.</p>
                </div>

                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 18px;">
                  <div style="font-weight: 700; font-size: 1.05rem; color: #4ade80; margin-bottom: 6px;">Structured Glacier Training</div>
                  <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0;">A full acclimatization and practice day at Khare ensures hands-on instruction in crampons, harness systems, fixed lines, and rappelling before High Camp.</p>
                </div>

                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 18px;">
                  <div style="font-weight: 700; font-size: 1.05rem; color: #fbbf24; margin-bottom: 6px;">Dual Contingency Buffer</div>
                  <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0;">Includes a flexible high-mountain reserve day (Day 12) plus a Kathmandu contingency day (Day 17) to safeguard against weather delays and flight shifts.</p>
                </div>

                <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 18px;">
                  <div style="font-weight: 700; font-size: 1.05rem; color: #f472b6; margin-bottom: 6px;">Ethical Porter & Staff Welfare</div>
                  <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin: 0;">Every porter and crew member receives fair living wages, quality high-altitude gear, medical coverage, and strict load limits compliant with IPPG standards.</p>
                </div>
              </div>
            </div>
          </section>\n\n          <!-- Section 2: Itinerary -->\n          `;

// Replace section-overview in html
let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const ovStart = html.indexOf('<section id="section-overview"');
const itinStart = html.indexOf('<!-- Section 2: Itinerary -->');

if (ovStart !== -1 && itinStart !== -1) {
  html = html.slice(0, ovStart) + newOverviewHtml + html.slice(itinStart + '<!-- Section 2: Itinerary -->'.length);
  fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
  console.log('Successfully replaced Section 1 (Overview & Highlights)!');
} else {
  console.error('Could not find boundaries for Section 1');
}

