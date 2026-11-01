const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

console.log('index.css size:', css.length);
console.log('Has .faq-layout-container:', css.includes('.faq-layout-container'));
console.log('Has .faq-category-btn:', css.includes('.faq-category-btn'));
console.log('Has .faq-item:', css.includes('.faq-item'));
console.log('Has .sidebar-booking-card:', css.includes('.sidebar-booking-card'));
