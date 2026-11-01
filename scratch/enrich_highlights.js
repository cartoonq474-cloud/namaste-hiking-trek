const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek', 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Add Cho La Pass and Gokyo Highlights to ebc-highlights-grid
const cholaHighlightCards = `
                <!-- Cho La Pass Highlight -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"></polygon>
                      </svg>
                    </div>
                    <span class="ebc-highlight-tag">Alpine Pass</span>
                  </div>
                  <h3 class="ebc-highlight-title">Cross the Glacial Cho La Pass at 5,420 m</h3>
                  <p class="ebc-highlight-desc">
                    The defining mountaineering achievement of this expedition: strapping on microspikes to traverse the snowfield and crest the rocky summit of Cho La Pass, bridging the Khumbu with Gokyo Valley.
                  </p>
                </div>

                <!-- Gokyo Lakes Highlight -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                      </svg>
                    </div>
                    <span class="ebc-highlight-tag">Sacred Lakes</span>
                  </div>
                  <h3 class="ebc-highlight-title">Marvel at the Turquoise Gokyo Lakes</h3>
                  <p class="ebc-highlight-desc">
                    Behold the mesmerizing turquoise and cobalt blue waters of the sacred oligotrophic Gokyo Lakes (Third, Fourth, and Fifth lakes), mirroring towering ice walls under crystal Himalayan skies.
                  </p>
                </div>

                <!-- Gokyo Ri Highlight -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                      </svg>
                    </div>
                    <span class="ebc-highlight-tag">Viewpoint Summit</span>
                  </div>
                  <h3 class="ebc-highlight-title">Summit Gokyo Ri (5,357 m) for Four 8,000m Giants</h3>
                  <p class="ebc-highlight-desc">
                    Experience arguably the single finest mountain view in Nepal: standing atop Gokyo Ri gazing across four 8,000-meter titans—Mount Everest, Lhotse, Makalu, and Cho Oyu.
                  </p>
                </div>

                <!-- Ngozumpa Glacier Highlight -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 12h20M20 12l-4-4M20 12l-4 4M4 12l4-4M4 12l4 4"></path>
                      </svg>
                    </div>
                    <span class="ebc-highlight-tag">Glacial Moraine</span>
                  </div>
                  <h3 class="ebc-highlight-title">Traverse the Massive Ngozumpa Glacier</h3>
                  <p class="ebc-highlight-desc">
                    Trek across the lateral moraine of the longest glacier in the Himalayas (36 km), marveling at ice cliffs, meltwater pools, and raw geological forces shaping the roof of the world.
                  </p>
                </div>
`;

// Insert these cards right after `<div class="ebc-highlights-grid">`
content = content.replace('<div class="ebc-highlights-grid">', '<div class="ebc-highlights-grid">\n' + cholaHighlightCards);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Added 4 Cho La / Gokyo highlight cards.');
