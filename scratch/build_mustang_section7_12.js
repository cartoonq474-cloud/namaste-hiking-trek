const fs = require('fs');

const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

const s7Start = html.indexOf('<section id="section-altitude-profile"');
// Look for where the main content and sidebar ends before the modal
const modalIndex = html.indexOf('<!-- Inquiry Modal -->');

if (s7Start === -1 || modalIndex === -1) {
  console.error('Could not locate Section 7 or Inquiry Modal bounds!');
  process.exit(1);
}

// 1. Build Section 7: Altitude Profile
const newSection7 = `<section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile: Upper Mustang Trek (17 Days)</h2>
              <div style="width: 48px; height: 4px; background: #008060; border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
                Interactive elevation chart displaying the 17-day progression from Kathmandu and Pokhara up through the Kali Gandaki valley to Lo Manthang (3,840 m) and pass crossings around 4,010 m. Switch units below to convert between meters (m) and feet (ft).
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="mustang"></div>
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route & Acclimatization Progression</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              The trekking journey commences following a 25-minute flight from Pokhara to Jomsom (2,720 m), entering the restricted Upper Mustang corridor at historic Kagbeni (2,743 m). The path follows the Kali Gandaki valley northward through Chele (3,050 m), Gheling (3,570 m), and Charang (3,630 m), steadily climbing to the ancient walled capital of Lo Manthang (3,840 m). The return leg follows a diverse eastern circuit via the dramatic red cliffs of Drakmar (3,810 m), Sangboche (3,800 m), Chhusang (2,980 m), and the revered pilgrimage sanctuary of Muktinath (3,710 m), before concluding back in Jomsom.
            </p>
          </section>`;

// 2. Build Section 8: Weather
const newSection8 = `<section id="section-weather" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Weather & Climate: The Trans-Himalayan Rain Shadow</h2>
              <div style="width: 48px; height: 4px; background: #008060; border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin-bottom: 24px;">
              Sheltered behind the 8,000-meter peaks of Dhaulagiri and Annapurna, Upper Mustang receives less than 200 mm of annual rainfall. Daytime trekking conditions remain exceptionally clear and dry even during the summer monsoon (June–August). Toggle between daily variation and monthly averages below.
            </p>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <div id="weather-chart-wrapper" data-trek-key="mustang"></div>
            </div>
          </section>`;

// 3. Build Section 9: Map
const newSection9 = `<section id="section-map" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Upper Mustang Trek Route Map</h2>
              <div style="width: 48px; height: 4px; background: #008060; border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="position: relative; background: white; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 35px;">
              <img src="/images/treks/upper-mustang/upper-mustang-route-map.jpg" alt="Upper Mustang Trek Route Map" style="display: block; width: 100%; height: auto; border-radius: var(--radius-md);">
              <a href="/images/treks/upper-mustang/upper-mustang-route-map.jpg" target="_blank" style="position: absolute; bottom: 20px; right: 20px; display: inline-flex; align-items: center; background: #ffffff; color: var(--color-neutral-900); font-weight: 700; font-size: 0.82rem; padding: 8px 18px; border-radius: 30px; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.2s ease;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                View High-Res Map
              </a>
            </div>
          </section>`;

// 4. Build Section 10: Booking info
const newSection10 = `<section id="section-booking" class="trek-detail-section">
            <h2 class="trek-section-title">Book the Upper Mustang Trek</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
              Namaste Hiking Trek offers scheduled group departures with guaranteed departures for groups of 2 or more, as well as customized private itineraries tailored to your holiday schedule and pacing needs.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7;">
              Use the interactive <strong>Booking Widget</strong> on the right to review group discount tiers. When you are ready, click <strong>Book Now</strong> or <strong>Make an Enquiry</strong> to receive your itemized booking voucher, permit processing timeline, and packing checklist from our Kathmandu headquarters.
            </p>
          </section>`;

// 5. Build Section 11: Reviews (Platform Reviews)
// Keep the beautiful platform review styling from before, updating any EBC mention to Upper Mustang
let existingS11 = '';
const s11Idx = html.indexOf('<section id="section-reviews"');
const s12Idx = html.indexOf('<section id="section-faqs"');
if (s11Idx !== -1 && s12Idx !== -1) {
  existingS11 = html.substring(s11Idx, s12Idx);
  // Replace any EBC strings inside reviews with Upper Mustang
  existingS11 = existingS11.replace(/Everest Base Camp/g, 'Upper Mustang');
  existingS11 = existingS11.replace(/EBC/g, 'Upper Mustang');
  existingS11 = existingS11.replace(/Lukla/g, 'Jomsom');
}

