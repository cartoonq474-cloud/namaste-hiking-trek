const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const classes = [
  'platform-subtabs',
  'platform-subtabs-bar',
  'platform-subtab-btn',
  'platform-summary-banner',
  'platform-cards-row',
  'platform-single-card',
  'platform-card-stars',
  'platform-card-headline',
  'platform-card-body',
  'platform-card-user',
  'platform-user-initials',
  'platform-user-info',
  'platform-reviews-content'
];

classes.forEach(c => {
  const exists = css.includes(`.${c}`);
  console.log(`.${c}: ${exists ? 'EXISTS' : 'MISSING'}`);
});
