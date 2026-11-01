const fs = require('fs');

const updatedHtml = fs.readFileSync('scratch/test_updated_page.html', 'utf8');

const answerSnippets = [
  "This package is 14 calendar days from Kathmandu arrival to final departure.",
  "Everest Base Camp is approximately 5,364 m. The itinerary uses approximately 5,545 m for Kala Patthar",
  "Base Camp does not provide the classic unobstructed summit panorama. Kala Patthar is the main viewpoint",
  "A well-prepared beginner may be suitable. You need endurance for consecutive mountain days",
  "The standard route is a non-technical trek. It does not include rope climbing",
  "The source package includes a licensed guide and applicable permits. NTB’s published revised route list",
  "Yes, the supplied article describes group and private guided arrangements. Confirm the price",
  "Spring and autumn are the main planning choices. Your preferred scenery",
  "The departure airport depends on the operating arrangements for your dates. The team should confirm",
  "The team reviews rebooking and itinerary options according to actual conditions. Extra nights",
  "Kathmandu hotels and mountain teahouses, normally twin-sharing. Facilities become more basic",
  "The standard source package includes breakfast, lunch and dinner during trekking. Vegetarian dishes",
  "Use treated water and a suitable purification method. Reusable bottles are practical.",
  "The Namche and Dingboche stops allow time to adapt and usually include a controlled hike",
  "Tell your guide immediately and do not continue ascending with symptoms. The response may include rest",
  "Check that your policy covers the actual planned trekking altitude, medical treatment and appropriate helicopter evacuation.",
  "No. Medical need, weather, daylight, aircraft availability and suitable landing conditions affect evacuation.",
  "Suitability is individual. Health, preparation, previous altitude experience",
  "The draft describes about 20 kg per porter and a common shared arrangement for two trekkers.",
  "Water, snacks, warm and waterproof layers, sun protection, headlamp, essential medication",
  "They may be available for additional fees at some lodges, but service and reliability vary.",
  "Prepare Nepali rupees in Kathmandu, with smaller notes and an emergency reserve.",
  "A separately arranged helicopter return may shorten the descent. Confirm the price",
  "Yes, the article describes those options, but mountain extensions need a revised itinerary",
  "The exact itinerary, group/private basis, guide and porter arrangement, permits, flights"
];

let allPassed = true;
answerSnippets.forEach((a, idx) => {
  if (!updatedHtml.includes(a)) {
    console.error(`FAILED: Answer #${idx + 1} snippet NOT found!`);
    allPassed = false;
  } else {
    console.log(`PASSED: Answer #${idx + 1} found.`);
  }
});

if (allPassed) {
  console.log('\nAll 25 answers verified present in the updated file!');
} else {
  process.exit(1);
}
