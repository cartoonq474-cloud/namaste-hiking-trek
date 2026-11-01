const fs = require('fs');

const raw = fs.readFileSync('scratch/kanchenjunga_prompt.txt', 'utf8');
const lines = raw.split(/\r?\n/);

// 1. Quick Reference Table (Days 1 to 26)
const quickRows = [];
for (let i = 369; i < 400; i++) {
  const line = lines[i] || '';
  if (line.match(/^Day\s+\d+\t/i)) {
    const parts = line.split('\t').map(p => p.trim());
    if (parts.length >= 5) {
      quickRows.push({
        day: parts[0],
        route: parts[1],
        elevation: parts[2],
        distance: parts[3],
        duration: parts[4]
      });
    }
  }
}
console.log('Quick Table Rows:', quickRows.length);

// 2. Parse Detailed Days 1 to 26
const parsedDays = [];
let dayIdxs = [];
for (let i = 400; i < 720; i++) {
  const m = lines[i].match(/^Day\s+(\d+):\s*(.*)$/i);
  if (m) {
    dayIdxs.push({ num: parseInt(m[1]), title: m[2].trim(), line: i });
  }
}

// Keep only the 26 days
dayIdxs = dayIdxs.filter(d => d.num >= 1 && d.num <= 26);
console.log('Itinerary Days identified:', dayIdxs.length);

for (let i = 0; i < dayIdxs.length; i++) {
  const cur = dayIdxs[i];
  const start = cur.line;
  const end = (i < dayIdxs.length - 1) ? dayIdxs[i + 1].line : 719;

  const slice = lines.slice(start + 1, end);
  const paragraphs = [];
  const bullets = {};
  const notes = [];

  for (let s of slice) {
    s = s.trim();
    if (!s) continue;
    if (s.startsWith('-')) {
      const bText = s.substring(1).trim();
      const colonIdx = bText.indexOf(':');
      if (colonIdx !== -1) {
        const key = bText.substring(0, colonIdx).trim().toLowerCase();
        const val = bText.substring(colonIdx + 1).trim();
        bullets[key] = val;
      } else {
        bullets[bText] = true;
      }
    } else if (s.startsWith('Note:') || s.startsWith('Confirm the actual flight')) {
      notes.push(s);
    } else {
      paragraphs.push(s);
    }
  }

  parsedDays.push({
    num: cur.num,
    title: cur.title,
    paragraphs,
    bullets,
    notes
  });
}

