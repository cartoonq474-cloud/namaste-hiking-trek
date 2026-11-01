const packingCategories = [
  {
    name: "Hiking Gear",
    count: 11,
    items: [
      { name: "Backpack (40–50L)", desc: "Comfortable daypack with hip belt for daily essentials carried personally." },
      { name: "Daypack Rain Cover", desc: "Waterproof elastic cover sized to fit your daypack." },
      { name: "Trekking Poles", desc: "Adjustable flick-lock poles for knee stability on steep glacial descents." },
      { name: "Water Bottles (2x 1L)", desc: "Wide-mouth Nalgene bottles capable of holding boiling water." },
      { name: "Hydration Bladder (2L)", desc: "Hands-free drinking bladder (with insulated tube to prevent freezing)." },
      { name: "Water Purification System", desc: "Aquatabs, chlorine dioxide drops, or UV SteriPEN system." },
      { name: "LED Headlamp", desc: "Reliable headlamp (200+ lumens) for Kala Patthar pre-dawn start." },
      { name: "Spare Batteries / Charging Cable", desc: "Lithium batteries or cold-resistant power cable for headlamp." },
      { name: "UV400 Polarized Sunglasses", desc: "Category 3 or 4 glacier glasses protecting against snow blindness." },
      { name: "Dry Sacks / Stuff Sacks", desc: "Waterproof roll-top bags to organize clothing inside duffel and daypack." },
      { name: "Heavy-Duty Duffel Bag", desc: "Durable 80–100L water-resistant duffel carried by porters." }
    ]
  },
  {
    name: "Footwear & Socks",
    count: 10,
    items: [
      { name: "Waterproof Trekking Boots", desc: "Sturdy, broken-in ankle-support boots with Vibram or lugged soles." },
      { name: "Lodge Camp Shoes", desc: "Lightweight running shoes, down booties, or warm slip-ons for evening lodge relaxation." },
      { name: "Heavyweight Wool Socks (3 pairs)", desc: "Thick Merino wool socks for high-altitude trekking days above 4,000m." },
      { name: "Midweight Trekking Socks (4 pairs)", desc: "Breathable moisture-wicking wool/synthetic socks for lower trail days." },
      { name: "Liner Socks (3 pairs)", desc: "Thin synthetic or silk liners to minimize friction and blisters." },
      { name: "Gaiters (Optional/Seasonal)", desc: "Breathable gaiters to keep snow, gravel, and mud out of boots." },
      { name: "Microspikes / Traction Cleats", desc: "Lightweight slip-on crampons for icy sections around Lobuche and Gorak Shep." },
      { name: "Spare Boot Laces", desc: "Durable backup laces matched to your trekking boots." },
      { name: "Blister Treatment Kit", desc: "Compeed hydrocolloid patches, athletic tape, and sterile lancets." },
      { name: "Anti-Chafe Foot Powder / Balm", desc: "Keeps feet dry and reduces skin maceration inside heavy boots." }
    ]
  },
  {
    name: "Clothing & Layering",
    count: 16,
    items: [
      { name: "Heavy Down Jacket (-15°C to -20°C)", desc: "Warm baffled 700–800 fill power down coat for sub-zero evenings and Kala Patthar." },
      { name: "Waterproof & Windproof Hard Shell Jacket", desc: "Breathable Gore-Tex shell with adjustable hood for wind, rain, and snow." },
      { name: "Waterproof & Windproof Hard Shell Pants", desc: "Full-zip or articulated rain pants to block high-altitude glacial winds." },
      { name: "Midweight Fleece Jacket", desc: "Breathable thermal mid-layer for active morning trekking." },
      { name: "Lightweight Insulated Vest", desc: "Synthetic or down vest providing core warmth without arm bulk." },
      { name: "Softshell Trekking Pants (2 pairs)", desc: "Durable, stretch-woven hiking trousers for daily walking." },
      { name: "Thermal Base Layer Tops (3 tops)", desc: "Merino wool or synthetic long-sleeve base layers (200g/m²)." },
      { name: "Thermal Base Layer Bottoms (2 bottoms)", desc: "Merino wool or synthetic thermal tights for high camps and sleeping." },
      { name: "Short-Sleeve Technical Shirts (3 shirts)", desc: "Moisture-wicking synthetic trekking t-shirts for lower elevations." },
      { name: "Long-Sleeve Sun Shirts (2 shirts)", desc: "UPF 50+ lightweight shirts protecting against high-altitude solar radiation." },
      { name: "Warm Wool / Fleece Beanie", desc: "Fleece-lined winter hat covering ears fully during cold mornings." },
      { name: "Wide-Brim Sun Hat", desc: "Sun protection hat with neck cape for clear valley days." },
      { name: "Buff / Neck Gaiters (2 units)", desc: "Essential for filtering cold dust and preventing the infamous 'Khumbu cough'." },
      { name: "Heavyweight Insulated Gloves / Mittens", desc: "Windproof, waterproof insulated gloves for Kala Patthar pre-dawn ascent." },
      { name: "Lightweight Liner Gloves", desc: "Fleece or touch-screen compatible gloves for daytime photography." },
      { name: "Moisture-Wicking Underwear (5–6 pairs)", desc: "Quick-drying breathable sports underwear." }
    ]
  },
  {
    name: "Personal Hygiene & Toiletries",
    count: 11,
    items: [
      { name: "Biodegradable Wet Wipes (2 large packs)", desc: "Primary hygiene solution for days when hot water showers are unavailable or ill-advised." },
      { name: "High-SPF Sunscreen (SPF 50+)", desc: "Broad-spectrum UV protection formulated for intense high-altitude radiation." },
      { name: "SPF 30+ Lip Balm / Sunblock Stick", desc: "Zinc-infused moisturizing lip balm preventing painful windburn and chapping." },
      { name: "Alcohol-Based Hand Sanitizer (2 bottles)", desc: "Compact bottles used before every meal and after bathroom visits." },
      { name: "Quick-Dry Microfiber Towel", desc: "Compact, antimicrobial towel for washing and lodge freshening." },
      { name: "Travel Toothbrush & Toothpaste", desc: "Compact oral hygiene supplies." },
      { name: "Biodegradable Multi-Use Soap", desc: "Concentrated camp soap for hands, face, and clothing." },
      { name: "Pocket Toilet Paper / Tissues (3 rolls)", desc: "Lodge facilities do not provide paper; keep stored in a zip-lock dry bag." },
      { name: "Nail Clippers & Tweezers", desc: "Essential personal grooming tools to keep toenails short for descents." },
      { name: "Moisturizing Skin Cream / Salve", desc: "Combats dry, cracked skin from arid high-altitude alpine air." },
      { name: "Sanitary Waste Bags", desc: "Sealable zip-lock bags for pack-it-out personal hygiene waste." }
    ]
  },
  {
    name: "Medical & First Aid",
    count: 11,
    items: [
      { name: "Acetazolamide (Diamox 125–250mg)", desc: "Prescription medication used to prevent and accelerate acclimatization." },
      { name: "Ibuprofen / Paracetamol", desc: "Pain relievers for high-altitude tension headaches and muscle aches." },
      { name: "Broad-Spectrum Antibiotic (Ciprofloxacin/Azithromycin)", desc: "Doctor-prescribed treatment for traveler's diarrhea or chest infections." },
      { name: "Antidiarrheal Medication (Loperamide/Imodium)", desc: "Temporary relief for acute gastrointestinal discomfort." },
      { name: "Oral Rehydration Salts (ORS Electrolytes, 10 packets)", desc: "Prevents critical dehydration caused by rapid breathing in dry mountain air." },
      { name: "Throat Lozenges / Antiseptic Candies", desc: "Soothes dry airway irritation and the persistent Khumbu trail cough." },
      { name: "Antihistamines & Decongestants", desc: "Relief for dust allergies and cold-induced nasal congestion." },
      { name: "Assorted Bandages & Adhesive Dressing", desc: "Sterile gauze, adhesive strips, and wound cleaning pads." },
      { name: "Antiseptic Cream (Savlon/Betadine)", desc: "Prevents infection on small cuts, scrapes, and abrasions." },
      { name: "Waterproof Medical Adhesive Tape", desc: "Zinc oxide adhesive tape for strapping and hot-spot blister protection." },
      { name: "Personal Prescription Medications", desc: "Adequate supply of daily personal medications kept in personal daypack." }
    ]
  },
  {
    name: "Electronics, Documents & Valuables",
    count: 11,
    items: [
      { name: "Passport (Original + 2 Copies)", desc: "Valid for at least 6 months beyond the intended departure date." },
      { name: "Insurance Certificate with Emergency Contact", desc: "Copy showing policy number, emergency hotline, and altitude helicopter coverage." },
      { name: "Passport Photos (4 copies)", desc: "Required for trekking documentation, permit records, and local SIM cards." },
      { name: "Cash in Nepalese Rupees (NPR 30,000–50,000)", desc: "ATMs in Namche are unreliable; cash is essential for hot water, drinks, and tips." },
      { name: "High-Capacity Power Bank (20,000 mAh)", desc: "Kept inside sleeping bag at night; sub-zero temperatures rapidly drain lithium batteries." },
      { name: "Universal Travel Plug Adapter", desc: "Nepal uses Type C, D, and M outlets; multi-plug adapter fits all lodges." },
      { name: "Multi-Port USB Charging Hub", desc: "Enables simultaneous charging of phone, camera, and watch from single outlet." },
      { name: "Charging Cables (2 sets)", desc: "Reinforced cables kept protected in daypack." },
      { name: "Camera with Extra Batteries", desc: "Keep batteries inside your inner jacket layer to retain charge in extreme cold." },
      { name: "Local Nepal SIM Card (Ncell / Nepal Telecom)", desc: "Purchased in Kathmandu for mobile data coverage through Namche and Dingboche." },
      { name: "Small Luggage Padlocks", desc: "TSA combination locks to secure duffel bag and lodge room doors." }
    ]
  }
];

