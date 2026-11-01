function buildSectionReviews() {
  return `<section id="section-reviews" class="trek-detail-section">
            <h2 class="trek-section-title" style="font-size: 2.2rem; margin-bottom: 8px; text-align: left;">Best Himalayan Trekking Reviews</h2>
            <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 28px; text-align: left; max-width: 100%; margin-left: 0; margin-right: 0;">
              Over 15,000 adventure seekers have explored Everest, Annapurna, and Mardi Himal with Namaste Hiking Trek.
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Platform Reviews
              </button>
            </div>

            <!-- Tab Pane 1: Video Reviews -->
            <div id="reviews-video-pane" class="review-pane-content active">
              <div class="video-reviews-grid">
                <!-- Video 1 -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Mark &amp; Sarah Jenkins" data-trek="Mardi Himal Trek (8 Days)">
                  <img src="../../images/treks/mardi-himal/mardi-himal-11.webp" alt="Video review Mardi Himal" class="video-card-bg" loading="lazy">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">★ 5.0</span>
                    <span class="video-date-pill">Nov 2024</span>
                  </div>
                  <div class="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">MJ</div>
                    <div class="video-user-meta">
                      <span class="video-user-name">Mark &amp; Sarah Jenkins</span>
                      <span class="video-user-trek">United Kingdom • 8 Days Mardi Himal</span>
                    </div>
                  </div>
                </div>

                <!-- Video 2 -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Liam O'Connor" data-trek="Mardi Himal Trek (8 Days)">
                  <img src="../../images/treks/mardi-himal/mardi-himal-12.webp" alt="Video review Mardi Himal" class="video-card-bg" loading="lazy">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">★ 5.0</span>
                    <span class="video-date-pill">Oct 2024</span>
                  </div>
                  <div class="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">LO</div>
                    <div class="video-user-meta">
                      <span class="video-user-name">Liam O'Connor</span>
                      <span class="video-user-trek">Australia • 8 Days Mardi Himal</span>
                    </div>
                  </div>
                </div>

                <!-- Video 3 -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Sophie Dubois" data-trek="Mardi Himal Trek (8 Days)">
                  <img src="../../images/treks/mardi-himal/mardi-himal-13.webp" alt="Video review Mardi Himal" class="video-card-bg" loading="lazy">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">★ 5.0</span>
                    <span class="video-date-pill">Apr 2024</span>
                  </div>
                  <div class="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">SD</div>
                    <div class="video-user-meta">
                      <span class="video-user-name">Sophie Dubois</span>
                      <span class="video-user-trek">France • 8 Days Mardi Himal</span>
                    </div>
                  </div>
                </div>

                <!-- Video 4 -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="David Chen" data-trek="Mardi Himal Trek (8 Days)">
                  <img src="../../images/treks/mardi-himal/mardi-himal-14.webp" alt="Video review Mardi Himal" class="video-card-bg" loading="lazy">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill">★ 5.0</span>
                    <span class="video-date-pill">Mar 2024</span>
                  </div>
                  <div class="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">DC</div>
                    <div class="video-user-meta">
                      <span class="video-user-name">David Chen</span>
                      <span class="video-user-trek">Canada • 8 Days Mardi Himal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Pane 2: Customer Reviews -->
            <div id="reviews-customer-pane" class="review-pane-content" style="display: none;">
              <!-- Rating Summary Bar -->
              <div class="platform-summary-card" style="margin-bottom: 24px;">
                <div class="summary-left">
                  <span class="summary-score">5.0</span>
                  <div class="stars-gold" style="color: #F59E0B; font-size: 1.2rem; margin: 4px 0;">★★★★★</div>
                  <span class="summary-count">Based on 124 traveler reviews</span>
                </div>
                <div style="flex: 1; max-width: 400px;">
                  <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; margin-bottom: 4px;">
                    <span>5 stars</span>
                    <div style="flex: 1; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;"><div style="width: 98%; height: 100%; background: #10B981;"></div></div>
                    <span>98%</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem;">
                    <span>4 stars</span>
                    <div style="flex: 1; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;"><div style="width: 2%; height: 100%; background: #10B981;"></div></div>
                    <span>2%</span>
                  </div>
                </div>
              </div>

              <!-- Customer Reviews Stack -->
              <div class="customer-reviews-stack">
                <!-- Review 1 -->
                <div class="customer-review-card">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <div class="reviewer-avatar">EM</div>
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Emma &amp; Lucas Miller</span>
                          <span class="verified-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Verified Trekker
                          </span>
                        </div>
                        <span class="reviewer-country">United Kingdom • Reviewed November 2024</span>
                      </div>
                    </div>
                    <div class="review-rating-row">
                      <div class="stars-gold" style="color: #F59E0B;">★★★★★</div>
                      <span class="guided-by-tag">Guided by Pasang Sherpa</span>
                    </div>
                  </div>
                  <div class="review-body-text">
                    <h4 class="review-heading-title">Unbeatable ridge scenery and world-class care from Namaste Hiking Trek</h4>
                    <p>We booked the 8-day Mardi Himal trek after researching several agencies in Kathmandu. Choosing Namaste Hiking Trek was the best decision we made! Our guide Pasang and porter Dawa were extraordinary. The gradual pace from Forest Camp to Badal Danda allowed us to acclimatize effortlessly. Waking up at High Camp and watching the sunrise illuminate Machapuchare right in front of us was the highlight of our entire trip to Nepal. Everything was organized seamlessly from private car transfers to warm hot water bags at night.</p>
                  </div>
                  <div class="customer-review-footer">
                    <button type="button" class="helpful-vote-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      Helpful (<span class="vote-count">18</span>)
                    </button>
                  </div>
                </div>

                <!-- Review 2 -->
                <div class="customer-review-card">
                  <div class="customer-review-header">
                    <div class="reviewer-profile">
                      <div class="reviewer-avatar">BK</div>
                      <div class="reviewer-info">
                        <div class="reviewer-name-row">
                          <span class="reviewer-name">Brian &amp; Catherine Kelly</span>
                          <span class="verified-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Verified Trekker
                          </span>
                        </div>
                        <span class="reviewer-country">Ireland • Reviewed October 2024</span>
                      </div>
                    </div>
                    <div class="review-rating-row">
                      <div class="stars-gold" style="color: #F59E0B;">★★★★★</div>
                      <span class="guided-by-tag">Guided by Mingma Sherpa</span>
                    </div>
                  </div>
                  <div class="review-body-text">
                    <h4 class="review-heading-title">Much better than the crowded trails — breathtaking Fishtail views</h4>
                    <p>We wanted an authentic Himalayan trek without the massive crowds on Poon Hill. The 8-day Mardi Himal itinerary was perfection. The 2 nights at High Camp gave us time to rest and push to Upper Viewpoint at 4,200 m without rushing. The descent through Siding village gave us a wonderful window into Gurung farm life. Highly recommend Namaste Hiking Trek for their honest pricing, safety gear, and experienced guides.</p>
                  </div>
                  <div class="customer-review-footer">
                    <button type="button" class="helpful-vote-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      Helpful (<span class="vote-count">14</span>)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Pane 3: Platform Reviews -->
            <div id="reviews-platform-pane" class="review-pane-content" style="display: none;">
              <div class="platform-sub-tabs-wrapper" style="margin-bottom: 20px;">
                <div class="platform-sub-tabs">
                  <button type="button" class="platform-sub-tab active" data-platform="tripadvisor">TripAdvisor (5.0 ★★★★★)</button>
                  <button type="button" class="platform-sub-tab" data-platform="google">Google Reviews (5.0 ★★★★★)</button>
                </div>
              </div>

              <div id="platform-cards-container">
                <div class="platform-review-item" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div>
                      <strong style="color: var(--color-primary-navy);">TripAdvisor Certificate of Excellence 2024</strong>
                      <div style="color: #00AA6C; font-size: 1rem; margin-top: 2px;">●●●●● 5.0 of 5 bubbles</div>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--color-neutral-500);">Over 450+ 5-Star Reviews</span>
                  </div>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-700); margin: 0; line-height: 1.6;">"Namaste Hiking Trek is hands down the top trekking operator in Nepal. From our first inquiry email to our farewell dinner in Pokhara, everything was handled with supreme professionalism, warmth, and care."</p>
                </div>

                <div class="platform-review-item" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div>
                      <strong style="color: var(--color-primary-navy);">Google Verified Business Reviews</strong>
                      <div style="color: #4285F4; font-size: 1rem; margin-top: 2px;">★★★★★ 5.0 Rating</div>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--color-neutral-500);">280+ Verified Reviews</span>
                  </div>
                  <p style="font-size: 0.95rem; color: var(--color-neutral-700); margin: 0; line-height: 1.6;">"Our Mardi Himal 8-day trek exceeded every expectation. Safe acclimatization, delicious fresh lodge meals, and guides who treat you like family. Will definitely return to Nepal with Namaste Hiking Trek!"</p>
                </div>
              </div>
            </div>

            <!-- Video Review Lightbox Modal -->
            <div id="video-review-modal" class="video-modal-overlay" style="display: none;">
              <div class="video-modal-card">
                <div class="video-modal-header">
                  <div>
                    <h3 id="video-modal-title" style="margin: 0; font-size: 1.2rem; color: var(--color-primary-navy);">Trekker Video Story</h3>
                    <p id="video-modal-sub" style="margin: 2px 0 0; font-size: 0.85rem; color: var(--color-neutral-500);">Mardi Himal Ridge Trek</p>
                  </div>
                  <button type="button" id="video-modal-close" class="video-modal-close-btn">&times;</button>
                </div>
                <div class="video-modal-player-wrapper">
                  <video id="video-modal-player" controls style="width: 100%; border-radius: 8px;">
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>`;
}

module.exports = { buildSectionReviews };
