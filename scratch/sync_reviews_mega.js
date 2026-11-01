const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
let reviews = fs.readFileSync('reviews.html', 'utf8');

const megaStartTag = '<li class="nav-item-dropdown mega-nav-item">';
const megaEndTag = '<!-- Standard Tour Packages Dropdown -->';

const aboutStart = about.indexOf(megaStartTag);
const aboutEnd = about.indexOf(megaEndTag);
const aboutMega = about.substring(aboutStart, aboutEnd);

const reviewsStart = reviews.indexOf(megaStartTag);
const reviewsEnd = reviews.indexOf(megaEndTag);

if (reviewsStart !== -1 && reviewsEnd !== -1) {
  reviews = reviews.substring(0, reviewsStart) + aboutMega + reviews.substring(reviewsEnd);
  fs.writeFileSync('reviews.html', reviews, 'utf8');
  console.log('Successfully updated reviews.html with full mega menu and tab-everest!');
} else {
  console.log('Indices not found in reviews.html');
}
