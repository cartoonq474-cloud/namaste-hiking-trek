const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sPackMarker = '<!-- Section 4: Packing List -->';
const sDetailsMarker = '<!-- Section 5: Trip Details -->';

const idxPack = html.indexOf(sPackMarker);
const idxDetails = html.indexOf(sDetailsMarker);

if (idxPack === -1 || idxDetails === -1) {
  console.error('Section 4/5 packing markers not found!');
  process.exit(1);
}

// 70 Items across 6 categories
const categories = [
  {
    title: "Technical Mountaineering Equipment",
    count: 12,
    items: [
      { id: "gear-boots-6000", label: "Double Mountaineering Boots", desc: "Rigid plastic or hybrid double boots (La Sportiva Baruntse / Scarpa Phantom 6000) • <strong>1 pair</strong>", checked: false },
      { id: "gear-crampons", label: "12-Point Steel Crampons", desc: "Semi-rigid or step-in with anti-balling plates, fitted to your boots • <strong>1 pair</strong>", checked: false },
      { id: "gear-ice-axe", label: "Mountaineering Ice Axe", desc: "Classic walking piolet (60–70 cm) with wrist leash • <strong>1</strong>", checked: false },
      { id: "gear-harness", label: "Climbing Harness", desc: "Adjustable alpine harness with leg loops fitting over down pants • <strong>1</strong>", checked: false },
      { id: "gear-jumar", label: "Ascender / Jumar", desc: "Handled ascender for ascending fixed lines on summit ridge • <strong>1</strong>", checked: false },
      { id: "gear-atc-fig8", label: "Figure-8 / ATC Belay Device", desc: "For controlled descending and fixed-line abseiling • <strong>1</strong>", checked: false },
      { id: "gear-lock-carabiners", label: "Locking Carabiners", desc: "Pear or oval shaped screwgate/auto-lock carabiners • <strong>3</strong>", checked: false },
      { id: "gear-snap-carabiners", label: "Non-Locking Carabiners", desc: "Wiregate utility carabiners for gear management • <strong>2</strong>", checked: false },
      { id: "gear-slings-prusiks", label: "Slings & Prusik Cords", desc: "120 cm sewn dynex/nylon sling + 2x 6 mm prusik cords • <strong>1 set</strong>", checked: false },
      { id: "gear-helmet", label: "Climbing Helmet", desc: "UIAA certified mountaineering helmet that fits comfortably over beanies • <strong>1</strong>", checked: false },
      { id: "gear-exp-mitts", label: "Heavy Expedition Mittens", desc: "Down or Primaloft insulated with waterproof outer shell (-25°C rated) • <strong>1 pair</strong>", checked: false },
      { id: "gear-glacier-glasses", label: "Category 4 Glacier Glasses", desc: "100% UV protection with side leather shields to prevent snow blindness • <strong>1 pair</strong>", checked: true }
    ]
  },
  {
    title: "Expedition Clothing & Thermal Layering",
    count: 18,
    items: [
      { id: "gear-down-suit", label: "Expedition Down Jacket (800+ Fill)", desc: "Heavy baffled down jacket or 2-piece down suit (-20°C to -30°C) • <strong>1</strong>", checked: false },
      { id: "gear-down-pants", label: "Down Pants / Primaloft Insulated Pants", desc: "Full side zips for wearing over boots at High Camp & Summit • <strong>1 pair</strong>", checked: false },
      { id: "gear-hardshell-jacket", label: "Hard Shell Waterproof Jacket", desc: "Gore-Tex Pro or 3-layer breathable windproof shell • <strong>1</strong>", checked: false },
      { id: "gear-hardshell-pants", label: "Hard Shell Waterproof Pants", desc: "Breathable with full or 3/4 side zips for crampon fitting • <strong>1 pair</strong>", checked: false },
      { id: "gear-thermal-top-heavy", label: "Heavyweight Thermal Tops", desc: "250g/m² Merino wool or expedition fleece base layer • <strong>2</strong>", checked: false },
      { id: "gear-thermal-bottom-heavy", label: "Heavyweight Thermal Bottoms", desc: "250g/m² Merino wool thermal long johns • <strong>2</strong>", checked: false },
      { id: "gear-thermal-top-light", label: "Lightweight Base Layer Tops", desc: "Moisture-wicking merino/synthetic long sleeve shirts • <strong>2</strong>", checked: false },
      { id: "gear-fleece-midlayer", label: "Mid-Layer Fleece Jacket / Vest", desc: "Polartec or grid-fleece for active cold trekking • <strong>1</strong>", checked: false },
      { id: "gear-softshell-pants", label: "Softshell Trekking Pants", desc: "Stretchy, wind-resistant trekking trousers for lower valley walking • <strong>2 pairs</strong>", checked: false },
      { id: "gear-hiking-shirts", label: "Quick-Dry Hiking Shirts", desc: "Breathable short/long sleeve trekking shirts • <strong>3</strong>", checked: false },
      { id: "gear-rope-gloves", label: "Windproof Softshell Gloves", desc: "Leather-palmed climbing gloves for rope handling • <strong>1 pair</strong>", checked: false },
      { id: "gear-glove-liners", label: "Thermal Liner Gloves", desc: "Thin merino wool or silk liners worn inside mittens • <strong>2 pairs</strong>", checked: false },
      { id: "gear-mountaineering-socks", label: "Heavy Wool Mountaineering Socks", desc: "Thick merino wool expedition socks for double boots • <strong>3 pairs</strong>", checked: false },
      { id: "gear-trekking-socks", label: "Medium Trekking Wool Socks", desc: "Cushioned merino hiking socks for lower approach days • <strong>4 pairs</strong>", checked: false },
      { id: "gear-balaclava", label: "Balaclava / Thermal Face Mask", desc: "Protects face, cheeks, and nose from frostbite & icy winds • <strong>1</strong>", checked: false },
      { id: "gear-warm-beanie", label: "Warm Fleece / Wool Beanie", desc: "Covers ears comfortably, windproof • <strong>1</strong>", checked: false },
      { id: "gear-sun-hat", label: "Sun Hat / Safari Cap", desc: "Wide brim or neck drape for sunny valley hiking • <strong>1</strong>", checked: false },
      { id: "gear-buffs", label: "Multifunctional Buff / Neck Gaiters", desc: "Shields dust, cold air, and the Khumbu cough • <strong>2</strong>", checked: false }
    ]
  },
  {
    title: "Trekking & Camping Gear",
    count: 14,
    items: [
      { id: "gear-sleeping-bag", label: "Expedition Sleeping Bag (-20°C / -4°F)", desc: "4-season down sleeping bag with compression sack • <strong>1</strong>", checked: false },
      { id: "gear-daypack", label: "Trekking Daypack (35L–45L)", desc: "With ice axe loops, hydration sleeve, and rain cover • <strong>1</strong>", checked: false },
      { id: "gear-duffel", label: "100L Waterproof Expedition Duffel", desc: "Provided complimentary by Namaste Hiking Trek • <strong>1</strong>", checked: true },
      { id: "gear-poles", label: "Telescopic Trekking Poles", desc: "Sturdy flick-lock poles with snow baskets for moraine descents • <strong>1 pair</strong>", checked: false },
      { id: "gear-gaiters", label: "High-Altitude Breathable Gaiters", desc: "Keeps snow, scree, and ice out of your boots • <strong>1 pair</strong>", checked: false },
      { id: "gear-headlamp", label: "High-Powered Headlamp (350+ Lumens)", desc: "Essential for 2:00 AM alpine summit start (Petzl / Black Diamond) • <strong>1</strong>", checked: false },
      { id: "gear-batteries", label: "Spare Lithium AAA/AA Batteries", desc: "Lithium cells operate reliably in -25°C freezing conditions • <strong>2 sets</strong>", checked: false },
      { id: "gear-thermos", label: "1-Liter Insulated Stainless Thermos", desc: "Maintains boiling tea on freezing summit morning • <strong>1</strong>", checked: false },
      { id: "gear-nalgene", label: "Wide-Mouth Nalgene Bottles (1L)", desc: "Cold-rated bottles with insulated thermal jackets • <strong>2</strong>", checked: false },
      { id: "gear-camp-booties", label: "Down Booties / Slippers", desc: "Luxurious warmth for chilly teahouses and High Camp • <strong>1 pair</strong>", checked: false },
      { id: "gear-camp-shoes", label: "Lightweight Camp / Trail Shoes", desc: "Slip into comfort after removing heavy boots • <strong>1 pair</strong>", checked: false },
      { id: "gear-dry-bags", label: "Waterproof Dry Sacks / Pack Liners", desc: "Keeps electronics and spare down layers 100% dry • <strong>3</strong>", checked: false },
      { id: "gear-luggage-locks", label: "TSA / Combination Padlocks", desc: "For securing duffel bags on flights and trails • <strong>2</strong>", checked: false },
      { id: "gear-pee-bottle", label: "Pee Bottle (1L) / She-Wee", desc: "Avoids freezing midnight excursions outside the High Camp tent • <strong>1</strong>", checked: false }
    ]
  },
  {
    title: "Medical, Hygiene & Sun Protection",
    count: 14,
    items: [
      { id: "gear-water-purification", label: "Water Purification Tablets", desc: "Aquatabs, iodine, or Katadyn Micropur tablets • <strong>50 tabs</strong>", checked: true },
      { id: "gear-sunscreen", label: "High SPF Sunscreen (SPF 50+)", desc: "Broad-spectrum mineral zinc sunscreen for extreme UV • <strong>1 tube</strong>", checked: false },
      { id: "gear-lip-balm", label: "High SPF Lip Balm (SPF 30+)", desc: "Zinc oxide or beeswax protection against chapped lips • <strong>2 sticks</strong>", checked: false },
      { id: "gear-first-aid", label: "Personal Blister & First Aid Kit", desc: "Compeed blister pads, leucotape, sterile gauze, antiseptic • <strong>1 kit</strong>", checked: false },
      { id: "gear-diamox", label: "Acetazolamide (Diamox 250mg)", desc: "Aids altitude acclimatization (consult your doctor) • <strong>1 course</strong>", checked: false },
      { id: "gear-antibiotics", label: "Broad-Spectrum Antibiotics", desc: "Azithromycin / Ciprofloxacin for respiratory or gastro bugs • <strong>As advised</strong>", checked: false },
      { id: "gear-pain-relief", label: "Ibuprofen / Paracetamol", desc: "For mild altitude headaches and muscular recovery • <strong>2 strips</strong>", checked: false },
      { id: "gear-electrolytes", label: "Electrolyte Hydration Salts (ORS)", desc: "Essential for maintaining electrolyte balance at high altitude • <strong>12 packets</strong>", checked: false },
      { id: "gear-imodium", label: "Antidiarrheal (Imodium / Loperamide)", desc: "Rapid symptom relief for stomach upsets • <strong>1 strip</strong>", checked: false },
      { id: "gear-wet-wipes", label: "Biodegradable Wet Wipes", desc: "Your daily waterless bath above 4,000 meters • <strong>2 packs</strong>", checked: false },
      { id: "gear-hand-sanitizer", label: "Alcohol Hand Sanitizer", desc: "Pocket-sized bottles, use before every meal • <strong>2 bottles</strong>", checked: false },
      { id: "gear-quick-towel", label: "Quick-Dry Microfiber Towel", desc: "Compact, ultra-absorbent, fast drying • <strong>1</strong>", checked: false },
      { id: "gear-throat-drops", label: "Throat Lozenges / Cough Drops", desc: "Soothes dry Khumbu air irritation • <strong>2 packets</strong>", checked: false },
      { id: "gear-hand-warmers", label: "Chemical Hand & Toe Warmers", desc: "Activate inside gloves and boots for summit night • <strong>4–6 pairs</strong>", checked: false }
    ]
  },
  {
    title: "Electronics, Power & Navigation",
    count: 6,
    items: [
      { id: "gear-powerbank", label: "Heavy-Duty Power Bank (20,000 mAh)", desc: "Keep in inner pocket; cold drains lithium batteries rapidly • <strong>1–2</strong>", checked: false },
      { id: "gear-charging-cables", label: "Reinforced Charging Cables", desc: "USB-C, Lightning, micro-USB with wall charging brick • <strong>1 set</strong>", checked: false },
      { id: "gear-wall-adapter", label: "Universal Power Plug Adapter", desc: "Nepal teahouses use European Type C or Indian Type D sockets • <strong>1</strong>", checked: false },
      { id: "gear-camera", label: "Action Camera / DSLR & Extra Batteries", desc: "Carry spare camera batteries close to your body • <strong>1 kit</strong>", checked: false },
      { id: "gear-offline-maps", label: "Offline GPS App / Downloaded Maps", desc: "Gaia GPS / Maps.me offline maps of Solukhumbu • <strong>Pre-downloaded</strong>", checked: false },
      { id: "gear-kindle", label: "Kindle / E-Reader or Paperback", desc: "For relaxing teahouse afternoons in Thangnak and Khare • <strong>1</strong>", checked: false }
    ]
  },
  {
    title: "Documents, Cash & Administration",
    count: 6,
    items: [
      { id: "gear-passport", label: "Valid Passport (6+ Months Validity)", desc: "Plus 2 photocopies and digital backup on your phone • <strong>Original</strong>", checked: true },
      { id: "gear-visa-photos", label: "Passport-Sized Photos (4 copies)", desc: "Required for on-arrival Nepal visa and local registrations • <strong>4 copies</strong>", checked: false },
      { id: "gear-insurance-policy", label: "Mountaineering Insurance Certificate", desc: "Hard copy proving emergency rescue coverage up to 6,500m • <strong>Printed copy</strong>", checked: false },
      { id: "gear-cash-npr", label: "Nepali Rupees Cash (NPR 35,000–45,000)", desc: "For teahouse hot showers, battery charging, beverages & tips • <strong>In cash</strong>", checked: false },
      { id: "gear-flight-tickets", label: "Flight Itinerary & Booking Vouchers", desc: "Printed confirmation for international and domestic flights • <strong>1 set</strong>", checked: false },
      { id: "gear-credit-card", label: "Emergency Credit / Debit Cards", desc: "For Kathmandu emergencies (notify your bank before travel) • <strong>1–2 cards</strong>", checked: false }
    ]
  }
];

