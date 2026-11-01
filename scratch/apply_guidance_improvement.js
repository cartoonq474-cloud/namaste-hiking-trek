const fs = require('fs');

const originalHtml = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// 1. Load improved details section HTML
const improvedSection = fs.readFileSync('scratch/improved_details_section.html', 'utf8');

// Find section bounds
const startSection = originalHtml.indexOf('<!-- SECTION 6: PRACTICAL GUIDANCE ACCORDIONS -->');
const endSection = originalHtml.indexOf('<section id="section-altitude"');

if (startSection === -1 || endSection === -1) {
  console.error('Could not find section boundaries!', { startSection, endSection });
  process.exit(1);
}

// 2. Prepare enhanced JavaScript logic
const newJsLogic = `      // 4. Section 6 Guidance Search, Filtering & Reading Progress
      const searchInput = document.getElementById('guidance-search-input');
      const clearSearchBtn = document.getElementById('clear-guidance-search');
      const guideCards = document.querySelectorAll('.guidance-card');
      const guideFilterBtns = document.querySelectorAll('.guide-filter-btn');
      const toggleAllGuidanceBtn = document.getElementById('toggle-all-guidance');
      const resultStatus = document.getElementById('guidance-result-status');
      const noResultsBox = document.getElementById('guidance-no-results');
      const resetSearchBtn = document.getElementById('reset-guidance-search-btn');
      const progressBar = document.getElementById('accordion-progress');
      const readCountLabel = document.getElementById('guidance-read-count');
      const readPercentLabel = document.getElementById('guidance-read-percent');

      const totalGuideCards = guideCards.length;
      const exploredCards = new Set();

      function updateGuidanceProgress() {
        const count = exploredCards.size;
        const percent = Math.min(100, Math.round((count / totalGuideCards) * 100));
        if (progressBar) progressBar.style.width = percent + '%';
        if (readCountLabel) readCountLabel.textContent = count + ' of ' + totalGuideCards + ' topics explored';
        if (readPercentLabel) readPercentLabel.textContent = percent + '%';
      }

      // Card click handling with keyboard accessibility
      guideCards.forEach(card => {
        const btn = card.querySelector('button');
        const content = card.querySelector('[role="region"]');
        const num = card.getAttribute('data-card-num');

        if (btn && content) {
          btn.addEventListener('click', () => {
            const isOpening = !card.classList.contains('active');
            card.classList.toggle('active', isOpening);
            btn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
            content.style.display = isOpening ? 'block' : 'none';

            if (isOpening && num) {
              exploredCards.add(num);
              updateGuidanceProgress();
            }
          });
        }
      });


      // Filter & Search combined engine
      let currentFilter = 'all';

      function applyFilterAndSearch() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        if (clearSearchBtn) {
          clearSearchBtn.style.display = query ? 'block' : 'none';
        }

        let visibleCount = 0;

        guideCards.forEach(card => {
          const cat = card.getAttribute('data-guide-category');
          const titleText = (card.querySelector('.font-heading') || {}).textContent || '';
          const bodyText = (card.querySelector('[role="region"]') || {}).textContent || '';
          const fullText = (titleText + ' ' + bodyText).toLowerCase();

          const matchesCat = (currentFilter === 'all' || cat === currentFilter);
          const matchesQuery = !query || fullText.includes(query);

          if (matchesCat && matchesQuery) {
            card.style.display = 'block';
            visibleCount++;
            if (query.length >= 3) {
              card.classList.add('active');
              const btn = card.querySelector('button');
              const content = card.querySelector('[role="region"]');
              if (btn) btn.setAttribute('aria-expanded', 'true');
              if (content) content.style.display = 'block';
              const num = card.getAttribute('data-card-num');
              if (num) exploredCards.add(num);
            }
          } else {
            card.style.display = 'none';
          }
        });

        updateGuidanceProgress();

        // Update status label
        if (resultStatus) {
          if (query) {
            resultStatus.textContent = 'Found ' + visibleCount + ' topic' + (visibleCount === 1 ? '' : 's') + ' for "' + query + '"';
          } else if (currentFilter === 'all') {
            resultStatus.textContent = 'Showing all ' + totalGuideCards + ' topics';
          } else {
            resultStatus.textContent = 'Showing ' + visibleCount + ' topics in this category';
          }
        }

        // Empty state visibility
        if (noResultsBox) {
          noResultsBox.style.display = (visibleCount === 0) ? 'block' : 'none';
        }
      }

      if (searchInput) {
        searchInput.addEventListener('input', applyFilterAndSearch);
      }

      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
          if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
          }
          applyFilterAndSearch();
        });
      }

      if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          currentFilter = 'all';
          guideFilterBtns.forEach(b => {
            const isAll = b.getAttribute('data-guide-filter') === 'all';
            b.classList.toggle('active', isAll);
            b.style.background = isAll ? '#008060' : '#ffffff';
            b.style.color = isAll ? '#ffffff' : '#475569';
            b.style.borderColor = isAll ? '#008060' : '#CBD5E1';
          });
          applyFilterAndSearch();
        });
      }

      guideFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          guideFilterBtns.forEach(b => {
            b.classList.remove('active');
            b.style.background = '#ffffff';
            b.style.color = '#475569';
            b.style.borderColor = '#CBD5E1';
          });
          btn.classList.add('active');
          btn.style.background = '#008060';
          btn.style.color = '#ffffff';
          btn.style.borderColor = '#008060';

          currentFilter = btn.getAttribute('data-guide-filter') || 'all';
          applyFilterAndSearch();
        });
      });

      if (toggleAllGuidanceBtn) {
        toggleAllGuidanceBtn.addEventListener('click', () => {
          const visibleCards = Array.from(guideCards).filter(c => c.style.display !== 'none');
          const anyInactive = visibleCards.some(c => !c.classList.contains('active'));

          visibleCards.forEach(card => {
            card.classList.toggle('active', anyInactive);
            const btn = card.querySelector('button');
            const content = card.querySelector('[role="region"]');
            if (btn) btn.setAttribute('aria-expanded', anyInactive ? 'true' : 'false');
            if (content) content.style.display = anyInactive ? 'block' : 'none';
            if (anyInactive) {
              const num = card.getAttribute('data-card-num');
              if (num) exploredCards.add(num);
            }
          });

          toggleAllGuidanceBtn.innerHTML = anyInactive
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="17 13 12 18 7 13"/><polyline points="17 6 12 11 7 6"/></svg><span>Collapse All</span>'
            : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="7 11 12 6 17 11"/><polyline points="7 18 12 13 17 18"/></svg><span>Expand All</span>';

          updateGuidanceProgress();
        });
      }

      // Check URL hash for direct accordion link (e.g. #guide-topic-6)
      if (window.location.hash && window.location.hash.startsWith('#guide-topic-')) {
        const targetCard = document.querySelector(window.location.hash);
        if (targetCard) {
          setTimeout(() => {
            targetCard.classList.add('active');
            const btn = targetCard.querySelector('button');
            const content = targetCard.querySelector('[role="region"]');
            if (btn) btn.setAttribute('aria-expanded', 'true');
            if (content) content.style.display = 'block';
            const num = targetCard.getAttribute('data-card-num');
            if (num) exploredCards.add(num);
            updateGuidanceProgress();
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

          }, 300);
        }
      }`;

