/**
 * Interactive 3-Tab Review Switcher & Subtab Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // Main Review Tab Switching
  const tabBtns = document.querySelectorAll('.review-tab-btn');
  const tabPanels = document.querySelectorAll('.review-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Deactivate all buttons & panels
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Activate selected button & panel
      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Platform Subtab Switching
  const subtabBtns = document.querySelectorAll('.platform-subtab-btn');
  subtabBtns.forEach(subBtn => {
    subBtn.addEventListener('click', () => {
      subtabBtns.forEach(b => b.classList.remove('active'));
      subBtn.classList.add('active');
    });
  });

  // Interactive Pagination Dots
  const dotGroups = document.querySelectorAll('.pagination-dots');
  dotGroups.forEach(group => {
    const dots = group.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  });

  // ==================== FAQ Interaction Logic ====================
  // FAQ Category Pill Switching
  const faqCatBtns = document.querySelectorAll('.faq-category-btn');
  const faqPanels = document.querySelectorAll('.faq-category-panel');

  faqCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const catKey = btn.getAttribute('data-faq-cat');

      faqCatBtns.forEach(b => b.classList.remove('active'));
      faqPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetFaqPanel = document.getElementById(`faq-cat-${catKey}`);
      if (targetFaqPanel) {
        targetFaqPanel.classList.add('active');
      }
    });
  });

  // FAQ Accordion Card Toggle
  const accordionItems = document.querySelectorAll('.faq-accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.faq-accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Optional: Close sibling items in the same panel
        const parentPanel = item.closest('.faq-category-panel');
        if (parentPanel) {
          parentPanel.querySelectorAll('.faq-accordion-item').forEach(sibling => {
            sibling.classList.remove('active');
          });
        }

        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==================== Resources Subtab Logic ====================
  const resTabBtns = document.querySelectorAll('.res-tab-btn');
  const resourceData = {
    webinars: [
      {
        title: "Everest Base Camp High Altitude Ranking & Gear Webinar - By Namaste Sherpa Experts",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Revealing Altitude Tactics You Already Know To Pass Thorong La In Annapurna Circuit",
        img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Nepal Trekking Playbook: Exact Steps We Followed to Keep Our Trekkers Safe & Hydrated",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      }
    ],
    blogs: [
      {
        title: "Top 10 Essential Teahouse Etiquette Tips Every First-Time Everest Trekker Must Know",
        img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Autumn vs Spring in Nepal: How to Pick the Perfect Trekking Season for Clear Mountain Views",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Manaslu Circuit vs Annapurna Circuit: Comprehensive Route Breakdown and Permit Guide",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      }
    ],
    checklists: [
      {
        title: "Ultimate High-Altitude Gear & Packing Checklist for Everest Base Camp (Printable PDF)",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "First-Aid Kit & Altitude Sickness Prevention Checklist for Himalayan Remote Expeditions",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Kathmandu Rental Guide: What Sleeping Bags & Down Jackets to Rent in Thamel",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    ebooks: [
      {
        title: "Complete Himalayan Travel Guide E-Book: Permits, TIMS, Insurance & Helicopter Safety",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Sherpa Cultural Heritage & Monasteries Guide: Understanding Solukhumbu Traditions",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Tailor-Made Himalayan Itinerary Handbook: Designing Private & Group Trips to Nepal",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  resTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const catKey = btn.getAttribute('data-res-cat');
      resTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const items = resourceData[catKey] || resourceData.webinars;
      const grid = document.querySelector('.resources-grid');
      if (grid) {
        grid.innerHTML = items.map(item => `
          <div class="resource-card open-inquiry-btn">
            <div class="resource-thumb-wrapper" style="background-image: url('${item.img}');">
              <div class="yt-play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><polygon points="9.5,7.5 16.5,12 9.5,16.5"/></svg>
              </div>
            </div>
            <div class="resource-card-content">
              <h3 class="resource-card-title">${item.title}</h3>
            </div>
          </div>
        `).join('');
      }
    });
  });
});
