const fs = require('fs');
const path = require('path');
const { projectRoot, getHeaderNav, getFooter } = require('./guide_helpers');

// Helper to generate shared head tags
function getHead(title, description, canonicalUrl, relPrefix) {
  return `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/png" href="${relPrefix}images/logo.png">
  <link rel="stylesheet" href="${relPrefix}index.css?v=30">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://namastehikingtrek.com/images/logo.png">
</head>
`;
}

// -------------------------------------------------------------
// 1. NEPAL TRAVEL GUIDE (HUB)
// -------------------------------------------------------------
function renderTravelGuideHub(relPrefix) {
  const canonical = `https://namastehikingtrek.com/nepal-travel-guide/`;
  const title = "Nepal Travel Guide 2026: Complete Himalayan Trekking Handbook — Namaste Hiking Trek";
  const desc = "Essential Nepal Travel Guide for trekkers. Everything on Nepal tourist visa on arrival, packing checklists, altitude sickness AMS safety, heli insurance, seasons, currency, and local customs.";

  return `<!DOCTYPE html>
<html lang="en">
${getHead(title, desc, canonical, relPrefix)}
<body>
  ${getHeaderNav(relPrefix, 'travel-guide')}

  <main>
    <!-- Breadcrumb -->
    <div style="background: #F1F5F9; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 0.88rem;">
      <div class="container">
        <a href="${relPrefix}index.html" style="color: #10B981; text-decoration: none; font-weight: 600;">Home</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <span style="color: #475569; font-weight: 500;">Travel Guide</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="guide-hero-section">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 10px; display: inline-block;">Official 2026 Trekker Handbook</span>
        <h1 class="guide-hero-title">The Complete Nepal Travel Guide</h1>
        <p class="guide-hero-desc">
          Your field-tested handbook for Himalayan trekking. Everything you need to know about visas, gear essentials, emergency helicopter insurance, mountain health, currency, and trail etiquette.
        </p>
        <div class="guide-hero-meta">
          <span class="guide-meta-chip"><span>📅</span> Updated for 2026 Season</span>
          <span class="guide-meta-chip"><span>🏔️</span> High-Altitude Verified</span>
          <span class="guide-meta-chip"><span>🇳🇵</span> Kathmandu Operations Tested</span>
        </div>
      </div>
    </section>

    <!-- Essential 4 Pillars Section (Bento Grid) -->
    <section class="section-padding" style="background: #F8FAFC;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 32px;">
          <span class="badge badge-alpine" style="margin-bottom: 8px; display: inline-block;">Core Trip Preparation</span>
          <h2 style="font-size: 2.2rem; color: #0F172A; font-weight: 800;">4 Pillars of Nepal Trekking Preparation</h2>
          <p style="color: #64748B; max-width: 650px; margin: 8px auto 0 auto; font-size: 1rem;">
            Explore our comprehensive sub-guides designed specifically for Himalayan travelers.
          </p>
        </div>

        <div class="guide-hub-grid">
          <!-- Card 1: Visa -->
          <a href="${relPrefix}nepal-visa/" class="guide-card">
            <div class="guide-card-icon-wrap">🛂</div>
            <h3 class="guide-card-title">Nepal Tourist Visa</h3>
            <p class="guide-card-desc">
              15, 30, and 90-day on-arrival visa fees ($30, $50, $125), required documents, airport electronic kiosk steps, and Kathmandu extension guidelines.
            </p>
            <div class="guide-card-link">Read Visa Guide & Fees <span>→</span></div>
          </a>

          <!-- Card 2: Gear Checklist -->
          <a href="${relPrefix}equipment-checklist/" class="guide-card">
            <div class="guide-card-icon-wrap">🎒</div>
            <h3 class="guide-card-title">Equipment Checklist</h3>
            <p class="guide-card-desc">
              Interactive 4-layer clothing system, broken-in trekking boots, down jackets, sleeping bags, packs, and gear rental rates in Thamel, Kathmandu.
            </p>
            <div class="guide-card-link">View Gear Checklist <span>→</span></div>
          </a>

          <!-- Card 3: Insurance -->
          <a href="${relPrefix}travel-insurance/" class="guide-card">
            <div class="guide-card-icon-wrap">🚁</div>
            <h3 class="guide-card-title">Travel & Heli Insurance</h3>
            <p class="guide-card-desc">
              Mandatory high-altitude coverage: 6,000m emergency helicopter evacuation, hospital admission guarantees, recommended insurers, and claim protocols.
            </p>
            <div class="guide-card-link">View Insurance Guide <span>→</span></div>
          </a>

          <!-- Card 4: Medical Kit -->
          <a href="${relPrefix}recommended-medical-kit/" class="guide-card">
            <div class="guide-card-icon-wrap">💊</div>
            <h3 class="guide-card-title">Recommended Medical Kit</h3>
            <p class="guide-card-desc">
              High-altitude pharmacy advice: Diamox (Acetazolamide) dosage, AMS prevention, blister care, pain relief, stomach remedies, and water purification.
            </p>
            <div class="guide-card-link">View Medical Kit Guide <span>→</span></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Detailed Guide Content -->
    <section class="section-padding">
      <div class="container">
        <div class="guide-layout-split">
          
          <!-- Main Content Body -->
          <div class="guide-body-content">
            
            <!-- Section: Best Seasons -->
            <div id="seasons" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 16px;">
                When to Trek in Nepal: Seasonal Breakdown
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                Nepal's Himalayan climate varies dramatically with elevation and seasons. Choosing the right window ensures clear skies, safe high-pass crossings, and unforgettable mountain vistas.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px;">
                  <span style="font-size: 0.85rem; font-weight: 800; color: #10B981; text-transform: uppercase;">Peak Season</span>
                  <h3 style="font-size: 1.25rem; color: #0F172A; margin: 6px 0 10px 0;">Autumn (Sept — Nov)</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6;">
                    The most popular trekking window in Nepal. Post-monsoon air is crisp and crystal-clear, offering the finest mountain views, stable high-pressure systems, and pleasant daytime temperatures.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px;">
                  <span style="font-size: 0.85rem; font-weight: 800; color: #2C82C9; text-transform: uppercase;">Second Peak Season</span>
                  <h3 style="font-size: 1.25rem; color: #0F172A; margin: 6px 0 10px 0;">Spring (March — May)</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6;">
                    Hillsides blaze with blooming red and pink rhododendrons. Days grow warmer and longer, making it ideal for crossing high passes like Thorong La (5,416m) and Cho La (5,420m).
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px;">
                  <span style="font-size: 0.85rem; font-weight: 800; color: #8B5CF6; text-transform: uppercase;">Rainshadow Treks</span>
                  <h3 style="font-size: 1.25rem; color: #0F172A; margin: 6px 0 10px 0;">Monsoon (June — Aug)</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6;">
                    Lower valleys experience rainfall and leeches, but trans-Himalayan rainshadow regions like <a href="${relPrefix}trek/upper-mustang-trek/" style="color: #10B981; font-weight: 600;">Upper Mustang</a> and <a href="${relPrefix}dolpo-region-treks/" style="color: #10B981; font-weight: 600;">Upper Dolpo</a> remain completely dry, sunny, and culturally vibrant!
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 22px;">
                  <span style="font-size: 0.85rem; font-weight: 800; color: #64748B; text-transform: uppercase;">Quiet & Crisp</span>
                  <h3 style="font-size: 1.25rem; color: #0F172A; margin: 6px 0 10px 0;">Winter (Dec — Feb)</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6;">
                    Crisp blue skies and empty trails with virtually no crowds. Extremely cold at high lodges (-15°C to -20°C at night), but fantastic for lower panoramic treks like Poon Hill and Tamang Heritage.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section: Altitude Sickness (AMS) Protocol -->
            <div id="ams" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 16px;">
                High-Altitude Health: AMS Golden Rules
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                Acute Mountain Sickness (AMS) can affect anyone above 2,500m (8,200ft) regardless of age, gender, or marathon fitness. Acclimatization is a biological process that cannot be rushed.
              </p>

              <div class="guide-callout guide-callout-warning">
                <div class="guide-callout-icon">⚠️</div>
                <div>
                  <h4 style="font-size: 1.1rem; color: #92400E; margin-bottom: 4px; font-weight: 800;">The Golden Altitude Rule</h4>
                  <p style="font-size: 0.95rem; color: #78350F; margin: 0; line-height: 1.55;">
                    Never ascend with symptoms of altitude sickness. If a trekker has a persistent headache, nausea, or dizziness, they must rest. If symptoms worsen or fail to improve within 24 hours, immediate descent is mandatory.
                  </p>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 20px;">
                <div style="display: flex; gap: 14px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <span style="font-size: 1.4rem;">💧</span>
                  <div>
                    <strong style="color: #0F172A; font-size: 1.05rem;">Hydrate Aggressively:</strong>
                    <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">Drink 3 to 4 liters of clean, treated water or warm garlic/ginger tea daily. Dehydration mimics and exacerbates AMS symptoms.</p>
                  </div>
                </div>

                <div style="display: flex; gap: 14px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <span style="font-size: 1.4rem;">🚶‍♂️</span>
                  <div>
                    <strong style="color: #0F172A; font-size: 1.05rem;">Pace Yourself — "Bistari, Bistari":</strong>
                    <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">In Nepali, "Bistari" means slowly. Maintain an easy conversational rhythm where you never gasp for breath. Slow and steady wins the mountain.</p>
                  </div>
                </div>

                <div style="display: flex; gap: 14px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <span style="font-size: 1.4rem;">🛌</span>
                  <div>
                    <strong style="color: #0F172A; font-size: 1.05rem;">Climb High, Sleep Low:</strong>
                    <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">All Namaste Hiking Trek itineraries schedule afternoon acclimatization walks to higher viewpoints before returning down to sleep, stimulating oxygen red-blood cell production.</p>
                  </div>
                </div>

                <div style="display: flex; gap: 14px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <span style="font-size: 1.4rem;">🩺</span>
                  <div>
                    <strong style="color: #0F172A; font-size: 1.05rem;">Daily Pulse Oximeter Monitoring:</strong>
                    <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">Our lead guides check your blood oxygen saturation (SpO2) and resting heart rate every morning and evening to detect AMS signs before they become clinical emergencies.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section: Money, ATMs & Currency -->
            <div id="currency" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 16px;">
                Money, ATMs, Currency Exchange & Trail Expenses
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                The official currency is the <strong>Nepalese Rupee (NPR)</strong>. While your guided package covers your main meals and lodge beds, you will need cash on trail for personal extras.
              </p>

              <div class="guide-data-table-wrap">
                <table class="guide-data-table">
                  <thead>
                    <tr>
                      <th>Expense Item</th>
                      <th>Typical Cost (NPR)</th>
                      <th>Approx. USD ($)</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Hot Shower (Gas/Solar)</strong></td>
                      <td>NPR 400 – 800</td>
                      <td>$3 – $6</td>
                      <td>Price increases with altitude and firewood scarcity</td>
                    </tr>
                    <tr>
                      <td><strong>Device / Phone Charging</strong></td>
                      <td>NPR 300 – 600</td>
                      <td>$2.50 – $4.50</td>
                      <td>Full phone or power bank charge in dining hall</td>
                    </tr>
                    <tr>
                      <td><strong>Wi-Fi Card (24 Hours)</strong></td>
                      <td>NPR 600 – 1,000</td>
                      <td>$4.50 – $7.50</td>
                      <td>Everest Link or AirJaldi cards in teahouses</td>
                    </tr>
                    <tr>
                      <td><strong>Mineral / Boiled Water (1L)</strong></td>
                      <td>NPR 200 – 500</td>
                      <td>$1.50 – $3.80</td>
                      <td>We recommend water purification tablets/filters instead</td>
                    </tr>
                    <tr>
                      <td><strong>Snacks & Bakery Treats</strong></td>
                      <td>NPR 300 – 600</td>
                      <td>$2 – $5</td>
                      <td>Snickers, apple pie, Pringles in village bakeries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style="color: #475569; font-size: 0.95rem; line-height: 1.65;">
                💡 <strong>ATM Reality:</strong> Kathmandu and Pokhara have abundant ATMs (Nabil Bank, Himalayan Bank, Standard Chartered). Past Namche Bazaar or Besisahar, ATMs are either non-existent or frequently out of cash/electricity. <em>Always withdraw NPR 25,000 to 35,000 per person in Kathmandu before embarking on your trek.</em>
              </p>
            </div>

            <!-- Section: Etiquette & Local Customs -->
            <div id="etiquette" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 16px;">
                Local Customs, Cultural Etiquette & Trail Ethics
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                Nepal's mountain communities—Sherpa, Tamang, Gurung, Rai, and Thakali—are renowned for their hospitality, Buddhist traditions, and deep connection with sacred peaks.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 8px;">🙏 The Namaste Greeting</h4>
                  <p style="font-size: 0.9rem; color: #64748B; line-height: 1.6;">
                    Press your palms together at your chest and bow gently saying "Namaste" ("I bow to the divine in you"). It is the universal and most respectful greeting in Nepal.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 8px;">☸️ Walk Clockwise</h4>
                  <p style="font-size: 0.9rem; color: #64748B; line-height: 1.6;">
                    Always walk clockwise around Buddhist stupas, chortens, and mani stone walls (keeping the holy monument on your right hand side). Spin prayer wheels clockwise too!
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 8px;">📷 Photography Courtesy</h4>
                  <p style="font-size: 0.9rem; color: #64748B; line-height: 1.6;">
                    Always ask permission before taking portraits of locals, monks, or children. Never take photos inside sacred monastery shrines when forbidden.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: #0F172A; margin-bottom: 8px;">⛰️ Porter & Guide Tipping</h4>
                  <p style="font-size: 0.9rem; color: #64748B; line-height: 1.6;">
                    Tipping is customary in Nepal's trekking industry. As a guideline, budgeting 10% to 15% of your total trip cost pooled as a tip for your guide and porter team is standard practice.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section: Domestic Flights & Buffer Days -->
            <div id="flights" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 16px;">
                Domestic Flights & Mountain Weather Delays
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
                High-altitude airstrips such as Lukla (Tenzing-Hillary Airport for Everest) and Jomsom (Mustang) rely purely on Visual Flight Rules (VFR). If clouds, dense fog, or high crosswinds occur, flights are immediately held for passenger safety.
              </p>

              <div class="guide-callout guide-callout-info">
                <div class="guide-callout-icon">💡</div>
                <div>
                  <h4 style="font-size: 1.1rem; color: #1E40AF; margin-bottom: 4px; font-weight: 800;">Golden Rule for International Flights</h4>
                  <p style="font-size: 0.95rem; color: #1E3A8A; margin: 0; line-height: 1.55;">
                    Always schedule at least <strong>1 to 2 buffer days in Kathmandu</strong> at the end of your trek before your international flight home. This prevents missed flights in the rare event of weather-related mountain delays.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section: FAQ Accordion -->
            <div id="faqs" style="margin-bottom: 48px;">
              <h2 style="font-size: 1.9rem; color: #0F172A; font-weight: 800; margin-bottom: 24px;">
                Frequently Asked Travel Guide Questions
              </h2>

              <div class="region-faq-list">
                <div class="faq-accordion-item open active">
                  <button class="faq-accordion-header">
                    <span>Do I need to hire a licensed guide for trekking in Nepal?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes. Under Nepal Tourism Board regulations enacted in April 2023, solo/independent trekking without a government-licensed guide is restricted in national parks and conservation areas across Nepal. Booking with Namaste Hiking Trek ensures you have a certified, insured, and wilderness-first-aid trained local Sherpa or mountain guide.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Can I get a Nepal tourist visa on arrival at Kathmandu Airport?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes! Citizens of almost all countries (USA, UK, Canada, Australia, EU, Singapore, etc.) can easily obtain a visa on arrival at Tribhuvan International Airport (KTM). Fees are USD $30 for 15 days, $50 for 30 days, or $125 for 90 days. Read our full <a href="${relPrefix}nepal-visa/" style="color: #10B981; font-weight: 600;">Nepal Visa Guide</a> for exact arrival procedures.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>What is a typical daily routine while on the trek?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    A normal trekking day starts with breakfast around 7:00 AM, hitting the trail by 7:45 AM. You hike for 3 to 4 hours in the morning, stop at a scenic teahouse village for a hot cooked lunch, then walk another 2 to 3 hours in the afternoon. Evenings are spent in the cozy heated dining hall enjoying dinner, briefing with your lead guide, reading, or playing cards.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Can I charge my phone, camera, and power bank in teahouses?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes, teahouses offer device charging stations in the main dining hall for a modest fee (approx. NPR 300 to 600 depending on elevation). Because high-altitude cold temperatures drain lithium batteries faster, we strongly recommend bringing a 20,000mAh portable power bank.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>What happens if I get sick or injured in the mountains?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Your lead guide is trained in wilderness first aid and carries a medical kit with a pulse oximeter. For acute altitude sickness (HAPE/HACE) or serious injury, immediate emergency helicopter evacuation is dispatched via our 24/7 Kathmandu operations desk directly to CIWEC Hospital in Kathmandu. Valid emergency helicopter insurance up to 6,000m is strictly mandatory.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sticky Sidebar Navigation -->
          <aside>
            <div class="guide-sidebar-nav">
              <h3 class="guide-sidebar-title">Guide Table of Contents</h3>
              <ul class="guide-sidebar-links">
                <li><a href="#seasons">🏔️ Best Trekking Seasons</a></li>
                <li><a href="#ams">🩺 AMS & Altitude Safety</a></li>
                <li><a href="#currency">💵 Currency, ATMs & Budget</a></li>
                <li><a href="#etiquette">🙏 Local Customs & Etiquette</a></li>
                <li><a href="#flights">✈️ Domestic Flights & Delays</a></li>
                <li><a href="#faqs">❓ Frequently Asked Questions</a></li>
              </ul>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Explore Dedicated Guides</h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <a href="${relPrefix}nepal-visa/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none;">→ Nepal Tourist Visa Guide</a>
                  <a href="${relPrefix}equipment-checklist/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none;">→ Equipment Packing Checklist</a>
                  <a href="${relPrefix}travel-insurance/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none;">→ Heli & Travel Insurance</a>
                  <a href="${relPrefix}recommended-medical-kit/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none;">→ Recommended Medical Kit</a>
                </div>
              </div>

              <div style="margin-top: 24px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 12px; padding: 16px; text-align: center;">
                <h4 style="font-size: 0.95rem; color: #065F46; margin-bottom: 4px; font-weight: 800;">Have Specific Questions?</h4>
                <p style="font-size: 0.82rem; color: #047857; margin-bottom: 12px;">Talk directly with our Kathmandu expedition experts.</p>
                <button class="btn btn-primary open-inquiry-btn" style="width: 100%; font-size: 0.85rem; padding: 8px;">Ask an Expert</button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>

    <!-- Custom Plan Banner CTA -->
    <section style="background: linear-gradient(135deg, #071D36 0%, #0F172A 100%); color: white; padding: 60px 0; text-align: center;">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 12px; display: inline-block;">Himalayan Specialists</span>
        <h2 style="font-size: 2.3rem; color: #FFFFFF; font-weight: 900; margin-bottom: 12px;">Ready to Plan Your Himalayan Adventure?</h2>
        <p style="font-size: 1.1rem; color: #CBD5E1; max-width: 680px; margin: 0 auto 24px auto;">
          Contact our local team for tailor-made itineraries, visa clarifications, and gear recommendations.
        </p>
        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary open-inquiry-btn" style="padding: 14px 28px;">Talk to a Trek Planner ↗</button>
          <a href="${relPrefix}nepal-trekking-packages/" class="btn" style="background: rgba(255,255,255,0.12); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 700;">Explore All Treks</a>
        </div>
      </div>
    </section>
  </main>

  ${getFooter(relPrefix)}

  <script>
    // FAQ Accordion Handler
    document.querySelectorAll('.faq-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-accordion-item');
        if (item) item.classList.toggle('open');
      });
    });
  </script>
</body>
</html>
`;
}

