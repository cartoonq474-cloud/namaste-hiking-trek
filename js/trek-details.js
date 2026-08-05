/**
 * Reusable Trek Details Page Interactive Controller
 * Handles: Scroll-Spy navigation, Smooth anchor scrolling, Collapsible itinerary, Gear checklist, Booking calculator
 */

import { formatPrice, getCurrentCurrency } from './i18n.js';

// Setup Anchor Scroll & Scroll Spy
function setupSubNavScrollSpy() {
  const subNavButtons = document.querySelectorAll('.trek-sub-nav-btn');
  const sections = document.querySelectorAll('.trek-detail-section');
  
  if (!subNavButtons.length) return;

  const headerHeight = 80;
  const subNavHeight = 58;
  const offset = headerHeight + subNavHeight + 15; // Offset compensation for sticky navigation bars

  // Smooth scroll to section on button click
  subNavButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.getAttribute('data-tab');
      const targetSection = document.getElementById(`section-${tabId}`);
      
      if (targetSection) {
        // Temporarily detach scroll spy during manual scroll to prevent stutter
        window.removeEventListener('scroll', handleScrollSpy);
        
        subNavButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset + 5;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Re-attach scroll listener after smooth scroll completes
        setTimeout(() => {
          window.addEventListener('scroll', handleScrollSpy);
        }, 800);
      }
    });
  });

  // Scroll spy active state switcher
  function handleScrollSpy() {
    let activeTabId = '';
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(sec => {
      const idAttr = sec.getAttribute('id');
      if (!idAttr) return;
      const secTop = sec.offsetTop - offset;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop - 10 && scrollPos < secTop + secHeight) {
        activeTabId = idAttr.replace('section-', '');
      }
    });

    // Fallback: if we are at the bottom of the page, activate the last tab (FAQs)
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
      activeTabId = 'faqs';
    }

    if (activeTabId) {
      subNavButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === activeTabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScrollSpy);
  handleScrollSpy();
}

