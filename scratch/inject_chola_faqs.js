const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'trek', 'everest-base-camp-with-cho-la-pass-trek', 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

const cholaFaqsHtml = `
            <!-- Cho La Pass Specific FAQ 1 -->
            <div class="faq-item">
              <div class="faq-question">
                <h3>How difficult is the Everest Base Camp with Cho La Pass Trek compared to standard EBC?</h3>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>The Everest Base Camp with Cho La Pass Trek is graded <strong>Strenuous / Alpine Grade 4</strong>, making it noticeably more challenging than the standard 14-day EBC trek. In addition to trekking to Everest Base Camp (5,364m) and climbing Kala Patthar (5,545m), you will spend 18 days on the trail, traverse the rugged glaciated pass of Cho La (5,420m), navigate the rocky lateral moraine of the Ngozumpa Glacier, and summit Gokyo Ri (5,357m). It requires solid physical fitness, endurance, and comfort with rocky scrambling and snow/ice slopes.</p>
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 2 -->
            <div class="faq-item">
              <div class="faq-question">
                <h3>Do I need technical mountaineering skills or crampons for Cho La Pass?</h3>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>No technical climbing or mountaineering experience is required. However, crossing Cho La Pass involves walking on snow, ice, and steep scree. We strongly recommend all trekkers carry <strong>lightweight microspikes or trekking crampons</strong> and gaiters. During early spring and late autumn, black ice forms on the glacier crossing, where microspikes provide crucial grip and confidence. Your guide will assess trail conditions and assist you every step of the way.</p>
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 3 -->
            <div class="faq-item">
              <div class="faq-question">
                <h3>Why does your itinerary do Everest Base Camp first before Cho La Pass and Gokyo?</h3>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>Our 18-day itinerary tackles Everest Base Camp first (via Namche, Tengboche, and Dingboche) because this route provides superior altitude acclimatization with two built-in acclimatization rest days (Namche at 3,440m and Dingboche at 4,410m). By the time you reach Dzongla to cross Cho La Pass on Day 11, your body is thoroughly acclimatized to 5,000+ meters, significantly reducing AMS risk and ensuring maximum safety during the pass crossing.</p>
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 4 -->
            <div class="faq-item">
              <div class="faq-question">
                <h3>What happens if Cho La Pass is blocked by unexpected snow or blizzards?</h3>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>Safety is our absolute paramount priority. If severe blizzards or dangerous ice conditions make Cho La Pass impassable, our certified lead guide will execute an alternative route descending down through Pheriche and Pangboche, and looping up into the Gokyo Valley via Phortse. This ensures you still visit both Everest Base Camp and the Gokyo Lakes without taking unnecessary risks.</p>
              </div>
            </div>

            <!-- Cho La Pass Specific FAQ 5 -->
            <div class="faq-item">
              <div class="faq-question">
                <h3>What permits are required for the EBC with Cho La Pass Trek?</h3>
                <span class="faq-icon">+</span>
              </div>
              <div class="faq-answer">
                <p>The trek requires two official permits: the <strong>Sagarmatha National Park Entry Permit</strong> (NPR 3,000 / ~USD $25) and the <strong>Khumbu Pasang Lhamu Rural Municipality Permit</strong> (NPR 3,000 / ~USD $25). Both permits are fully managed, arranged, and paid for by Namaste Hiking Trek, with all costs included in your package price.</p>
              </div>
            </div>
`;

// Insert after `<div class="faq-list">` or first `<div class="faq-item">`
if (content.includes('<div class="faq-accordion">')) {
  content = content.replace('<div class="faq-accordion">', '<div class="faq-accordion">\n' + cholaFaqsHtml);
} else if (content.includes('<div class="faq-list">')) {
  content = content.replace('<div class="faq-list">', '<div class="faq-list">\n' + cholaFaqsHtml);
} else if (content.includes('<div class="faqs-container">')) {
  content = content.replace('<div class="faqs-container">', '<div class="faqs-container">\n' + cholaFaqsHtml);
} else {
  // Find first faq-item
  content = content.replace('<div class="faq-item">', cholaFaqsHtml + '\n            <div class="faq-item">');
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Injected 5 tailored Cho La Pass FAQs!');