// -------------------------------------------------------------
// 2. NEPAL VISA
// -------------------------------------------------------------
function renderVisaPage(relPrefix) {
  const canonical = `https://namastehikingtrek.com/nepal-visa/`;
  const title = "Nepal Tourist Visa on Arrival & Application Guide (2026 Updated) — Namaste Hiking Trek";
  const desc = "Complete 2026 guide for obtaining a Nepal Tourist Visa on Arrival at Kathmandu Airport (KTM). Official fee table ($30/$50/$125), required documents, electronic kiosk steps, and visa extension rules.";

  return `<!DOCTYPE html>
<html lang="en">
${getHead(title, desc, canonical, relPrefix)}
<body>
  ${getHeaderNav(relPrefix, 'visa')}

  <main>
    <!-- Breadcrumb -->
    <div style="background: #F1F5F9; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 0.88rem;">
      <div class="container">
        <a href="${relPrefix}index.html" style="color: #10B981; text-decoration: none; font-weight: 600;">Home</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <a href="${relPrefix}nepal-travel-guide/" style="color: #10B981; text-decoration: none; font-weight: 600;">Travel Guide</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <span style="color: #475569; font-weight: 500;">Nepal Visa</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="guide-hero-section">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 10px; display: inline-block;">Immigration & Entry Guidelines</span>
        <h1 class="guide-hero-title">Nepal Tourist Visa Guide (2026)</h1>
        <p class="guide-hero-desc">
          Everything international travelers need to know about obtaining a Nepal Tourist Visa on Arrival at Tribhuvan International Airport (KTM), online pre-registration, official fees, and visa extensions.
        </p>
        <div class="guide-hero-meta">
          <span class="guide-meta-chip"><span>🛂</span> On-Arrival Available</span>
          <span class="guide-meta-chip"><span>💵</span> Multiple Entry Standard</span>
          <span class="guide-meta-chip"><span>⚡</span> 15, 30 & 90 Days Options</span>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="section-padding">
      <div class="container">
        <div class="guide-layout-split">
          
          <div class="guide-body-content">

            <!-- Section 1: Official Fee Table -->
            <div id="fees" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Official Nepal Tourist Visa on Arrival Fees (2026)
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px;">
                The Department of Immigration of Nepal offers multiple-entry tourist visas on arrival for most foreign passport holders arriving by air at Tribhuvan International Airport (KTM) or designated land borders.
              </p>

              <div class="guide-data-table-wrap">
                <table class="guide-data-table">
                  <thead>
                    <tr>
                      <th>Visa Duration</th>
                      <th>Official Fee (USD)</th>
                      <th>Best Suited For</th>
                      <th>Privilege</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>15 Days Visa</strong></td>
                      <td><span style="color: #10B981; font-weight: 800; font-size: 1.15rem;">USD $30</span></td>
                      <td>Short treks (Langtang Valley, Poon Hill, Helambu) & city tours</td>
                      <td>Multiple Entry</td>
                    </tr>
                    <tr>
                      <td><strong>30 Days Visa</strong></td>
                      <td><span style="color: #10B981; font-weight: 800; font-size: 1.15rem;">USD $50</span></td>
                      <td>Classic treks (Everest Base Camp, Annapurna Circuit, Manaslu)</td>
                      <td>Multiple Entry</td>
                    </tr>
                    <tr>
                      <td><strong>90 Days Visa</strong></td>
                      <td><span style="color: #10B981; font-weight: 800; font-size: 1.15rem;">USD $125</span></td>
                      <td>Long expeditions (Kanchenjunga, Dolpo), combined treks & extended stays</td>
                      <td>Multiple Entry</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="guide-callout guide-callout-info">
                <div class="guide-callout-icon">💡</div>
                <div>
                  <h4 style="font-size: 1rem; color: #1E40AF; margin-bottom: 4px; font-weight: 800;">Currency Payment Advice</h4>
                  <p style="font-size: 0.92rem; color: #1E3A8A; margin: 0; line-height: 1.55;">
                    While major foreign currencies (EUR, GBP, AUD, CAD) and credit cards are accepted at the bank payment desk, <strong>crisp, unmarked US Dollar cash</strong> is universally preferred and guarantees the fastest queue clearance without card processing glitch delays.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 2: Step-by-Step Airport Kiosk Procedure -->
            <div id="airport-procedure" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Step-by-Step Arrival Procedure at Kathmandu Airport (KTM)
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 24px;">
                Arriving at Tribhuvan International Airport is straightforward when you know the 3 key stations inside the arrival hall:
              </p>

              <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; display: flex; gap: 18px;">
                  <div style="background: #10B981; color: white; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; flex-shrink: 0;">1</div>
                  <div>
                    <h3 style="font-size: 1.2rem; color: #0F172A; margin-bottom: 6px;">Fill the Electronic Visa Application</h3>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.6;">
                      <strong>Option A (Recommended):</strong> Pre-fill the online application form within 14 days of your departure date at the official Nepal Immigration portal: <a href="https://nepaliport.immigration.gov.np" target="_blank" rel="noopener" style="color: #10B981; font-weight: 600;">nepaliport.immigration.gov.np</a>. Print out the confirmation barcode slip.<br>
                      <strong>Option B:</strong> Use one of the touch-screen electronic kiosk terminals situated immediately inside the airport arrival hall upon exiting the aerobridge. The kiosk will scan your passport and take your digital photo.
                    </p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; display: flex; gap: 18px;">
                  <div style="background: #10B981; color: white; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; flex-shrink: 0;">2</div>
                  <div>
                    <h3 style="font-size: 1.2rem; color: #0F172A; margin-bottom: 6px;">Pay the Visa Fee at the Bank Counter</h3>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.6;">
                      Take your printed barcode slip and proceed to the <strong>Rastriya Banijya Bank</strong> payment counters located directly beside the kiosk area. Hand over your fee ($30, $50, or $125 USD) and receive your official payment receipt slip.
                    </p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; display: flex; gap: 18px;">
                  <div style="background: #10B981; color: white; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; flex-shrink: 0;">3</div>
                  <div>
                    <h3 style="font-size: 1.2rem; color: #0F172A; margin-bottom: 6px;">Immigration Officer Stamp & Exit</h3>
                    <p style="font-size: 0.94rem; color: #475569; line-height: 1.6;">
                      Proceed to the dedicated <em>"Visa on Arrival"</em> immigration desks. Hand the Immigration Officer your passport, the bank payment receipt, and your printed barcode slip. The officer will affix the visa sticker into your passport and stamp your entry date. You're ready to collect your baggage!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Required Documents -->
            <div id="requirements" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Mandatory Entry Documents Checklist
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 18px;">
                Ensure you have the following items ready in your carry-on luggage:
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 6px;">📘 6-Month Valid Passport</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Must have at least 6 months remaining validity from your date of arrival and at least 2 empty pages.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 6px;">🏨 Hotel Address in Kathmandu</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">You will need the name and district of your hotel in Kathmandu (e.g., Thamel, Kathmandu) for the immigration form.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 6px;">💵 Visa Fee in Cash (USD)</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Exact cash in crisp, unmarked US Dollars ($30, $50, or $125) avoids electronic card reader surcharges.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 6px;">✈️ Return / Onward Flight Ticket</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Immigration officials may occasionally ask for proof of outbound travel from Nepal.</p>
                </div>
              </div>
            </div>

            <!-- Section 4: Eligibility & Exceptions -->
            <div id="eligibility" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Nationalities & Visa Exemptions
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Almost all travelers can obtain a visa on arrival. Notable exceptions include:
              </p>

              <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0;">
                <li style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; font-size: 0.94rem; color: #334155;">
                  <strong>🇮🇳 Indian Nationals:</strong> Do not require a visa. Indian citizens entering Nepal by air must present either a valid Indian Passport or an official Election Commission Voter ID card.
                </li>
                <li style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; font-size: 0.94rem; color: #334155;">
                  <strong>🌏 SAARC Nationals:</strong> Citizens of SAARC member countries (Bhutan, Bangladesh, Sri Lanka, Maldives, Pakistan) receive a gratis (free of charge) 30-day visa on arrival once per calendar year.
                </li>
                <li style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; font-size: 0.94rem; color: #334155;">
                  <strong>⚠️ Advance Visa Required:</strong> Passports from Nigeria, Ghana, Zimbabwe, Swaziland, Cameroon, Somalia, Liberia, Ethiopia, Iraq, Palestine, Syria, and Afghanistan are not eligible for visa on arrival and must secure their visa through a Nepalese Embassy before travel.
                </li>
              </ul>
            </div>

            <!-- Section 5: Visa Extensions -->
            <div id="extension" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Extending Your Visa in Nepal
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Falling in love with the Himalayas and wanting to extend your stay? You can easily extend your tourist visa in Nepal:
              </p>

              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px;">
                  📍 <strong>Where:</strong> Department of Immigration in Kalikasthan, Kathmandu or Immigration Office in Pokhara.
                </p>
                <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px;">
                  💵 <strong>Cost:</strong> Minimum extension is <strong>15 days for USD $45</strong>. Additional days cost <strong>$3 USD per day</strong> thereafter.
                </p>
                <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                  ⏱️ <strong>Maximum Duration:</strong> Foreign tourists are permitted to stay a maximum of <strong>150 days</strong> per calendar year (Jan 1 to Dec 31).
                </p>
              </div>
            </div>

            <!-- FAQs -->
            <div id="faqs" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 20px;">
                Frequently Asked Visa Questions
              </h2>

              <div class="region-faq-list">
                <div class="faq-accordion-item open active">
                  <button class="faq-accordion-header">
                    <span>How far in advance can I fill out the online visa pre-application?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    The online application at nepaliport.immigration.gov.np remains active in the immigration database for 14 days from submission. We advise completing it within 3 to 7 days before your flight to Kathmandu.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Can I pay for my visa with a credit card at Kathmandu Airport?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes, Visa and Mastercard credit/debit cards are officially accepted at the Rastriya Banijya Bank counters. However, banking server interruptions and POS terminal timeouts occur frequently. Having exact cash in US Dollars or Euros ensures you never get stranded at the payment counter.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Can I leave and re-enter Nepal on the same tourist visa?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes! All tourist visas issued on arrival are multiple-entry by default, meaning you can take short trips to Bhutan, Tibet, or India and return to Nepal without paying for a brand-new visa, provided your original validity period has not expired.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <aside>
            <div class="guide-sidebar-nav">
              <h3 class="guide-sidebar-title">Visa Guide Sections</h3>
              <ul class="guide-sidebar-links">
                <li><a href="#fees">💵 2026 Visa Fees Table</a></li>
                <li><a href="#airport-procedure">✈️ KTM Airport Step-by-Step</a></li>
                <li><a href="#requirements">📋 Mandatory Documents</a></li>
                <li><a href="#eligibility">🌐 Eligible Nationalities</a></li>
                <li><a href="#extension">⏱️ Extending Your Visa</a></li>
                <li><a href="#faqs">❓ Visa FAQs</a></li>
              </ul>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Next Travel Guide</h4>
                <a href="${relPrefix}equipment-checklist/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block; margin-bottom: 6px;">→ Equipment Packing Checklist</a>
                <a href="${relPrefix}travel-insurance/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block;">→ Heli & Travel Insurance</a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </main>

  ${getFooter(relPrefix)}

  <script>
    document.querySelectorAll('.faq-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-accordion-item');
        if (item) item.classList.toggle('open');
      });
    });
  </script>
</body>
</html>
`;
}