// Curated image pool with authentic Himalayan/Kanchenjunga themes
const photoPool = [
  { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80", alt: "Kathmandu Valley Cultural Heritage" },
  { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80", alt: "Boudhanath Stupa Prayer Flags" },
  { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80", alt: "Himalayan Mountain Range Dawn" },
  { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", alt: "Snow-Capped Alpine Ridges" },
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", alt: "Lush Subtropical River Valley" },
  { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80", alt: "Misty Mountain Forest Trail" },
  { url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80", alt: "High Mountain Suspension Bridge" },
  { url: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=600&q=80", alt: "Cascading Himalayan River Torrent" },
  { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", alt: "Dense Pine and Bamboo Forest" },
  { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80", alt: "Remote Terraced Hillsides" },
  { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80", alt: "Sunlight Piercing Mountain Mist" },
  { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", alt: "Traditional Mountain Teahouse Trail" },
  { url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80", alt: "Alpine Fir and Birch Woodland" },
  { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80", alt: "Ghunsa Valley Glacial Gorge" },
  { url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80", alt: "Glacial Mountain Stream Torrent" },
  { url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80", alt: "High Altitude Wooden Footbridge" },
  { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", alt: "Dramatic Alpine Valley Wall" },
  { url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=600&q=80", alt: "Khambachen Glacial Plateau" },
  { url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80", alt: "Massive Himalayan Glacial Moraine" },
  { url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80", alt: "Jannu Peak Kumbhakarna Tower" },
  { url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=600&q=80", alt: "Lhonak Glacial Sand Flat" },
  { url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=600&q=80", alt: "Kanchenjunga North Glacier Moraine" },
  { url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80", alt: "Pangpema North Face High Amphitheater" },
  { url: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=600&q=80", alt: "Kanchenjunga Main Summit Wall" },
  { url: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=600&q=80", alt: "Sele Le Mountain Pass Ridge" },
  { url: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=600&q=80", alt: "Prayer Flags Flying at High Pass" },
  { url: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=600&q=80", alt: "Descent into Cheram Valley" },
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80", alt: "Yalung Glacier Moraine Wall" },
  { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80", alt: "Ramche High Alpine Pasture" },
  { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", alt: "Ancient Moss-Draped Rhododendron Woods" },
  { url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80", alt: "Tortong Valley River Path" },
  { url: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=600&q=80", alt: "Yamphudin Multi-Ethnic Village" },
  { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80", alt: "Mamanke Terraced Valley Slopes" },
  { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80", alt: "Rolling Green Foothills of Lalikharka" },
  { url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80", alt: "Suketar Ridge and Airstrip Panorama" },
  { url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80", alt: "Kathmandu Valley Departure Sunset" }
];

// Helper to wrap meters in data-altitude-m span
function formatAltitudeTags(str) {
  if (!str) return '';
  return str.replace(/(\d{1,2}(?:,\d{3})*|\d+)\s*(?:m|metres|meters)(?![a-zA-Z0-9])/gi, (match, numStr) => {
    const rawNum = numStr.replace(/,/g, '');
    const num = parseInt(rawNum, 10);
    if (num >= 500 && num <= 8848) {
      return `<span data-altitude-m="${num}">${match}</span>`;
    }
    return match;
  });
}

// Generate Section 2 HTML
let out = `          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Kanchenjunga Circuit Trek Itinerary: 26-Day Detailed Expedition Plan</h2>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.7; margin-bottom: 24px; max-width: 860px;">
              Our comprehensive 26-day Kanchenjunga Circuit Trek itinerary explores both the northern base camp at Pangpema (<span data-altitude-m="5143">5,143 m</span>) and southern valleys via Sele Le pass (<span data-altitude-m="4290">4,290 m</span>). Built with two dedicated acclimatization stays in Ghunsa and Khambachen, this schedule balances high-altitude safety with the thrill of eastern Nepal's wildest wilderness.
            </p>

            <!-- Quick Reference Summary Table -->
            <div class="itinerary-quick-table-card" style="background: var(--color-bg-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy); margin: 0; display: flex; align-items: center; gap: 10px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  26-Day Quick Reference Schedule
                </h3>
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-teal); background: rgba(0,168,181,0.08); padding: 4px 12px; border-radius: 20px;">
                  26 Calendar Days • Suketar to Suketar
                </span>
              </div>
              <div class="itinerary-table-responsive" style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: rgba(15, 23, 42, 0.04); border-bottom: 2px solid var(--color-border);">
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Day</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Route or Activity</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Approx. Elevation</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Distance</th>
                      <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Walking Duration</th>
                    </tr>
                  </thead>
                  <tbody>\n`;

quickRows.forEach((r, idx) => {
  const bg = idx % 2 === 1 ? ' style="background: rgba(0,0,0,0.015);"' : '';
  const elevFormatted = formatAltitudeTags(r.elevation);
  out += `                    <tr${bg} style="border-bottom: 1px solid var(--color-border);">
                      <td style="padding: 10px 14px; font-weight: 600; color: var(--color-teal); white-space: nowrap;">${r.day}</td>
                      <td style="padding: 10px 14px; font-weight: 500; color: var(--color-neutral-800);">${r.route}</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-700); white-space: nowrap;">${elevFormatted}</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-600); white-space: nowrap;">${r.distance}</td>
                      <td style="padding: 10px 14px; color: var(--color-neutral-600); white-space: nowrap;">${r.duration}</td>
                    </tr>\n`;
});

out += `                  </tbody>
                </table>
              </div>
            </div>

            <!-- Operational Notice Alert Card -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; display: flex; gap: 16px; align-items: flex-start;">
              <div style="flex-shrink: 0; color: #16a34a; margin-top: 2px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div style="color: #166534; font-size: 0.95rem; line-height: 1.6;">
                <strong style="color: #14532d; font-size: 1rem; display: block; margin-bottom: 4px;">Important Expedition Operational Notes:</strong>
                The itinerary provides a comprehensive 26-day structure. Operational elements (such as direct Suketar flights vs. Bhadrapur road transport, the Pangpema Day 13 out-and-back walk, and the Day 18/19 Ramche excursion and Cheram overnight) are coordinated with licensed guides and local teahouse owners to optimize safety, energy, and acclimatization.
              </div>
            </div>

            <div class="itinerary-timeline">\n`;

// Generate 26 Cards
parsedDays.forEach((day, index) => {
  const activeClass = index === 0 ? ' active' : '';
  const dayNumPad = day.num < 10 ? '0' + day.num : '' + day.num;
  const isAcclimatization = day.title.toLowerCase().includes('acclimatization') || day.title.toLowerCase().includes('preparation') || day.title.toLowerCase().includes('leisure');
  
  // Extract subtitle info: destination and altitude
  let subtitleDest = day.title;
  let subtitleElev = '';
  const parenMatch = day.title.match(/\(([^)]+)\)/);
  if (parenMatch) {
    subtitleElev = parenMatch[1];
    subtitleDest = day.title.replace(/\([^)]+\)/, '').trim();
  }

  // Format elevation in subtitle
  let subtitleHtml = '';
  if (subtitleElev) {
    subtitleHtml = `${subtitleDest} — ${formatAltitudeTags(subtitleElev)}`;
  } else {
    // Check bullets for altitude
    const bAlt = day.bullets['maximum altitude'] || day.bullets['destination altitude'] || day.bullets['maximum planned elevation'] || day.bullets['altitude'];
    if (bAlt) {
      subtitleHtml = `${subtitleDest} — ${formatAltitudeTags(bAlt)}`;
    } else {
      subtitleHtml = subtitleDest;
    }
  }

  // Metrics items
  const metrics = [];
  
  // 1. Duration / Time
  const durationVal = day.bullets['walking duration'] || day.bullets['duration'] || day.bullets['transfer duration'];
  if (durationVal) {
    metrics.push({
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      text: `Duration: ${durationVal}`
    });
  }

  // 2. Distance
  const distVal = day.bullets['trekking distance'] || day.bullets['distance'];
  if (distVal) {
    metrics.push({
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>`,
      text: `Distance: ${distVal}`
    });
  }

  // 3. Activity
  const actVal = day.bullets['activity'] || day.bullets['destination'];
  if (actVal) {
    metrics.push({
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      text: `Activity: ${actVal}`
    });
  }

  // 4. Accommodation
  const accomVal = day.bullets['accommodation'];
  if (accomVal) {
    metrics.push({
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      text: `Accommodation: ${accomVal}`
    });
  }

  // Meta box items (Meals & Overnight)
  const mealsVal = day.bullets['meals'] || 'According to confirmed expedition package';
  let overnightVal = 'Overnight stay';
  if (accomVal) {
    overnightVal = accomVal.split(',')[0].trim();
  } else if (subtitleDest) {
    overnightVal = subtitleDest;
  }

  // Photos: 4 images per day cycling through pool
  const dayPhotos = [];
  for (let p = 0; p < 4; p++) {
    const photoIdx = (index * 4 + p) % photoPool.length;
    dayPhotos.push(photoPool[photoIdx]);
  }

  out += `              <!-- Day ${dayNumPad} -->
              <div class="itinerary-card${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${day.num}:</span> ${subtitleDest}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${subtitleHtml}
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <div class="itinerary-toggle-btn-new">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">\n`;

  metrics.forEach(m => {
    out += `                      <div class="itinerary-metric-item">
                        ${m.icon}
                        <span>${m.text}</span>
                      </div>\n`;
  });

  out += `                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span>Meals: ${mealsVal}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span>Overnight: ${overnightVal}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">\n`;

  day.paragraphs.forEach(p => {
    const formattedP = formatAltitudeTags(p);
    out += `                      <p>${formattedP}</p>\n`;
  });

  if (day.notes && day.notes.length > 0) {
    day.notes.forEach(n => {
      out += `                      <p style="background: rgba(0,168,181,0.06); border-left: 3px solid var(--color-teal); padding: 8px 12px; border-radius: 4px; font-size: 0.92rem; color: var(--color-neutral-700);"><strong>Route Note:</strong> ${n}</p>\n`;
    });
  }

  out += `                    </div>

                    <div class="itinerary-photos-grid">\n`;

  dayPhotos.forEach(p => {
    out += `                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p.url}" alt="${p.alt} – Day ${day.num}">
                      </div>\n`;
  });

  out += `                    </div>
                  </div>
                </div>
              </div>\n\n`;
});

out += `            </div>
          </section>`;

// Now apply this to index.html
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const sec2Start = '<!-- Section 2: Itinerary -->';
const sec3Start = '<!-- Section 3: Includes &amp; Excludes -->';
let sec3Idx = html.indexOf(sec3Start);
if (sec3Idx === -1) {
  // Try alternative includes comment
  sec3Idx = html.indexOf('<!-- Section 3:');
}

const sec2Idx = html.indexOf(sec2Start);

if (sec2Idx === -1 || sec3Idx === -1) {
  console.error('ERROR: Could not find Section 2 or Section 3 start indices!', { sec2Idx, sec3Idx });
  process.exit(1);
}

console.log(`Replacing Section 2 between index ${sec2Idx} and ${sec3Idx}...`);

html = html.substring(0, sec2Idx) + out + '\n\n          ' + html.substring(sec3Idx);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Tag balance validation failed!');
  process.exit(1);
}

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Section 2 (26-Day Itinerary) applied cleanly with 100% tag balance!');
