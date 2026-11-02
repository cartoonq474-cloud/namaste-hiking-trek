// Module 14: Sidebar Booking Card, You Might Also Like, Modals, Tourvia-Inspired Luxury Footer & Scripts
function getSidebarAndFooter() {
  return `
        </div>

        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span id="sidebar-display-price" style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,999</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">20 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table (Hidden by default, expandable) -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">1 Person (Solo Private)</span>
                  <strong style="color: #0F172A;">$2,499 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,999 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,899 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">9 - 12 Persons</span>
                  <strong style="color: #0F172A;">$1,799 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">13+ Persons</span>
                  <strong style="color: #047857;">$1,699 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (20 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (20 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Trek Leading by well trained Team</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Hassle-Free &amp; Instant Booking</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Customers Satisfaction</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Reasonable Price &amp; Best Service</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>No Hidden Cost &amp; Secure Payment</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <!-- Phone Call Button -->
                  <a href="tel:+9779800000000" aria-label="Call Us" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #CBD5E1; background: #FFFFFF; display: flex; align-items: center; justify-content: center; color: #0F172A; text-decoration: none; transition: all 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <!-- WhatsApp Button -->
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" aria-label="WhatsApp Us" style="width: 44px; height: 44px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>

      </div>
    </section>

    <!-- You Might Also Like — Full-Width Recommendation Section -->
    <section class="you-might-like-section">
      <div class="container">
        <div class="yml-header">
          <span class="yml-pill-tag">MORE ADVENTURES</span>
          <div class="yml-title-row">
            <span class="yml-accent-bar"></span>
            <h2 class="yml-title">You might also like</h2>
          </div>
          <p class="yml-subtitle">Handpicked trips in the same region and style — a natural next step from this one.</p>
        </div>

        <div class="yml-cards-grid">
          <!-- Card 1: Everest Base Camp Trek -->
          <a href="../everest-base-camp-trek/" class="yml-card">
            <div class="yml-card-image">
              <img src="../../images/treks/everest-base-camp/everest-base-camp-trekking-group-mountain-panorama-11.jpg" alt="Everest Base Camp Trek" loading="lazy">
              <div class="yml-card-overlay"></div>
              <span class="yml-card-badge">Everest Region</span>
            </div>
            <div class="yml-card-body">
              <h3 class="yml-card-title">Everest Base Camp Trek</h3>
              <div class="yml-card-rating">
                <span class="yml-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="yml-score">5.0</span>
                <span class="yml-count">(124 reviews)</span>
              </div>
              <div class="yml-card-meta">
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  14 days
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg>
                  5,364 m
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Challenging
                </span>
              </div>
              <div class="yml-card-footer">
                <div>
                  <span class="yml-from">FROM</span>
                  <span class="yml-price">$1,399</span>
                </div>
                <span class="yml-explore-link">Explore Trip &rarr;</span>
              </div>
            </div>
          </a>

          <!-- Card 2: Annapurna Circuit Trek -->
          <a href="../annapurna-circuit-trek/" class="yml-card">
            <div class="yml-card-image">
              <img src="../../images/treks/annapurna-circuit/annapurna-circuit-thorong-la-pass-landscape-1.jpg" alt="Annapurna Circuit Trek" loading="lazy">
              <div class="yml-card-overlay"></div>
              <span class="yml-card-badge">Annapurna Region</span>
            </div>
            <div class="yml-card-body">
              <h3 class="yml-card-title">Annapurna Circuit Trek</h3>
              <div class="yml-card-rating">
                <span class="yml-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="yml-score">5.0</span>
                <span class="yml-count">(98 reviews)</span>
              </div>
              <div class="yml-card-meta">
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  16 days
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg>
                  5,416 m
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Challenging
                </span>
              </div>
              <div class="yml-card-footer">
                <div>
                  <span class="yml-from">FROM</span>
                  <span class="yml-price">$1,199</span>
                </div>
                <span class="yml-explore-link">Explore Trip &rarr;</span>
              </div>
            </div>
          </a>

          <!-- Card 3: Manaslu Circuit Trek -->
          <a href="../manaslu-circuit-trek/" class="yml-card">
            <div class="yml-card-image">
              <img src="../../images/treks/manaslu-circuit/manaslu-circuit-larkya-la-pass-mountain-panorama-1.jpg" alt="Manaslu Circuit Trek" loading="lazy">
              <div class="yml-card-overlay"></div>
              <span class="yml-card-badge">Manaslu Region</span>
            </div>
            <div class="yml-card-body">
              <h3 class="yml-card-title">Manaslu Circuit Trek</h3>
              <div class="yml-card-rating">
                <span class="yml-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="yml-score">4.9</span>
                <span class="yml-count">(76 reviews)</span>
              </div>
              <div class="yml-card-meta">
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  15 days
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 19-7-4-7 4 7-19z"/></svg>
                  5,106 m
                </span>
                <span class="yml-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Strenuous
                </span>
              </div>
              <div class="yml-card-footer">
                <div>
                  <span class="yml-from">FROM</span>
                  <span class="yml-price">$1,299</span>
                </div>
                <span class="yml-explore-link">Explore Trip &rarr;</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    </article>
  </main>

  <!-- Inquiry Modal -->
  <div id="inquiry-modal" class="modal-overlay">
    <div class="modal-card">
      <button class="modal-close" id="modal-close-btn">&times;</button>
      <h3 style="font-size: 1.5rem; margin-bottom: 6px;">Inquire About Dhaulagiri Circuit Trek</h3>
      <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
        Fill out this quick form and our lead Himalayan guide will respond within 4 hours.
      </p>
      <form id="inquiry-form">
        <div class="filter-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label" for="inq-name">Full Name *</label>
            <input type="text" id="inq-name" class="form-input" required placeholder="e.g. Sarah Jenkins">
          </div>
          <div class="form-group">
            <label class="form-label" for="inq-email">Email Address *</label>
            <input type="email" id="inq-email" class="form-input" required placeholder="e.g. sarah@example.com">
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 20px;">
          <label class="form-label" for="inq-notes">Preferred Start Date &amp; Questions</label>
          <textarea id="inq-notes" class="form-textarea" rows="3" placeholder="Tell us your target travel month, group size, or custom route request..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">Submit Booking Inquiry</button>
      </form>
    </div>
  </div>

  <!-- Luxury Cinematic Footer (Tourvia Inspired with All Pages) -->
  <footer class="site-footer">
    <div class="container">

      <!-- Top 4-Column Luxury Layout -->
      <div class="footer-luxury-layout">

        <!-- Column 1: Main Pages -->
        <div class="footer-nav-col">
          <h4>Main Pages</h4>
          <ul class="footer-nav-links">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../nepal-trekking-packages/">All Trek Packages</a></li>
            <li><a href="../../trek/dhaulagiri-circuit-trek/">Dhaulagiri Circuit Trek</a></li>
            <li><a href="../../trek/everest-base-camp-trek/">Everest Base Camp</a></li>
            <li><a href="../../trekking-regions-nepal/">Trekking Regions</a></li>
            <li><a href="../../custom-plan.html">Tailor-Made Trip</a></li>
          </ul>
        </div>

        <!-- Column 2: Essential Info -->
        <div class="footer-nav-col">
          <h4>Essential Info</h4>
          <ul class="footer-nav-links">
            <li><a href="../../nepal-travel-guide/">Nepal Travel Guide</a></li>
            <li><a href="../../about.html">About Us</a></li>
            <li><a href="../../team.html">Meet Our Team</a></li>
            <li><a href="../../careers.html">Careers &amp; Jobs</a></li>
            <li><a href="../../reviews.html">Reviews &amp; Testimonials</a></li>
            <li><a href="../../blogs.html">Blog &amp; Articles</a></li>
            <li><a href="../../contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 3: Center Expedition Title & Pill CTA -->
        <div class="footer-cta-center">
          <div class="footer-cta-title">Expedition Expertise<br>at Your Service</div>
          <button class="btn-journey-pill open-inquiry-btn">
            <span>Begin Your Journey</span>
            <span class="arrow-circle-green">↗</span>
          </button>
        </div>

        <!-- Column 4: Social Media -->
        <div class="footer-social-col" style="text-align: right;">
          <h4>Social Media</h4>
          <ul class="footer-nav-links">
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://wa.me/9779800000000" target="_blank">WhatsApp</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar Strip -->
      <div class="footer-bottom-strip">
        <div>&copy; 2026 Namaste Hiking Trek. All Rights Reserved.</div>
        <div class="footer-legal-links">
          <a href="../../privacy-policy.html">Privacy Policy</a>
          <a href="../../terms-and-conditions.html">Terms &amp; Conditions</a>
        </div>
      </div>

    </div>

    <!-- Giant Watermark Brand Typography at Bottom -->
    <div class="watermark-brand-container">
      <div class="watermark-brand-text">NAMASTE.</div>
    </div>
  </footer>

  <!-- Mobile Floating Book CTA — hidden on desktop via CSS -->
  <a href="#sidebar-display-price" class="mobile-book-cta" aria-label="Book Dhaulagiri Circuit Trek">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
    Book This Trek — From $1,999
  </a>

  <script type="module" src="../../js/altitude-visualizer.js"></script>
  <script type="module" src="../../js/weather-visualizer.js"></script>
  <script type="module" src="../../js/inquiry-modal.js"></script>
  <script src="../../js/trek-details.js?v=11"></script>
  <script src="../../js/header-scroll.js"></script>
  <script src="../../js/mega-menu.js"></script>

  <script>
    // Hero Summary Learn More Toggle
    document.addEventListener('DOMContentLoaded', () => {
      const toggleBtn = document.getElementById('dhaulagiri-toggle-btn');
      const moreText = document.getElementById('dhaulagiri-more-text');
      const toggleLabel = document.getElementById('dhaulagiri-toggle-label');
      const toggleIcon = document.getElementById('dhaulagiri-toggle-icon');
      if (toggleBtn && moreText) {
        toggleBtn.addEventListener('click', () => {
          const isExpanded = moreText.style.display !== 'none';
          if (isExpanded) {
            moreText.style.display = 'none';
            toggleLabel.textContent = 'Learn More';
            if (toggleIcon) toggleIcon.style.transform = 'rotate(0deg)';
          } else {
            moreText.style.display = 'inline';
            toggleLabel.textContent = 'Show Less';
            if (toggleIcon) toggleIcon.style.transform = 'rotate(180deg)';
          }
        });
      }
    });

  </script>
</body>
</html>
`;
}

module.exports = { getSidebarAndFooter };
