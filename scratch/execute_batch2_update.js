const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Item 10: Tell Me About the Flight to Lukla
const item10Content = `\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Does the Flight From Kathmandu to Lukla Feel Like?</h5>\r\n` +
`                      <p>The actual flight is short—roughly 30 minutes, according to Nepal Tourism Board. But the scenery changes rapidly. You leave Kathmandu's dense urban environment. The landscape below becomes:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Terraced hills</li>\r\n` +
`                        <li>River valleys</li>\r\n` +
`                        <li>Rural settlements</li>\r\n` +
`                        <li>Forest</li>\r\n` +
`                        <li>Ridges</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and gradually the bigger Himalayan terrain begins to dominate the horizon. It is one of those flights where you can feel the transition from ordinary Nepal to the Everest region happening underneath you.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is the Lukla Flight Very Turbulent?</h5>\r\n` +
`                      <p>It can be. Mountain air is not always smooth. You may experience:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Light turbulence</li>\r\n` +
`                        <li>Moderate movement</li>\r\n` +
`                        <li>Wind-related bumps</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>depending on the conditions of the day. Some flights are remarkably smooth. Others feel more active. The best thing you can do is exactly what you would do on any flight:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Keep your seat belt fastened.</li>\r\n` +
`                        <li>Follow the crew's instructions.</li>\r\n` +
`                        <li>Keep loose items secured.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>And remember that what feels uncomfortable to a passenger is not necessarily unusual from an aviation perspective.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Does the Plane Bank So Much Around the Mountains?</h5>\r\n` +
`                      <p>The aircraft is operating through mountainous terrain rather than over an open flat landscape. You may notice the aircraft: Turn, Bank, Descend, Level and then turn again.</p>\r\n` +
`                      <p>This is one reason nervous passengers can find the flight more dramatic than the actual time in the air suggests. Do not mistake the visibility of mountains outside the window for the aircraft being in danger. The crew is operating within an established aviation environment.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Which Side of the Plane Has the Best View?</h5>\r\n` +
`                      <p>There is no guaranteed “best side.” The view changes throughout the flight and depends on:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Flight direction</li>\r\n` +
`                        <li>Approach</li>\r\n` +
`                        <li>Cloud</li>\r\n` +
`                        <li>Seat assignment</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You can get excellent scenery from either side. Do not spend the entire flight worrying that you are on the “wrong side”. Look outside whenever you have a clear window. The landscape moves quickly.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Where Do Lukla Flights Depart From?</h5>\r\n` +
`                      <p>This is one of the most important current practical questions. The answer depends on the season, airport operations and current flight arrangements. For the classic EBC route, Lukla remains the destination airport. The departure airport on the Kathmandu side can be: Tribhuvan International Airport (Kathmandu) or, under seasonal operational arrangements: Ramechhap Airport / Manthali. CAAN currently lists both Ramechhap Airport and Tenzing-Hillary Airport among Nepal's operating domestic airports.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Are Some Lukla Flights Operated From Ramechhap?</h5>\r\n` +
`                      <p>Ramechhap/Manthali is used for certain seasonal operations to manage domestic-airport congestion and the practical realities of operating Lukla flights. The exact arrangement can change with:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Season</li>\r\n` +
`                        <li>Airport capacity</li>\r\n` +
`                        <li>Airline operations</li>\r\n` +
`                        <li>Regulatory decisions</li>\r\n` +
`                        <li>Traffic levels</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>So do not assume that the departure airport listed on an old itinerary will be the same one used for your trip. Your trekking company should confirm the actual departure arrangement for your dates.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Difference Between Kathmandu and Ramechhap for Lukla Flights?</h5>\r\n` +
`                      <p>The biggest difference is not the flight. It is how you get to the airport.</p>\r\n` +
`                      <p><strong>Kathmandu departure:</strong><br>You travel to the domestic airport within Kathmandu.</p>\r\n` +
`                      <p><strong>Ramechhap departure:</strong><br>You first travel by road from Kathmandu toward Manthali/Ramechhap, then take the short flight to Lukla. That creates a very different morning. A Ramechhap flight can mean:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Very early departure from Kathmandu</li>\r\n` +
`                        <li>Several hours of road travel</li>\r\n` +
`                        <li>Early-morning airport check-in</li>\r\n` +
`                        <li>Then the mountain flight</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The total travel experience is therefore substantially longer than simply taking a flight from Kathmandu.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Ramechhap Journey Like?</h5>\r\n` +
`                      <p>It is usually an overnight or very early-morning road operation during periods when Lukla flights are being handled through Ramechhap. The exact road time varies with:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Traffic</li>\r\n` +
`                        <li>Road conditions</li>\r\n` +
`                        <li>Departure point</li>\r\n` +
`                        <li>Weather</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A common planning expectation is several hours of travel. This is why travelers who read “30-minute flight to Lukla” sometimes feel confused when their actual day starts in the middle of the night. The flight is 20–30 minutes. The door-to-door journey can be much longer when Ramechhap is involved.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Do Flights to Lukla Leave So Early?</h5>\r\n` +
`                      <p>Mountain weather often becomes less predictable later in the day. Early operations are therefore useful because the aviation window can be better before:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Cloud builds</li>\r\n` +
`                        <li>Winds increase</li>\r\n` +
`                        <li>Visibility changes</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The exact operating schedule depends on the season and airline. But early departure is a normal part of the Lukla system. Do not interpret a 2–4 AM departure from Kathmandu as poor trip planning. It may simply be what is required to reach Ramechhap in time for the morning flight.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Does Everyone Have to Travel to Ramechhap?</h5>\r\n` +
`                      <p>No. It depends on the operating arrangement for your dates. Some periods continue to use Kathmandu for Lukla services, while seasonal arrangements can shift operations to Ramechhap. This is why we do not recommend giving trekkers one permanent rule such as: “All Lukla flights now leave from Ramechhap.” Airport arrangements can change. The current schedule for your travel date matters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Will You Know Which Airport You Are Flying From?</h5>\r\n` +
`                      <p>Your trekking company should tell you during the final pre-trek briefing or flight confirmation. You should know:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Departure airport</li>\r\n` +
`                        <li>Pickup time</li>\r\n` +
`                        <li>Transport arrangement</li>\r\n` +
`                        <li>Expected flight time</li>\r\n` +
`                        <li>Luggage allowance</li>\r\n` +
`                        <li>What to carry with you</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>If the airline or airport arrangement changes because of operational reasons, the local trekking team should update you.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if the Lukla Flight Is Delayed?</h5>\r\n` +
`                      <p>This is normal enough that you should have a plan for it. A delay can happen because of:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Cloud</li>\r\n` +
`                        <li>Wind</li>\r\n` +
`                        <li>Visibility</li>\r\n` +
`                        <li>Aircraft rotation</li>\r\n` +
`                        <li>Airport congestion</li>\r\n` +
`                        <li>Operational restrictions</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The most important point is: The airline decides whether the flight can operate. A trekking company cannot order a plane into weather that the aviation system considers unsuitable.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if the Flight Is Cancelled?</h5>\r\n` +
`                      <p>The response depends on the situation. Your trekking company may:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Move you to the next available flight</li>\r\n` +
`                        <li>Rearrange your accommodation</li>\r\n` +
`                        <li>Adjust the itinerary</li>\r\n` +
`                        <li>Rebook the road/flight arrangement</li>\r\n` +
`                        <li>Discuss a helicopter option where appropriate</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The exact solution depends on: Available aircraft, Weather, Seats, Your schedule, Airport operations. This is why local support matters so much. A cancellation is inconvenient. It becomes much worse when you are trying to solve it remotely from another country.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why You Should Not Book Your International Flight the Day After the Trek</h5>\r\n` +
`                      <p>Suppose the itinerary says: Day 13: Lukla → Kathmandu and you book your international flight: Day 14: Kathmandu → Home. On paper, it works. In practice, a single Lukla weather delay can break the entire plan.</p>\r\n` +
`                      <p>We recommend leaving approximately 2–3 contingency days after the planned Lukla return whenever your schedule allows. That may feel excessive before the trek. After a weather delay, it feels extremely sensible.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What If You Have a Very Tight Schedule?</h5>\r\n` +
`                      <p>There are several options:</p>\r\n` +
`                      <p><strong>Option 1: Add contingency days:</strong> Safest for a normal EBC itinerary.</p>\r\n` +
`                      <p><strong>Option 2: Helicopter return:</strong> Shortens the walking return but still depends on aviation/weather.</p>\r\n` +
`                      <p><strong>Option 3: Choose a different trek:</strong> Routes with easier road access may suit a highly time-constrained traveler better.</p>\r\n` +
`                      <p>The correct choice depends on whether: Reaching EBC or Protecting a fixed international schedule is your bigger priority.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Luggage Allowance on the Lukla Flight?</h5>\r\n` +
`                      <p>The exact allowance depends on the airline, aircraft and current operating policy. The commonly used allowance on these mountain flights has historically been around 15 kg total per passenger, with the breakdown between checked and hand luggage depending on the airline's current rules. Because these policies can change, you should confirm the current baggage allowance on your actual booking. Do not rely on an old web article. Your trekking operator should tell you the current limit.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if Your Bag Is Over the Limit?</h5>\r\n` +
`                      <p>You may be charged an excess baggage fee. More importantly, excess baggage may not always be accepted if the flight is already weight-restricted. This is one reason we recommend packing light.</p>\r\n` +
`                      <p>Your porter also has a separate practical weight limit. You therefore have two different luggage considerations: Airline weight and Porter weight. Do not assume that a bag legal for the porter is automatically legal for the aircraft.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should Go in Your Hand Carry?</h5>\r\n` +
`                      <p>Keep essential items with you:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Passport</li>\r\n` +
`                        <li>Money</li>\r\n` +
`                        <li>Medication</li>\r\n` +
`                        <li>Phone</li>\r\n` +
`                        <li>Camera</li>\r\n` +
`                        <li>Power bank</li>\r\n` +
`                        <li>Important documents</li>\r\n` +
`                        <li>One warm layer</li>\r\n` +
`                        <li>Essential toiletries</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>If a checked duffle is delayed or temporarily separated from you, you still need to function. This is especially important when your luggage is being handled between: Kathmandu, Ramechhap, Lukla, and the porter team.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens to Your Duffle After Landing?</h5>\r\n` +
`                      <p>On the classic trek, the porter team takes over the main trekking duffle. Your porter may move ahead toward the next teahouse. You keep your daypack. That means the moment you leave Lukla, you do not need to carry the same luggage that was checked onto the aircraft. This is why good packing organization makes the entire first day much easier.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do You Need to Wear Trekking Boots on the Flight?</h5>\r\n` +
`                      <p>You can. And many trekkers do. It is also sensible because: Your boots are valuable and You may need them immediately after landing. Never put your only pair of trekking boots in checked luggage. If the bag is delayed, you could have: No boots, No comfortable trekking and A very expensive problem. Wear or carry them in your hand luggage.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Best Strategy for Nervous Flyers?</h5>\r\n` +
`                      <p>If you are nervous about Lukla, preparation helps. Before the flight:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Eat something light</li>\r\n` +
`                        <li>Drink normally</li>\r\n` +
`                        <li>Keep your documents accessible</li>\r\n` +
`                        <li>Avoid excessive caffeine</li>\r\n` +
`                        <li>Tell the crew if you have a particular concern</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>During the flight:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Keep your seat belt fastened</li>\r\n` +
`                        <li>Look outside if that calms you</li>\r\n` +
`                        <li>Listen to music if permitted</li>\r\n` +
`                        <li>Breathe slowly</li>\r\n` +
`                        <li>Remember that the flight is short</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The anticipation is often worse than the flight itself.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Sit Near the Front or Back?</h5>\r\n` +
`                      <p>The exact seat assignment depends on the aircraft and airline. On a small mountain aircraft, there is no universal “best seat” for nervous passengers. Some prefer: Near the front because it feels more stable to them. Others want: A window seat for the scenery. Choose what helps you remain comfortable.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Take Motion-Sickness Medication?</h5>\r\n` +
`                      <p>That depends on the individual. If you are prone to motion sickness, discuss appropriate medication with your healthcare provider before traveling. Do not take an unfamiliar medicine for the first time on the morning of the Lukla flight. You are already dealing with: Early wake-up, Travel fatigue, Altitude. You do not need an unexpected medication reaction.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What If You Are Afraid of Heights?</h5>\r\n` +
`                      <p>You may find the Lukla flight visually intense. That does not mean you cannot do the trek. Once you are on the ground, the trail is a different experience. If heights are a significant concern, discuss it with your guide. You will encounter suspension bridges, steep slopes and mountain paths during the trek, but most of the standard route is straightforward trekking rather than exposed technical climbing.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Fly to Lukla During Monsoon?</h5>\r\n` +
`                      <p>Flights can operate, but weather disruption becomes more likely. The main issue is visibility and weather conditions. During monsoon, you should be especially prepared for: Delays, Cancellations, Extended airport waiting and itinerary changes. This is one of the reasons monsoon is not the first choice for travelers who need highly predictable logistics.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Winter Flights?</h5>\r\n` +
`                      <p>Winter flights can operate. The main issues are: Cold, Morning conditions, Visibility, Snow/ice, Weather variability. Clear winter days can provide excellent flight conditions. But a winter traveler needs to remain comfortable with the possibility of delays caused by mountain weather.</p>\r\n` +
`                      <p>Confirm the departure airport, transfer pickup, airline, checked and hand-luggage allowances, and return transport before the flight day. Keep medication, documents, water, warm layers and valuables accessible. Baggage allowances vary by airline and operating arrangement; a porter allowance does not override the airline limit.</p>\r\n` +
`                      <p>Allow 2–3 contingency days after your scheduled Lukla return where possible. A helicopter can sometimes provide an alternative when conditions permit, but it is not a guaranteed solution to bad weather. Ask how extra nights, meals, rebooking and optional helicopter costs are handled in your booking terms.</p>\r\n                    `;

