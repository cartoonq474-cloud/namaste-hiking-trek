const fs = require('fs');

const faqsData = [
  // Category 1: General Information
  {
    category: 'general',
    q: 'How many days are required for the complete Dhaulagiri Circuit Trek?',
    a: 'Our comprehensive expedition package requires 20 calendar days from Kathmandu arrival to international departure. This includes 2 days of preparation and sightseeing in Kathmandu, 2 days overland approach (Beni/Babiyachaur), 13 active trekking days, 2 mandatory high-altitude acclimatization rest days (Italian Base Camp and Dhaulagiri Base Camp), a scenic mountain flight from Jomsom to Pokhara, and overland return to Kathmandu.'
  },
  {
    category: 'general',
    q: 'What is the highest point reached on the Dhaulagiri Circuit?',
    a: 'The highest daytime crossing is French Pass at 5,360 meters (17,585 ft), which connects the Chhonbardan Glacier moraine with Hidden Valley. The second major high pass is Dhampus Pass at approximately 5,200 to 5,250 meters. The highest scheduled overnight camp is in Hidden Valley at approximately 5,000 to 5,200 meters.'
  },
  {
    category: 'general',
    q: 'What is the best season to trek the Dhaulagiri Circuit?',
    a: 'The two prime seasons are Autumn (late September to mid-November) and Spring (April to late May). Autumn offers crystal-clear Himalayan visibility, stable weather, and dry pass crossings following the monsoon. Spring brings warmer daytime temperatures, blooming rhododendrons in the lower gorge, and longer daylight hours, though snow cover on French Pass and Dhampus Pass is generally higher.'
  },
  {
    category: 'general',
    q: 'What is the group size and guide-to-client ratio?',
    a: 'We keep group departures small with a strict maximum of 10 trekkers to preserve safety and environmental standards. For groups of 4 or more, we deploy a licensed Lead Mountain Guide, an Assistant Guide (Sherpa Sirdar), a dedicated Expedition Head Cook, kitchen crew, and sufficient porters (2 trekkers : 1 porter, plus dedicated camp gear porters).'
  },
  {
    category: 'general',
    q: 'Can solo travelers join a group departure?',
    a: 'Yes, solo travelers can join any of our guaranteed fixed group departures without paying single supplements for camping tents. During hotel stays in Kathmandu and Pokhara, single rooms are available on request for a modest supplemental fee. We also operate bespoke private departures for solo trekkers wanting an exclusive climbing team.'
  },

  // Category 2: Permits and Logistics
  {
    category: 'permits',
    q: 'Which permits are required for the Dhaulagiri Circuit Trek?',
    a: 'You require the Annapurna Conservation Area Project (ACAP) Entry Permit and the Trekkers Information Management System (TIMS) Card. While the route skirts the edge of Lower Mustang at Jomsom/Marpha, the standard Dhaulagiri Circuit does not enter the Restricted Upper Mustang zone, so no expensive restricted area permit ($500) is needed. All conservation permits and documentation are arranged by Namaste Hiking Trek before departure.'
  },
  {
    category: 'permits',
    q: 'What happens if the Jomsom to Pokhara flight is cancelled due to weather?',
    a: 'Jomsom flights operate early in the morning before strong midday thermal winds develop in the Kali Gandaki Gorge. In the event of mountain weather delays or cancellations, Namaste Hiking Trek immediately initiates our overland backup plan by arranging private 4WD Scorpio vehicles to transport the group via Beni and Kushma to Pokhara. Our 20-day itinerary features built-in buffer time on Days 18 and 19 to protect your international flight connections.'
  },
  {
    category: 'permits',
    q: 'What weight limit applies to luggage carried by porters?',
    a: 'Each trekker is allocated a maximum of 15 kg (33 lbs) of personal gear inside the water-resistant expedition duffel bag provided by Namaste Hiking Trek. You will carry your own daily daypack (5–7 kg) containing hydration bottles, warm down layers, waterproof jacket, camera, sun protection, and personal medication.'
  },
  {
    category: 'permits',
    q: 'How are communications and emergency contact handled in remote areas?',
    a: 'Cellular reception (NTC/Ncell) is available only up to Dobang in the Myagdi Valley and resumes upon descending to Marpha/Jomsom. For the 8 wilderness days between Choriban Khola and Yak Kharka, our expedition team carries a Garmin inReach satellite communicator and satellite phone for daily Kathmandu office check-ins and emergency search/rescue coordination.'
  },

  // Category 3: Accommodation and Food
  {
    category: 'accommodation',
    q: 'What type of accommodation is provided during the expedition?',
    a: 'The trip features a hybrid accommodation model: 3-Star boutique hotels in Kathmandu and Pokhara; basic family-run teahouses and lodges during the lower village approach (Beni, Babiyachaur, Dharapani, Muri, Boghara, Dobang, and Jomsom); and full expedition camping (The North Face VE-25 4-season alpine tents, foam sleeping mattresses, large dining tent with gas heater, and private toilet tent) for 8 nights from Choriban Khola through Hidden Valley to Yak Kharka.'
  },
  {
    category: 'accommodation',
    q: 'What are the camping facilities and toilet arrangements in high camps?',
    a: 'In high wilderness camps (Choriban Khola, Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, Hidden Valley, Yak Kharka), our crew pitches a dedicated kitchen tent, a spacious walk-in dining tent with table and folding chairs, and a private, eco-friendly pit toilet tent positioned away from natural water sources. Warm washing water is provided every morning and evening.'
  },
  {
    category: 'accommodation',
    q: 'What kind of food is served during the camping stages?',
    a: 'Our certified expedition cooks prepare fresh, hygienic, and calorie-dense meals 3 times daily. Breakfast includes porridge, muesli, eggs, hash browns, pancakes, toast, and hot drinks (tea, coffee, hot chocolate). Lunch and dinner include hot soups (garlic, noodle, lentil), traditional Dal Bhat with organic vegetables, pasta, fried noodles, momos, potatoes, and tinned fish/meat dishes, followed by fresh fruit desserts.'
  },
  {
    category: 'accommodation',
    q: 'Can dietary restrictions (vegetarian, vegan, gluten-free) be accommodated?',
    a: 'Yes, absolutely. Please inform us of any dietary requirements, food allergies, or medical dietary needs during booking. Our expedition kitchen staff is trained in preparing nutritious vegetarian, vegan, lactose-free, and gluten-free meals using separate cookware.'
  },

  // Category 4: Health and Safety
  {
    category: 'health',
    q: 'How does the itinerary prevent Acute Mountain Sickness (AMS)?',
    a: 'Our itinerary adheres strictly to Wilderness Medical Society high-altitude ascent guidelines. We incorporate two mandatory full acclimatization rest days: Day 11 at Italian Base Camp (3,660 m) and Day 14 at Dhaulagiri Base Camp (4,750 m). Daily sleeping elevation gains above 3,000 meters are capped below 550 meters. Guides conduct daily morning and evening pulse-oximeter blood oxygen saturation (SpO2) and heart-rate checks.'
  },
  {
    category: 'health',
    q: 'Should I take Diamox (Acetazolamide) during the trek?',
    a: 'Many high-altitude climbers carry Diamox (125mg or 250mg) as a preventive measure to accelerate respiratory acclimatization. We recommend consulting your personal physician or travel medicine specialist before departure. Our lead guide carries a comprehensive wilderness medical trauma kit, pulse oximeters, and emergency descent protocol.'
  },
  {
    category: 'health',
    q: 'What emergency protocols are in place if someone falls seriously ill?',
    a: 'If a trekker exhibits moderate-to-severe symptoms of Acute Mountain Sickness (AMS), High Altitude Pulmonary Edema (HAPE), or High Altitude Cerebral Edema (HACE), immediate descent to lower elevation is initiated accompanied by an assistant guide. For life-threatening emergencies, our team coordinates with our 24/7 Kathmandu operations desk via satellite communicator to dispatch emergency helicopter evacuation to a specialist hospital in Pokhara or Kathmandu.'
  },
  {
    category: 'health',
    q: 'Is emergency helicopter rescue insurance mandatory?',
    a: 'Yes, mandatory. You must have travel insurance that explicitly covers high-altitude mountain trekking and emergency helicopter search, evacuation, and medical hospitalization up to 6,000 meters (20,000 ft). Proof of policy with emergency hotline numbers must be submitted to our operations team during Day 2 preparation in Kathmandu.'
  },

  // Category 5: Passes & Equipment
  {
    category: 'equipment',
    q: 'Are crampons and ice axes required for French Pass and Dhampus Pass?',
    a: 'Technical mountaineering equipment (ropes, harnesses, ice axes) is not generally required for the standard hiking route under normal autumn conditions. However, lightweight microspikes or hiking crampons and trekking poles are mandatory because the Chhonbardan Glacier moraine and the north slope of French Pass (5,360 m) frequently harbor hard-packed snow, glacial ice, and loose scree.'
  },
  {
    category: 'equipment',
    q: 'What temperature rating should my sleeping bag have?',
    a: 'Your sleeping bag must have a verified comfort rating of -15°C to -20°C (0°F to -4°F). High camps such as Glacier Camp (4,200 m), Dhaulagiri Base Camp (4,750 m), and Hidden Valley (5,200 m) experience nighttime freezing temperatures drops between -10°C and -20°C. Quality down sleeping bags (-20°C) and down jackets are available for rent in Kathmandu through our operations team.'
  },
  {
    category: 'equipment',
    q: 'How cold does it get on the Dhaulagiri Circuit?',
    a: 'Temperatures vary significantly between the tropical lower Myagdi Valley (+22°C to +28°C during daytime) and the high glacial camps. At Dhaulagiri Base Camp and Hidden Valley, daytime temperatures typically hover between 0°C and +8°C in sunshine, plummeting to between -10°C and -20°C at night. Layered technical thermal clothing (merino wool base layers, fleece mid-layers, heavy down parka, windproof Gore-Tex shells) is essential.'
  },

  // Category 6: Payments & Extra Costs
  {
    category: 'payments',
    q: 'How do I secure my booking and what are the payment terms?',
    a: 'We require a 20% advance deposit per person to secure permits, domestic flight tickets, and guide reservations. The deposit can be paid via secure online credit card (Visa/Mastercard) or international bank wire transfer. The remaining 80% balance is payable upon arrival in Kathmandu via cash (USD, EUR, GBP, AUD, NPR) or credit card (with a standard 3.5% merchant processing surcharge).'
  },
  {
    category: 'payments',
    q: 'What is the tipping standard for the expedition guide, cook, and porters?',
    a: 'Tipping is a customary Himalayan mountain tradition to honor the dedication of your field crew. We recommend budgeting approximately 10% to 15% of your total trek cost ($150 to $200 USD per trekker), which is pooled and transparently distributed to the lead guide, assistant guides, expedition cook, kitchen helpers, and porters at your farewell celebration dinner in Jomsom or Pokhara.'
  },
  {
    category: 'payments',
    q: 'What extra personal expenses should I budget for during the trek?',
    a: 'During the 20-day journey, you should budget approximately $10 to $20 USD per day for personal expenses in lower lodges (hot showers, device battery charging, bottled water/soft drinks, snacks) and personal tips. Once entering the wilderness camping section from Day 9 through Day 16, all boiled drinking water and hot meals are fully provided at zero extra cost.'
  }
];