// Setup Itinerary & FAQs Accordions
function setupAccordions() {
  const accordionHeaders = document.querySelectorAll('.itinerary-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.itinerary-card');
      if (!card) return;
      const content = card.querySelector('.itinerary-content');
      if (!content) return;
      const isExpanded = card.classList.contains('active');

      if (isExpanded) {
        card.classList.remove('active');
        content.style.maxHeight = '';
      } else {
        // Collapse other cards first to make it a clean accordion
        const otherCards = document.querySelectorAll('.itinerary-card.active');
        otherCards.forEach(c => {
          if (c !== card) {
            c.classList.remove('active');
            const otherContent = c.querySelector('.itinerary-content');
            if (otherContent) otherContent.style.maxHeight = '';
          }
        });

        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Automatically compute and set initial heights for active items on page load
  setTimeout(() => {
    const activeContents = document.querySelectorAll('.itinerary-card.active .itinerary-content');
    activeContents.forEach(content => {
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  }, 300);
}

// Setup Interactive Gear Checklist
function setupGearChecklist(trekKey) {
  const checkboxes = document.querySelectorAll('#section-packing .gear-item-checkbox');
  const countDisplay = document.querySelector('.gear-checked-count');
  const totalDisplay = document.querySelector('.gear-total-count');

  if (!checkboxes.length) return;

  const storageKey = `namaste-gear-${trekKey || 'default'}`;
  
  // Load saved checklist states
  let savedStates = {};
  try {
    const data = localStorage.getItem(storageKey);
    if (data) savedStates = JSON.parse(data);
  } catch (e) {
    console.error("Error reading gear states:", e);
  }

  // Initialize checks
  checkboxes.forEach(cb => {
    const id = cb.getAttribute('id');
    if (savedStates[id]) {
      cb.checked = true;
      const row = cb.closest('.gear-item-row');
      if (row) row.classList.add('packed');
    }

    cb.addEventListener('change', () => {
      const parentRow = cb.closest('.gear-item-row');
      if (parentRow) {
        if (cb.checked) {
          parentRow.classList.add('packed');
          savedStates[id] = true;
        } else {
          parentRow.classList.remove('packed');
          delete savedStates[id];
        }
      }
      
      // Save to localStorage
      try {
        localStorage.setItem(storageKey, JSON.stringify(savedStates));
      } catch (e) {
        console.error("Error saving gear states:", e);
      }
      
      updatePackedCount();
    });
  });

  function updatePackedCount() {
    const packedCount = document.querySelectorAll('#section-packing .gear-item-checkbox:checked').length;
    if (countDisplay) countDisplay.textContent = packedCount;
    if (totalDisplay) totalDisplay.textContent = checkboxes.length;
  }

  updatePackedCount();
}

// Setup Sticky Booking Live Calculator
function setupBookingCalculator() {
  const calcContainer = document.getElementById('booking-calculator');
  if (!calcContainer) return;

  const groupSizeInput = document.getElementById('calc-group-size');
  const heliCheckbox = document.getElementById('calc-upgrade-heli');
  const singleCheckbox = document.getElementById('calc-upgrade-single');
  
  const basePricePerPersonDisplay = document.getElementById('calc-display-base');
  const discountRateDisplay = document.getElementById('calc-display-discount');
  const heliPriceDisplay = document.getElementById('calc-display-heli');
  const singlePriceDisplay = document.getElementById('calc-display-single');
  const totalPerPersonDisplay = document.getElementById('calc-display-per-person');
  const totalPriceDisplay = document.getElementById('calc-display-total');

  // Load configuration from dataset values (default to EBC pricing if missing)
  const basePriceVal = parseFloat(calcContainer.getAttribute('data-base-price') || '1299');
  const heliPriceVal = parseFloat(calcContainer.getAttribute('data-heli-price') || '800');
  const singlePriceVal = parseFloat(calcContainer.getAttribute('data-single-price') || '250');

  function calculate() {
    const groupSize = parseInt(groupSizeInput.value) || 1;
    const isHeliChecked = heliCheckbox ? heliCheckbox.checked : false;
    const isSingleChecked = singleCheckbox ? singleCheckbox.checked : false;

    // Custom group discount model based on design:
    // 1 pax = $1,499
    // 2-7 pax = $1,299
    // 8-29 pax = $1,199
    let currentBasePrice = basePriceVal;
    
    const row1 = document.getElementById('discount-row-1');
    const row2 = document.getElementById('discount-row-2');
    const row3 = document.getElementById('discount-row-3');
    
    if (basePriceVal === 1299) { // New EBC pricing model
      if (row1) row1.classList.remove('active');
      if (row2) row2.classList.remove('active');
      if (row3) row3.classList.remove('active');

      if (groupSize === 1) {
        currentBasePrice = 1499;
        if (row1) row1.classList.add('active');
      } else if (groupSize >= 2 && groupSize <= 7) {
        currentBasePrice = 1299;
        if (row2) row2.classList.add('active');
      } else if (groupSize >= 8) {
        currentBasePrice = 1199;
        if (row3) row3.classList.add('active');
      }
    } else {
      // Standard progressive group discount percentages
      let discountPercent = 0;
      if (groupSize >= 2 && groupSize <= 4) {
        discountPercent = 0.05;
      } else if (groupSize >= 5 && groupSize <= 9) {
        discountPercent = 0.10;
      } else if (groupSize >= 10) {
        discountPercent = 0.15;
      }
      currentBasePrice = basePriceVal * (1 - discountPercent);
    }

    const addonsPerPerson = (isHeliChecked ? heliPriceVal : 0) + (isSingleChecked ? singlePriceVal : 0);
    const finalPerPerson = currentBasePrice + addonsPerPerson;

    // Set attributes for dynamic currency updates
    if (basePricePerPersonDisplay) {
      basePricePerPersonDisplay.setAttribute('data-price-usd', currentBasePrice);
      basePricePerPersonDisplay.textContent = formatPrice(currentBasePrice);
    }
    if (discountRateDisplay) {
      discountRateDisplay.textContent = `0%`; // Standard EBC uses direct price tiers instead of discount percent
    }
    if (heliPriceDisplay) {
      heliPriceDisplay.setAttribute('data-price-usd', heliPriceVal);
      heliPriceDisplay.textContent = `+${formatPrice(heliPriceVal)}`;
    }
    if (singlePriceDisplay) {
      singlePriceDisplay.setAttribute('data-price-usd', singlePriceVal);
      singlePriceDisplay.textContent = `+${formatPrice(singlePriceVal)}`;
    }

    const perPersonFormatted = formatPrice(finalPerPerson);
    if (totalPerPersonDisplay) {
      totalPerPersonDisplay.setAttribute('data-price-usd', finalPerPerson);
      totalPerPersonDisplay.textContent = perPersonFormatted;
    }

    if (totalPriceDisplay) {
      // Calculate total based on the displayed per person price to prevent rounding visual discrepancies
      const cleanNum = parseInt(perPersonFormatted.replace(/[^0-9]/g, '')) || 0;
      const finalTotalConverted = cleanNum * groupSize;

      const currencySymbols = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        NPR: "Rs."
      };
      const activeCurr = typeof getCurrentCurrency === 'function' ? getCurrentCurrency() : 'USD';
      const symbol = currencySymbols[activeCurr] || "$";

      totalPriceDisplay.removeAttribute('data-price-usd');
      totalPriceDisplay.textContent = `${symbol}${finalTotalConverted.toLocaleString()}`;
    }
  }

  // Attach change listeners
  if (groupSizeInput) groupSizeInput.addEventListener('input', calculate);
  if (heliCheckbox) heliCheckbox.addEventListener('change', calculate);
  if (singleCheckbox) singleCheckbox.addEventListener('change', calculate);

  // Listen to external currency switcher events to re-render local prices
  window.addEventListener('currencychange', calculate);

  // Initial render
  calculate();
}

// Setup Interactive Read Tracker (Trip Details)
function setupReadTracker(trekKey) {
  const cards = document.querySelectorAll('.detail-accordion-card');
  const bar = document.querySelector('.details-progress-ring-bar');
  const countText = document.querySelector('.details-progress-count');
  const statusText = document.querySelector('.details-progress-status');
  
  if (!cards.length) return;

  const storageKey = `namaste-read-${trekKey || 'default'}`;
  
  // Load read states
  let readStates = {};
  try {
    const data = localStorage.getItem(storageKey);
    if (data) readStates = JSON.parse(data);
  } catch (e) {
    console.error("Error reading read states:", e);
  }

  // Initial setup of classes
  cards.forEach(card => {
    const id = card.getAttribute('data-detail-id');
    if (readStates[id]) {
      card.classList.add('read');
    }
  });

  function updateProgress() {
    const totalCount = cards.length;
    const readCount = document.querySelectorAll('.detail-accordion-card.read').length;
    
    // Update count display
    if (countText) {
      countText.textContent = `${readCount}/${totalCount} read`;
    }

    // Update status subtext
    if (statusText) {
      if (readCount === 0) {
        statusText.textContent = 'Nice start — keep going';
      } else if (readCount <= Math.floor(totalCount / 3)) {
        statusText.textContent = 'Doing great — learning more';
      } else if (readCount < totalCount) {
        statusText.textContent = 'Almost there — well prepared!';
      } else {
        statusText.textContent = 'All read — you are ready to trek! 🚀';
      }
    }

    // Update progress ring SVG
    if (bar) {
      const radius = 18;
      const circumference = 2 * Math.PI * radius; // 113.1
      const percent = (readCount / totalCount) * 100;
      const offset = circumference - (percent / 100) * circumference;
      bar.style.strokeDashoffset = offset;
    }
  }

  // Click handler to expand/collapse and mark as read
  cards.forEach(card => {
    const header = card.querySelector('.detail-accordion-header');
    const content = card.querySelector('.detail-accordion-content');
    const id = card.getAttribute('data-detail-id');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isExpanded = card.classList.contains('active');

      if (isExpanded) {
        card.classList.remove('active');
        content.style.maxHeight = '';
      } else {
        // Collapse other cards first to make it a clean accordion
        const otherCards = document.querySelectorAll('.detail-accordion-card.active');
        otherCards.forEach(c => {
          if (c !== card) {
            c.classList.remove('active');
            const otherContent = c.querySelector('.detail-accordion-content');
            if (otherContent) otherContent.style.maxHeight = '';
          }
        });

        // Expand this card
        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';

        // Mark as read if not already read
        if (!card.classList.contains('read')) {
          card.classList.add('read');
          readStates[id] = true;
          try {
            localStorage.setItem(storageKey, JSON.stringify(readStates));
          } catch (e) {
            console.error("Error saving read states:", e);
          }
          updateProgress();
        }
      }
    });

    // Make sure initial active content is sized properly (if any starts expanded)
    if (card.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  // Run progress calculation on load
  updateProgress();
}

// Initialise everything on page load
document.addEventListener('DOMContentLoaded', () => {
  const detailsWrapper = document.querySelector('[data-trek-details-wrapper]');
  const trekKey = detailsWrapper ? detailsWrapper.getAttribute('data-trek-key') : 'ebc';

  setupSubNavScrollSpy();
  setupAccordions();
  setupGearChecklist(trekKey);
  setupBookingCalculator();
  setupReadTracker(trekKey);
});
