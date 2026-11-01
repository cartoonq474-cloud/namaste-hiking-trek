const fs = require('fs');

let html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('Original length:', html.length);

// 1. Update Key Trip Facts at a Glance table (Lines 768-798)
const oldTableTarget = `<tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy); width: 28%;">Duration</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">14 calendar days, including Kathmandu arrival and departure</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Main Walking Route</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Chame → Lower Pisang → Ghyaru/Ngawal → Manang → Yak Kharka → Thorong La → Muktinath</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Southern Finish</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Kagbeni/Jomsom → Tatopani → Ghorepani → Poon Hill → Nayapul / Pokhara</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Highest Point</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong La Pass (5,416 m / 17,769 ft); Day 8 daytime crossing</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Acclimatization</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Day 5 in Manang (~3,500 m); side hike selected according to health and conditions</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Pre-pass Overnight</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong Phedi (~4,450 m), or individually assessed High Camp (~4,925 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Travel Style</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Road-supported trekking; optimized walking/vehicle split preserving the high-altitude wilderness</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Return Journey</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Pokhara to Kathmandu on Day 13; international departure on Day 14</td>
                    </tr>`;

const newTableReplacement = `<tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy); width: 28%;">Duration</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">16 calendar days, including Kathmandu arrival, sightseeing and departure</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Main Walking Route</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Jagat → Dharapani → Chame → Upper Pisang → Ghyaru/Ngawal → Manang → Yak Kharka → Thorong La → Muktinath</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Gorge & Mountain Flight</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Muktinath → Kagbeni → Jomsom (Day 13 scenic flight to Pokhara) → Fewa Lake relaxation</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Highest Point</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong La Pass (5,416 m / 17,769 ft); Day 11 daytime crossing</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Acclimatization</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Day 2 (Kathmandu UNESCO heritage) & Day 8 (Manang ~3,540 m Gangapurna hike & HRA clinic)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Pre-pass Overnight</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Thorong Phedi (~4,450 m), or individually assessed High Camp (~4,925 m) on Day 10</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Travel Style</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Complete classic circuit; overland drive to Jagat, continuous foot trekking, domestic scenic flight Jomsom to Pokhara, and Kathmandu buffer day</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                      <td style="padding: 10px 12px; font-weight: 700; color: var(--color-primary-navy);">Return Journey</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-700);">Jomsom flight to Pokhara on Day 13; overland drive to Kathmandu on Day 14; buffer day on Day 15; international departure on Day 16</td>
                    </tr>`;

if (html.includes(oldTableTarget)) {
  html = html.replace(oldTableTarget, newTableReplacement);
  console.log('Updated Key Trip Facts at a Glance table!');
} else {
  // Try normalising line endings
  const normHtml = html.replace(/\r\n/g, '\n');
  const normTarget = oldTableTarget.replace(/\r\n/g, '\n');
  if (normHtml.includes(normTarget)) {
    html = normHtml.replace(normTarget, newTableReplacement);
    console.log('Updated Key Trip Facts at a Glance table (with newline normalization)!');
  } else {
    console.error('Could not find oldTableTarget!');
  }
}

// 2. Update Accordion paragraph (Line 2436)
const oldAcc = `<p>The modern Annapurna Circuit Trek is a 14-calendar-day journey that combines walking with strategic vehicle support. Historically, trekkers walked from Besisahar through the lower valley for several days before reaching higher elevations. With road construction now reaching deep into the Marsyangdi and Kali Gandaki corridors, modern itineraries drive directly from Kathmandu to Chame (2,710 m), preserving energy and time for the spectacular alpine sections between Pisang, Manang, Thorong La (5,416 m), and Muktinath.
      <br><br>
      The standard walking route traverses: Chame → Lower Pisang → Ghyaru/Ngawal → Manang → Yak Kharka → Thorong Phedi / High Camp → Thorong La Pass → Muktinath. The southern conclusion continues via Kagbeni, Jomsom, Tatopani hot springs, and Ghorepani to Poon Hill (3,210 m) before exiting at Nayapul to Pokhara.</p>`;

