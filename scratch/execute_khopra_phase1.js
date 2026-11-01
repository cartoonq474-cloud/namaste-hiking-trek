const fs = require('fs');

console.log('Starting Phase 1 for Khopra Ridge Trek...');
let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// ==========================================
// 1. FIX PRE-EXISTING STRAY CLOSING TAGS
// ==========================================
console.log('1. Fixing pre-existing stray closing tags near line 5250...');
const marker = '.012-.651-.012z"/>\n                    </svg>\n                  </a>\n                </div>\n              </div>';
const markerPos = html.indexOf(marker);
const modalIdx = html.indexOf('<!-- Inquiry Modal -->');

if (markerPos !== -1 && modalIdx !== -1) {
  const before = html.substring(0, markerPos + marker.length);
  const after = html.substring(modalIdx);
  const cleanClosing = `\n\n            </div>\n          </div>\n      </div>\n    </section>\n\n  `;
  html = before + cleanClosing + after;
  console.log('Cleaned up stray closing tags near line 5250!');
} else {
  console.error('Could not find marker for stray tags cleanup!');
  process.exit(1);
}

// ==========================================
// 2. UPDATE HEAD, METADATA & TITLE
// ==========================================
console.log('2. Updating Head Metadata and Title...');
html = html.replace(
  '<title>Khopra Ridge Trek (8 Days) — Namaste Hiking Trek</title>',
  '<title>Khopra Ridge Trek (15 Days) — Namaste Hiking Trek</title>'
);

const oldDesc = '<meta name="description" content="Escape the crowds on Khopra Ridge, enjoying dramatic outlooks over Kali Gandaki Gorge, Dhaulagiri, and sacred alpine Khayer Lake (4,660m).">';
const newDesc = '<meta name="description" content="Experience the 15-day Khopra Ridge Trek in Nepal\'s Annapurna region. Trek through traditional Gurung villages, stay in community lodges, marvel at panoramic Dhaulagiri & Annapurna views from Khopra Danda (3,660m), and hike to sacred Khayer Lake (4,700m).">';

html = html.replace(oldDesc, newDesc);
html = html.replace(/property="og:title" content="Khopra Ridge Trek \(8 Days\) — Namaste Hiking Trek"/g, 'property="og:title" content="Khopra Ridge Trek (15 Days) — Namaste Hiking Trek"');
html = html.replace(/property="og:description" content="[^"]*"/g, 'property="og:description" content="Experience the 15-day Khopra Ridge Trek in Nepal\'s Annapurna region. Trek through traditional Gurung villages, stay in community lodges, marvel at panoramic Dhaulagiri & Annapurna views from Khopra Danda (3,660m), and hike to sacred Khayer Lake (4,700m)."');
html = html.replace(/name="twitter:title" content="Khopra Ridge Trek \(8 Days\) — Namaste Hiking Trek"/g, 'name="twitter:title" content="Khopra Ridge Trek (15 Days) — Namaste Hiking Trek"');
html = html.replace(/name="twitter:description" content="[^"]*"/g, 'name="twitter:description" content="Experience the 15-day Khopra Ridge Trek in Nepal\'s Annapurna region. Trek through traditional Gurung villages, stay in community lodges, marvel at panoramic Dhaulagiri & Annapurna views from Khopra Danda (3,660m), and hike to sacred Khayer Lake (4,700m)."');

// ==========================================
// 3. UPDATE JSON-LD STRUCTURED DATA
// ==========================================
console.log('3. Updating JSON-LD Structured Data to 15 Days...');
const jsonLdStart = '<script type="application/ld+json">';
const jsonLdEnd = '</script>';
const sIdx = html.indexOf(jsonLdStart);
const eIdx = html.indexOf(jsonLdEnd, sIdx);

