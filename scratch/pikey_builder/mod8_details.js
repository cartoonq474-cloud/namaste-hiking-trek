// Module 8: Section 6 - Essential Trip Logistics (21 Collapsible Accordion Cards)
function getDetailsSection() {
  return `
        <!-- Section 6: Trip Details & Essential Logistics -->
        <section id="section-details" class="trek-detail-section">
          <div class="details-section-container">
            <div class="details-title-wrapper">
              <h2 class="details-main-title">Read before you book, Pikey Peak Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <p class="details-subtitle-text">To help you decide if the Pikey Peak Trek is for you, we have provided comprehensive information on accommodation, food, water safety, electricity, permits, and physical preparation.</p>

          <div class="details-accordion-group" style="display: flex; flex-direction: column; gap: 12px;">

            <!-- Accordion 1 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">1. Solukhumbu Local Area Entry Permits &amp; TIMS Card</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Trekking to Pikey Peak requires two primary official permits: the <strong>Solukhumbu Rural Municipality Entry Permit</strong> (approx. NPR 3,000 / $25 USD) and the <strong>Trekkers' Information Management System (TIMS) Card</strong> (approx. NPR 2,000 / $17 USD). Depending on the vehicle entry route, a Gaurishankar Conservation Area permit may also be coordinated.
                </p>
                <p style="margin: 0;">
                  Namaste Hiking Trek manages and purchases all necessary trekking permits and paperwork on your behalf prior to departure. You will only need to provide a clear digital copy of your passport and two recent passport-size photographs upon booking.
                </p>
              </div>
            </div>

            <!-- Accordion 2 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">2. Overland Route Logistics: 4WD Jeep vs. Lukla Flights</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Unlike classic Everest Base Camp itineraries that depend on flights into Tenzing-Hillary Airport in Lukla, the Pikey Peak Trek is approached entirely by road. We travel southeast from Kathmandu along the newly paved, smooth BP Highway following the Sun Koshi River before ascending the mid-hill ridge to Dhap Bazaar (approx. 240 km, 8–9 hours). The return journey from Phaplu to Kathmandu covers approx. 270 km (8–10 hours).
                </p>
                <p style="margin: 0;">
                  This overland approach guarantees that your trip will never be grounded or postponed by cloud cover, wind, or Lukla runway closures. We utilize sturdy, well-maintained 4WD Mahindra Scorpio Jeeps driven by experienced mountain drivers, ensuring comfort and safety on both paved highways and rural gravel sections.
                </p>
              </div>
            </div>

            <!-- Accordion 3 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">3. Mountain Teahouse Accommodation Standards along the Ridge</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Accommodations along the Pikey Peak circuit are traditional, family-run Nepalese mountain teahouses and lodges. Rooms typically feature two twin wooden beds fitted with foam mattresses, clean bedsheets, pillows, and a heavy blanket. Due to sub-zero temperatures at Pikey Base Camp (3,640 m) and Jasmane Bhanjyang (3,550 m), carrying a personal sleeping bag rated to -10°C is essential.
                </p>
                <p style="margin: 0;">
                  Bathroom facilities are generally shared among guests on each floor, with a mix of Western seated flush toilets and Asian-style squat toilets. Lower villages such as Junbesi and Phaplu feature larger lodges with occasional attached bathrooms and hot gas showers.
                </p>
              </div>
            </div>

            <!-- Accordion 4 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">4. Dining, Food Choices &amp; Traditional Sherpa Nutrition</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Teahouse menus offer a hearty blend of Nepali staples, Sherpa mountain dishes, and international comfort foods. The premier trekking meal is <strong>Dal Bhat Tarkari</strong> (steamed rice, yellow lentil soup, spiced vegetable curry, greens, and pickle), providing unlimited free refills of clean carbohydrates and protein.
                </p>
                <p style="margin: 0;">
                  You will also have opportunities to savor authentic Sherpa specialties, including <em>Syakpa</em> (thick Sherpa potato and vegetable noodle soup), <em>Tsampa</em> (roasted barley flour porridge), Tibetan fried bread with honey, and freshly steamed vegetable momos. We strongly recommend sticking to wholesome vegetarian meals at higher altitudes for optimal digestion and food hygiene.
                </p>
              </div>
            </div>

            <!-- Accordion 5 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">5. Drinking Water Safety, Boiled Water &amp; Purification</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Never drink untreated tap or stream water in Nepal. Bottled mineral water is sold in lower villages (NPR 100–250), but single-use plastic bottles create severe ecological waste on remote mountain ridges where garbage collection is non-existent.
                </p>
                <p style="margin: 0;">
                  We recommend carrying two 1-liter reusable Nalgene bottles. You can purchase boiled filtered water from teahouses in the evening (which also doubles as a bed-warmer inside your sleeping bag) or fill up from village taps and treat the water using chlorine dioxide water purification tablets (Aquatabs) or a UV SteriPEN.
                </p>
              </div>
            </div>

            <!-- Accordion 6 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">6. Electricity, Device Charging &amp; Mobile Phone Connectivity</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Teahouses in Dhap, Jhapre, Junbesi, and Phaplu are connected to local micro-hydro electricity or the national power grid. However, at Pikey Base Camp and Jasmane Bhanjyang, lodges rely predominantly on solar power systems. Teahouses charge a small nominal fee (approx. NPR 200–400 / $2–$4 USD) to charge phones, cameras, or power banks in the communal dining hall.
                </p>
                <p style="margin: 0;">
                  Mobile reception from <strong>Ncell</strong> and <strong>Nepal Telecom (NTC)</strong> is surprisingly good along high open ridgelines (such as Jhapre, Pikey Peak, and Dhap), allowing 4G mobile data. In deep forested valleys, signal drops intermittently. We strongly advise purchasing a local 4G tourist SIM card in Kathmandu.
                </p>
              </div>
            </div>

            <!-- Accordion 7 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">7. Hot Showers, Bathroom Facilities &amp; Sanitation</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Hot showers are available at most lodges for an extra fee of NPR 300 to NPR 500 ($3–$5 USD), provided via gas geysers or a bucket of solar-heated water. At Pikey Peak Base Camp (3,640 m), where freezing night temperatures drop water pipes below zero, we recommend skipping showers and using biodegradable wet wipes for hygiene.
                </p>
                <p style="margin: 0;">
                  Bring your own toilet paper and hand sanitizer. Teahouse plumbing cannot handle paper, so always dispose of toilet paper in the provided waste bins next to the toilet.
                </p>
              </div>
            </div>

            <!-- Accordion 8 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">8. Physical Difficulty, Terrain Profile &amp; Fitness Training</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  The Pikey Peak Trek is graded <strong>Moderate (Grade 3/5)</strong>. It requires no technical mountaineering gear, crampons, or ropes. Daily walking times range from 4 to 6 hours on well-established stone staircases, packed dirt ridge paths, and forested trails. The only demanding section is the Day 4 climb to base camp (+720 m) and the early Day 5 summit push (+425 m).
                </p>
                <p style="margin: 0;">
                  Preparation should focus on aerobic stamina (jogging, cycling, swimming, or brisk walking for 45 minutes 3–4 times per week) combined with stair climbing and training walks carrying a 5–6 kg daypack. Fit beginners, active seniors, and families with teenage children frequently complete this trek with complete comfort and success.
                </p>
              </div>
            </div>

            <!-- Accordion 9 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">9. Pikey Peak Summit Day Strategy &amp; Sunrise Timings</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  On Day 5, we wake up at approximately 4:00 AM to begin the ascent by 4:30 AM under the glow of headlamps. The trail ascends steady grassy switchbacks directly behind base camp, gaining about 425 vertical meters over 1.5 to 2 hours.
                </p>
                <p style="margin: 0;">
                  Temperatures on the summit ridge at dawn frequently drop between -5°C and -12°C depending on the season, with gusty morning winds. You must wear thermal base layers, a fleece, your heavy down jacket, windproof gloves, a warm beanie, and a neck gaiter. Carrying a thermos of hot tea or ginger water in your daypack is a wonderful luxury while waiting for the sun to breach the horizon.
                </p>
              </div>
            </div>

            <!-- Accordion 10 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">10. 360-Degree Mountain Panorama: Hillary's Favorite Viewpoint</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  When Sir Edmund Hillary was asked which summit provided the best panoramic view in Nepal, he selected Pikey Peak over Kala Patthar and Gokyo Ri. The reason is geography: because Pikey Peak sits farther south at 4,065 m, it offers an unobstructed, perspective-rich panoramic horizon rather than being hemmed in by steep adjacent valley walls.
                </p>
                <p style="margin: 0;">
                  From the summit cairn, on a clear morning, you can gaze upon an astonishing 360-degree sweep of snow peaks spanning six of the world's fourteen 8,000-meter giants: <strong>Kanchenjunga (8,586 m), Makalu (8,485 m), Lhotse (8,516 m), Mount Everest (8,848 m), Cho Oyu (8,188 m), and Shishapangma (8,027 m)</strong>, alongside Thamserku, Chamlang, Mera Peak, and Numbur Himal.
                </p>
              </div>
            </div>

            <!-- Accordion 11 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">11. Acclimatization Curve &amp; Altitude Safety Protocols</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Acute Mountain Sickness (AMS) can theoretically occur above 2,500 meters. However, the altitude risk on Pikey Peak is very mild compared to higher Khumbu expeditions. The highest sleeping altitude is 3,640 meters (Pikey Base Camp) for only one night, and the summit climb to 4,065 meters is completed early in the day followed by an immediate descent to 3,550 m and 2,700 m.
                </p>
                <p style="margin: 0;">
                  Your guide carries a digital pulse oximeter to check your blood oxygen saturation (SpO2) and pulse every morning and evening. Trekkers should drink 3 to 4 liters of water daily, maintain a steady "pole-pole" (slow and steady) walking pace, and report any mild headaches or nausea to their guide immediately.
                </p>
              </div>
            </div>

            <!-- Accordion 12 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">12. Medical Emergencies &amp; Evacuation Protocol</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  All Namaste Hiking Trek guides hold certified wilderness first-aid credentials. If a trekker experiences persistent altitude illness or physical injury, the golden rule of Himalayan medicine is immediate descent. The trail from Pikey Base Camp allows rapid downhill walking to lower elevations within 2 hours.
                </p>
                <p style="margin: 0;">
                  Furthermore, Phaplu features a full district hospital founded by Sir Edmund Hillary with trained medical doctors. In serious life-threatening medical emergencies, our Kathmandu operations control center coordinates direct helicopter evacuation to premier hospitals in Kathmandu within 1 to 2 hours of notification.
                </p>
              </div>
            </div>

            <!-- Accordion 13 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">13. Travel &amp; High-Altitude Medical Evacuation Insurance</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Comprehensive travel insurance is mandatory for all trekkers joining our expeditions. Your policy must explicitly include <strong>medical treatment, high-altitude trekking up to 4,500 meters, and emergency helicopter search &amp; rescue evacuation</strong>.
                </p>
                <p style="margin: 0;">
                  Ensure your policy does not have hidden exclusions for overland trekking or non-technical hiking. Popular reputable insurance providers for Nepal include World Nomads, Ripcord Rescue Travel Insurance, Allianz Global Assistance, and TuGo. Please carry a printed copy of your policy and emergency claim assistance phone numbers.
                </p>
              </div>
            </div>

            <!-- Accordion 14 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">14. Junbesi Cultural Heritage &amp; Traditional Sherpa Life</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Nestled in a lush green valley at 2,700 meters, Junbesi is often described as the cultural cradle of the Solu Sherpa community. Unlike commercialized trekking hubs, Junbesi has preserved its traditional dry-stone Sherpa homes with carved wooden window frames, slate roofs, and tranquil family apple orchards.
                </p>
                <p style="margin: 0;">
                  A crystalline mountain river, the Junbesi Khola, runs through the village, flanked by ancient chortens and willow trees. Sir Edmund Hillary established one of his earliest Himalayan Trust schools here in 1961, and local Sherpa hospitality in Junbesi remains one of the warmest highlights of the entire trek.
                </p>
              </div>
            </div>

            <!-- Accordion 15 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">15. Sacred Thupten Chholing Monastery Excursion</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Located a scenic 1.5-hour walk up-valley from Junbesi at 3,000 meters, <strong>Thupten Chholing Gompa</strong> is an active spiritual center of the Nyingma tradition of Tibetan Buddhism. It was established in 1968 by Kyabje Trulshik Rinpoche, who fled Tibet with hundreds of monks and nuns.
                </p>
                <p style="margin: 0;">
                  Today, over 400 resident monks and nuns practice meditation and traditional chanting ceremonies here. Visitors are welcome to respectfully observe afternoon pujas (prayer chanting accompanied by long horns, drums, and cymbals), view intricate butter sculptures, and leave modest donations for the monastic community.
                </p>
              </div>
            </div>

            <!-- Accordion 16 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">16. Seasonal Weather Patterns: Spring Rhododendrons vs. Autumn Clarity</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  The two prime trekking windows are <strong>Spring (March to May)</strong> and <strong>Autumn (September to November)</strong>. Spring features mild daytime hiking temperatures (10°C to 18°C), longer daylight, and magnificent floral spectacles as wild rhododendrons, magnolias, and orchids paint the lower slopes in vivid reds and pinks.
                </p>
                <p style="margin: 0;">
                  Autumn delivers the clearest mountain views of the year. Freshly washed by summer monsoon rains, the atmosphere is crystal clear with deep azure skies and stable weather, making October and early November ideal for high-resolution panoramic photography of Mount Everest.
                </p>
              </div>
            </div>

            <!-- Accordion 17 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">17. Responsible Travel &amp; Leave No Trace Principles</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  We are deeply committed to sustainable and culturally sensitive trekking. We follow Leave No Trace principles: all non-biodegradable waste is packed out, and we discourage single-use plastic water bottles in favor of refillable systems.
                </p>
                <p style="margin: 0;">
                  When walking past Buddhist stupas, chortens, and carved mani stone walls, always walk clockwise (keeping the sacred structure to your right side). Always request permission before taking close-up portraits of local Sherpa elders or monks in monasteries.
                </p>
              </div>
            </div>

            <!-- Accordion 18 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">18. Guide and Porter Welfare &amp; Ethical Labor Practices</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Our mountain crew is the heartbeat of Namaste Hiking Trek. We strictly enforce the guidelines of the International Porter Protection Group (IPPG). Our porters carry a maximum weight limit of 20 kg (shared between two clients), receive fair living wages exceeding industry averages, and are provided with warm mountain clothing, suitable footwear, and comprehensive medical insurance.
                </p>
                <p style="margin: 0;">
                  We never overload our porters, and in the event of illness on the trail, they receive the exact same high-priority medical care and evacuation coverage as our guests.
                </p>
              </div>
            </div>

            <!-- Accordion 19 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">19. Local Currency, ATM Unavailability &amp; Daily Cash Estimates</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  There are no functional ATM cash machines along the trail between Dhap Bazaar, Jhapre, Base Camp, and Junbesi. ATMs in Phaplu and Salleri are frequently out of cash or offline due to regional power outages.
                </p>
                <p style="margin: 0;">
                  You must withdraw sufficient Nepalese Rupees (NPR) in Kathmandu prior to departure. We recommend budgeting approx. <strong>NPR 25,000 to 35,000 ($200–$270 USD)</strong> in cash per person to comfortably cover hot showers, battery charging, boiled drinking water, snacks, souvenirs, and crew tipping.
                </p>
              </div>
            </div>

            <!-- Accordion 20 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">20. Tipping Guidelines for Sherpa Guides, Porters &amp; Drivers</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  Tipping is customary in the Nepal trekking industry and serves as a heartfelt expression of gratitude for the tireless dedication and safety provided by your mountain crew. Tipping is customarily presented on the final evening of trekking in Phaplu.
                </p>
                <p style="margin: 0;">
                  As a general guideline:
                  <ul style="margin-top: 6px; margin-bottom: 6px; padding-left: 20px;">
                    <li><strong>Lead Trekking Guide:</strong> $10 to $15 USD per day from the group.</li>
                    <li><strong>Trekking Porter:</strong> $8 to $10 USD per day from the group.</li>
                    <li><strong>Overland 4WD Driver:</strong> $10 to $15 USD total per vehicle journey.</li>
                  </ul>
                  Total gratuity per trekker in a small group generally averages $100 to $140 USD for the 9-day trek.
                </p>
              </div>
            </div>

            <!-- Accordion 21 -->
            <div class="details-item" style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #ffffff;">
              <div class="details-header" style="padding: 16px 20px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #f8fafc; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <strong style="color: #0f172a; font-size: 1.05rem;">21. Luggage Storage in Kathmandu &amp; Duffel Weight Limits</strong>
                <span class="accordion-arrow" style="color: #64748b;">▾</span>
              </div>
              <div class="details-content" style="padding: 0 20px 18px 20px; font-size: 0.95rem; color: #334155; line-height: 1.65; border-top: 1px solid #f1f5f9;">
                <p style="margin-top: 14px; margin-bottom: 10px;">
                  You do not need to carry your non-trekking travel clothes, formal wear, or excess luggage onto the mountain trail. Our partner hotel in Kathmandu provides 100% free, secure luggage storage while you are trekking in Solukhumbu.
                </p>
                <p style="margin: 0;">
                  Namaste Hiking Trek provides a heavy-duty, water-resistant 80-liter company duffel bag during your pre-trek briefing. Pack your trekking gear into this duffel bag (maximum 10 kg per trekker, as one porter carries two bags up to 20 kg total). You will carry your personal daypack (30–38L) with daily water, camera, rain jacket, sunscreen, and valuables (weighing approx. 4–6 kg).
                </p>
              </div>
            </div>

          </div>
        </section>
`;
}

module.exports = { getDetailsSection };

