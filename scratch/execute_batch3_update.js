const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Item 16: Booking a Trek: Independent vs. Guided Trek for Everest Base Camp
const item16Content = `\r\n` +
`                      <p>Distinguish travelling independently from trekking without a guide. You can book your own international travel, visit Nepal as a solo customer and choose a private guided itinerary. Nepal Tourism Board’s published route list includes EBC under its revised guide and TIMS provisions; confirm the applicable arrangements with the operator before departure.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Does “Guided EBC Trek” Actually Mean?</h5>\r\n` +
`                      <p>A guided Everest Base Camp Trek is not necessarily a bus full of tourists following someone holding a flag. A properly organized trek is much more personal than that. Your guide may be responsible for:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Leading the route</li>\r\n` +
`                        <li>Setting a sustainable pace</li>\r\n` +
`                        <li>Checking how the group is adapting</li>\r\n` +
`                        <li>Coordinating teahouse accommodation</li>\r\n` +
`                        <li>Communicating with local staff</li>\r\n` +
`                        <li>Managing daily logistics</li>\r\n` +
`                        <li>Helping with food and water arrangements</li>\r\n` +
`                        <li>Monitoring weather changes</li>\r\n` +
`                        <li>Handling route adjustments</li>\r\n` +
`                        <li>Assisting in emergencies</li>\r\n` +
`                        <li>Coordinating with the Kathmandu office</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and, importantly, helping you understand what you are actually seeing. A good guide does not simply know which direction to walk. They understand how the Khumbu works.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">When Is a Private EBC Trek Better?</h5>\r\n` +
`                      <p>Private trekking makes more sense when:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Your group has different fitness levels</li>\r\n` +
`                        <li>You want to walk slowly</li>\r\n` +
`                        <li>You want additional rest</li>\r\n` +
`                        <li>You have specific dietary requirements</li>\r\n` +
`                        <li>You want certain accommodation</li>\r\n` +
`                        <li>You have limited vacation dates</li>\r\n` +
`                        <li>You want a helicopter return</li>\r\n` +
`                        <li>You want to add Gokyo</li>\r\n` +
`                        <li>You simply do not enjoy group travel</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You pay more for that flexibility. But for some travelers, that flexibility is exactly what they are paying for.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is a Private Trek More Difficult?</h5>\r\n` +
`                      <p>No. The physical route is the same. In fact, a private trek can sometimes feel easier because you can maintain a pace that suits you. You are not trying to keep up with someone who walks faster. You are not waiting for someone who needs considerably more breaks. Your guide can spend more time responding to your questions, your concerns, your pace, and your interests. That can make a significant difference.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Does a Good EBC Guide Actually Do?</h5>\r\n` +
`                      <p>This is difficult to appreciate from Kathmandu. You may think: “There is a trail. Why do I need someone to show me the way?” On the classic route, navigation is usually not the biggest reason. The guide's value becomes more obvious in the decision-making.</p>\r\n` +
`                      <p>For example: You wake up in Dingboche. One trekker feels strong. Another has a headache. The weather has changed. A lodge has limited rooms. The next section is exposed. The guide has to make practical decisions. The route is still there. The judgment is what matters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">A Guide Sets the Pace</h5>\r\n` +
`                      <p>A good guide will usually encourage a slow, steady, sustainable walking rhythm. You may initially think: “We are walking too slowly.” Then an hour later you realize you still have plenty of energy. This becomes increasingly important above Namche, Dingboche, Lobuche, and especially around Gorak Shep and Kala Patthar. At altitude, speed is rarely your friend.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">A Guide Watches the Group</h5>\r\n` +
`                      <p>Your guide learns how people normally behave during the trek. They notice when someone who was talking constantly suddenly becomes quiet, or when somebody who normally walks steadily starts stopping repeatedly, or when a trekker's appetite, coordination, energy or breathing changes. That does not mean the guide is diagnosing medical conditions. It means they are paying attention. At high altitude, small observations can matter.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">A Guide Knows When Not to Push</h5>\r\n` +
`                      <p>This is one of the most important parts of responsible guiding. A poor guide may think: “The itinerary says Lobuche today, so we're going to Lobuche.” A good guide considers weather, trail condition, group condition, altitude, time, remaining daylight and then makes a decision. Sometimes the right answer is: “We slow down.” Sometimes: “We stop here.” Sometimes: “We need to descend.” That judgment is difficult to outsource to a GPS.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">A Guide Handles Accommodation Logistics</h5>\r\n` +
`                      <p>At the end of a six-hour walking day, you do not want to arrive in a village and spend another hour visiting lodges looking for a room. Your guide manages: Accommodation, Room allocation, Meal timing, Breakfast orders, Group logistics. The EBC route has a well-developed teahouse system, but peak season can still create pressure on room availability. This is where local relationships matter.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Trek EBC With Just a Porter?</h5>\r\n` +
`                      <p>For foreign trekkers, you should not plan on replacing the licensed guide with a porter. The current Nepal Tourism Board framework specifically requires a licensed trekking guide and agency-issued TIMS on EBC. A porter and guide are different roles. A porter primarily supports luggage transportation. A guide is responsible for trekking leadership, route management, group oversight, logistics and other guiding responsibilities.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why a Porter Is Not a Substitute for a Guide</h5>\r\n` +
`                      <p>A porter may know the mountain extremely well. They may have: Years of experience, Excellent route knowledge, High-altitude experience. But that does not automatically make them the licensed guide responsible for your trekking operation. The current legal and operational framework distinguishes the roles.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is a Group Guide Less Experienced Than a Private Guide?</h5>\r\n` +
`                      <p>Not necessarily. The quality of a guide depends on experience, training, licensing, communication, judgment, language, attitude, not whether the trek is private or group. A strong group guide can be excellent. A poor private guide can be poor. Private does not automatically mean better.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Red Flags When Choosing an EBC Operator</h5>\r\n` +
`                      <p>Be cautious if a company:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Promises guaranteed flights</li>\r\n` +
`                        <li>Promises 100% Base Camp success</li>\r\n` +
`                        <li>Cannot explain current guide requirements</li>\r\n` +
`                        <li>Avoids questions about insurance</li>\r\n` +
`                        <li>Does not explain porter weight</li>\r\n` +
`                        <li>Has unclear inclusions</li>\r\n` +
`                        <li>Offers an unrealistically cheap price</li>\r\n` +
`                        <li>Cannot identify your guide</li>\r\n` +
`                        <li>Treats altitude casually</li>\r\n` +
`                        <li>Tells you you can simply “push through” symptoms</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Those are more concerning than a website that happens to have an old design.</p>\r\n` +
`                      <p>A guide and a porter have different roles. A navigation app does not arrange accommodation, interpret group condition, manage transport disruptions or coordinate local help. Compare operators using the exact itinerary, acclimatization, qualifications, staff welfare, inclusions, emergency arrangements and written terms. Private and group pricing belong in the Cost and Booking section.</p>\r\n                    `;

