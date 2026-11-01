const inclusions = [
  {
    title: "Kathmandu Airport Transfers",
    desc: "Private arrival and departure transfers between Tribhuvan International Airport and your hotel in Kathmandu."
  },
  {
    title: "Luxury Hotel in Kathmandu",
    desc: "Deluxe room accommodation with breakfast in a 5-star or premium boutique hotel in Kathmandu (pre- and post-trek)."
  },
  {
    title: "Helicopter Flight: Kathmandu to Lukla",
    desc: "Scheduled helicopter flight sector from Kathmandu directly to Lukla, bypassing seasonal road highway detours to Ramechhap."
  },
  {
    title: "Helicopter Flight: Pheriche to Kathmandu",
    desc: "Scheduled helicopter flight sector from Pheriche helipad back to Kathmandu, saving 3 to 4 days of downhill walking."
  },
  {
    title: "Upgraded Mountain Lodge Accommodations",
    desc: "Best available upgraded luxury lodges (e.g., Yeti Mountain Home or premium private en-suite lodges where available)."
  },
  {
    title: "Full Mountain Board (All Meals on Trail)",
    desc: "Breakfast, lunch, and dinner daily during the trekking route from package menus with hot tea or coffee with meals."
  },
  {
    title: "Licensed Sherpa Guide & Porter Team",
    desc: "Experienced, licensed English-speaking local Sherpa mountain guide and dedicated porters (1 porter for every 2 trekkers)."
  },
  {
    title: "All Required Permits & National Park Fees",
    desc: "Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality entry fee, and TIMS/trekker documentation."
  },
  {
    title: "Safety Kit & Health Monitoring",
    desc: "Daily pulse oximeter oxygen saturation tracking, comprehensive high-altitude medical kit, and emergency logistics coordination."
  },
  {
    title: "Farewell Celebration Dinner",
    desc: "Traditional celebration farewell dinner in Kathmandu celebrating the successful journey to Everest Base Camp."
  }
];

const exclusions = [
  {
    title: "International Airfare & Travel Visa",
    desc: "International flights to and from Nepal, and Nepal entry tourist visa fees (payable on arrival at Kathmandu airport, USD 30–50)."
  },
  {
    title: "Travel & Medical Evacuation Insurance",
    desc: "Mandatory emergency travel insurance explicitly covering high-altitude trekking, medical treatment, and helicopter rescue up to 6,000 m."
  },
  {
    title: "Personal Trekking Equipment & Clothing",
    desc: "Hiking boots, personal thermal layers, daypack, and sleeping bag (clean down sleeping bags and jackets can be rented for USD 1/day)."
  },
  {
    title: "Bar Bills, Beverages & Specialty Coffees",
    desc: "Alcoholic beverages, specialty espresso coffees, soft drinks, mineral/boiled drinking water, and personal snacks on the trail."
  },
  {
    title: "Lodge Surcharges & Personal Incidentals",
    desc: "Wi-Fi access cards, electronic device battery charging fees, extra hot gas showers, and laundry services in mountain lodges."
  },
  {
    title: "Contingency Days & Extra Hotel Nights",
    desc: "Additional accommodation, food, or expenses in Kathmandu resulting from flight delays, weather disruptions, or personal schedule changes."
  },
  {
    title: "Single Room Supplements",
    desc: "Single room supplement charges in Kathmandu hotels or private room sole-occupancy fees where double occupancy is standard."
  },
  {
    title: "Tips & Gratuities for Support Crew",
    desc: "Discretionary tips for Sherpa trekking guides, porters, helicopter pilots, and private city transfer drivers."
  },
  {
    title: "Unforeseen Emergency Expenses",
    desc: "Any cost arising from landslides, severe weather disruptions, flight cancellations, or personal early departure from the trek."
  }
];