// -------------------------------------------------------------
// 3. EQUIPMENT CHECKLIST (INTERACTIVE)
// -------------------------------------------------------------
function renderEquipmentPage(relPrefix) {
  const canonical = `https://namastehikingtrek.com/equipment-checklist/`;
  const title = "Comprehensive Nepal Trekking Equipment Checklist & Packing Guide — Namaste Hiking Trek";
  const desc = "Interactive gear checklist for trekking in Nepal. Complete 4-layer clothing system, boots, sleeping bags, packs, Thamel rental costs, and flight weight limits.";

  return `<!DOCTYPE html>
<html lang="en">
${getHead(title, desc, canonical, relPrefix)}
<body>
  ${getHeaderNav(relPrefix, 'equipment')}

  <main>
    <!-- Breadcrumb -->
    <div style="background: #F1F5F9; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 0.88rem;">
      <div class="container">
        <a href="${relPrefix}index.html" style="color: #10B981; text-decoration: none; font-weight: 600;">Home</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <a href="${relPrefix}nepal-travel-guide/" style="color: #10B981; text-decoration: none; font-weight: 600;">Travel Guide</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <span style="color: #475569; font-weight: 500;">Equipment Checklist</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="guide-hero-section">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 10px; display: inline-block;">Field-Tested Expedition Gear</span>
        <h1 class="guide-hero-title">Nepal Trekking Equipment Checklist</h1>
        <p class="guide-hero-desc">
          Interactive packing checklist curated by veteran Himalayan Sherpa guides. Tick items off as you pack, with expert advice on buying vs renting gear in Kathmandu.
        </p>
        <div class="guide-hero-meta">
          <span class="guide-meta-chip"><span>✅</span> Interactive Checklist</span>
          <span class="guide-meta-chip"><span>🧥</span> 4-Layer System</span>
          <span class="guide-meta-chip"><span>⚖️</span> 15kg Flight Compliant</span>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="section-padding">
      <div class="container">
        
        <!-- Interactive Progress Bar Tracker -->
        <div class="checklist-progress-container">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.5rem;">🎒</span>
            <div>
              <h3 style="font-size: 1.1rem; color: #0F172A; margin: 0; font-weight: 800;">Your Packing Progress</h3>
              <p style="font-size: 0.85rem; color: #64748B; margin: 2px 0 0 0;" id="checklist-counter">0 of 30 items packed (0%)</p>
            </div>
          </div>
          <div class="checklist-bar-track">
            <div class="checklist-bar-fill" id="checklist-bar"></div>
          </div>
          <button id="reset-checklist-btn" style="background: none; border: 1px solid #CBD5E1; color: #64748B; font-size: 0.82rem; padding: 6px 12px; border-radius: 8px; cursor: pointer; font-weight: 600;">Reset All</button>
        </div>

        <div class="guide-layout-split">
          
          <div class="guide-body-content">

            <!-- Category 1: Upper & Lower Body Layering -->
            <div class="checklist-group" id="layering">
              <div class="checklist-group-header">
                <h3 class="checklist-group-title"><span>🧥</span> 1. Clothing & 4-Layer System</h3>
                <span class="badge-essential">Essential</span>
              </div>
              <p style="font-size: 0.92rem; color: #64748B; margin-bottom: 16px; line-height: 1.55;">
                In the Himalayas, temperature swings from +20°C in sunny valleys down to -15°C above 4,000m. The 4-layer system (Wicking, Mid-Layer, Insulation, Shell) is non-negotiable.
              </p>

              <div class="checklist-items-wrap">
                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-1">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Thermal Base Layer Tops (2–3 pairs) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Moisture-wicking merino wool or high-grade synthetic. Never cotton, which holds moisture and chills you.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-2">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Thermal Base Layer Bottoms (2 pairs) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Breathable merino wool leggings for cold mornings and sleeping at high altitudes.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-3">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Fleece Jacket or Mid-Layer Pullover (1–2) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Polartec 200 or micro-grid fleece for warmth during chilly daytime ascents.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-4">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Heavy Down Jacket (-15°C to -20°C rating) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">700–800 fill-power hooded down jacket. Essential for cold evenings in unheated teahouses. (Can be rented in Kathmandu for ~$2/day).</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-5">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Waterproof & Windproof Hard Shell Jacket <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Gore-Tex or equivalent (15,000mm+ water column) with hood and underarm ventilation zips.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-6">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Convertible / Quick-Dry Trekking Trousers (2 pairs) <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">Stretchy, abrasion-resistant pants that can roll up or zip off into shorts in warm lower valleys.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-7">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Waterproof Rain Pants / Over-Trousers (1 pair) <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">Lightweight shell pants to slip over hiking trousers during sudden mountain rain or snow flurries.</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Category 2: Footwear & Socks -->
            <div class="checklist-group" id="footwear">
              <div class="checklist-group-header">
                <h3 class="checklist-group-title"><span>🥾</span> 2. Footwear & Socks</h3>
                <span class="badge-essential">Essential</span>
              </div>
              <p style="font-size: 0.92rem; color: #64748B; margin-bottom: 16px; line-height: 1.55;">
                Your feet are your vehicle. Never embark on a trek in brand-new, unbroken boots!
              </p>

              <div class="checklist-items-wrap">
                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-8">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Waterproof Hiking Boots with Ankle Support <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Broken-in leather or synthetic Gore-Tex boots with rugged Vibram lug soles.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-9">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Merino Wool Trekking Socks (4–5 pairs) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Cushioned, naturally odor-resistant socks (e.g. Darn Tough or Smartwool). Bring 1 heavy pair reserved strictly for sleeping.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-10">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Camp Shoes / Sandals / Down Booties (1 pair) <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">Slip-ons or running shoes to let your feet air out in the teahouse dining room after 6 hours on trail.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-11">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Breathable Trekking Gaiters <span class="badge-optional">Optional</span></span>
                    <p class="checklist-item-desc">Keeps snow, scree, and mud out of your boots on high passes (Thorong La, Cho La, Larkya La).</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Category 3: Backpacks & Sleeping Gear -->
            <div class="checklist-group" id="packs">
              <div class="checklist-group-header">
                <h3 class="checklist-group-title"><span>⛺</span> 3. Packs & Sleeping Equipment</h3>
                <span class="badge-essential">Essential</span>
              </div>

              <div class="checklist-items-wrap">
                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-12">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Main Duffle Bag (60L–80L) <span class="badge-essential">Provided by Us!</span></span>
                    <p class="checklist-item-desc"><strong>Namaste Hiking Trek provides a complimentary heavy-duty waterproof expedition duffle bag</strong> for our porter team to carry (weight limit 10–12kg).</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-13">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Daypack with Hip Belt (25L–35L) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">To carry your daytime essentials: 2L water, rain jacket, fleece, sunblock, camera, passport, and snacks.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-14">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Rain Cover for Daypack <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Waterproof elastic cover to protect electronics and spare layers during afternoon downpours.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-15">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">4-Season Down Sleeping Bag (-15°C to -20°C) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Teahouse rooms are unheated and blankets are limited. (High quality sleeping bags can be rented in Kathmandu for ~$2/day).</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-16">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Cotton / Silk Sleeping Bag Liner <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">Adds 3°C of thermal warmth and keeps your rental sleeping bag clean and fresh.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-17">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Waterproof Dry Bags / Compression Sacks (2–3) <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">To pack clothing into waterproof bundles inside your porter duffle.</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Category 4: Head & Hand Protection -->
            <div class="checklist-group" id="protection">
              <div class="checklist-group-header">
                <h3 class="checklist-group-title"><span>🕶️</span> 4. Headwear & Gloves</h3>
                <span class="badge-essential">Essential</span>
              </div>

              <div class="checklist-items-wrap">
                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-18">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">UV Category 3 or 4 Glacier Sunglasses <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">High altitude UV reflection from snow can cause painful snow-blindness. Must offer 100% UVA/UVB protection.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-19">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Sun Hat / Wide-Brim Cap <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Protects scalp, neck, and face during sunny daytime ascents.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-20">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Thermal Wool / Fleece Beanie <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Covers ears completely for freezing mornings and night walking.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-21">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Buff / Microfiber Neck Gaiter (2) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Crucial protection against the dry, dusty air that causes the infamous "Khumbu cough".</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-22">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Lightweight Touchscreen Liner Gloves <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">For taking photos and mild chilly mornings.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-23">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Heavy Waterproof Insulated Gloves / Mittens <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Windproof, fleece-lined outer gloves for high pass crossings and sub-zero summit mornings.</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Category 5: Electronics, Hardware & Accessories -->
            <div class="checklist-group" id="electronics">
              <div class="checklist-group-header">
                <h3 class="checklist-group-title"><span>🔋</span> 5. Accessories & Electronics</h3>
                <span class="badge-essential">Essential</span>
              </div>

              <div class="checklist-items-wrap">
                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-24">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Trekking Poles (Pair, Collapsible) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Reduces knee impact by up to 25% on rocky descents and provides stability on icy trails.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-25">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">LED Headlamp (250+ Lumens) + Spare Batteries <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Vital for 4:00 AM summit pushes (Kala Patthar, Poon Hill) and unlit teahouses at night.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-26">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">High-Capacity Power Bank (20,000 mAh) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Cold temperatures deplete battery life rapidly. A power bank saves on high teahouse charging fees.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-27">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Wide-Mouth Water Bottles (2 x 1-Liter Nalgene) <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Must withstand boiling water. At night, fill with hot water and slide into your sleeping bag as a hot-water bottle!</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-28">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Water Purification Tablets / Filter <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">Chlorine dioxide drops or Aquatabs to avoid single-use plastic bottles on trails.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-29">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">High SPF 50+ Sunscreen & Lip Balm with Zinc <span class="badge-essential">Essential</span></span>
                    <p class="checklist-item-desc">UV intensity increases by 10-12% for every 1,000m gained. Reapply multiple times daily.</p>
                  </div>
                </label>

                <label class="checklist-item">
                  <input type="checkbox" class="gear-check" data-id="gear-30">
                  <div class="checklist-item-content">
                    <span class="checklist-item-title">Quick-Dry Microfiber Towel & Biodegradable Wipes <span class="badge-recommended">Recommended</span></span>
                    <p class="checklist-item-desc">Teahouses do not supply towels. Wet wipes are invaluable for quick hygiene on freezing evenings.</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Gear Rental in Kathmandu Section -->
            <div id="rental-guide" style="margin-top: 48px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 30px;">
              <h3 style="font-size: 1.6rem; color: #0F172A; font-weight: 800; margin-bottom: 12px;">
                Buying vs Renting Gear in Thamel, Kathmandu
              </h3>
              <p style="color: #475569; font-size: 0.98rem; line-height: 1.65; margin-bottom: 20px;">
                You don't need to spend thousands on extreme expedition gear at home. Thamel, Kathmandu's tourist hub, is home to hundreds of gear shops where high-quality items can be rented or bought at a fraction of Western prices.
              </p>

              <div class="guide-data-table-wrap">
                <table class="guide-data-table">
                  <thead>
                    <tr>
                      <th>Gear Item</th>
                      <th>Buy or Rent?</th>
                      <th>Rental Rate (Per Day)</th>
                      <th>Purchase Price (Thamel)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>4-Season Down Sleeping Bag (-20°C)</strong></td>
                      <td><span style="color: #10B981; font-weight: 700;">Rent</span></td>
                      <td>NPR 150 – 250 ($1.50 – $2.00)</td>
                      <td>NPR 12,000 – 25,000 ($90 – $190)</td>
                    </tr>
                    <tr>
                      <td><strong>Expedition Down Jacket (800FP)</strong></td>
                      <td><span style="color: #10B981; font-weight: 700;">Rent</span></td>
                      <td>NPR 150 – 250 ($1.50 – $2.00)</td>
                      <td>NPR 10,000 – 22,000 ($75 – $165)</td>
                    </tr>
                    <tr>
                      <td><strong>Trekking Poles (Pair)</strong></td>
                      <td><span style="color: #2C82C9; font-weight: 700;">Buy or Rent</span></td>
                      <td>NPR 100 ($0.80)</td>
                      <td>NPR 1,500 – 3,000 ($12 – $25)</td>
                    </tr>
                    <tr>
                      <td><strong>Hiking Boots</strong></td>
                      <td><span style="color: #EF4444; font-weight: 700;">Buy at Home</span></td>
                      <td>Not recommended</td>
                      <td>Bring broken-in boots from home!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style="font-size: 0.9rem; color: #64748B; margin: 0;">
                💡 <em>Our Namaste Hiking Trek guide will personally accompany you around trusted Thamel gear shops during your arrival briefing to inspect zippers, down loft, and fit before you pay any deposit.</em>
              </p>
            </div>

          </div>

          <!-- Sidebar -->
          <aside>
            <div class="guide-sidebar-nav">
              <h3 class="guide-sidebar-title">Checklist Categories</h3>
              <ul class="guide-sidebar-links">
                <li><a href="#layering">🧥 1. Layering System</a></li>
                <li><a href="#footwear">🥾 2. Footwear & Socks</a></li>
                <li><a href="#packs">⛺ 3. Packs & Sleeping</a></li>
                <li><a href="#protection">🕶️ 4. Headwear & Gloves</a></li>
                <li><a href="#electronics">🔋 5. Accessories & Tech</a></li>
                <li><a href="#rental-guide">🏷️ Thamel Rental Rates</a></li>
              </ul>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Related Guides</h4>
                <a href="${relPrefix}recommended-medical-kit/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block; margin-bottom: 6px;">→ Recommended Medical Kit</a>
                <a href="${relPrefix}travel-insurance/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block;">→ Travel & Heli Insurance</a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </main>

  ${getFooter(relPrefix)}

  <script>
    // Interactive Checklist Tracker with localStorage Persistence
    document.addEventListener('DOMContentLoaded', () => {
      const checkboxes = document.querySelectorAll('.gear-check');
      const counterEl = document.getElementById('checklist-counter');
      const barEl = document.getElementById('checklist-bar');
      const resetBtn = document.getElementById('reset-checklist-btn');

      // Load saved state from localStorage
      checkboxes.forEach(cb => {
        const id = cb.getAttribute('data-id');
        const saved = localStorage.getItem('nht_gear_' + id);
        if (saved === '1') {
          cb.checked = true;
          cb.closest('.checklist-item').classList.add('checked');
        }

        cb.addEventListener('change', () => {
          if (cb.checked) {
            localStorage.setItem('nht_gear_' + id, '1');
            cb.closest('.checklist-item').classList.add('checked');
          } else {
            localStorage.removeItem('nht_gear_' + id);
            cb.closest('.checklist-item').classList.remove('checked');
          }
          updateProgress();
        });
      });

      function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.gear-check:checked').length;
        const pct = Math.round((checked / total) * 100);
        counterEl.textContent = \`\${checked} of \${total} items packed (\${pct}%)\`;
        barEl.style.width = pct + '%';
      }

      resetBtn.addEventListener('click', () => {
        if (confirm('Reset your packing checklist?')) {
          checkboxes.forEach(cb => {
            cb.checked = false;
            cb.closest('.checklist-item').classList.remove('checked');
            localStorage.removeItem('nht_gear_' + cb.getAttribute('data-id'));
          });
          updateProgress();
        }
      });

      updateProgress();
    });
  </script>
</body>
</html>
`;
}

