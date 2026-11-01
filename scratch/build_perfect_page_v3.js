const fs = require('fs');

console.log('Reading cleaned authentic git orig...');
const origCleaned = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');

const sec1Index = origCleaned.indexOf('<section id="section-overview"');
let topSection = origCleaned.slice(0, sec1Index);

// Update Quick Facts in topSection
console.log('Updating Quick facts in topSection...');
topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">14 days</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">7 days</span>'
);

topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5545">5,545 m</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="3880">~3,880 m</span>'
);

topSection = topSection.replace(
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Everest Base Camp</span>',
  '<span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Everest &amp; Khumbu Region</span>'
);

topSection = topSection.replace(
  'data-trek-key="ebc"',
  'data-trek-key="everest-view"'
);

// Add altitude and weather buttons to subnav if not already present
if (!topSection.includes('data-tab="altitude"')) {
  const mapBtn = '<button class="trek-sub-nav-btn" data-tab="map">';
  const altWeaBtns = `<button class="trek-sub-nav-btn" data-tab="altitude">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Altitude
          </button>
          <button class="trek-sub-nav-btn" data-tab="weather">
            <svg class="icon-svg icon-sm icon-margin-right" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>Weather
          </button>
          ` + mapBtn;
  topSection = topSection.replace(mapBtn, altWeaBtns);
}

// Load modular content sections (1 to 6)
console.log('Loading modular content sections (1 to 6)...');
const getSection1Overview = require('./gen_everest_section1_overview');
const getSection2Itinerary = require('./gen_everest_section2_itinerary');
const getSection3to5 = require('./gen_everest_section3_5');
const getSection6Accordions = require('./gen_everest_section6_accordions');

const middleContent = 
  getSection1Overview() +
  getSection2Itinerary() +
  getSection3to5() +
  getSection6Accordions();

// Prepare authentic sections 7 to 12 from origCleaned
console.log('Extracting authentic sections 7 to 12 from origCleaned...');
const altIdx = origCleaned.indexOf('<section id="section-altitude-profile"');
const origFaqsIdx = origCleaned.indexOf('id="section-faqs"');
const origFaqsEnd = origCleaned.indexOf('</section>', origFaqsIdx) + 10;
let sec7_12 = origCleaned.slice(altIdx, origFaqsEnd);

// Update visualizers in sec7_12
sec7_12 = sec7_12.replace(/data-trek-key="ebc"/g, 'data-trek-key="everest-view"');

// Update route text in altitude profile
sec7_12 = sec7_12.replace(
  'The route commences at Lukla (2,860m) and ascends through the Khumbu Valley to Everest Base Camp (5,364m) and the iconic vantage point of Kala Patthar (5,545m).',
  'The route commences at Lukla (2,860 m) and ascends through the Dudh Koshi Valley to Namche Bazaar (3,440 m) and the iconic vantage point of Hotel Everest View (~3,880 m), offering panoramic Himalayan views without trekking to Base Camp.'
);