function generateIncludesCanonicalHtml() {
  const incCards = inclusions.map(item => `
              <div class="inc-exc-card">
                <div class="inc-exc-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div class="inc-exc-card-content">
                  <h4 class="inc-exc-card-title">${item.title}</h4>
                  <p class="inc-exc-card-desc">${item.desc}</p>
                </div>
              </div>
  `).join('\n');

  const excCards = exclusions.map(item => `
              <div class="inc-exc-card exclude-card">
                <div class="inc-exc-icon-box exclude-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
                <div class="inc-exc-card-content">
                  <h4 class="inc-exc-card-title">${item.title}</h4>
                  <p class="inc-exc-card-desc">${item.desc}</p>
                </div>
              </div>
  `).join('\n');

  return `
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 24px;
                margin-top: 30px;
              }
              .inc-exc-section-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .inc-exc-lead-text {
                color: var(--color-neutral-600);
                font-size: 0.98rem;
                line-height: 1.6;
                margin-bottom: 24px;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 40px;
              }
              @media (max-width: 768px) {
                .inc-exc-grid {
                  grid-template-columns: 1fr;
                }
              }
              .inc-exc-card {
                background: white;
                border: 1px solid var(--color-neutral-100);
                border-radius: var(--radius-md);
                padding: 20px;
                display: flex;
                gap: 16px;
                box-shadow: var(--shadow-sm);
                transition: transform var(--transition-fast), box-shadow var(--transition-fast);
              }
              .inc-exc-card:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
              }
              .inc-exc-icon-box {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: rgba(16, 185, 129, 0.1);
                color: #10B981;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              }
              .inc-exc-card.exclude-card {
                border-color: #fee2e2;
                background: #fffafa;
              }
              .inc-exc-icon-box.exclude-icon-box {
                background: rgba(239, 68, 68, 0.1);
                color: #EF4444;
              }
              .inc-exc-card-content {
                flex: 1;
              }
              .inc-exc-card-title {
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                margin: 0 0 6px 0;
              }
              .inc-exc-card-desc {
                font-size: 0.9rem;
                color: var(--color-neutral-600);
                line-height: 1.5;
                margin: 0;
              }
            </style>

            <div class="inc-exc-container">
              <!-- Inclusions Title -->
              <div class="inc-exc-section-title-wrapper">
                <h3 class="inc-exc-section-title">What's Included in the Everest Base Camp Luxury Trek</h3>
              </div>
              <p class="inc-exc-lead-text">
                The source describes these components as included or includable according to the chosen package. Treat this as the proposed service checklist:
              </p>

              <!-- Inclusions Grid -->
              <div class="inc-exc-grid">
${incCards}
              </div>

              <!-- Exclusions Title -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #EF4444;">
                <h3 class="inc-exc-section-title">What's Excluded from the Everest Base Camp Luxury Trek</h3>
              </div>
              <p class="inc-exc-lead-text">
                These elements remain the personal responsibility of the trekker or are handled separately upon request:
              </p>

              <!-- Exclusions Grid -->
              <div class="inc-exc-grid">
${excCards}
              </div>

              <!-- Commercial Clarity Notice -->
              <div style="background: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; padding: 20px 24px; border-radius: 8px; margin-top: 10px;">
                <h4 style="margin: 0 0 8px 0; color: #92400e; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  Commercial Clarity: Scheduled Flights vs. Emergency Evacuation
                </h4>
                <p style="margin: 0; color: #78350f; font-size: 0.92rem; line-height: 1.6;">
                  The planned helicopter segments (Kathmandu–Lukla on Day 2 and Pheriche–Kathmandu on Day 11) are scheduled itinerary transfers. They do not replace the requirement for mandatory travel insurance covering high-altitude emergency medical helicopter rescue. If a trekker requires unscheduled evacuation due to acute mountain sickness or illness, that evacuation must be coordinated through their emergency insurer.
                </p>
              </div>
            </div>
  `;
}

module.exports = {
  inclusions,
  exclusions,
  generateIncludesCanonicalHtml
};