// -------------------------------------------------------------
// 4. TRAVEL INSURANCE
// -------------------------------------------------------------
function renderInsurancePage(relPrefix) {
  const canonical = `https://namastehikingtrek.com/travel-insurance/`;
  const title = "Travel & Emergency Helicopter Evacuation Insurance for Nepal — Namaste Hiking Trek";
  const desc = "Mandatory travel insurance requirements for Nepal trekking. Emergency helicopter evacuation up to 6,000m, approved international insurance companies, claim process & rescue protocol.";

  return `<!DOCTYPE html>
<html lang="en">
${getHead(title, desc, canonical, relPrefix)}
<body>
  ${getHeaderNav(relPrefix, 'insurance')}

  <main>
    <!-- Breadcrumb -->
    <div style="background: #F1F5F9; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 0.88rem;">
      <div class="container">
        <a href="${relPrefix}index.html" style="color: #10B981; text-decoration: none; font-weight: 600;">Home</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <a href="${relPrefix}nepal-travel-guide/" style="color: #10B981; text-decoration: none; font-weight: 600;">Travel Guide</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <span style="color: #475569; font-weight: 500;">Travel Insurance</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="guide-hero-section">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 10px; display: inline-block;">Mountain Safety & Policy</span>
        <h1 class="guide-hero-title">Nepal Trekking Travel & Helicopter Insurance</h1>
        <p class="guide-hero-desc">
          Why comprehensive high-altitude travel insurance is mandatory, what your policy must cover up to 6,000m, approved providers, and how emergency rescue works.
        </p>
        <div class="guide-hero-meta">
          <span class="guide-meta-chip"><span>🚁</span> 6,000m Heli Rescue Mandatory</span>
          <span class="guide-meta-chip"><span>🏥</span> Hospital Admission Guarantee</span>
          <span class="guide-meta-chip"><span>🛡️</span> 24/7 Kathmandu Ops Coordination</span>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="section-padding">
      <div class="container">
        <div class="guide-layout-split">
          
          <div class="guide-body-content">

            <!-- Critical Callout Box -->
            <div class="guide-callout guide-callout-emergency">
              <div class="guide-callout-icon">🚨</div>
              <div>
                <h4 style="font-size: 1.15rem; color: #991B1B; margin-bottom: 6px; font-weight: 800;">The Non-Negotiable 6,000m Altitude Clause</h4>
                <p style="font-size: 0.95rem; color: #7F1D1D; margin: 0; line-height: 1.6;">
                  Standard travel insurance policies (credit card coverage, ordinary holiday insurance) almost always contain strict altitude exclusions capped at 2,500m or 3,000m. <strong>Your policy must explicitly state emergency medical helicopter search & rescue evacuation up to 6,000 meters (or the highest altitude of your trek).</strong> Without this, helicopter operators will not fly without upfront cash guarantees exceeding $3,000–$5,000 USD.
                </p>
              </div>
            </div>

            <!-- Section 1: What Your Policy Must Cover -->
            <div id="coverage" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Checklist: What Your Policy MUST Include
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px;">
                Before finalizing your insurance policy, verify with your underwriter that the following 5 provisions are explicitly documented in your schedule of benefits:
              </p>

              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; display: flex; gap: 16px;">
                  <span style="font-size: 1.5rem; color: #10B981;">✓</span>
                  <div>
                    <strong style="font-size: 1.05rem; color: #0F172A;">Emergency Helicopter Evacuation up to 6,000m:</strong>
                    <p style="font-size: 0.92rem; color: #64748B; margin-top: 4px; line-height: 1.55;">Direct airlift from remote mountain airstrips or village helipads directly to an accredited hospital in Kathmandu.</p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; display: flex; gap: 16px;">
                  <span style="font-size: 1.5rem; color: #10B981;">✓</span>
                  <div>
                    <strong style="font-size: 1.05rem; color: #0F172A;">Inpatient Hospitalization & Medical Treatment:</strong>
                    <p style="font-size: 0.92rem; color: #64748B; margin-top: 4px; line-height: 1.55;">Covers ICU admissions, hyperbaric oxygen therapy, specialist consultations, and intravenous treatment at Western-standard medical facilities in Kathmandu (CIWEC Hospital or Era International Hospital).</p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; display: flex; gap: 16px;">
                  <span style="font-size: 1.5rem; color: #10B981;">✓</span>
                  <div>
                    <strong style="font-size: 1.05rem; color: #0F172A;">Repatriation of Remains & Emergency Flight Home:</strong>
                    <p style="font-size: 0.92rem; color: #64748B; margin-top: 4px; line-height: 1.55;">Commercial or medically supervised medical evacuation back to your home country if severe recovery is required.</p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; display: flex; gap: 16px;">
                  <span style="font-size: 1.5rem; color: #10B981;">✓</span>
                  <div>
                    <strong style="font-size: 1.05rem; color: #0F172A;">Trip Cancellation & Interruption Protection:</strong>
                    <p style="font-size: 0.92rem; color: #64748B; margin-top: 4px; line-height: 1.55;">Reimbursement if personal medical emergencies force you to cancel before departure, or mountain weather delays interrupt domestic flights.</p>
                  </div>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px; display: flex; gap: 16px;">
                  <span style="font-size: 1.5rem; color: #10B981;">✓</span>
                  <div>
                    <strong style="font-size: 1.05rem; color: #0F172A;">Delayed & Lost Baggage Coverage:</strong>
                    <p style="font-size: 0.92rem; color: #64748B; margin-top: 4px; line-height: 1.55;">Financial coverage to rent replacement boots, sleeping bags, and outerwear in Kathmandu if your international airline mishandles your luggage.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: Recommended Providers -->
            <div id="providers" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                Recommended High-Altitude Travel Insurers
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px;">
                Our clients regularly use the following reputable international adventure insurers:
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                  <span style="font-size: 0.8rem; font-weight: 800; color: #10B981; text-transform: uppercase;">Gold Standard</span>
                  <h3 style="font-size: 1.3rem; color: #0F172A; margin: 4px 0 8px 0;">Global Rescue</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6; margin-bottom: 12px;">
                    The premier worldwide medical evacuation and field rescue membership. They deploy helicopters directly without altitude caps and maintain a dedicated rescue desk in Nepal.
                  </p>
                  <span style="font-size: 0.85rem; color: #0F172A; font-weight: 600;">Worldwide Availability</span>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                  <span style="font-size: 0.8rem; font-weight: 800; color: #2C82C9; text-transform: uppercase;">Popular Adventure Insurer</span>
                  <h3 style="font-size: 1.3rem; color: #0F172A; margin: 4px 0 8px 0;">World Nomads</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6; margin-bottom: 12px;">
                    Under their <em>Explorer Plan</em>, trekking up to 6,000m is covered for most nationalities. (Ensure you specifically select the Explorer tier covering high-altitude hiking).
                  </p>
                  <span style="font-size: 0.85rem; color: #0F172A; font-weight: 600;">USA, UK, Europe, Australia</span>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                  <span style="font-size: 0.8rem; font-weight: 800; color: #8B5CF6; text-transform: uppercase;">Specialized Field Rescue</span>
                  <h3 style="font-size: 1.3rem; color: #0F172A; margin: 4px 0 8px 0;">Ripcord Rescue Travel</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6; margin-bottom: 12px;">
                    Designed by Redpoint Resolutions specifically for mountaineers and remote expeditions. Offers point-of-injury helicopter rescue and hospital treatment.
                  </p>
                  <span style="font-size: 0.85rem; color: #0F172A; font-weight: 600;">Worldwide Availability</span>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                  <span style="font-size: 0.8rem; font-weight: 800; color: #F59E0B; text-transform: uppercase;">Comprehensive Cover</span>
                  <h3 style="font-size: 1.3rem; color: #0F172A; margin: 4px 0 8px 0;">Allianz Global / Cover-More</h3>
                  <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6; margin-bottom: 12px;">
                    Available through national travel brokers with dedicated high-altitude adventure sports add-on packs. Check regional policy wording closely.
                  </p>
                  <span style="font-size: 0.85rem; color: #0F172A; font-weight: 600;">Europe, Australia, NZ, UK</span>
                </div>
              </div>
            </div>

            <!-- Section 3: Emergency Rescue Protocol -->
            <div id="rescue-protocol" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                How Helicopter Evacuation Works in Nepal
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px;">
                Namaste Hiking Trek operates a 24/7 mountain emergency response protocol with Kathmandu helicopter charter operators:
              </p>

              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <strong style="color: #10B981; font-size: 0.88rem; text-transform: uppercase;">Step 1: Clinical Assessment on Trail</strong>
                  <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">
                    Your lead guide assesses your vitals (oxygen saturation, pulse rate, neurological responses). If acute mountain sickness (HAPE/HACE) or serious trauma is identified, evacuation is authorized immediately.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <strong style="color: #10B981; font-size: 0.88rem; text-transform: uppercase;">Step 2: Operations Dispatch & Insurance Clearance</strong>
                  <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">
                    Your guide contacts our Kathmandu Operations Desk via satellite communicator or cell network. Our office contacts your insurance company with the medical report to obtain payment guarantees.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <strong style="color: #10B981; font-size: 0.88rem; text-transform: uppercase;">Step 3: Helicopter Dispatch & Flight to Kathmandu</strong>
                  <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">
                    An Airbus H125 (formerly AS350 B3e)—the world's most powerful high-altitude rescue helicopter—is dispatched to your mountain landing zone (weather permitting) and flies you to Kathmandu airport.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                  <strong style="color: #10B981; font-size: 0.88rem; text-transform: uppercase;">Step 4: Hospital Admission & Treatment</strong>
                  <p style="font-size: 0.93rem; color: #475569; margin-top: 4px; line-height: 1.55;">
                    An ambulance transfers you directly from the domestic tarmac to CIWEC Hospital or Era International Hospital, where a member of our management team meets you to handle paperwork and ensure your comfort.
                  </p>
                </div>
              </div>
            </div>

            <!-- FAQs -->
            <div id="faqs" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 20px;">
                Insurance FAQs
              </h2>

              <div class="region-faq-list">
                <div class="faq-accordion-item open active">
                  <button class="faq-accordion-header">
                    <span>What happens if my insurance does not cover 6,000 meters?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    If an emergency occurs above your policy's altitude ceiling, your insurance company will refuse payment for the helicopter dispatch ($3,000 to $5,000 USD) and all associated hospital bills. Namaste Hiking Trek strictly reviews and confirms your insurance policy documents during the pre-trek Kathmandu briefing.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Do I need to pay for the helicopter upfront and claim later?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    If you hold a policy with an approved international provider (such as Global Rescue or World Nomads) that provides direct billing guarantees to local helicopter operators, you do not have to pay out of pocket. For secondary providers without direct billing in Nepal, an upfront credit card hold or deposit may be required before takeoff, which you later claim back with the medical discharge summary.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>What documents should I carry on the trail?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Carry a printed copy of your insurance certificate (showing your full name, policy number, emergency assistance telephone number, and 6,000m altitude confirmation) in your daypack, and keep a digital screenshot saved offline on your smartphone.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <aside>
            <div class="guide-sidebar-nav">
              <h3 class="guide-sidebar-title">Insurance Guide</h3>
              <ul class="guide-sidebar-links">
                <li><a href="#coverage">📋 Mandatory Coverage Items</a></li>
                <li><a href="#providers">🛡️ Approved Insurers</a></li>
                <li><a href="#rescue-protocol">🚁 Emergency Helicopter Protocol</a></li>
                <li><a href="#faqs">❓ Insurance FAQs</a></li>
              </ul>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Explore More Guides</h4>
                <a href="${relPrefix}recommended-medical-kit/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block; margin-bottom: 6px;">→ Recommended Medical Kit</a>
                <a href="${relPrefix}equipment-checklist/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block;">→ Equipment Packing Checklist</a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </main>

  ${getFooter(relPrefix)}

  <script>
    document.querySelectorAll('.faq-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-accordion-item');
        if (item) item.classList.toggle('open');
      });
    });
  </script>
</body>
</html>
`;
}

