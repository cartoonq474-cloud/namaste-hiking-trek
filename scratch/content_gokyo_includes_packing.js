// Module 3: Includes, Excludes, Commercial Clarity, and 6-Category Packing List for Gokyo Lake Trek

const includesList = [
  {
    title: "Airport Transfers",
    desc: "Private airport pick-up upon arrival and drop-off upon departure at Kathmandu Tribhuvan International Airport."
  },
  {
    title: "Kathmandu Hotel Accommodation",
    desc: "2 nights quality hotel accommodation in Kathmandu (pre and post-trek) with daily breakfast included."
  },
  {
    title: "Lukla Domestic Flights & Transfers",
    desc: "Round-trip domestic flights (Kathmandu/Ramechhap to Lukla and Lukla to Kathmandu/Ramechhap), including any required private road transfers to/from Ramechhap."
  },
  {
    title: "Mountain Teahouse Accommodation",
    desc: "12 nights accommodation in authentic mountain teahouses and trekking lodges along the Gokyo route (twin-share basis)."
  },
  {
    title: "Full Board Meals on Trek",
    desc: "All meals during the trekking days: 13 breakfasts, 11 lunches, and 11 dinners with tea/coffee included at meal times."
  },
  {
    title: "Fresh Seasonal Fruit",
    desc: "Fresh seasonal fruits served after dinner each evening during the trek for vital nutrition and morale."
  },
  {
    title: "Licensed Sherpa Trekking Guide",
    desc: "Government-licensed, English-speaking Sherpa guide certified in wilderness first aid and high-altitude mountain leadership."
  },
  {
    title: "Dedicated Porter Support",
    desc: "Strong, reliable local Sherpa porters (1 porter for 2 trekkers, carrying up to 20–24 kg total / 10–12 kg per client) with fair wages and insurance."
  },
  {
    title: "All Permits & TIMS Registration",
    desc: "Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality entry permit, and TIMS card registration fees."
  },
  {
    title: "Gear & 24/7 Safety Tracking",
    desc: "Namaste Hiking Trek waterproof duffle bag (yours to keep), free four-season sleeping bag and down jacket rental upon request, pulse oximeter monitoring, and 24/7 Kathmandu dispatch tracking."
  }
];

const excludesList = [
  {
    title: "International Airfare & Visa",
    desc: "International flights to and from Kathmandu and Nepal entry visa fees ($30 for 15 days, $50 for 30 days, payable upon arrival)."
  },
  {
    title: "Mandatory Travel Insurance",
    desc: "Travel and medical insurance that explicitly covers high-altitude trekking and emergency helicopter rescue up to 6,000 meters."
  },
  {
    title: "Kathmandu Lunches & Dinners",
    desc: "Lunches and dinners in Kathmandu (allowing you freedom to explore the vibrant culinary scene in Thamel)."
  },
  {
    title: "Personal Trekking Equipment",
    desc: "Personal hiking boots, thermal layers, daypack, trekking poles, and personal first-aid supplies."
  },
  {
    title: "Teahouse Amenities & Personal Services",
    desc: "Hot showers (approx. $3–$6), electronic device battery charging ($2–$5), Wi-Fi scratch cards, and laundry services."
  },
  {
    title: "Beverages & Snacks",
    desc: "Bottled mineral water, boiled drinking water, soft drinks, beer, spirits, specialty espresso coffees, and snacks along the trail."
  },
  {
    title: "Crew Tipping & Gratuities",
    desc: "Tips for your lead Sherpa guide, assistant guides, and porters (customarily $150–$200 total per trekker for a 15-day journey)."
  },
  {
    title: "Optional Route Extensions",
    desc: "High pass crossings (Cho La Pass, Renjo La Pass), private helicopter excursions, or separate upper-lake guide extensions."
  },
  {
    title: "Unforeseen Delays & Emergencies",
    desc: "Extra nights, replacement meals, or alternative transportation caused by mountain flight cancellations, weather, road closures, or personal illness."
  }
];