function renderCategory(cat) {
  const itemsHtml = cat.items.map(item => {
    const checkedAttr = item.checked ? ' checked' : '';
    return `                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="${item.id}" class="gear-item-checkbox"${checkedAttr} onclick="event.stopPropagation();">
                  <span class="gear-item-label">${item.label}</span>
                  <span class="gear-item-desc">${item.desc}</span>
                </div>`;
  }).join('\n');

  return `            <!-- ${cat.title} (${cat.count} items) -->
            <div class="gear-section">
              <h3 class="gear-section-title">${cat.title} <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(${cat.count} items)</span></h3>
              <div class="gear-grid">
${itemsHtml}
              </div>
            </div>`;
}

const renderedCategoriesHtml = categories.map(renderCategory).join('\n\n');

const newPackingSection = `<!-- Section 4: Packing List -->
          <section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Mera Peak Climbing Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    Need gear? Rent top-tier climbing equipment in Kathmandu or Khare — <strong>USD 1–5/day per item</strong>
                  </span>
                  <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: var(--color-copper-orange); text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Printable Checklist
                  </a>
                </div>
              </div>
              <div class="itinerary-meta-pill" style="font-size: 1rem; padding: 8px 18px; background: var(--color-glacier-bg); border-color: var(--color-alpine-blue); color: var(--color-primary-navy); border-radius: 12px; font-weight: 700; box-shadow: var(--shadow-sm);">
                Packed: <strong><span class="gear-checked-count">4</span> / <span class="gear-total-count">70</span></strong>
              </div>
            </div>

            <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin-bottom: 24px;">
              Check off items as you pack them. Your packing progress is automatically remembered in your web browser!
            </p>

${renderedCategoriesHtml}

            <!-- 4 Essential Gear Advice Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 36px;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M4 22L12 2l8 20H4z"/></svg>
                  Double Boots vs Trekking Boots
                </h4>
                <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">
                  Regular hiking boots are perfect for the approach up to Khare (<span data-altitude-m="5045">5,045 m</span>). Above Khare, insulated 6000m double mountaineering boots (e.g., La Sportiva G2 SM or Scarpa Phantom 6000) are strictly required to protect against frostbite during the -25°C summit push.
                </p>
              </div>

              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Summit Night Cold Protection
                </h4>
                <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">
                  Summit departure is at 2:00 AM in pitch blackness and piercing windchill. Layer an 800-fill down jacket over heavy merino base layers, wear insulated mitts with liner gloves, use chemical toe warmers, and keep spare lithium headlamp batteries inside your inner coat pocket.
                </p>
              </div>

              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Equipment Rental at Khare Base Camp
                </h4>
                <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">
                  Don't want to carry heavy mountaineering boots, crampons, or harnesses on international flights? Quality technical gear is available for rental directly in Kathmandu and Khare Base Camp, fitted perfectly under the supervision of your Climbing Sherpa.
                </p>
              </div>

              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
                  Lukla Flight Weight Limits (15 kg)
                </h4>
                <p style="font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5; margin: 0;">
                  Domestic mountain flights enforce a strict 15 kg (33 lbs) total baggage allowance (10 kg duffel carried by porters + 5 kg daypack). City clothes and excess luggage can be stored safely free of charge in our secure Kathmandu hotel luggage room.
                </p>
              </div>
            </div>

            <p style="font-size: 0.95rem; color: var(--color-neutral-600); line-height: 1.6; margin-top: 30px; padding: 16px; background: #e6f7f0; border-left: 4px solid var(--color-copper-orange); border-radius: 0 12px 12px 0;">
              This packing checklist is comprehensive and designed specifically for high-altitude Himalayan mountaineering. On Day 2 in Kathmandu, our technical climbing team inspects every item with you in person — anything missing can be easily rented or purchased before leaving for Lukla.
            </p>
          </section>\n\n          `;

html = html.substring(0, idxPack) + newPackingSection + html.substring(idxDetails);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 5: Packing List for Mera Peak!');

