// Module 12: Section 10 - Modern 3-Tab Himalayan Reviews Experience (100% Template-Conforming)
function getReviewsSection() {
  return `
        <!-- Section 10: Reviews -->
        <section id="section-reviews" class="trek-detail-section">
          <h2 class="trek-section-title" style="font-size: 2.2rem; margin-bottom: 8px; text-align: left;">Best Himalayan Trekking Reviews</h2>
          <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 28px; text-align: left; max-width: 100%; margin-left: 0; margin-right: 0;">
            Over 15,000 adventure seekers have explored Everest, Annapurna, and Dhaulagiri and the Himalayas with Namaste Hiking Trek.
          </p>

          <!-- 3-Pill Tab Switcher Navigation -->
          <div class="review-tabs-container">
            <button type="button" class="review-tab-btn active" data-target="reviews-video-pane">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Video Stories (4)
            </button>
            <button type="button" class="review-tab-btn" data-target="reviews-customer-pane">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Trekker Reviews (3)
            </button>
            <button type="button" class="review-tab-btn" data-target="reviews-platform-pane">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Platform Ratings (4.9/5)
            </button>
          </div>

          <!-- Tab 1: Video Stories Pane -->
          <div id="reviews-video-pane" class="review-pane-content active">
            <div class="video-reviews-grid">
              
              <!-- Card 1: David -->
              <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="David" data-trek="Dhaulagiri Circuit 9-Day Scenic Trek">
                <img src="../../images/video-thumb-david.png" alt="David Video Review" class="video-card-bg">
                <div class="video-card-badge-top">
                  <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 5.0</span>
                  <span class="video-date-pill">14 Oct</span>
                </div>
                <button type="button" class="video-play-btn" aria-label="Play David's video review">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                    <polygon points="8 5 19 12 8 19 8 5"></polygon>
                  </svg>
                </button>
                <div class="video-card-user-info">
                  <div class="video-user-avatar">
                    <img src="../../images/video-thumb-david.png" alt="David Avatar">
                    <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </div>
                  <div class="video-user-meta">
                    <div class="video-user-name">David <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                    <div class="video-user-trek">Dhaulagiri Circuit Scenic Overland</div>
                  </div>
                </div>
              </div>

              <!-- Card 2: Emma & Liam -->
              <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Emma & Liam" data-trek="Dhaulagiri Circuit & Thupten Chholing">
                <img src="../../images/video-thumb-emma.png" alt="Emma Video Review" class="video-card-bg">
                <div class="video-card-badge-top">
                  <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 5.0</span>
                  <span class="video-date-pill">28 Oct</span>
                </div>
                <button type="button" class="video-play-btn" aria-label="Play Emma's video review">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                    <polygon points="8 5 19 12 8 19 8 5"></polygon>
                  </svg>
                </button>
                <div class="video-card-user-info">
                  <div class="video-user-avatar">
                    <img src="../../images/video-thumb-emma.png" alt="Emma Avatar">
                    <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </div>
                  <div class="video-user-meta">
                    <div class="video-user-name">Emma &amp; Liam <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                    <div class="video-user-trek">Lower Everest Cultural Trek</div>
                  </div>
                </div>
              </div>

              <!-- Card 3: Chad & Sarah -->
              <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Chad & Sarah" data-trek="Dhaulagiri Circuit Sunrise Trek">
                <img src="../../images/video-thumb-chad.png" alt="Chad Video Review" class="video-card-bg">
                <div class="video-card-badge-top">
                  <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 4.9</span>
                  <span class="video-date-pill">5 Nov</span>
                </div>
                <button type="button" class="video-play-btn" aria-label="Play Chad's video review">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                    <polygon points="8 5 19 12 8 19 8 5"></polygon>
                  </svg>
                </button>
                <div class="video-card-user-info">
                  <div class="video-user-avatar">
                    <img src="../../images/video-thumb-chad.png" alt="Chad Avatar">
                    <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </div>
                  <div class="video-user-meta">
                    <div class="video-user-name">Chad &amp; Sarah <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                    <div class="video-user-trek">Dhaulagiri Circuit Summit Viewpoint</div>
                  </div>
                </div>
              </div>

              <!-- Card 4: Angelina -->
              <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Angelina" data-trek="Solukhumbu Ridge Trek">
                <img src="../../images/video-thumb-angelina.png" alt="Angelina Video Review" class="video-card-bg">
                <div class="video-card-badge-top">
                  <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 5.0</span>
                  <span class="video-date-pill">12 Nov</span>
                </div>
                <button type="button" class="video-play-btn" aria-label="Play Angelina's video review">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none">
                    <polygon points="8 5 19 12 8 19 8 5"></polygon>
                  </svg>
                </button>
                <div class="video-card-user-info">
                  <div class="video-user-avatar">
                    <img src="../../images/video-thumb-angelina.png" alt="Angelina Avatar">
                    <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </div>
                  <div class="video-user-meta">
                    <div class="video-user-name">Angelina <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                    <div class="video-user-trek">Dhaulagiri Circuit Autumn Group</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Tab 2: Customer Reviews Stack -->
          <div id="reviews-customer-pane" class="review-pane-content" style="display: none;">
            <div class="customer-reviews-stack">

              <!-- Review Card 1: Madeline Thomson -->
              <div class="customer-review-card">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-madeline.png" alt="Madeline Thomson" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Madeline Thomson</span>
                        <span class="reviewer-country">&bull; AUSTRALIA</span>
                      </div>
                      <div class="review-date-txt">24th October 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Purchase
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">The undisputed best sunrise view of Everest without extreme altitude</h3>
                </div>

                <div class="review-meta-subline">
                  Review for 9-Day Dhaulagiri Circuit Scenic Trek &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    We chose the 9-day Dhaulagiri Circuit Trek because we wanted panoramic views of Mount Everest and the Mahalangur Himal without spending two full weeks battling extreme altitude on the traditional EBC trail. It turned out to be the greatest trekking decision we have ever made.
                  </p>
                  <p class="review-text-content">
                    The road approach through the BP Highway and Okhaldhunga up to Italian Base Camp was picturesque and completely removed any anxiety about domestic flight delays in Lukla. Walking through Jhapre with its peaceful stupa and then waking up at 4:30 AM at Base Camp for the climb to 5,360 meters gave us the crispest, most jaw-dropping sunrise imaginable. Mount Everest, Lhotse, Makalu, and Kanchenjunga all glowed golden-red against the morning horizon. Our guide Sagar managed our pacing flawlessly and made sure we stayed warm and energized with ginger tea throughout.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Dhaulagiri Circuit Himalayan Sunrise" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-summit-cairn-view-06.jpg" alt="Dhaulagiri Circuit Summit Cairn and Prayer Flags" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Dhaulagiri Circuit Ridge Trail Vista" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                    Guided by <strong>Sagar Gurung</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="24">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">24</span>)
                  </button>
                </div>
              </div>

              <!-- Review Card 2: Marcus & Brenna Vance -->
              <div class="customer-review-card">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-brenna.png" alt="Brenna Vance" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Marcus &amp; Brenna Vance</span>
                        <span class="reviewer-country">&bull; UNITED KINGDOM</span>
                      </div>
                      <div class="review-date-txt">8th November 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Purchase
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Authentic Sherpa culture, quiet trails, and flawless logistics</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Dhaulagiri Circuit &amp; Hidden Valley Cultural Trek &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    What stood out most on the Dhaulagiri Circuit trek was the tranquil authenticity of the villages. Hidden Valley was utterly charming—stone houses, apple orchards, and centuries-old prayer wheels. The detour to Thupten Chholing Monastery was a profound cultural experience; hearing hundreds of monks and nuns chanting with the Himalayan wind in the background gave me chills.
                  </p>
                  <p class="review-text-content">
                    Namaste Hiking Trek handled the entire overland transfer from Kathmandu to Dhap and the pickup from Phaplu with great professionalism. Our 4WD vehicle was comfortable and our driver knew the mountain bends inside out. The food in the teahouses was freshly prepared, hearty, and authentic. We cannot recommend this agency and route highly enough.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-thupten-chholing-monastery-02.jpg" alt="Thupten Chholing Monastery" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-jhapre-stupa-village-03.jpg" alt="Jhapre Stupa and Village" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-trekking-team-group-07.jpg" alt="Trekking Team on the Solukhumbu Trail" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Pasang Sherpa" class="guide-avatar-sm">
                    Guided by <strong>Pasang Sherpa</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="19">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">19</span>)
                  </button>
                </div>
              </div>

              <!-- Review Card 3: Sagar Patel -->
              <div class="customer-review-card">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-madeline.png" alt="Sagar Patel" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Sagar Patel</span>
                        <span class="reviewer-country">&bull; UNITED STATES</span>
                      </div>
                      <div class="review-date-txt">18th April 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Purchase
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Rhododendrons in full bloom and breathtaking 8,000m vistas</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Spring Dhaulagiri Circuit Expedition &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    As someone with limited vacation time, I couldn't risk flight cancelations into Lukla or spend 3 days stuck in Manthali. Dhaulagiri Circuit offered the ultimate road-accessible alternative. Reaching 5,360 meters felt like a real high-mountain achievement, yet the gradual staging via Dhap (2,850m) and Jhapre made altitude acclimatization smooth and natural.
                  </p>
                  <p class="review-text-content">
                    April was magical—the forests between Jhapre and Base Camp were thick with blooming rhododendrons in deep crimson, scarlet, and white. From the ridge top, you can see not just Everest, but Makalu, Kanchenjunga, and the rolling green foothills all at once. Top marks to Namaste Hiking Trek for providing down sleeping bags, medical kits, and an exceptional mountain crew.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-everest-range-panorama-08.jpg" alt="Everest Range Panorama" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-solu-valley-landscape-04.jpg" alt="Solu Valley Landscape" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Sunrise across the Ridge" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Dawa Geljen Sherpa" class="guide-avatar-sm">
                    Guided by <strong>Dawa Geljen Sherpa</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="31">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">31</span>)
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Tab 3: Platform Ratings Pane -->
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
                <span class="stars-gold" style="font-size: 1.25rem;"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="summary-score">4.9</span>
                <span class="summary-count" id="platform-summary-count">(1,549 Verified Reviews)</span>
              </div>
              <button type="button" class="btn-leave-review open-inquiry-btn" data-trek-title="Leave a Review for Namaste Hiking Trek">Leave a Review</button>
            </div>

            <!-- Platform Rich Review Cards Stack -->
            <div class="customer-reviews-stack" id="platform-cards-container">
              
              <!-- Google Review Card 1: David -->
              <div class="customer-review-card platform-review-item" data-platform="google">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-madeline.png" alt="David Miller" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">David Miller</span>
                        <span class="reviewer-country">&bull; GOOGLE REVIEW</span>
                      </div>
                      <div class="review-date-txt">14th October 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Customer
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Best sunrise panorama in all of Nepal</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Dhaulagiri Circuit 9-Day Trek &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    Namaste Hiking Trek is hands down the best operator in Kathmandu. The road trip to Dhap was well-organized with great rest stops, and walking to Jhapre and Pikey Base Camp was breathtaking. The 360-degree sunrise view from Dhaulagiri Circuit (4,065m) showing Everest, Kanchenjunga, and Makalu in the morning sunlight is something I will remember for the rest of my life.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Dhaulagiri Circuit Sunrise" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-summit-cairn-view-06.jpg" alt="Summit Viewpoint" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Mountain Ridge" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                    Guided by <strong>Sagar Gurung</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="18">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">18</span>)
                  </button>
                </div>
              </div>

              <!-- TripAdvisor Review Card: Sarah & Oliver -->
              <div class="customer-review-card platform-review-item" data-platform="tripadvisor" style="display: none;">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-brenna.png" alt="Sarah & Oliver" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Sarah &amp; Oliver</span>
                        <span class="reviewer-country">&bull; TRIPADVISOR</span>
                      </div>
                      <div class="review-date-txt">2nd November 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    TripAdvisor Verified
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Unbeatable cultural richness and zero flight stress</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Dhaulagiri Circuit &amp; Sherpa Heritage &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    We were originally nervous about high altitude, but Dhaulagiri Circuit was the sweet spot. 5,360 meters is high enough for snow-capped grandeur yet low enough that acute mountain sickness is far less likely. Hidden Valley village and Thupten Chholing Monastery were serene highlights.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-thupten-chholing-monastery-02.jpg" alt="Monastery Visit" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-jhapre-stupa-village-03.jpg" alt="Jhapre Village" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-solu-valley-landscape-04.jpg" alt="Solu Valley View" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Pasang Sherpa" class="guide-avatar-sm">
                    Guided by <strong>Pasang Sherpa</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="22">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">22</span>)
                  </button>
                </div>
              </div>

              <!-- Trustpilot Review Card: Michael K. -->
              <div class="customer-review-card platform-review-item" data-platform="trustpilot" style="display: none;">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-madeline.png" alt="Michael K." class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Michael K.</span>
                        <span class="reviewer-country">&bull; TRUSTPILOT</span>
                      </div>
                      <div class="review-date-txt">15th September 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Trustpilot Verified
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Five-star safety, support, and mountain hospitality</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Dhaulagiri Circuit 9-Day Adventure &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    From the prompt email communication before leaving Munich to the seamless pickup in Phaplu, Namaste Hiking Trek executed every commitment flawlessly. Warm sleeping bags, clean teahouse rooms, and nutritious food. Highly recommend them for anyone seeking authentic Nepal.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-trekking-team-group-07.jpg" alt="Trek Crew" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Trail Ridge" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-everest-range-panorama-08.jpg" alt="Everest Panorama" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Dawa Geljen Sherpa" class="guide-avatar-sm">
                    Guided by <strong>Dawa Geljen Sherpa</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="16">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">16</span>)
                  </button>
                </div>
              </div>

              <!-- SourceForge Review Card -->
              <div class="customer-review-card platform-review-item" data-platform="sourceforge" style="display: none;">
                <div class="customer-review-header">
                  <div class="reviewer-profile">
                    <img src="../../images/avatar-madeline.png" alt="Elena Rostova" class="reviewer-avatar">
                    <div class="reviewer-info">
                      <div class="reviewer-name-row">
                        <span class="reviewer-name">Elena Rostova</span>
                        <span class="reviewer-country">&bull; SOURCEFORGE</span>
                      </div>
                      <div class="review-date-txt">10th January 2026</div>
                    </div>
                  </div>
                  <div class="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Verified Purchase
                  </div>
                </div>

                <div class="review-rating-row">
                  <span class="stars-gold"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <h3 class="review-heading-title">Verified High Altitude Team and Flawless Organization</h3>
                </div>

                <div class="review-meta-subline">
                  Review for Dhaulagiri Circuit Expedition &bull; <a href="#section-dates" class="book-trek-link">Book this trek</a>
                </div>

                <div class="review-body-text">
                  <p class="review-text-content">
                    Top-tier mountain guiding, clear gear lists, and responsive 24/7 coordination team. The road logistics from Kathmandu to Dhap and return from Phaplu were smooth and dependable.
                  </p>
                </div>

                <!-- 3 Photo Thumbnails -->
                <div class="review-photos-grid">
                  <img src="../../images/treks/pikey-peak/pikey-peak-himalayan-sunrise-01.jpg" alt="Sunrise view" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-ridge-trail-view-05.jpg" alt="Ridge trail" class="review-photo-thumb">
                  <img src="../../images/treks/pikey-peak/pikey-peak-solu-valley-landscape-04.jpg" alt="Solu Valley" class="review-photo-thumb">
                </div>

                <div class="customer-review-footer">
                  <div class="guided-by-tag">
                    <img src="../../images/avatar-sagar.png" alt="Sagar Gurung" class="guide-avatar-sm">
                    Guided by <strong>Sagar Gurung</strong>
                  </div>
                  <button type="button" class="helpful-vote-btn" data-votes="14">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Helpful (<span class="vote-count">14</span>)
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
                <video id="video-modal-player" controls poster="../../images/video-thumb-david.png" style="width: 100%; height: 100%; border-radius: 12px; object-fit: cover;">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
        </section>
`;
}

module.exports = { getReviewsSection };