// Item 17: Emergency & Evacuation Process
const item17Content = `\r\n` +
`                      <p>The first response to a problem is to report it promptly. Your guide assesses the situation, stops ascent when appropriate, and coordinates descent and medical help. Do not wait for severe symptoms before saying you feel unwell.</p>\r\n` +
`                      <p>Breathlessness at rest, confusion, loss of coordination or marked deterioration at altitude require urgent help. Worsening altitude illness can require immediate descent. Medication or oxygen, when appropriately used, does not turn an unsafe ascent into a safe one. Follow professional medical advice and the guide’s emergency arrangements.</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Report symptoms, injury or unusual deterioration to the guide immediately.</li>\r\n` +
`                        <li>Stop ascent and assess the trekker’s condition and available options.</li>\r\n` +
`                        <li>Arrange descent and medical assessment as appropriate; urgent care takes priority.</li>\r\n` +
`                        <li>Contact the local support team and insurer or assistance provider as soon as practical.</li>\r\n` +
`                        <li>Coordinate helicopter evacuation if medically indicated and operationally possible.</li>\r\n` +
`                        <li>Transfer to suitable medical care and keep the necessary treatment, transport and payment records.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The Himalayan Rescue Association operates a seasonal aid post at Pheriche. Medical availability elsewhere is limited and should not be assumed in every village. Weather, daylight, aircraft availability and a suitable landing location can delay or prevent evacuation. Having insurance does not guarantee an aircraft can reach you immediately.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Does Travel Insurance Need to Cover?</h5>\r\n` +
`                      <p>For the EBC trek, check that your policy explicitly covers:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>High-altitude trekking</li>\r\n` +
`                        <li>Your maximum trekking elevation</li>\r\n` +
`                        <li>Emergency helicopter evacuation</li>\r\n` +
`                        <li>Medical treatment</li>\r\n` +
`                        <li>Hospitalization</li>\r\n` +
`                        <li>Trip cancellation or interruption</li>\r\n` +
`                        <li>Flight disruption where applicable</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The policy wording matters more than the brand name. Do not simply buy the cheapest policy that says “Nepal.”</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why “6,000 Meters” Often Appears in EBC Insurance Requirements</h5>\r\n` +
`                      <p>The trek reaches: 5,545 m at Kala Patthar so insurers may set a maximum altitude above that level to provide a safety margin. Some trekking operators recommend policies covering emergency helicopter evacuation up to approximately 6,000 m. But the exact insurance requirement depends on the itinerary and insurer. Read the actual policy terms.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Does Travel Insurance Cover AMS?</h5>\r\n` +
`                      <p>It depends entirely on the policy. Some policies cover treatment and evacuation related to altitude illness. Others have exclusions for: High-altitude trekking, Failure to acclimatize, Pre-existing conditions, Unapproved activities. Do not assume. Get written confirmation when the wording is unclear.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens Before a Helicopter Rescue Is Authorized?</h5>\r\n` +
`                      <p>Depending on your insurer and emergency situation, your trekking company may need to coordinate: Medical information, Location, Symptoms, Guide assessment, Insurance policy details, Insurer approval. The more accessible these details are, the easier the process can be. Keep your: Insurance card, Policy number, Emergency hotline in your daypack.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens to the Rest of Your Group During an Evacuation?</h5>\r\n` +
`                      <p>This depends on: Severity, Who is accompanying the patient, Medical needs, Trekking itinerary. The guide or company may divide responsibilities. One person may accompany the sick trekker. Another staff member may continue coordinating the rest of the group. The goal is to avoid abandoning the wider group while ensuring the affected person gets appropriate care.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Does the Trekking Company Pay the Helicopter Bill?</h5>\r\n` +
`                      <p>It depends on the circumstances and your insurance arrangement. A commercial trekking company may coordinate the evacuation, but that does not automatically mean it financially absorbs the entire rescue cost. This is precisely why you need travel insurance. Emergency helicopter rescue can cost thousands of U.S. dollars, depending on the circumstances.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why You Should Never Treat Insurance as Optional</h5>\r\n` +
`                      <p>Imagine spending thousands of dollars planning a once-in-a-lifetime trip. Then trying to save a comparatively small amount by purchasing inadequate insurance. That makes little financial sense. A proper policy is not part of the adventure. It is what protects you when the adventure goes wrong.</p>\r\n` +
`                      <p>Share your insurance details, emergency contacts, relevant health information and previous altitude problems before trekking. Keep copies offline and accessible to the guide. Confirm the insurer’s altitude limit against the actual planned maximum elevation, and check how pre-existing conditions, medical necessity and evacuation authorization are handled. Do not wait for paperwork to report symptoms or seek urgent help.</p>\r\n                    `;