// Item 11: Everest Base Camp Trek for Different Age Groups
const item11Content = `\r\n` +
`                      <p>There is no useful answer that simply says “everyone can do it.” There are children who can complete EBC and extremely fit adults who struggle with altitude. There are trekkers in their 60s who move steadily and finish comfortably, while younger travelers sometimes have to descend because their bodies do not acclimatize well.</p>\r\n` +
`                      <p>What matters most is the combination of:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Physical preparation</li>\r\n` +
`                        <li>Pacing</li>\r\n` +
`                        <li>Altitude acclimatization</li>\r\n` +
`                        <li>Previous hiking experience</li>\r\n` +
`                        <li>Overall health</li>\r\n` +
`                        <li>Mental resilience</li>\r\n` +
`                        <li>Itinerary design</li>\r\n` +
`                        <li>Support from the trekking team</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The important distinction is that Everest Base Camp is a trekking journey, not an Everest climbing expedition. You do not need technical mountaineering skills to reach Base Camp, but you do need to be prepared for long walking days and very high altitude.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Who Can Do the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>The standard EBC route can be completed by a wide range of trekkers, including:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>First-time high-altitude trekkers</li>\r\n` +
`                        <li>Experienced hikers</li>\r\n` +
`                        <li>Solo travelers joining a guided trek</li>\r\n` +
`                        <li>Couples</li>\r\n` +
`                        <li>Friends</li>\r\n` +
`                        <li>Families with well-prepared older children</li>\r\n` +
`                        <li>Trekkers in their 50s and 60s</li>\r\n` +
`                        <li>Some well-prepared trekkers in their 70s</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>But age alone is a poor way of deciding whether someone is ready. A better question is: Can this person consistently walk for several hours over uneven, mountainous terrain while gradually adapting to elevations above 4,000 meters? If the answer is yes—and the itinerary is appropriately paced—the trek may be realistic. If not, there may be better ways to experience the Everest region.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can Children Do the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>Yes, some children can. But age should never be the only criterion. A child needs to be able to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Walk for several hours</li>\r\n` +
`                        <li>Follow instructions</li>\r\n` +
`                        <li>Manage cold</li>\r\n` +
`                        <li>Drink and eat regularly</li>\r\n` +
`                        <li>Communicate discomfort</li>\r\n` +
`                        <li>Handle basic teahouse conditions</li>\r\n` +
`                        <li>Remain patient during long walking sections</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>In practice, children who are naturally active and enjoy hiking often adapt better than children who dislike prolonged walking.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Age Is Appropriate for Children?</h5>\r\n` +
`                      <p>There is no universally correct minimum age for EBC. Some trekking companies have successfully taken children below the often-quoted 10–12-year range, while other operators prefer older children. The issue is not simply whether a child can physically walk. The bigger questions are:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>How do they respond to altitude?</li>\r\n` +
`                        <li>Can they communicate symptoms clearly?</li>\r\n` +
`                        <li>Can they tolerate a multi-week routine?</li>\r\n` +
`                        <li>Will they keep drinking and eating?</li>\r\n` +
`                        <li>Can they handle cold nights and simple accommodation?</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Children also have less control over their environment than adults. That means the adults responsible for them need to be more attentive to early signs of fatigue or illness.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">EBC With Children: What Changes?</h5>\r\n` +
`                      <p>A family itinerary should be approached differently from an adult-only group. You may want:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>More flexible daily pacing</li>\r\n` +
`                        <li>Extra rest time</li>\r\n` +
`                        <li>Shorter optional excursions</li>\r\n` +
`                        <li>Familiar snacks</li>\r\n` +
`                        <li>Comfort items</li>\r\n` +
`                        <li>Extra warm clothing</li>\r\n` +
`                        <li>More private room requests where possible</li>\r\n` +
`                        <li>A guide experienced with family groups</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The objective is not to make the child “keep up.” It is to make the overall family group move at a sustainable pace.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should Parents Be Especially Careful About?</h5>\r\n` +
`                      <p>Children may not always describe altitude-related symptoms in the same way adults do. A child may simply say: “I don't feel good.” or: “I don't want to walk.” That should not automatically be dismissed as tiredness or homesickness. Parents and guides need to look at the overall picture: Appetite, Energy, Headache, Nausea, Mood, Coordination, Sleep, Breathing. Any concerning change should be discussed immediately with the guide. The goal is not to prove that the child can continue. The goal is to keep the child safe.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Teenagers?</h5>\r\n` +
`                      <p>Teenagers often do very well on the EBC trek. They may have: Good stamina, Strong recovery, Natural curiosity, High motivation. The biggest challenge can sometimes be psychological rather than physical. Long days without reliable internet, cold mornings and basic teahouse accommodation may be more difficult for a teenager accustomed to constant connectivity than the actual walking. That is why parents should explain beforehand what the trek will really be like.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can Seniors Do the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>Yes. Age alone does not disqualify someone from the EBC trek. We have seen older trekkers progress steadily because they: Prepared properly, Walked at their own pace, Used a porter, Took acclimatization seriously, Listened to their guide, Did not compare themselves with younger trekkers. Some people in their 60s and beyond are physically better prepared for EBC than people half their age. The important factor is not how old the passport says you are. It is whether your body and training are appropriate for the route.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should Seniors Get Medical Clearance Before EBC?</h5>\r\n` +
`                      <p>A medical consultation before undertaking a high-altitude trek is a sensible idea for older travelers, especially when there are existing medical conditions or concerns. Discuss: High-altitude trekking, Maximum elevation, Long walking days, Medication, Previous altitude experiences with your healthcare professional. Do not let another trekker's experience become your medical advice.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Should Older Trekkers Prepare?</h5>\r\n` +
`                      <p>Seniors should particularly focus on: Aerobic endurance, Leg strength, Balance, Mobility, Walking practice, Recovery. Stair climbing and long hill walks are useful because they reproduce the demands of the actual trek. It is also worth practicing with the footwear and poles you will use in Nepal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can Someone Who Is 70+ Do the EBC Trek?</h5>\r\n` +
`                      <p>It is possible for some people. But this is exactly where a generic age-based answer becomes misleading. A healthy, active 70-year-old with good preparation may be more capable than an inactive 40-year-old. For an older trekker, however, the pre-trip preparation should be more deliberate. Consider: Medical consultation, Structured fitness training, Long practice hikes, Balance work, Leg-strength training, Appropriate insurance, Private or small-group support, More flexible itinerary planning. The objective is not to prove something about age. It is to enjoy the trek safely.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can a Teenager and Grandparent Trek EBC Together?</h5>\r\n` +
`                      <p>Potentially, yes. This can actually be one of the most rewarding family experiences. But the itinerary should be designed around: The slower participant, The altitude response of every person, Enough rest, Good communication, A flexible guide. The fastest family member should never become the unofficial guide simply because they are physically strongest. That is what the professional guide is there for.</p>\r\n` +
`                      <p>Solo travelers and beginners. You can travel as a solo customer and book either a private trek or a suitable group departure. A group can provide company; a private itinerary can offer more room to match your pace. Beginners should assess walking readiness and prepare for consecutive mountain days. Neither previous hiking experience nor youth provides immunity from altitude illness.</p>\r\n` +
`                      <p>For families and older travelers, discuss the actual itinerary, altitude experience, health, room arrangements, porter support and scope for extra days before booking. A shorter Everest View trek may be a better match where the full Base Camp journey is unsuitable. The decision should be individual, rather than based on a universal minimum or maximum age.</p>\r\n                    `;

