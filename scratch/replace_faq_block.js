const fs = require('fs');

const filePath = 'trek/everest-base-camp-with-cho-la-pass-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<!-- Cho La Pass Specific FAQ 1 -->';
const endMarker = 'Can I see Everest from Base Camp?';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

console.log('startIndex:', startIndex, 'endIndex:', endIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

// Find the <div class="faq-item"> right before "Can I see Everest from Base Camp?"
const beforeEnd = content.lastIndexOf('<div class="faq-item">', endIndex);
console.log('beforeEnd:', beforeEnd);

const oldText = content.slice(startIndex, beforeEnd);
console.log('Old text length:', oldText.length);

const newText = `<!-- Cho La Pass Specific FAQ 1 -->
            <div class="faq-item">
              <div class="faq-item-question">
                <h3 class="faq-question-title">How difficult is the Everest Base Camp with Cho La Pass Trek compared to standard EBC?</h3>
                <span class="faq-toggle-circle">∨</span>
              </div>
              <div class="faq-item-answer">
                The Everest Base Camp with Cho La Pass Trek is graded <strong>Demanding High-Altitude Trek</strong>, making it noticeably more challenging than the standard 14-day EBC trek. In addition to trekking to Everest Base Camp (5,364m) and climbing Kala Patthar (5,545m), you will complete a 19-day expedition (15 walking days), traverse the glaciated pass of Cho La (5,420m), navigate the rocky lateral moraine of the Ngozumpa Glacier, and summit Gokyo Ri (5,357m). It requires solid cardiovascular fitness, leg endurance, and comfort with rocky scrambling and snow/ice slopes.
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 2 -->
            <div class="faq-item">
              <div class="faq-item-question">
                <h3 class="faq-question-title">Do I need technical mountaineering skills or crampons for Cho La Pass?</h3>
                <span class="faq-toggle-circle">∨</span>
              </div>
              <div class="faq-item-answer">
                No technical climbing or mountaineering experience is required. However, crossing Cho La Pass involves walking on snow, ice, and steep scree. We strongly recommend all trekkers carry <strong>lightweight microspikes or trekking crampons</strong> and gaiters. During early spring and late autumn, black ice forms on the glacier crossing, where microspikes provide crucial grip and confidence. Your guide will assess trail conditions and assist you every step of the way.
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 3 -->
            <div class="faq-item">
              <div class="faq-item-question">
                <h3 class="faq-question-title">Why does your itinerary do Everest Base Camp first before Cho La Pass and Gokyo?</h3>
                <span class="faq-toggle-circle">∨</span>
              </div>
              <div class="faq-item-answer">
                Our 19-day itinerary approaches Everest Base Camp first (via Namche, Tengboche, and Dingboche) because this sequence provides progressive altitude adaptation with two dedicated acclimatization days (Namche on Day 5 at 3,443m and Dingboche on Day 8 at 4,450m). By the time you reach Dzongla to cross Cho La Pass on Day 12, your body has already safely operated above 5,000m at Everest Base Camp (Day 10) and Kala Patthar (Day 11), substantially reducing altitude risks and optimizing pass safety.
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 4 -->
            <div class="faq-item">
              <div class="faq-item-question">
                <h3 class="faq-question-title">What happens if Cho La Pass is blocked by unexpected snow or blizzards?</h3>
                <span class="faq-toggle-circle">∨</span>
              </div>
              <div class="faq-item-answer">
                Safety is our absolute paramount priority. If severe blizzards or dangerous ice conditions make Cho La Pass impassable, our certified lead guide will execute an alternative route descending down through Pheriche and Pangboche, and looping up into the Gokyo Valley via Phortse. This ensures you still visit both Everest Base Camp and the Gokyo Lakes without taking unnecessary risks.
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 5 -->
            <div class="faq-item">
              <div class="faq-item-question">
                <h3 class="faq-question-title">What permits are required for the EBC with Cho La Pass Trek?</h3>
                <span class="faq-toggle-circle">∨</span>
              </div>
              <div class="faq-item-answer">
                The trek requires two official permits: the <strong>Sagarmatha National Park Entry Permit</strong> (NPR 3,000 / ~USD $25) and the <strong>Khumbu Pasang Lhamu Rural Municipality Permit</strong> (NPR 3,000 / ~USD $25). Both permits are fully managed, arranged, and paid for by Namaste Hiking Trek, with all costs included in your package price.
              </div>
            </div>

            <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How long is the Everest Base Camp with Cho La Pass Trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      This package is 19 calendar days from Kathmandu arrival to final departure. Days 3–17 feature 15 mountain walking days including two dedicated acclimatization days in Namche Bazaar (Day 5) and Dingboche (Day 8), an overnight stay at Dzongla (Day 11) before crossing Cho La Pass (Day 12), and exploring Gokyo Lakes and Gokyo Ri before descending via Dole.
                    </div>
                  </div>

                  `;

content = content.slice(0, startIndex) + newText + content.slice(beforeEnd);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced FAQ block!');
