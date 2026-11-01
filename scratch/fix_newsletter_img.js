const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /src="https:\/\/images\.unsplash\.com\/photo-1544735716-392fe2489ffa\?auto=format&fit=crop&w=600&q=80"[\s\n\r]*alt="Namaste Hiking Trek Newsletter Preview"/,
  'src="images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg" alt="Namaste Hiking Trek Newsletter Preview - High Camp Sunrise"'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Newsletter preview updated!');