const packingCategories = [
  {
    id: "gear",
    name: "Hiking Gear",
    count: 11,
    items: [
      "Ergonomic daypack (30–35L) with supportive hip belt",
      "Heavy-duty waterproof duffel bag (80–100L, provided by Namaste Hiking Trek)",
      "High-visibility daypack rain cover",
      "Waterproof roll-top dry bags or heavy internal plastic liners",
      "Sturdy, broken-in high-ankle trekking boots with Vibram soles",
      "Comfortable lodge shoes (sandals, running shoes, or down booties)",
      "Adjustable lightweight trekking poles with carbide tips",
      "Bright LED headlamp (300+ lumens) with spare rechargeable batteries",
      "Category 3 or 4 UV-protective polarized sunglasses (essential for glacial glare)",
      "Two 1-liter reusable wide-mouth water bottles (Nalgene) or insulated flasks",
      "Lightweight microspikes or seasonal traction cleats (if advised by guide)"
    ]
  },
  {
    id: "garments",
    name: "Garments & Layers",
    count: 19,
    items: [
      "3–4 moisture-wicking short-sleeve synthetic trekking shirts",
      "2 lightweight long-sleeve base-layer trekking shirts (UPF 50+)",
      "2 pairs quick-drying technical trekking trousers",
      "1 pair warm soft-shell hiking pants (wind- and water-resistant)",
      "2 sets mid-weight merino wool thermal base-layer tops",
      "2 sets mid-weight merino wool thermal base-layer bottoms",
      "1 insulating fleece jacket or Polartec mid-layer",
      "1 expedition heavyweight down jacket with hood (-15°C to -20°C rated)",
      "1 breathable waterproof and windproof Gore-Tex shell jacket",
      "1 pair waterproof and windproof Gore-Tex rain trousers",
      "1 ultralight packable windbreaker shell",
      "4–5 pairs moisture-wicking merino wool trekking socks",
      "2 pairs heavyweight thermal wool socks for cold teahouse nights and summit day",
      "1 pair lightweight touchscreen liner gloves (merino wool or fleece)",
      "1 pair waterproof, windproof insulated mountaineering gloves or mitts",
      "1 warm thermal fleece beanie or wool hat covering ears",
      "1 wide-brim sun hat or baseball cap for lower valley sun protection",
      "2 UV-protective microfiber neck gaiters or buffs",
      "4–5 pairs moisture-wicking quick-dry underwear and sports bras"
    ]
  },
  {
    id: "sleeping",
    name: "Sleeping System",
    count: 5,
    items: [
      "Four-season expedition sleeping bag (rated to -15°C to -20°C / available for rental)",
      "Washable silk or thermal fleece sleeping bag liner (adds 3–5°C warmth & hygiene)",
      "High-grade noise-cancelling earplugs (essential for thin wooden teahouse walls)",
      "Lightweight sleep eye mask for bright mountain mornings",
      "Compact inflatable travel pillow (optional comfort addition)"
    ]
  },
  {
    id: "toiletries",
    name: "Toiletries & Hygiene",
    count: 16,
    items: [
      "Travel toothbrush and biodegradable toothpaste",
      "Broad-spectrum high-SPF sunscreen (SPF 50+ water-resistant)",
      "Moisturizing SPF 30+ lip balm (prevents painful dry cracked lips)",
      "2 bottles alcohol-based antibacterial hand sanitizer (pocket-sized)",
      "2 rolls of toilet paper stored in a waterproof zip-top pouch",
      "Pocket travel tissues and paper handkerchiefs",
      "2 packs biodegradable wet wipes (pack all used wipes out to Kathmandu)",
      "Quick-drying antibacterial microfiber camp towel",
      "Small bar of biodegradable soap or multipurpose camping wash",
      "Feminine hygiene supplies and sanitary disposal bags (where required)",
      "Compact nail clippers and emery board",
      "Pocket comb or small detangling hairbrush",
      "Comprehensive blister care kit (Compeed patches, leukotape, sterile lancet)",
      "Personal first-aid kit (painkillers, antidiarrheals, rehydration salts, throat lozenges)",
      "Personal prescription medications with original doctor documentation",
      "Acetazolamide (Diamox) for altitude acclimatization support (consult doctor)"
    ]
  },
  {
    id: "electronics",
    name: "Electronics & Power",
    count: 9,
    items: [
      "Smartphone with offline navigation apps, camera, and torch",
      "High-capacity portable power bank (20,000 mAh recommended; cold drains power)",
      "Multi-device charging cables (USB-C, Lightning, Micro-USB)",
      "Universal travel wall plug adapter (types C, D, and M for Nepal)",
      "Mirrorless or DSLR camera with wide-angle lens (optional for photography)",
      "2–3 spare camera batteries (keep warm inside inner jacket pockets)",
      "High-speed SD/microSD memory cards (minimum 64GB–128GB)",
      "GPS altimeter watch or satellite communicator (Garmin inReach / optional)",
      "Compact wired or wireless earphones (maintain awareness of yaks and trails)"
    ]
  },
  {
    id: "misc",
    name: "Documents & Cash",
    count: 10,
    items: [
      "Valid passport with at least 6 months validity beyond travel date",
      "2 passport-sized photographs (for emergency permit checks/SIM registration)",
      "Printed copies of travel insurance policy showing 6,000m helicopter evacuation cover",
      "24/7 international travel insurance emergency assistance phone numbers",
      "Printed flight e-tickets and Namaste Hiking Trek booking voucher",
      "Printed copies of Nepal visa or visa application confirmation",
      "Nepali rupee cash in small denominations (NPR 30,000–45,000 for personal lodge expenses)",
      "Emergency backup credit/debit card (Visa/Mastercard)",
      "High-energy trail snacks (protein bars, dry nuts, electrolyte drink powder, chocolate)",
      "Reusable waterproof document wallet or zip-top pouch for all paperwork"
    ]
  }
];

