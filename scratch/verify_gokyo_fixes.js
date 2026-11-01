const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
console.log('Includes draft:', html.includes('15-day draft'));
console.log('Includes duplicate table:', html.includes('Key Trip Facts: Official 15-Day Source Itinerary'));
console.log('Includes $1,250 in departure:', html.includes('$1,250</span> <span class="price-unit">pp</span>'));
console.log('Weather data-trek-key is gokyo:', html.includes('id="weather-chart-wrapper" data-trek-key="gokyo"'));
console.log('Map image is gokyo-route-map:', html.includes('gokyo-route-map.jpg'));
console.log('Mobile bar present:', html.includes('mobile-sticky-bottom-bar'));
