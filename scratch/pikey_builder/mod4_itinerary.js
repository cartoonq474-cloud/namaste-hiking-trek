// Module 4: Section 2 - 9-Day Itinerary with Interactive Accordions
function getItinerarySection() {
  return `
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" style="margin-bottom: 50px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; gap: 12px;">
            <div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #ffedd5; color: #c2410c; border-radius: 8px; font-weight: 700;">02</span>
                <span class="pill pill-copper">Day by Day Plan</span>
              </div>
              <h2 style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">9-Day Pikey Peak Trek Itinerary</h2>
            </div>
            <div>
              <button id="toggle-all-itinerary" class="btn btn-sm btn-outline" style="border: 1px solid #cbd5e1; background: #ffffff; color: #475569; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 600;">Expand All Days</button>
            </div>
          </div>

          <!-- Itinerary Summary Box -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; margin-bottom: 25px; font-size: 0.95rem; color: #475569; line-height: 1.6;">
            <strong>Route Sequence:</strong> Kathmandu (1,400 m) &rarr; Dhap Bazaar (2,850 m) &rarr; Jhapre (2,920 m) &rarr; Pikey Base Camp (3,640 m) &rarr; <strong>Pikey Peak Summit (4,065 m)</strong> &rarr; Jasmane Bhanjyang (3,550 m) &rarr; Junbesi (2,700 m) &rarr; Phaplu (2,469 m) &rarr; Kathmandu (1,400 m).
          </div>

          <!-- Day-by-Day Accordion Cards -->
          <div class="itinerary-accordion-group" style="display: flex; flex-direction: column; gap: 16px;">

            <!-- Day 1 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 1</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Arrival in Kathmandu (1,400 m / 4,593 ft) &amp; Trek Preparation</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Max Altitude: 1,400 m / 4,593 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Kathmandu Hotel (Thamel)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Welcome Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Upon arrival at Tribhuvan International Airport (TIA) in Kathmandu, our airport representative will warmly welcome you with traditional khata scarves and transfer you to your hotel in Thamel via private vehicle. The rest of the day allows you to rest, recover from international flights, and explore the bustling streets, cafes, and outdoor gear shops of Thamel.
                  </p>
                  <p style="margin: 0;">
                    In the late afternoon or evening, you will meet your licensed Sherpa trekking guide for a comprehensive pre-trek briefing. We will inspect your personal equipment, ensure appropriate warm layers for the summit sunrise, finalize TIMS and local permit documentation, and answer any logistical questions before enjoying a welcome dinner of authentic Nepali cuisine.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 2 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 2</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Scenic Overland Drive: Kathmandu to Dhap Bazaar (2,850 m / 9,350 ft)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Max Altitude: 2,850 m / 9,350 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Drive Time: ~8–9 hrs (~240 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Teahouse / Lodge in Dhap</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    We depart Kathmandu early in the morning by private 4WD Scorpio Jeep or comfortable overland vehicle, traveling southeast along the scenic BP Highway. The route follows the beautiful Sun Koshi River valley, passing terraced fields, vibrant subtropical villages, and riverside settlements like Ghurmi. After crossing the river, the road begins ascending through Okhaldhunga into the higher mid-hills of the lower Solukhumbu region.
                  </p>
                  <p style="margin: 0;">
                    As the elevation rises, terraced farmlands give way to pine and rhododendron forests. We arrive in Dhap Bazaar (approx. 2,850 m) in the late afternoon. Dhap is a bustling ridge settlement that serves as the gateway to the Pikey Peak trail. This first night above 2,800 m gives your body its initial exposure to altitude, so we advise staying well-hydrated and enjoying an early night.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 3 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 3</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Trek from Dhap Bazaar to Jhapre (2,820–2,920 m / 9,580 ft)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Max Altitude: 2,920 m / 9,580 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Walking Time: 4–6 hrs (~13 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Net Change: +70 m (gentle undulation)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Teahouse / Lodge in Jhapre</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    After a hearty breakfast, we begin the walking portion of our expedition. The trail leaves Dhap along a wide ridge trail offering panoramic views of the northern Himalayan peaks, including the prominent white pyramid of Numbur Himal. The terrain features gentle ascents and descents through pine woodlands, open pastures, and small traditional homesteads.
                  </p>
                  <p style="margin: 0;">
                    We pass several Buddhist chortens and stone mani walls inscribed with sacred mantras before arriving at the serene ridge village of Jhapre (approx. 2,920 m). Jhapre features an old Buddhist monastery, apple orchards, and peaceful teahouses. In clear afternoon weather, you can catch your first glimpse of the Everest range rising in the far distance above the ridges.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 4 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 4</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Trek from Jhapre to Pikey Peak Base Camp (3,640 m / 11,942 ft)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Max Altitude: 3,640 m / 11,942 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Walking Time: 5–6 hrs (~14 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Net Ascent: ~720 m</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Teahouse / Lodge near Pikey Base Camp</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Today is the main climbing stage of the trek, ascending approximately 720 meters. We start from Jhapre climbing steadily through ancient moss-draped rhododendron, hemlock, and fir forests. In the spring months (March–May), these slopes burst into intense shades of red, pink, and white blossoms. Along the way, we pass long mani walls and occasional summer yak pastures known as kharkas.
                  </p>
                  <p style="margin: 0;">
                    As we cross the alpine tree line, the landscape opens dramatically into rolling grassy meadows with panoramic vistas on both sides of the ridge. We reach Pikey Peak Base Camp (approx. 3,640 m) by early afternoon. The lodges here are simple, warm, and situated right beneath the summit ridge. After a hot lunch, you can take a gentle acclimatization walk nearby. We recommend preparing your summit daypack, headlamp, and warm layers before an early dinner.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 5 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #059669; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 5 &bull; SUMMIT</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Pre-Dawn Climb to Pikey Peak Summit (4,065 m) for Sunrise; Trek to Jasmane Bhanjyang (3,550 m)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #ecfdf5; color: #065f46; font-size: 0.8rem; font-weight: 700; padding: 3px 10px; border-radius: 4px;">Summit High: 4,065 m / 13,337 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Overnight Alt: 3,550 m / 11,647 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Walking Time: 5–7 hrs (~11 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Teahouse in Jasmane Bhanjyang</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    This is the crowning highlight of the journey. We awake around 4:00 AM, equip our headlamps and warmest down layers, and begin the steep, steady hike (1.5 to 2 hours) up the grassy switchbacks to the summit of Pikey Peak (approx. 4,065 m / 13,337 ft). As dawn breaks, you will stand at the prayer-flag draped stone cairn to witness one of the most magnificent sunrise spectacles on earth.
                  </p>
                  <p style="margin-bottom: 12px;">
                    The first rays of sunlight illuminate the snow-clad summits of <strong>Mount Everest (8,848 m), Kanchenjunga (8,586 m), Lhotse (8,516 m), Makalu (8,485 m), Cho Oyu (8,188 m), and Shishapangma (8,027 m)</strong>, alongside Thamserku, Mera Peak, Chamlang, Gaurishankar, and the Langtang Himal. This is the very vista that Sir Edmund Hillary proclaimed his absolute favorite in Nepal.
                  </p>
                  <p style="margin: 0;">
                    After ample time for photography, soaking in the panoramic grandeur, and hanging personal prayer flags, we descend back to base camp for a well-deserved hot breakfast. We then pack our gear and follow a scenic ridgeline descent toward Jasmane Bhanjyang (approx. 3,550 m) or Lhamuje, enjoying views of forested valleys and rolling Himalayan foothills.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 6 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 6</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Trek from Jasmane Bhanjyang to Junbesi (2,680–2,700 m / 8,858 ft) &amp; Optional Thupten Chholing Monastery</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Destination Altitude: ~2,700 m / 8,858 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Walking Time: 5–6 hrs (~12 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Net Descent: ~850 m</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Teahouse / Lodge in Junbesi</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Leaving the high ridge behind, we embark on an extended descent through tranquil fir, oak, and dense rhododendron forests. The air warms perceptibly and oxygen levels increase as we descend into the sheltered, fertile Junbesi valley. Along the trail, mountain streams power stone-enclosed prayer wheels that spin continuously day and night.
                  </p>
                  <p style="margin: 0;">
                    We arrive at Junbesi (approx. 2,700 m), widely regarded as one of the oldest, cleanest, and most culturally authentic Sherpa villages in Solukhumbu. After lunch, hikers with sufficient energy can make an optional round-trip walking excursion (approx. 3–4 hours) up the valley to <strong>Thupten Chholing Monastery</strong>. Founded in the late 1960s by the venerable Kyabje Trulshik Rinpoche, this monastery is home to hundreds of Tibetan Buddhist monks and nuns, and serves as a major regional center for meditation and sacred ceremonies.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 7 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 7</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Trek from Junbesi to Phaplu (2,469 m / 8,100 ft)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Destination Altitude: ~2,469 m / 8,100 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Walking Time: 3–5 hrs (~10 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Net Descent: ~230 m</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Mountain Lodge / Hotel in Phaplu</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast, Lunch, Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Our final day on the trail is a relaxed, gentle walk. We follow the Junbesi Khola downstream, crossing suspension bridges and passing through traditional rural farmland, apple orchards, and stone-fenced pastures. The trail climbs gently past Salung and Benighat, offering pleasant valley views before entering Phaplu (approx. 2,469 m).
                  </p>
                  <p style="margin: 0;">
                    Phaplu features a local airstrip, a well-equipped hospital founded by Sir Edmund Hillary's Himalayan Trust, and comfortable mountain lodges. In the evening, we celebrate the successful completion of the Pikey Peak Trek with our dedicated Sherpa guide and porters. This provides a traditional opportunity to thank the crew and share a celebratory meal and customary gratuities.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 8 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 8</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Scenic Overland Drive: Phaplu to Kathmandu (1,400 m / 4,593 ft)</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Destination Altitude: 1,400 m / 4,593 ft</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Drive Time: ~8–10 hrs (~270 km)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Accommodation: Kathmandu Hotel (Thamel)</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast &amp; Farewell Dinner</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Following breakfast, we board our private 4WD Jeep for the overland drive back to Kathmandu. The journey passes through Salleri, the district headquarters of Solukhumbu, before winding down through the hills toward Okhaldhunga and rejoined the paved BP Highway along the Sun Koshi River.
                  </p>
                  <p style="margin: 0;">
                    We make lunch and refreshment stops along the highway, arriving back in Kathmandu by late afternoon or early evening. After checking into your hotel, you can enjoy a long-awaited hot shower, relax, or pick up local handicrafts. In the evening, Namaste Hiking Trek hosts a celebratory farewell dinner where you can reminisce about your Himalayan summit sunrise.
                  </p>
                </div>
              </div>
            </div>

            <!-- Day 9 -->
            <div class="itinerary-day-card" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="itinerary-header" style="padding: 18px 24px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; background: #ffffff; user-select: none;" onclick="this.parentElement.classList.toggle('active');">
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                  <span style="background: #0f172a; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">DAY 9</span>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">Final International Departure from Kathmandu</h3>
                </div>
                <span class="accordion-arrow" style="font-size: 1.2rem; color: #64748b; transition: transform 0.2s ease;">▾</span>
              </div>
              <div class="itinerary-body" style="padding: 0 24px 20px 24px; border-top: 1px solid #f1f5f9;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; margin-bottom: 16px;">
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Activity: Hotel Checkout &amp; Airport Transfer</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Transfer: Private Vehicle</span>
                  <span style="background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 600; padding: 3px 10px; border-radius: 4px;">Meals: Breakfast</span>
                </div>
                <div style="font-size: 0.95rem; line-height: 1.65; color: #334155;">
                  <p style="margin-bottom: 12px;">
                    Enjoy your final breakfast at the hotel. Depending on your flight departure schedule, you may have free time for last-minute souvenir shopping in Thamel or a visit to Kathmandu's historic Durbar Square or Swayambhunath (Monkey Temple).
                  </p>
                  <p style="margin: 0;">
                    Approximately three hours prior to your international flight departure, our representative will transfer you to Tribhuvan International Airport (TIA) in a private vehicle. As you board your flight home, you will carry unforgettable memories of the 360-degree sunrise over Mount Everest and the sacred Sherpa heartlands of Solukhumbu.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
`;
}

module.exports = { getItinerarySection };

