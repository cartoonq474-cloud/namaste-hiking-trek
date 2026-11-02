// Module 14: Sidebar Booking Card, You Might Also Like, Modals, Tourvia-Inspired Luxury Footer & Scripts
function getSidebarAndFooter() {
  return `
        </div>

        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card" style="position: sticky; top: 90px; background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-md);">
              
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
              <div class="group-discount-toggle" onclick="const table = document.getElementById('sidebar-gd-table'); const arrow = document.getElementById('sidebar-gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span id="sidebar-gd-arrow" class="gd-arrow" style="font-size: 0.75rem; color: #64748B; transition: transform 0.2s ease;">▼</span>
              </div>
              <div id="sidebar-gd-table" class="group-discount-table" style="display: none; margin-bottom: 18px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px; font-size: 0.82rem;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0; color: #64748B;">
                  <span>1 Person</span>
                  <strong style="color: #0F172A;">$890</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0; color: #64748B;">
                  <span>2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,999 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0; color: #64748B;">
                  <span>5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$749 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0; color: #64748B;">
                  <span>9 - 12 Persons</span>
                  <strong style="color: #0F172A;">$1,720 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; color: #64748B;">
                  <span>13+ Persons</span>
                  <strong style="color: #008060;">$649 / person</strong>
                </div>
              </div>

              <!-- Booking Form Inputs -->
              <div style="margin-bottom: 16px;">
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #0F172A; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">Departure Date</label>
                <input type="date" id="sidebar-departure-date" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 0.9rem; color: #0F172A; background: #FFFFFF; font-family: inherit;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #0F172A; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">Number of Trekkers</label>
                <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 6px 12px;">
                  <button type="button" onclick="changeSidebarGuests(-1)" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #CBD5E1; background: #FFFFFF; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #0F172A;">-</button>
                  <span id="sidebar-guests-count" style="font-weight: 700; font-size: 1.05rem; color: #0F172A;">2 Travelers</span>
                  <button type="button" onclick="changeSidebarGuests(1)" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #CBD5E1; background: #FFFFFF; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #0F172A;">+</button>
                </div>
              </div>

              <!-- Action CTAs -->
              <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px;">
                <button type="button" class="btn btn-primary open-inquiry-btn" style="width: 100%; padding: 14px; font-size: 1rem; font-weight: 700; border-radius: 8px; border: none; background: #008060; color: #FFFFFF; cursor: pointer; box-shadow: 0 4px 12px rgba(0, 128, 96, 0.25); transition: background 0.2s ease;">
                  Book This Trek
                </button>
                <button type="button" class="btn btn-outline open-inquiry-btn" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 600; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFFFFF; color: #0F172A; cursor: pointer; transition: background 0.2s ease;">
                  Inquire / Custom Plan
                </button>
              </div>

              <!-- Trust Guarantee Bullets -->
              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem; color: #64748B; padding-top: 14px; border-top: 1px solid #E2E8F0;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Free date change up to 30 days before</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>100% Refundable deposit guarantee</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Pay 20% now, balance on arrival in Kathmandu</span>
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
                <span class="yml-rating-text">5.0 · 169 reviews</span>
              </div>
              <div class="yml-card-footer">
                <div class="yml-card-price">
                  <span class="yml-price-label">Starting from</span>
                  <span class="yml-price-value">USD <strong>1299</strong></span>
                </div>
                <span class="yml-view-trip-btn">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 2: Langtang Gosaikunda Trek -->
          <a href="../langtang-gosaikunda-trek/" class="yml-card">
            <div class="yml-card-image">
              <img src="../../images/treks/langtang-gosaikunda/langtang-gosaikunda-sacred-alpine-lake-panoramic-view-01.jpg" alt="Langtang Gosaikunda Trek" loading="lazy">
              <div class="yml-card-overlay"></div>
              <span class="yml-card-badge">Langtang Region</span>
            </div>
            <div class="yml-card-body">
              <h3 class="yml-card-title">Langtang Gosaikunda Trek</h3>
              <div class="yml-card-rating">
                <span class="yml-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="yml-rating-text">5.0 · 84 reviews</span>
              </div>
              <div class="yml-card-footer">
                <div class="yml-card-price">
                  <span class="yml-price-label">Starting from</span>
                  <span class="yml-price-value">USD <strong>899</strong></span>
                </div>
                <span class="yml-view-trip-btn">View Trip →</span>
              </div>
            </div>
          </a>

          <!-- Card 3: Annapurna Base Camp Trek -->
          <a href="../annapurna-base-camp-trek/" class="yml-card">
            <div class="yml-card-image">
              <img src="../../images/similar-trek-tengboche.png" alt="Annapurna Base Camp Trek" loading="lazy">
              <div class="yml-card-overlay"></div>
              <span class="yml-card-badge">Annapurna Region</span>
            </div>
            <div class="yml-card-body">
              <h3 class="yml-card-title">Annapurna Base Camp Trek</h3>
              <div class="yml-card-rating">
                <span class="yml-stars"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                <span class="yml-rating-text">5.0 · 112 reviews</span>
              </div>
              <div class="yml-card-footer">
                <div class="yml-card-price">
                  <span class="yml-price-label">Starting from</span>
                  <span class="yml-price-value">USD <strong>849</strong></span>
                </div>
                <span class="yml-view-trip-btn">View Trip →</span>
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
            <li><a href="../../trek/pikey-peak-trek/">Dhaulagiri Circuit Trek</a></li>
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
    // Sidebar Guest Counter & Price Recalculator
    let currentGuests = 2;
    const tieredPrices = {
      1: 890,
      2: 1999,
      3: 1999,
      4: 1999,
      5: 749,
      6: 749,
      7: 749,
      8: 749,
      9: 699,
      10: 699,
      11: 699,
      12: 699
    };

    function changeSidebarGuests(delta) {
      currentGuests = Math.max(1, Math.min(20, currentGuests + delta));
      const countEl = document.getElementById('sidebar-guests-count');
      const priceEl = document.getElementById('sidebar-display-price');
      if (countEl) {
        countEl.textContent = currentGuests + (currentGuests === 1 ? ' Traveler' : ' Travelers');
      }
      if (priceEl) {
        let perPerson = 649;
        if (currentGuests <= 12) perPerson = tieredPrices[currentGuests] || 1999;
        priceEl.textContent = '$' + perPerson;
      }
    }
  </script>
</body>
</html>
`;
}

module.exports = { getSidebarAndFooter };
