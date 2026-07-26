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
  renderAltitudeChart('altitude-chart-wrapper', 'ebc');
});
