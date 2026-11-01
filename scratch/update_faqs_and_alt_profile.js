const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

// 1. Update Section 7 title and description
html = html.replace(/Altitude Profile of Mera Peak Climbing Trek/g, 'Altitude Profile: Mera Peak Climbing (6,476m)');
html = html.replace(/Frequently Asked Questions for Mera Peak Climbing Trek/g, 'Frequently Asked Questions: Mera Peak Climbing (6,476m)');

// 2. Update Question 4 & Question 5 & Question 6 in FAQs
const q4Old = `<span class="faq-question-title">Why does your itinerary approach via Paiya and Pangkongma instead of the direct Zatrwa La route?</span>`;
const q4New = `<span class="faq-question-title">What is the approach route to Mera Peak and how does crossing Zatrwa La work?</span>`;

if (html.includes(q4Old)) {
  html = html.replace(q4Old, q4New);
  console.log('Updated FAQ Q4 title');
}

// Update Q4 Answer
const q4AnsOldStart = html.indexOf('<div class="faq-item-answer">', html.indexOf(q4New));
if (q4AnsOldStart !== -1) {
  const q4AnsOldEnd = html.indexOf('</div>', q4AnsOldStart);
  const q4AnsNew = `<div class="faq-item-answer">
                      <p>Our 18-day itinerary follows the classic and direct approach route from Lukla (<span data-altitude-m="2850">2,850 m</span>) to Chutanga (<span data-altitude-m="3450">3,450 m</span>) before traversing the dramatic high pass of Zatrwa La (<span data-altitude-m="4600">4,600 m</span>) to enter the remote Hinku Valley. This route provides immediate alpine scenery and early acclimatization, followed by a descent into the sheltered forests of Kothe (<span data-altitude-m="3600">3,600 m</span>). From Kothe, the trail progresses gradually through Thangnak (<span data-altitude-m="4350">4,350 m</span>, with a dedicated acclimatization stay) and up to Khare Base Camp (<span data-altitude-m="5045">5,045 m</span>), establishing an optimal physiological staging profile before pushing to Mera High Camp.</p>
                    </div>`;
  // find matching end of answer div
  const nextItem = html.indexOf('<div class="faq-item', q4AnsOldStart);
  html = html.slice(0, q4AnsOldStart) + q4AnsNew + html.slice(nextItem);
  console.log('Updated FAQ Q4 answer');
}

// Update Q5: Day 12 contingency day
const q5Old = `<span class="faq-question-title">What happens on the built-in Day 15 weather contingency day?</span>`;
const q5New = `<span class="faq-question-title">What happens on the built-in Day 12 field contingency day?</span>`;

if (html.includes(q5Old)) {
  html = html.replace(q5Old, q5New);
  console.log('Updated FAQ Q5 title');
}

const q5AnsStart = html.indexOf('<div class="faq-item-answer">', html.indexOf(q5New));
if (q5AnsStart !== -1) {
  const nextItem = html.indexOf('<div class="faq-item', q5AnsStart);
  const q5AnsNew = `<div class="faq-item-answer">
                      <p>Day 12 is a built-in, movable high-altitude reserve day based at Khare (<span data-altitude-m="5045">5,045 m</span>). Mountain weather in the high Himalayas can be unpredictable: if high summit winds, heavy snowfall, or an individual climber's acclimatization pace makes a Day 11 summit attempt inadvisable, the expedition leader simply postpones the summit bid by 24 hours without cutting the trek short or causing stress. If the team summits successfully on Day 11 as scheduled, Day 12 is enjoyed as a well-earned rest day in Khare or used to make subsequent return stages back to Lukla more relaxed.</p>
                    </div>`;
  html = html.slice(0, q5AnsStart) + q5AnsNew + html.slice(nextItem);
  console.log('Updated FAQ Q5 answer');
}

// Update Q6: Permits & Royalties with DoT Sept 1 2025 table
const q6Marker = `<span class="faq-question-title">What permits are legally required to climb Mera Peak?</span>`;
const q6AnsStart = html.indexOf('<div class="faq-item-answer">', html.indexOf(q6Marker));
if (q6AnsStart !== -1) {
  const nextItem = html.indexOf('<div class="faq-item', q6AnsStart);
  const q6AnsNew = `<div class="faq-item-answer">
                      <p>Climbing Mera Peak legally requires several permits, all of which are 100% arranged and paid for by Namaste Hiking Trek:</p>
                      <ul style="margin: 8px 0 12px 20px; line-height: 1.6;">
                        <li><strong>Mera Peak Climbing Permit:</strong> Issued by the Nepal Mountaineering Association (NMA) / Department of Tourism (DoT). Under the revised government royalty schedule effective September 1, 2025, the royalty fees per foreign climber are <strong>USD $350 in Spring (Mar–May)</strong>, <strong>USD $175 in Autumn (Sep–Nov)</strong>, and <strong>USD $175 in Winter/Summer</strong>.</li>
                        <li><strong>Makalu-Barun National Park Entry Permit:</strong> USD $30 per climber.</li>
                        <li><strong>Sagarmatha National Park Entry Permit:</strong> USD $30 per climber.</li>
                        <li><strong>Pasang Lhamu Rural Municipality Entry Permit:</strong> NPR 2,000 (approx. USD $20).</li>
                        <li><strong>Expedition Garbage Deposit:</strong> Fully placed and managed by our Kathmandu logistics operations.</li>
                      </ul>
                    </div>`;
  html = html.slice(0, q6AnsStart) + q6AnsNew + html.slice(nextItem);
  console.log('Updated FAQ Q6 answer with DoT royalty schedule');
}

fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
console.log('Successfully updated FAQs and Altitude Profile section');