// Find script bounds for block 4
let jsStart = originalHtml.indexOf('// 4. Section 6 Guidance Search, Filtering & Reading Progress');
if (jsStart === -1) {
  jsStart = originalHtml.indexOf('// 4. Section 6 Guidance Search & Filtering');
}
const jsEnd = originalHtml.indexOf('// 5. Gear & Packing List Persistence');


if (jsStart === -1 || jsEnd === -1) {
  console.error('Could not find JS block boundaries!', { jsStart, jsEnd });
  process.exit(1);
}

// Perform replacements
let updatedHtml = originalHtml.substring(0, startSection) + improvedSection + originalHtml.substring(endSection);

// Re-find JS boundaries on updated string
let newJsStart = updatedHtml.indexOf('// 4. Section 6 Guidance Search, Filtering & Reading Progress');
if (newJsStart === -1) {
  newJsStart = updatedHtml.indexOf('// 4. Section 6 Guidance Search & Filtering');
}
const newJsEnd = updatedHtml.indexOf('// 5. Gear & Packing List Persistence');

updatedHtml = updatedHtml.substring(0, newJsStart) + newJsLogic + '\n\n      ' + updatedHtml.substring(newJsEnd);


// Find style bounds
const styleStart = updatedHtml.indexOf('<style>\n    /* Clean CSS for interactive components */');
const styleEnd = updatedHtml.indexOf('</style>', styleStart) + 8;

const newStyleBlock = `<style>
    /* Clean CSS for interactive components */
    .guidance-card {
      border: 1.5px solid #E2E8F0;
      border-radius: 12px;
      overflow: hidden;
      background: #FFFFFF;
      box-shadow: 0 1px 3px rgba(12, 43, 78, 0.04);
      transition: all 0.2s ease;
      margin-bottom: 14px;
    }
    .guidance-card:hover {
      border-color: #CBD5E1;
      box-shadow: 0 4px 12px rgba(12, 43, 78, 0.07);
    }
    .guidance-card.active {
      border-color: #008060;
      box-shadow: 0 4px 16px rgba(0, 128, 96, 0.1);
    }
    .guidance-header-btn {
      width: 100%;
      padding: 18px 22px;
      text-align: left;
      background: #FFFFFF;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      cursor: pointer;
      transition: background 0.15s ease;
      font-family: inherit;
    }
    .guidance-header-btn:hover {
      background: #F8FAFC;
    }
    .guidance-card.active .guidance-header-btn {
      background: #F0FDF4;
      border-bottom: 1px solid #E2E8F0;
    }
    .guidance-badge-num {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #E6F7F0;
      color: #008060;
      font-size: 0.88rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
    }
    .guidance-card.active .guidance-badge-num {
      background: #008060;
      color: #FFFFFF;
    }
    .guidance-card .accordion-chevron {
      transition: transform 0.25s ease;
    }
    .guidance-card.active .accordion-chevron {
      transform: rotate(180deg);
      stroke: #008060 !important;
      color: #008060 !important;
    }
    .guidance-card-content {
      padding: 22px 24px 26px 24px;
      font-size: 0.95rem;
      line-height: 1.7;
      color: #334155;
      background: #FFFFFF;
    }
    .guidance-card.active > div:not(button) { display: block !important; }
    .departure-card { transition: all 0.25s ease; }
    .dates-filter-btn.active { background: #008060 !important; color: #ffffff !important; border-color: #008060 !important; }
    .guide-filter-btn.active { background: #008060 !important; color: #ffffff !important; border-color: #008060 !important; }
    .itinerary-card.active .itinerary-toggle-circle svg { transform: rotate(180deg); }
    .itinerary-toggle-circle svg { transition: transform 0.25s ease; }
    .trek-detail-section { scroll-margin-top: 130px; }
  </style>`;

if (styleStart !== -1) {
  updatedHtml = updatedHtml.substring(0, styleStart) + newStyleBlock + updatedHtml.substring(styleEnd);
}

fs.writeFileSync('trek/everest-view-trek/index.html', updatedHtml, 'utf8');
console.log('Successfully updated trek/everest-view-trek/index.html with improved practical guidance section and styles!');