// Item 18: Money Exchange in Kathmandu
const item18Content = `\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Carry Nepali Rupees or Foreign Currency?</h5>\r\n` +
`                      <p>Carry Nepali rupees (NPR) for the trekking section. You may have no problem exchanging foreign currency in Kathmandu, but once you are in the Khumbu, everyday transactions are generally easiest in local currency. You may need cash for: Tea, Coffee, Water, Charging, Showers, Snacks, Wi-Fi, Tips, Small purchases. A practical strategy is to exchange or withdraw your trekking money in Kathmandu before departure.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why You Should Not Rely on ATMs in the Everest Region</h5>\r\n` +
`                      <p>There are ATMs in larger settlements, most notably Lukla and Namche Bazaar, but an ATM in a mountain village is not the same thing as an ATM in Kathmandu. Possible problems include: No electricity, Network problems, Machine maintenance, Cash shortages, Card compatibility issues, Transaction limits, Bank fees. You can find an ATM and still discover that your card does not work. That is why we tell trekkers: Use ATMs in the mountains as a backup, not as your primary financial plan.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Where Should You Get Cash Before the EBC Trek?</h5>\r\n` +
`                      <p>Kathmandu is the easiest place. You will find: ATMs, Banks, Currency exchange counters, Money exchange shops, particularly around tourist areas such as Thamel. Exchange enough for: The trek, Tips, Personal expenses, Unexpected delays. Then keep a reserve separately from the main wallet.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Exchange Money at Kathmandu Airport?</h5>\r\n` +
`                      <p>You can, but it is generally more practical to compare rates in the city. Airport exchange counters are convenient because they are immediately available after arrival, but convenience does not necessarily mean the best exchange rate. A better approach is: Exchange a small amount if you need immediate cash then use reputable exchange facilities or ATMs in Kathmandu for the rest. Never exchange your entire travel budget with an unfamiliar street-level operator simply because the displayed rate looks attractive.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Should You Carry Cash on the EBC Trek?</h5>\r\n` +
`                      <p>Do not keep all your money in one place. A sensible system is: Daily spending cash in your wallet, Main reserve in a secure money pouch, Emergency cash separately from both. Keep important cash and cards somewhere protected from: Rain, Snow, Sweat, Accidental washing. A waterproof pouch or dry bag is useful. The amount of cash you carry is small enough that protecting it from moisture is more important than carrying a complicated security system.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do You Need a Credit Card on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>A card can be useful in Kathmandu and sometimes in Namche Bazaar, but it should not be your primary payment method in the upper Khumbu. A card reader is only useful if: There is electricity, There is a working network, The business accepts cards, The transaction goes through. Those conditions are not guaranteed in a mountain village. Carry cash.</p>\r\n` +
`                      <p>Prepare most trekking cash in Kathmandu and keep a separate contingency reserve. Your package payment and your cash for personal trail expenses are different budgets. Plan for drinks, snacks, paid lodge services, tips and possible delay-related costs. Keep smaller rupee notes, split cash sensibly, and carry a backup payment method without relying on mountain card access.</p>\r\n                    `;

