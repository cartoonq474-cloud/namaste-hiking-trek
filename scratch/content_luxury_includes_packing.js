// Module 3: Inclusions, Exclusions, Commercial Clarity, and 6-Category Packing List

const inclusions = [
  "Scheduled Kathmandu airport transfers (international arrival & departure) by private vehicle.",
  "Kathmandu luxury hotel nights at specified 4-star/5-star property with breakfast included.",
  "Upgraded mountain lodge / teahouse accommodation throughout Khumbu (private rooms and attached bathrooms where available).",
  "Full-board mountain meals: daily breakfast, lunch, and dinner during trekking days.",
  "Government-licensed, English-speaking veteran high-altitude Sherpa guide.",
  "Dedicated porter service to carry main trekking duffle bags (1 porter between 2 trekkers, max 15kg per trekker).",
  "Sagarmatha National Park entry permit, Khumbu Pasang Lhamu municipality fee, and TIMS/Trek-Card registrations.",
  "Planned Kathmandu to Lukla helicopter flight on Day 2 (as specified in confirmed booking).",
  "Planned Pheriche to Kathmandu helicopter flight on Day 11 (as specified in confirmed booking).",
  "Comprehensive pre-trek briefing, pulse oximeter monitoring, and complimentary branded waterproof duffle bag."
];

const exclusions = [
  "International airfare to and from Kathmandu and Nepal tourist entry visa fees.",
  "Comprehensive travel and medical insurance with specific emergency helicopter evacuation cover up to 6,000m.",
  "Medical treatment, hospitalization, or rescue deductibles not covered by your insurer.",
  "Personal trekking gear, clothing, and personal equipment rental (sleeping bags or down jackets unless agreed).",
  "Personal expenses: bar bills, snacks, specialty coffees, soft drinks, bottled water, and laundry.",
  "Wi-Fi, device charging, and hot showers at high-altitude mountain lodges where not explicitly included.",
  "Unscheduled hotel/lodge nights, meals, and alternative transport caused by personal early departure, illness, or flight delays.",
  "Excess baggage charges beyond the agreed helicopter payload and porter weight limits.",
  "Tips and gratitude for Sherpa guide, assistant guides, and porters (customary in Nepal trekking culture)."
];

const commercialAdvisory = `
<div class="commercial-advisory-box" style="background: #FFFBEB; border: 1px solid #FDE68A; border-left: 4px solid var(--color-copper-orange); border-radius: 8px; padding: 18px 22px; margin-top: 28px;">
  <h4 style="margin: 0 0 6px 0; color: #92400E; font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Commercial Clarity: Scheduled Flights vs. Emergency Evacuation
  </h4>
  <p style="margin: 0; font-size: 0.95rem; color: #78350F; line-height: 1.6;">
    A scheduled helicopter transfer and a medical rescue evacuation serve two completely distinct purposes under aviation and insurance regulations. Scheduled helicopter flights (Kathmandu–Lukla on Day 2 and Pheriche–Kathmandu on Day 11) provide planned scenic transport included in your quotation. Emergency evacuation, however, is a life-safety medical operation coordinated in response to severe altitude illness or traumatic injury, which must be authorized and settled directly through your personal travel insurance. The luxury package label does not imply unlimited emergency medical rescue coverage.
  </p>
</div>
`;

