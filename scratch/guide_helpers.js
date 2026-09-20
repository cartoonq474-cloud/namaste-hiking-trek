const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// Helper to get header navigation markup
function getHeaderNav(relPrefix, activeTab = '') {
  return `
  <!-- Header Navigation -->
  <header class="main-header">
    <div class="container flex-between">
      <a href="${relPrefix}index.html" class="logo-brand">
        <img src="${relPrefix}images/logo.png" alt="Namaste Hiking Trek Logo" style="height: 54px; width: auto; object-fit: contain;">
        <div class="logo-text-group">
          <span class="brand-title">NAMASTE</span>
          <span class="brand-subtitle">HIKING TREK</span>
        </div>
      </a>

      <!-- Hamburger Menu Button -->
      <button class="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <!-- Navigation Links -->
      <nav>
        <ul class="nav-menu">
          <!-- Mega Menu Dropdown for All Treks -->
          <li class="nav-item-dropdown mega-nav-item">
            <a href="${relPrefix}nepal-trekking-packages/" class="nav-link">All Treks ▾</a>
            <div class="mega-menu-dropdown">
              <div class="mega-menu-container">
                <!-- Left Sidebar Navigation -->
                <div class="mega-menu-sidebar">
                  <div class="mega-sidebar-item active" data-target="tab-popular">Popular Treks in Nepal</div>
                  <div class="mega-sidebar-item" data-target="tab-annapurna">Annapurna</div>
                  <div class="mega-sidebar-item" data-target="tab-everest">Everest</div>
                  <div class="mega-sidebar-item" data-target="tab-manaslu">Manaslu</div>
                  <div class="mega-sidebar-item" data-target="tab-langtang">Langtang</div>
                  <div class="mega-sidebar-item" data-target="tab-kanchenjunga">Kanchenjunga</div>
                  <div class="mega-sidebar-item" data-target="tab-dolpo">Dolpo</div>
                  <div class="mega-sidebar-item" data-target="tab-makalu">Makalu</div>
                  <div class="mega-sidebar-item" data-target="tab-rolwaling">Rolwaling</div>
                  <div class="mega-sidebar-item" data-target="tab-farwest">Far West</div>
                  <div class="mega-sidebar-item" data-target="tab-ganesh">Ganesh Himal</div>
                </div>

                <!-- Right Content Area -->
                <div class="mega-menu-content-wrap">
                  <div class="mega-top-bar">
                    <button class="mega-talk-pill open-inquiry-btn">Confused? Let's Talk ↗</button>
                  </div>

                  <!-- Tab 1: Popular Treks in Nepal -->
                  <div class="mega-tab-content active" id="tab-popular">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Two weeks Trek</div>
                        <a href="${relPrefix}trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="${relPrefix}trek/manaslu-circuit-trek/" class="mega-trek-link"><span>Manaslu Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="${relPrefix}trek/annapurna-circuit-trek/" class="mega-trek-link"><span>Annapurna Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="${relPrefix}trek/annapurna-base-camp/" class="mega-trek-link"><span>Annapurna Base Camp Trek</span> <span class="days-badge">9 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">One week Treks</div>
                        <a href="${relPrefix}trek/langtang-valley-trek/" class="mega-trek-link"><span>Langtang Valley Trek</span> <span class="days-badge">8 DAYS</span></a>
                        <a href="${relPrefix}trek/ghorepani-poon-hill-trek/" class="mega-trek-link"><span>Ghorepani Poon Hill Trek</span> <span class="days-badge">4 DAYS</span></a>
                        <a href="${relPrefix}trek/mardi-himal-trek/" class="mega-trek-link"><span>Mardi Base Camp Trek</span> <span class="days-badge">6 DAYS</span></a>
                        <a href="${relPrefix}trek/everest-view-trek/" class="mega-trek-link"><span>Everest View Trek</span> <span class="days-badge">7 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Remote and Unexplored</div>
                        <a href="${relPrefix}trek/kanchenjunga-base-camp-trek/" class="mega-trek-link"><span>Kanchenjunga Circuit Trek</span> <span class="days-badge">18 DAYS</span></a>
                        <a href="${relPrefix}trek/manaslu-tsum-valley-trek/" class="mega-trek-link"><span>Manaslu Tsum Valley Trek</span> <span class="days-badge">18 DAYS</span></a>
                        <a href="${relPrefix}trek/nar-phu-valley-trek/" class="mega-trek-link"><span>Narphu Valley Trek</span> <span class="days-badge">16 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Camping Off the Grid – Extreme Wilderness</div>
                        <a href="${relPrefix}trek/dhaulagiri-circuit-trek/" class="mega-trek-link"><span>Dhaulagiri Circuit Trek</span> <span class="days-badge">16 DAYS</span></a>
                        <a href="${relPrefix}trek/rolwaling-valley-trek/" class="mega-trek-link"><span>Sherpani Col Pass Trek</span> <span class="days-badge">22 DAYS</span></a>
                        <a href="${relPrefix}dolpo-region-treks/" class="mega-trek-link"><span>Upper Dolpo Circuit Trek</span> <span class="days-badge">24 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 2: Annapurna -->
                  <div class="mega-tab-content" id="tab-annapurna">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Classic Treks</div>
                        <a href="${relPrefix}trek/annapurna-base-camp/" class="mega-trek-link"><span>Annapurna Base Camp Trek</span> <span class="days-badge">9 DAYS</span></a>
                        <a href="${relPrefix}trek/annapurna-circuit-trek/" class="mega-trek-link"><span>Annapurna Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="${relPrefix}trek/tilicho-lake-trek/" class="mega-trek-link"><span>Tilicho Lake & Annapurna Circuit</span> <span class="days-badge">14 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Short & Panoramic</div>
                        <a href="${relPrefix}trek/ghorepani-poon-hill-trek/" class="mega-trek-link"><span>Ghorepani Poon Hill Trek</span> <span class="days-badge">4 DAYS</span></a>
                        <a href="${relPrefix}trek/mardi-himal-trek/" class="mega-trek-link"><span>Mardi Himal Ridge Trek</span> <span class="days-badge">6 DAYS</span></a>
                        <a href="${relPrefix}trek/khopra-ridge-trek/" class="mega-trek-link"><span>Khopra Ridge & Mohare Danda</span> <span class="days-badge">9 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 3: Everest -->
                  <div class="mega-tab-content" id="tab-everest">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">High Expedition</div>
                        <a href="${relPrefix}trek/everest-base-camp-trek/" class="mega-trek-link"><span>Everest Base Camp Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="${relPrefix}trek/everest-three-passes-trek/" class="mega-trek-link"><span>Everest Three Passes Trek</span> <span class="days-badge">19 DAYS</span></a>
                        <a href="${relPrefix}trek/everest-base-camp-via-gokyo-lakes/" class="mega-trek-link"><span>Cho La Pass & Gokyo Lakes</span> <span class="days-badge">16 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Scenic & Cultural</div>
                        <a href="${relPrefix}trek/gokyo-lakes-trek/" class="mega-trek-link"><span>Gokyo Lakes Trek</span> <span class="days-badge">12 DAYS</span></a>
                        <a href="${relPrefix}trek/everest-view-trek/" class="mega-trek-link"><span>Everest View Trek</span> <span class="days-badge">7 DAYS</span></a>
                        <a href="${relPrefix}trek/pikey-peak-trek/" class="mega-trek-link"><span>Pikey Peak Panorama Trek</span> <span class="days-badge">9 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 4: Manaslu -->
                  <div class="mega-tab-content" id="tab-manaslu">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Circuit & Passes</div>
                        <a href="${relPrefix}trek/manaslu-circuit-trek/" class="mega-trek-link"><span>Manaslu Circuit Trek</span> <span class="days-badge">13 DAYS</span></a>
                        <a href="${relPrefix}trek/manaslu-tsum-valley-trek/" class="mega-trek-link"><span>Manaslu & Tsum Valley Combo</span> <span class="days-badge">18 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Restricted Valley</div>
                        <a href="${relPrefix}trek/tsum-valley-trek/" class="mega-trek-link"><span>Hidden Tsum Valley Trek</span> <span class="days-badge">14 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 5: Langtang -->
                  <div class="mega-tab-content" id="tab-langtang">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Valley & Lakes</div>
                        <a href="${relPrefix}trek/langtang-valley-trek/" class="mega-trek-link"><span>Langtang Valley Trek</span> <span class="days-badge">8 DAYS</span></a>
                        <a href="${relPrefix}trek/langtang-gosaikunda-trek/" class="mega-trek-link"><span>Langtang Gosaikunda Pass Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="${relPrefix}trek/gosaikunda-lake-trek/" class="mega-trek-link"><span>Gosaikunda Sacred Lake Trek</span> <span class="days-badge">7 DAYS</span></a>
                      </div>
                      <div class="mega-col">
                        <div class="mega-col-title">Heritage Trails</div>
                        <a href="${relPrefix}trek/tamang-heritage-trail-trek/" class="mega-trek-link"><span>Tamang Heritage Trail</span> <span class="days-badge">8 DAYS</span></a>
                        <a href="${relPrefix}trek/helambu-trek/" class="mega-trek-link"><span>Helambu Cultural Circuit Trek</span> <span class="days-badge">8 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 6: Kanchenjunga -->
                  <div class="mega-tab-content" id="tab-kanchenjunga">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Eastern Wilderness</div>
                        <a href="${relPrefix}trek/kanchenjunga-base-camp-trek/" class="mega-trek-link"><span>Kanchenjunga Circuit Trek</span> <span class="days-badge">18 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 7: Dolpo -->
                  <div class="mega-tab-content" id="tab-dolpo">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Trans-Himalayan Plateau</div>
                        <a href="${relPrefix}dolpo-region-treks/" class="mega-trek-link"><span>Upper Dolpo Circuit Trek</span> <span class="days-badge">24 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 8: Makalu -->
                  <div class="mega-tab-content" id="tab-makalu">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Granite Giant</div>
                        <a href="${relPrefix}trek/makalu-base-camp-trek/" class="mega-trek-link"><span>Makalu Base Camp Trek</span> <span class="days-badge">16 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 9: Rolwaling -->
                  <div class="mega-tab-content" id="tab-rolwaling">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Technical Alpine</div>
                        <a href="${relPrefix}trek/rolwaling-valley-trek/" class="mega-trek-link"><span>Rolwaling & Tashi Lapcha Pass</span> <span class="days-badge">19 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 10: Far West & Mustang -->
                  <div class="mega-tab-content" id="tab-farwest">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Forbidden Kingdom & Rara</div>
                        <a href="${relPrefix}trek/upper-mustang-trek/" class="mega-trek-link"><span>Upper Mustang Kingdom Trek</span> <span class="days-badge">14 DAYS</span></a>
                        <a href="${relPrefix}trek/rara-lake-trek/" class="mega-trek-link"><span>Rara Lake Wilderness Trek</span> <span class="days-badge">10 DAYS</span></a>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 11: Ganesh Himal -->
                  <div class="mega-tab-content" id="tab-ganesh">
                    <div class="mega-content-grid">
                      <div class="mega-col">
                        <div class="mega-col-title">Ruby Valley & Foothills</div>
                        <a href="${relPrefix}trek/ruby-valley-trek/" class="mega-trek-link"><span>Ganesh Himal Ruby Valley Trek</span> <span class="days-badge">11 DAYS</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- Standard Tour Packages Dropdown -->
          <li class="nav-item-dropdown">
            <a href="${relPrefix}nepal-tour-packages/" class="nav-link">Nepal Tours ▾</a>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}tour/kathmandu-pokhara-chitwan-tour/" class="nav-dropdown-link">Best of Nepal (8 Days)</a>
              <a href="${relPrefix}tour/kathmandu-cultural-heritage-tour/" class="nav-dropdown-link">Kathmandu Heritage (4 Days)</a>
              <a href="${relPrefix}tour/pokhara-valley-nature-tour/" class="nav-dropdown-link">Pokhara Scenic (4 Days)</a>
              <a href="${relPrefix}tour/chitwan-national-park-safari/" class="nav-dropdown-link">Chitwan Jungle Safari (3 Days)</a>
              <a href="${relPrefix}tour/nagarkot-sunrise-bhaktapur-tour/" class="nav-dropdown-link">Nagarkot Sunrise (3 Days)</a>
              <a href="${relPrefix}tour/nepal-luxury-helicopter-tour/" class="nav-dropdown-link">Luxury Helicopter Tour (5 Days)</a>
            </div>
          </li>

          <!-- Standard Trekking Regions Dropdown -->
          <li class="nav-item-dropdown">
            <a href="${relPrefix}trekking-regions-nepal/" class="nav-link">Trekking Regions ▾</a>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}everest-region-treks/" class="nav-dropdown-link">Everest Region Treks</a>
              <a href="${relPrefix}annapurna-region-treks/" class="nav-dropdown-link">Annapurna Region Treks</a>
              <a href="${relPrefix}langtang-region-treks/" class="nav-dropdown-link">Langtang Region Treks</a>
              <a href="${relPrefix}manaslu-region-treks/" class="nav-dropdown-link">Manaslu Region Treks</a>
              <a href="${relPrefix}mustang-region-treks/" class="nav-dropdown-link">Mustang Region Treks</a>
              <a href="${relPrefix}dolpo-region-treks/" class="nav-dropdown-link">Dolpo Region Treks</a>
              <a href="${relPrefix}kanchenjunga-region-treks/" class="nav-dropdown-link">Kanchenjunga Region Treks</a>
              <a href="${relPrefix}ganesh-himal-region-treks/" class="nav-dropdown-link">Ganesh Himal Region Treks</a>
              <a href="${relPrefix}makalu-region-treks/" class="nav-dropdown-link">Makalu Region Treks</a>
              <a href="${relPrefix}rolwaling-region-treks/" class="nav-dropdown-link">Rolwaling Region Treks</a>
              <a href="${relPrefix}restricted-area-treks-nepal/" class="nav-dropdown-link">Restricted Area Treks</a>
              <a href="${relPrefix}peak-climbing-nepal/" class="nav-dropdown-link">Peak Climbing in Nepal</a>
            </div>
          </li>

          <!-- Travel Guide Dropdown -->
          <li class="nav-item-dropdown">
            <a href="${relPrefix}nepal-travel-guide/" class="nav-link ${activeTab === 'travel-guide' ? 'active' : ''}">Travel Guide ▾</a>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}nepal-visa/" class="nav-dropdown-link ${activeTab === 'visa' ? 'active' : ''}">Nepal Visa</a>
              <a href="${relPrefix}equipment-checklist/" class="nav-dropdown-link ${activeTab === 'equipment' ? 'active' : ''}">Equipment Checklist</a>
              <a href="${relPrefix}travel-insurance/" class="nav-dropdown-link ${activeTab === 'insurance' ? 'active' : ''}">Travel Insurance</a>
              <a href="${relPrefix}recommended-medical-kit/" class="nav-dropdown-link ${activeTab === 'medical' ? 'active' : ''}">Recommended Medical Kit</a>
            </div>
          </li>

          <!-- Company Info Dropdown (Non-page Trigger) -->
          <li class="nav-item-dropdown">
            <span class="nav-link">Company Info ▾</span>
            <div class="nav-dropdown-menu">
              <a href="${relPrefix}about.html" class="nav-dropdown-link">About Us</a>
              <a href="${relPrefix}team.html" class="nav-dropdown-link">Meet Our Team</a>
              <a href="${relPrefix}careers.html" class="nav-dropdown-link">Careers & Jobs</a>
              <a href="${relPrefix}reviews.html" class="nav-dropdown-link">Reviews & Testimonials</a>
            </div>
          </li>

          <li><a href="${relPrefix}blogs.html" class="nav-link">Blog</a></li>
          <li><a href="${relPrefix}contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div>
        <button class="btn btn-primary open-inquiry-btn">Book Custom Trip</button>
      </div>
    </div>
  </header>
  `;
}