// Item 12: Extend your trip after Everest Base Camp
const item12Content = `\r\n` +
`                      <p>There are two different ways to extend the experience: redesign the mountain itinerary before departure, or add time elsewhere in Nepal after returning to Kathmandu.</p>\r\n` +
`\r\n` +
`                      <div class="guide-data-table-wrap" style="margin: 16px 0 24px 0;">\r\n` +
`                        <table class="guide-data-table">\r\n` +
`                          <thead>\r\n` +
`                            <tr>\r\n` +
`                              <th style="min-width: 180px;">Extension</th>\r\n` +
`                              <th>How to plan it</th>\r\n` +
`                            </tr>\r\n` +
`                          </thead>\r\n` +
`                          <tbody>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Gokyo Lakes or Three Passes</strong></td>\r\n` +
`                              <td>Integrate into a revised mountain itinerary with enough time and acclimatization</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Island Peak or Lobuche Peak</strong></td>\r\n` +
`                              <td>Arrange a separate climbing objective, permits, equipment and qualified support</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Kathmandu sightseeing</strong></td>\r\n` +
`                              <td>Add time for the valley’s heritage sites before or after the trek</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Pokhara</strong></td>\r\n` +
`                              <td>Plan a separate stay for lakeside time and onward travel</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Chitwan or Bardia</strong></td>\r\n` +
`                              <td>Arrange a separate wildlife-focused trip and transfers</td>\r\n` +
`                            </tr>\r\n` +
`                          </tbody>\r\n` +
`                        </table>\r\n` +
`                      </div>\r\n` +
`\r\n` +
`                      <p>Keep your Lukla contingency buffer before fixed onward travel. A mountain extension is not a casual add-on to this exact 14-day schedule: it changes the route, logistics and, for peak climbs, the nature of the activity.</p>\r\n                    `;

