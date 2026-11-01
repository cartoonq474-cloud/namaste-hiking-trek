const fs = require('fs');

const icons = JSON.parse(fs.readFileSync('scratch/ebc_icons.json', 'utf8'));

const chevronSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const checkBubbleSvg = `<div class="detail-check-bubble"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>`;

function getIconContainer(id) {
  const raw = icons[id] || '';
  const svgMatch = raw.match(/<svg[\s\S]*?<\/svg>/);
  const mainSvg = svgMatch ? svgMatch[0] : '';
  return `<div class="detail-icon-container">\n                        ${mainSvg}\n                        ${checkBubbleSvg}\n                      </div>`;
}

const h4Style = `style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;"`;
const ulStyle = `style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);"`;
const proTipStyle = `style="background: #f0fdf4; border-left: 4px solid #10B981; padding: 14px 18px; border-radius: 6px; margin: 16px 0;"`;

const itemsData = [
  {
    id: "accommodation",
    title: "Accommodation for the Everest View Trek",
    content: `
                      <p>Accommodation along the Everest View Trek route transitions from a quality tourist-standard hotel in Kathmandu to authentic, locally operated mountain teahouses in the Khumbu Valley. Because the Everest View Trek remains in the lower and middle Khumbu (Lukla, Phakding, and Namche Bazaar), trekkers enjoy some of the highest-standard teahouses and lodge amenities available anywhere in the Himalayas.</p>

                      <h4 ${h4Style}>What to Expect in Kathmandu for Accommodation?</h4>
                      <p>Your pre-trek and post-trek accommodation in Kathmandu is typically arranged in a comfortable 3-star tourist hotel in the vibrant Thamel district. Located within easy walking distance of international restaurants, gear shops, banks, and bakeries, your hotel provides an ideal resting base before flying into the mountains. Standard Kathmandu hotel amenities include:</p>
                      <ul ${ulStyle}>
                        <li>Private en-suite bathroom with 24-hour hot water shower</li>
                        <li>High-speed complimentary Wi-Fi and multiple electrical charging outlets</li>
                        <li>Comfortable western spring mattress with clean linens and duvet</li>
                        <li>Daily buffet breakfast with Nepali and continental choices</li>
                        <li>Complimentary secure luggage storage for your city clothes and suitcases while trekking</li>
                      </ul>

                      <h4 ${h4Style}>What Is a Khumbu Teahouse on the Everest View Route?</h4>
                      <p>A teahouse is a family-run mountain lodge providing private sleeping rooms, home-cooked meals, and a communal dining hall. In the lower Khumbu, teahouses have evolved into sturdy multi-story stone and timber lodges offering comfortable hospitality, solar lighting, and hearty dining.</p>

                      <h4 ${h4Style}>Why Everest View Trek Has the Best Lodges in the Region</h4>
                      <p>Unlike expeditions heading to higher elevations such as Lobuche (4,940 m) or Gorak Shep (5,164 m) where resources are extremely constrained, the Everest View Trek operates entirely between 2,610 m and 3,880 m. Settlements like Namche Bazaar and Phakding enjoy lower logistical barriers, resulting in:</p>
                      <ul ${ulStyle}>
                        <li>More spacious bedrooms with solid wooden beds and proper foam mattresses</li>
                        <li>Wider availability of rooms with attached private flush toilets</li>
                        <li>Reliable local hydroelectricity powering dining areas and bedroom lighting</li>
                        <li>Extensive food menus featuring fresh bakery items, espresso, and diverse dishes</li>
                      </ul>

                      <h4 ${h4Style}>Room Configurations & Private Rooms</h4>
                      <p>Standard teahouse rooms are twin-sharing, featuring two single beds with clean sheets, pillows, and heavy blankets. Solo travelers who prefer a private single room can easily request one in advance, especially during the spring and autumn seasons when early reservations secure dedicated single occupancy in Phakding and Namche Bazaar.</p>

                      <h4 ${h4Style}>Bathroom Facilities & Hot Showers</h4>
                      <p>In Phakding and Namche Bazaar, lodges feature both western-style sit-down flush toilets and clean squat toilets. Attached en-suite bathrooms are widely available in Namche Bazaar lodges. Gas-heated hot showers are available at all lodges along the route for a modest fee of NPR 400 to NPR 600 (USD 3 to USD 5). Showers are private and provide reliable hot water after a rewarding day on the trail.</p>

                      <h4 ${h4Style}>Staying Warm at Night: Heating & Sleeping Bags</h4>
                      <p>Teahouse dining rooms are heated every evening by a central stove burning wood or dried yak dung, creating a cozy social atmosphere. However, bedrooms are intentionally unheated to prevent fire hazards in timber structures. While lodges supply thick quilts, bringing a 4-season sleeping bag (rated to -10°C) or a thermal fleece sleeping bag liner guarantees warm, peaceful rest throughout the journey.</p>
`
  },
  {
    id: "food",
    title: "Available Food & Dining on the Everest View Trek",
    content: `
                      <p>Dining in the Everest region is a memorable highlight of the trekking experience. Teahouses along the Lukla–Namche corridor maintain extensive multi-page menus that combine wholesome traditional Nepali fare with popular international mountain dishes, prepared fresh to order by experienced lodge cooks.</p>

                      <h4 ${h4Style}>Meal Inclusions with Namaste Hiking Trek</h4>
                      <p>All standard packages include three substantial, freshly cooked meals every trekking day: hearty breakfasts, energetic trail lunches, and warming dinners. In addition, morning and evening hot drinks (black tea, milk tea, ginger lemon tea, or coffee) are provided with your meals.</p>

                      <h4 ${h4Style}>Traditional Nepali Dal Bhat: 24-Hour Mountain Fuel</h4>
                      <p>The undisputed staple of Himalayan trekking is Nepali <strong>Dal Bhat Tarkari</strong>. This balanced, nutrient-dense platter consists of:</p>
                      <ul ${ulStyle}>
                        <li>Steamed white or brown rice (high-carbohydrate energy)</li>
                        <li>Simmered lentil soup (protein-rich dal)</li>
                        <li>Seasonal spiced vegetable curry (potatoes, cauliflower, cabbage, beans)</li>
                        <li>Sautéed mountain spinach (saag) and homemade tangy tomato pickle (achar)</li>
                        <li>Crisp lentil cracker (papad)</li>
                      </ul>
                      <p>Best of all, Dal Bhat comes with <strong>complimentary unlimited refills</strong> of rice, dal, and curry, making it the most satisfying, stamina-building choice on the trail.</p>

                      <h4 ${h4Style}>Western, Asian & Sherpa Specialties Available</h4>
                      <p>If you crave variety, lodge kitchens offer an impressive selection of international favorites:</p>
                      <ul ${ulStyle}>
                        <li><strong>Sherpa Cuisine:</strong> Traditional Shakpa (rich vegetable dumpling stew), Tsampa porridge, and Tibetan flatbread with local honey.</li>
                        <li><strong>Steamed & Fried Momos:</strong> Handcrafted Tibetan dumplings stuffed with seasoned vegetables, cheese, or potatoes.</li>
                        <li><strong>Noodles & Rice:</strong> Veg chow mein, fried rice, thukpa noodle soup, and spicy macaroni.</li>
                        <li><strong>Potatoes & Bakes:</strong> Sherpa potato pancakes, Swiss-style rosti with fried egg, cheese potato bakes, and freshly baked apple pie in Namche.</li>
                        <li><strong>Pizza & Pasta:</strong> Freshly baked wood-fired style pizzas topped with yak cheese and tomato spaghetti.</li>
                      </ul>

                      <h4 ${h4Style}>Breakfast Routine on the Trail</h4>
                      <p>Breakfast is ordered the night before to ensure prompt preparation before the morning departure. Options include warm oatmeal porridge with apples and honey, muesli with warm milk, pancakes, French toast, Tibetan bread, and eggs prepared to your liking (boiled, fried, poached, or scrambled).</p>

                      <h4 ${h4Style}>Meat Safety Advisory in Sacred Sagarmatha</h4>
                      <p>Sagarmatha National Park is a sacred Buddhist sanctuary where animal slaughter is strictly prohibited by religious law. Consequently, all meat products (chicken, buff, pork) are slaughtered in low-altitude valleys and transported on foot or by pack animals to Namche Bazaar over several days without refrigeration. To avoid gastrointestinal illness, <strong>we strongly advise eating strictly vegetarian meals</strong> while trekking in the Khumbu.</p>

                      <h4 ${h4Style}>Safe Drinking Water & Environmental Protection</h4>
                      <p>Staying thoroughly hydrated (3 to 4 liters daily) is critical for acclimatization and vitality. To eliminate single-use plastic waste in Sagarmatha National Park, teahouses provide boiled drinking water for a small charge (NPR 150–300 per liter). We advise carrying two 1-liter reusable wide-mouth Nalgene bottles, complemented by water purification tablets (Aquatabs or chlorine dioxide) or a portable UV purifier.</p>
`
  },
  {
    id: "best-time",
    title: "Best Time to Trek: Seasonal Weather Breakdown",
    content: `
                      <p>The Everest View Trek can be undertaken comfortably across nine months of the year due to its moderate maximum altitude of 3,880 meters. However, the two definitive peak seasons are <strong>Spring (March to May)</strong> and <strong>Autumn (September to November)</strong>, each offering distinct mountain aesthetics and optimal trekking conditions.</p>

                      <h4 ${h4Style}>Spring Season (March to May): Wildflowers & Vibrant Atmosphere</h4>
                      <p>Spring brings gradually warming temperatures, longer daylight hours, and blooming rhododendron, magnolia, and pine forests along the Dudh Koshi Valley. Daytime temperatures in Namche Bazaar average between 10°C and 16°C, creating ideal walking conditions. Spring is also the bustling Everest climbing expedition season, giving Namche Bazaar an exciting international mountaineering buzz.</p>

                      <h4 ${h4Style}>Autumn Season (September to November): Crystal-Clear Panoramas</h4>
                      <p>Autumn is widely considered the finest season for mountain photography and unobstructed panoramic views. Following the summer monsoon, atmospheric dust and haze are completely washed away, leaving deep cobalt skies and razor-sharp views of Mount Everest, Ama Dablam, and Thamserku. Daytime temperatures range from 8°C to 15°C, while nights drop to around 0°C to -4°C in Namche.</p>

                      <h4 ${h4Style}>Winter Trekking (December to February): Crisp Panoramas & Tranquil Trails</h4>
                      <p>While high passes and Everest Base Camp become bitterly cold in winter, the 7-day Everest View Trek remains completely feasible and delightful. Days are sunny, dry, and exceptionally clear, with temperatures between 5°C and 10°C during walking hours. Nighttime temperatures drop to -8°C to -10°C in Namche. Trails and teahouses are peaceful, free from crowds, offering an intimate Himalayan experience.</p>

                      <h4 ${h4Style}>Monsoon Season (June to August): Lush Greenery & Flight Realities</h4>
                      <p>The summer monsoon brings daily rainfall, heavy valley cloud cover, and frequent Lukla flight delays. While the lower valleys are lush and green with roaring rivers and waterfalls, mountain visibility is inconsistent, making this season less recommended for sightseers.</p>

                      <h4 ${h4Style}>Monthly Climate & Weather Overview for Namche Bazaar (3,440 m)</h4>
                      <div class="table-responsive" style="margin: 16px 0;">
                        <table class="custom-trek-table" style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                          <thead>
                            <tr style="background: #F1F5F9; color: var(--color-primary-navy);">
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Season / Month</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Day Temp (°C)</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Night Temp (°C)</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Mountain Visibility</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Trail Conditions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>March – April</strong> (Spring)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">10°C to 15°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">-2°C to 2°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Excellent mornings</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Dry trails, blooming rhododendrons</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>May</strong> (Late Spring)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">14°C to 18°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">4°C to 7°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Good, afternoon haze</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Warm, green valleys, dry paths</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>June – August</strong> (Monsoon)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">16°C to 20°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">8°C to 11°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Intermittent / Clouds</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Wet, muddy sections, lush flora</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>September – October</strong> (Peak Autumn)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">11°C to 16°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">-1°C to 4°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Exceptional (10/10)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Crisp, stable, optimal footing</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>November</strong> (Late Autumn)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">7°C to 12°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">-5°C to -1°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Crystal clear skies</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Dry, colder mornings & evenings</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>December – February</strong> (Winter)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">4°C to 9°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">-9°C to -4°C</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Spectacular, sunny days</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Cold, peaceful, occasional snow dusting</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
`
  },
  {
    id: "typical-day",
    title: "A Typical Day on the Everest View Trek",
    content: `
                      <p>Trekking in the Himalayas follows a natural, invigorating rhythm tuned to mountain daylight and weather patterns. Clear mountain visibility is highest during early morning hours, so daily schedules are planned to maximize scenic viewpoints, ensure unhurried walking paces, and provide ample rest.</p>

                      <h4 ${h4Style}>6:30 AM – Morning Wake-Up & Duffle Packing</h4>
                      <p>Your trekking day begins with gentle morning light. You pack your main duffle bag with clothing and sleeping equipment before leaving it outside your room for our porters to transport. You then prepare your personal daypack with drinking water, warm layers, waterproof shell, camera, sunscreen, and lip balm.</p>

                      <h4 ${h4Style}>7:00 AM – 7:45 AM – Hearty Lodge Breakfast</h4>
                      <p>Enjoy a warm, cooked breakfast in the dining hall with freshly brewed tea or coffee. Your guide checks in with everyone, reviews health status, and summarizes the day's trail elevation profile, walking duration, and upcoming milestones.</p>

                      <h4 ${h4Style}>8:00 AM – 11:30 AM – Scenic Morning Trek</h4>
                      <p>You hit the trail when air is crisp and Himalayan vistas are at their sharpest. Walking is conducted at an even, controlled cadence ("bistari, bistari" in Nepali, meaning slowly and steadily). Regular 10-minute pauses allow you to photograph stupas, suspension bridges, prayer flags, and snow-capped peaks, hydrate, and adjust clothing layers.</p>

                      <h4 ${h4Style}>11:30 AM – 1:00 PM – Midday Trailside Lunch</h4>
                      <p>Around noon, the group stops at a scenic trailside lodge in settlements like Ghat, Monjo, or Syangboche. A warm lunch—such as hot Dal Bhat, vegetable noodles, or fried rice—is enjoyed on sunlit outdoor terraces overlooking the roaring Dudh Koshi River or alpine ridges.</p>

                      <h4 ${h4Style}>1:00 PM – 3:30 PM – Afternoon Walking & Lodge Arrival</h4>
                      <p>After lunch, the trek continues for another 2 to 3 hours to reach your overnight destination (Phakding or Namche Bazaar). Upon arrival, check into your room, unpack essentials, and enjoy a welcoming cup of hot lemon ginger tea in the dining hall.</p>

                      <h4 ${h4Style}>3:30 PM – 6:00 PM – Village Exploration & Acclimatization Walks</h4>
                      <p>Afternoons offer flexible personal time. In Namche Bazaar, you can explore traditional Sherpa bakeries, visit the Sagarmatha National Park Visitor Centre, browse local artisan jewelry and woolen markets, or enjoy an espresso at a local café while taking in views of Kongde Ri.</p>

                      <h4 ${h4Style}>6:00 PM – 8:30 PM – Warm Dining Hall Dinner & Evening Briefing</h4>
                      <p>As evening falls and mountain air cools, everyone gathers in the dining room heated by the central stove. A hot dinner is served, followed by card games, reading, sharing stories, and discussing photography. Your lead guide conducts evening oxygen saturation checks using a digital pulse oximeter and briefs the team on tomorrow's schedule.</p>

                      <h4 ${h4Style}>9:00 PM – Lights Out & Restful Sleep</h4>
                      <p>By 9:00 PM, lodges quiet down as trekkers retreat to their rooms for a deep, restorative night's sleep tucked inside warm sleeping bags.</p>
`
  },
  {
    id: "permits",
    title: "Permits for Everest View Trek",
    content: `
                      <p>Entering the protected Everest (Khumbu) region requires two official government permits designed to preserve Sagarmatha's fragile alpine ecosystem and fund local Sherpa community infrastructure. All permits are organized and covered under our full-service packages.</p>

                      <h4 ${h4Style}>1. Sagarmatha National Park Entry Permit</h4>
                      <p>Sagarmatha National Park was established in 1976 and designated a UNESCO World Heritage site in 1979. The permit is issued by Nepal's Department of National Parks and Wildlife Conservation. Fees are:</p>
                      <ul ${ulStyle}>
                        <li>Foreign Nationals: NPR 3,000 (~USD 25) per person</li>
                        <li>SAARC Citizens: NPR 1,500 (~USD 12) per person</li>
                        <li>Children under 10 years: Free of charge</li>
                      </ul>
                      <p>This permit is officially verified and stamped at the park entrance checkpoint in Monjo on Day 2 of the trek.</p>

                      <h4 ${h4Style}>2. Khumbu Pasang Lhamu Rural Municipality Permit</h4>
                      <p>Introduced by the local autonomous municipality to directly benefit Khumbu trail maintenance, safety infrastructure, waste management, and local health posts, this permit costs NPR 3,000 (~USD 25) for foreign travelers. It is issued upon arrival at the Lukla municipal checkpoint.</p>

                      <h4 ${h4Style}>Do You Need a TIMS Card for Everest?</h4>
                      <p>No. While other trekking regions in Nepal (such as Annapurna or Langtang) require the Trekkers' Information Management System (TIMS) card, the Khumbu region replaced TIMS with the Khumbu Pasang Lhamu Rural Municipality Permit. You do not need to acquire a TIMS card for the Everest View Trek.</p>

                      <h4 ${h4Style}>Hassle-Free Organization by Namaste Hiking Trek</h4>
                      <p>All permit fees, government taxes, paperwork, and checkpoint registrations are 100% included in your trek package. Our team collects your passport details and passport photos during preparation, ensuring seamless, queue-free entry at every military and park checkpoint along the route.</p>
`
  },
  {
    id: "acclimatization",
    title: "Acclimatization Strategy for the Everest View Trek",
    content: `
                      <p>Acclimatization is the natural physiological process through which your body adapts to the lower atmospheric pressure and decreased oxygen availability encountered at higher elevations. Proper acclimatization ensures comfort, stamina, and safety throughout your journey.</p>

                      <h4 ${h4Style}>The Science of Altitude at Namche Bazaar (3,440 m)</h4>
                      <p>At Namche Bazaar, atmospheric pressure drops to approximately 68% of sea level. This means that while each breath still contains 21% oxygen, the lower air pressure delivers fewer oxygen molecules into your bloodstream. Your body compensates by increasing respiration rate, elevating heart rate, and stimulating red blood cell production.</p>

                      <h4 ${h4Style}>The "Climb High, Sleep Low" Golden Rule</h4>
                      <p>Our itinerary strictly adheres to the internationally recognized high-altitude medical protocol of "climb high, sleep low." On Day 3 and Day 4, you undertake gentle, scenic day walks up to 3,550 m (Sagarmatha Visitor Ridge) and 3,880 m (Hotel Everest View), stimulate your body's adaptation mechanism, and then descend back to Namche Bazaar (3,440 m) to sleep. This significantly enhances deep sleep quality and prevents altitude symptoms.</p>

                      <h4 ${h4Style}>Why 3 Nights in Namche Bazaar Is Our Signature Safety Advantage</h4>
                      <p>Many hurried operators rush clients out of Namche after only one or two nights. Namaste Hiking Trek schedules three consecutive nights in Namche Bazaar (Days 2, 3, and 4). This generous pacing provides an unhurried, luxurious acclimatization buffer, allowing your body to stabilize fully before undertaking the panoramic ridge walk to Khumjung and Khunde.</p>

                      <h4 ${h4Style}>Hydration, Nutrition & Guide Oximeter Checks</h4>
                      <p>To support natural altitude adaptation, adhere to these simple, vital practices:</p>
                      <ul ${ulStyle}>
                        <li>Drink 3 to 4 liters of clean fluids daily (water, ginger tea, garlic soup)</li>
                        <li>Maintain a high-carbohydrate diet with regular meals of Dal Bhat, porridge, and potatoes</li>
                        <li>Strictly avoid alcohol, tobacco, and sedatives during the ascending phase</li>
                        <li>Daily health monitoring: Our lead guides carry pulse oximeters to measure oxygen saturation (SpO2) and pulse rate every evening</li>
                      </ul>

                      <h4 ${h4Style}>Diamox (Acetazolamide) Advisory</h4>
                      <p>Diamox is a widely used carbonic anhydrase inhibitor that speeds up natural acclimatization by slightly acidifying the blood and encouraging deeper breathing. While most healthy trekkers on the Everest View Trek do not require medication due to our gentle pacing, you may carry Diamox (125 mg to 250 mg twice daily) as a precaution after consulting with your travel doctor.</p>
`
  },
  {
    id: "difficulty",
    title: "Difficulty and Physical Fitness Required for Everest View Trek",
    content: `
                      <p>The 7-day Everest View Trek is graded as <strong>Moderate</strong>. Unlike the 14-day Everest Base Camp route or technical high passes (Cho La, Renjo La), this trek follows well-established stone trails and involves no glacier walking, technical climbing, or extreme altitudes (the maximum sleeping altitude is 3,440 m in Namche Bazaar).</p>

                      <h4 ${h4Style}>Physical Demands & Daily Walking Profile</h4>
                      <p>Trekkers walk an average of 4 to 6 hours per day at an unhurried pace. The trail features stone stairs, gradual riverside paths, suspension bridges, and sustained uphill ascents—most notably the 2.5-hour climb from the Hillary Bridge up through pine forests to Namche Bazaar (a continuous gain of approximately 600 vertical meters).</p>

                      <h4 ${h4Style}>Who Can Successfully Complete This Trek?</h4>
                      <p>This route is accessible to first-time Himalayan hikers, active seniors, couples, and families with children aged 8 and above who maintain average physical fitness and enjoy weekend walking, hiking, or regular cardio exercise.</p>

                      <h4 ${h4Style}>Recommended 6-Week Pre-Trek Training Schedule</h4>
                      <div class="table-responsive" style="margin: 16px 0;">
                        <table class="custom-trek-table" style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                          <thead>
                            <tr style="background: #F1F5F9; color: var(--color-primary-navy);">
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Training Phase</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Recommended Weekly Activities</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Key Objective</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Weeks 1 – 2</strong> (Base Building)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Brisk walking 45 min, 3x weekly; stair climbing or gentle incline treadmill.</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Conditioning calf muscles, ankles, and cardiovascular baseline.</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Weeks 3 – 4</strong> (Strength & Endurance)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Stair climbing with 4–5 kg backpack 30 min, 2x weekly; weekend outdoor hikes (8–10 km); squats and lunges.</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Strengthening quadriceps, hamstrings, and core for uphill switchbacks and descents.</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Weeks 5 – 6</strong> (Peak & Taper)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">One long weekend hike (12–15 km) wearing your actual trekking boots; light jogging and stretching. Taper activity 4 days before flight.</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Breaking in footwear, verifying daypack comfort, arriving well-rested.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
`
  },
  {
    id: "culture",
    title: "Cultural Insights of the Khumbu: Sherpa Traditions & Heritage",
    content: `
                      <p>The Khumbu region is the sacred ancestral homeland of the Sherpa people (literally "People of the East"), who migrated from the Kham region of eastern Tibet over five centuries ago. Their rich Tibetan Buddhist traditions, mountaineering lore, and spiritual reverence for the Himalayas infuse every step of the journey with profound cultural meaning.</p>

                      <h4 ${h4Style}>Sacred Buddhist Monuments: Mani Stones, Chortens & Prayer Wheels</h4>
                      <p>Along the trail between Lukla, Phakding, and Namche, you will encounter numerous sacred stone monuments:</p>
                      <ul ${ulStyle}>
                        <li><strong>Mani Walls:</strong> Stone walls carved with the sacred mantra <em>"Om Mani Padme Hum"</em> (Hail to the Jewel in the Lotus). By Buddhist custom, <strong>always walk to the left of Mani walls and chortens</strong> (keeping the sacred monument on your right) in a clockwise direction.</li>
                        <li><strong>Chortens (Stupas):</strong> Dome-shaped Buddhist shrines symbolizing enlightenment, peace, and the protective energy of the valley.</li>
                        <li><strong>Prayer Wheels:</strong> Cylinders embossed with sacred mantras. Trekkers and locals spin them clockwise to spread blessings of compassion.</li>
                      </ul>

                      <h4 ${h4Style}>The Meaning of Five-Colored Tibetan Prayer Flags (Lungta)</h4>
                      <p>Strings of vibrant prayer flags flutter from suspension bridges, high ridges, and rooftops. Known as <em>Lungta</em> (Wind Horse), each color represents a fundamental cosmic element:</p>
                      <ul ${ulStyle}>
                        <li><strong>Blue:</strong> Sky and space</li>
                        <li><strong>White:</strong> Air and clouds</li>
                        <li><strong>Red:</strong> Fire and warmth</li>
                        <li><strong>Green:</strong> Water and nature</li>
                        <li><strong>Yellow:</strong> Earth and foundation</li>
                      </ul>
                      <p>As the mountain wind blows through the fabric, the prayers and mantras are carried across the valleys to bring peace, prosperity, and protection to all living beings.</p>

                      <h4 ${h4Style}>Historic Monasteries: Khumjung & Namche Gompas</h4>
                      <p>On Day 4, you visit the historic monastery in Khumjung (3,790 m), which houses a revered skull relic attributed to the legendary yeti. In Namche Bazaar, the local gompa offers an inspiring atmosphere for observing morning prayer rituals and spinning century-old bronze prayer wheels.</p>

                      <h4 ${h4Style}>Sherpa Village Life in Khumjung & Khunde</h4>
                      <p>Unlike trekking hubs that cater purely to tourists, Khumjung and Khunde offer authentic glimpses into daily Sherpa life. Here you see neat stone-walled potato and buckwheat fields, dry-stone homes with green tin roofs, the famous Khumjung Hillary School founded by Sir Edmund Hillary in 1961, and the Khunde Hospital established by the Himalayan Trust.</p>
`
  },
  {
    id: "route-alternatives",
    title: "Route Highlights & Alternatives: Everest View vs. Other Treks",
    content: `
                      <p>The Everest View Trek is specially designed for travelers seeking iconic Himalayan panoramas, Sherpa cultural immersion, and peaceful mountain walking without the extended physical demands of the full 14-day Everest Base Camp expedition.</p>

                      <h4 ${h4Style}>Key Advantages of the 7-Day Everest View Trek</h4>
                      <ul ${ulStyle}>
                        <li><strong>Short Time Commitment:</strong> Requires only 7 trip days, fitting easily into a one-week holiday or combined with a cultural tour of Kathmandu and Pokhara.</li>
                        <li><strong>Superior Vantage Point for Everest:</strong> The panoramic terrace of the world-famous Hotel Everest View (3,880 m) offers a sweeping, unobstructed vista of Mount Everest, Lhotse, Nuptse, and Ama Dablam that is actually wider and more photogenic than from Base Camp itself (where Everest's summit is obscured by the West Ridge and Nuptse).</li>
                        <li><strong>Maximum Sleeping Altitude of 3,440 m:</strong> Drastically reduces the risk of Acute Mountain Sickness (AMS) compared to sleeping at Gorak Shep (5,164 m).</li>
                        <li><strong>Premier Teahouse Standards:</strong> Enjoy the highest-comfort lodges, private bathrooms, and best bakeries in the region.</li>
                      </ul>

                      <h4 ${h4Style}>Everest Region Trek Comparison Table</h4>
                      <div class="table-responsive" style="margin: 16px 0;">
                        <table class="custom-trek-table" style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                          <thead>
                            <tr style="background: #F1F5F9; color: var(--color-primary-navy);">
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Trek Package</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Duration</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Max Elevation</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: center;">Difficulty</th>
                              <th style="padding: 10px; border: 1px solid #CBD5E1; text-align: left;">Best Suited For</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Everest View Trek</strong></td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">7 Days</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">3,880 m</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Moderate</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Beginners, families, seniors, time-limited travelers</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Classic Everest Base Camp</strong></td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">14 Days</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">5,545 m (Kala Patthar)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Strenuous</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Experienced hikers wanting the iconic Base Camp footprint</td>
                            </tr>
                            <tr>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;"><strong>Gokyo Lakes &amp; Cho La Pass</strong></td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">16 Days</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">5,368 m (Gokyo Ri)</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0; text-align: center;">Challenging</td>
                              <td style="padding: 9px; border: 1px solid #E2E8F0;">Adventurers wanting turquoise alpine lakes and glacier pass crossings</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
`
  },
  {
    id: "flight-lukla",
    title: "Tell Me About the Flight to Lukla",
    content: `
                      <p>The flight to Tenzing-Hillary Airport in Lukla (2,860 m) is widely renowned as one of the most exhilarating mountain aviation experiences in the world. Built by Sir Edmund Hillary and local Sherpas in 1964, the short airstrip carved into the mountainside serves as the historic gateway to the Khumbu Valley.</p>

                      <h4 ${h4Style}>Aircraft Types & Flight Characteristics</h4>
                      <p>Flights are operated by specialized STOL (Short Takeoff and Landing) twin-turboprop aircraft such as the De Havilland DHC-6 Twin Otter, Dornier 228, and LET L-410 Turbolet. These rugged aircraft seat between 14 and 18 passengers and are piloted by senior Himalayan captains with extensive alpine flight hours.</p>

                      <h4 ${h4Style}>Kathmandu vs. Ramechhap (Manthali) Departures</h4>
                      <p>During peak trekking seasons (April to May and October to November), the Civil Aviation Authority of Nepal (CAAN) directs all Lukla flight operations through Ramechhap Airport (Manthali) to reduce airspace congestion at Kathmandu's international airport. When this applies:</p>
                      <ul ${ulStyle}>
                        <li>Namaste Hiking Trek coordinates private vehicle transfer between your Kathmandu hotel and Ramechhap (approximately 4 to 5 hours driving on scenic highways).</li>
                        <li>Flight duration from Ramechhap to Lukla is a brief 15 to 20 minutes.</li>
                        <li>During off-peak months (March, September, winter), flights typically depart directly from Kathmandu domestic terminal (30 to 35 minutes flight time).</li>
                      </ul>

                      <h4 ${h4Style}>Weather Operations & Visual Flight Rules (VFR)</h4>
                      <p>Mountain flights operate exclusively under Visual Flight Rules (VFR). If clouds, low visibility, or strong winds occur in the Khumbu, flights are held until conditions clear. Operations take place in the early morning (6:00 AM to 11:00 AM) when mountain weather is calmest.</p>

                      <h4 ${h4Style}>The Vital Need for Buffer Contingency Days</h4>
                      <p>Because Lukla flights are strictly weather-dependent, <strong>we strongly recommend booking your international return flight home with at least 1 to 2 buffer days in Kathmandu after Day 7</strong>. A built-in buffer prevents weather delays in the mountains from causing missed international flights.</p>

                      <h4 ${h4Style}>Helicopter Alternatives</h4>
                      <p>In cases of extended fixed-wing delays, commercial passenger helicopters (Airbus H125 / B3e) can often fly under lower cloud ceilings. Upgrades to shared or chartered helicopters can be coordinated on-site by our Lukla airport representatives.</p>
`
  },
  {
    id: "age-groups",
    title: "Everest View Trek for Different Age Groups & Travelers",
    content: `
                      <p>Because the Everest View Trek features moderate elevations, excellent teahouse infrastructure, and a gentle daily walking pace, it is the most versatile and inclusive route in the Everest region, appealing to diverse age demographics and traveler styles.</p>

                      <h4 ${h4Style}>Family Trekking with Children & Teenagers</h4>
                      <p>The Everest View Trek is the premier choice for families wanting to introduce children (aged 8 and older) to the Himalayas. The short daily walking distances (3 to 5 hours), safe trails, captivating suspension bridges, friendly pack animals, and rich Sherpa cultural stops keep kids thoroughly engaged without exhausting them.</p>

                      <h4 ${h4Style}>Active Seniors & Older Hikers</h4>
                      <p>For mature travelers and seniors in good general health, this trek offers the ideal balance of adventure and comfort. You experience world-class views of Mount Everest and stay in comfortable lodges with attached bathrooms in Namche Bazaar, without subjecting your cardiovascular system to extreme high-altitude stress (above 4,000 m).</p>

                      <h4 ${h4Style}>Solo Trekkers (Male & Female)</h4>
                      <p>Solo travelers are warmly welcomed on our scheduled group departures, providing companionship, shared laughs, and new international friends. Alternatively, solo travelers can book a private guided trek for 100% personalized pacing and tailored attention. The Khumbu is renowned for its welcoming Sherpa community, low crime rate, and respectful culture.</p>

                      <h4 ${h4Style}>Couples & Honeymooners</h4>
                      <p>For couples seeking an unforgettable romantic adventure, watching the golden sunrise over Mount Everest and Ama Dablam from the terrace of Hotel Everest View is an unmatched memory. We ensure private twin/double rooms throughout your stay.</p>
`
  },
  {
    id: "extend-trip",
    title: "Extend Your Trip After the Everest View Trek",
    content: `
                      <p>Because the Everest View Trek takes only 7 days, many travelers choose to combine their mountain journey with other world-class cultural, wildlife, and adventure destinations across Nepal. Namaste Hiking Trek seamlessly coordinates all domestic extensions.</p>

                      <h4 ${h4Style}>Popular Extension Destinations in Nepal</h4>
                      <ul ${ulStyle}>
                        <li><strong>Chitwan National Park Jungle Safari (3 Days / 2 Nights):</strong> Journey to the subtropical lowlands of Chitwan. Experience jeep safaris, spot endangered greater one-horned rhinos, wild elephants, Bengal tigers, and glide along the Rapti River in traditional dugout canoes to observe gharial crocodiles.</li>
                        <li><strong>Pokhara Nature & Lake City (3 Days / 2 Nights):</strong> Relax beside tranquil Phewa Lake beneath the dramatic backdrop of the Annapurna Range and Machhapuchhre (Fishtail). Enjoy boating, visit the World Peace Pagoda, explore waterfalls, and enjoy vibrant lakeside cafes.</li>
                        <li><strong>Kathmandu Valley UNESCO World Heritage Tour (1–2 Days):</strong> Explore Kathmandu's ancient cultural landmarks, including the sacred Hindu temple of Pashupatinath, the colossal Buddhist stupa of Boudhanath, the hilltop "Monkey Temple" of Swayambhunath, and the medieval palace squares of Patan and Bhaktapur.</li>
                        <li><strong>Trishuli River White Water Rafting (1 Day):</strong> Add an adrenaline rush on your way between Kathmandu and Pokhara with Class III/IV river rafting on the scenic Trishuli River.</li>
                      </ul>
`
  },
  {
    id: "porter-limit",
    title: "Porter Weight Limit and Information for Everest View Trek",
    content: `
                      <p>Porters are the indispensable backbone of Himalayan trekking. Namaste Hiking Trek is firmly committed to ethical porter treatment, fair remuneration, and safe load limits in strict compliance with the International Porter Protection Group (IPPG) guidelines.</p>

                      <h4 ${h4Style}>Strict Baggage Allowance: 15 kg (33 lbs) Total per Trekker</h4>
                      <p>Domestic airlines operating the Lukla route enforce a mandatory baggage limit of <strong>15 kg (33 lbs) per passenger</strong>, comprising:</p>
                      <ul ${ulStyle}>
                        <li><strong>10 kg (22 lbs)</strong> for your main trekking duffle bag (carried by your porter)</li>
                        <li><strong>5 kg (11 lbs)</strong> for your personal daypack (carried by yourself)</li>
                      </ul>
                      <p>Our porters carry a maximum load of 20 to 22 kg, which is split equally between two trekkers (10 kg each in separate duffle bags). Excess baggage should be stored securely and free of charge at your hotel in Kathmandu.</p>

                      <h4 ${h4Style}>What Stays in Your Duffle Bag vs. What Stays in Your Daypack</h4>
                      <ul ${ulStyle}>
                        <li><strong>In Your Duffle Bag (Porter):</strong> Sleeping bag, extra clothing layers, spare trekking pants, evening lodge wear, toiletries, extra footwear, and replacement batteries. You will not have access to your duffle during the day until you reach your evening lodge.</li>
                        <li><strong>In Your Daypack (Carried by You):</strong> Water bottles, waterproof rain jacket and pants, warm fleece layer, camera/phone, passport and permits, cash, sunglasses, sunscreen, lip balm, and personal medication.</li>
                      </ul>

                      <h4 ${h4Style}>Ethical Porter Care Standards</h4>
                      <p>We ensure all our porters receive fair above-industry wages, comprehensive medical and evacuation insurance, warm mountain clothing, suitable trekking footwear, and proper accommodation and food in lodges on every departure.</p>
`
  },
  {
    id: "upgrade-heli",
    title: "Upgrade to Helicopters on the Everest View Trek",
    content: `
                      <p>For travelers seeking extra comfort, breathtaking aerial perspectives, or flexibility in avoiding fixed-wing Lukla flights, helicopter upgrades provide an exhilarating alternative.</p>

                      <h4 ${h4Style}>Scenic Helicopter Return from Namche Bazaar or Lukla</h4>
                      <p>After completing your excursion to Hotel Everest View and Khumjung, you can choose to fly back directly from Namche Bazaar (Syangboche helipad) or Lukla to Kathmandu by private or shared helicopter:</p>
                      <ul ${ulStyle}>
                        <li>Bypass the return trek from Namche to Lukla, saving walking time</li>
                        <li>Fly alongside towering Himalayan giants, enjoying aerial panoramas of Everest, Lhotse, Nuptse, and Ama Dablam</li>
                        <li>Arrive directly at Kathmandu airport domestic helipad within 45 minutes</li>
                      </ul>

                      <h4 ${h4Style}>Shared vs. Private Chartered Flights</h4>
                      <p>Helicopters accommodate up to 5 passengers (subject to high-altitude weight restrictions). We can arrange private charters for families and small groups, or coordinate shared seats on commercial flights operating in the valley. Contact our travel coordinators in Kathmandu to check current seasonal pricing and availability.</p>
`
  },
  {
    id: "responsible-trekking",
    title: "Responsible Trekking & Sustainability in Sagarmatha National Park",
    content: `
                      <p>Sagarmatha National Park is a globally significant biodiversity hotspot and a fragile alpine sanctuary. Responsible trekking practices ensure that our journeys respect local Sherpa culture, protect natural habitats, and leave positive economic footprints.</p>

                      <h4 ${h4Style}>Leave No Trace Principles</h4>
                      <ul ${ulStyle}>
                        <li><strong>Pack It In, Pack It Out:</strong> Never discard non-biodegradable waste (plastic wrappers, wet wipes, batteries) on the trail. Carry all personal trash to teahouse disposal points or back to Kathmandu.</li>
                        <li><strong>Eliminate Single-Use Plastic:</strong> Use reusable water bottles and water purification methods rather than buying commercially bottled water.</li>
                        <li><strong>Stay on Established Trails:</strong> Walking off-trail causes soil erosion and damages delicate alpine shrubs.</li>
                        <li><strong>Preserve Cultural Sites:</strong> Never touch, carve, or remove stones from Mani walls or chortens. Always pass sacred sites on the left (clockwise).</li>
                      </ul>

                      <h4 ${h4Style}>Sagarmatha Pollution Control Committee (SPCC)</h4>
                      <p>The SPCC is a local non-profit community organization founded by Sherpa elders in 1991 to manage waste along the Everest trail. A portion of your municipality permit fee supports their community waste collection and recycling programs across Namche Bazaar.</p>

                      <h4 ${h4Style}>Supporting Local Sherpa Economies</h4>
                      <p>We believe in sustainable tourism that directly benefits host communities. By employing local Sherpa guides, hiring local porters, dining in family-run lodges, and shopping at village bakeries and markets, your journey supports sustainable mountain livelihoods.</p>
`
  },
  {
    id: "guided-vs-independent",
    title: "Booking a Trek: Independent vs. Guided Trek for Everest View",
    content: `
                      <p>While independent trekking was historically permitted in parts of Nepal, government regulations and safety standards now strongly emphasize professional, guided arrangements for all high-altitude routes.</p>

                      <h4 ${h4Style}>Nepal Government Mandatory Guide Regulation (2023)</h4>
                      <p>In April 2023, the Nepal Tourism Board (NTB) enacted regulations requiring foreign trekkers in national parks and conservation areas to be accompanied by a government-licensed trekking guide. This policy was instituted to enhance trekker safety, reduce missing hiker incidents, and protect alpine environments.</p>

                      <h4 ${h4Style}>The Invaluable Benefits of a Licensed Sherpa Guide</h4>
                      <ul ${ulStyle}>
                        <li><strong>Safety & Altitude Health:</strong> Our certified guides undergo rigorous Wilderness First Aid training and monitor your oxygen levels daily with digital pulse oximeters.</li>
                        <li><strong>Cultural Storytelling:</strong> A local guide introduces you to Sherpa folklore, Tibetan Buddhist traditions, village history, and hidden viewpoints you would otherwise miss.</li>
                        <li><strong>Guaranteed Lodge Reservations:</strong> During busy spring and autumn months, lodges in Namche Bazaar book out completely. Having an agency secures prime rooms with attached bathrooms.</li>
                        <li><strong>Flight Management & Weather Reconfirmations:</strong> Your guide liaises directly with airlines at Lukla, managing boarding passes and smoothing flight adjustments during weather disruptions.</li>
                      </ul>
`
  },
  {
    id: "emergency-evacuation",
    title: "Emergency & Evacuation Process on the Everest Route",
    content: `
                      <p>While the Everest View Trek is safe and well-supported, mountain travel requires comprehensive emergency protocols and dependable evacuation capabilities.</p>

                      <h4 ${h4Style}>Guide Protocols & Trail First Aid</h4>
                      <p>All Namaste Hiking Trek lead guides carry a comprehensive mountain first aid kit, pulse oximeter, and emergency communication devices. In the event of minor illness, sprains, or early altitude symptoms, immediate care and rest are provided on-site.</p>

                      <h4 ${h4Style}>The Immediate Descent Rule</h4>
                      <p>If a trekker exhibits persistent symptoms of Acute Mountain Sickness (AMS), the primary and mandatory medical treatment is <strong>immediate descent to lower elevation</strong>. Because Phakding (2,610 m) and Lukla (2,860 m) are located nearby, descent can be initiated rapidly with guide and porter assistance.</p>

                      <h4 ${h4Style}>Emergency Helicopter Evacuation</h4>
                      <p>In rare cases of severe injury or serious altitude complications (such as HAPE or HACE), emergency helicopter rescue is coordinated immediately. Evacuation helicopters can reach Namche Bazaar or Lukla from Kathmandu within 45 to 60 minutes during daylight flying weather, transferring patients directly to premier international hospitals in Kathmandu (such as CIWEC Hospital or Era Health Care).</p>

                      <h4 ${h4Style}>Insurance Documentation Requirements</h4>
                      <p>To ensure insurance claim approval, our Kathmandu operations team liaises directly with your travel insurance provider, providing flight manifests, guide medical reports, and hospital admission records for prompt direct billing or reimbursement.</p>
`
  },
  {
    id: "money-exchange",
    title: "Money, ATMs & Currency Exchange in Kathmandu and the Mountains",
    content: `
                      <p>Financial logistics in the Himalayas require advance preparation. While major tourist establishments in Kathmandu accept credit cards, mountain teahouses and village markets operate almost exclusively on cash in <strong>Nepali Rupees (NPR)</strong>.</p>

                      <h4 ${h4Style}>Exchanging Foreign Currency in Kathmandu</h4>
                      <p>The easiest place to exchange foreign currency (USD, EUR, GBP, AUD, CAD) into Nepali Rupees is in the Thamel district of Kathmandu. Licensed money exchange counters offer competitive market rates without bank transaction fees. Retain your exchange receipts for re-exchanging leftover rupees at the airport upon departure.</p>

                      <h4 ${h4Style}>ATM Availability on the Route: Kathmandu, Lukla & Namche</h4>
                      <p>ATMs are widely available in Kathmandu and dispense Nepali Rupees with standard international cards (Visa, Mastercard). In the mountains, ATMs exist in Lukla and Namche Bazaar. However, mountain ATMs are frequently out of cash or experience power/satellite connection outages. <strong>Never rely on mountain ATMs as your sole source of money.</strong></p>

                      <h4 ${h4Style}>Recommended Cash to Bring on the Trail</h4>
                      <p>Since all core meals, accommodation, permits, and transfers are included in your package, you only need personal cash for optional extras: hot showers (NPR 400–600), device charging (NPR 200–400), Wi-Fi cards, snacks, bakery treats, espresso, souvenirs, and tips. We recommend budgeting approximately <strong>NPR 3,500 to NPR 5,000 (~USD 25 to USD 35) per person per day</strong>, withdrawn in cash in Kathmandu before departing for Lukla.</p>
`
  },
  {
    id: "booking-process",
    title: "Cost and the Booking Process for Everest View Trek",
    content: `
                      <p>Booking your 7-day Everest View Trek with Namaste Hiking Trek is straightforward, transparent, and secure. We offer guaranteed departures for small groups as well as fully customized private trips for couples, families, and friends.</p>

                      <h4 ${h4Style}>What Is Included in Your Package ($899 USD per person)</h4>
                      <ul ${ulStyle}>
                        <li>Round-trip scenic mountain flights (Kathmandu/Ramechhap – Lukla – Kathmandu/Ramechhap) including airport departure taxes</li>
                        <li>All mandatory government permits: Sagarmatha National Park Permit and Khumbu Pasang Lhamu Rural Municipality Permit</li>
                        <li>Experienced government-licensed, English-speaking Sherpa trekking guide</li>
                        <li>Professional porter service (1 porter per 2 trekkers, 10 kg luggage allowance per trekker)</li>
                        <li>6 nights teahouse accommodation during the trek (Phakding, Namche Bazaar, Lukla)</li>
                        <li>All meals on the trek: 6 breakfasts, 6 lunches, and 6 dinners plus morning/evening tea or coffee</li>
                        <li>Pre-trek briefing and gear inspection in Kathmandu</li>
                        <li>First aid medical kit including daily digital pulse oximeter monitoring</li>
                        <li>All government taxes, VAT, and official service charges</li>
                      </ul>

                      <h4 ${h4Style}>Simple 4-Step Booking Workflow</h4>
                      <ol style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
                        <li><strong>Step 1: Select Your Preferred Dates:</strong> Choose an existing group departure from our dates table or request your own private departure date.</li>
                        <li><strong>Step 2: Submit Inquiry & Receive Itinerary Confirmation:</strong> Our travel specialists confirm flight availability, lodge allocations, and answer any personalized requests within 24 hours.</li>
                        <li><strong>Step 3: Secure Your Booking with a 20% Deposit:</strong> Pay a 20% trip deposit via secure credit card online or international bank wire transfer. Your booking is instantly guaranteed.</li>
                        <li><strong>Step 4: Balance Payment in Kathmandu:</strong> Settle the remaining 80% balance upon arrival in Kathmandu during your pre-trek orientation via cash (USD, EUR, NPR) or major credit card.</li>
                      </ol>
`
  },
  {
    id: "tipping-culture",
    title: "Tipping Culture in Nepal for Guides and Porters",
    content: `
                      <p>Tipping is an established and deeply appreciated tradition in Nepal's trekking and mountaineering industry. While not legally mandatory, tips reflect your gratitude for the dedication, safety oversight, logistical care, and tireless physical labor provided by your guide and porter crew.</p>

                      <h4 ${h4Style}>Standard Industry Tipping Guidelines</h4>
                      <p>As a fair benchmark widely endorsed by the Trekking Agencies' Association of Nepal (TAAN):</p>
                      <ul ${ulStyle}>
                        <li><strong>Lead Trekking Guide:</strong> USD 12 to USD 15 per day total from the group (approx. USD 80 to USD 100 total for the 7-day trek).</li>
                        <li><strong>Trekking Porter:</strong> USD 8 to USD 10 per day total from the pair of trekkers sharing the porter (approx. USD 50 to USD 70 total for the 7-day trek).</li>
                      </ul>
                      <p>If you are traveling in a group, members typically pool tips together, resulting in a modest, affordable personal contribution (around USD 60 to USD 80 per trekker total) that provides substantial, life-improving support for local mountain crew families.</p>

                      <h4 ${h4Style}>When and How to Present Tips</h4>
                      <p>The traditional time to present tips is on the final evening of the trek (Night 6 in Lukla) during the celebratory farewell dinner. Because your porter team will conclude their service at Lukla airport the next morning while you fly to Kathmandu, this evening gathering provides a heartfelt, personal moment to express your appreciation directly.</p>

                      <h4 ${h4Style}>Preferred Currencies for Tipping</h4>
                      <p>Tips are best presented in cash—either in <strong>Nepali Rupees (NPR)</strong> or clean, crisp <strong>US Dollars (USD)</strong>. Place tips in separate envelopes for your guide and porter to avoid confusion and ensure transparent distribution.</p>
`
  },
  {
    id: "important-notes",
    title: "Important Notes for the Everest View Trek",
    content: `
                      <p>To ensure a seamless, enjoyable Himalayan journey, please review these essential travel preparations, visa regulations, and mountain expectations prior to departure.</p>

                      <h4 ${h4Style}>Passport Validity & Nepal Tourist Visa on Arrival</h4>
                      <p>Your passport must have at least <strong>six months of remaining validity</strong> from your date of entry into Nepal, along with at least two blank visa pages. Most international travelers can obtain a Nepal Tourist Visa on arrival at Tribhuvan International Airport in Kathmandu:</p>
                      <ul ${ulStyle}>
                        <li>15-Day Tourist Visa: USD 30</li>
                        <li>30-Day Tourist Visa: USD 50 (Recommended for buffer flexibility)</li>
                        <li>90-Day Tourist Visa: USD 125</li>
                      </ul>
                      <p>Visa fees can be paid in cash (USD, EUR, GBP) or via credit card at the airport electronic immigration kiosks.</p>

                      <h4 ${h4Style}>Electrical Plugs & Power Voltages</h4>
                      <p>Nepal uses 230V, 50Hz electricity. Wall sockets accommodate European two-round-pin plugs (Type C) and three-round-pin plugs (Type D/M). We recommend bringing a compact universal travel adapter and an external power bank (10,000 to 20,000 mAh).</p>

                      <h4 ${h4Style}>Mobile SIM Cards & Connectivity in the Khumbu</h4>
                      <p>Local 4G SIM cards can be purchased easily in Kathmandu upon arrival using your passport and a photo. <strong>Ncell</strong> and <strong>Nepal Telecom (NTC)</strong> provide solid 4G cellular coverage in Lukla, Phakding, and Namche Bazaar. Additionally, prepaid <strong>Everest Link</strong> Wi-Fi cards (10 GB to 20 GB) can be purchased at teahouses along the trail.</p>

                      <h4 ${h4Style}>Embrace the Mountain Mindset: Flexibility & Patience</h4>
                      <p>Mountain travel in the Himalayas is a magnificent adventure where weather, mountain flights, and trail conditions are dictated by nature. Approaching your journey with patience, flexibility, an open mind, and a warm smile ensures an extraordinary and transformative experience in the realm of Mount Everest.</p>
`
  }
];

