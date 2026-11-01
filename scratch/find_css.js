const fs = require('fs');

const cssFiles = ['css/index.css', 'css/style.css'];
// search in css dir
const allCss = fs.readdirSync('css').filter(f => f.endsWith('.css'));

allCss.forEach(f => {
  const content = fs.readFileSync('css/' + f, 'utf8');
  if (content.includes('sidebar-booking-card')) {
    console.log(`Found sidebar-booking-card in css/${f}`);
  }
  if (content.includes('faq-layout-container')) {
    console.log(`Found faq-layout-container in css/${f}`);
  }
  if (content.includes('faq-item')) {
    console.log(`Found faq-item in css/${f}`);
  }
});