// 6. Build Section 12: 25 Authentic Upper Mustang FAQs across 5 Tabs
const faqs = [
  // Category 1: general (5 items)
  {
    category: 'general',
    q: 'When is the best time to trek to Upper Mustang?',
    a: 'Upper Mustang is unique because it lies in the trans-Himalayan rain shadow of Annapurna and Dhaulagiri, receiving less than 200 mm of annual rainfall. This makes Summer Monsoon (June, July, August) one of the best times to visit, with bright blue skies, warm days (18°C–24°C), and lush green oasis crops. Autumn (September to November) offers crystal-clear mountain views and crisp weather, while Spring (March to May) brings pleasant trekking temperatures and the vibrant Tiji Festival in Lo Manthang.'
  },
  {
    category: 'general',
    q: 'How long does the Upper Mustang Trek take?',
    a: 'Our standard Upper Mustang package is 17 calendar days from arrival in Kathmandu to final international departure. This incorporates 11 active days on the trail, 1 scenic round-trip flight between Pokhara and Jomsom, 1 dedicated exploration day around Lo Manthang and the Chhoser sky caves, and 5 city days (3 nights in Kathmandu and 2 nights in Pokhara) for permit issuance, sightseeing, and overland transit.'
  },
  {
    category: 'general',
    q: 'What makes Upper Mustang distinct from other Himalayan treks?',
    a: 'Unlike the lush rhododendron forests and glacial moraines of the Annapurna or Everest regions, Upper Mustang features a dramatic arid high-desert landscape reminiscent of the Tibetan plateau. It is home to 2,500-year-old cliffside sky caves, the 14th-century medieval walled capital of Lo Manthang, preserved Sakya and Nyingma Buddhist monasteries, and deep multi-colored canyons formed by wind and the Kali Gandaki River.'
  },
  {
    category: 'general',
    q: 'What is the highest elevation reached on the 17-day trek?',
    a: 'The highest overnight destination is Lo Manthang at 3,840 m (12,598 ft), where you spend two consecutive nights. During daylight hiking, you will cross high mountain passes including Nyi La Pass (4,010 m / 13,156 ft) and Gyu La Pass (4,077 m / 13,376 ft) above Muktinath. Because all sleeping elevations remain below 3,900 m, the risk of severe altitude sickness is considerably lower than on treks like EBC or the Annapurna Circuit.'
  },
  {
    category: 'general',
    q: 'Is Upper Mustang suitable for active beginners?',
    a: 'Yes. For physically active hikers with good cardiovascular endurance, Upper Mustang is one of the most accessible multi-week Himalayan journeys. The trails consist of well-trodden packed dirt, stone paths, and gravel riverbeds without technical rock climbing or glacier travel. Consistent hiking practice, comfortable broken-in boots, and trekking poles are recommended.'
  },

  // Category 2: permits (5 items)
  {
    category: 'permits',
    q: 'What permits are required for Upper Mustang, and what do they cost?',
    a: 'Two official government permits are required: the Restricted Area Permit (RAP), which costs USD 500 per person for the first 10-day block within the restricted zone (north of Kagbeni), plus USD 50 per additional day; and the Annapurna Conservation Area Project (ACAP) permit (NPR 3,000 / approx. USD 25). Both permits are fully included in our 17-day package and processed by Namaste Hiking Trek in Kathmandu.'
  },
  {
    category: 'permits',
    q: 'Can I trek Upper Mustang independently without a licensed guide?',
    a: 'No. Under Nepal Department of Immigration regulations, independent solo trekking is strictly illegal in Upper Mustang. Trekkers must travel with a registered government-licensed mountain guide and book through an authorized Nepalese trekking agency. There must also be a minimum of two registered trekkers per permit application.'
  },
  {
    category: 'permits',
    q: 'I am a solo traveler. Can I still book the Upper Mustang Trek?',
    a: 'Yes! While government immigration regulations require at least two names to issue a Restricted Area Permit, Namaste Hiking Trek routinely matches solo travelers with other trekkers on our scheduled group departures. If you prefer a private trek, we can pair your permit with another group permit application to fulfill legal requirements.'
  },
  {
    category: 'permits',
    q: 'How do flights between Pokhara and Jomsom operate?',
    a: 'Scheduled domestic flights operate early in the morning between 6:15 AM and 9:30 AM using 19-seat STOL aircraft (Twin Otters or Dorniers). The flight takes approximately 20–25 minutes, threading between Annapurna I (8,091 m) and Dhaulagiri (8,167 m). Afternoon flights do not operate due to high thermal winds funneling up the Kali Gandaki canyon.'
  },
  {
    category: 'permits',
    q: 'What happens if Jomsom flights are delayed due to mountain weather?',
    a: 'Mountain aviation relies on visual flight rules (VFR). In the event of morning fog or unexpected adverse weather, flights are placed on standby. If cancellations persist, our operations team immediately arranges private 4WD rugged jeeps via the scenic Beni-Jomsom highway, ensuring you reach Pokhara safely without disrupting international flights.'
  },

  // Category 3: accommodation (5 items)
  {
    category: 'accommodation',
    q: 'What are the teahouses and lodges like in Upper Mustang?',
    a: 'Accommodations in Upper Mustang are traditional Tibetan-style mountain lodges built from local whitewashed stone, mud-brick, and timber. Rooms feature wooden twin beds with clean foam mattresses, pillows, and warm blankets. Dining rooms are cozy and heated in the evenings by central stoves burning dried yak dung or wood.'
  },
  {
    category: 'accommodation',
    q: 'Are private rooms and hot showers available?',
    a: 'Yes. In larger settlements like Kagbeni, Charang, and Lo Manthang, lodges have upgraded significantly in recent years, offering rooms with attached Western flush toilets and solar-heated showers. In smaller hamlets like Chele and Drakmar, facilities are more basic with shared clean toilets and hot water available in buckets for a nominal fee ($2–$3).'
  },
  {
    category: 'accommodation',
    q: 'What types of meals are provided during the trek?',
    a: 'All meals during the trail portion are included in your package. Menus combine hearty Nepalese Dal Bhat (steamed rice, spiced lentil soup, seasonal vegetable curry, pickles) with Tibetan dishes like vegetable momos, thukpa noodle soup, fresh Tibetan flatbread, tsampa porridge, and Western options like pasta, fried rice, porridge, and eggs.'
  },
  {
    category: 'accommodation',
    q: 'How do I obtain safe drinking water along the route?',
    a: 'To protect Mustang’s fragile ecosystem, single-use plastic mineral water bottles are strongly discouraged. You should bring two reusable 1-litre water bottles (or a hydration bladder). Lodges provide boiled filtered drinking water for a small fee, or you can use water purification tablets or a SteriPEN UV device.'
  },
  {
    category: 'accommodation',
    q: 'Is electricity and Wi-Fi available in Upper Mustang?',
    a: 'Most villages now have solar power or micro-hydro electricity. You can recharge mobile phones, camera batteries, and power banks in lodge dining areas (often for a nominal fee of NPR 200–400 per charge). Wi-Fi is available in many lodges up to Lo Manthang via local Everest Link or 4G mobile data (NTC/Ncell), though speeds can be variable.'
  },

  // Category 4: health (5 items)
  {
    category: 'health',
    q: 'How severe is altitude sickness on the Upper Mustang Trek?',
    a: 'Because the maximum sleeping altitude is 3,840 m (Lo Manthang), serious Acute Mountain Sickness (AMS) is much less frequent than on high-pass treks like Thorong La (5,416 m) or Kala Patthar (5,550 m). However, mild symptoms like mild headaches or shortness of breath on pass ascents can occur. Our guides check your blood oxygen saturation daily with a pulse oximeter.'
  },
  {
    category: 'health',
    q: 'What medical training and equipment does the guide carry?',
    a: 'All Namaste Hiking Trek leaders are certified in Wilderness First Aid and High-Altitude Medicine. They carry a comprehensive first aid kit containing altitude medication (Diamox/Acetazolamide), oral rehydration salts, pain relievers, antiseptics, and pulse oximeters to assess blood oxygen and pulse rates every morning and evening.'
  },
  {
    category: 'health',
    q: 'How does emergency medical evacuation work in Upper Mustang?',
    a: 'In the rare case of a severe medical emergency or injury, our guide coordinates with our Kathmandu operations office to dispatch an emergency rescue helicopter. Evacuation flights operate from village helipads directly to international medical facilities in Pokhara or Kathmandu. Your travel insurance must explicitly cover emergency medical helicopter evacuation up to 4,200 m.'
  },
  {
    category: 'health',
    q: 'How should I protect against Mustang’s wind and dust?',
    a: 'The Kali Gandaki valley experiences strong, dry headwinds every afternoon between 11:00 AM and 3:00 PM. A breathable neck gaiter (buff) or dust mask is mandatory to protect your throat and lungs from fine silt dust. High-protection UV sunglasses (Category 3 or 4) with side shields and SPF 50+ sunscreen are also vital in this high-altitude desert environment.'
  },
  {
    category: 'health',
    q: 'Do I need special vaccinations before visiting Nepal?',
    a: 'Standard travel vaccinations are recommended: Tetanus, Hepatitis A, Typhoid, and routine childhood immunizations. Malaria is not present in Kathmandu, Pokhara, or the high mountains of Upper Mustang. Consult your local travel clinic 6 to 8 weeks before departure.'
  },

  // Category 5: payments (5 items)
  {
    category: 'payments',
    q: 'How much personal spending money should I bring in cash?',
    a: 'We recommend carrying approximately USD 250 to USD 350 equivalent in Nepalese Rupees (NPR 30,000 to NPR 45,000) in cash. This covers personal expenses not included in the package: hot showers, device recharging, hot & cold drinks, Wi-Fi cards, snacks, and tips for your guide and porters. There are no working ATMs beyond Jomsom.'
  },
  {
    category: 'payments',
    q: 'What is the deposit and payment schedule?',
    a: 'To secure your booking and initiate permit processing with the Department of Immigration, we require a 20% advance deposit via credit card or wire transfer. The remaining 80% balance is payable upon your arrival in Kathmandu during our pre-trek briefing, in cash (USD, EUR, GBP, NPR) or by credit card.'
  },
  {
    category: 'payments',
    q: 'What is the tipping custom for the guide and porter?',
    a: 'Tipping is customary in Nepal and represents a heartfelt expression of thanks for exceptional service and care. As a general benchmark, groups tip approximately USD 10 to USD 15 per day for the lead guide, and USD 8 to USD 10 per day for the porter (shared among 2 trekkers). Gratuities are presented on the final trekking evening in Jomsom or Kathmandu.'
  },
  {
    category: 'payments',
    q: 'Are luggage transfers and luggage storage included?',
    a: 'Yes. Excess city clothes, hard suitcases, and non-trekking gear can be securely stored free of charge at our hotel in Kathmandu or Pokhara until your return. During the trek, our porter carries your main duffel bag (up to 10–12 kg per trekker), while you carry a light daypack with your essentials.'
  },
  {
    category: 'payments',
    q: 'What is your cancellation and refund policy?',
    a: 'If you need to cancel your trek due to unforeseen personal emergencies, we offer flexible rescheduling options for up to 12 months. Any non-recoverable government permit fees already issued (such as the USD 500 RAP permit) cannot be refunded once stamped by the Department of Immigration, while remaining services can be credited toward future bookings.'
  }
];