// Item 19: Cost and the Booking Process for EBC Trek
const item19Content = `\r\n` +
`                      <p><strong>Source-listed standard price: USD 1,459 per person for 2026/27.</strong> This is the price stated in the supplied draft for the standard guided 14-day itinerary. Confirm current availability, departure pricing, group or private basis, taxes and any supplements before publishing or paying.</p>\r\n` +
`                      <p>The price changes with group size, private services, accommodation upgrades, travel dates, extra nights, route extensions and optional helicopter transport. Compare written inclusions rather than the headline number alone. Includes and Excludes above contain the package checklists.</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Choose the departure date, group or private arrangement and number of travelers.</li>\r\n` +
`                        <li>Confirm the exact itinerary, acclimatization days, flight arrangements and service scope.</li>\r\n` +
`                        <li>Submit passport information, emergency contacts, insurance and arrival details through the agreed booking process.</li>\r\n` +
`                        <li>Review the total price, deposit, balance deadline, payment method, cancellation terms and delay policy.</li>\r\n` +
`                        <li>Pay the required booking amount and retain the receipt and written confirmation.</li>\r\n` +
`                        <li>Follow the preparation advice and attend the Kathmandu briefing and equipment check.</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Much Deposit Do You Need?</h5>\r\n` +
`                      <p>The exact deposit requirement depends on the booking terms and date of travel. Rather than giving one number that may change, your booking confirmation should state clearly: Total trip cost, Deposit amount, Balance due, Payment deadline, Cancellation terms, Refund conditions, Any seasonal or flight-related charges. Always keep the payment receipt and booking confirmation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Change Your Everest Base Camp Trek Dates?</h5>\r\n` +
`                      <p>Usually, this depends on: How early you request the change, Flight availability, Hotel availability, Season, Permit processing, Your original booking terms. Changing dates during a peak season can be more difficult because flights and teahouses are already heavily booked. Tell the trekking company as soon as your plans change. Do not wait until the day before departure if you already know your schedule has changed.</p>\r\n` +
`                      <p>Budget beyond the package. International airfare, visa, insurance, gear, tips, drinks and paid lodge services need their own budget. Keep a contingency amount for extra nights and disrupted transport. A helicopter upgrade needs a separate quotation. Confirm any single supplement and what happens if a group departure has only one booking.</p>\r\n` +
`                      <p style="font-size: 0.9rem; color: var(--color-neutral-600); font-style: italic; background: #F8FAFC; padding: 12px 16px; border-radius: 8px; border-left: 3px solid var(--color-primary-navy); margin-top: 15px;">[LIVE BOOKING DATA REQUIRED: approved current price; date availability; deposit and balance terms; supported payment methods; refund/cancellation rules; single supplement; and responsibility for delay-related costs. The source does not specify enough detail to invent these values.]</p>\r\n                    `;

