const fs = require('fs');

function getReviewsHtml() {
  const starSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const stars5 = `${starSvg}${starSvg}${starSvg}${starSvg}${starSvg}`;
  const checkSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const verifiedBadge = `<div class="verified-badge">${checkSvg} Verified Purchase</div>`;
  const thumbCheck = `<span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>`;
  const blueCheck = `<span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>`;
  const helpfulIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`;

  return `
          <!-- Section 11: Reviews -->
          <section id="section-reviews" class="trek-detail-section">
            <h2 class="trek-section-title" style="font-size: 2.2rem; margin-bottom: 8px; text-align: left;">Best Himalayan Trekking Reviews</h2>
            <p class="section-subtitle" style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 28px; text-align: left; max-width: 100%;">
              Over 15,000 adventure seekers have explored Manaslu, Annapurna, and Everest with Namaste Hiking Trek.
            </p>

            <!-- 3-Pill Tab Switcher Navigation -->
            <div class="review-tabs-container">
              <button type="button" class="review-tab-btn active" data-target="reviews-video-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Video Reviews
              </button>
              <button type="button" class="review-tab-btn" data-target="reviews-customer-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Customer Reviews
              </button>
              <button type="button" class="review-tab-btn" data-target="reviews-platform-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Platform Reviews
              </button>
            </div>

            <!-- Tab 1: Video Reviews Grid -->
            <div id="reviews-video-pane" class="review-pane-content active">
              <div class="video-reviews-grid">
                <!-- Card 1: Chad -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Chad" data-trek="Manaslu Restricted Circuit">
                  <img src="../../images/video-thumb-chad.png" alt="Chad Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">${starSvg} 4.9</span>
                    <span class="video-date-pill">11 January</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-chad.png" alt="Chad Avatar">
                      ${thumbCheck}
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">Chad ${blueCheck}</div>
                      <div class="video-user-trek">Manaslu Restricted Circuit</div>
                    </div>
                  </div>
                </div>

                <!-- Card 2: David -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="David" data-trek="Manaslu & Annapurna High Passes">
                  <img src="../../images/video-thumb-david.png" alt="David Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">${starSvg} 4.8</span>
                    <span class="video-date-pill">9 May</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-david.png" alt="David Avatar">
                      ${thumbCheck}
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">David ${blueCheck}</div>
                      <div class="video-user-trek">Manaslu & Annapurna High Passes</div>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Emma -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Emma" data-trek="Manaslu Larkya La Circuit">
                  <img src="../../images/video-thumb-emma.png" alt="Emma Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">${starSvg} 5.0</span>
                    <span class="video-date-pill">28 February</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-emma.png" alt="Emma Avatar">
                      ${thumbCheck}
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">Emma ${blueCheck}</div>
                      <div class="video-user-trek">Manaslu Larkya La Circuit</div>
                    </div>
                  </div>
                </div>

                <!-- Card 4: Angelina -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Angelina" data-trek="Manaslu Circuit & Tsum Valley">
                  <img src="../../images/video-thumb-angelina.png" alt="Angelina Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">${starSvg} 4.9</span>
                    <span class="video-date-pill">14 March</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-angelina.png" alt="Angelina Avatar">
                      ${thumbCheck}
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">Angelina ${blueCheck}</div>
                      <div class="video-user-trek">Manaslu Circuit & Tsum Valley</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Customer Written Reviews -->
            <div id="reviews-customer-pane" class="review-pane-content" style="display: none;">
              <div class="customer-reviews-stack">
                <!-- Review Card 1: Markus Keller -->
                <div class="customer-review-card">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-brenna.png" alt="Markus Keller" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Markus Keller</span>
                          <span class="reviewer-country">· SWITZERLAND</span>
                        </div>
                        <div class="review-date-txt">18th October 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Unforgettable Larkya La Crossing at Sunrise!</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek (14 Days) · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      The Manaslu Circuit exceeded all our expectations. Having two scheduled acclimatization stays in Samagaon (3,530 m) and Samdo (3,860 m) made a huge difference—our party reached the 5,106 m Larkya La Pass feeling strong, acclimatized, and completely clearheaded. Our guide Pasang checked our pulse oximeter readings twice daily and shared the rich Tibetan Buddhist history of Upper Nubri. The mountain lodges booked by Namaste Hiking Trek were comfortable and warm, with hearty, nutritious meals prepared fresh every evening. Truly a life-changing adventure!
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg" alt="Sunrise over Mount Manaslu" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-10.jpg" alt="Suspension Bridge over Budhi Gandaki" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-landscape-02.jpg" alt="Ancient Nubri Mountain Village" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="28">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">28</span>)
                    </button>
                  </div>
                </div>

                <!-- Review Card 2: Elena Rostova -->
                <div class="customer-review-card">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-madeline.png" alt="Elena Rostova" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Elena Rostova</span>
                          <span class="reviewer-country">· CANADA</span>
                        </div>
                        <div class="review-date-txt">24th April 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Way More Authentic and Pristine than Annapurna or EBC</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek (14 Days) · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      We wanted a remote, high-altitude Himalayan circuit without commercial crowds, and Manaslu delivered in every dimension. Walking through deep pine and rhododendron forests along the roaring Budhi Gandaki River, crossing dramatic high suspension bridges, and gazing up at Mount Manaslu from Lho was magical. Namaste Hiking Trek took care of all four restricted permits (RAP, MCAP, ACAP, TIMS) effortlessly before we landed in Kathmandu. Their 4WD transportation from Kathmandu to Machha Khola and Besisahar back was smooth and reliable.
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-trekker-high-valley-06.jpg" alt="Trekker in High Himalayan Valley" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Prayer flags fluttering in Samagaon" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg" alt="Highland Yak Pasture under Manaslu" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="21">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">21</span>)
                    </button>
                  </div>
                </div>

                <!-- Review Card 3: Thomas & Claire Davies -->
                <div class="customer-review-card">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-brenna.png" alt="Thomas Davies" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Thomas & Claire Davies</span>
                          <span class="reviewer-country">· UNITED KINGDOM</span>
                        </div>
                        <div class="review-date-txt">8th November 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Flawless Acclimatization and Exceptional Safety Protocol</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek (14 Days) · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      Safety was our primary concern before booking a 5,100+ m pass trek. Namaste Hiking Trek's pre-trip advice on gear and physical preparation was spot on. On trail, the gradual elevation profile and two rest/side-trip days in Samagaon to Birendra Tal and Manaslu Base Camp were game changers. Our guide checked on us constantly, paced our walking rhythm perfectly, and the porters were treated with genuine care and respect. If you want a genuine, rugged Nepal trek with maximum peace of mind, book with this company.
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg" alt="Suspension Bridge Mountain View" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-closeup-05.jpg" alt="Manaslu Sunrise Closeup" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-dawn-12.jpg" alt="Mountain Village Dawn" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="19">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">19</span>)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Platform Reviews -->
            <div id="reviews-platform-pane" class="review-pane-content" style="display: none;">
              <!-- Secondary Platform Sub-Navigation Bar -->
              <div class="platform-sub-tabs-wrapper">
                <div class="platform-sub-tabs">
                  <button type="button" class="platform-sub-tab active" data-platform="google">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>
                    Google Reviews
                  </button>
                  <button type="button" class="platform-sub-tab" data-platform="tripadvisor">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00AA6C"><circle cx="12" cy="12" r="10"/></svg>
                    TripAdvisor
                  </button>
                  <button type="button" class="platform-sub-tab" data-platform="trustpilot">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00B67A"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Trustpilot
                  </button>
                  <button type="button" class="platform-sub-tab" data-platform="sourceforge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#EE5A24"><polygon points="12 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg>
                    SourceForge
                  </button>
                </div>
              </div>

              <!-- Rating Summary Header Card -->
              <div class="platform-summary-card">
                <div class="summary-left">
                  <span class="stars-gold" style="font-size: 1.25rem;">${stars5}</span>
                  <span class="summary-score">4.9</span>
                  <span class="summary-count" id="platform-summary-count">(1,549 Verified Reviews)</span>
                </div>
                <button type="button" class="btn-leave-review open-inquiry-btn" data-trek-title="Leave a Review for Manaslu Circuit Trek">Leave a Review</button>
              </div>

              <!-- Platform Rich Review Cards Stack -->
              <div class="customer-reviews-stack" id="platform-cards-container">
                <!-- Google Card 1: Markus Keller -->
                <div class="customer-review-card platform-review-item" data-platform="google">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-brenna.png" alt="Markus Keller" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Markus Keller</span>
                          <span class="reviewer-country">· GOOGLE REVIEW</span>
                        </div>
                        <div class="review-date-txt">18th October 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Unforgettable Larkya La Crossing at Sunrise!</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      The Manaslu Circuit exceeded all our expectations. Having two scheduled acclimatization stays in Samagaon (3,530 m) and Samdo (3,860 m) made a huge difference—our party reached the 5,106 m Larkya La Pass feeling strong, acclimatized, and completely clearheaded. Our guide Pasang checked our pulse oximeter readings twice daily and shared the rich Tibetan Buddhist history of Upper Nubri. Highly recommend Namaste Hiking Trek!
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg" alt="Sunrise over Mount Manaslu" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-10.jpg" alt="Suspension Bridge over Budhi Gandaki" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-landscape-02.jpg" alt="Ancient Nubri Mountain Village" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="28">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">28</span>)
                    </button>
                  </div>
                </div>

                <!-- Google Card 2: Elena Rostova -->
                <div class="customer-review-card platform-review-item" data-platform="google">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-madeline.png" alt="Elena Rostova" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Elena Rostova</span>
                          <span class="reviewer-country">· GOOGLE REVIEW</span>
                        </div>
                        <div class="review-date-txt">24th April 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Way More Authentic and Pristine than Annapurna or EBC</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      We wanted a remote, high-altitude Himalayan circuit without commercial crowds, and Manaslu delivered in every dimension. Walking through deep pine and rhododendron forests along the roaring Budhi Gandaki River, crossing dramatic high suspension bridges, and gazing up at Mount Manaslu from Lho was magical. Namaste Hiking Trek took care of all four restricted permits effortlessly.
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-trekker-high-valley-06.jpg" alt="Trekker in High Himalayan Valley" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Prayer flags fluttering in Samagaon" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg" alt="Highland Yak Pasture under Manaslu" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="21">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">21</span>)
                    </button>
                  </div>
                </div>

                <!-- TripAdvisor Card: Sarah Jenkins -->
                <div class="customer-review-card platform-review-item" data-platform="tripadvisor" style="display: none;">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-madeline.png" alt="Sarah Jenkins" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Sarah Jenkins</span>
                          <span class="reviewer-country">· TRIPADVISOR</span>
                        </div>
                        <div class="review-date-txt">14th May 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Top #1 Agency in Kathmandu for Restricted Area Treks</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      Booking the Manaslu Circuit through Namaste Hiking Trek was seamless. Exceptional mountain guides and flawless logistics! From Kathmandu 4WD transfer to the highest tea houses in Dharamsala, every detail was handled with precision and warmth.
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg" alt="Suspension bridge view" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg" alt="Manaslu sunrise" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg" alt="Nubri village prayer flags" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="35">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">35</span>)
                    </button>
                  </div>
                </div>

                <!-- Trustpilot Card: Emily Taylor -->
                <div class="customer-review-card platform-review-item" data-platform="trustpilot" style="display: none;">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-brenna.png" alt="Emily Taylor" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Emily Taylor</span>
                          <span class="reviewer-country">· TRUSTPILOT</span>
                        </div>
                        <div class="review-date-txt">2nd October 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Transparent, Reliable & Highly Professional</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      No hidden costs, 100% transparent pricing, and instant communication on WhatsApp. Crossing Larkya La Pass was smooth and safe thanks to the experienced team. Best trekking operator in Nepal hands down!
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-trekker-high-valley-06.jpg" alt="Trekker in high valley" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-landscape-02.jpg" alt="Mountain village landscape" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-closeup-05.jpg" alt="Manaslu peak closeup" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="18">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">18</span>)
                    </button>
                  </div>
                </div>

                <!-- SourceForge Card: Mark Roberts -->
                <div class="customer-review-card platform-review-item" data-platform="sourceforge" style="display: none;">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <img src="../../images/avatar-madeline.png" alt="Mark Roberts" class="reviewer-avatar">
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Mark Roberts</span>
                          <span class="reviewer-country">· SOURCEFORGE</span>
                        </div>
                        <div class="review-date-txt">1st January 2025</div>
                      </div>
                    </div>
                    ${verifiedBadge}
                  </div>

                  <div class="review-rating-row">
                    <span class="stars-gold">${stars5}</span>
                    <h3 class="review-heading-title">Verified High Altitude Expedition Team</h3>
                  </div>

                  <div class="review-meta-subline">
                    Review for Manaslu Circuit Trek · <a href="#section-booking" class="book-trek-link">Book this trek</a>
                  </div>

                  <div class="review-body-text">
                    <p class="review-text-content">
                      Professional 14-day itinerary, comprehensive packing checklist, and responsive operations support from start to finish. Reaching 5,106 m at Larkya La was one of the greatest accomplishments of my life!
                    </p>
                    <button type="button" class="review-see-more-btn">See more</button>
                  </div>

                  <!-- 3 Photo Thumbnails -->
                  <div class="review-photos-grid">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-10.jpg" alt="Suspension bridge" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg" alt="Yak pasture" class="review-photo-thumb">
                    <img src="../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-dawn-12.jpg" alt="Village dawn" class="review-photo-thumb">
                  </div>

                  <div class="customer-review-footer">
                    <div class="guided-by-tag">
                      <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                      Guided by <strong>Sagar Gurung</strong>
                    </div>
                    <button type="button" class="helpful-vote-btn" data-votes="12">
                      ${helpfulIcon}
                      Helpful (<span class="vote-count">12</span>)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Video Player Lightbox Modal -->
            <div id="video-review-modal" class="video-modal-overlay">
              <div class="video-modal-card">
                <button type="button" id="video-modal-close" class="video-modal-close-btn">&times;</button>
                <div class="video-modal-header">
                  <h3 id="video-modal-title" style="color: var(--color-primary-navy); margin-bottom: 4px;">Video Review</h3>
                  <span id="video-modal-sub" style="color: var(--color-copper-orange); font-weight: 600; font-size: 0.9rem;">Namaste Hiking Trek Experience</span>
                </div>
                <div class="video-modal-player-wrapper">
                  <video id="video-modal-player" controls poster="../../images/video-thumb-chad.png" style="width: 100%; height: 100%; border-radius: 12px; object-fit: cover;">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
          </section>`;
}

module.exports = getReviewsHtml;
