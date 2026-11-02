// Module 7: Section 5 - Comprehensive Interactive Packing List (70 Items across 6 Categories)
function getPackingSection() {
  return `
        <!-- Section 5: Packing List -->
        <section id="section-packing" class="trek-detail-section">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Pikey Peak Trek</h2>
              <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                  Essential Info: Don’t have it? Rent it with us — <strong>USD 1/day per item</strong>
                </span>
                <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">Print Checklist</a>
              </div>
            </div>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">
            Packing appropriately with a smart layering system ensures warmth during the frosty 4:00 AM summit ascent of Pikey Peak (4,065 m) while keeping you cool and comfortable during daytime hiking. Check off each item as you pack; your progress is automatically saved to your browser.
          </p>

          <!-- Interactive Progress Counter -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
            <div>
              <span style="display: block; font-size: 0.85rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Packing Readiness</span>
              <strong id="packing-counter" style="font-size: 1.25rem; color: #0f172a;">Packed: 0 / 70 items (0%)</strong>
            </div>
            <div style="display: flex; gap: 10px;">
              <button id="btn-reset-packing" style="background: #ffffff; border: 1px solid #cbd5e1; color: #64748b; font-size: 0.85rem; font-weight: 600; padding: 6px 14px; border-radius: 6px; cursor: pointer;">
                Reset All
              </button>
              <button onclick="window.print()" style="background: #0f172a; border: 1px solid #0f172a; color: #ffffff; font-size: 0.85rem; font-weight: 600; padding: 6px 14px; border-radius: 6px; cursor: pointer;">
                Print Checklist
              </button>
            </div>
          </div>

          <!-- 6 Category Grids -->
          <div style="display: flex; flex-direction: column; gap: 20px;">

            <!-- Category 1: Head & Face -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                1. Head, Face &amp; Eye Protection (9 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-1"> UV400 Polarized Sunglasses (Category 3/4)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-2"> Warm Wool or Fleece Winter Beanie</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-3"> Wide-Brim Sun Hat or Baseball Cap</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-4"> UV Protective Buff / Microfiber Neck Gaiter</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-5"> LED Headlamp (300+ lumens) with Spare Batteries</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-6"> High SPF 50+ Sunscreen Lotion</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-7"> SPF 30+ Moisturizing Lip Balm</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-8"> Breathable Cotton Bandana</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-9"> Thermal Balaclava (for frosty summit morning)</label>
              </div>
            </div>

            <!-- Category 2: Upper Body Layering -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                2. Upper Body Layering (14 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-10"> Thermal Base Layer Tops (Merino Wool/Capilene) x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-11"> Lightweight Moisture-Wicking Thermal Top</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-12"> Mid-Weight Polartec Fleece Jacket</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-13"> Windproof &amp; Breathable Softshell Jacket</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-14"> Heavy Insulated Down Jacket (-10°C to -15°C rated)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-15"> Waterproof Gore-Tex Hard Shell Jacket</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-16"> Quick-Dry Short-Sleeve Trekking Shirts x3</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-17"> Long-Sleeve Sun-Protection Hiking Shirts x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-18"> Insulated Down Vest (optional mid-layer)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-19"> Lightweight Casual Cotton Shirt for Lodge</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-20"> Moisture-Wicking Sports Bras (for women) x3</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-21"> Extra Lightweight Synthetic T-Shirt</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-22"> Fleece Pullover for Evening Dining Hall</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-23"> Waterproof Pack Cover for Rain/Snow</label>
              </div>
            </div>

            <!-- Category 3: Lower Body & Legs -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                3. Lower Body &amp; Legs (11 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-24"> Moisture-Wicking Synthetic Underwear x5</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-25"> Thermal Base Layer Long Johns (Merino) x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-26"> Quick-Dry Stretchy Trekking Pants x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-27"> Waterproof &amp; Windproof Rain Pants (Gore-Tex)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-28"> Cozy Fleece Lounge Pants for Teahouses</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-29"> Convertible Zip-Off Hiking Pants</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-30"> Merino Wool Cushion Trekking Socks x4</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-31"> Heavy Thermal Mountaineering Socks x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-32"> Thin Anti-Blister Liner Socks x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-33"> Breathable Hiking Gaiters (spring/winter mud/snow)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-34"> Lightweight Cotton Pajama / Sleeping Pants</label>
              </div>
            </div>

            <!-- Category 4: Footwear & Handwear -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                4. Footwear &amp; Handwear (10 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-35"> Sturdy Waterproof Trekking Boots (Broken-in)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-36"> Lightweight Lodge Camp Shoes / Running Shoes</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-37"> Water-Resistant Bathroom Flip-Flops / Sandals</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-38"> Spare Heavy-Duty Boot Laces</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-39"> Thin Touchscreen-Compatible Liner Gloves</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-40"> Windproof Fleece Mid-Weight Gloves</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-41"> Heavy Insulated Waterproof Summit Mittens</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-42"> Air-Activated Chemical Hand &amp; Toe Warmers x4</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-43"> Microspikes (for icy patches in Nov–Feb)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-44"> Supportive Orthotic Insoles</label>
              </div>
            </div>

            <!-- Category 5: Sleeping & Carrying Equipment -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                5. Sleeping &amp; Carrying Equipment (11 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-45"> 3-Season Sleeping Bag (Comfort rated -10°C)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-46"> Waterproof Compression Stuff Sack</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-47"> Silk or Thermal Fleece Sleeping Bag Liner</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-48"> 30–38L Ergonomic Daypack with Waist Belt</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-49"> Rain Cover for Daypack</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-50"> 80L Duffel Bag (provided complimentary by us)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-51"> Small TSA Combination Padlock for Duffel</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-52"> Telescopic Trekking Poles with Rubber Tips</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-53"> 2x 1-Liter Wide-Mouth BPA-Free Nalgene Bottles</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-54"> Thermal Insulated Water Bottle Parkas</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-55"> 2L Hydration Bladder (optional for daypack)</label>
              </div>
            </div>

            <!-- Category 6: Medical, Hygiene & Electronics -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
                6. Medical, Hygiene &amp; Electronics (15 items)
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-56"> High-Capacity Power Bank (20,000 mAh)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-57"> Universal Two-Pin Nepal Wall Plug Adapter</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-58"> Personal First-Aid Kit (Moleskin, Band-Aids)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-59"> Diamox (Acetazolamide) for Altitude (consult MD)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-60"> Pain Relief (Ibuprofen / Paracetamol)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-61"> Water Purification Tablets (Aquatabs / Chlorine)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-62"> Oral Rehydration Electrolyte Powder Packets</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-63"> Antidiarrheal Medication (Loperamide / Imodium)</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-64"> Biodegradable Flushable Wet Wipes x2 packs</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-65"> Hand Sanitizer Gel Bottles (Pocket Size) x2</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-66"> Quick-Dry Microfiber Travel Towel</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-67"> Toilet Paper Rolls in Waterproof Ziploc Bags</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-68"> Waterproof Dry Bags for Electronics &amp; Passport</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-69"> Swiss Army Multi-Tool Knife</label>
                <label class="packing-item-label"><input type="checkbox" class="packing-checkbox" data-pack-id="pk-70"> Passport Copies, 4 Passport Photos &amp; Insurance Card</label>
              </div>
            </div>

          </div>

          <!-- Rental Advice Notice -->
          <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 20px; margin-top: 25px; font-size: 0.95rem; color: #9a3412; line-height: 1.6;">
            <strong style="color: #7c2d12; display: block; margin-bottom: 6px;">Need to Rent Down Jackets or Sleeping Bags in Kathmandu?</strong>
            Don't worry if you do not own high-altitude winter gear. Namaste Hiking Trek can assist you in renting quality, sanitized down jackets and -10°C sleeping bags in Thamel for approximately $1.50 to $2.00 per day.
          </div>
        </section>
`;
}

module.exports = { getPackingSection };