// -------------------------------------------------------------
// 5. RECOMMENDED MEDICAL KIT
// -------------------------------------------------------------
function renderMedicalKitPage(relPrefix) {
  const canonical = `https://namastehikingtrek.com/recommended-medical-kit/`;
  const title = "Recommended Medical Kit & High-Altitude Pharmacy for Nepal — Namaste Hiking Trek";
  const desc = "Doctor-approved personal medical kit guide for trekking in Nepal. Diamox dosage, AMS symptoms, pain relief, stomach remedies, blister treatment, and water purification.";

  return `<!DOCTYPE html>
<html lang="en">
${getHead(title, desc, canonical, relPrefix)}
<body>
  ${getHeaderNav(relPrefix, 'medical')}

  <main>
    <!-- Breadcrumb -->
    <div style="background: #F1F5F9; padding: 12px 0; border-bottom: 1px solid #E2E8F0; font-size: 0.88rem;">
      <div class="container">
        <a href="${relPrefix}index.html" style="color: #10B981; text-decoration: none; font-weight: 600;">Home</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <a href="${relPrefix}nepal-travel-guide/" style="color: #10B981; text-decoration: none; font-weight: 600;">Travel Guide</a>
        <span style="margin: 0 8px; color: #94A3B8;">/</span>
        <span style="color: #475569; font-weight: 500;">Recommended Medical Kit</span>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="guide-hero-section">
      <div class="container">
        <span class="badge badge-alpine" style="margin-bottom: 10px; display: inline-block;">Trekker Health & Altitude Pharmacy</span>
        <h1 class="guide-hero-title">Recommended Nepal Trekking Medical Kit</h1>
        <p class="guide-hero-desc">
          Doctor-approved personal high-altitude first aid guide. Essential medications for altitude acclimatization, traveler's diarrhea, pain relief, blister care, and water sanitation.
        </p>
        <div class="guide-hero-meta">
          <span class="guide-meta-chip"><span>💊</span> Altitude Medications</span>
          <span class="guide-meta-chip"><span>🩹</span> Wound & Blister Care</span>
          <span class="guide-meta-chip"><span>💧</span> Water Purification</span>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="section-padding">
      <div class="container">
        <div class="guide-layout-split">
          
          <div class="guide-body-content">

            <!-- Medical Disclaimer Box -->
            <div class="guide-callout guide-callout-warning">
              <div class="guide-callout-icon">ℹ️</div>
              <div>
                <h4 style="font-size: 1.05rem; color: #92400E; margin-bottom: 4px; font-weight: 800;">Important Medical Disclaimer</h4>
                <p style="font-size: 0.92rem; color: #78350F; margin: 0; line-height: 1.55;">
                  This guide is intended for educational purposes only and does not substitute for personalized medical advice from a licensed physician. Always consult your doctor or a specialized travel medicine clinic prior to departure to review your prescription medicines, contraindications, and known allergies.
                </p>
              </div>
            </div>

            <!-- Section 1: High-Altitude Medicines -->
            <div id="altitude-meds" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                1. High-Altitude Medications & Diamox
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 20px;">
                Proper acclimatization is the primary cure for altitude, but pharmacological aids are invaluable in high-altitude environments.
              </p>

              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                  <h3 style="font-size: 1.25rem; color: #0F172A; margin: 0;">Acetazolamide (Diamox)</h3>
                  <span class="badge badge-alpine">Primary Altitude Drug</span>
                </div>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                  <strong>How it Works:</strong> Diamox is a carbonic anhydrase inhibitor that acidifies the blood, stimulating your brain's respiratory center to breathe deeper and faster—especially while sleeping at high elevations. It speeds up natural acclimatization by 24–48 hours.
                </p>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.65; margin-bottom: 12px;">
                  <strong>Standard Preventive Dosage:</strong> 125mg to 250mg taken orally twice daily (morning and evening), beginning 24 hours before ascending past 2,800m–3,000m (e.g. starting in Namche Bazaar or Manang).
                </p>
                <p style="font-size: 0.92rem; color: #64748B; line-height: 1.55; margin-bottom: 12px;">
                  <strong>Common Side Effects:</strong> Harmless tingling sensation in fingers, toes, and lips (paresthesia), increased urination frequency, and altered taste for carbonated drinks (beer and soda taste flat).
                </p>
                <div style="background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 8px; padding: 12px; font-size: 0.88rem; color: #991B1B;">
                  ⚠️ <strong>Sulfa Allergy Warning:</strong> Diamox is a sulfonamide derivative. Trekkers with confirmed sulfa drug allergies should <em>never</em> take Diamox without express consultation with their allergist.
                </div>
              </div>

              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px;">
                <h4 style="font-size: 1.15rem; color: #0F172A; margin-bottom: 8px;">Emergency Altitude Drugs (Carried by Guide):</h4>
                <ul style="padding-left: 20px; font-size: 0.92rem; color: #475569; display: flex; flex-direction: column; gap: 8px;">
                  <li><strong>Dexamethasone (4mg):</strong> Powerful steroid used strictly as emergency treatment for HACE (High Altitude Cerebral Edema) to reduce brain swelling while descending.</li>
                  <li><strong>Nifedipine:</strong> Calcium channel blocker used as an emergency vasodilator for HAPE (High Altitude Pulmonary Edema).</li>
                </ul>
              </div>
            </div>

            <!-- Section 2: Pain Relief -->
            <div id="pain-relief" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                2. Pain Relief & Anti-Inflammatories
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Muscle soreness and mild tension headaches are common during strenuous ascents.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1.05rem; display: block; margin-bottom: 6px;">Ibuprofen (200mg / 400mg)</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin: 0; line-height: 1.55;">Excellent anti-inflammatory for altitude-induced headaches, knee strain, and joint inflammation. Always take with food.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1.05rem; display: block; margin-bottom: 6px;">Paracetamol / Acetaminophen (500mg)</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin: 0; line-height: 1.55;">Gentle on the stomach for reducing fever, mild headaches, and general body aches.</p>
                </div>
              </div>
            </div>

            <!-- Section 3: Gastrointestinal Health -->
            <div id="stomach" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                3. Gastrointestinal Health & Stomach Remedies
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Changes in diet, spices, and high altitude affect gut motility. Carry a dedicated stomach pouch:
              </p>

              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">Oral Rehydration Salts (ORS / Electral Sachets):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    Crucial for restoring electrolytes lost to sweat and diarrhea. Mix 1 sachet into 1 liter of drinking water every afternoon.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">Loperamide (Imodium):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    Anti-motility medication for symptomatic relief of sudden traveler's diarrhea during active walking hours.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">Prescription Antibiotic (Ciprofloxacin or Azithromycin):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    Ask your physician for a single emergency 3-day course for severe bacterial gastroenteritis accompanied by high fever.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">Antacids (Tums / Omeprazole):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    Helps settle acid reflux, heartburn, and stomach upset from unfamiliar spices or elevation changes.
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 4: Blister & Wound Management -->
            <div id="blisters" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                4. Blister Prevention & Wound Care
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Blisters are the #1 trek-disrupting condition. Treat hotspots <em>immediately</em> before a blister bubbles up!
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 4px;">Compeed Hydrocolloid Plasters</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Acts as an artificial skin barrier. Stays on for multiple days even in wet boots.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 4px;">Zinc Oxide Strapping Tape / Moleskin</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Apply directly over friction hot spots on heels or toes before putting your boots on in the morning.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 4px;">Antiseptic Betadine / Iodine Ointment</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">Prevents superficial cuts and popped blisters from developing bacterial infections in cold trail dust.</p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; display: block; margin-bottom: 4px;">Elastic Crepe Bandage</strong>
                  <p style="font-size: 0.88rem; color: #64748B; margin: 0;">For wrapping sprained ankles or stabilizing weak knees during long mountain descents.</p>
                </div>
              </div>
            </div>

            <!-- Section 5: Water Sanitation -->
            <div id="water" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 14px;">
                5. Water Sanitation & Purification
              </h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.65; margin-bottom: 16px;">
                Never drink untreated tap or stream water. Protect yourself against giardia, cryptosporidium, and waterborne bacteria:
              </p>

              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">Chlorine Dioxide Tablets (Aquatabs / Micropur):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    The gold standard for chemical disinfection. Neutralizes all viruses, bacteria, and hard cysts with virtually zero chemical aftertaste. Allow 30 minutes before drinking.
                  </p>
                </div>

                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px;">
                  <strong style="color: #0F172A; font-size: 1rem;">UV Sterilizer (SteriPen) or Squeeze Filter (Sawyer / Katadyn):</strong>
                  <p style="font-size: 0.9rem; color: #64748B; margin-top: 4px; line-height: 1.55;">
                    Provides instant drinking water from clean taps in teahouses. Remember that freezing high-altitude nights can damage hollow-fiber filter membranes, so sleep with your filter inside your sleeping bag!
                  </p>
                </div>
              </div>
            </div>

            <!-- FAQs -->
            <div id="faqs" style="margin-bottom: 44px;">
              <h2 style="font-size: 1.85rem; color: #0F172A; font-weight: 800; margin-bottom: 20px;">
                Health & Medical FAQs
              </h2>

              <div class="region-faq-list">
                <div class="faq-accordion-item open active">
                  <button class="faq-accordion-header">
                    <span>Can I buy Diamox and basic medicines over the counter in Kathmandu?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Yes. Pharmacies in Thamel, Kathmandu carry generic Acetazolamide (Diamox 250mg) as well as rehydration salts, ibuprofen, and blister patches over the counter at very economical prices (approx. NPR 200–300 per strip of 10 tablets). However, specialized prescription antibiotics should preferably be sourced from your home doctor.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>Does Diamox mask altitude sickness symptoms?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    No! This is a widespread myth. Diamox does not act as a painkiller or mask symptoms. It actively accelerates your physiological acclimatization. If you ascend too fast and experience AMS, symptoms will break right through Diamox, serving as a clear warning to halt ascent.
                  </div>
                </div>

                <div class="faq-accordion-item">
                  <button class="faq-accordion-header">
                    <span>What medical equipment does my Namaste Hiking Trek guide carry?</span>
                    <span>▾</span>
                  </button>
                  <div class="faq-accordion-body">
                    Every lead guide carries a comprehensive group wilderness first aid kit, digital pulse oximeter for daily SpO2 tracking, emergency medical trauma dressings, sterile burn care, splints, and satellite communication devices to coordinate emergency evacuations.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <aside>
            <div class="guide-sidebar-nav">
              <h3 class="guide-sidebar-title">Medical Kit Sections</h3>
              <ul class="guide-sidebar-links">
                <li><a href="#altitude-meds">💊 1. High-Altitude & Diamox</a></li>
                <li><a href="#pain-relief">🩹 2. Pain Relief</a></li>
                <li><a href="#stomach">🫃 3. Gastrointestinal Health</a></li>
                <li><a href="#blisters">👣 4. Blister Prevention</a></li>
                <li><a href="#water">💧 5. Water Sanitation</a></li>
                <li><a href="#faqs">❓ Medical FAQs</a></li>
              </ul>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Explore More Guides</h4>
                <a href="${relPrefix}equipment-checklist/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block; margin-bottom: 6px;">→ Equipment Packing Checklist</a>
                <a href="${relPrefix}travel-insurance/" style="font-size: 0.88rem; color: #10B981; font-weight: 600; text-decoration: none; display: block;">→ Travel & Heli Insurance</a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </main>

  ${getFooter(relPrefix)}

  <script>
    document.querySelectorAll('.faq-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-accordion-item');
        if (item) item.classList.toggle('open');
      });
    });
  </script>
</body>
</html>
`;
}