// Prepare tailored General FAQs for Everest View Trek
const everestViewGeneralFaqs = `id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Can I actually see Mount Everest clearly on this 7-day trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes! From the scenic ridge and terrace of Hotel Everest View (3,880 m) above Namche Bazaar, you get a clean, direct panoramic vista of Mount Everest (8,848.86 m), along with Lhotse, Nuptse, Ama Dablam, and Thamserku when weather is clear in morning hours.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>How difficult is the Everest View Trek compared to Everest Base Camp?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      It is significantly more manageable and accessible. The Everest View Trek lasts 7 days with a maximum elevation of ~3,880 m and sleeps no higher than 3,440 m in Namche Bazaar. The full Everest Base Camp trek lasts 12–14 days and reaches 5,364 m at Base Camp and 5,545 m at Kala Patthar.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Do I need prior mountaineering or climbing experience?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      No. The trek follows well-defined mountain trails used daily by local Sherpas and pack animals. No ropes, crampons, ice axes, or technical skills are required. A reasonable level of hiking fitness and stamina for 4–6 hours of walking per day is all that is needed.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What happens if my Lukla flight is delayed due to weather?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Lukla flights operate under Visual Flight Rules and can be delayed by morning fog or wind. Our operations team monitors conditions 24/7. In case of extended commercial delays, helicopter charters can be coordinated (extra fee, often claimable via travel insurance). We recommend keeping at least 1–2 buffer days in Kathmandu before your international flight home.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Are flights operated from Kathmandu or Ramechhap?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      During peak trekking seasons (Spring: April–May and Autumn: October–November), the Civil Aviation Authority of Nepal frequently routes Lukla flights through Manthali Airport in Ramechhap to minimize air traffic congestion in Kathmandu. We provide seamless private road transport between Kathmandu and Ramechhap. During shoulder months, flights generally operate directly from Kathmandu.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What is the accommodation like in Phakding and Namche Bazaar?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Accommodation is in comfortable mountain teahouses and lodges featuring twin-sharing bedrooms with comfortable foam mattresses, clean sheets, and warm blankets. Namche Bazaar has developed lodges featuring heated dining halls, espresso coffee bakeries, hot showers, and Wi-Fi access.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>Is travel insurance mandatory for the Everest View Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. Comprehensive travel insurance covering high-altitude trekking up to 4,000 meters and emergency helicopter evacuation is strictly mandatory for all participants.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>What permits are required for the Everest View Trek?</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Two official permits are mandatory: the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu Pasang Lhamu Rural Municipality Entrance Permit (NPR 3,000). Both permits are included in our package and pre-arranged by our office.
                    </div>
                  </div>`;

// Replace General FAQs block in sec7_12
const origCatGenStart = sec7_12.indexOf('id="faq-cat-general"');
const origCatGenEnd = sec7_12.indexOf('id="faq-cat-permits"');
if (origCatGenStart !== -1 && origCatGenEnd !== -1) {
  const sliceBefore = sec7_12.slice(0, origCatGenStart);
  const sliceAfter = sec7_12.slice(origCatGenEnd);
  sec7_12 = sliceBefore + everestViewGeneralFaqs + '\n                </div>\n\n                <div class="faq-category-content" ' + sliceAfter;
}

// Prepare sidebar and bottom from origCleaned
console.log('Preparing authentic sidebar and footer from origCleaned...');
let sidebarAndBottom = origCleaned.slice(origFaqsEnd);

// Update pricing in sidebar: $1,299 -> $899, 14 days trip -> 7 days trip
sidebarAndBottom = sidebarAndBottom.replace(
  '<span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,299</span>',
  '<span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$899</span>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '14 days trip</a>',
  '7 days trip</a>'
);

// Update group discount table
sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,234 / person</strong>',
  '<strong style="color: #0F172A;">$869 / person</strong>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,169 / person</strong>',
  '<strong style="color: #0F172A;">$829 / person</strong>'
);

sidebarAndBottom = sidebarAndBottom.replace(
  '<strong style="color: #0F172A;">$1,104 / person (Best Deal)</strong>',
  '<strong style="color: #047857;">$799 / person (Best Deal)</strong>'
);

