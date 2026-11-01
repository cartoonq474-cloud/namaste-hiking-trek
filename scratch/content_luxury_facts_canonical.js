const facts = [
  {
    label: "Duration",
    value: "12 calendar days (Kathmandu to departure)",
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`
  },
  {
    label: "Walking days",
    value: "9 scheduled days (Days 2–10)",
    icon: `<path d="M13 4v16M7 8l6-4 6 4M7 16l6 4 6-4"/>`
  },
  {
    label: "Acclimatization",
    value: "Namche (Day 4) & Dingboche (Day 7)",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
  },
  {
    label: "Main objectives",
    value: "Everest Base Camp & Kala Patthar",
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
  },
  {
    label: "Max viewpoint",
    value: "Kala Patthar, ~5,545 m (18,192 ft)",
    icon: `<path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/>`
  },
  {
    label: "Base Camp elevation",
    value: "Everest Base Camp, ~5,364 m (17,598 ft)",
    icon: `<path d="M3 21h18M5 21V7l7-4 7 4v14"/>`
  },
  {
    label: "Highest overnight",
    value: "Gorak Shep, ~5,164 m (16,942 ft)",
    icon: `<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>`
  },
  {
    label: "Inbound travel",
    value: "Kathmandu to Lukla via Helicopter",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>`
  },
  {
    label: "Return travel",
    value: "Pheriche to Kathmandu via Helicopter",
    icon: `<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>`
  },
  {
    label: "Turnaround point",
    value: "Pheriche after Kala Patthar ascent",
    icon: `<path d="M3 12h18M3 12l6-6M3 12l6 6"/>`
  },
  {
    label: "Accommodation",
    value: "Premium luxury lodges where available",
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`
  },
  {
    label: "Sanitary standard",
    value: "Private en-suite rooms (lower/middle trail)",
    icon: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>`
  },
  {
    label: "Support team",
    value: "Licensed Sherpa guide & coordinated porters",
    icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
  },
  {
    label: "Baggage limits",
    value: "Duffel bag (porter) + personal daypack",
    icon: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`
  },
  {
    label: "Best season",
    value: "Sep–Nov (Autumn) & Mar–May (Spring)",
    icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`
  },
  {
    label: "Trek grading",
    value: "Challenging altitude • Upgraded comfort",
    icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`
  }
];

function generateKeyFactsHtml() {
  const itemsHtml = facts.map(f => `
          <!-- ${f.label} -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${f.icon}</svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">${f.label}</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">${f.value}</span>
            </div>
          </div>
  `).join('\n');

  return `
    <!-- Key Trip Facts Grid -->
    <div class="container" style="margin-bottom: 30px;">
      <style>
        .trip-fact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease-in-out;
        }
        .trip-fact-item:hover {
          transform: translateY(-2px);
        }
      </style>
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px 30px;">
        <h2 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h2>
        
        <div class="trek-facts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

module.exports = {
  facts,
  generateKeyFactsHtml
};