function generateIncludesExcludesHtml() {
  const incItemsHtml = includesList.map(item => `
              <div class="inc-exc-card" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #e6f7f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #008060; margin-top: 2px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h3 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 4px;">${item.title}</h3>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">${item.desc}</p>
                </div>
              </div>
  `).join('\n');

  const excItemsHtml = excludesList.map(item => `
              <div class="inc-exc-card exclude-card" style="display: flex; gap: 14px; background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #fee2e2; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #dc2626; margin-top: 2px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <h3 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 4px;">${item.title}</h3>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">${item.desc}</p>
                </div>
              </div>
  `).join('\n');

  return `
            <h2 class="trek-section-title">What's Included & Excluded: Gokyo Lake Trek</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 14px; margin-bottom: 24px; line-height: 1.7;">
              At Namaste Hiking Trek, we maintain strict commercial clarity with transparent, written service schedules. Below is the verified breakdown of all package inclusions and personal exclusions for our 15-day Gokyo Lake expedition.
            </p>

            <div style="display: grid; grid-template-columns: 1fr; gap: 32px; margin-bottom: 30px;">
              
              <!-- Inclusions Column -->
              <div>
                <h3 style="font-size: 1.25rem; color: #008060; font-weight: 700; display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  What's Included in the 15-Day Package
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
${incItemsHtml}
                </div>
              </div>

              <!-- Exclusions Column -->
              <div>
                <h3 style="font-size: 1.25rem; color: #dc2626; font-weight: 700; display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  What's Excluded from the Package Price
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
${excItemsHtml}
                </div>
              </div>

            </div>

            <!-- Commercial Clarity Callout Box -->
            <div style="background: #fffbeb; border: 1px solid #fde68a; border-left: 5px solid #f59e0b; border-radius: var(--radius-md); padding: 20px; margin-bottom: 30px;">
              <h3 style="font-size: 1.1rem; color: #92400e; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Commercial Clarity & Contingency Advisory
              </h3>
              <p style="font-size: 0.95rem; color: #78350f; line-height: 1.7; margin: 0;">
                <strong>Scheduled Flights vs. Contingency Flights:</strong> Our package includes standard scheduled domestic mountain flights between Lukla and Kathmandu (or Ramechhap during seasonal operations). Flights in the Everest region are strictly visual (VFR) and subject to weather delays. Day 15 is built into this itinerary as a flexible buffer. If emergency helicopter evacuation is required due to acute altitude illness, costs are settled through your travel insurance provider, not the trek package price. Optional route extensions (such as crossing the Cho La Pass toward Everest Base Camp or the Renjo La Pass into Thame) must be requested in advance and confirmed in writing with an updated quotation.
              </p>
            </div>
  `;
}

