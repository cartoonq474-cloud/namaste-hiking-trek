// Module 7: Section 5 - Comprehensive Interactive Packing List for Dhaulagiri Circuit Trek
function getPackingSection() {
  return `
        <!-- Section 5: Packing List -->
        <section id="section-packing" class="trek-detail-section">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Dhaulagiri Circuit Trek</h2>
              <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                  Essential Info: Don’t have it? Rent it with us — <strong>USD 1/day per item</strong>
                </span>
                <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">Print Checklist</a>
              </div>
            </div>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">
            The 20-day Dhaulagiri Circuit requires expedition-grade layering suitable for temperatures ranging from +25°C in the humid lower Myagdi Valley down to -20°C in the high-altitude camps of Dhaulagiri Base Camp (4,750 m) and Hidden Valley (5,200 m). Proper boots, microspikes/crampons, an expedition down jacket, and a -20°C sleeping bag are critical for safety across French Pass (5,360 m) and Dhampus Pass (5,250 m). Check off items as you pack:
          </p>

          <!-- Category 1: Head & Face -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">01.</span> Head &amp; Face Protection
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> UV Glacier Sunglasses (Category 3 or 4 with side shields)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Warm Thermal Beanie / Fleece Toque
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Wide-Brim Sun Hat with UPF 50+ rating
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Windproof Balaclava / Thermal Neck Gaiter (Buff)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> High-Output Headlamp (350+ lumens) with spare lithium batteries
              </label>
            </div>
          </div>

          <!-- Category 2: Upper Body Layering -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">02.</span> Upper Body Layering System
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 3x Merino Wool Moisture-Wicking Base Layer Tops
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 2x Mid-Weight Thermal Fleece / Grid Hoodies
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Heavy Expedition Down Jacket (800+ fill power, rated -20°C)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Waterproof &amp; Windproof Gore-Tex 3-Layer Hardshell Jacket
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Lightweight Breathable Trekking Shirts (Quick-Dry Synthetic)
              </label>
            </div>
          </div>

          <!-- Category 3: Lower Body Layering -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">03.</span> Lower Body Layering
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 2x Merino Wool Thermal Long Johns / Base Leggings
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 2x Durable High-Altitude Softshell Trekking Pants
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Waterproof Breathable Gore-Tex Hardshell Pants (Side-zip)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 4–5x Moisture-Wicking Sports Underwear
              </label>
            </div>
          </div>

          <!-- Category 4: Footwear & Traction -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">04.</span> Footwear, Traction &amp; Hands
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Broken-in Stiff B2 or 4-Season Waterproof Trekking Boots
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Trail Microspikes or 10-Point Flexible Walking Crampons
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> High-Altitude Breathable Snow Gaiters
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 4x Heavyweight Cushioned Merino Wool Mountain Socks
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Heavy Waterproof Mountaineering Mittens / Insulated Gloves
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 2x Lightweight Wind-Resistant Liner Gloves (Touchscreen compatible)
              </label>
            </div>
          </div>

          <!-- Category 5: Sleeping & Camp Comfort -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">05.</span> Sleeping &amp; Camp Gear
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 4-Season Alpine Sleeping Bag (Rated -15°C to -20°C / 0°F)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Thermal Silk or Fleece Sleeping Bag Liner (+5°C boost)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Camp Down Booties (Crucial for cold evenings in Hidden Valley)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Inflatable Travel Pillow &amp; Earplugs (Camp wind insulation)
              </label>
            </div>
          </div>

          <!-- Category 6: Technical Gear, Hydration & Electronics -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-copper-orange);">06.</span> Technical Gear, Hydration &amp; Medical
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 32–40 Liter Technical Daypack with Rain Cover
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Sturdy Telescopic Trekking Poles with Snow Baskets
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 2x 1-Liter Wide-Mouth Nalgene Bottles + Insulated Bottle Parkas
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 750ml – 1L Vacuum Insulated Thermos Flask (For hot tea on passes)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Water Purification Tablets (Aquatabs / Chlorine Dioxide) + Filter
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> 20,000+ mAh Heavy-Duty Power Bank (Cold-resistant)
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Personal Medical Kit: Diamox (Acetazolamide), Ibuprofen, Blister Care, SPF 50+
              </label>
              <label style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: #334155; cursor: pointer;">
                <input type="checkbox" style="width: 16px; height: 16px; accent-color: var(--color-copper-orange);"> Waterproof Dry Sacks &amp; Heavy-Duty Duffle Bag (Supplied by Namaste)
              </label>
            </div>
          </div>

        </section>
`;
}

module.exports = { getPackingSection };