// Item 13: Porter Weight Limit and Information for Trekking to Everest Base Camp
const item13Content = `\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Much Weight Can a Porter Carry?</h5>\r\n` +
`                      <p>For our standard trekking arrangement, we work with a maximum practical porter load of around 20 kg per porter. The exact porter-to-client arrangement depends on the group structure and the service package.</p>\r\n` +
`                      <p>The important principle is simple: Do not pack until you reach the maximum just because the maximum exists. A 20 kg limit is not a target. It is a ceiling. The less unnecessary weight you bring, the easier the job is for the person carrying it.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Porter Weight Limits Matter</h5>\r\n` +
`                      <p>It can be easy to forget how demanding porter work is. A porter may:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Carry your luggage uphill</li>\r\n` +
`                        <li>Walk several hours</li>\r\n` +
`                        <li>Move over uneven terrain</li>\r\n` +
`                        <li>Climb thousands of vertical meters over the course of a trek</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and do this repeatedly for days. The fact that porters are extremely accustomed to mountain walking does not mean they should be given unlimited loads. Responsible operators establish reasonable weight limits and monitor them. Responsible trekkers stay within those limits.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Does the Porter-to-Trekker Ratio Work?</h5>\r\n` +
`                      <p>The ratio depends on the trekking package. A common arrangement is approximately: 1 porter for 2 trekkers which allows the porter to carry the combined main luggage within the agreed weight limit.</p>\r\n` +
`                      <p>For example: If two trekkers each have around 10 kg of main luggage, the combined load is approximately 20 kg. The exact structure can vary according to: Group size, Number of trekkers, Package, Porter availability, Route. Your booking confirmation should state the porter arrangement.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Does Every Trekker Get an Individual Porter?</h5>\r\n` +
`                      <p>Not necessarily. On a shared porter system, one porter may carry the combined luggage of two trekkers. This is normal. What matters is that the combined load remains within the operator's agreed weight limit.</p>\r\n` +
`                      <p>For larger private groups, the exact porter allocation is determined according to: Number of travelers, Total luggage, Route, Service level.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Does the Porter Carry?</h5>\r\n` +
`                      <p>Your porter generally carries the main duffle, not every single thing you own. That means the bag should contain items you do not need while walking. A sensible duffle might include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Base layers</li>\r\n` +
`                        <li>Mid-layers</li>\r\n` +
`                        <li>Down jacket</li>\r\n` +
`                        <li>Spare trekking trousers</li>\r\n` +
`                        <li>Underwear</li>\r\n` +
`                        <li>Socks</li>\r\n` +
`                        <li>Sleeping bag</li>\r\n` +
`                        <li>Toiletries</li>\r\n` +
`                        <li>Evening clothing</li>\r\n` +
`                        <li>Extra gloves</li>\r\n` +
`                        <li>Other personal equipment</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Meanwhile, your daypack should contain the things you may need between breakfast and the next teahouse.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should Never Go in the Porter's Duffle?</h5>\r\n` +
`                      <p>Keep important and valuable items with you. That includes:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Passport</li>\r\n` +
`                        <li>Money</li>\r\n` +
`                        <li>Bank cards</li>\r\n` +
`                        <li>Phone</li>\r\n` +
`                        <li>Camera</li>\r\n` +
`                        <li>Medication</li>\r\n` +
`                        <li>Important documents</li>\r\n` +
`                        <li>Essential electronics</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You should also keep anything you absolutely cannot function without in your daypack. For example: If your main luggage goes ahead and you discover you need your medication at lunch, you do not want to discover that it is six kilometers away in a duffle.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Should You Carry in Your Daypack?</h5>\r\n` +
`                      <p>Your daypack should remain relatively light. A practical EBC daypack normally contains:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>1–2 water bottles or a hydration system</li>\r\n` +
`                        <li>Warm layer</li>\r\n` +
`                        <li>Rain shell</li>\r\n` +
`                        <li>Gloves</li>\r\n` +
`                        <li>Hat</li>\r\n` +
`                        <li>Sunglasses</li>\r\n` +
`                        <li>Sunscreen</li>\r\n` +
`                        <li>Snacks</li>\r\n` +
`                        <li>Phone</li>\r\n` +
`                        <li>Camera</li>\r\n` +
`                        <li>Power bank</li>\r\n` +
`                        <li>Personal medication</li>\r\n` +
`                        <li>Small first-aid items</li>\r\n` +
`                        <li>Toilet paper</li>\r\n` +
`                        <li>Hand sanitizer</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You should be able to comfortably carry it for five to seven hours.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why a Duffel Bag Works Better Than a Hard Suitcase</h5>\r\n` +
`                      <p>A trekking duffel is practical because it is: Flexible, Light, Easy to compress, Easy to carry, Easier for a porter to manage. A hard suitcase is designed for airport luggage systems. It is not designed for: Narrow mountain paths, Porter loads, Teahouse rooms, Irregular storage. For a classic EBC trek, a soft trekking duffel is the better choice.</p>\r\n` +
`                      <p>When comparing trekking operators, do not just ask: “How much does the trek cost?” Ask: “How are your porters insured and supported?” That question tells you a lot about the operator.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do Porters Get Accommodation?</h5>\r\n` +
`                      <p>Responsible trekking operators ensure porters have appropriate lodging and shelter throughout the route. Do not assume or accept operators who leave field staff unprovided for.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Do Porters Eat?</h5>\r\n` +
`                      <p>Porters need substantial food because they are performing physically demanding work. Their meals may be arranged through: Teahouses, Group kitchens, Local lodges or other operational arrangements. They may eat dal bhat and other local dishes similar to what guides and trekkers eat. Good nutrition is not a luxury for field staff. It is part of their ability to perform the job safely.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do Porters Walk the Same Route as Trekkers?</h5>\r\n` +
`                      <p>Generally, yes, but they do not always move at exactly the same pace or take exactly the same timing. They may: Start earlier, Use efficient sections, Arrive first, Wait at the lodge. Their familiarity with the route means they can move quickly. That does not mean trekkers should try to compete with them. A porter may have walked the route dozens or hundreds of times. You are walking it for the first time.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Try to Keep Up With Your Porter?</h5>\r\n` +
`                      <p>No. Your porter is not your pace benchmark. This is one of the quickest ways to ruin a trekking day. Walk according to: Your breathing, Your fitness, Your altitude response, Your guide's pace. Trying to follow a porter who has spent years working on the route is not a useful fitness test.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if Your Bag Is Overweight?</h5>\r\n` +
`                      <p>Your trekking company may need to: Redistribute luggage, Add another porter, Remove unnecessary items, Charge an additional porter fee depending on the arrangement. This is precisely why your bag should be weighed before departure. It is much easier to fix the problem in Kathmandu than at Lukla.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Your Airline Weight Limit Is Separate From the Porter Limit</h5>\r\n` +
`                      <p>This causes confusion for first-time trekkers. You have: Flight baggage limit determined by the airline and aircraft, and Porter load limit determined by your trekking package and responsible porter policy. These are different. Your duffle may be acceptable under the porter system but still exceed the airline baggage allowance. Or you may be under the airline allowance but still exceed your operator's agreed porter limit. Pack with both systems in mind.</p>\r\n` +
`                      <p>Confirm the allowance before packing. The source describes an approximately 20 kg practical porter load and a common ratio of one porter for two trekkers. That is not a universal allowance or an invitation to fill every bag to the limit. Confirm whether the load includes the porter’s own equipment and what your personal duffle allowance is. The crew must have suitable clothing, footwear, food, accommodation, insurance and support if unwell.</p>\r\n` +
`                      <p>Use a soft duffle with waterproof protection and secure identification. Keep items needed during the walking day and all essential valuables with you. If your luggage is overweight, agree an appropriate solution before departure rather than transferring additional weight to a porter on the trail. See Tipping Culture for gratuities.</p>\r\n                    `;