// -------------------------------------------------------------
// BUILD & WRITE ALL 5 PAGES
// -------------------------------------------------------------
const pages = [
  {
    folder: 'nepal-travel-guide',
    rootFile: 'nepal-travel-guide.html',
    render: renderTravelGuideHub
  },
  {
    folder: 'nepal-visa',
    rootFile: 'nepal-visa.html',
    render: renderVisaPage
  },
  {
    folder: 'equipment-checklist',
    rootFile: 'equipment-checklist.html',
    render: renderEquipmentPage
  },
  {
    folder: 'travel-insurance',
    rootFile: 'travel-insurance.html',
    render: renderInsurancePage
  },
  {
    folder: 'recommended-medical-kit',
    rootFile: 'recommended-medical-kit.html',
    render: renderMedicalKitPage
  }
];

function buildAll() {
  console.log('Building all 5 Nepal Travel Guide pages...');

  pages.forEach(p => {
    // 1. Subfolder version with '../' prefix
    const folderPath = path.join(projectRoot, p.folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    const subfolderIndexHtml = path.join(folderPath, 'index.html');
    fs.writeFileSync(subfolderIndexHtml, p.render('../'), 'utf8');
    console.log(`Created: ${p.folder}/index.html`);

    // 2. Root version with '' prefix
    const rootHtmlPath = path.join(projectRoot, p.rootFile);
    fs.writeFileSync(rootHtmlPath, p.render(''), 'utf8');
    console.log(`Created: ${p.rootFile}`);
  });

  console.log('All 5 travel guide pages successfully generated!');
}

buildAll();
