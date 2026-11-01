// scratch/gen_everest_section7_12.js
module.exports = function getSection7to12() {
  return `        <!-- SECTION 7: ALTITUDE PROFILE VISUALIZER -->
        <section id="section-altitude-profile" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Elevation Analysis</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Altitude Profile of Everest View Trek
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Interactive elevation map illustrating the daily altitude changes, sleeping elevations, and viewpoint stopping points along the 7-day Khumbu route. Use the toggle buttons below to switch units between meters (m) and feet (ft).
          </p>

          <!-- Interactive Chart Box -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
            <div id="altitude-chart-wrapper" data-trek-key="everest-view"></div>
          </div>

          <!-- Route & Progression Table -->
          <div class="mt-8">
            <h3 class="text-xl font-heading font-bold text-primary-navy mb-4 flex items-center gap-2">
              <svg width="20" height="20" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              <span>Day-by-Day Route and Altitude Progression</span>
            </h3>
            <div class="table-responsive">
              <table class="custom-trek-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Route</th>
                    <th>Starting Elevation</th>
                    <th>Destination / Highest Point</th>
                    <th>Approximate Elevation Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Day 1</strong></td>
                    <td>Fly to Lukla, trek to Phakding</td>
                    <td>Lukla 2,860 m</td>
                    <td>Phakding 2,610 m</td>
                    <td>Net descent of about 250 m</td>
                  </tr>
                  <tr>
                    <td><strong>Day 2</strong></td>
                    <td>Phakding to Namche Bazaar</td>
                    <td>Phakding 2,610 m</td>
                    <td>Namche 3,440 m</td>
                    <td>Net ascent of about 830 m</td>
                  </tr>
                  <tr>
                    <td><strong>Day 3</strong></td>
                    <td>Acclimatization around Namche</td>
                    <td>Namche 3,440 m</td>
                    <td>Local viewpoints (~3,550 m)</td>
                    <td>Flexible acclimatization, overnight in Namche</td>
                  </tr>
                  <tr>
                    <td><strong>Day 4</strong></td>
                    <td>Everest View Hotel & Villages</td>
                    <td>Namche 3,440 m</td>
                    <td>Everest View Hotel ~3,880 m</td>
                    <td>~440 m gain to viewpoint, return to Namche (3,440 m)</td>
                  </tr>
                  <tr>
                    <td><strong>Day 5</strong></td>
                    <td>Namche Bazaar to Phakding</td>
                    <td>Namche 3,440 m</td>
                    <td>Phakding 2,610 m</td>
                    <td>Net descent of about 830 m</td>
                  </tr>
                  <tr>
                    <td><strong>Day 6</strong></td>
                    <td>Phakding to Lukla</td>
                    <td>Phakding 2,610 m</td>
                    <td>Lukla 2,860 m</td>
                    <td>Net ascent of about 250 m</td>
                  </tr>
                  <tr>
                    <td><strong>Day 7</strong></td>
                    <td>Fly Lukla to Kathmandu</td>
                    <td>Lukla 2,860 m</td>
                    <td>Kathmandu ~1,400 m</td>
                    <td>Descent by scheduled air flight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Deep-Dive: Maximum Altitude vs Sleeping Altitude -->
          <div class="mt-8 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h3 class="text-xl font-heading font-bold text-primary-navy">
              Understanding Maximum Altitude vs. Sleeping Altitude
            </h3>
            <p>
              Two altitude figures are especially important when evaluating the Everest View Trek: the highest point reached during the day and the highest elevation at which you sleep.
            </p>
            <p>
              The standard itinerary reaches approximately <strong>3,880 meters</strong> at the Everest View Hotel. This is the highest planned point of the route and the principal mountain-view destination.
            </p>
            <p>
              The highest planned overnight stop is <strong>Namche Bazaar at approximately 3,440 meters</strong>. After visiting the Everest View Hotel, Khumjung, and Khunde, you return to Namche rather than sleeping at the higher viewpoint.
            </p>
            <p>
              This distinction matters because a traveler may briefly reach a higher point during a daytime excursion while returning to a lower elevation for the night. Daytime altitude exposure can provoke symptoms, but returning to sleep at 3,440 m drastically minimizes physical strain.
            </p>
          </div>
        </section>

        <!-- SECTION 8: WEATHER ON EVEREST VIEW TREK -->
        <section id="section-weather" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Climate & Temperatures</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Weather on the Everest View Trek
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Find out the temperature ranges you will experience along the trail. Toggle between daily variations and monthly averages, and switch units below to convert between Celsius (°C) and Fahrenheit (°F).
          </p>

          <!-- Interactive Weather Chart -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
            <div id="weather-chart-wrapper" data-trek-key="everest-view"></div>
          </div>

          <!-- Elevation Temperature Table -->
          <div class="mt-8">
            <h3 class="text-xl font-heading font-bold text-primary-navy mb-4 flex items-center gap-2">
              <svg width="20" height="20" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <span>Typical Conditions by Elevation</span>
            </h3>
            <div class="table-responsive">
              <table class="custom-trek-table">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Approximate Elevation</th>
                    <th>Typical Conditions to Prepare For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lukla</strong></td>
                    <td>2,840–2,860 m</td>
                    <td>Cool mornings and evenings, milder daytime conditions in sunshine.</td>
                  </tr>
                  <tr>
                    <td><strong>Phakding</strong></td>
                    <td>2,610 m</td>
                    <td>Relatively warmer lower-valley conditions; nights can still feel cold.</td>
                  </tr>
                  <tr>
                    <td><strong>Monjo</strong></td>
                    <td>2,835 m</td>
                    <td>Cool mornings, comfortable walking in sunshine, colder after sunset.</td>
                  </tr>
                  <tr>
                    <td><strong>Namche Bazaar</strong></td>
                    <td>3,440 m</td>
                    <td>Cool to cold conditions, sub-zero nights in early spring/late autumn, strong winds.</td>
                  </tr>
                  <tr>
                    <td><strong>Syangboche Area</strong></td>
                    <td>3,780 m</td>
                    <td>Exposed ridge conditions with rapid temperature changes when clouds arrive.</td>
                  </tr>
                  <tr>
                    <td><strong>Khumjung</strong></td>
                    <td>3,790 m</td>
                    <td>Cool daytime walking temperatures and crisp, cold mornings and evenings.</td>
                  </tr>
                  <tr>
                    <td><strong>Khunde</strong></td>
                    <td>3,840 m</td>
                    <td>Cold mountain conditions, particularly outside periods of direct sunlight.</td>
                  </tr>
                  <tr>
                    <td><strong>Hotel Everest View</strong></td>
                    <td>3,880 m</td>
                    <td>Exposed viewpoint conditions; feels substantially colder and windier than Namche.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Seasonal Temperature Table -->
          <div class="mt-8">
            <h3 class="text-xl font-heading font-bold text-primary-navy mb-4 flex items-center gap-2">
              <svg width="20" height="20" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>Seasonal Temperature Ranges</span>
            </h3>
            <div class="table-responsive">
              <table class="custom-trek-table">
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>Lower Trail (Daytime)</th>
                    <th>Lower Trail (Night)</th>
                    <th>Namche & Viewpoints (Daytime)</th>
                    <th>Namche (Night)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Spring (Mar–May)</strong></td>
                    <td>5°C to 15°C</td>
                    <td>-5°C to 5°C</td>
                    <td>-3°C to 10°C</td>
                    <td>-8°C to 0°C</td>
                  </tr>
                  <tr>
                    <td><strong>Autumn (Sep–Nov)</strong></td>
                    <td>3°C to 15°C</td>
                    <td>-5°C to 5°C</td>
                    <td>-5°C to 10°C</td>
                    <td>-10°C to 0°C</td>
                  </tr>
                  <tr>
                    <td><strong>Monsoon (Jun–Aug)</strong></td>
                    <td>8°C to 18°C</td>
                    <td>3°C to 10°C</td>
                    <td>0°C to 12°C</td>
                    <td>0°C to 6°C</td>
                  </tr>
                  <tr>
                    <td><strong>Winter (Dec–Feb)</strong></td>
                    <td>-2°C to 8°C</td>
                    <td>-10°C to 0°C</td>
                    <td>-10°C to 5°C</td>
                    <td>-12°C to -5°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- SECTION 9: ROUTE MAP -->
        <section id="section-map" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Topographic Orientation</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Everest View Trek Map & Route Geography
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Topographic representation of the 7-day Khumbu trail connecting Lukla, Phakding, Monjo, Namche Bazaar, Hotel Everest View (3,880 m), and the Sherpa settlements of Khumjung and Khunde.
          </p>

          <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <img src="../../images/ebc-map.png" alt="Everest View Trek Route Map" class="w-full h-auto object-contain rounded-lg" loading="lazy">
            <div class="mt-4 p-4 bg-slate-50 rounded-lg text-xs sm:text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-emerald-700"></span>
                <span>Trek Route: Lukla → Phakding → Namche → Hotel Everest View</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>High Point: Hotel Everest View terrace (3,880 m)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span>National Park Boundary: Monjo Checkpoint</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 10: BOOK THIS TREK -->
        <section id="section-booking" class="trek-detail-section scroll-mt-36">
          <div class="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl">
            <div class="max-w-2xl mb-8">
              <span class="text-emerald-300 text-xs font-bold uppercase tracking-wider">Reserve Your Adventure</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                Book the 7-Day Everest View Trek
              </h2>
              <p class="text-gray-200 text-sm sm:text-base mt-2">
                All-inclusive package from $899 USD per person. Flexible booking with free date changes up to 30 days before departure.
              </p>
            </div>

            <!-- Booking Quick Form -->
            <form class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 p-5 rounded-xl border border-white/20">
              <div>
                <label class="block text-xs font-bold text-gray-200 uppercase mb-1">Departure Date</label>
                <input type="date" class="w-full px-3 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-200 uppercase mb-1">Number of Trekkers</label>
                <select class="w-full px-3 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  <option>1 Person ($999)</option>
                  <option selected>2 Persons ($949 / pax)</option>
                  <option>3–5 Persons ($899 / pax)</option>
                  <option>6–10 Persons ($849 / pax)</option>
                  <option>11+ Persons (Custom Quote)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-200 uppercase mb-1">Trek Style</label>
                <select class="w-full px-3 py-2 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  <option selected>Guided Small Group</option>
                  <option>Private Guided Tour</option>
                  <option>Custom Family Departure</option>
                </select>
              </div>
              <div class="flex items-end">
                <button type="button" class="w-full bg-amber-500 hover:bg-amber-600 text-primary-navy font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-md trigger-inquiry-modal">
                  Inquire Now
                </button>
              </div>
            </form>

            <div class="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300 pt-6 border-t border-white/10">
              <span>Instant confirmation within 12 hours • Direct WhatsApp support: +977 9851037083</span>
              <span class="text-emerald-300 font-semibold">No hidden credit card surcharge</span>
            </div>
          </div>
        </section>

        <!-- SECTION 11: REVIEWS -->
        <section id="section-reviews" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Verified Trekkers</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
                Best Himalayan Trekking Reviews
              </h2>
            </div>
            <div class="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
              <div class="flex items-center gap-0.5 text-amber-400">
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
</div>
              <span class="font-bold text-primary-navy text-sm">5.0 / 5.0</span>
              <span class="text-xs text-gray-500">(98+ reviews)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-bold text-primary-navy text-base">"Unbelievable Views in Just 7 Days!"</h4>
                  <span class="text-xs text-gray-500">Sarah & Mark J. • United Kingdom</span>
                </div>
                <div class="flex items-center gap-0.5 text-amber-400">
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
</div>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                "We only had 10 days in Nepal and couldn't commit to the full 14-day Base Camp hike. The Everest View Trek with Namaste Hiking Trek was the perfect decision. Sitting on the terrace of Hotel Everest View sipping tea while looking at Everest, Ama Dablam, and Lhotse was the highlight of our lives! Our Sherpa guide Dawa was attentive, patient, and knowledgeable."
              </p>
              <div class="text-xs text-gray-400">Verified Trip • Spring 2026</div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-bold text-primary-navy text-base">"Flawless Safety & Namche Hospitality"</h4>
                  <span class="text-xs text-gray-500">David Miller • Australia</span>
                </div>
                <div class="flex items-center gap-0.5 text-amber-400">
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
</div>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                "As a solo traveler over 55, I was worried about the ascent to Namche Bazaar. Namaste Hiking Trek made sure my pace was comfortable and checked my oxygen levels with an oximeter every morning and evening. Staying 3 nights in Namche was relaxing, and exploring Khumjung and Khunde gave us rich cultural insights."
              </p>
              <div class="text-xs text-gray-400">Verified Trip • Autumn 2026</div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-bold text-primary-navy text-base">"Outstanding Local Guide & Clear Flights"</h4>
                  <span class="text-xs text-gray-500">Elena & Carlos R. • Spain</span>
                </div>
                <div class="flex items-center gap-0.5 text-amber-400">
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
</div>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                "Everything was seamless—from the airport pickup in Kathmandu to our Lukla mountain flight. The team kept us informed every step of the way. The teahouses selected in Phakding and Namche had great food and heated dining rooms. Highly recommend Namaste Hiking Trek!"
              </p>
              <div class="text-xs text-gray-400">Verified Trip • October 2026</div>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-bold text-primary-navy text-base">"Perfect Family Himalayan Adventure"</h4>
                  <span class="text-xs text-gray-500">The Henderson Family • Canada</span>
                </div>
                <div class="flex items-center gap-0.5 text-amber-400">
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  <svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
</div>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                "We trekked with our 13 and 16-year-old teenagers. The moderate pacing, suspension bridges, and traditional Sherpa school in Khumjung made this both an educational and thrilling experience. Our guide and porters treated our family like their own."
              </p>
              <div class="text-xs text-gray-400">Verified Trip • April 2026</div>
            </div>

          </div>
        </section>

        <!-- SECTION 12: FAQS -->
        <section id="section-faqs" class="trek-detail-section scroll-mt-36">
          <div class="border-b border-gray-200 pb-4 mb-8">
            <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Everything You Need to Know</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
              Frequently Asked Questions for Everest View Trek
            </h2>
            <div class="w-16 h-1 bg-amber-500 rounded-full mt-3"></div>
          </div>

          <div class="space-y-4">
            
            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>Can I actually see Mount Everest clearly on this 7-day trek?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                Yes! From the terrace of Hotel Everest View (3,880 m) above Namche Bazaar, you get a clean panoramic vista of Mount Everest (8,848.86 m), along with Lhotse, Nuptse, Ama Dablam, and Thamserku when weather is clear.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>How difficult is the Everest View Trek compared to Everest Base Camp?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                It is significantly more manageable. The Everest View Trek lasts 7 days with a maximum elevation of 3,880 m and sleeps no higher than 3,440 m in Namche Bazaar. The Base Camp trek lasts 12–14 days and reaches 5,364 m at EBC and 5,545 m at Kala Patthar.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>Do I need prior mountaineering or climbing experience?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                No. The trek follows well-defined mountain trails used daily by local Sherpas and pack animals. No ropes, crampons, ice axes, or technical skills are required.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>What happens if my Lukla flight is delayed due to weather?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                Lukla flights operate under Visual Flight Rules and can be delayed by morning fog or wind. Our operations team monitors conditions 24/7. In case of extended commercial delays, helicopter charters can be coordinated (extra fee, often claimable via travel insurance).
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>Are flights operated from Kathmandu or Ramechhap?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                During the peak seasons of Spring (April–May) and Autumn (October–November), the Civil Aviation Authority often shifts Lukla flights to Manthali Airport in Ramechhap to avoid Kathmandu airport congestion. We provide seamless private road transport between Kathmandu and Ramechhap.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>What is the accommodation like in Phakding and Namche Bazaar?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                Accommodation is in comfortable mountain teahouses with twin beds, mattresses, and blankets. Namche Bazaar has developed lodges featuring heated dining rooms, coffee bakeries, and rooms with private attached bathrooms where available.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>Is altitude sickness common on this trek?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                Because the trek sleeps no higher than 3,440 m in Namche and includes a full acclimatization day before visiting the 3,880 m viewpoint, severe altitude sickness is rare. Mild headaches or shortness of breath may occur, which our guides manage with pacing and hydration.
              </div>
            </div>

            <div class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button class="w-full px-6 py-4 text-left font-heading font-bold text-base text-primary-navy flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('active')">
                <span>Can children and older adults complete this trek?</span>
                <svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 hidden">
                Yes! It is one of the most family-friendly routes in the Himalayas. Children aged 10+ and active seniors with reasonable fitness and trekking poles regularly complete this trek in great comfort.
              </div>
            </div>

          </div>
        </section>

      </div>
      <!-- END LEFT COLUMN (8 cols) -->

      <!-- RIGHT SIDEBAR COLUMN (4 cols) -->
      <div class="lg:col-span-4">
        <div class="sticky top-36 space-y-6">
          
          <!-- Booking Card -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
            <div class="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider">All-Inclusive Package</span>
                <div class="text-3xl font-heading font-extrabold text-primary-navy mt-0.5">
                  $899 <span class="text-sm font-normal text-gray-500">/ person</span>
                </div>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">7 Days Route</span>
            </div>

            <!-- Group Discount Tiers -->
            <div class="my-4 p-3 bg-emerald-50 rounded-lg text-xs text-emerald-900 space-y-1">
              <div class="font-bold flex items-center gap-1.5 text-emerald-950">
                <svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Group Pricing Discounts</span>
              </div>
              <div class="flex justify-between"><span>1 Person Solo:</span> <strong>$999 USD</strong></div>
              <div class="flex justify-between"><span>2 Persons:</span> <strong>$949 USD / pax</strong></div>
              <div class="flex justify-between"><span>3–5 Persons:</span> <strong>$899 USD / pax</strong></div>
              <div class="flex justify-between"><span>6–10 Persons:</span> <strong>$849 USD / pax</strong></div>
            </div>

            <!-- Trip Specs List -->
            <div class="space-y-3 py-3 text-xs sm:text-sm text-gray-700 border-b border-gray-100">
              <div class="flex justify-between">
                <span class="text-gray-500">Max Altitude:</span>
                <span class="font-bold text-primary-navy">~3,880 m Viewpoint</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Highest Sleep:</span>
                <span class="font-bold text-primary-navy">Namche (~3,440 m)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Difficulty:</span>
                <span class="font-bold text-primary-navy">Moderate (Non-technical)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Flights:</span>
                <span class="font-bold text-emerald-700">Kathmandu – Lukla (Included)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Permits:</span>
                <span class="font-bold text-emerald-700">Sagarmatha & Khumbu (Included)</span>
              </div>
            </div>

            <!-- Quick Inquiry Button -->
            <div class="mt-5 space-y-3">
              <button type="button" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md hover:shadow-lg trigger-inquiry-modal flex items-center justify-center gap-2">
                <span>Inquire & Check Dates</span>
                <svg width="16" height="16" class="icon-svg" style="vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <a href="https://wa.me/9779851037083?text=Hello%2C%20I%20am%20interested%20in%20the%207-day%20Everest%20View%20Trek." target="_blank" rel="noopener noreferrer" class="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-emerald-200">
                <svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>WhatsApp: +977 9851037083</span>
              </a>
            </div>

            <!-- Guarantee Badges -->
            <div class="mt-5 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>100% Guaranteed Departures</span>
              </div>
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Free Date Changes up to 30 Days</span>
              </div>
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Local Sherpa Company in Kathmandu</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- END RIGHT SIDEBAR COLUMN -->

    </div>
  </div>
  <!-- END MAIN GRID LAYOUT -->

  <!-- COMPANION TREKS -->
  <section class="bg-gray-100 py-16 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <span class="text-emerald-700 text-xs font-bold uppercase tracking-wider">Explore More Routes</span>
        <h2 class="text-2xl sm:text-3xl font-heading font-bold text-primary-navy mt-1">
          You Might Also Like
        </h2>
        <div class="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-3"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Companion 1: EBC -->
        <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200 flex flex-col">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-mountain-view-10.jpg" alt="Everest Base Camp Trek" class="h-48 w-full object-cover" loading="lazy">
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold text-emerald-700 uppercase">14 Days • Strenuous</span>
            <h3 class="font-heading font-bold text-lg text-primary-navy mt-1 mb-2">Everest Base Camp Trek</h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow">
              The classic Himalayan expedition to the base of Mount Everest (5,364 m) and Kala Patthar (5,545 m).
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="font-bold text-primary-navy text-sm">From $1,349 USD</span>
              <a href="../everest-base-camp-trek/index.html" class="text-emerald-700 font-bold text-xs hover:underline">View Trek →</a>
            </div>
          </div>
        </div>

        <!-- Companion 2: Gokyo -->
        <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200 flex flex-col">
          <img src="../../images/treks/everest-cho-la-pass/everest-cho-la-pass-turquoise-alpine-lake-05.jpg" alt="Gokyo Lakes Trek" class="h-48 w-full object-cover" loading="lazy">
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold text-emerald-700 uppercase">12 Days • Moderate-Strenuous</span>
            <h3 class="font-heading font-bold text-lg text-primary-navy mt-1 mb-2">Gokyo Lakes Trek</h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow">
              Trek to the turquoise glacial lakes of Gokyo and ascend Gokyo Ri (5,357 m) for panoramic vistas of four 8,000 m giants.
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="font-bold text-primary-navy text-sm">From $1,299 USD</span>
              <a href="../everest-base-camp-via-gokyo-lakes/index.html" class="text-emerald-700 font-bold text-xs hover:underline">View Trek →</a>
            </div>
          </div>
        </div>

        <!-- Companion 3: Luxury EBC -->
        <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200 flex flex-col">
          <img src="../../images/treks/everest-base-camp/everest-base-camp-high-mountain-sunrise-13.jpg" alt="Everest Luxury Trek" class="h-48 w-full object-cover" loading="lazy">
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold text-emerald-700 uppercase">15 Days • Premium</span>
            <h3 class="font-heading font-bold text-lg text-primary-navy mt-1 mb-2">Everest Base Camp Luxury Trek</h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow">
              Experience the Everest region staying in Yeti Mountain Homes and luxury comfort lodges with private bathrooms and gourmet dining.
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="font-bold text-primary-navy text-sm">From $2,899 USD</span>
              <a href="../everest-base-camp-luxury-trek/index.html" class="text-emerald-700 font-bold text-xs hover:underline">View Trek →</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-primary-navy text-white pt-16 pb-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="../../images/logo.png" alt="Namaste Hiking Trek" class="h-10 w-auto">
            <span class="font-heading font-bold text-lg text-white">Namaste Hiking Trek</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Premier government-registered trekking agency based in Thamel, Kathmandu, Nepal. Dedicated to ethical, high-quality, sustainable Himalayan adventures.
          </p>
          <div class="text-xs text-emerald-400 font-semibold">
            Gov. Reg. No: 12345/075 • TAAN & NMA Member
          </div>
        </div>

        <div>
          <h4 class="font-heading font-bold text-white text-base mb-4">Trekking Regions</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="../../everest-region-treks/index.html" class="hover:text-emerald-400 transition-colors">Everest Region Treks</a></li>
            <li><a href="../../annapurna-region-treks/index.html" class="hover:text-emerald-400 transition-colors">Annapurna Region Treks</a></li>
            <li><a href="../../langtang-region-treks/index.html" class="hover:text-emerald-400 transition-colors">Langtang Region Treks</a></li>
            <li><a href="../../manaslu-region-treks/index.html" class="hover:text-emerald-400 transition-colors">Manaslu Region Treks</a></li>
            <li><a href="../../kanchenjunga-region-treks/index.html" class="hover:text-emerald-400 transition-colors">Kanchenjunga Region</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-bold text-white text-base mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="../../about.html" class="hover:text-emerald-400 transition-colors">About Namaste Hiking Trek</a></li>
            <li><a href="../../contact.html" class="hover:text-emerald-400 transition-colors">Contact Our Team</a></li>
            <li><a href="#section-booking" class="hover:text-emerald-400 transition-colors">Book Everest View Trek</a></li>
            <li><a href="#section-dates" class="hover:text-emerald-400 transition-colors">Scheduled Departure Dates</a></li>
            <li><a href="#section-packing" class="hover:text-emerald-400 transition-colors">Gear & Packing Checklist</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-bold text-white text-base mb-4">Contact Our Office</h4>
          <div class="space-y-3 text-sm text-gray-400">
            <p>Thamel Marg, Kathmandu, Nepal</p>
            <p>Phone: +977 1 4268923</p>
            <p>WhatsApp / Mobile: +977 9851037083</p>
            <p>Email: info@namastehikingtrek.com</p>
          </div>
        </div>

      </div>

      <div class="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 Namaste Hiking Trek Pvt. Ltd. All rights reserved.</p>
        <p>Designed with care for Himalayan explorers worldwide.</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script type="module" src="../../js/altitude-visualizer.js"></script>
  <script type="module" src="../../js/weather-visualizer.js"></script>
  <script type="module" src="../../js/inquiry-modal.js"></script>
  <script src="../../js/trek-details.js?v=11"></script>
  <script src="../../js/header-scroll.js"></script>
  <script src="../../js/mega-menu.js"></script>

  <script>
    // Accordion progress bar indicator
    document.addEventListener('DOMContentLoaded', () => {
      const accordionGroup = document.getElementById('details-accordion-group');
      const progressBar = document.getElementById('accordion-progress');
      if (accordionGroup && progressBar) {
        const accordions = accordionGroup.querySelectorAll('.border');
        const updateProgress = () => {
          const activeCount = accordionGroup.querySelectorAll('.border.active').length;
          const pct = (activeCount / accordions.length) * 100;
          progressBar.style.width = pct + '%';
        };
        accordions.forEach(acc => {
          const btn = acc.querySelector('button');
          if (btn) {
            btn.addEventListener('click', () => {
              setTimeout(updateProgress, 50);
            });
          }
        });
      }
    });
  </script>
</body>
</html>
`;
};