// Helper to get footer navigation markup
function getFooter(relPrefix) {
  return `
  <!-- Luxury Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-luxury-layout">
        <!-- Column 1: Main Pages -->
        <div class="footer-nav-col">
          <h4>Main Pages</h4>
          <ul class="footer-nav-links">
            <li><a href="${relPrefix}index.html">Home</a></li>
            <li><a href="${relPrefix}nepal-trekking-packages/">All Trek Packages</a></li>
            <li><a href="${relPrefix}nepal-tour-packages/">All Tour Packages</a></li>
            <li><a href="${relPrefix}trekking-regions-nepal/">Trekking Regions</a></li>
            <li><a href="${relPrefix}custom-plan.html">Tailor-Made Trip</a></li>
          </ul>
        </div>

        <!-- Column 2: Essential Info -->
        <div class="footer-nav-col">
          <h4>Essential Info</h4>
          <ul class="footer-nav-links">
            <li><a href="${relPrefix}nepal-travel-guide/">Nepal Travel Guide</a></li>
            <li><a href="${relPrefix}nepal-visa/">Nepal Tourist Visa</a></li>
            <li><a href="${relPrefix}equipment-checklist/">Equipment Checklist</a></li>
            <li><a href="${relPrefix}travel-insurance/">Travel & Heli Insurance</a></li>
            <li><a href="${relPrefix}recommended-medical-kit/">Recommended Medical Kit</a></li>
            <li><a href="${relPrefix}about.html">About Us</a></li>
            <li><a href="${relPrefix}team.html">Meet Our Team</a></li>
            <li><a href="${relPrefix}reviews.html">Reviews & Testimonials</a></li>
            <li><a href="${relPrefix}contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 3: Center Expedition Title & Pill CTA -->
        <div class="footer-cta-center">
          <h2 class="footer-cta-title">Expedition Expertise<br>at Your Service</h2>
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
          <a href="${relPrefix}privacy-policy.html">Privacy Policy</a>
          <a href="${relPrefix}terms-and-conditions.html">Terms & Conditions</a>
        </div>
      </div>
    </div>

    <!-- Giant Watermark Brand Typography at Bottom -->
    <div class="watermark-brand-container">
      <div class="watermark-brand-text">NAMASTE.</div>
    </div>
  </footer>

  <!-- Inquiry Modal -->
  <div id="inquiry-modal" class="modal-overlay">
    <div class="modal-card">
      <button class="modal-close" id="modal-close-btn">&times;</button>
      <h3 style="font-size: 1.5rem; margin-bottom: 6px;">Plan Your Himalayan Journey</h3>
      <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
        Connect directly with our Kathmandu travel & trek specialists.
      </p>
      <form id="inquiry-form">
        <div class="filter-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label" for="inq-name">Full Name *</label>
            <input type="text" id="inq-name" class="form-input" placeholder="e.g. John Doe" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="inq-email">Email Address *</label>
            <input type="email" id="inq-email" class="form-input" placeholder="john@example.com" required>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label" for="inq-topic">Topic of Inquiry</label>
          <input type="text" id="inq-topic" class="form-input" placeholder="e.g. Nepal Visa, Packing Advice, Trek Dates">
        </div>
        <div class="form-group" style="margin-bottom: 18px;">
          <label class="form-label" for="inq-message">Message or Questions</label>
          <textarea id="inq-message" class="form-input" style="height: 90px; resize: vertical;" placeholder="Tell us about your travel plans, dates, or specific requirements..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">Send Message</button>
      </form>
    </div>
  </div>

  <script type="module" src="${relPrefix}js/inquiry-modal.js"></script>
  <script src="${relPrefix}js/header-scroll.js"></script>
  <script src="${relPrefix}js/mega-menu.js"></script>
  `;
}

// Export helpers for use in page builders
module.exports = {
  projectRoot,
  getHeaderNav,
  getFooter
};
