const fs = require('fs');

const updatedHtml = fs.readFileSync('scratch/test_updated_page.html', 'utf8');

const providedFaqs = [
  "How long is this Everest Base Camp Trek?",
  "How high are Everest Base Camp and Kala Patthar?",
  "Can I see Everest from Base Camp?",
  "Can a beginner do this trek?",
  "Do I need climbing experience?",
  "Is a guide included, and what about permits?",
  "Can I book a private trek or join as a solo traveler?",
  "When should I go?",
  "Will I fly from Kathmandu or Ramechhap?",
  "What happens if the Lukla flight is delayed?",
  "What accommodation should I expect?",
  "Are meals included, and can I eat vegetarian food?",
  "How do I manage drinking water?",
  "Why are there two acclimatization days?",
  "What if I develop altitude symptoms?",
  "What insurance should I arrange?",
  "Is helicopter evacuation guaranteed?",
  "Can children or older adults join?",
  "How much luggage can my porter carry?",
  "What should stay in my daypack?",
  "Will Wi-Fi, charging and hot showers be available?",
  "How should I handle cash and tipping?",
  "Can I return by helicopter?",
  "Can I add Gokyo, a peak climb or more time in Nepal?",
  "What should I confirm before booking?"
];

let allPassed = true;
providedFaqs.forEach((q, idx) => {
  const inHtml = updatedHtml.includes(q);
  if (!inHtml) {
    console.error(`FAILED: FAQ #${idx + 1} "${q}" NOT found in HTML!`);
    allPassed = false;
  } else {
    console.log(`PASSED: FAQ #${idx + 1} "${q}" found.`);
  }
});

if (allPassed) {
  console.log('\nAll 25 provided questions verified present in the updated file!');
} else {
  console.error('\nSome questions were missing!');
  process.exit(1);
}