function generatePackingCanonicalHtml() {
  let itemCounter = 0;

  const sectionsHtml = packingCategories.map(cat => {
    const itemsHtml = cat.items.map(item => {
      itemCounter++;
      const itemId = `gear-item-${itemCounter}`;
      return `
              <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                <input type="checkbox" id="${itemId}" class="gear-item-checkbox" data-gear-id="${itemId}">
                <div class="gear-item-content">
                  <label for="${itemId}" class="gear-item-label">${item.name}</label>
                  <span class="gear-item-desc">${item.desc}</span>
                </div>
              </div>
      `;
    }).join('\n');

    return `
            <!-- ${cat.name} -->
            <div class="gear-section">
              <h3 class="gear-section-title">${cat.name} <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(${cat.count} items)</span></h3>
              <div class="gear-grid">
${itemsHtml}
              </div>
            </div>
    `;
  }).join('\n');

  return `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Everest Base Camp Luxury Trek</h2>
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
              <div class="itinerary-meta-pill" style="font-size: 1rem; padding: 8px 18px; background: var(--color-glacier-bg); border-color: var(--color-alpine-blue); color: var(--color-primary-navy); border-radius: 12px; font-weight: 700; box-shadow: var(--shadow-sm);">
                Packed: <strong><span class="gear-checked-count">0</span> / <span class="gear-total-count">${itemCounter}</span></strong>
              </div>
            </div>

            <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin-bottom: 24px;">
              Check off items as you pack them. Your packing state is saved automatically in your browser!
            </p>

${sectionsHtml}

            <!-- Tactical Packing Directives -->
            <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 24px; margin-top: 32px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                5 Tactical Packing Directives for Luxury High-Altitude Treks
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                <div style="padding: 16px; background: var(--color-neutral-50); border-radius: 8px;">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">1. Strict Luggage Separation</strong>
                  <p style="margin: 0; font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5;">Main duffel bags (max 10–12 kg) are transported ahead by porters. You will not have access to your duffel between morning departure and evening arrival at the lodge.</p>
                </div>
                <div style="padding: 16px; background: var(--color-neutral-50); border-radius: 8px;">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">2. Personal Daypack Independence</strong>
                  <p style="margin: 0; font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5;">Carry rain gear, warm fleece, gloves, sun protection, 2L water, medical kit, passport, cash, and personal electronics in your 40–50L daypack (target weight: 5–6 kg).</p>
                </div>
                <div style="padding: 16px; background: var(--color-neutral-50); border-radius: 8px;">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">3. Footwear Discipline</strong>
                  <p style="margin: 0; font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5;">Never start the trek in brand-new boots. Break them in with weighted hiking months in advance. Wear trekking boots on your international flight to protect against lost airline luggage.</p>
                </div>
                <div style="padding: 16px; background: var(--color-neutral-50); border-radius: 8px;">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">4. Power & Thermal Management</strong>
                  <p style="margin: 0; font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5;">Extreme cold rapidly saps battery chemistry. Store mobile phones, cameras, and power banks inside an insulated pouch in your sleeping bag overnight.</p>
                </div>
                <div style="padding: 16px; background: var(--color-neutral-50); border-radius: 8px;">
                  <strong style="color: var(--color-primary-navy); display: block; margin-bottom: 6px;">5. Rigorous Hydration Protocol</strong>
                  <p style="margin: 0; font-size: 0.88rem; color: var(--color-neutral-600); line-height: 1.5;">Drink 3 to 4 liters of purified water daily. Never drink unpurified tap or river water. Avoid untreated plastic disposable bottles to protect Sagarmatha National Park ecology.</p>
                </div>
              </div>
            </div>
  `;
}

module.exports = {
  packingCategories,
  generatePackingCanonicalHtml
};