const newAcc = `<p>Our classic Annapurna Circuit Trek is a 16-calendar-day journey crafted for optimal acclimatization, cultural immersion, and wilderness appreciation. Driving past Besisahar to Jagat (1,300 m), trekkers walk on foot through the lower subtropical gorge and pine forests of Tal and Dharapani to Chame, giving your physiology three gentle days to adjust before crossing 3,000 meters.
      <br><br>
      The standard walking route traverses: Jagat → Dharapani → Chame → Upper Pisang → Ghyaru &amp; Ngawal (high balcony route) → Manang (vital acclimatization) → Yak Kharka → Thorong Phedi / High Camp → Thorong La Pass (5,416 m) → Muktinath. The journey then continues through medieval Kagbeni and the Kali Gandaki riverbed to Jomsom, followed by an aerial mountain flight slicing between Annapurna I and Dhaulagiri directly to Pokhara, before returning to Kathmandu with a dedicated contingency buffer day.</p>`;

if (html.includes(oldAcc)) {
  html = html.replace(oldAcc, newAcc);
  console.log('Updated accordion description in Section 5!');
} else {
  const normHtml = html.replace(/\r\n/g, '\n');
  const normAcc = oldAcc.replace(/\r\n/g, '\n');
  if (normHtml.includes(normAcc)) {
    html = normHtml.replace(normAcc, newAcc);
    console.log('Updated accordion description in Section 5 (normalized)!');
  } else {
    console.error('Could not find oldAcc!');
  }
}

// 3. Update Map Alt tag (Line 3038)
html = html.replace(
  'alt="Illustrated Annapurna Circuit Trek Route Map (14 Days)"',
  'alt="Illustrated Annapurna Circuit Trek Route Map (16 Days)"'
);
console.log('Updated map alt tag!');

// 4. Update FAQ Answer (Line 3733)
const oldFaq = `This package is 14 calendar days from Kathmandu arrival to final international departure. Days 2–12 encompass the mountain journey, including the strategic road approach to Chame, the mandatory Day 5 acclimatization in Manang, the Thorong La crossing (5,416 m), and the southern conclusion through Tatopani hot springs and Poon Hill.`;

const newFaq = `This package is 16 calendar days from Kathmandu arrival to final international departure. Days 3–12 encompass the mountain walking journey from Jagat through Manang and across Thorong La Pass (5,416 m) to Muktinath and Jomsom. Day 2 features dedicated UNESCO cultural sightseeing in Kathmandu, Day 13 includes the scenic mountain flight to Pokhara, and Day 15 provides an essential safety buffer in Kathmandu against mountain weather delays.`;

if (html.includes(oldFaq)) {
  html = html.replace(oldFaq, newFaq);
  console.log('Updated FAQ answer!');
} else {
  const normHtml = html.replace(/\r\n/g, '\n');
  const normFaq = oldFaq.replace(/\r\n/g, '\n');
  if (normHtml.includes(normFaq)) {
    html = normHtml.replace(normFaq, newFaq);
    console.log('Updated FAQ answer (normalized)!');
  } else {
    console.error('Could not find oldFaq!');
  }
}

// 5. Check if any "14 calendar" or "14 Days" still exists in ACT content
const remaining14 = [...html.matchAll(/(?:14\s*calendar|14\s*[-–]?\s*Day|Annapurna Circuit[^<\n]*14)/gi)];
console.log('Remaining 14 matches related to ACT:', remaining14.map(m => m[0]));

// 6. Validate Div Count
const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log('Resulting Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

if (openDivs !== closeDivs) {
  console.error('ERROR: Div mismatch!');
  process.exit(1);
}

fs.writeFileSync('trek/annapurna-circuit-trek/index.html', html, 'utf8');
console.log('Successfully wrote updated index.html!');