// Insert Interactive Passenger Stepper right before <!-- Action Buttons -->
const stepperHtml = `
              <!-- Interactive Group Size / Passenger Stepper -->
              <div class="sidebar-pax-stepper" style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 14px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #0C2B4E;">Select Travelers:</span>
                  <span id="sidebar-tier-badge" style="font-size: 0.75rem; font-weight: 700; color: #008060; background: #E6F7F0; padding: 2px 8px; border-radius: 4px;">Standard Rate</span>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="display: flex; align-items: center; border: 1.5px solid #CBD5E1; border-radius: 6px; background: white; overflow: hidden;">
                    <button type="button" id="pax-minus-btn" aria-label="Decrease passenger count" style="width: 34px; height: 34px; background: none; border: none; font-size: 1.2rem; font-weight: bold; cursor: pointer; color: #0C2B4E; display: flex; align-items: center; justify-content: center;">-</button>
                    <span id="pax-count-display" style="width: 36px; text-align: center; font-weight: 800; font-size: 0.95rem; color: #0C2B4E;">1</span>
                    <button type="button" id="pax-plus-btn" aria-label="Increase passenger count" style="width: 34px; height: 34px; background: none; border: none; font-size: 1.2rem; font-weight: bold; cursor: pointer; color: #0C2B4E; display: flex; align-items: center; justify-content: center;">+</button>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 0.72rem; color: #64748B; text-transform: uppercase; font-weight: 600;">Total Estimate:</div>
                    <div id="pax-total-price" style="font-size: 1.25rem; font-weight: 800; color: #0C2B4E; line-height: 1;">$899</div>
                  </div>
                </div>
              </div>
`;

if (!sidebarAndBottom.includes('sidebar-pax-stepper')) {
  sidebarAndBottom = sidebarAndBottom.replace('<!-- Action Buttons -->', stepperHtml + '\n              <!-- Action Buttons -->');
}