let html = `        <!-- SECTION 6: PRACTICAL GUIDANCE (EBC STANDARD) -->
        <section id="section-details" class="trek-detail-section">
          <div class="details-section-container">
            <!-- Heading -->
            <div class="details-title-wrapper">
              <h2 class="details-main-title">Read before you book, Everest View Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>

            <!-- Subtitle Paragraphs -->
            <p class="details-subtitle-text">To help you decide if the Everest View Trek is for you, we have provided comprehensive operational information on flight details, teahouse accommodation, altitude safety, permits, costs, and the best time to visit.</p>
            <p class="details-subtitle-text" style="margin-bottom: 24px;">If you are still unsure if this trek is for you, then email or <a href="https://wa.me/9779800000000" target="_blank">WhatsApp us</a>. We will get back to you within 24 hours to answer any more questions.</p>

            <!-- Interactive Progress Tracker Badge -->
            <div class="details-progress-wrapper">
              <div class="details-progress-badge">
                <div class="details-progress-ring-box">
                  <svg width="44" height="44">
                    <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                    <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                  </svg>
                </div>
                <div class="details-progress-text-box">
                  <span class="details-progress-count">0/21 read</span>
                  <span class="details-progress-status">Nice start — keep going</span>
                </div>
              </div>
            </div>

            <!-- Accordion List (21 Items) -->
            <div class="detail-accordion-list">\n`;

itemsData.forEach((item, index) => {
  const iconContainer = getIconContainer(item.id);
  html += `              <!-- Item ${index + 1}: ${item.title} -->
              <div class="detail-accordion-card" data-detail-id="${item.id}">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    ${iconContainer}
                    <h3 class="detail-accordion-title">${item.title}</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    ${chevronSvg}
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner">
                    ${item.content.trim()}
                  </div>
                </div>
              </div>\n\n`;
});

html += `            </div>
          </div>
        </section>\n`;

fs.writeFileSync('scratch/evt_section6_upgraded.html', html, 'utf8');
console.log('Successfully generated scratch/evt_section6_upgraded.html! Length:', html.length);