const khopraJsonLd = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/khopra-ridge-trek/#trip",
        "name": "Khopra Ridge Trek (15 Days)",
        "description": "A 15-day Himalayan adventure in Nepal's Annapurna region combining community lodge trekking, panoramic vistas from Khopra Ridge (3,660m), an alpine excursion to sacred Khayer Lake (4,700m), and sunrise views from Poon Hill and Mohare Hill.",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Nature & Cultural Travellers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Arrival in Kathmandu (1,355m)" },
          { "@type": "TouristTrip", "name": "Day 2: Drive Kathmandu to Pokhara (822m)" },
          { "@type": "TouristTrip", "name": "Day 3: Pokhara to Ghandruk (1,940m) via Nayapul" },
          { "@type": "TouristTrip", "name": "Day 4: Trek Ghandruk to Tadapani (2,630m)" },
          { "@type": "TouristTrip", "name": "Day 5: Trek Tadapani to Bayeli Kharka (3,460m)" },
          { "@type": "TouristTrip", "name": "Day 6: Trek Bayeli Kharka to Upper Chistibung (2,950m)" },
          { "@type": "TouristTrip", "name": "Day 7: Trek Upper Chistibung to Khopra Ridge (3,660m)" },
          { "@type": "TouristTrip", "name": "Day 8: High-Altitude Excursion to Khayer Lake (4,700m) & Return" },
          { "@type": "TouristTrip", "name": "Day 9: Trek Khopra Ridge to Swanta (2,260m)" },
          { "@type": "TouristTrip", "name": "Day 10: Trek Swanta to Ghorepani (2,880m)" },
          { "@type": "TouristTrip", "name": "Day 11: Poon Hill Sunrise (3,210m) & Trek to Mohare Hill (3,300m)" },
          { "@type": "TouristTrip", "name": "Day 12: Trek Mohare Hill to Tikhedhunga (1,480m)" },
          { "@type": "TouristTrip", "name": "Day 13: Trek Tikhedhunga to Nayapul & Drive to Pokhara (822m)" },
          { "@type": "TouristTrip", "name": "Day 14: Drive Pokhara to Kathmandu (1,355m)" },
          { "@type": "TouristTrip", "name": "Day 15: Final International Departure from Kathmandu" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/khopra-ridge-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "Treks", "item": "https://namastehikingtrek.com/trek/" },
          { "@type": "ListItem", "position": 3, "name": "Annapurna Region", "item": "https://namastehikingtrek.com/trek/#annapurna" },
          { "@type": "ListItem", "position": 4, "name": "Khopra Ridge Trek", "item": "https://namastehikingtrek.com/trek/khopra-ridge-trek/" }
        ]
      }
    ]
  }
  </script>`;

html = html.substring(0, sIdx) + khopraJsonLd + html.substring(eIdx + jsonLdEnd.length);

// ==========================================
// 4. UPDATE HERO REGION PILL, TITLE & INTRO
// ==========================================
console.log('4. Updating Hero Region Pill, Title & Intro Narrative...');
html = html.replace(
  '<span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • Classic Himalayan Expedition</span>',
  '<span class="pill pill-copper" style="margin-bottom: 0;">Annapurna Region • Community Lodge & Alpine Ridge Trek</span>'
);

const heroIntroRegex = /<h1 style="font-size: 2\.8rem; margin-top: 6px; margin-bottom: 8px; color: var\(--color-primary-navy\);">[\s\S]*?<\/script>/;
const newHeroIntro = `<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Khopra Ridge Trek</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          The Khopra Ridge Trek is a 15-day Himalayan adventure in Nepal's Annapurna region, combining spectacular mountain panoramas, traditional Gurung and Magar villages, pristine forest trails, community lodges, and a strenuous high-altitude excursion to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>).
          <span id="ebc-more-text" style="display: none;">
            Also known as the Khopra Danda Trek, this route is an exceptional alternative to the busier commercial corridors of the Annapurna sanctuary. Climbing through Ghandruk, Tadapani, Bayeli Kharka, and Upper Chistibung, you reach the dramatic vantage of Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>), framed by the towering massifs of Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>) and Annapurna South (<span data-altitude-m="7219">7,219 m</span>). After descending through Swanta, the journey loops via Ghorepani, Poon Hill (<span data-altitude-m="3210">3,210 m</span>), and Mohare Hill (<span data-altitude-m="3300">3,300 m</span>) before concluding in Pokhara and Kathmandu.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>
        
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('ebc-toggle-btn');
            const moreText = document.getElementById('ebc-more-text');
            
            if (toggleBtn && moreText) {
              toggleBtn.addEventListener('click', () => {
                const isHidden = moreText.style.display === 'none';
                moreText.style.display = isHidden ? 'inline' : 'none';
                toggleBtn.innerHTML = isHidden 
                  ? 'Learn less <span style="font-size: 1.1rem; margin-left: 2px;">↑</span>' 
                  : 'Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>';
              });
            }
          });
        </script>`;

html = html.replace(heroIntroRegex, newHeroIntro);

// ==========================================
// 5. UPDATE KEY TRIP FACTS GRID (14 ITEMS)
// ==========================================
console.log('5. Updating Key Trip Facts Grid (14 items)...');
const factsGridStart = '<!-- Key Trip Facts Grid -->';
const factsGridEnd = '<!-- Trust Badges Section -->';
const fgStartIdx = html.indexOf(factsGridStart);
const fgEndIdx = html.indexOf(factsGridEnd);

if (fgStartIdx === -1 || fgEndIdx === -1) {
  console.error('Could not find Key Facts Grid boundaries!', { fgStartIdx, fgEndIdx });
  process.exit(1);
}

const newFactsGridHtml = `<!-- Key Trip Facts Grid -->
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
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 28px 32px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">15 Days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Moderate to Challenging</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;"><span data-altitude-m="4700">4,700 m</span> (Khayer Lake)</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nepal (Annapurna)</span>
            </div>
          </div>

          <!-- 5. Activity -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 15 4-4 4 4 4-4 4 4"/><path d="m4 9 4-4 4 4 4-4 4 4"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Activity</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Ridge & Alpine Lake Trek</span>
            </div>
          </div>

          <!-- 6. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses & Community Lodges</span>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM3 10h18M7 15h.01M11 15h.01"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Tourist Vehicle / 4WD Jeep</span>
            </div>
          </div>

          <!-- 8. Meals -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">B.D.L. (All on Trek)</span>
            </div>
          </div>

          <!-- 9. Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Mar–May & Sep–Nov</span>
            </div>
          </div>

          <!-- 10. Trek Starts -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Ghandruk (via Nayapul)</span>
            </div>
          </div>

          <!-- 11. Trek End At -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek End At</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Tikhedhunga / Nayapul</span>
            </div>
          </div>

          <!-- 12. Trek Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna (Khopra Danda)</span>
            </div>
          </div>

          <!-- 13. Package Start Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package Start Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>

          <!-- 14. Package End Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package End Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>
        </div>
      </div>
    </div>\n\n    `;

html = html.substring(0, fgStartIdx) + newFactsGridHtml + html.substring(fgEndIdx);

// ==========================================
// 6. VALIDATE TAG BALANCE
// ==========================================
console.log('6. Validating Tag Balance across the entire file...');
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/khopra-ridge-trek/index.html', html, 'utf8');
console.log('SUCCESS: Phase 1 completed with 100% tag balance!');
