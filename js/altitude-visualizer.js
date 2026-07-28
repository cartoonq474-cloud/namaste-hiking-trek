/**
 * Interactive SVG Altitude Profile Visualizer Component
 */

const trekAltitudeProfiles = {
  "ebc": {
    name: "Everest Base Camp Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1400 },
      { day: "Day 2", spot: "Lukla", altitudeM: 2860 },
      { day: "Day 3", spot: "Namche Bazaar", altitudeM: 3440 },
      { day: "Day 4", spot: "Namche (Acclimatization)", altitudeM: 3440 },
      { day: "Day 5", spot: "Tengboche", altitudeM: 3867 },
      { day: "Day 6", spot: "Dingboche", altitudeM: 4410 },
      { day: "Day 7", spot: "Dingboche (Acclimatization)", altitudeM: 4410 },
      { day: "Day 8", spot: "Lobuche", altitudeM: 4940 },
      { day: "Day 9", spot: "EBC / Gorakshep", altitudeM: 5364 },
      { day: "Day 10", spot: "Kala Patthar Peak", altitudeM: 5545 },
      { day: "Day 11", spot: "Pheriche", altitudeM: 4370 },
      { day: "Day 12", spot: "Namche Bazaar", altitudeM: 3440 },
      { day: "Day 14", spot: "Lukla -> Kathmandu", altitudeM: 1400 }
    ]
  },
  "abc": {
    name: "Annapurna Base Camp Trek",
    points: [
      { day: "Day 1", spot: "Pokhara", altitudeM: 822 },
      { day: "Day 2", spot: "Ulleri", altitudeM: 2050 },
      { day: "Day 3", spot: "Ghorepani", altitudeM: 2874 },
      { day: "Day 4", spot: "Poon Hill / Tadapani", altitudeM: 3210 },
      { day: "Day 5", spot: "Chhomrong", altitudeM: 2170 },
      { day: "Day 6", spot: "Himalaya", altitudeM: 2920 },
      { day: "Day 7", spot: "MBC (Machhapuchhre)", altitudeM: 3700 },
      { day: "Day 8", spot: "ABC (Annapurna Base Camp)", altitudeM: 4130 },
      { day: "Day 9", spot: "Bamboo", altitudeM: 2310 },
      { day: "Day 10", spot: "Jhinu Danda (Hot Springs)", altitudeM: 1780 },
      { day: "Day 11", spot: "Pokhara", altitudeM: 822 }
    ]
  },
  "annapurna_circuit": {
    name: "Annapurna Circuit Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1400 },
      { day: "Day 2", spot: "Besisahar", altitudeM: 760 },
      { day: "Day 3", spot: "Chame", altitudeM: 2670 },
      { day: "Day 4", spot: "Pisang", altitudeM: 3200 },
      { day: "Day 5", spot: "Manang", altitudeM: 3540 },
      { day: "Day 6", spot: "Manang (Acclimatization)", altitudeM: 3540 },
      { day: "Day 7", spot: "Yak Kharka", altitudeM: 4050 },
      { day: "Day 8", spot: "Thorong Phedi", altitudeM: 4450 },
      { day: "Day 9", spot: "Thorong La Pass", altitudeM: 5416 },
      { day: "Day 10", spot: "Muktinath", altitudeM: 3760 },
      { day: "Day 11", spot: "Jomsom", altitudeM: 2720 },
      { day: "Day 12", spot: "Pokhara", altitudeM: 822 }
    ]
  },
  "manaslu": {
    name: "Manaslu Circuit Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1400 },
      { day: "Day 2", spot: "Soti Khola", altitudeM: 700 },
      { day: "Day 3", spot: "Jagat", altitudeM: 1410 },
      { day: "Day 4", spot: "Deng", altitudeM: 1800 },
      { day: "Day 5", spot: "Namrung", altitudeM: 2660 },
      { day: "Day 6", spot: "Sama Gaon", altitudeM: 3530 },
      { day: "Day 7", spot: "Sama Gaon (Acclimatization)", altitudeM: 3530 },
      { day: "Day 8", spot: "Samdo", altitudeM: 3860 },
      { day: "Day 9", spot: "Dharmasala", altitudeM: 4480 },
      { day: "Day 10", spot: "Larkya La Pass", altitudeM: 5106 },
      { day: "Day 11", spot: "Bimthang", altitudeM: 3720 },
      { day: "Day 12", spot: "Dharapani", altitudeM: 1860 }
    ]
  },
  "langtang": {
    name: "Langtang Valley Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1400 },
      { day: "Day 2", spot: "Syabrubesi", altitudeM: 1550 },
      { day: "Day 3", spot: "Lama Hotel", altitudeM: 2480 },
      { day: "Day 4", spot: "Langtang Village", altitudeM: 3430 },
      { day: "Day 5", spot: "Kyanjin Gompa", altitudeM: 3870 },
      { day: "Day 6", spot: "Kyanjin Ri", altitudeM: 4773 },
      { day: "Day 7", spot: "Lama Hotel", altitudeM: 2480 },
      { day: "Day 8", spot: "Syabrubesi", altitudeM: 1550 },
      { day: "Day 9", spot: "Kathmandu", altitudeM: 1400 }
    ]
  },
  "poonhill": {
    name: "Ghorepani Poon Hill Trek",
    points: [
      { day: "Day 1", spot: "Pokhara", altitudeM: 822 },
      { day: "Day 2", spot: "Tikhedhunga", altitudeM: 1540 },
      { day: "Day 3", spot: "Ghorepani", altitudeM: 2874 },
      { day: "Day 4", spot: "Poon Hill Sunrise", altitudeM: 3210 },
      { day: "Day 5", spot: "Tadapani", altitudeM: 2630 },
      { day: "Day 6", spot: "Ghandruk", altitudeM: 1940 },
      { day: "Day 7", spot: "Pokhara", altitudeM: 822 }
    ]
  },
  "gokyo": {
    name: "Gokyo Lakes & Cho La Pass Trek",
    points: [
      { day: "Day 1", spot: "Kathmandu", altitudeM: 1400 },
      { day: "Day 2", spot: "Lukla", altitudeM: 2860 },
      { day: "Day 3", spot: "Namche Bazaar", altitudeM: 3440 },
      { day: "Day 4", spot: "Dole", altitudeM: 4110 },
      { day: "Day 5", spot: "Machhermo", altitudeM: 4470 },
      { day: "Day 6", spot: "Gokyo Lakes", altitudeM: 4790 },
      { day: "Day 7", spot: "Gokyo Ri Peak", altitudeM: 5357 },
      { day: "Day 8", spot: "Thagnak", altitudeM: 4700 },
      { day: "Day 9", spot: "Cho La Pass", altitudeM: 5420 },
      { day: "Day 10", spot: "Dzongla", altitudeM: 4830 },
      { day: "Day 11", spot: "Lobuche", altitudeM: 4940 },
      { day: "Day 12", spot: "Pheriche", altitudeM: 4370 },
      { day: "Day 13", spot: "Namche Bazaar", altitudeM: 3440 },
      { day: "Day 14", spot: "Lukla", altitudeM: 2860 },
      { day: "Day 15", spot: "Kathmandu", altitudeM: 1400 }
    ]
  },
  "mustang": {
    name: "Upper Mustang Trek",
    points: [
      { day: "Day 1", spot: "Pokhara", altitudeM: 822 },
      { day: "Day 2", spot: "Jomsom", altitudeM: 2720 },
      { day: "Day 3", spot: "Kagbeni", altitudeM: 2810 },
      { day: "Day 4", spot: "Chele", altitudeM: 3050 },
      { day: "Day 5", spot: "Syangboche", altitudeM: 3800 },
      { day: "Day 6", spot: "Tsarang", altitudeM: 3560 },
      { day: "Day 7", spot: "Lo Manthang", altitudeM: 3840 },
      { day: "Day 8", spot: "Lo Manthang (Exploration)", altitudeM: 3840 },
      { day: "Day 9", spot: "Dhakmar", altitudeM: 3820 },
      { day: "Day 10", spot: "Syangboche", altitudeM: 3800 },
      { day: "Day 11", spot: "Chhusang", altitudeM: 2980 },
      { day: "Day 12", spot: "Jomsom", altitudeM: 2720 },
      { day: "Day 13", spot: "Pokhara", altitudeM: 822 }
    ]
  }
};