// Item 14: Upgrade to Helicopters for Everest Base Camp Trek
const item14Content = `\r\n` +
`                      <p>A helicopter-return itinerary keeps the walking approach through Namche, Dingboche, Lobuche and Gorak Shep, with Base Camp and Kala Patthar as the objectives. Instead of walking the full descent to Lukla, you use a separately arranged flight from an approved collection point when conditions permit.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Does a Helicopter Return Mean You Skip the Hard Part?</h5>\r\n` +
`                      <p>Not really. You still experience the demanding ascent. You still walk through:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Namche</li>\r\n` +
`                        <li>Tengboche</li>\r\n` +
`                        <li>Dingboche</li>\r\n` +
`                        <li>Lobuche</li>\r\n` +
`                        <li>Gorak Shep</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You still have to acclimatize. You still walk to Everest Base Camp. You still climb Kala Patthar if your itinerary includes it. The helicopter mainly removes the long descent. And that is significant, but it is not the same as replacing the entire trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Many Days Can a Helicopter Return Save?</h5>\r\n` +
`                      <p>A classic EBC itinerary usually allows roughly two weeks for: Kathmandu logistics, Lukla flights, Acclimatization, The ascent, Base Camp, Kala Patthar, The walking return. A helicopter-return itinerary can often reduce the overall duration to roughly 10–12 days, depending on the exact itinerary and flight arrangements. The exact number should be treated as itinerary-specific rather than a fixed rule. Some programs are structured differently. Some include additional acclimatization. Some fly from the upper Khumbu sooner.</p>\r\n` +
`                      <p>The important principle is: The helicopter reduces the return walking days, not the need for sensible acclimatization.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Remove Acclimatization Days Because You Have a Helicopter?</h5>\r\n` +
`                      <p>No. This is one of the biggest mistakes in designing a short EBC itinerary. A helicopter can make you travel faster. It cannot make your body acclimatize faster. Your body still needs time to adapt to: Namche, Dingboche, Higher elevations and eventually: Gorak Shep.</p>\r\n` +
`                      <p>The current Nepal Tourism Board specifically emphasizes the need for proper acclimatization in the Everest region because altitude gains are rapid. So if someone says: “We can do EBC in seven days because we use helicopters.” look closely at the itinerary. A shorter calendar is not automatically a better trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can a Helicopter Pick You Up From Gorak Shep?</h5>\r\n` +
`                      <p>Helicopter operations around Gorak Shep are commonly used for: Tourism flights, Trekking transfers, Emergency evacuation depending on the circumstances. But pickup depends on: Weather, Visibility, Aircraft, Helipad/landing conditions, Traffic and other operational factors. Your trekking company should never treat a helicopter pickup as a guaranteed appointment like a taxi.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Does a Helicopter Return Work After Kala Patthar?</h5>\r\n` +
`                      <p>The exact sequence depends on the itinerary. A typical plan could look like:</p>\r\n` +
`                      <p>Early or afternoon ascent of Kala Patthar → Return to Gorak Shep → Breakfast/lunch/rest depending on timing → Helicopter arrival → Flight toward the next destination.</p>\r\n` +
`                      <p>The helicopter schedule may be adjusted according to the actual weather. This is why the itinerary needs flexibility even when the helicopter is pre-booked.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Trek to Everest Base Camp and Fly Directly to Kathmandu?</h5>\r\n` +
`                      <p>Sometimes, depending on: Aircraft, Weather, Weight, Passenger load, Operational conditions and the exact helicopter route. Some itineraries route through Lukla before connecting onward. Others may operate differently. Do not assume every helicopter is a direct Gorak Shep–Kathmandu service. Your operator should confirm the actual route for your booking.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Helicopters May Need to Route Through Lukla</h5>\r\n` +
`                      <p>Lukla is an important aviation hub in the Everest region. Depending on the flight and aircraft, the helicopter may use Lukla for: Refueling, Passenger management, Operational coordination or Route planning. This can affect the total travel time. Again, the exact arrangement depends on the operator and current operating conditions.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if the Helicopter Cannot Fly?</h5>\r\n` +
`                      <p>This is the question every helicopter traveler should ask before booking. The answer should be written into the operational plan. Depending on where you are and why the flight cannot operate, the alternative may be: Wait for improved weather, Continue trekking, Stay another night, Use the next available flight, Rearrange the itinerary. The correct fallback depends on the situation. A helicopter is a time-saving option. It should not be treated as an escape from mountain weather.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Can You Carry on the Helicopter?</h5>\r\n` +
`                      <p>Helicopters have strict payload limitations. Your allowance may depend on: Aircraft type, Number of passengers, Altitude, Fuel requirement, Weather and Flight route. This means your normal trekking luggage may not necessarily be moved in exactly the same way as on a regular fixed-wing flight. Your operator should explain passenger baggage limits, duffel arrangements, and storage arrangements before departure.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Helicopter Weight Limits Matter More at Altitude</h5>\r\n` +
`                      <p>A helicopter operating at high elevation has less performance margin than it would at sea level. Higher altitude and temperature can affect aircraft performance. That is why operators may need to control: Passenger weight, Baggage, Fuel, Number of passengers. The pilot and operator determine the safe operating configuration. Do not insist that your entire luggage travel with you if the aircraft cannot safely accommodate it.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Where Does the Rest of Your Luggage Go?</h5>\r\n` +
`                      <p>Depending on the helicopter itinerary, your excess luggage may: Travel separately, Remain with the porter system, Be transported by another flight or Be handled by the trekking company. This should be confirmed before the trek begins. The easiest arrangement is usually to keep your mountain duffle organized and let the local team handle the transfer.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Book a Shared Helicopter or Private Charter?</h5>\r\n` +
`                      <p><strong>Shared helicopter:</strong> Better for lower cost, solo travelers, and couples willing to share.</p>\r\n` +
`                      <p><strong>Private charter:</strong> Better for families, friends, photography groups, and travelers wanting schedule control.</p>\r\n` +
`                      <p>The trade-off is simply cost versus flexibility.</p>\r\n` +
`                      <p>A helicopter transfer to Lukla changes the approach transport. A helicopter return changes part of the descent. A sightseeing helicopter tour is a separate product and does not reproduce the walking journey. Confirm the collection point, shared or private arrangement, exact inclusions, baggage handling, and whether the return is direct or routed through Lukla.</p>\r\n` +
`                      <p>Ask for a dated quotation and the written backup plan if the aircraft cannot operate. Aircraft payload, weather, landing conditions and permissions determine what is possible. Do not assume a landing at Base Camp or Kala Patthar is included or guaranteed. A planned upgrade is also different from medically necessary evacuation and should not be presented as automatically covered by insurance.</p>\r\n                    `;

