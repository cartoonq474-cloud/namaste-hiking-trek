const fs = require('fs');

const upgradedPlatformHtml = `<div id="platform-reviews" class="review-tab-panel">

          <!-- Sub-tab buttons for platforms (Google, TripAdvisor, Trustpilot, SourceForge) -->
          <div class="platform-subtabs-bar">
            <button class="platform-subtab-btn active" data-platform="google">
              <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 6px;">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.1-6.68-4.93H1.41v3.15C3.39 21.32 7.42 24 12 24z"/>
                <path fill="#FBBC05" d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.53.38-2.27V6.58H1.41C.51 8.37 0 10.13 0 12s.51 3.63 1.41 5.42l3.91-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.42 0 3.39 2.68 1.41 6.58l3.91 3.15c.94-2.83 3.57-4.98 6.68-4.98z"/>
              </svg>
              Google Reviews
            </button>

            <button class="platform-subtab-btn" data-platform="tripadvisor">
              <svg width="22" height="22" viewBox="0 0 40 40" style="vertical-align: middle; margin-right: 6px;">
                <circle cx="20" cy="20" r="19" fill="#34E0A1"/>
                <path d="M 6,15 C 6,11 13,8 20,8 C 27,8 34,11 34,15 C 36,13 33,9 31,8 C 25,6 15,6 9,8 C 7,9 4,13 6,15 Z" fill="#000000"/>
                <circle cx="13.5" cy="21.5" r="6.5" fill="#000000"/>
                <circle cx="13.5" cy="21.5" r="4.5" fill="#34E0A1"/>
                <circle cx="13.5" cy="21.5" r="2.2" fill="#000000"/>
                <circle cx="26.5" cy="21.5" r="6.5" fill="#000000"/>
                <circle cx="26.5" cy="21.5" r="4.5" fill="#34E0A1"/>
                <circle cx="26.5" cy="21.5" r="2.2" fill="#000000"/>
                <polygon points="20,26 17.2,20.5 22.8,20.5" fill="#000000"/>
              </svg>
              TripAdvisor
            </button>

            <button class="platform-subtab-btn" data-platform="trustpilot">
              <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 6px;">
                <rect width="24" height="24" rx="4" fill="#00B67A"/>
                <polygon points="12 3.5 14.3 9.4 20.5 9.4 15.5 13.1 17.3 19 12 15.2 6.7 19 8.5 13.1 3.5 9.4 9.7 9.4" fill="#FFFFFF"/>
                <polygon points="12 3.5 14.3 9.4 12 15.2" fill="#005128"/>
              </svg>
              Trustpilot
            </button>

            <button class="platform-subtab-btn" data-platform="sourceforge">
              <svg width="20" height="20" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 6px;">
                <rect width="24" height="24" rx="4" fill="#EE6600"/>
                <path fill="#FFFFFF" d="M12 4l7 4v8l-7 4-7-4V8l7-4zm0 2.2L6.8 9.2v5.6L12 17.8l5.2-3V9.2L12 6.2z"/>
              </svg>
              SourceForge
            </button>
          </div>

          <!-- Dynamic Platform Rating Summary Banner -->
          <div class="platform-summary-banner">
            <div class="platform-rating-info" id="platform-banner-info">
              <span class="stars-emerald" style="color: #10B981; font-size: 1.15rem; letter-spacing: 2px;">★★★★★</span>
              <strong id="platform-score-text" style="font-size: 1.15rem; color: #0F172A; margin: 0 6px;">4.9</strong>
              <span id="platform-count-text" style="color: #64748B; font-size: 0.92rem;">(1,240+ Verified Google Reviews)</span>
            </div>
            <button class="btn btn-primary open-inquiry-btn"
              style="border-radius: var(--radius-full); padding: 8px 22px; font-weight: 700;">
              Leave a Review
            </button>
          </div>

          <!-- SUBTAB 1: GOOGLE REVIEWS (Active by Default) -->
          <div class="platform-reviews-content active" data-platform="google">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Unmatched Himalayan Support</h3>
                  <p class="platform-card-body">"Namaste Hiking Trek made our Everest Base Camp trip completely stress-free. From airport pick-up to acclimatization pacing, everything was world-class."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">MC</div>
                  <div class="platform-user-info">
                    <strong>Marcus Chen <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Google Review • 2 weeks ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Quality & Authentic Local Service</h3>
                  <p class="platform-card-body">"Our guide Pasang was incredible with safety checks and pulse oximeter readings every evening. Highly recommend this authentic local agency!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EFF6FF; color: #1D4ED8;">ER</div>
                  <div class="platform-user-info">
                    <strong>Emma Roberts <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Google Review • 1 month ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Delivers on All Safety Promises</h3>
                  <p class="platform-card-body">"Trekking Annapurna Circuit with Namaste Hiking Trek was pure magic. Clean teahouses, warm hospitality, and ethical porter care throughout."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FFFBEB; color: #B45309;">DK</div>
                  <div class="platform-user-info">
                    <strong>David Koenig <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Google Review • 2 months ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Seamless High Altitude Logistics</h3>
                  <p class="platform-card-body">"They arranged all permits, domestic flights, and gear rentals flawlessly. You cannot find better value or expertise in Kathmandu."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FDF2F8; color: #BE185D;">SL</div>
                  <div class="platform-user-info">
                    <strong>Sarah Lindqvist <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Google Review • 3 months ago</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB 2: TRIPADVISOR REVIEWS -->
          <div class="platform-reviews-content" data-platform="tripadvisor">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Bucket List EBC Trip of a Lifetime</h3>
                  <p class="platform-card-body">"14 days of surreal views. The team checked our oxygen saturation every single day and made sure our acclimatization at Dingboche was perfect."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">JT</div>
                  <div class="platform-user-info">
                    <strong>Julian T. <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>TripAdvisor • Canada</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Langtang Valley Magic</h3>
                  <p class="platform-card-body">"Our guide Dorje was born in the Himalayas and knew every bird, peak, and Tamang tradition. Wonderful food and warm sleeping bags."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">CW</div>
                  <div class="platform-user-info">
                    <strong>Claire Williams <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>TripAdvisor • UK</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Everest Three Passes Triumph</h3>
                  <p class="platform-card-body">"Crossed Kongma La, Cho La, and Renjo La without a single hitch. Exceptional mountain guides and genuine Sherpa warmth."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">RA</div>
                  <div class="platform-user-info">
                    <strong>Robert Anders <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>TripAdvisor • Germany</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Incredible Mardi Himal Ridge Views</h3>
                  <p class="platform-card-body">"Short, scenic, and peaceful. Machapuchare sunrise from High Camp was breathtaking. Namaste Hiking Trek handled every single detail."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">NH</div>
                  <div class="platform-user-info">
                    <strong>Nadia Hassan <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>TripAdvisor • UAE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB 3: TRUSTPILOT REVIEWS -->
          <div class="platform-reviews-content" data-platform="trustpilot">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Pristine Wilderness in Manaslu</h3>
                  <p class="platform-card-body">"Larkya La Pass at 5,106m was challenging, but our guide was with us every step. Unbeatable safety protocols and warm smiles."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">FW</div>
                  <div class="platform-user-info">
                    <strong>Felix Weber <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Trustpilot • Switzerland</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Transparent Local Agency</h3>
                  <p class="platform-card-body">"No hidden extra fees. What was agreed before the trek was delivered 100%. Highly honest and trustworthy team in Nepal."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">AL</div>
                  <div class="platform-user-info">
                    <strong>Anna Lindberg <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Trustpilot • Sweden</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Family Friendly Trekking</h3>
                  <p class="platform-card-body">"We trekked Ghorepani Poon Hill with our two teenage children. The team was so patient, encouraging, and warm to our whole family."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">BM</div>
                  <div class="platform-user-info">
                    <strong>The Miller Family <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Trustpilot • USA</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Helicopter Rescue Peace of Mind</h3>
                  <p class="platform-card-body">"Knowing they had instant helicopter insurance coordination gave us immense peace of mind. We completed Gokyo Ri safely and comfortably!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">TK</div>
                  <div class="platform-user-info">
                    <strong>Thomas Kim <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Trustpilot • South Korea</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB 4: SOURCEFORGE REVIEWS -->
          <div class="platform-reviews-content" data-platform="sourceforge">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Quality & Authentic Local Service</h3>
                  <p class="platform-card-body">"Namaste Hiking Trek helped our small group trek to Everest Base Camp. Quick response, clear gear packing lists, and top-tier Sherpa guides."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EFF6FF; color: #1D4ED8;">MA</div>
                  <div class="platform-user-info">
                    <strong>Matthew A. <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Verified Review • 27/11/2025</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Delivers on all safety promises</h3>
                  <p class="platform-card-body">"After reading all the positive reviews, I gave Namaste Hiking Trek a try. They really deliver what they promise - genuine local expertise and safety."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #059669;">NM</div>
                  <div class="platform-user-info">
                    <strong>Natalia M. <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Verified Review • 12/10/2025</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">Unmatched Himalayan Support</h3>
                  <p class="platform-card-body">"Used Namaste Hiking Trek for our custom Annapurna Circuit trip. Unbeatable price, exceptional tea house accommodations, and friendly staff!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FEF3C7; color: #D97706;">NP</div>
                  <div class="platform-user-info">
                    <strong>Niko P. <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Verified Review • 03/09/2025</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars" style="color: #10B981;">★★★★★</div>
                  <h3 class="platform-card-headline">100% Recommended Agency!</h3>
                  <p class="platform-card-body">"From Kathmandu welcome dinner to Everest base camp triumph, they treat you like family. Will book Manaslu next year without hesitation!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EBF5FF; color: #1877F2;">LP</div>
                  <div class="platform-user-info">
                    <strong>Laura Palmer <span class="user-check-icon" style="color: #10B981;">✓</span></strong>
                    <span>Verified Review • 18/08/2025</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>`;

fs.writeFileSync('scratch/upgraded_platform_reviews.html', upgradedPlatformHtml);
console.log('Saved scratch/upgraded_platform_reviews.html, length:', upgradedPlatformHtml.length);