// Prepare Lightbox Modal and Interactive Client Scripts before </body>
const galleryAndInteractiveScripts = `
  <!-- Photo Gallery Lightbox Modal -->
  <div id="gallery-lightbox-modal" style="display: none; position: fixed; inset: 0; z-index: 999999; background: rgba(12, 43, 78, 0.96); backdrop-filter: blur(8px); align-items: center; justify-content: center; flex-direction: column;">
    <div style="position: absolute; top: 20px; right: 24px; display: flex; align-items: center; gap: 16px; z-index: 10;">
      <span id="gallery-counter" style="color: #ffffff; font-weight: 700; font-size: 0.95rem; background: rgba(255,255,255,0.15); padding: 4px 12px; border-radius: 20px;">1 / 5</span>
      <button id="gallery-close-btn" aria-label="Close Gallery" style="background: rgba(255,255,255,0.2); border: none; color: #ffffff; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.6rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s;">&times;</button>
    </div>
    <button id="gallery-prev-btn" aria-label="Previous Photo" style="position: absolute; left: 24px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); border: none; color: #ffffff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; z-index: 10;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button id="gallery-next-btn" aria-label="Next Photo" style="position: absolute; right: 24px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); border: none; color: #ffffff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; z-index: 10;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <div style="max-width: 90vw; max-height: 82vh; display: flex; flex-direction: column; align-items: center;">
      <img id="gallery-modal-img" src="" alt="Everest View Trek Photo" style="max-width: 100%; max-height: 75vh; border-radius: 8px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); object-fit: contain;">
      <div id="gallery-caption" style="color: #ffffff; margin-top: 14px; font-weight: 600; font-size: 1.05rem; text-align: center;"></div>
    </div>
  </div>

  <style>
    /* Clean CSS for interactive components */
    .guidance-card.active > div:not(button) { display: block !important; }
    .guidance-card.active .accordion-chevron { transform: rotate(180deg); }
    .departure-card { transition: all 0.25s ease; }
    .dates-filter-btn.active { background: #008060 !important; color: #ffffff !important; border-color: #008060 !important; }
    .guide-filter-btn.active { background: #008060 !important; color: #ffffff !important; border-color: #008060 !important; }
    .itinerary-card.active .itinerary-toggle-circle svg { transform: rotate(180deg); }
    .itinerary-toggle-circle svg { transition: transform 0.25s ease; }
    .trek-detail-section { scroll-margin-top: 130px; }
  </style>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Photo Gallery Lightbox Implementation
      const galleryPhotos = [
        { url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=85", caption: "Everest View Trek: Iconic panoramic morning view of the Himalayan amphitheater" },
        { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85", caption: "Lower Khumbu: Dudh Koshi River Valley trails through pine and rhododendron forests" },
        { url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=85", caption: "Ascending the high mountain trail approaching the vibrant Sherpa town of Namche Bazaar" },
        { url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85", caption: "Majestic Ama Dablam rising prominently above the Khumbu alpine valleys" },
        { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85", caption: "Panoramic vista of Mount Everest, Lhotse, and Nuptse from Hotel Everest View terrace (3,880 m)" }
      ];

      const lightboxModal = document.getElementById('gallery-lightbox-modal');
      const modalImg = document.getElementById('gallery-modal-img');
      const captionText = document.getElementById('gallery-caption');
      const counterText = document.getElementById('gallery-counter');
      const closeBtn = document.getElementById('gallery-close-btn');
      const prevBtn = document.getElementById('gallery-prev-btn');
      const nextBtn = document.getElementById('gallery-next-btn');
      let currentPhotoIndex = 0;

      function updatePhoto(index) {
        currentPhotoIndex = (index + galleryPhotos.length) % galleryPhotos.length;
        modalImg.src = galleryPhotos[currentPhotoIndex].url;
        captionText.textContent = galleryPhotos[currentPhotoIndex].caption;
        counterText.textContent = (currentPhotoIndex + 1) + ' / ' + galleryPhotos.length;
      }

      function openLightbox(index = 0) {
        updatePhoto(index);
        lightboxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }

      // Wire 'See all photos' and hero gallery images
      const seeAllBtn = document.querySelector('.trek-gallery-see-all-btn');
      if (seeAllBtn) {
        seeAllBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openLightbox(0);
        });
      }

      const heroImgs = document.querySelectorAll('.trek-gallery-main img, .trek-gallery-sub img');
      heroImgs.forEach((img, idx) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(idx));
      });

      if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
      if (prevBtn) prevBtn.addEventListener('click', () => updatePhoto(currentPhotoIndex - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => updatePhoto(currentPhotoIndex + 1));

      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (lightboxModal.style.display === 'flex') {
          if (e.key === 'Escape') closeLightbox();
          if (e.key === 'ArrowLeft') updatePhoto(currentPhotoIndex - 1);
          if (e.key === 'ArrowRight') updatePhoto(currentPhotoIndex + 1);
        }
      });

      // 2. Interactive Passenger Stepper & Live Pricing in Sticky Sidebar
      let currentPax = 1;
      const paxCountDisplay = document.getElementById('pax-count-display');
      const paxTotalPrice = document.getElementById('pax-total-price');
      const sidebarTierBadge = document.getElementById('sidebar-tier-badge');
      const minusBtn = document.getElementById('pax-minus-btn');
      const plusBtn = document.getElementById('pax-plus-btn');

      function calculatePrice(pax) {
        let ratePerPax = 899;
        let badge = "Standard Rate";
        if (pax >= 2 && pax <= 4) {
          ratePerPax = 869;
          badge = "$869 / pax (Save $30)";
        } else if (pax >= 5 && pax <= 8) {
          ratePerPax = 829;
          badge = "$829 / pax (Save $70)";
        } else if (pax >= 9) {
          ratePerPax = 799;
          badge = "$799 / pax (Best Deal)";
        }
        return { rate: ratePerPax, total: ratePerPax * pax, badge: badge };
      }

      function updatePaxUI() {
        if (!paxCountDisplay) return;
        paxCountDisplay.textContent = currentPax;
        const res = calculatePrice(currentPax);
        paxTotalPrice.textContent = '$' + res.total.toLocaleString();
        sidebarTierBadge.textContent = res.badge;

        // Sync pax to inquiry buttons
        document.querySelectorAll('.open-inquiry-btn').forEach(btn => {
          btn.setAttribute('data-travelers', currentPax);
        });
      }

      if (minusBtn) {
        minusBtn.addEventListener('click', () => {
          if (currentPax > 1) {
            currentPax--;
            updatePaxUI();
          }
        });
      }

      if (plusBtn) {
        plusBtn.addEventListener('click', () => {
          if (currentPax < 25) {
            currentPax++;
            updatePaxUI();
          }
        });
      }

      // 3. Dates & Availability Filter & Booking Prefill
      const filterBtns = document.querySelectorAll('.dates-filter-btn');
      const departureCards = document.querySelectorAll('.departure-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-season-filter');

          departureCards.forEach(card => {
            const cardSeason = card.getAttribute('data-season');
            if (filter === 'all' || cardSeason === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // Pass selected departure date into inquiry modal
      document.querySelectorAll('.btn-date-book').forEach(btn => {
        btn.addEventListener('click', () => {
          const date = btn.getAttribute('data-departure-date');
          setTimeout(() => {
            const notesField = document.getElementById('inq-notes');
            if (notesField) {
              notesField.value = 'Interested in scheduled departure: ' + date + '\\n' + notesField.value;
            }
          }, 100);
        });
      });

      // 4. Section 6 Guidance Search & Filtering
      const searchInput = document.getElementById('guidance-search-input');
      const guideCards = document.querySelectorAll('.guidance-card');
      const guideFilterBtns = document.querySelectorAll('.guide-filter-btn');
      const toggleAllGuidanceBtn = document.getElementById('toggle-all-guidance');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          guideCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
              card.style.display = 'block';
              if (query.length > 2) {
                card.classList.add('active');
              }
            } else {
              card.style.display = 'none';
            }
          });
        });
      }

      guideFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          guideFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-guide-filter');

          guideCards.forEach(card => {
            const cat = card.getAttribute('data-guide-category');
            if (filter === 'all' || cat === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      if (toggleAllGuidanceBtn) {
        toggleAllGuidanceBtn.addEventListener('click', () => {
          const anyInactive = Array.from(guideCards).some(c => !c.classList.contains('active'));
          guideCards.forEach(card => {
            if (anyInactive) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          });
          toggleAllGuidanceBtn.textContent = anyInactive ? 'Collapse All' : 'Expand All';
        });
      }

      // 5. Gear & Packing List Persistence
      const gearCheckboxes = document.querySelectorAll('.gear-item-checkbox');
      const countDisplay = document.querySelector('.gear-checked-count');
      const totalDisplay = document.querySelector('.gear-total-count');
      const resetPackingBtn = document.getElementById('btn-reset-packing');
      const storageKey = 'namaste-gear-everest-view';

      let savedGear = {};
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) savedGear = JSON.parse(raw);
      } catch (err) {}

      function updateGearCount() {
        const checkedCount = document.querySelectorAll('.gear-item-checkbox:checked').length;
        if (countDisplay) countDisplay.textContent = checkedCount;
        if (totalDisplay) totalDisplay.textContent = gearCheckboxes.length;
      }

      gearCheckboxes.forEach(cb => {
        const id = cb.getAttribute('data-gear-id');
        if (id && savedGear[id]) {
          cb.checked = true;
        }
        cb.addEventListener('change', () => {
          savedGear[id] = cb.checked;
          try {
            localStorage.setItem(storageKey, JSON.stringify(savedGear));
          } catch (err) {}
          updateGearCount();
        });
      });

      if (resetPackingBtn) {
        resetPackingBtn.addEventListener('click', () => {
          gearCheckboxes.forEach(cb => cb.checked = false);
          savedGear = {};
          try {
            localStorage.removeItem(storageKey);
          } catch (err) {}
          updateGearCount();
        });
      }

      updateGearCount();
    });
  </script>
`;

if (!sidebarAndBottom.includes('gallery-lightbox-modal')) {
  sidebarAndBottom = sidebarAndBottom.replace('</body>', galleryAndInteractiveScripts + '\n</body>');
}

// Combine everything!
const perfectHTML = topSection + middleContent + sec7_12 + '\n' + sidebarAndBottom;

fs.writeFileSync('trek/everest-view-trek/index.html', perfectHTML, 'utf8');
console.log('Successfully wrote', perfectHTML.length, 'bytes to trek/everest-view-trek/index.html!');