// Item 15: Responsible Trekking & Sustainability in Everest Region
const item15Content = `\r\n` +
`                      <p>The Everest Base Camp Trek takes you through one of the most remarkable protected mountain environments on earth, but it is also a place that has to absorb thousands of trekkers, guides, porters, lodge workers, pack animals and the supplies required to keep the Khumbu moving. That creates a responsibility for everyone who travels through it.</p>\r\n` +
`                      <p>The Everest trail is not an empty wilderness. It is a living landscape where Sherpa communities, monasteries, farms, teahouses, wildlife, glaciers, forests and tourism businesses all share the same environment.</p>\r\n` +
`                      <p>Sagarmatha National Park was established in 1976 and became a UNESCO World Heritage Site in 1979. UNESCO recognizes not only the area's mountains, glaciers and biodiversity, but also the close relationship between the park's natural environment and Sherpa culture. At the same time, UNESCO continues to identify tourism pressure, waste management, energy demand and forest-resource use as important management challenges for the property.</p>\r\n` +
`                      <p>That is why responsible trekking in the Everest region is not simply about carrying a reusable bottle or posting an environmental message.</p>\r\n` +
`                      <p>It is about how you travel, what you consume, where your money goes, how you treat people, how you behave around religious sites and what you leave behind.</p>\r\n` +
`                      <p>After spending time operating trips through the Khumbu, one thing becomes very clear: The smallest habits repeated by thousands of trekkers have a much larger impact than any single dramatic conservation gesture. So the aim of this section is practical. These are things you can actually do during an Everest Base Camp trek:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Stay on established trails and avoid shortcuts that damage vegetation or increase erosion.</li>\r\n` +
`                        <li>Carry reusable water bottles and choose a practical treatment system.</li>\r\n` +
`                        <li>Pack out personal waste, used wipes, batteries and packaging; do not burn or bury them.</li>\r\n` +
`                        <li>Use water and energy thoughtfully. Take fewer unnecessary showers and charge devices efficiently.</li>\r\n` +
`                        <li>Do not pick plants, collect protected natural materials, feed wildlife or approach animals for photographs.</li>\r\n` +
`                        <li>Give working animals space and follow your guide’s instructions on narrow trails.</li>\r\n` +
`                        <li>Ask permission for portraits and respect religious sites, homes and ceremonies.</li>\r\n` +
`                        <li>Support local teahouses, guides and businesses, with fair treatment of the people who support the trip.</li>\r\n` +
`                        <li>Pack within the agreed porter allowance and take crew health seriously.</li>\r\n` +
`                        <li>Treat helicopter services as a considered transport choice with an environmental impact.</li>\r\n` +
`                        <li>Follow park rules and obtain the required permissions before any restricted activity.</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Firewood Matters in the Khumbu</h5>\r\n` +
`                      <p>At first glance, sitting beside a wood stove in a mountain teahouse can feel like one of the most authentic parts of the trek. It is also important to understand where that fuel comes from. UNESCO identifies pressure on mountain forest ecosystems from firewood demand as an ongoing conservation concern and notes the importance of alternative energy sources such as micro-hydropower in reducing that pressure.</p>\r\n` +
`                      <p>As a trekker, you cannot redesign the region's energy system. But you can help by being conscious of consumption:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Do not demand excessive heating.</li>\r\n` +
`                        <li>Do not leave doors open when the room is being heated.</li>\r\n` +
`                        <li>Use warm layers instead of expecting the entire teahouse to be overheated.</li>\r\n` +
`                        <li>Limit unnecessary hot-water consumption.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Small decisions reduce demand.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Use Local Teahouses</h5>\r\n` +
`                      <p>One of the best ways to support the Khumbu economy is also the easiest: Stay and eat locally. The classic EBC route depends heavily on family-operated or locally operated mountain lodges. Your accommodation spending supports lodge owners, kitchen staff, local suppliers, cleaning staff, transport workers, farmers, and other local businesses.</p>\r\n` +
`                      <p>UNESCO notes that tourism has contributed significantly to economic development and improved living conditions in the Sagarmatha region. So your accommodation choice is not simply about where you sleep. It is part of the economic ecosystem of the trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Buy From Local Shops</h5>\r\n` +
`                      <p>When you need: Snacks, Gloves, Socks, Water, Souvenirs, Basic toiletries, Trekking accessories, buying locally helps keep some of your spending within the communities through which you are travelling. This is particularly useful in places such as Namche Bazaar, where local shops provide important services to both residents and trekkers. You do not have to buy things simply to “support the economy.” Buy what you actually need. But when you do need something, spending locally is a practical form of responsible tourism.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Protect Wildlife</h5>\r\n` +
`                      <p>Sagarmatha National Park supports Himalayan wildlife including Himalayan tahr, musk deer, ghoral, pika and rare species such as the snow leopard and red panda. Most trekkers will not see the rarest animals. You are more likely to encounter Himalayan birds, tahr, pikas, and other smaller mountain species. If you see wildlife: Keep your distance, Do not feed it, Do not chase it, Do not shout to attract it, Do not block its route. The best wildlife encounter is one where the animal barely notices that you were there.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Keep Dogs, Yaks and Pack Animals in Mind</h5>\r\n` +
`                      <p>The trail is shared by trekkers, porters, yaks, donkeys, horses, and other working animals. A large animal train can approach around a narrow bend before you have much warning. When your guide tells you to move to a particular side of the trail, do it. Do not try to squeeze past a moving yak simply because you want to save thirty seconds. Mountain traffic has its own rhythm. Respect it.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do Not Feed Working Animals</h5>\r\n` +
`                      <p>Yaks and pack animals are working parts of the local supply chain. Do not feed them your snacks. Do not tease them for photographs. Do not stand directly behind them. Let the handler control the animal. This is safer for both you and the animal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Dispose of Batteries Properly</h5>\r\n` +
`                      <p>Never throw batteries into a trail bin without knowing whether the waste system can handle them. Batteries contain materials that can be harmful to the environment. Keep used batteries in a separate small bag and return them to Kathmandu or an appropriate collection system when possible. The same applies to power banks at end of life, camera batteries, electronics, and cables. Do not leave broken electronics in the mountains.</p>\r\n` +
`                      <p>Responsible conduct is part of the trip every day, rather than a separate activity. Small habits repeated by many visitors affect waste, water use, fuel demand, wildlife and the lives of the people who live along the route.</p>\r\n                    `;

const updates = [
  { itemNum: 10, content: item10Content },
  { itemNum: 11, content: item11Content },
  { itemNum: 12, content: item12Content },
  { itemNum: 13, content: item13Content },
  { itemNum: 14, content: item14Content },
  { itemNum: 15, content: item15Content },
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
console.log('Successfully completed Batch 2 (Items 10-15) updates in', filePath);