export function renderAltitudeChart(containerId, trekKey = "ebc") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = trekAltitudeProfiles[trekKey] || trekAltitudeProfiles["ebc"];
  const points = data.points;
  
  const width = 800;
  const height = 240;
  const padding = 40;

  const maxAlt = Math.max(...points.map(p => p.altitudeM)) + 400;
  const minAlt = 500;

  const getX = (index) => padding + (index / (points.length - 1)) * (width - 2 * padding);
  const getY = (alt) => height - padding - ((alt - minAlt) / (maxAlt - minAlt)) * (height - 2 * padding);

  const pathCoords = points.map((p, i) => `${getX(i)},${getY(p.altitudeM)}`).join(' L ');
  const areaCoords = `M ${getX(0)},${height - padding} L ${pathCoords} L ${getX(points.length - 1)},${height - padding} Z`;

  const svgHTML = `
    <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
      <h3 style="font-size: 1.1rem; color: var(--color-primary-navy);">${data.name} — Elevation Profile</h3>
      <select id="altitude-trek-selector" class="control-select" style="background: var(--color-neutral-100); color: var(--color-primary-navy); border-color: var(--color-neutral-300);">
        <option value="ebc" ${trekKey === 'ebc' ? 'selected' : ''}>Everest Base Camp (5,545m)</option>
        <option value="abc" ${trekKey === 'abc' ? 'selected' : ''}>Annapurna Base Camp (4,130m)</option>
        <option value="annapurna_circuit" ${trekKey === 'annapurna_circuit' ? 'selected' : ''}>Annapurna Circuit (5,416m)</option>
        <option value="manaslu" ${trekKey === 'manaslu' ? 'selected' : ''}>Manaslu Circuit (5,106m)</option>
        <option value="langtang" ${trekKey === 'langtang' ? 'selected' : ''}>Langtang Valley (4,773m)</option>
        <option value="poonhill" ${trekKey === 'poonhill' ? 'selected' : ''}>Ghorepani Poon Hill (3,210m)</option>
        <option value="gokyo" ${trekKey === 'gokyo' ? 'selected' : ''}>Gokyo Lakes & Cho La Pass (5,420m)</option>
        <option value="mustang" ${trekKey === 'mustang' ? 'selected' : ''}>Upper Mustang (3,840m)</option>
      </select>
    </div>
    <svg viewBox="0 0 ${width} ${height}" class="altitude-chart-svg">
      <defs>
        <linearGradient id="altitudeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2C82C9" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#2C82C9" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <!-- Background Grid -->
      <line x1="${padding}" y1="${getY(2000)}" x2="${width - padding}" y2="${getY(2000)}" stroke="#E2E8F0" stroke-dasharray="4"/>
      <line x1="${padding}" y1="${getY(4000)}" x2="${width - padding}" y2="${getY(4000)}" stroke="#E2E8F0" stroke-dasharray="4"/>
      <text x="${padding - 5}" y="${getY(2000) + 4}" font-size="10" text-anchor="end" fill="#64748B">2000m</text>
      <text x="${padding - 5}" y="${getY(4000) + 4}" font-size="10" text-anchor="end" fill="#64748B">4000m</text>

      <!-- Area & Line -->
      <path d="${areaCoords}" fill="url(#altitudeGradient)" />
      <path d="M ${pathCoords}" fill="none" stroke="#C85A17" stroke-width="3" stroke-linecap="round"/>

      <!-- Data Dots -->
      ${points.map((p, i) => `
        <circle cx="${getX(i)}" cy="${getY(p.altitudeM)}" r="5" fill="#0C2B4E" stroke="#FFFFFF" stroke-width="2"/>
        <text x="${getX(i)}" y="${getY(p.altitudeM) - 10}" font-size="10" font-weight="bold" text-anchor="middle" fill="#0C2B4E" data-altitude-m="${p.altitudeM}">${p.altitudeM}m</text>
        <text x="${getX(i)}" y="${height - padding + 16}" font-size="9" text-anchor="middle" fill="#64748B">${p.spot.split(' ')[0]}</text>
      `).join('')}
    </svg>
  `;

  container.innerHTML = svgHTML;

  const selector = document.getElementById('altitude-trek-selector');
  if (selector) {
    selector.addEventListener('change', (e) => renderAltitudeChart(containerId, e.target.value));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('altitude-chart-wrapper');
  if (wrapper) {
    const key = wrapper.getAttribute('data-trek-key') || 'ebc';
    renderAltitudeChart('altitude-chart-wrapper', key);
  }
});
