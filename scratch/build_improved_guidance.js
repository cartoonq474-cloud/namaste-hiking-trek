const fs = require('fs');

const cards = JSON.parse(fs.readFileSync('scratch/guidance_cards.json', 'utf8'));

// Categorize each card cleanly
// Logistics: 4, 9, 10, 12, 16, 19
// Health: 6, 7, 11, 13, 17
// Teahouse: 1, 2, 14, 15
// Permits & Culture: 3, 5, 8, 18, 20, 21

const categoryMap = {
  1: { cat: 'teahouse', name: 'Teahouse Living', badgeBg: '#ECFDF5', badgeColor: '#065F46', badgeBorder: '#A7F3D0' },
  2: { cat: 'teahouse', name: 'Teahouse Living', badgeBg: '#ECFDF5', badgeColor: '#065F46', badgeBorder: '#A7F3D0' },
  3: { cat: 'permits', name: 'Permits & Planning', badgeBg: '#FEF3C7', badgeColor: '#92400E', badgeBorder: '#FDE68A' },
  4: { cat: 'logistics', name: 'Logistics & Route', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  5: { cat: 'permits', name: 'Permits & Planning', badgeBg: '#FEF3C7', badgeColor: '#92400E', badgeBorder: '#FDE68A' },
  6: { cat: 'health', name: 'Health & Altitude', badgeBg: '#FFE4E6', badgeColor: '#9F1239', badgeBorder: '#FECDD3' },
  7: { cat: 'health', name: 'Health & Training', badgeBg: '#FFE4E6', badgeColor: '#9F1239', badgeBorder: '#FECDD3' },
  8: { cat: 'permits', name: 'Sherpa Culture', badgeBg: '#EEF2FF', badgeColor: '#3730A3', badgeBorder: '#C7D2FE' },
  9: { cat: 'logistics', name: 'Logistics & Route', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  10: { cat: 'logistics', name: 'Flight Logistics', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  11: { cat: 'health', name: 'Altitude Safety', badgeBg: '#FFE4E6', badgeColor: '#9F1239', badgeBorder: '#FECDD3' },
  12: { cat: 'logistics', name: 'Route Comparison', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  13: { cat: 'health', name: 'Health & Hydration', badgeBg: '#FFE4E6', badgeColor: '#9F1239', badgeBorder: '#FECDD3' },
  14: { cat: 'teahouse', name: 'Teahouse Amenities', badgeBg: '#ECFDF5', badgeColor: '#065F46', badgeBorder: '#A7F3D0' },
  15: { cat: 'teahouse', name: 'Teahouse Hygiene', badgeBg: '#ECFDF5', badgeColor: '#065F46', badgeBorder: '#A7F3D0' },
  16: { cat: 'logistics', name: 'Gear & Packing', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  17: { cat: 'health', name: 'Medical Insurance', badgeBg: '#FFE4E6', badgeColor: '#9F1239', badgeBorder: '#FECDD3' },
  18: { cat: 'permits', name: 'Money & Budget', badgeBg: '#FEF3C7', badgeColor: '#92400E', badgeBorder: '#FDE68A' },
  19: { cat: 'logistics', name: 'Traveler Types', badgeBg: '#E0F2FE', badgeColor: '#0369A1', badgeBorder: '#BAE6FD' },
  20: { cat: 'permits', name: 'Tipping Etiquette', badgeBg: '#EEF2FF', badgeColor: '#3730A3', badgeBorder: '#C7D2FE' },
  21: { cat: 'permits', name: 'Leave No Trace', badgeBg: '#FEF3C7', badgeColor: '#92400E', badgeBorder: '#FDE68A' }
};

// Key Takeaway summaries for quick scanning
const keyTakeaways = {
  1: "Twin-share wooden beds with blankets; communal heated dining rooms; attached baths available in Namche.",
  2: "Hearty Dal Bhat with free refills is king; western items (pizza, pasta, pancakes) widely available.",
  3: "Prime seasons are Autumn (Oct-Nov) for crystal skies and Spring (Mar-May) for blooming rhododendrons.",
  4: "Typical trek day: 6:30 AM breakfast, 4-6 hours walking with scenic lunch, cozy dining room evenings.",
  5: "Two permits required: Sagarmatha National Park entry (NPR 3,000) and Khumbu Pasang Lhamu Rural Entry (NPR 3,000).",
  6: "Namche Bazaar (3,440 m) acclimatization day is non-negotiable; hike high to 3,880 m and sleep low.",
  7: "Moderate difficulty; no technical climbing. 4-6 weeks of cardio, stair climbing, and loaded day walks recommended.",
  8: "Khumbu is sacred Sherpa land; spin prayer wheels clockwise, respect mani stones, and dress respectfully in monasteries.",
  9: "Elevation climbs from 2,860 m at Lukla to peak viewpoint at Hotel Everest View (3,880 m) before safe descent.",
  10: "Lukla flights operate from Ramechhap during peak months; always keep 1-2 contingency buffer days in Kathmandu.",
  11: "AMS can occur above 2,500 m. Mild headache + nausea = rest and hydrate; never ascend with active symptoms.",
  12: "Everest View Trek (7 days, max 3,880 m) is half the duration and altitude risk of full EBC (12-14 days, 5,364 m).",
  13: "Drink 3-4 liters daily; never drink untreated tap/river water. Use purification tablets or UV sterilizers.",
  14: "Solar charging available in dining halls ($2-$5 per device); Airlo/Ncell/Ncell SIMs work well up to Namche.",
  15: "Squat and western toilets; hot bucket or gas showers available ($3-$6); carry your own toilet paper and sanitizer.",
  16: "15 kg total luggage limit on Lukla flights (10 kg duffel + 5 kg daypack); excess luggage stored free in Kathmandu.",
  17: "Travel insurance MUST cover emergency helicopter evacuation up to 4,000 meters; keep policy card handy.",
  18: "No ATMs past Namche; carry NPR 2,500 - 3,500 per person per day in cash for hot water, charging, snacks, and tips.",
  19: "Ideal for families with children (8+), couples, first-time Himalayan trekkers, and seniors with average fitness.",
  20: "Tipping guideline: $10-$15/day for guide and $8-$10/day for porter from the group, handed in an envelope on last night.",
  21: "Carry all plastic waste back to Lukla/Kathmandu; stick to designated trails; protect fragile alpine flora."
};

let htmlOut = `
        <!-- SECTION 6: PRACTICAL GUIDANCE ACCORDIONS -->
        <section id="section-details" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-6">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Expert Trail Guide</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Read Before You Book: Everest View Trek Practical Guide
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Detailed, verified operational guidance covering logistics, physiology, seasonal shifts, local culture, and trail safety. Click any topic below to expand, or use the interactive search and category filters.
          </p>

          <!-- Interactive Reading Progress & Status Tracker -->
          <div style="background: #ffffff; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(12, 43, 78, 0.04);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.2" style="vertical-align: middle;"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                <span style="font-weight: 700; color: #0C2B4E; font-size: 0.95rem;">Reading Progress:</span>
                <span id="guidance-read-count" style="font-size: 0.88rem; font-weight: 600; color: #475569;">0 of 21 topics explored</span>
                <span id="guidance-read-percent" style="display: inline-block; background: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; font-size: 0.78rem; font-weight: 800; padding: 2px 8px; border-radius: 12px;">0%</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <button type="button" id="toggle-all-guidance" style="background: #ffffff; border: 1.5px solid #008060; color: #008060; padding: 6px 14px; border-radius: 6px; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="7 11 12 6 17 11"/><polyline points="7 18 12 13 17 18"/></svg>
                  <span>Expand All</span>
                </button>
              </div>
            </div>
            <!-- Animated Progress Bar Track -->
            <div style="width: 100%; background: #F1F5F9; height: 8px; border-radius: 4px; overflow: hidden; position: relative;">
              <div id="accordion-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, #008060, #10B981); border-radius: 4px; transition: width 0.35s ease;"></div>
            </div>
          </div>

          <!-- Guidance Search and Category Filter Toolbar -->
          <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px;">
            <div style="position: relative; margin-bottom: 14px;">
              <input type="text" id="guidance-search-input" placeholder="Type to search topics (e.g. luggage, altitude, wifi, shower, charging, permits, tips)..." style="width: 100%; padding: 12px 42px 12px 42px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.92rem; outline: none; transition: border-color 0.2s; background: #ffffff; box-shadow: inset 0 1px 2px rgba(0,0,0,0.03);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2.2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <button type="button" id="clear-guidance-search" style="display: none; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94A3B8; font-size: 1.2rem; cursor: pointer; line-height: 1;" title="Clear search">&times;</button>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <!-- Category Filter Buttons -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="guidance-filter-group">
                <button type="button" class="guide-filter-btn active" data-guide-filter="all" style="padding: 7px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; background: #008060; color: #ffffff; border: 1.5px solid #008060; cursor: pointer; transition: all 0.2s;">
                  All Topics (21)
                </button>
                <button type="button" class="guide-filter-btn" data-guide-filter="logistics" style="padding: 7px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; background: #ffffff; color: #475569; border: 1.5px solid #CBD5E1; cursor: pointer; transition: all 0.2s;">
                  Logistics &amp; Flights (6)
                </button>
                <button type="button" class="guide-filter-btn" data-guide-filter="health" style="padding: 7px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; background: #ffffff; color: #475569; border: 1.5px solid #CBD5E1; cursor: pointer; transition: all 0.2s;">
                  Health &amp; Altitude (5)
                </button>
                <button type="button" class="guide-filter-btn" data-guide-filter="teahouse" style="padding: 7px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; background: #ffffff; color: #475569; border: 1.5px solid #CBD5E1; cursor: pointer; transition: all 0.2s;">
                  Teahouse Living (4)
                </button>
                <button type="button" class="guide-filter-btn" data-guide-filter="permits" style="padding: 7px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; background: #ffffff; color: #475569; border: 1.5px solid #CBD5E1; cursor: pointer; transition: all 0.2s;">
                  Permits &amp; Culture (6)
                </button>
              </div>

              <!-- Live results status label -->
              <span id="guidance-result-status" style="font-size: 0.82rem; font-weight: 600; color: #64748B;">Showing all 21 topics</span>
            </div>
          </div>

          <!-- Empty search results state -->
          <div id="guidance-no-results" style="display: none; background: #ffffff; border: 2px dashed #CBD5E1; border-radius: 12px; padding: 40px 24px; text-align: center; margin-bottom: 24px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="1.8" style="margin: 0 auto 12px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #0C2B4E; margin-bottom: 6px;">No Matching Topics Found</h3>
            <p style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">We could not find any guide topics matching your search keyword.</p>
            <button type="button" id="reset-guidance-search-btn" style="background: #008060; color: #ffffff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 700; font-size: 0.85rem; cursor: pointer;">View All 21 Topics</button>
          </div>

          <!-- 21 Accordion Cards -->
          <div class="space-y-4" id="details-accordion-group">
`;

cards.forEach(card => {
  const catInfo = categoryMap[card.num] || { cat: 'logistics', name: 'Trail Guide', badgeBg: '#F1F5F9', badgeColor: '#475569', badgeBorder: '#E2E8F0' };
  const takeaway = keyTakeaways[card.num] || '';

  htmlOut += `
            <!-- Accordion ${card.num} -->
            <div class="guidance-card" data-guide-category="${catInfo.cat}" data-card-num="${card.num}" id="guide-topic-${card.num}" style="border: 1.5px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(12, 43, 78, 0.04); margin-bottom: 14px; transition: border-color 0.2s, box-shadow 0.2s;">
              <button type="button" class="guidance-header-btn" aria-expanded="false" aria-controls="guide-content-${card.num}" style="width: 100%; padding: 18px 22px; text-align: left; background: #ffffff; border: none; outline: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; transition: background 0.15s ease; font-family: inherit;">
                <div style="display: flex; align-items: center; gap: 14px; text-align: left;">
                  <span class="guidance-badge-num" style="width: 32px; height: 32px; border-radius: 50%; background: #E6F7F0; color: #008060; font-size: 0.88rem; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s;">${card.num}</span>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="display: inline-block; background: ${catInfo.badgeBg}; color: ${catInfo.badgeColor}; border: 1px solid ${catInfo.badgeBorder}; font-size: 0.72rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.04em;">${catInfo.name}</span>
                    </div>
                    <span style="font-size: 1.05rem; font-weight: 700; color: #0C2B4E; line-height: 1.35;">${card.title}</span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; flex-shrink: 0; margin-left: 12px;">
                  <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.25s ease;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </button>
              <div id="guide-content-${card.num}" class="guidance-card-content" role="region" style="display: none; padding: 22px 24px 26px 24px; font-size: 0.95rem; line-height: 1.7; color: #334155; background: #ffffff; border-top: 1px solid #F1F5F9;">
                ${takeaway ? `
                <div style="background: #F8FAFC; border-left: 3.5px solid #008060; border-radius: 0 6px 6px 0; padding: 12px 16px; margin-bottom: 18px;">
                  <strong style="color: #0C2B4E; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Key Takeaway:</strong>
                  <span style="color: #1E293B; font-size: 0.95rem; line-height: 1.55; font-weight: 500;">${takeaway}</span>
                </div>` : ''}
                ${card.content}
              </div>
            </div>
`;
});

htmlOut += `
          </div>
        </section>
`;

fs.writeFileSync('scratch/improved_details_section.html', htmlOut, 'utf8');
console.log('Generated improved details section! Length:', htmlOut.length);