const categories = [
  { id: 'general', name: 'General Information', iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>' },
  { id: 'permits', name: 'Permits and Logistics', iconSvg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { id: 'accommodation', name: 'Accommodation & Food', iconSvg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
  { id: 'health', name: 'Health & Safety', iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>' },
  { id: 'equipment', name: 'Passes & Equipment', iconSvg: '<polygon points="12 2 2 22 22 22"/><polyline points="12 14 12 22"/>' },
  { id: 'payments', name: 'Payments & Extra Costs', iconSvg: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>' }
];

let sidebarBtnsHtml = '';
categories.forEach((cat, idx) => {
  const activeClass = idx === 0 ? ' active' : '';
  sidebarBtnsHtml += `
                <button type="button" class="faq-category-btn${activeClass}" data-category="${cat.id}">
                  <span class="faq-cat-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      ${cat.iconSvg}
                    </svg>
                  </span>
                  ${cat.name}
                </button>`;
});

let panelsHtml = '';
categories.forEach((cat, idx) => {
  const isFirst = idx === 0;
  const activeClass = isFirst ? ' active' : '';
  const displayStyle = isFirst ? '' : ' style="display: none;"';

  const catFaqs = faqsData.filter(f => f.category === cat.id);
  let itemsHtml = '';
  catFaqs.forEach(faq => {
    itemsHtml += `
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">${faq.q}</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${faq.a}
                    </div>
                  </div>`;
  });

  panelsHtml += `
                <!-- Category: ${cat.name} -->
                <div class="faq-category-content${activeClass}" id="faq-cat-${cat.id}"${displayStyle}>
${itemsHtml}
                </div>`;
});

const fileContent = `// Module 13: Section 11 - Frequently Asked Questions for Dhaulagiri Circuit Trek
// Upgraded to canonical two-column categorized layout matching Everest Base Camp and Manaslu Circuit treks
function getFaqsSection() {
  return \`
        <!-- Section 11: FAQs -->
        <section id="section-faqs" class="trek-detail-section">
          <h2 class="faq-section-accent-title">
            <span class="faq-accent-bar"></span>
            Frequently Asked Questions for Dhaulagiri Circuit Trek
          </h2>

          <div class="faq-layout-container">
            <!-- Left Sidebar Category Navigation -->
            <div class="faq-sidebar-card">
              <div class="faq-category-nav">` + sidebarBtnsHtml + `
              </div>

              <!-- Quick Assistance Contact Card -->
              <div class="faq-support-card" style="margin-top: 20px; padding: 18px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                <span style="font-weight: 700; color: var(--color-primary-navy); font-size: 0.92rem; display: block; margin-bottom: 6px;">Have More Questions?</span>
                <p style="font-size: 0.85rem; color: #64748b; line-height: 1.5; margin-bottom: 12px;">Our high-altitude expedition specialists are available 24/7 to assist with gear advice and custom departure planning.</p>
                <a href="https://wa.me/9779800000000" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 700; color: #008060; text-decoration: none;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>

            <!-- Right FAQ Content Panel -->
            <div class="faq-main-panel">
              <!-- Header Bar -->
              <div class="faq-panel-header">
                <div class="faq-active-category-title" id="faq-current-category-title">General Information</div>
                <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
              </div>` + panelsHtml + `
            </div>
          </div>
        </section>
  \`;
}

module.exports = { getFaqsSection };
`;

fs.writeFileSync('scratch/dhaulagiri_builder/mod13_faqs.js', fileContent, 'utf8');
console.log('Successfully generated scratch/dhaulagiri_builder/mod13_faqs.js');
