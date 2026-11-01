const fs = require('fs');

function analyzeFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  console.log('=== Analysis for:', filePath, '===');
  console.log('Length:', html.length);
  
  // Sub-nav links
  const navLinks = [...html.matchAll(/href="#(section-[^"]+)"/g)].map(m => m[1]);
  console.log('Nav links:', [...new Set(navLinks)]);
  
  // Section IDs
  const sectionIds = [...html.matchAll(/id="(section-[^"]+)"/g)].map(m => m[1]);
  console.log('Section IDs:', sectionIds);
  
  // Days
  const days = [...html.matchAll(/<span class="day-number">Day (\d+)<\/span>/g)].map(m => m[1]);
  console.log('Day numbers:', days);

  // Detail cards
  const detailHeaders = [...html.matchAll(/class="detail-accordion-btn"[^>]*>[\s\S]*?<span class="detail-btn-title">([^<]+)<\/span>/g)].map(m => m[1].trim());
  console.log('Detail accordion titles count:', detailHeaders.length);
  console.log('Detail accordion sample titles:', detailHeaders.slice(0, 5));

  // FAQs
  const faqQuestions = [...html.matchAll(/class="faq-question"[^>]*>[\s\S]*?<span>([^<]+)<\/span>/g)].map(m => m[1].trim());
  console.log('FAQ questions count:', faqQuestions.length);
  
  // Images used
  const images = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]).filter(src => src.includes('images/'));
  console.log('Images count:', images.length);
  console.log('Sample images:', images.slice(0, 5));
}

analyzeFile('trek/manaslu-circuit-trek/index.html');
console.log('\n----------------------------------------\n');
analyzeFile('trek/mardi-himal-trek/index.html');
