const fs = require('fs');

const s14 = fs.readFileSync('scratch/s14_dump.html', 'utf8');

// Build the consolidated reviews section
const masterSection = `    <!-- Section 9: Verified Himalayan Trekkers' Experiences & Testimonials -->
    <section id="reviews-section" class="review-section homepage-reviews-section">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header text-center" style="margin-bottom: 28px;">
          <span class="pill pill-copper">Trekker Testimonials</span>
          <h2 class="section-title">Verified Himalayan <span class="badge-emerald-highlight">Trekkers' Experiences</span></h2>
          <p class="section-desc">Over 15,000 adventure seekers have explored Everest, Annapurna, and Manaslu with Namaste Hiking Trek.</p>
        </div>

        <!-- Top Segmented Switcher Pill Bar (3 Main Category Tabs) -->
        <div class="text-center" style="margin-bottom: 30px;">
          <div class="main-reviews-tabs-pill">
            <button class="review-tab-btn" data-tab="tab-video-reviews">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              Video Reviews
            </button>
            <button class="review-tab-btn" data-tab="tab-customer-reviews">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Customer Reviews
            </button>
            <button class="review-tab-btn active" data-tab="tab-platform-reviews">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Platform Reviews
            </button>
          </div>
        </div>

        <!-- 01. TAB PANEL: PLATFORM REVIEWS (Active by Default) -->
        <div id="tab-platform-reviews" class="review-tab-panel active">
          
          <!-- Sub-Tabs Navigation (Google, TripAdvisor, Trustpilot, Facebook) -->
          <div class="platform-subtabs-bar">
            <button class="platform-subtab-btn active" data-platform="google">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.1-6.68-4.93H1.41v3.15C3.39 21.32 7.42 24 12 24z"/><path fill="#FBBC05" d="M5.32 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.53.38-2.27V6.58H1.41C.51 8.37 0 10.13 0 12s.51 3.63 1.41 5.42l3.91-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.42 0 3.39 2.68 1.41 6.58l3.91 3.15c.94-2.83 3.57-4.98 6.68-4.98z"/></svg>
              Google Reviews
            </button>

            <button class="platform-subtab-btn" data-platform="tripadvisor">
              <svg width="22" height="22" viewBox="0 0 40 40">
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
              <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#00B67A"/><polygon points="12 3.5 14.3 9.4 20.5 9.4 15.5 13.1 17.3 19 12 15.2 6.7 19 8.5 13.1 3.5 9.4 9.7 9.4" fill="#FFFFFF"/><polygon points="12 3.5 14.3 9.4 12 15.2" fill="#005128"/></svg>
              Trustpilot
            </button>

            <button class="platform-subtab-btn" data-platform="facebook">
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <!-- White Rating Header Banner Strip -->
          <div class="platform-banner-strip">
            <div class="platform-banner-left">
              <span class="stars-gold">★★★★★</span>
              <strong>4.9 / 5.0</strong>
              <span>• Over 500+ Verified Independent Reviews</span>
            </div>
            <div style="font-size: 0.88rem; font-weight: 700; color: #047857;">
              100% Guaranteed Departures & Authentic Sherpa Guides
            </div>
          </div>

          <!-- SUBTAB CONTENT: GOOGLE (Active by Default) -->
          <div class="platform-reviews-content active" data-platform="google">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Unmatched Himalayan Support</h3>
                  <p class="platform-card-body">"Namaste Hiking Trek made our Everest Base Camp trip completely stress-free. From airport pick-up to acclimatization pacing, everything was world-class."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">MC</div>
                  <div class="platform-user-info">
                    <strong>Marcus Chen <span class="user-check-icon">✓</span></strong>
                    <span>Google Review • 2 weeks ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Quality & Authentic Local Service</h3>
                  <p class="platform-card-body">"Our guide Pasang was incredible with safety checks and pulse oximeter readings every evening. Highly recommend this authentic local agency!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EFF6FF; color: #1D4ED8;">ER</div>
                  <div class="platform-user-info">
                    <strong>Emma Roberts <span class="user-check-icon">✓</span></strong>
                    <span>Google Review • 1 month ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Delivers on All Safety Promises</h3>
                  <p class="platform-card-body">"Trekking Annapurna Circuit with Namaste Hiking Trek was pure magic. Clean teahouses, warm hospitality, and ethical porter care throughout."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FFFBEB; color: #B45309;">DK</div>
                  <div class="platform-user-info">
                    <strong>David Koenig <span class="user-check-icon">✓</span></strong>
                    <span>Google Review • 2 months ago</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Seamless High Altitude Logistics</h3>
                  <p class="platform-card-body">"They arranged all permits, domestic flights, and gear rentals flawlessly. You cannot find better value or expertise in Kathmandu."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FDF2F8; color: #BE185D;">SL</div>
                  <div class="platform-user-info">
                    <strong>Sarah Lindqvist <span class="user-check-icon">✓</span></strong>
                    <span>Google Review • 3 months ago</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT: TRIPADVISOR -->
          <div class="platform-reviews-content" data-platform="tripadvisor">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Bucket List EBC Trip of a Lifetime</h3>
                  <p class="platform-card-body">"14 days of surreal views. The team checked our oxygen saturation every single day and made sure our acclimatization at Dingboche was perfect."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">JT</div>
                  <div class="platform-user-info">
                    <strong>Julian T. <span class="user-check-icon">✓</span></strong>
                    <span>TripAdvisor • Canada</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Langtang Valley Magic</h3>
                  <p class="platform-card-body">"Our guide Dorje was born in the Himalayas and knew every bird, peak, and Tamang tradition. Wonderful food and warm sleeping bags."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">CW</div>
                  <div class="platform-user-info">
                    <strong>Claire Williams <span class="user-check-icon">✓</span></strong>
                    <span>TripAdvisor • UK</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Everest Three Passes Triumph</h3>
                  <p class="platform-card-body">"Crossed Kongma La, Cho La, and Renjo La without a single hitch. Exceptional mountain guides and genuine Sherpa warmth."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">RA</div>
                  <div class="platform-user-info">
                    <strong>Robert Anders <span class="user-check-icon">✓</span></strong>
                    <span>TripAdvisor • Germany</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Incredible Mardi Himal Ridge Views</h3>
                  <p class="platform-card-body">"Short, scenic, and peaceful. Machapuchare sunrise from High Camp was breathtaking. Namaste Hiking Trek handled every single detail."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E6FBF5; color: #00875A;">NH</div>
                  <div class="platform-user-info">
                    <strong>Nadia Hassan <span class="user-check-icon">✓</span></strong>
                    <span>TripAdvisor • UAE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT: TRUSTPILOT -->
          <div class="platform-reviews-content" data-platform="trustpilot">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Pristine Wilderness in Manaslu</h3>
                  <p class="platform-card-body">"Larkya La Pass at 5,106m was challenging, but our guide was with us every step. Unbeatable safety protocols and warm smiles."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">FW</div>
                  <div class="platform-user-info">
                    <strong>Felix Weber <span class="user-check-icon">✓</span></strong>
                    <span>Trustpilot • Switzerland</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Transparent Local Agency</h3>
                  <p class="platform-card-body">"No hidden extra fees. What was agreed before the trek was delivered 100%. Highly honest and trustworthy team in Nepal."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">AL</div>
                  <div class="platform-user-info">
                    <strong>Anna Lindberg <span class="user-check-icon">✓</span></strong>
                    <span>Trustpilot • Sweden</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Family Friendly Trekking</h3>
                  <p class="platform-card-body">"We trekked Ghorepani Poon Hill with our two teenage children. The team was so patient, encouraging, and warm to our whole family."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">BM</div>
                  <div class="platform-user-info">
                    <strong>The Miller Family <span class="user-check-icon">✓</span></strong>
                    <span>Trustpilot • USA</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Helicopter Rescue Peace of Mind</h3>
                  <p class="platform-card-body">"Knowing they had instant helicopter insurance coordination gave us immense peace of mind. We completed Gokyo Ri safely and comfortably!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #005128;">TK</div>
                  <div class="platform-user-info">
                    <strong>Thomas Kim <span class="user-check-icon">✓</span></strong>
                    <span>Trustpilot • South Korea</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT: FACEBOOK -->
          <div class="platform-reviews-content" data-platform="facebook">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Upper Mustang Rain-Shadow Marvel</h3>
                  <p class="platform-card-body">"Lo Manthang was like stepping into ancient Tibet. The monastery visits arranged by Namaste Hiking Trek were extraordinary."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EBF5FF; color: #1877F2;">PG</div>
                  <div class="platform-user-info">
                    <strong>Patrick Gomez <span class="user-check-icon">✓</span></strong>
                    <span>Facebook • Spain</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">100% Recommended Agency!</h3>
                  <p class="platform-card-body">"From Kathmandu welcome dinner to Everest base camp triumph, they treat you like family. Will book Manaslu next year without hesitation!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EBF5FF; color: #1877F2;">LP</div>
                  <div class="platform-user-info">
                    <strong>Laura Palmer <span class="user-check-icon">✓</span></strong>
                    <span>Facebook • Australia</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Thorong La Pass Success!</h3>
                  <p class="platform-card-body">"Crossing 5,416m with snowfall was tough, but our lead guide kept our spirits high and paced our steps with precision. Truly legendary!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EBF5FF; color: #1877F2;">DB</div>
                  <div class="platform-user-info">
                    <strong>Dmitri Bogdanov <span class="user-check-icon">✓</span></strong>
                    <span>Facebook • Latvia</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Solo Female Trekker Safe Experience</h3>
                  <p class="platform-card-body">"As a solo woman traveler doing EBC, safety and respect were paramount. I felt 100% safe, supported, and cared for the whole trip."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EBF5FF; color: #1877F2;">KC</div>
                  <div class="platform-user-info">
                    <strong>Kaitlyn Cross <span class="user-check-icon">✓</span></strong>
                    <span>Facebook • New Zealand</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- 02. TAB PANEL: CUSTOMER REVIEWS -->
        <div id="tab-customer-reviews" class="review-tab-panel">
          <div class="platform-cards-row">
            
            <div class="platform-single-card">
              <div>
                <div class="platform-card-stars">★★★★★</div>
                <h3 class="platform-card-headline">Everest Base Camp & Kala Patthar</h3>
                <p class="platform-card-body">"Daily pulse-oximeter health checks, warm sleeping bags, and standing face-to-face with Mt. Everest. The best expedition of my life!"</p>
              </div>
              <div class="platform-card-user">
                <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">MH</div>
                <div class="platform-user-info">
                  <strong>Mark & Sarah H. <span class="user-check-icon">✓</span></strong>
                  <span>London, UK • Everest Base Camp</span>
                </div>
              </div>
            </div>

            <div class="platform-single-card">
              <div>
                <div class="platform-card-stars">★★★★★</div>
                <h3 class="platform-card-headline">Annapurna Circuit & Tilicho Lake</h3>
                <p class="platform-card-body">"From subtropical banana groves to frozen high mountain lakes, Annapurna with Mingma Sherpa was a masterclass in mountain guiding."</p>
              </div>
              <div class="platform-card-user">
                <div class="platform-user-initials" style="background: #EFF6FF; color: #1D4ED8;">DM</div>
                <div class="platform-user-info">
                  <strong>David Miller <span class="user-check-icon">✓</span></strong>
                  <span>Sydney, AU • Annapurna Circuit</span>
                </div>
              </div>
            </div>

            <div class="platform-single-card">
              <div>
                <div class="platform-card-stars">★★★★★</div>
                <h3 class="platform-card-headline">Manaslu Circuit Wilderness</h3>
                <p class="platform-card-body">"Remote, peaceful, and rich Tibetan cultural heritage. Dawa Tenzing was an exceptional guide who knew every high-pass weather sign."</p>
              </div>
              <div class="platform-card-user">
                <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">JO</div>
                <div class="platform-user-info">
                  <strong>Dr. James O'Connor <span class="user-check-icon">✓</span></strong>
                  <span>Boston, USA • Manaslu Circuit</span>
                </div>
              </div>
            </div>

            <div class="platform-single-card">
              <div>
                <div class="platform-card-stars">★★★★★</div>
                <h3 class="platform-card-headline">Langtang Valley Glaciers</h3>
                <p class="platform-card-body">"Close to Kathmandu, scenic, and rich Tamang culture. Sunrise from Tserko Ri peak at 4,984m was completely unforgettable!"</p>
              </div>
              <div class="platform-card-user">
                <div class="platform-user-initials" style="background: #FFFBEB; color: #B45309;">SM</div>
                <div class="platform-user-info">
                  <strong>Sophie Martin <span class="user-check-icon">✓</span></strong>
                  <span>Lyon, France • Langtang Valley</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- 03. TAB PANEL: VIDEO REVIEWS -->
        <div id="tab-video-reviews" class="review-tab-panel">
          <div class="video-stories-grid">
            
            <div class="video-story-card open-inquiry-btn">
              <img src="images/video-thumb-david.png" alt="EBC Video Review" class="video-story-img">
              <div class="video-story-overlay">
                <span class="review-trek-badge" style="width: fit-content;">Everest Base Camp (14 Days)</span>
                <div class="video-play-btn-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div>
                  <strong style="color: #FFFFFF; font-size: 1.1rem; display: block;">Mark & Sarah Henderson (UK)</strong>
                  <span style="color: #CBD5E1; font-size: 0.86rem;">"Standing at Kala Patthar (5,545m) with Pemba Sherpa"</span>
                </div>
              </div>
            </div>

            <div class="video-story-card open-inquiry-btn">
              <img src="images/video-thumb-chad.png" alt="Annapurna Circuit Video Review" class="video-story-img">
              <div class="video-story-overlay">
                <span class="review-trek-badge" style="width: fit-content; background: #EEF2FF; color: #4338CA; border-color: #C7D2FE;">Annapurna Circuit (13 Days)</span>
                <div class="video-play-btn-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div>
                  <strong style="color: #FFFFFF; font-size: 1.1rem; display: block;">David & Elena Miller (Australia)</strong>
                  <span style="color: #CBD5E1; font-size: 0.86rem;">"Crossing Thorong La Pass at 5,416m in Snow!"</span>
                </div>
              </div>
            </div>

            <div class="video-story-card open-inquiry-btn">
              <img src="images/video-thumb-angelina.png" alt="Manaslu Video Review" class="video-story-img">
              <div class="video-story-overlay">
                <span class="review-trek-badge" style="width: fit-content; background: #FFFBEB; color: #92400E; border-color: #FDE68A;">Manaslu Tsum Valley (18 Days)</span>
                <div class="video-play-btn-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div>
                  <strong style="color: #FFFFFF; font-size: 1.1rem; display: block;">Dr. James O'Connor (USA)</strong>
                  <span style="color: #CBD5E1; font-size: 0.86rem;">"Wilderness Trekking & Ancient Monasteries"</span>
                </div>
              </div>
            </div>

            <div class="video-story-card open-inquiry-btn">
              <img src="images/video-thumb-emma.png" alt="Langtang Valley Video Review" class="video-story-img">
              <div class="video-story-overlay">
                <span class="review-trek-badge" style="width: fit-content; background: #ECFDF5; color: #065F46; border-color: #A7F3D0;">Langtang Valley (8 Days)</span>
                <div class="video-play-btn-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div>
                  <strong style="color: #FFFFFF; font-size: 1.1rem; display: block;">Emma & Lucas (UK)</strong>
                  <span style="color: #CBD5E1; font-size: 0.86rem;">"Glaciers, Yak Cheese & Sacred Gosainkunda"</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

`;

fs.writeFileSync('scratch/master_review_section.html', masterSection);
console.log('Generated scratch/master_review_section.html successfully, length:', masterSection.length);