const packingCategories = [
  {
    id: "pack-hiking",
    name: "Hiking Gear",
    count: 11,
    items: [
      "Daypack suited to planned walking days (30–35L with supportive hip belt)",
      "Soft duffle or agreed porter bag (80–100L waterproof, supplied by us)",
      "Daypack rain cover (waterproof nylon)",
      "Waterproof liners or internal dry bags for electronics and spare layers",
      "Broken-in trekking boots (sturdy, ankle-supportive, waterproof)",
      "Lodge shoes or comfortable camp sandals",
      "Trekking poles (collapsible, lightweight with flick-locks)",
      "Headlamp with high-lumen output and spare batteries / USB charger",
      "UV-protective sunglasses (Category 3 or 4 glacier glasses)",
      "Reusable water bottles or hydration bladder (2 x 1L capacity)",
      "Gaiters or seasonal microspikes (only if advised by lead guide for early spring / winter)"
    ]
  },
  {
    id: "pack-garments",
    name: "Garments & Technical Layers",
    count: 19,
    items: [
      "Quick-drying moisture-wicking trekking shirts (short & long sleeve)",
      "Trekking trousers (convertible or stretch-woven)",
      "Warm soft-shell trekking trousers for higher elevations",
      "Thermal base-layer tops (merino wool or high-grade synthetic)",
      "Thermal base-layer bottoms (merino wool or technical fleece)",
      "Fleece jacket or insulating mid-layer top",
      "Heavy down jacket with hood (-15°C to -20°C rating for evenings and Kala Patthar)",
      "Waterproof breathable shell jacket (Gore-Tex or equivalent 20,000mm+)",
      "Waterproof breathable trousers (packable with side zips)",
      "Lightweight wind jacket (if separate from outer shell)",
      "Merino wool trekking socks (4–5 pairs)",
      "Extra-thick thermal socks for sleeping",
      "Lightweight liner gloves (touchscreen compatible)",
      "Heavyweight insulated outer mountaineering gloves / mitts",
      "Warm fleece or wool beanie hat",
      "Sun hat with wide brim or neck flap",
      "Neck gaiter or Buff (multi-functional, windproof)",
      "Breathable underwear and sports bras where needed (moisture-wicking)",
      "Comfortable lodge and sleeping clothes (cotton or soft fleece)"
    ]
  },
  {
    id: "pack-sleeping",
    name: "Sleeping Systems",
    count: 5,
    items: [
      "Four-season sleeping bag rated to -15°C / -20°C (essential for upper lodges)",
      "Silk or thermal sleeping-bag liner (adds 3–5°C of warmth and hygiene)",
      "Silicone or foam earplugs (essential for teahouse wall acoustics)",
      "Contoured eye mask for daytime recovery and bright moonlit nights",
      "Compact inflatable travel pillow (if preferred over lodge pillows)"
    ]
  },
  {
    id: "pack-toiletries",
    name: "Toiletries & Hygiene",
    count: 16,
    items: [
      "Toothbrush with hygienic protective cover",
      "Travel-sized biodegradable toothpaste",
      "High-SPF broad-spectrum sunscreen (SPF 50+)",
      "SPF lip balm (high UV protection)",
      "Pocket hand sanitizers (alcohol-based, multiple bottles)",
      "Toilet paper stored in waterproof ziplock bags",
      "Pocket facial tissues",
      "Biodegradable wet wipes (pack all used wipes out; do not flush)",
      "Quick-drying antimicrobial microfiber towel",
      "Travel-sized biodegradable soap / wash kit",
      "Feminine hygiene supplies where required",
      "Small nail clippers or manicure scissors",
      "Small hair comb or detangling brush",
      "Blister treatment kit (Compeed, zinc oxide tape, sterile lancets)",
      "Personal first-aid supplies (paracetamol, ibuprofen, rehydration salts, Pepto-Bismol)",
      "Essential prescribed medication (Diamox/Acetazolamide, personal inhalers, epipens) kept in daypack"
    ]
  },
  {
    id: "pack-electronics",
    name: "Electronics & Power",
    count: 9,
    items: [
      "Smartphone with offline offline maps and emergency contacts saved",
      "High-capacity power bank (20,000 mAh+ with USB-PD output)",
      "Heavy-duty charging cables (USB-C, Lightning, Micro-USB)",
      "Universal travel adapter with multiple pin configurations",
      "DSLR or mirrorless camera (if photographing beyond smartphone)",
      "Spare camera batteries (stored in inside warm pockets to prevent rapid drain)",
      "High-speed memory cards (multiple cards in protective case)",
      "GPS altimeter watch or fitness tracker",
      "Compact wired or wireless earphones (maintain situational trail awareness)"
    ]
  },
  {
    id: "pack-misc",
    name: "Documents & Miscellaneous",
    count: 10,
    items: [
      "Valid passport (minimum 6 months validity from return date)",
      "Nepal tourist visa or visa-on-arrival documentation and passport photos",
      "Printed travel insurance certificate with 24/7 medical assistance contact & policy number",
      "Emergency contact details (family, insurer, Kathmandu operator)",
      "Booking confirmation, payment receipts, and inclusion vouchers",
      "International and domestic flight itineraries and e-tickets",
      "Photocopies of passport, visa, and permits stored in waterproof pouch",
      "Nepalese Rupees in cash (small denominations for personal expenses, charging, Wi-Fi, tips)",
      "Backup credit/debit card (Visa/Mastercard) for Kathmandu expenses",
      "Personal energy snacks (nuts, dried fruit, chocolate, electrolyte drink tablets)"
    ]
  }
];