// Build FAQ HTML categorized by tab
let faqItemsHtml = '';
faqs.forEach(f => {
  const isHidden = f.category !== 'general' ? ' style="display: none;"' : '';
  faqItemsHtml += `
                  <div class="faq-item" data-category="${f.category}"${isHidden}>
                    <div class="faq-item-question">
                      <span>${f.q}</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${f.a}
                    </div>
                  </div>
`;
});

const newSection12 = `<section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions: Upper Mustang Trek (17 Days)
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  <button type="button" class="faq-category-btn active" data-category="general">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    General Information
                  </button>
                  <button type="button" class="faq-category-btn" data-category="permits">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </span>
                    Permits & Logistics
                  </button>
                  <button type="button" class="faq-category-btn" data-category="accommodation">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Accommodation & Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    Health & Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </span>
                    Payments & Pricing
                  </button>
                </div>
              </div>

              <!-- Right FAQ Content List (25 Questions) -->
              <div class="faq-accordion-container">
                <div class="faq-items-wrapper">
${faqItemsHtml}
                </div>
              </div>
            </div>
          </section>`;

// 7. Build Sticky Booking Sidebar Column
const newSidebar = `        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card">
              
              <!-- Top Right Restricted Trek Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #008060; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(0, 128, 96, 0.3);">
                RESTRICTED REGION
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,850</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #008060; font-weight: 600; text-decoration: underline; margin-left: 4px;">17 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,950 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,899 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #008060;">$1,850 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Upper Mustang Trek (17 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Upper Mustang Trek (17 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>17 Days Classic Lo Manthang Circuit</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>USD 500 Restricted Permit Included</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Round-Trip Pokhara–Jomsom Flights</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>3-Star City Hotels & Mountain Lodges</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Guaranteed Departures (Min 2 Trekkers)</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <!-- Phone Call Button -->
                  <a href="tel:+9779800000000" aria-label="Call Us" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #CBD5E1; background: #FFFFFF; display: flex; align-items: center; justify-content: center; color: #0F172A; text-decoration: none; transition: all 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <!-- WhatsApp Button -->
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" aria-label="WhatsApp Us" style="width: 44px; height: 44px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>`;

// Combine middle sections
const newMiddleBlock = `${newSection7}

          <!-- Section 8: Weather & Temperatures -->
          ${newSection8}

          <!-- Section 9: Upper Mustang Trek Map -->
          ${newSection9}

          <!-- Section 10: Booking Calculator Info -->
          ${newSection10}

          <!-- Section 11: Platform Reviews -->
          ${existingS11}

          <!-- Section 12: Frequently Asked Questions -->
          ${newSection12}

        </div>

${newSidebar}

      </div>
    </section>
  </main>`;

const updatedHtml = html.substring(0, s7Start) + newMiddleBlock + '\n\n  ' + html.substring(modalIndex);
fs.writeFileSync(targetPath, updatedHtml, 'utf8');
console.log('Successfully updated Sections 7-12, Sticky Sidebar, and cleaned Main Grid Bounds!');