// Item 20: Tipping Culture in Nepal
const item20Content = `\r\n` +
`                      <p>Tipping is customary in trekking services, but the amount is discretionary and should reflect service, trip duration, team responsibilities and group size. Ask for the operator’s current guidance before setting your cash budget.</p>\r\n` +
`                      <p>The source suggests guide and porter percentages, but those figures are not retained as universal rates: applying a percentage without clarifying whether it is per traveler, per group or for the whole crew can be misleading. Confirm the number of guides and porters and how a group tip is distributed.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Tip the Guide and Porter Separately?</h5>\r\n` +
`                      <p>Yes, generally. Their roles are different.</p>\r\n` +
`                      <p><strong>A guide:</strong> Leads, Manages, Explains, Coordinates, Monitors.</p>\r\n` +
`                      <p><strong>A porter:</strong> Carries, Supports, Moves equipment.</p>\r\n` +
`                      <p>A combined amount can be awkward unless the company gives you a clear distribution system. A good approach is to ask your guide: “How should we distribute the group tip among the trekking staff?”</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">When Should You Give the Tip?</h5>\r\n` +
`                      <p>Usually at the end of the trek. The final evening in Lukla or the closing stage of the trek is a natural time. It makes sense because by then you have experienced the entire service. You can judge: Reliability, Professionalism, Support, Communication, Trekking management and Overall effort.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Tip if You Were Unhappy?</h5>\r\n` +
`                      <p>A tip is supposed to be discretionary. If service was genuinely poor, it is reasonable to adjust the amount. If the problem was caused by: Weather, Flight cancellation and Trail closure, those are not necessarily reasons to punish the guide. Separate service quality from things outside the guide's control.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Tips for Drivers?</h5>\r\n` +
`                      <p>Drivers for private road transfers can be tipped at the end of their journey depending on length, service, luggage assistance and overall experience.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Tip Teahouse Staff?</h5>\r\n` +
`                      <p>It is not generally necessary to calculate a separate formal percentage for every person you encounter. You are already paying the teahouse for: Accommodation, Meals, Services. You can, however, show appreciation for exceptional service through: Small gratuities, Kindness, Respect, Direct thanks. Do not feel that you need to create a separate tipping system at every village.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Carry Nepali Rupees for Tipping</h5>\r\n` +
`                      <p>Tipping is best handled in Nepali rupees so field staff do not have to exchange foreign currency in mountain areas.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Don't Make the Porter Wait for a Tip</h5>\r\n` +
`                      <p>Tips should be given in a respectful manner at the appropriate end of the trek. Avoid turning the payment into a public negotiation. A simple: “Thank you for everything.” with the gratuity is enough.</p>\r\n` +
`                      <p>Tips normally come at the end of the trek, often in Lukla. Use Nepali rupees and give gratuities respectfully. Assess the crew’s service separately from weather or flight decisions outside their control.</p>\r\n                    `;