const tacticalDirectives = `
<div class="tactical-packing-guidance" style="margin-top: 36px; border-top: 1px solid #e2e8f0; padding-top: 28px;">
  <h3 style="color: var(--color-primary-navy); font-size: 1.35rem; margin-bottom: 20px; font-weight: 700;">Tactical Directives for a High-Altitude Luxury Itinerary</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.05rem; font-weight: 700;">Do You Still Need a Sleeping Bag?</h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Yes, absolutely. Even premium mountain lodges above Dingboche (Lobuche and Gorak Shep) do not feature central bedroom heating. Nighttime temperatures drop to -10°C to -18°C. A 4-season sleeping bag (-15°C rating) ensures restorative, safe sleep.</p>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.05rem; font-weight: 700;">Warm Clothing for Kala Patthar Sunrise</h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">The pre-dawn climb begins in freezing darkness (-15°C with severe wind chill). Lay out your headlamp, heavy down jacket, windproof shell trousers, thermal gloves, and warm hat beside your bed the night before to avoid fumbling in the cold.</p>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.05rem; font-weight: 700;">Packing for the Descent to Pheriche</h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">After descending from Kala Patthar, the long walk down the rocky moraine to Pheriche tests the knees and quads. Keep trekking poles, knee supports, and lighter mid-layers easily accessible in your daypack as temperatures rise during descent.</p>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.05rem; font-weight: 700;">What Not to Overpack</h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Helicopter weight limits are strictly 15 kg per passenger (including both duffle bag and daypack). Avoid bulky cotton clothes, multiple pairs of heavy shoes, large shampoo bottles, or unnecessary gadgets. The mountain environment rewards disciplined, lightweight packing.</p>
    </div>

    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
      <h4 style="color: var(--color-primary-navy); margin: 0 0 8px 0; font-size: 1.05rem; font-weight: 700;">Comfort Items for Luxury Lodge Stays</h4>
      <p style="margin: 0; font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6;">Enhance your evenings with comfortable fleece camp slippers, rich moisturizer for dry mountain air, a Kindle or lightweight book, silicone earplugs, and electrolyte drink mixes to maintain optimal hydration without taste fatigue.</p>
    </div>
  </div>
</div>
`;

function generatePackingHtml() {
  const tabsNav = packingCategories.map((c, i) => `
    <button class="packing-tab-btn${i === 0 ? ' active' : ''}" data-target="${c.id}" style="padding: 10px 18px; border: 1px solid #e2e8f0; background: ${i === 0 ? 'var(--color-primary-navy)' : 'white'}; color: ${i === 0 ? 'white' : 'var(--color-neutral-700)'}; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
      ${c.name} (${c.count})
    </button>
  `).join('\n');

  const tabPanels = packingCategories.map((c, i) => `
    <div class="packing-panel${i === 0 ? ' active' : ''}" id="${c.id}" style="display: ${i === 0 ? 'block' : 'none'};">
      <ul style="list-style-type: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
        ${c.items.map(it => `
          <li class="pack-check-item" style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.5; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #edf2f7;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" style="flex-shrink:0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${it}</span>
          </li>
        `).join('\n')}
      </ul>
    </div>
  `).join('\n');

  return `
  <div class="packing-tabs-wrapper" style="margin-top: 20px;">
    <div class="packing-tabs-nav" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;">
      ${tabsNav}
    </div>
    <div class="packing-tabs-content">
      ${tabPanels}
    </div>
    ${tacticalDirectives}
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const tabBtns = document.querySelectorAll('.packing-tab-btn');
      const panels = document.querySelectorAll('.packing-panel');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-target');
          tabBtns.forEach(b => {
            b.classList.remove('active');
            b.style.background = 'white';
            b.style.color = 'var(--color-neutral-700)';
          });
          panels.forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none';
          });
          btn.classList.add('active');
          btn.style.background = 'var(--color-primary-navy)';
          btn.style.color = 'white';
          const activePanel = document.getElementById(targetId);
          if (activePanel) {
            activePanel.classList.add('active');
            activePanel.style.display = 'block';
          }
        });
      });
    });
  </script>
  `;
}

module.exports = {
  inclusions,
  exclusions,
  commercialAdvisory,
  packingCategories,
  generatePackingHtml
};
