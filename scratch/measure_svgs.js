// Check computed dimensions of SVGs in browser
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://127.0.0.1:8085/trek/manaslu-circuit-trek/', { waitUntil: 'networkidle2' });

  // Open first day card
  const metrics = await page.evaluate(() => {
    // Click expand all or first card
    const firstHeader = document.querySelector('.itinerary-header');
    if (firstHeader) firstHeader.click();

    const allSvgs = Array.from(document.querySelectorAll('svg'));
    return allSvgs.map(s => {
      const rect = s.getBoundingClientRect();
      const parent = s.parentElement;
      return {
        tag: s.outerHTML.slice(0, 80),
        className: s.getAttribute('class') || '',
        parentClass: parent ? parent.className : '',
        parentTag: parent ? parent.tagName : '',
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }).filter(s => s.width > 30 || s.height > 30);
  });

  console.log('SVGs with computed width or height > 30px:');
  console.log(metrics);

  await browser.close();
})();