function generatePackingListHtml() {
  const tabsNavHtml = packingCategories.map((c, i) => `
                <button class="gear-tab-btn${i === 0 ? ' active' : ''}" data-gear-tab="${c.id}">
                  ${c.name} (${c.count})
                </button>
  `).join('\n');

  const tabPanelsHtml = packingCategories.map((c, i) => {
    const isHidden = i === 0 ? '' : ' style="display: none;"';
    const itemsListHtml = c.items.map(item => `
                  <li class="gear-checklist-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--color-neutral-100); font-size: 0.95rem; color: var(--color-neutral-700);">
                    <input type="checkbox" class="gear-item-checkbox" style="margin-top: 3px; width: 18px; height: 18px; accent-color: #008060; cursor: pointer;">
                    <span>${item}</span>
                  </li>
    `).join('\n');

    return `
              <!-- Tab Panel: ${c.name} -->
              <div class="gear-tab-panel" id="gear-panel-${c.id}"${isHidden}>
                <ul style="list-style: none; padding: 0; margin: 0;">
${itemsListHtml}
                </ul>
              </div>
    `;
  }).join('\n');

  return `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
              <h2 class="trek-section-title" style="margin: 0;">Packing List for Gokyo Lake Trek (70 Items)</h2>
              <div style="font-size: 0.95rem; background: #e6f7f0; color: #008060; font-weight: 700; padding: 6px 14px; border-radius: 100px;">
                Packed: <strong><span class="gear-checked-count">0</span> / <span class="gear-total-count">70</span></strong>
              </div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              Trekking into the high Gokyo Valley requires a well-structured layering system and disciplined weight management. Your porter carries your main waterproof duffle bag (up to 10–12 kg), while you carry your daypack (5–7 kg) containing layers, water, medication, camera, and valuables. Below is our comprehensive 70-item interactive checklist adapted to Gokyo's alpine conditions.
            </p>

            <!-- Packing Tabs Container -->
            <div class="gear-tabs-container" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              
              <!-- Tab Navigation -->
              <div class="gear-tabs-nav" style="display: flex; gap: 8px; flex-wrap: wrap; border-bottom: 2px solid var(--color-neutral-100); padding-bottom: 14px; margin-bottom: 20px;">
${tabsNavHtml}
              </div>

              <!-- Tab Panels -->
              <div class="gear-panels-wrap">
${tabPanelsHtml}
              </div>

            </div>

            <!-- 6 Tactical Directives for Gokyo -->
            <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-top: 36px; margin-bottom: 16px; font-weight: 700;">
              6 Tactical Directives: High-Altitude Packing for Gokyo
            </h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
              
              <!-- Directive 1 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">1.</span> Non-Technical Route Reality
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  The standard Gokyo Lake Trek and Gokyo Ri ascent are non-technical trekking routes. You do not need ropes, climbing harnesses, ice axes, or heavy plastic mountaineering boots under normal conditions.
                </p>
              </div>

              <!-- Directive 2 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">2.</span> Seasonal Traction & Microspikes
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  During late autumn, winter, or early spring, packed snow or hard ice can form across shaded moraine trails near Gokyo. Lightweight elastic slip-on microspikes provide invaluable traction and safety.
                </p>
              </div>

              <!-- Directive 3 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">3.</span> Daypack Weight Discipline
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Keep your daily daypack weight strictly between 5 and 7 kg. At 4,500+ meters, every extra kilogram significantly increases cardiovascular strain and fatigue. Carry only immediate essentials.
                </p>
              </div>

              <!-- Directive 4 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">4.</span> What NOT to Pack
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Leave heavy hardcover books, multiple bulky cotton jeans, excessive toiletry bottles, hair styling appliances, redundant electronic gadgets, and excess clothing in secure luggage storage at your Kathmandu hotel.
                </p>
              </div>

              <!-- Directive 5 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">5.</span> Strategic Daypack Accessibility
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Pack strategically: keep your water bottle, wind/rain jacket, sun hat, UV sunglasses, and lip balm in exterior or top pockets for instant access without having to dig through your bag on the trail.
                </p>
              </div>

              <!-- Directive 6 -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-sm);">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #008060; font-weight: 800;">6.</span> Dual Internal Waterproofing
                </h4>
                <p style="font-size: 0.9rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0;">
                  Even with water-resistant duffels and rain covers, mountain storms can penetrate seams. Line the interior of your main duffel bag and daypack with heavy-duty dry sacks or thick trash bags to keep sleeping bags and down dry.
                </p>
              </div>

            </div>
  `;
}

module.exports = {
  includesList,
  excludesList,
  packingCategories,
  generateIncludesExcludesHtml,
  generatePackingListHtml
};
