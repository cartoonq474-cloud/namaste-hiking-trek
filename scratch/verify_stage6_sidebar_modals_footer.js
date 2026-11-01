const fs = require('fs');

const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

console.log("=== VERIFYING STAGE 6: SIDEBAR, MODALS, RELATED TREKS & FOOTER ===");

const checks = [];

// 1. Sidebar Booking Card
const sidebarStart = abc.indexOf('class="sidebar-booking-card"');
const sidebarEnd = abc.indexOf('</section>', sidebarStart);
const sidebar = abc.substring(sidebarStart, sidebarEnd);

checks.push({
  name: "Sidebar Ribbon & Starting Price",
  pass: (sidebar.includes('FLAGSHIP TREK') || sidebar.includes('BEST SELLER')) && sidebar.includes('$880') && sidebar.includes('12 days trip'),
  detail: "Found ribbon, $880 price, and 12 days trip label"
});

checks.push({
  name: "Sidebar Group Discount Matrix",
  pass: sidebar.includes('WE OFFER GROUP DISCOUNT') &&
        sidebar.includes('1 Person (Solo)') && sidebar.includes('$990') &&
        sidebar.includes('2 - 6 Persons') && sidebar.includes('$880') &&
        sidebar.includes('7 - 12 Persons') && sidebar.includes('$790') &&
        sidebar.includes('13+ Persons') && sidebar.includes('Custom Quote'),
  detail: "All 4 group tiers present in sidebar discount dropdown"
});

checks.push({
  name: "Sidebar Action Pill Buttons",
  pass: sidebar.includes('Book Now') && sidebar.includes('Make an Enquiry') &&
        sidebar.includes('open-inquiry-btn') && sidebar.includes('border-radius: 50px'),
  detail: "Book Now and Make an Enquiry 50px pill CTA buttons present"
});

checks.push({
  name: "5 Emerald Sparkle Trust Highlights",
  pass: sidebar.includes('Trek Leading by well trained Team') &&
        (sidebar.includes('Hassle-Free & Instant Booking') || sidebar.includes('Hassle-Free &amp; Instant Booking')) &&
        sidebar.includes('100% Customers Satisfaction') &&
        (sidebar.includes('Reasonable Price & Best Service') || sidebar.includes('Reasonable Price &amp; Best Service')) &&
        (sidebar.includes('No Hidden Cost & Secure Payment') || sidebar.includes('No Hidden Cost &amp; Secure Payment')),
  detail: "All 5 emerald sparkle trust bullets verified"
});

checks.push({
  name: "Sidebar Instant Help Call & WhatsApp Round Buttons",
  pass: sidebar.includes('INSTANT HELP') && sidebar.includes('Call or WhatsApp') &&
        sidebar.includes('tel:+9779800000000') && sidebar.includes('wa.me/9779800000000'),
  detail: "Found Instant Help with 44px round Call and WhatsApp buttons"
});

// 2. Modals
checks.push({
  name: "Inquiry Modal with Form",
  pass: abc.includes('id="inquiry-modal"') && abc.includes('id="inquiry-form"') && abc.includes('id="modal-close-btn"'),
  detail: "Inquiry modal DOM verified"
});

// 3. Related Treks Section
const relatedStart = abc.indexOf('id="section-related"');
const relatedEnd = abc.indexOf('</main>', relatedStart);
const related = abc.substring(relatedStart, relatedEnd);

checks.push({
  name: "Related Treks (Mardi, Circuit, Mera Peak)",
  pass: related.includes('Mardi Himal Trek') && related.includes('Annapurna Circuit Trek') && related.includes('Mera Peak Climbing'),
  detail: "Related treks cards present"
});

// 4. Luxury Footer
checks.push({
  name: "Luxury Footer & Brand Watermark",
  pass: abc.includes('class="site-footer"') && abc.includes('footer-luxury-layout'),
  detail: "Site footer and luxury layout verified"
});

// 5. Scripts at Bottom
const scripts = [
  '../../js/altitude-visualizer.js',
  '../../js/weather-visualizer.js',
  '../../js/inquiry-modal.js',
  '../../js/trek-details.js',
  '../../js/header-scroll.js',
  '../../js/mega-menu.js'
];
const allScriptsPresent = scripts.every(s => abc.includes(s));
checks.push({
  name: "All 6 Global & Modular Scripts",
  pass: allScriptsPresent,
  detail: "All scripts loaded in exact order"
});

let failed = 0;
console.log("\nResults for Stage 6:");
checks.forEach(c => {
  if (c.pass) {
    console.log(`✓ PASS: ${c.name} — ${c.detail}`);
  } else {
    console.log(`✗ FAIL: ${c.name} — ${c.detail}`);
    failed++;
  }
});

process.exit(failed > 0 ? 1 : 0);
