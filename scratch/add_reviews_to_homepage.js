const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexPath, 'utf8');

const targetMarker = '<!-- Section 4.5: Resources Related to Himalayan Trekking (Webinars, Blogs, Checklists, E-Books) -->';

const newSection = `<!-- Section: Interactive Platform & Client Reviews Switcher -->
    <section id="homepage-reviews" class="homepage-reviews-section">
      <div class="container">

        <!-- Top Segmented Switcher Pill Bar (3 Main Category Tabs) -->
        <div class="text-center" style="margin-bottom: 24px;">
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
              <strong>4.9</strong>
              <span>(1,549 Verified Reviews)</span>
            </div>
            <a href="reviews.html" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.88rem;">Leave a Review ↗</a>
          </div>

          <!-- SUBTAB CONTENT 1: GOOGLE REVIEWS -->
          <div class="platform-reviews-content active" data-platform="google">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Unmatched Himalayan Support</h3>
                  <p class="platform-card-body">"Used Namaste Hiking Trek for our custom Annapurna Circuit trip. Unbeatable price, exceptional tea house accommodations, and friendly Sherpa staff!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EEF2FF; color: #4338CA;">NP</div>
                  <div class="platform-user-info">
                    <strong>Niko P. <span class="user-check-icon">✓</span></strong>
                    <span>03/09/2025 • Google</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Quality & Authentic Local Service</h3>
                  <p class="platform-card-body">"Namaste Hiking Trek helped our small group trek to Everest Base Camp. Quick response, clear gear packing lists, and top-tier Sherpa guides."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EFF6FF; color: #1D4ED8;">MA</div>
                  <div class="platform-user-info">
                    <strong>Matthew A. <span class="user-check-icon">✓</span></strong>
                    <span>27/11/2025 • Google</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Delivers on All Safety Promises</h3>
                  <p class="platform-card-body">"After reading positive reviews on Google, I gave Namaste Hiking Trek a try. They really deliver what they promise - genuine local safety expertise."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">NM</div>
                  <div class="platform-user-info">
                    <strong>Natalia M. <span class="user-check-icon">✓</span></strong>
                    <span>12/10/2025 • Google</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Seamless High Altitude Logistics</h3>
                  <p class="platform-card-body">"From airport pickup in Kathmandu to Kala Patthar sunrise, everything was planned down to the detail. Pemba Sherpa is the best guide in Nepal."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #FFFBEB; color: #B45309;">DK</div>
                  <div class="platform-user-info">
                    <strong>Daniel K. <span class="user-check-icon">✓</span></strong>
                    <span>18/01/2026 • Google</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT 2: TRIPADVISOR -->
          <div class="platform-reviews-content" data-platform="tripadvisor">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Bucket List EBC Trip of a Lifetime</h3>
                  <p class="platform-card-body">"Pemba Sherpa and our porter team monitored our blood oxygen levels daily. We felt completely safe every single step up Kala Patthar."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">MH</div>
                  <div class="platform-user-info">
                    <strong>Mark & Sarah H. <span class="user-check-icon">✓</span></strong>
                    <span>Oct 2025 • TripAdvisor</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Langtang Valley Magic</h3>
                  <p class="platform-card-body">"Langtang Valley exceeded all expectations! Lakpa Nuru's Tamang heritage insights and local monastery stories made every day memorable."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">SM</div>
                  <div class="platform-user-info">
                    <strong>Sophie Martin <span class="user-check-icon">✓</span></strong>
                    <span>Sep 2025 • TripAdvisor</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Everest Three Passes Triumph</h3>
                  <p class="platform-card-body">"Crossing Kongma La, Cho La, and Renjo La was tough but utterly rewarding. Exceptional guide leadership and warm tea lodge bookings."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">TB</div>
                  <div class="platform-user-info">
                    <strong>Thomas Berg <span class="user-check-icon">✓</span></strong>
                    <span>Apr 2025 • TripAdvisor</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Incredible Mardi Himal Ridge Views</h3>
                  <p class="platform-card-body">"Mardi Himal in 6 days was perfect for our schedule. Sunset over Machhapuchhre was breathtaking. Thank you Namaste Hiking Trek!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #E8F5E9; color: #00AA6C;">LW</div>
                  <div class="platform-user-info">
                    <strong>Lisa Wright <span class="user-check-icon">✓</span></strong>
                    <span>Nov 2025 • TripAdvisor</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT 3: TRUSTPILOT -->
          <div class="platform-reviews-content" data-platform="trustpilot">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Pristine Wilderness in Manaslu</h3>
                  <p class="platform-card-body">"Manaslu is far less crowded than Annapurna. Dawa Tenzing introduced us to local monastery lamas and handled restricted permits effortlessly."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">JO</div>
                  <div class="platform-user-info">
                    <strong>Dr. James O'Connor <span class="user-check-icon">✓</span></strong>
                    <span>Oct 2025 • Trustpilot</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Transparent Local Agency</h3>
                  <p class="platform-card-body">"No middleman commissions, direct local Sherpa pricing, and 100% ethical porter treatment. Truly the most reliable company in Nepal."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">RC</div>
                  <div class="platform-user-info">
                    <strong>Rachel Chen <span class="user-check-icon">✓</span></strong>
                    <span>Dec 2025 • Trustpilot</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Family Friendly Trekking</h3>
                  <p class="platform-card-body">"Our family trekked Poon Hill with Namaste Hiking Trek. The guide paced my two teenage kids wonderfully. Memories for a lifetime!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">GR</div>
                  <div class="platform-user-info">
                    <strong>George Rossi <span class="user-check-icon">✓</span></strong>
                    <span>Nov 2025 • Trustpilot</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Helicopter Rescue Peace of Mind</h3>
                  <p class="platform-card-body">"When severe Lukla fog hit, Namaste Hiking Trek coordinated a seamless helicopter transfer within 2 hours. Top-notch emergency support."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #ECFDF5; color: #047857;">AH</div>
                  <div class="platform-user-info">
                    <strong>Alex Harrington <span class="user-check-icon">✓</span></strong>
                    <span>Feb 2026 • Trustpilot</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SUBTAB CONTENT 4: FACEBOOK -->
          <div class="platform-reviews-content" data-platform="facebook">
            <div class="platform-cards-row">
              
              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Upper Mustang Rain-Shadow Marvel</h3>
                  <p class="platform-card-body">"We trekked Mustang in July monsoon season and had clear dry weather every day in the rain-shadow. Seeing Lo Manthang was unforgettable."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EEF2FF; color: #4338CA;">CG</div>
                  <div class="platform-user-info">
                    <strong>Carlos Garcia <span class="user-check-icon">✓</span></strong>
                    <span>Jul 2025 • Facebook</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">100% Recommended Agency!</h3>
                  <p class="platform-card-body">"Recommended to all my trekking friends in Europe. Authentic Sherpa guides, warm sleeping bags provided, and great vegetarian teahouse food."</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EEF2FF; color: #4338CA;">EK</div>
                  <div class="platform-user-info">
                    <strong>Emma Keller <span class="user-check-icon">✓</span></strong>
                    <span>Aug 2025 • Facebook</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Thorong La Pass Success!</h3>
                  <p class="platform-card-body">"Mingma Sherpa guided us safely across 5,416m Thorong La Pass in deep snow. His encouragement kept the group motivated!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EEF2FF; color: #4338CA;">DM</div>
                  <div class="platform-user-info">
                    <strong>David Miller <span class="user-check-icon">✓</span></strong>
                    <span>Nov 2025 • Facebook</span>
                  </div>
                </div>
              </div>

              <div class="platform-single-card">
                <div>
                  <div class="platform-card-stars">★★★★★</div>
                  <h3 class="platform-card-headline">Solo Female Trekker Safe Experience</h3>
                  <p class="platform-card-body">"As a solo female traveler on Everest Base Camp trek, I felt 100% safe and welcomed by the Sherpa team. Can't wait to return!"</p>
                </div>
                <div class="platform-card-user">
                  <div class="platform-user-initials" style="background: #EEF2FF; color: #4338CA;">SJ</div>
                  <div class="platform-user-info">
                    <strong>Sarah Jenkins <span class="user-check-icon">✓</span></strong>
                    <span>Oct 2025 • Facebook</span>
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
                <p class="platform-card-body">"Remote, peaceful, and rich Tibetan cultural heritage. Dawa Tenzing was an exceptional guide."</p>
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
                <p class="platform-card-body">"Close to Kathmandu, scenic, and rich Tamang culture. Sunrise from Tserko Ri peak was unforgettable!"</p>
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

          </div>
        </div>

      </div>
    </section>\n\n` + targetMarker;

content = content.replace(targetMarker, newSection);
fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully inserted homepage reviews section!');
