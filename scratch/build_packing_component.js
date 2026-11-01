function buildSectionPacking() {
  const categories = [
    {
      title: "Hiking & Trail Gear",
      count: "10 items",
      items: [
        { id: "poles", name: "Trekking Poles", desc: "Adjustable flick-lock poles to protect knees on steep forest descents • 1 pair" },
        { id: "daypack", name: "Daypack (25L - 30L)", desc: "Comfortable pack with hip support for water, jacket, snacks, and camera • 1 piece" },
        { id: "raincover", name: "Waterproof Daypack Rain Cover", desc: "Keeps electronics and extra layers completely dry • 1 piece" },
        { id: "headlamp", name: "LED Headlamp (300+ Lumens)", desc: "Essential for 4:00 AM summit walk to Upper Viewpoint & teahouse nights • 1 piece" },
        { id: "sunglasses", name: "UV400 Polarized Sunglasses", desc: "Critical protection against intense alpine UV reflection on Badal Danda • 1 pair" },
        { id: "bottles", name: "Water Bottles (2x 1-Liter Nalgene)", desc: "Wide-mouth bottles capable of holding boiling water inside sleeping bag • 2 bottles" },
        { id: "purification", name: "Water Purification Tablets / Filter", desc: "Aquatabs, Micropur, or Sawyer Squeeze filter for safe drinking • 1 set" },
        { id: "drybags", name: "Waterproof Dry Sacks (5L - 10L)", desc: "For organizing and waterproofing clothing inside main duffel bag • 3 pieces" },
        { id: "gaiters", name: "Lightweight Trail Gaiters", desc: "Keeps forest dirt, gravel, and snow out of trekking boots • 1 pair" },
        { id: "towel", name: "Quick-Dry Microfiber Towel", desc: "Ultra-absorbent, fast-drying towel for teahouse washings • 1 piece" }
      ]
    },
    {
      title: "Garments & Thermal Layering",
      count: "14 items",
      items: [
        { id: "thermal-top", name: "Merino Wool Thermal Tops", desc: "Breathable base layer, moisture-wicking and odor-resistant • 2 pieces" },
        { id: "thermal-bottom", name: "Merino Wool Thermal Bottoms", desc: "Snug-fitting long johns for cold nights at High Camp (3,580 m) • 2 pieces" },
        { id: "trek-shirts", name: "Technical Hiking T-Shirts / Long Sleeves", desc: "Quick-drying synthetic or merino fabric for lower forest walks • 3 shirts" },
        { id: "fleece", name: "Mid-Weight Fleece Jacket", desc: "Insulating middle layer for cool mornings and evening dining halls • 1 piece" },
        { id: "hardshell", name: "Waterproof & Windproof Hard Shell Jacket", desc: "Breathable membrane (Gore-Tex or equivalent) with adjustable hood • 1 piece" },
        { id: "down-jacket", name: "Heavy Down Insulated Jacket (-10°C)", desc: "Warm high-loft down jacket (available to rent for $1/day in Pokhara) • 1 piece" },
        { id: "trek-pants", name: "Quick-Dry Trekking Pants", desc: "Durable convertible or stretch hiking trousers • 2 pairs" },
        { id: "rain-pants", name: "Waterproof Breathable Rain Pants", desc: "Protects against sudden Himalayan showers and ridge winds • 1 pair" },
        { id: "liner-gloves", name: "Lightweight Liner Gloves", desc: "Touchscreen-compatible thin fleece or wool gloves • 1 pair" },
        { id: "heavy-mitts", name: "Windproof & Insulated Outer Mittens", desc: "Keeps fingers warm during freezing dawn push to Upper Viewpoint • 1 pair" },
        { id: "beanie", name: "Thermal Fleece / Wool Beanie", desc: "Covers ears fully against ridge gusts above 3,500 m • 1 piece" },
        { id: "sun-hat", name: "Wide-Brim Sun Hat", desc: "Shields neck and face from high-altitude UV radiation • 1 piece" },
        { id: "buff", name: "Neck Gaiter / Buff", desc: "Protects throat from cold mountain air, dust, and wind • 2 pieces" },
        { id: "underwear", name: "Moisture-Wicking Sports Underwear", desc: "Breathable synthetic or merino briefs to prevent chafing • 4-5 pairs" }
      ]
    },
    {
      title: "Footwear & Foot Care",
      count: "4 items",
      items: [
        { id: "boots", name: "Sturdy Waterproof Trekking Boots", desc: "Ankle-support boots with Vibram soles, thoroughly broken in • 1 pair" },
        { id: "camp-shoes", name: "Camp Shoes / Sandals / Slip-ons", desc: "Lightweight footwear to give feet rest inside cozy teahouse lodges • 1 pair" },
        { id: "wool-socks", name: "Merino Wool Trekking Socks", desc: "Cushioned, seamless high-altitude trekking socks • 4 pairs" },
        { id: "liner-socks", name: "Thin Synthetic Liner Socks", desc: "Worn under wool socks to eliminate friction and prevent blisters • 2 pairs" }
      ]
    },
    {
      title: "Sleeping & Camp Rest",
      count: "4 items",
      items: [
        { id: "sleeping-bag", name: "Four-Season Sleeping Bag (-10°C Comfort)", desc: "Keeps you warm during sub-zero nights at High Camp (rentable $1/day) • 1 piece" },
        { id: "silk-liner", name: "Silk / Fleece Sleeping Bag Liner", desc: "Adds 3-5°C thermal warmth and keeps sleeping bag clean • 1 piece" },
        { id: "earplugs", name: "Silicone Earplugs & Sleep Eye Mask", desc: "Ensures deep sleep in plywood-walled mountain teahouses • 2 pairs" },
        { id: "pillow", name: "Inflatable Travel Pillow", desc: "Compact packable pillow for extra lodge bed comfort • 1 piece" }
      ]
    },
    {
      title: "Toiletries & Personal Medical",
      count: "14 items",
      items: [
        { id: "first-aid", name: "Personal First Aid & Blister Kit", desc: "Compeed blister pads, sterile gauze, medical tape, and antiseptic wipes • 1 kit" },
        { id: "diamox", name: "Diamox (Acetazolamide 125mg/250mg)", desc: "Altitude sickness prevention (consult physician before trip) • 1 strip" },
        { id: "pain-relief", name: "Pain Relief (Ibuprofen / Paracetamol)", desc: "Relieves muscle soreness and mild altitude headaches • 1 strip" },
        { id: "electrolytes", name: "Oral Rehydration Electrolyte Salts", desc: "Maintains mineral balance after intense uphill trail climbs • 6-8 packets" },
        { id: "anti-diarrhea", name: "Imodium & Antibiotic (Ciprofloxacin)", desc: "Emergency traveler stomach treatment prescribed by doctor • 1 strip" },
        { id: "lip-balm", name: "Lip Balm with SPF 30+", desc: "Prevents painful dry cracked lips in high dry ridge air • 2 tubes" },
        { id: "sunscreen", name: "Broad Spectrum Sunscreen SPF 50+", desc: "Sweat-resistant sunscreen formulated for alpine exposure • 1 bottle" },
        { id: "wipes", name: "Biodegradable Wet Wipes", desc: "Crucial for personal hygiene when sub-zero teahouse showers freeze • 2 packs" },
        { id: "sanitizer", name: "Pocket Hand Sanitizer", desc: "Alcohol-based hand gel used before every meal • 2 bottles" },
        { id: "soap", name: "Biodegradable Camp Soap", desc: "Eco-friendly soap for face and body washing • 1 bottle" },
        { id: "dental", name: "Travel Toothbrush & Toothpaste", desc: "Compact hygiene kit • 1 set" },
        { id: "toilet-paper", name: "Toilet Paper Rolls in Ziplock Bag", desc: "Keep dry inside daypack (not provided in teahouse restrooms) • 2 rolls" },
        { id: "throat-lozenges", name: "Throat Lozenges / Hard Candy", desc: "Soothes dry cough caused by crisp, dry Himalayan air • 1 pack" },
        { id: "nail-clipper", name: "Nail Clipper & Small Scissors", desc: "Keeps toenails trimmed short to prevent bruised toes on descents • 1 piece" }
      ]
    },
    {
      title: "Electronics, Navigation & Documents",
      count: "10 items",
      items: [
        { id: "powerbank", name: "Heavy-Duty Power Bank (20,000 mAh)", desc: "Cold drains phone batteries quickly; teahouse charging costs $3-$5 • 1 piece" },
        { id: "spares-cam", name: "Spare Camera Batteries & Memory Cards", desc: "Keep batteries inside your inner jacket pocket next to body heat • 2-3 pieces" },
        { id: "charger-cables", name: "Multi-Cable & Universal Wall Adapter", desc: "For charging phone, watch, and headlamp simultaneously • 1 set" },
        { id: "phone-pouch", name: "Waterproof Smartphone Pouch", desc: "Protects phone from rain and allows easy access for photos • 1 piece" },
        { id: "passport", name: "Original Passport (6+ Months Validity)", desc: "Required for ACAP permit checkpoints at Kande and Pothana • 1 document" },
        { id: "permit-copies", name: "ACAP & TIMS Permit Paper Copies", desc: "Carried in daypack alongside passport • 2 copies" },
        { id: "pass-photos", name: "Passport-Size Photos", desc: "For on-arrival permits or emergency paperwork • 4 photos" },
        { id: "insurance-cert", name: "Travel Insurance Policy Document", desc: "Must specify emergency helicopter evacuation cover up to 5,000 m • 2 copies" },
        { id: "cash-npr", name: "Cash in Nepalese Rupees (NPR 25,000 - 35,000)", desc: "No ATMs on Mardi ridge trail; needed for hot showers, snacks, and tips • Cash" },
        { id: "pen-notebook", name: "Ballpoint Pen & Travel Journal", desc: "For immigration cards, trail log, and personal reflections • 1 set" }
      ]
    }
  ];

  let sectionsHtml = '';
  let totalItems = 0;

  categories.forEach(cat => {
    totalItems += cat.items.length;
    let itemsHtml = '';
    cat.items.forEach(item => {
      itemsHtml += `
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="mardi-gear-${item.id}" class="gear-item-checkbox" data-gear-id="mardi-gear-${item.id}" onclick="event.stopPropagation();">
                  <span class="gear-item-label">${item.name}</span>
                  <span class="gear-item-desc">${item.desc}</span>
                </div>`;
    });

    sectionsHtml += `
            <div class="gear-section" style="margin-bottom: 28px;">
              <h3 class="gear-section-title" style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">${cat.title} <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(${cat.count})</span></h3>
              <div class="gear-grid">
                ${itemsHtml}
              </div>
            </div>`;
  });

  return `<section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Mardi Himal Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    Essential Info: Don’t have it? Rent it with us — <strong>USD 1/day per item</strong>
                  </span>
                  <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: var(--color-copper-orange); text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Printable PDF
                  </a>
                </div>
              </div>
              <div class="itinerary-meta-pill" style="font-size: 1rem; padding: 8px 18px; background: #e6f7f0; border: 1px solid #10B981; color: #008060; font-weight: 600;">
                Packed: <span class="gear-checked-count">0</span> / <span class="gear-total-count">${totalItems}</span>
              </div>
            </div>

            <!-- Gear Categories -->
            ${sectionsHtml}
          </section>`;
}

module.exports = { buildSectionPacking };