// Item 21: Important Notes for EBC Trek
const item21Content = `\r\n` +
`                      <p><strong>Before you pay:</strong> Check the confirmed itinerary, licensed guide, permits, flights, porter arrangement, acclimatization, Kala Patthar plan, emergency support, inclusions, exclusions and written cancellation terms. A departure described as guaranteed does not guarantee mountain weather, flight timings or successful completion.</p>\r\n` +
`                      <p><strong>Visa and passport:</strong> Check current Nepal entry requirements for your nationality with the Department of Immigration or an appropriate Nepal diplomatic mission. Ensure your passport has the required validity and that names match across flights, insurance and booking records. Do not assume every nationality qualifies for the same arrival process.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Make Sure Your Name Matches Across Documents</h5>\r\n` +
`                      <p>Check: Passport, Flight ticket, Trekking booking, Insurance. If your passport says: John Michael Smith but the flight booking says: John Smith, this may or may not be acceptable depending on the airline and booking system. Do not create an avoidable documentation issue. If something looks wrong, ask your operator immediately.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Keep Copies of Everything</h5>\r\n` +
`                      <p>Have digital and physical copies of: Passport, Visa, Insurance, Flight tickets, Booking confirmation, Emergency contacts, Important medical documentation. Save them offline. You should still be able to access essential information without internet.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Tell Your Trekking Company About Medical or Dietary Requirements</h5>\r\n` +
`                      <p>Before departure, disclose relevant requirements such as: Food allergies, Strict vegan diet, Diabetes management, Medication needs, Mobility limitations, Previous altitude illness. You don't have to disclose irrelevant personal information. But anything that could materially affect the trek should be discussed before the itinerary is finalized.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Don't Hide Your Previous Altitude Problems</h5>\r\n` +
`                      <p>If you have previously experienced: AMS, Severe headache, High-altitude intolerance, tell your doctor and trekking company. That information may influence: Itinerary, Acclimatization, Medication planning, Insurance. It is better to plan conservatively before the trek than improvise at 5,000 meters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Your Emergency Contact Back Home?</h5>\r\n` +
`                      <p>Give your trekking company a current emergency contact. That person should know: Your itinerary, Trekking company, Insurance provider, Expected return date. This becomes particularly useful if communication is interrupted.</p>\r\n` +
`                      <p><strong>Connectivity:</strong> A local SIM, lodge Wi-Fi or an Everest-region internet service may help in some places, but coverage, charging and service availability vary. Download your itinerary, documents and emergency contacts before leaving Kathmandu. Tell family that delayed replies do not automatically mean an emergency. Confirm how the guide communicates with the office; your phone is not the sole emergency plan.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Download Everything Before You Leave Kathmandu</h5>\r\n` +
`                      <p>This is one of the simplest pieces of practical advice. Before flying toward Lukla, download: Offline maps, Hotel confirmations, Flight information, Insurance documents, Emergency contacts, Trekking itinerary, Entertainment, Important emails, Travel documents. That way, you are not dependent on mountain internet for something you could have prepared earlier.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Managing Your Digital Photos During EBC</h5>\r\n` +
`                      <p>If photography matters to you, storage becomes a practical issue. You may produce thousands of images. Consider: Large memory cards, Multiple cards rather than one giant card, Phone cloud backup when connectivity allows, Laptop only if genuinely needed, Portable storage if you use it. Do not assume you can upload everything to the cloud from Gorak Shep. You may not have enough connection.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Carry a Laptop on the EBC Trek?</h5>\r\n` +
`                      <p>Usually not. Unless your work genuinely requires one, a laptop adds: Weight, Fragility, Charging requirements, Cold-related battery concerns, Another item to protect. A smartphone is enough for most travel needs. The best laptop on the EBC trek is usually the one you leave in Kathmandu.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Leave Luggage in Kathmandu?</h5>\r\n` +
`                      <p>Yes, this is one of the simplest ways to reduce what you carry. Many Kathmandu hotels and trekking companies can store luggage while you are in the mountains, depending on the arrangements.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should You Keep in Your Kathmandu Storage Bag?</h5>\r\n` +
`                      <p>Typical items include: Travel clothes, Extra footwear, Non-trekking electronics, Large toiletries, Souvenirs purchased before the trek, Documents not needed in the mountains, City-specific items. Label the bag clearly. Keep valuables with you rather than in generic hotel storage unless the arrangement is secure and appropriate.</p>\r\n` +
`                      <p><strong>Drones:</strong> Do not assume that owning or carrying a drone authorizes flight. Protected-area rules, aviation permissions, local restrictions and privacy all need checking. Unless an approved activity is specifically arranged, leave it out of the trekking plan.</p>\r\n` +
`                      <p><strong>Gear rental, laundry and personal habits:</strong> Test rented equipment before departure, especially critical warm layers and a sleeping bag. Laundry is limited and drying is difficult higher up. Avoid alcohol while acclimatizing, and discuss smoking or other health concerns honestly at the briefing. A reusable bottle, secure document copies and a charged headlamp are practical essentials.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should You Do One Week Before EBC?</h5>\r\n` +
`                      <p>Review: Flight, Weather, Insurance, Passport, Packing, Cash, Accommodation, Guide contact, Airport transfer, Emergency contact. Then stop overthinking. At this stage, more internet research often creates more anxiety than value. Your job is to arrive healthy, prepared, rested rather than trying to become an expert on every possible mountain scenario.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should You Do the Night Before the Lukla Flight?</h5>\r\n` +
`                      <p>Keep it simple: Charge your phone, Charge your power bank, Pack your daypack, Keep your passport accessible, Prepare warm layers, Confirm pickup time, Sleep. If you're traveling through Ramechhap, be prepared for an exceptionally early departure and follow the pickup instructions from your trekking company.</p>\r\n` +
`                      <p><strong>Flexibility:</strong> The guide may change start times, pacing, viewpoints, stops or the route when conditions require it. Keep 2–3 days after the scheduled return where your holiday allows. Written terms should identify who pays for extra accommodation, meals and replacement transport.</p>\r\n                    `;

const updates = [
  { itemNum: 16, content: item16Content },
  { itemNum: 17, content: item17Content },
  { itemNum: 18, content: item18Content },
  { itemNum: 19, content: item19Content },
  { itemNum: 20, content: item20Content },
  { itemNum: 21, content: item21Content },
];

for (const upd of updates) {
  const itemMarker = `<!-- Item ${upd.itemNum}:`;
  const itemIdx = html.indexOf(itemMarker);
  if (itemIdx === -1) {
    console.error(`Marker for Item ${upd.itemNum} not found!`);
    process.exit(1);
  }
  const innerStart = html.indexOf('<div class="detail-accordion-content-inner">', itemIdx) + '<div class="detail-accordion-content-inner">'.length;
  const innerEnd = html.indexOf('</div>\r\n                  </div>\r\n                </div>', innerStart);
  if (innerStart === -1 || innerEnd === -1) {
    console.error(`Inner bounds for Item ${upd.itemNum} not found!`);
    process.exit(1);
  }
  html = html.substring(0, innerStart) + upd.content + html.substring(innerEnd);
  console.log(`Updated Item ${upd.itemNum}`);
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully completed Batch 3 (Items 16-21) updates in', filePath);
