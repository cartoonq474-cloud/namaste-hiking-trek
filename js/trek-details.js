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
        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
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
  const basePriceVal = parseFloat(calcContainer.getAttribute('data-base-price') || '1350');
  const heliPriceVal = parseFloat(calcContainer.getAttribute('data-heli-price') || '800');
  const singlePriceVal = parseFloat(calcContainer.getAttribute('data-single-price') || '250');

  function calculate() {
    const groupSize = parseInt(groupSizeInput.value) || 1;
    const isHeliChecked = heliCheckbox ? heliCheckbox.checked : false;
    const isSingleChecked = singleCheckbox ? singleCheckbox.checked : false;

    // Standard progressive group discount percentages
    let discountPercent = 0;
    if (groupSize >= 2 && groupSize <= 4) {
      discountPercent = 0.05; // 5% discount
    } else if (groupSize >= 5 && groupSize <= 9) {
      discountPercent = 0.10; // 10% discount
    } else if (groupSize >= 10) {
      discountPercent = 0.15; // 15% discount
    }

    // Calculations
    const discountedBase = basePriceVal * (1 - discountPercent);
    const addonsPerPerson = (isHeliChecked ? heliPriceVal : 0) + (isSingleChecked ? singlePriceVal : 0);
    const finalPerPerson = discountedBase + addonsPerPerson;

    // Set attributes for dynamic currency updates
    if (basePricePerPersonDisplay) {
      basePricePerPersonDisplay.setAttribute('data-price-usd', basePriceVal);
      basePricePerPersonDisplay.textContent = formatPrice(basePriceVal);
    }
    if (discountRateDisplay) {
      discountRateDisplay.textContent = `${Math.round(discountPercent * 100)}%`;
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

// Initialise everything on page load
document.addEventListener('DOMContentLoaded', () => {
  const detailsWrapper = document.querySelector('[data-trek-details-wrapper]');
  const trekKey = detailsWrapper ? detailsWrapper.getAttribute('data-trek-key') : 'ebc';

  setupSubNavScrollSpy();
  setupAccordions();
  setupGearChecklist(trekKey);
  setupBookingCalculator();
});
