const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Item 4
const item4Content = `\r\n` +
`                      <p>A typical day on the Everest Base Camp Trek starts earlier than most people expect. There is no fixed “9 AM breakfast, 10 AM departure” routine in the mountains. Your wake-up time depends on the day's route, elevation, weather, daylight and how far you need to walk. A short day from Tengboche to Dingboche feels very different from a high-altitude day from Lobuche to Gorak Shep or the early start for Kala Patthar.</p>\r\n` +
`                      <p>What stays fairly consistent is the rhythm. You wake up. You get warm. You have breakfast. Your porter takes your main luggage. You fill your water bottles. Your guide explains the day's route. Then you walk. There is a lunch stop somewhere along the trail, followed by another few hours of walking until you reach the next teahouse.</p>\r\n` +
`                      <p>In the evening, you eat, talk, prepare for tomorrow and go to bed early. That sounds simple. After several days at altitude, that simplicity becomes one of the things you appreciate most.</p>\r\n` +
`\r\n` +
`                      <div class="guide-data-table-wrap" style="margin: 16px 0 24px 0;">\r\n` +
`                        <table class="guide-data-table">\r\n` +
`                          <thead>\r\n` +
`                            <tr>\r\n` +
`                              <th style="min-width: 150px;">Part of the day</th>\r\n` +
`                              <th>What usually happens</th>\r\n` +
`                            </tr>\r\n` +
`                          </thead>\r\n` +
`                          <tbody>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Morning</strong></td>\r\n` +
`                              <td>Wake up, dress, eat breakfast, fill bottles and pack the porter duffle</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Before departure</strong></td>\r\n` +
`                              <td>Guide briefing and a check that daypack essentials are accessible</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Morning walk</strong></td>\r\n` +
`                              <td>Steady trekking with rest stops appropriate to terrain and group condition</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Lunch</strong></td>\r\n` +
`                              <td>A teahouse or village stop along the route</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Afternoon</strong></td>\r\n` +
`                              <td>Continue to the overnight settlement; the actual arrival time varies</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>At the lodge</strong></td>\r\n` +
`                              <td>Settle into the room, organize layers, drink, eat and rest</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Evening</strong></td>\r\n` +
`                              <td>Dinner, check-in with the guide, next-day briefing and early sleep</td>\r\n` +
`                            </tr>\r\n` +
`                          </tbody>\r\n` +
`                        </table>\r\n` +
`                      </div>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The First 30 Minutes of the Day</h5>\r\n` +
`                      <p>The first half-hour is usually deliberately slow. Your body needs to warm up. Your legs may feel stiff after sleeping. At altitude, there is also little benefit in rushing immediately after breakfast. Your guide will generally establish a comfortable rhythm and allow the group to settle into it.</p>\r\n` +
`                      <p>This is particularly important on longer days. A trekker who starts too quickly often spends the afternoon paying for that decision.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The “Khumbu Pace”</h5>\r\n` +
`                      <p>There is no official walking speed for the Everest Base Camp Trek. But experienced guides naturally settle into what can be described as a slow, steady high-altitude pace. You are not trying to power uphill. You are trying to move efficiently enough that you can continue for hours. On steep sections, this may mean:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Shorter steps</li>\r\n` +
`                        <li>Slower breathing</li>\r\n` +
`                        <li>Regular pauses</li>\r\n` +
`                        <li>Minimal unnecessary conversation</li>\r\n` +
`                        <li>Consistent rhythm</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You may initially think the pace is too slow. Then you reach 4,800 meters and realize why it was necessary.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why We Do Not Encourage Racing</h5>\r\n` +
`                      <p>It is common for fit trekkers to start quickly. They feel strong. The trail is beautiful. They want to reach the lunch stop first. Then something happens after two or three hours. The breathing gets harder. The legs feel heavy. The group starts passing them.</p>\r\n` +
`                      <p>The problem is not that they suddenly became unfit. They simply spent too much energy too early. On a high-altitude trek, energy management matters more than speed. The conversations become easier because everyone has spent the day doing the same difficult thing.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Cards, Books and Journaling</h5>\r\n` +
`                      <p>There is surprisingly little you need to entertain yourself at a teahouse. Popular evening activities include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Playing cards</li>\r\n` +
`                        <li>Reading</li>\r\n` +
`                        <li>Journaling</li>\r\n` +
`                        <li>Talking</li>\r\n` +
`                        <li>Planning photographs</li>\r\n` +
`                        <li>Looking at the route</li>\r\n` +
`                        <li>Checking the weather</li>\r\n` +
`                        <li>Listening to music</li>\r\n` +
`                        <li>Doing nothing</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>That last one is underrated. You have spent six hours walking. You do not need another six hours of stimulation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Time Do You Go to Bed?</h5>\r\n` +
`                      <p>Most trekkers are in bed relatively early. Around 8:30–9:30 PM is common on many nights. You may stay up later in Namche because there is more going on.</p>\r\n` +
`                      <p>At Lobuche or Gorak Shep, the combination of cold, altitude and an early morning usually makes an early night feel natural. On a Kala Patthar day, you may go to bed particularly early because the next start could be before dawn.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should the Group Always Stay Together?</h5>\r\n` +
`                      <p>The guide determines the appropriate group arrangement depending on terrain and circumstances. On straightforward sections, trekkers naturally spread out. On more demanding or exposed sections, the group may need to remain closer together.</p>\r\n` +
`                      <p>The important thing is not to disappear around a bend without the guide knowing where you are. The mountains are too large for that kind of independence to be useful.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What If You Want to Walk Faster Than the Group?</h5>\r\n` +
`                      <p>Talk to your guide. Do not simply disappear ahead. If the guide is comfortable with the arrangement and the terrain is appropriate, they can advise you how to proceed.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What If You Need More Rest?</h5>\r\n` +
`                      <p>Say so. Your guide can usually adjust the break schedule. Some trekkers need: More frequent short breaks while others prefer: Fewer but longer breaks. Both approaches can work. What matters is maintaining a sustainable pace.</p>\r\n` +
`                      <p>Acclimatization days involve a controlled hike and return to the same sleeping elevation. Kala Patthar and the Base Camp day need different start times from ordinary trekking stages; your guide sets the plan around weather, daylight and how the group is responding.</p>\r\n                    `;

// Item 5
const item5Content = `\r\n` +
`                      <p>The classic route involves Sagarmatha National Park entry and Khumbu local registration / Trek-Card. These are different registrations. Your booking should identify which documents are arranged, the applicable fee basis and what you need to carry.</p>\r\n` +
`                      <p>Nepal Tourism Board’s published revised TIMS route list includes Everest Base Camp under its licensed-guide and agency-issued TIMS provisions. Khumbu municipality also operates its own Trek-Card system. Ask the team to confirm the documents and checkpoint requirements that apply to your nationality, route and departure date; do not treat one document as a substitute for another without confirmation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Documents Do You Need for EBC Trek Permits?</h5>\r\n` +
`                      <p>Your passport is the most important document. Depending on the registration system and trekking-company procedure, you may also need:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Passport information page</li>\r\n` +
`                        <li>Passport-size photograph or digital photograph</li>\r\n` +
`                        <li>Emergency contact details</li>\r\n` +
`                        <li>Travel insurance information</li>\r\n` +
`                        <li>Trekking itinerary</li>\r\n` +
`                        <li>Guide and agency information</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Your trekking company may collect these details before you arrive in the mountains. The Khumbu Rural Municipality currently lists passport and a recent photograph as requirements for its Trek-Card service.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Should You Send Your Passport Copy Before the Trek?</h5>\r\n` +
`                      <p>A passport copy is commonly requested during the booking and preparation stage because trekking agencies need accurate identity information for:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Domestic flight bookings</li>\r\n` +
`                        <li>TIMS registration</li>\r\n` +
`                        <li>Local trekking registration</li>\r\n` +
`                        <li>National park documentation</li>\r\n` +
`                        <li>Emergency records</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You should send a clear, valid copy through the secure process provided by your trekking agency. Do not send sensitive passport information through unverified third parties or random online forms.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Where Do You Show Your Permits on the EBC Trail?</h5>\r\n` +
`                      <p>The documents are checked at designated checkpoints. One important checkpoint is around Monjo, before the route continues toward Namche Bazaar and deeper into Sagarmatha National Park.</p>\r\n` +
`                      <p>Your guide or trekking agency representative normally carries or manages the relevant documentation for the group. You should still keep your passport and personal identification accessible. Do not throw away any permit receipt or registration information until the trek is complete.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do You Need an Everest Climbing Permit for the Base Camp Trek?</h5>\r\n` +
`                      <p>No. This is a common misunderstanding. The Everest Base Camp Trek and an Everest summit expedition are completely different activities.</p>\r\n` +
`                      <p>A trekker visiting Base Camp does not need an Everest mountaineering permit simply because they reach the Everest Base Camp area. An Everest climbing expedition requires an entirely different system of mountaineering permits, expedition management and climbing requirements.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What If You Add Gokyo, Three Passes or a Peak Climb?</h5>\r\n` +
`                      <p>You are walking to the base of Everest. You are not attempting to summit Everest. A standard EBC trek has one administrative profile. An extended itinerary can have another. For example, adding:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Gokyo Valley</li>\r\n` +
`                        <li>Cho La Pass</li>\r\n` +
`                        <li>Renjo La</li>\r\n` +
`                        <li>Three Passes</li>\r\n` +
`                        <li>Island Peak</li>\r\n` +
`                        <li>Lobuche Peak</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>can introduce additional logistical, guide, permit or climbing requirements depending on the exact route.</p>\r\n` +
`                      <p>The Nepal Tourism Board specifically lists several Everest-region routes, including Gokyo, Chho La, Gokyo Renjo La, Three Passes, Mera Peak and Amphu Labtsha, within the guide/TIMS framework. The safest approach is to finalize the exact route first and then determine the complete permit requirement.</p>\r\n` +
`                      <p>Keep your passport and relevant document copies accessible. The ordinary EBC trek does not give you permission to enter the Everest climbing route. Peak climbs and activities such as drone use require separate checks. Current permit details should be confirmed before departure rather than copied from an old fee table.</p>\r\n                    `;

// Item 6
const item6Content = `\r\n` +
`                      <p>Altitude is the most important factor to understand before starting the Everest Base Camp Trek. The route is not technically difficult in the same way as a mountaineering expedition, but it takes you from Lukla at approximately 2,860 m (9,383 ft) to Everest Base Camp at 5,364 m (17,598 ft) and Kala Patthar at approximately 5,545 m (18,192 ft).</p>\r\n` +
`                      <p>That increase in elevation means there is significantly less available oxygen than at sea level. Your body needs time to adapt, and no amount of fitness can completely replace proper acclimatization.</p>\r\n` +
`                      <p>This is why a well-designed EBC trek itinerary does not simply move upward every day. The classic route includes dedicated acclimatization around Namche Bazaar and Dingboche, controlled sleeping-altitude gains and a gradual approach to the highest part of the Khumbu. Nepal Tourism Board emphasizes acclimatization as an essential part of the Everest Base Camp route, while the CDC recommends gradual ascent and avoiding further ascent when symptoms of altitude illness are developing. (ntb.gov.np; wwwnc.cdc.gov)</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Namche Bazaar is an important acclimatization stop?</h5>\r\n` +
`                      <p>Namche Bazaar at approximately 3,440–3,500 m is the first major acclimatization point on the classic EBC itinerary. Instead of continuing directly from Phakding toward Tengboche and the higher Khumbu, you spend an additional night around Namche.</p>\r\n` +
`                      <p>The acclimatization day usually involves a hike to a higher elevation around the surrounding hills and viewpoints, followed by a return to Namche to sleep. This allows the body to experience higher elevation during the day without immediately increasing the sleeping altitude by the same amount.</p>\r\n` +
`                      <p>Nepal Tourism Board highlights Namche and nearby locations such as Syangboche, Khumjung and Khunde as important parts of the acclimatization stage of the Everest trek. (ntb.gov.np)</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What happens during the Namche acclimatization day?</h5>\r\n` +
`                      <p>The exact hike depends on your group and conditions, but a typical acclimatization day involves:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li><strong>Morning:</strong> Breakfast followed by a slow uphill hike.</li>\r\n` +
`                        <li><strong>Daytime:</strong> Gain additional elevation around Namche, often toward Syangboche or nearby viewpoints.</li>\r\n` +
`                        <li><strong>Afternoon:</strong> Return to Namche and rest.</li>\r\n` +
`                        <li><strong>Evening:</strong> Eat, hydrate, monitor how you feel and prepare for the next day.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The goal is not to exhaust yourself. You should return from the acclimatization hike feeling that you have worked your body but still have energy left.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Dingboche is the second major acclimatization stop?</h5>\r\n` +
`                      <p>The second dedicated acclimatization period takes place around Dingboche at approximately 4,410 m. The importance of this day is greater because you are now approaching the elevations where the trail becomes much more exposed and the available oxygen is substantially lower. From Dingboche, trekkers can undertake a higher daytime hike and return to the village to sleep.</p>\r\n` +
`                      <p>A common option is the ridge toward Nangkartshang/Nagarjun Hill, although the exact route should depend on weather and how the group is responding to the altitude. The objective is to prepare your body for the next stages: Dingboche → Lobuche → Gorak Shep → Everest Base Camp → Kala Patthar</p>\r\n` +
`                      <p>This part of the itinerary should never be treated as something to rush through simply because you feel strong.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">“Climb high, sleep low” on the EBC trek</h5>\r\n` +
`                      <p>One of the fundamental concepts of acclimatization is often summarized as: Climb high, sleep low.</p>\r\n` +
`                      <p>This means gaining additional elevation during the day while returning to a lower sleeping altitude whenever practical. The principle is used because sleeping altitude is a particularly important factor in how quickly your body must adapt.</p>\r\n` +
`                      <p>A carefully designed Everest Base Camp itinerary therefore uses acclimatization hikes around Namche and Dingboche rather than simply adding more walking distance. This does not make altitude completely safe. It simply gives your body a more gradual opportunity to adapt.</p>\r\n` +
`                      <p>Fitness helps with walking endurance but does not prevent altitude illness. The key habits are a gradual itinerary, a sustainable pace, enough rest and early reporting of symptoms. Do not remove the Namche or Dingboche acclimatization day simply because you feel strong.</p>\r\n` +
`                      <p>Headache with symptoms such as nausea, unusual tiredness or dizziness after ascent can indicate altitude illness. Tell your guide promptly and do not continue ascending with symptoms. Worsening illness or serious signs require urgent assessment and descent. The Emergency & Evacuation section explains the response process.</p>\r\n` +
`                      <p>Drink regularly, eat enough, and avoid alcohol while acclimatizing. Adequate hydration supports normal function; it does not prevent altitude illness. Medication decisions belong with a qualified clinician, and pulse-oximeter readings must be interpreted alongside symptoms and overall condition.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do acclimatization days guarantee that you will avoid AMS?</h5>\r\n` +
`                      <p>No. This distinction is extremely important. A good itinerary can reduce risk, but it cannot guarantee that you will not experience altitude sickness. Acclimatization varies between individuals, and there is no itinerary that completely eliminates altitude-related illness.</p>\r\n` +
`                      <p>The role of the itinerary is to provide a progressive ascent with appropriate adaptation opportunities. The role of the trekker is to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Walk at a sensible pace</li>\r\n` +
`                        <li>Stay adequately hydrated</li>\r\n` +
`                        <li>Eat regularly</li>\r\n` +
`                        <li>Avoid unnecessary exertion</li>\r\n` +
`                        <li>Communicate symptoms early</li>\r\n` +
`                        <li>Follow the guide's instructions</li>\r\n` +
`                        <li>Accept itinerary changes when medically necessary</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can medication help with altitude sickness?</h5>\r\n` +
`                      <p>Acetazolamide (commonly known as Diamox) is widely used for the prevention and treatment of altitude illness, but medication decisions should be made with a qualified healthcare professional.</p>\r\n` +
`                      <p>It is not a replacement for acclimatization. Trekkers should discuss altitude medication with their doctor before departure, particularly if they have allergies, medical conditions or take other medications. Do not begin medication simply because another trekker is using it. Your healthcare provider should determine whether it is appropriate for you.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Altitude Is a Shared Responsibility</h5>\r\n` +
`                      <p>Your trekking company can design an appropriate itinerary, your guide can monitor the group and your support team can help when conditions change. But no guide can feel your headache, measure your breathing or know exactly how your body feels unless you tell them.</p>\r\n` +
`                      <p>That makes communication between trekker and guide one of the most important safety tools on the Everest Base Camp Trek. The best guides are not the people who push everyone to Base Camp regardless of circumstances. They are the people who understand when to slow down, when to stop, when to change the day's plan and when descent is the correct decision.</p>\r\n                    `;

// Item 7
const item7Content = `\r\n` +
`                      <p>The Everest Base Camp Trek is challenging, but it does not require technical mountaineering skills. The main difficulty comes from the combination of high altitude, sustained walking, elevation gain and loss, uneven Himalayan terrain, changing weather and several consecutive days on the trail.</p>\r\n` +
`                      <p>You do not climb Mount Everest itself. You follow an established trekking route through the Khumbu Valley to Everest Base Camp at 5,364 m (17,598 ft) and normally continue to Kala Patthar at approximately 5,545 m (18,192 ft). Nepal Tourism Board describes the Everest region trek as a journey involving significant physical challenges and specifically emphasizes the importance of taking time to acclimatize as altitude increases.</p>\r\n` +
`                      <p>For most properly prepared trekkers, the EBC trek is achievable. The key is understanding what “fit enough” actually means for a high-altitude trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Difficult Is the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>We consider the Everest Base Camp Trek challenging to strenuous, primarily because of altitude rather than technical terrain.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Far Do You Walk on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>The exact distance varies according to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Itinerary</li>\r\n` +
`                        <li>Side trips</li>\r\n` +
`                        <li>Whether you climb Kala Patthar</li>\r\n` +
`                        <li>Whether you take a helicopter return</li>\r\n` +
`                        <li>Small route changes</li>\r\n` +
`                        <li>Your guide's choice of trail</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For the classic Lukla-based itinerary, you can expect roughly 120–140 km of total walking, depending on the precise route and how the individual operator measures the distances. The number matters less than how that distance is distributed.</p>\r\n` +
`                      <p>You are not walking 130 km continuously. It is divided across approximately two weeks, with acclimatization days and shorter/longer stages.</p>\r\n` +
`                      <p>Most stages involve around 5–7 hours of walking, with longer or shorter days in the detailed itinerary. The Day 10 Base Camp excursion followed by the descent to Pheriche is particularly demanding. The challenge includes stone steps, uneven ground, exposure to cold, repeated climbing and descending, and recovery across consecutive days.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Most Important Physical Ability for EBC?</h5>\r\n` +
`                      <p>Endurance. Not maximum strength. Not sprint speed. Not explosive power. You need to repeatedly produce moderate effort for several hours. Think: Walking rather than running.</p>\r\n` +
`                      <p>Your training should therefore prioritize:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Long-duration activity</li>\r\n` +
`                        <li>Hills</li>\r\n` +
`                        <li>Stairs</li>\r\n` +
`                        <li>Back-to-back hikes</li>\r\n` +
`                        <li>Recovery</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Strong Do Your Legs Need to Be?</h5>\r\n` +
`                      <p>Strong enough to repeatedly:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Step uphill</li>\r\n` +
`                        <li>Control your body downhill</li>\r\n` +
`                        <li>Walk over rocks</li>\r\n` +
`                        <li>Climb stone steps</li>\r\n` +
`                        <li>Carry a daypack</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Your quadriceps become especially important during the long descents. Your calves work constantly on climbs. Your glutes contribute strongly on sustained uphill sections. Your core helps maintain balance on uneven ground. You do not need extreme strength. You need durable strength.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why the Descent Is Physically Important</h5>\r\n` +
`                      <p>Some trekkers train almost entirely uphill. That is a mistake. The return from Everest Base Camp involves repeated descents. Downhill walking creates substantial eccentric load on your quadriceps. That means:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Strong legs help</li>\r\n` +
`                        <li>Trekking poles help</li>\r\n` +
`                        <li>Good footwear helps</li>\r\n` +
`                        <li>Controlled pace helps</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Your final trekking days can therefore still feel physically demanding even though you are losing elevation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Should You Train for Descents?</h5>\r\n` +
`                      <p>Train for Descents Include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Step-downs</li>\r\n` +
`                        <li>Walking downstairs</li>\r\n` +
`                        <li>Hill descents</li>\r\n` +
`                        <li>Controlled lunges</li>\r\n` +
`                        <li>Squats</li>\r\n` +
`                        <li>Long hikes with downhill sections</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This teaches your legs to absorb load rather than only produce it. A person who can climb a steep hill but has never done a long descent may be surprised by how sore their legs become on the EBC return.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Long Should You Train Before the EBC Trek?</h5>\r\n` +
`                      <p>For a person starting from an average level of fitness, 8–12 weeks of structured preparation is a sensible target. Someone who already hikes regularly may need less formal preparation. Someone who spends most of the day sedentary may need considerably more time. A useful progression is:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li><strong>Weeks 1–4:</strong> Build general cardiovascular fitness and establish regular walking.</li>\r\n` +
`                        <li><strong>Weeks 5–8:</strong> Increase distance, add hills and introduce longer weekend hikes.</li>\r\n` +
`                        <li><strong>Weeks 9–12:</strong> Include longer uphill hikes, consecutive walking days and a progressively heavier daypack.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The objective is not to simulate 5,500 meters at home, you cannot recreate Himalayan altitude simply through fitness training. The objective is to arrive in Nepal with enough strength and endurance that altitude, rather than basic physical weakness, is the primary challenge your body needs to manage.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Train With Hills, Stairs and Elevation Gain</h5>\r\n` +
`                      <p>Flat-road fitness is helpful, but it does not fully prepare you for the Everest Base Camp route. Much of the trek involves climbing and descending. Whenever possible, include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Steep hiking trails</li>\r\n` +
`                        <li>Stair workouts</li>\r\n` +
`                        <li>Hill repeats</li>\r\n` +
`                        <li>Incline treadmill walking</li>\r\n` +
`                        <li>Uneven natural terrain</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A useful training hike should sometimes last several hours, because the challenge of EBC includes staying functional after the first two or three hours of walking.</p>\r\n` +
`                      <p>You should also train downhill. Many trekkers prepare extensively for climbing but underestimate how much the descent stresses the quadriceps and knees. The return from Kala Patthar and the long descent from the upper Khumbu are excellent examples.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Train With a Backpack?</h5>\r\n` +
`                      <p>Yes, but progressively. During a porter-supported EBC trek, you typically do not need to carry your main duffle all day. Your porter carries the larger trekking bag, while you carry a daypack containing water, layers, snacks, personal items, valuables and anything needed during that section of the trail.</p>\r\n` +
`                      <p>Training with a smaller backpack is therefore useful. Start with a light load and gradually increase it. You do not need to train with the full weight of your mountain luggage. The goal is to become comfortable walking uphill with the type of daypack you will actually use on the trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Weeks 1–4: Build the Base:</h5>\r\n` +
`                      <p>Focus on consistency. Walk or exercise several times each week, gradually increasing the duration. Add basic lower-body and core strength exercises. The goal is to establish a fitness habit rather than immediately attempting extremely long hikes.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Weeks 5–8: Add Hills and Longer Hikes:</h5>\r\n` +
`                      <p>Introduce sustained elevation gain. Use hills, stairs or an incline treadmill and start completing longer weekend hikes. Practice walking with the daypack you expect to use in Nepal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Weeks 9–10: Increase Trek-Specific Endurance:</h5>\r\n` +
`                      <p>Your longer hikes should now resemble a trekking day. Aim for several hours of continuous walking with elevation gain and loss. Whenever practical, schedule two walking days close together. This teaches your body to work while not completely recovered from the previous day's activity.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Weeks 11–12: Simulate the Rhythm:</h5>\r\n` +
`                      <p>The final preparation phase should focus on confidence rather than exhausting yourself. Practice:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Long hikes</li>\r\n` +
`                        <li>Moderate elevation gain</li>\r\n` +
`                        <li>Consecutive walking days</li>\r\n` +
`                        <li>Daypack use</li>\r\n` +
`                        <li>Layering systems</li>\r\n` +
`                        <li>Trekking poles</li>\r\n` +
`                        <li>Hydration routines</li>\r\n` +
`                        <li>Nutrition during long walks</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Reduce the intensity before departure so that you arrive in Nepal recovered rather than fatigued.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How to Prepare Your Feet for EBC?</h5>\r\n` +
`                      <p>Feet are easy to ignore until something goes wrong. You should Prepare Your Feet for EBC Practice:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Long walks</li>\r\n` +
`                        <li>Hill walking</li>\r\n` +
`                        <li>Your actual boots</li>\r\n` +
`                        <li>Your actual trekking socks</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>If your feet develop hotspots during training, fix them before Nepal. Useful items include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Blister patches</li>\r\n` +
`                        <li>Sports tape</li>\r\n` +
`                        <li>Anti-friction products</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Do not experiment with a new blister treatment for the first time at 4,500 meters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How to Prepare Your Shoulders and Back?</h5>\r\n` +
`                      <p>Even with porter support, you will carry a daypack. Practice walking with approximately your expected daypack load. Your shoulders should become accustomed to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Pack straps</li>\r\n` +
`                        <li>Hip belt</li>\r\n` +
`                        <li>Weight distribution</li>\r\n` +
`                        <li>Long-duration carrying</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A correctly adjusted backpack can make a surprisingly large difference.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Important Is Balance?</h5>\r\n` +
`                      <p>Very. The EBC trail includes:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Rocks</li>\r\n` +
`                        <li>Stone steps</li>\r\n` +
`                        <li>Loose gravel</li>\r\n` +
`                        <li>Uneven ground</li>\r\n` +
`                        <li>Suspension bridges</li>\r\n` +
`                        <li>Moraine</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Balance matters particularly when you are tired. Exercises such as:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Single-leg stands</li>\r\n` +
`                        <li>Step-downs</li>\r\n` +
`                        <li>Lunges</li>\r\n` +
`                        <li>Uneven-surface walking</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>can complement hiking practice.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Important Are Your Shoes Compared With Fitness?</h5>\r\n` +
`                      <p>Good footwear cannot make you fit. But poor footwear can sabotage good fitness. A blister can change your entire trek. A slipping boot can cause injury. Poor downhill fit can destroy your toenails. Your footwear should therefore be treated as part of your training system rather than a last-minute purchase.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens if You Start the Trek Undertrained?</h5>\r\n` +
`                      <p>Usually one of three things happens:</p>\r\n` +
`                      <p><strong>You struggle physically:</strong><br>The first few days feel much harder than expected.</p>\r\n` +
`                      <p><strong>You compensate by walking too slowly or taking excessive rest:</strong><br>The day becomes longer and recovery becomes harder.</p>\r\n` +
`                      <p><strong>You push too hard:</strong><br>You create unnecessary fatigue or injury.</p>\r\n` +
`                      <p>None is ideal. The easiest solution is to train before Nepal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Last Two Weeks Before EBC</h5>\r\n` +
`                      <p>Do not try to build all your fitness at the last moment. You should gradually reduce your training load as departure approaches. Keep:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Light walking</li>\r\n` +
`                        <li>Moderate cardio</li>\r\n` +
`                        <li>Mobility</li>\r\n` +
`                        <li>Some strength work</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Avoid:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Extreme hikes</li>\r\n` +
`                        <li>New sports</li>\r\n` +
`                        <li>Heavy lifting</li>\r\n` +
`                        <li>Major fitness challenges</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The goal is to arrive fresh and healthy.</p>\r\n` +
`                      <p>Check your readiness. Can you walk for several hours on uneven ground, climb and descend hills, manage a daypack, and recover well enough to repeat the effort? If those tasks are currently difficult, build your base progressively before booking a demanding departure. Previous injuries, heart or lung conditions, or other medical concerns warrant individual advice. Age and family considerations appear in the dedicated section below.</p>\r\n                    `;

// Item 8
const item8Content = `\r\n` +
`                      <p>The Everest Base Camp Trek is often marketed as a journey to the world's highest mountain, but anyone who spends meaningful time on the trail quickly realizes that the mountains are only half the story. The other half is the people and culture of the Khumbu.</p>\r\n` +
`                      <p>You walk through Sherpa villages rather than empty wilderness. You sleep in family-run teahouses. You pass mani walls and prayer wheels on the trail. You enter settlements where monasteries, farms, lodges and mountain businesses exist side by side. You hear bells, see prayer flags moving in the wind and occasionally encounter monks walking between religious sites.</p>\r\n` +
`                      <p>The Sherpa people, Tibetan Buddhist traditions, mountain architecture, monasteries and everyday village life are not decorative elements added to the Everest Base Camp route. They are part of the living cultural landscape through which you travel.</p>\r\n` +
`                      <p>UNESCO recognizes the exceptional natural and cultural relationship of the Sagarmatha National Park and describes the Sherpa communities, their Buddhist traditions and their adaptation to the Himalayan environment as an integral part of the area's significance. (whc.unesco.org)</p>\r\n` +
`                      <p>For us, this is one of the reasons a well-paced EBC trek should leave enough time to stop, look around and ask questions. You are not simply walking toward Base Camp. You are walking through Khumbu Sherpa country.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Who Are the Sherpa People?</h5>\r\n` +
`                      <p>The Sherpa are a Himalayan ethnic community whose traditional homeland includes the Solukhumbu region of Nepal and neighboring parts of the Himalaya. The word “Sherpa” is sometimes incorrectly used as a synonym for mountain guide or porter. That is not what it means.</p>\r\n` +
`                      <p>Sherpa is an ethnic and cultural identity. Many Sherpa people work in trekking and mountaineering because those industries are deeply established in the Khumbu, but Sherpa communities also include farmers, lodge owners, traders, teachers, business owners, religious practitioners and people working in many professions outside the mountains.</p>\r\n` +
`                      <p>The culture has strong historical and spiritual connections with Tibetan Buddhism, and those traditions are visible throughout the Everest region. On the EBC route, you experience that culture through:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Villages</li>\r\n` +
`                        <li>Monasteries</li>\r\n` +
`                        <li>Prayer wheels</li>\r\n` +
`                        <li>Mani walls</li>\r\n` +
`                        <li>Chortens</li>\r\n` +
`                        <li>Prayer flags</li>\r\n` +
`                        <li>Traditional architecture</li>\r\n` +
`                        <li>Food</li>\r\n` +
`                        <li>Festivals</li>\r\n` +
`                        <li>Hospitality</li>\r\n` +
`                        <li>Local mountain livelihoods</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Namche Bazaar: The Cultural and Commercial Heart of the Khumbu</h5>\r\n` +
`                      <p>Namche Bazaar is usually the first place where trekkers experience the scale of the Khumbu's mountain economy. Built into a steep mountainside, Namche combines traditional Sherpa identity with an increasingly sophisticated trekking infrastructure. You will see:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Stone-built homes</li>\r\n` +
`                        <li>Prayer wheels</li>\r\n` +
`                        <li>Buddhist imagery</li>\r\n` +
`                        <li>Teahouses</li>\r\n` +
`                        <li>Trekking shops</li>\r\n` +
`                        <li>Cafés and bakeries</li>\r\n` +
`                        <li>Mountain equipment stores</li>\r\n` +
`                        <li>Local markets</li>\r\n` +
`                        <li>Hotels and lodges</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Nepal Tourism Board describes Namche as an important Sherpa trading centre and a major stop on the Everest Base Camp route. (ntb.gov.np)</p>\r\n` +
`                      <p>It is also an important place to slow down and observe. Watch how porters organize supplies. Observe how trekkers and locals move through the market. Visit the surrounding villages. Talk to your guide about Sherpa traditions. Namche is where the Everest Base Camp trek begins to feel culturally different from an ordinary Himalayan hike.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Khumjung and Khunde: Life Beyond the Main Trail</h5>\r\n` +
`                      <p>The Khumjung and Khunde area provides another opportunity to see a quieter side of Khumbu life. The surrounding landscape includes traditional settlements, agricultural areas, monasteries, schools and mountain views.</p>\r\n` +
`                      <p>A common acclimatization route from Namche can take trekkers toward this area, making the cultural experience part of the acclimatization day rather than an additional excursion.</p>\r\n` +
`                      <p>This is one of the best examples of how a properly designed itinerary can combine altitude preparation and cultural exploration. You are gaining elevation for acclimatization while also learning how communities have developed around the mountain environment.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Tengboche Monastery and Khumbu Buddhism</h5>\r\n` +
`                      <p>Among all the cultural landmarks on the Everest Base Camp route, Tengboche Monastery is probably the most famous. The monastery sits at approximately 3,860 m, surrounded by Himalayan peaks and particularly well known for its dramatic relationship with Ama Dablam. Nepal Tourism Board identifies Tengboche as an important Buddhist centre of the Khumbu and notes its association with the annual Mani Rimdu festival. (ntb.gov.np)</p>\r\n` +
`                      <p>The monastery is part of the Nyingma tradition of Tibetan Buddhism, and religious activity continues there beyond the periods when tourists are visiting. That distinction matters. You are not entering a museum. You are entering a living religious institution.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Happens Inside Tengboche Monastery?</h5>\r\n` +
`                      <p>Depending on the time of your visit and current monastery schedule, you may encounter monks engaged in:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Prayer</li>\r\n` +
`                        <li>Chanting</li>\r\n` +
`                        <li>Meditation</li>\r\n` +
`                        <li>Religious ceremonies</li>\r\n` +
`                        <li>Daily monastic activities</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Visitors may be able to observe some activities, but access is always subject to the monastery's rules and current religious practice. Your guide should explain:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Whether you can enter</li>\r\n` +
`                        <li>Where you can sit</li>\r\n` +
`                        <li>Whether photography is allowed</li>\r\n` +
`                        <li>When you should remain silent</li>\r\n` +
`                        <li>When shoes should be removed</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Do not treat a ceremony as a tourist performance. For the monks, it is religious practice.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Mani Walls and Prayer Stones</h5>\r\n` +
`                      <p>One of the most distinctive cultural features of the Khumbu trail is the mani wall. These walls are made from stones engraved with Buddhist prayers and sacred inscriptions. You will encounter them in villages and along sections of the trekking trail.</p>\r\n` +
`                      <p>The traditional practice is to pass them on your left while keeping them on your right, following the clockwise direction associated with Buddhist circumambulation. Do not climb over a mani wall. Do not remove a stone. Do not rearrange the stones for a photograph. Simply walk respectfully around it.</p>\r\n` +
`                      <p>These structures are part of the religious landscape of the Khumbu, not decorative trail markers.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Prayer Wheels Along the Trail</h5>\r\n` +
`                      <p>You will also encounter rows of prayer wheels, sometimes located beside pathways, bridges, monasteries or village entrances. Traditionally, prayer wheels are turned clockwise. The spinning movement is associated with the recitation and dissemination of Buddhist prayers.</p>\r\n` +
`                      <p>When you encounter a line of wheels, you will often notice local residents and trekkers turning them as they pass. Follow the same clockwise direction and avoid pushing the wheel aggressively or treating it like a novelty object. A gentle turn is enough.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Chortens and Stupas</h5>\r\n` +
`                      <p>Chortens, also known in the broader Buddhist tradition as stupas, appear throughout the Khumbu. They are religious monuments rather than simple roadside decorations. You may find them:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>At village entrances</li>\r\n` +
`                        <li>Along mountain paths</li>\r\n` +
`                        <li>Near monasteries</li>\r\n` +
`                        <li>On ridgelines</li>\r\n` +
`                        <li>At memorial sites</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>When passing around a chorten, the traditional direction is generally clockwise. Never climb onto one for a photograph. If prayer flags or offerings are present, leave them undisturbed.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Prayer Flags and the Meaning of the Landscape</h5>\r\n` +
`                      <p>Colorful prayer flags are one of the visual symbols most associated with the Himalaya. You will see them:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>On suspension bridges</li>\r\n` +
`                        <li>Around monasteries</li>\r\n` +
`                        <li>At chortens</li>\r\n` +
`                        <li>On mountain ridges</li>\r\n` +
`                        <li>Near village entrances</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The colors traditionally represent different elements and are associated with prayers being carried by the wind. They are not simply decoration. Do not remove, rearrange or use prayer flags as travel accessories.</p>\r\n` +
`                      <p>When you see a large cluster of flags on a ridge, remember that you are looking at a religious and cultural practice not merely a photogenic viewpoint.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Buddhist Beliefs and the Mountains</h5>\r\n` +
`                      <p>The cultural landscape of the Khumbu reflects a close relationship between mountains, religion and community life. Mountains are not simply geographic objects. They can hold spiritual significance within the local worldview. This is one reason the cultural experience of the EBC trek can feel completely different from trekking through a secular wilderness landscape. You may encounter:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Religious ceremonies</li>\r\n` +
`                        <li>Monks</li>\r\n` +
`                        <li>Prayer flags</li>\r\n` +
`                        <li>Sacred sites</li>\r\n` +
`                        <li>Blessings</li>\r\n` +
`                        <li>Offerings</li>\r\n` +
`                        <li>Mantras</li>\r\n` +
`                        <li>Prayer wheels</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A good local guide can explain what you are seeing without turning a complex living culture into a simplified tourist story.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Sherpa Festivals in the Everest Region</h5>\r\n` +
`                      <p>The cultural calendar of the Khumbu includes important Buddhist and Sherpa festivals. One of the best known is Mani Rimdu, traditionally associated with Tengboche Monastery. The festival includes religious ceremonies, prayers and masked dances and has become one of the best-known cultural events in the Everest region. Nepal Tourism Board identifies Mani Rimdu as a major Buddhist festival associated with Tengboche. (ntb.gov.np)</p>\r\n` +
`                      <p>Another important celebration is Dumji, a Sherpa festival observed in communities of the Everest region. Festival dates follow traditional calendars and can vary from year to year. Do not build an entire trek around a festival date without checking the current local calendar.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Mani Rimdu?</h5>\r\n` +
`                      <p>Mani Rimdu is a major Buddhist festival associated with the Sherpa communities of the Khumbu and particularly with Tengboche Monastery. The celebration can include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Prayer ceremonies</li>\r\n` +
`                        <li>Monastic rituals</li>\r\n` +
`                        <li>Masked dances</li>\r\n` +
`                        <li>Religious teachings</li>\r\n` +
`                        <li>Community gatherings</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For a visitor, it can be an extraordinary cultural experience. But the right approach is observation and respect. Do not enter restricted ceremonial areas. Do not interrupt rituals for photographs. Follow the monastery's instructions. Remember that the event is primarily religious and communal, not a show created for tourists.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Cultural Experience at Pangboche</h5>\r\n` +
`                      <p>Pangboche is another important Sherpa settlement on the EBC route. It sits deeper in the Imja Valley and gives trekkers an opportunity to observe a more traditional mountain settlement than the highly commercialized environment of Namche. The village is associated with:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Sherpa households</li>\r\n` +
`                        <li>Agriculture</li>\r\n` +
`                        <li>Monastic traditions</li>\r\n` +
`                        <li>Mountain guiding</li>\r\n` +
`                        <li>Traditional stone architecture</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The surrounding fields demonstrate how communities have historically adapted food production to short growing seasons and difficult terrain. Walking through Pangboche is an opportunity to look beyond the mountain peaks and understand what everyday life requires at almost 4,000 meters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Difference Between a Sherpa and a Trekking Guide</h5>\r\n` +
`                      <p>This distinction is worth understanding. A Sherpa refers to an ethnic and cultural identity. A trekking guide is a profession. A person can be Sherpa and work as a trekking guide. A guide can also come from another Nepali ethnic or regional background. Likewise, not every Sherpa person works in trekking. Using the word correctly shows respect for the community.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Tourism Has Changed Sherpa Society</h5>\r\n` +
`                      <p>Trekking and mountaineering have transformed the Khumbu economy. Tourism has created opportunities for:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Guiding</li>\r\n` +
`                        <li>Lodges</li>\r\n` +
`                        <li>Restaurants</li>\r\n` +
`                        <li>Transport</li>\r\n` +
`                        <li>Retail</li>\r\n` +
`                        <li>Education</li>\r\n` +
`                        <li>International business</li>\r\n` +
`                        <li>Expedition work</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>It has also brought challenges:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Waste</li>\r\n` +
`                        <li>Pressure on resources</li>\r\n` +
`                        <li>Seasonal labor demands</li>\r\n` +
`                        <li>Rising costs</li>\r\n` +
`                        <li>Environmental pressure</li>\r\n` +
`                        <li>Cultural change</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A responsible trekker should recognize both sides. Tourism is an important economic engine for the region, but the mountains and communities supporting it are not unlimited resources.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Not to Do in Sherpa Villages</h5>\r\n` +
`                      <p>These are the things you should Avoid:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Entering private homes without permission</li>\r\n` +
`                        <li>Taking photographs of people without asking</li>\r\n` +
`                        <li>Touching religious objects unnecessarily</li>\r\n` +
`                        <li>Climbing onto monuments</li>\r\n` +
`                        <li>Moving prayer flags</li>\r\n` +
`                        <li>Walking through agricultural fields</li>\r\n` +
`                        <li>Leaving rubbish</li>\r\n` +
`                        <li>Making fun of religious practices</li>\r\n` +
`                        <li>Treating children as tourist attractions</li>\r\n` +
`                        <li>Giving sweets indiscriminately</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>These may seem like small things. Respect in the mountains is mostly made up of small things.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Photography Etiquette on the EBC Trek</h5>\r\n` +
`                      <p>The Everest Base Camp Trek is incredibly photogenic, but photography needs context. Before photographing:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>A monk</li>\r\n` +
`                        <li>A village resident</li>\r\n` +
`                        <li>A child</li>\r\n` +
`                        <li>A religious ceremony</li>\r\n` +
`                        <li>A private home</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>ask permission.</p>\r\n` +
`                      <p>Walk clockwise around religious structures where appropriate, keep mani walls on your right, ask before photographing people or ceremonies, and follow monastery instructions. Sherpa is an ethnic identity: it should not be used as a generic label for every guide or porter. Local festivals follow traditional calendars, so confirm dates for the year you travel.</p>\r\n                    `;

// Item 9
const item9Content = `\r\n` +
`                      <p>The standard route in this package starts at Lukla, continues through Phakding, Namche, Tengboche, Dingboche, Lobuche and Gorak Shep, visits Kala Patthar and Base Camp, then returns through Pheriche, Namche and Lukla. Alternative itineraries change the required time, altitude exposure, terrain, permits and preparation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Choose a Short EBC Itinerary?</h5>\r\n` +
`                      <p>A shorter itinerary makes more sense when:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>You have limited vacation time</li>\r\n` +
`                        <li>You still want to walk to Base Camp</li>\r\n` +
`                        <li>You are willing to pay more for helicopter logistics</li>\r\n` +
`                        <li>You understand that weather can still affect the flight</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>It makes less sense when the only reason is: “I want to reach Everest as quickly as possible.” High altitude rewards patience. If the shortened itinerary removes essential acclimatization, the saving in days may not be worth the additional physiological stress.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">EBC With Gokyo Lakes</h5>\r\n` +
`                      <p>Adding Gokyo Valley turns the trip into a broader exploration of the Everest region. Instead of seeing only the main Khumbu valley, you move west toward a quieter valley containing a chain of glacial lakes. Nepal Tourism Board describes Gokyo as a high Himalayan valley with turquoise glacial lakes and spectacular views toward Cho Oyu, Everest, Lhotse and Makalu. The Gokyo option is particularly attractive to trekkers who want:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>More varied landscapes</li>\r\n` +
`                        <li>Glacial lakes</li>\r\n` +
`                        <li>Fewer trekkers than the main EBC corridor</li>\r\n` +
`                        <li>Different mountain viewpoints</li>\r\n` +
`                        <li>A more complete Everest-region experience</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Gokyo Ri vs Kala Patthar</h5>\r\n` +
`                      <p>These two viewpoints are often compared. Kala Patthar gives an iconic close perspective toward Everest and the surrounding peaks. Gokyo Ri offers a broader panorama across several major Himalayan peaks and the Gokyo lakes.</p>\r\n` +
`                      <p>Nepal Tourism Board notes that the panorama from Gokyo Ri extends toward Cho Oyu, Everest, Lhotse and Makalu and describes it as arguably broader than the view from above Gorak Shep.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">EBC via Cho La Pass</h5>\r\n` +
`                      <p>Adding Cho La Pass is a very different proposition. You are no longer simply extending the classic trek. You are adding a high mountain pass. The route connects the Gokyo and Khumbu valleys, and Nepal Tourism Board identifies Cho La as one of the high passes linking Gokyo with the main Everest trail near Lobuche. This route requires:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Better physical preparation</li>\r\n` +
`                        <li>Greater comfort with steep terrain</li>\r\n` +
`                        <li>More tolerance for variable conditions</li>\r\n` +
`                        <li>Additional days</li>\r\n` +
`                        <li>A guide experienced with the route</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>It is not the first alternative I would recommend to someone whose primary goal is simply to experience Everest Base Camp for the first time. It is better suited to trekkers who want a more demanding Himalayan journey.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Three Passes Trek With Everest Base Camp</h5>\r\n` +
`                      <p>The Three Passes Trek is one of the most demanding trekking routes in the Everest region. It incorporates high passes such as:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Renjo La</li>\r\n` +
`                        <li>Cho La</li>\r\n` +
`                        <li>Kongma La</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>along with major valleys and viewpoints of the Khumbu.</p>\r\n` +
`                      <p>Nepal Tourism Board includes Three Passes among the Everest-region trekking routes covered by the current guide/TIMS framework. This is not simply a “longer EBC trek.” It is a significantly more demanding expedition-style trekking itinerary involving:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>More high-altitude days</li>\r\n` +
`                        <li>Higher passes</li>\r\n` +
`                        <li>More technical sections depending on conditions</li>\r\n` +
`                        <li>Greater weather exposure</li>\r\n` +
`                        <li>More demanding navigation</li>\r\n` +
`                        <li>Longer recovery requirements</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For experienced trekkers, it can be extraordinary. For a beginner who only wants Everest Base Camp, it is unnecessary.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">EBC With Island Peak</h5>\r\n` +
`                      <p>Another possibility is combining the trek with Island Peak, also known as Imja Tse. This moves the experience from trekking toward peak climbing. Even though Island Peak is often described as a trekking peak, it is still a climbing objective requiring specialized equipment, technical preparation and appropriate guides. This option is suitable for trekkers who want to add:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Basic mountaineering experience</li>\r\n` +
`                        <li>Glacier and rope skills</li>\r\n` +
`                        <li>A summit objective</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>to their EBC journey. It should never be added casually because you happen to be in the Everest region. Climbing is a different discipline from trekking.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">EBC With Lobuche Peak</h5>\r\n` +
`                      <p>Lobuche Peak is another possible extension for experienced trekkers who want a climbing objective. The mountain adds a technical component and substantially changes the level of preparation required.</p>\r\n` +
`                      <p>A standard EBC trekker should not assume: “I can walk to Base Camp, so I can climb Lobuche Peak.” Those are different challenges. If you are considering a peak-climbing extension, discuss the technical requirements with a qualified climbing operator before booking.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Jiri to Everest Base Camp</h5>\r\n` +
`                      <p>The Jiri-to-Everest approach is historically significant because it follows the traditional overland/trekking approach used before the regular Lukla flight became the standard access route.</p>\r\n` +
`                      <p>Nepal Tourism Board notes that trekking from Jiri gives travelers a chance to follow the route associated with the early Everest expeditions and provides a much longer, more gradual approach with additional interaction with communities and landscapes along the way. This route adds substantial time. That is its disadvantage. It is also its strength. You get:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>More gradual acclimatization</li>\r\n` +
`                        <li>More lower-Himalaya villages</li>\r\n` +
`                        <li>More cultural transition</li>\r\n` +
`                        <li>More walking</li>\r\n` +
`                        <li>A stronger sense of journey</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For trekkers who have three weeks or more available, it can be a beautiful alternative to flying directly to Lukla.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Everest View Trek: A Shorter Everest Experience</h5>\r\n` +
`                      <p>If your priority is to experience the Everest region without reaching Base Camp, the Everest View Trek is another option. The route focuses more heavily on:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Namche Bazaar</li>\r\n` +
`                        <li>Syangboche</li>\r\n` +
`                        <li>Khumjung</li>\r\n` +
`                        <li>Tengboche</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and surrounding Himalayan viewpoints. It is substantially shorter than the EBC trek and does not take you to 5,364 m. This can be a sensible alternative for travelers who:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Have limited time</li>\r\n` +
`                        <li>Do not want extreme altitude</li>\r\n` +
`                        <li>Prefer a shorter hike</li>\r\n` +
`                        <li>Want Sherpa culture and Everest views</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The current Nepal Tourism Board TIMS guidance lists Everest View Trek among the Everest-region routes covered by the guide/TIMS requirement.</p>\r\n` +
`\r\n` +
`                      <div class="guide-data-table-wrap" style="margin: 20px 0 24px 0;">\r\n` +
`                        <table class="guide-data-table">\r\n` +
`                          <thead>\r\n` +
`                            <tr>\r\n` +
`                              <th style="min-width: 160px;">Alternative</th>\r\n` +
`                              <th>Why choose it?</th>\r\n` +
`                              <th>What changes?</th>\r\n` +
`                            </tr>\r\n` +
`                          </thead>\r\n` +
`                          <tbody>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>EBC with Gokyo Lakes</strong></td>\r\n` +
`                              <td>A wider Khumbu journey and lake scenery</td>\r\n` +
`                              <td>More days and a different altitude profile</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Cho La connection</strong></td>\r\n` +
`                              <td>Link the Gokyo and EBC valleys</td>\r\n` +
`                              <td>High-pass conditions and greater route demands</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Three Passes with EBC</strong></td>\r\n` +
`                              <td>A longer, demanding circuit</td>\r\n` +
`                              <td>Additional high crossings, preparation and weather decisions</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Jiri / Solu approach</strong></td>\r\n` +
`                              <td>A longer approach through lower settlements</td>\r\n` +
`                              <td>Extra travel and trekking days; actual access must be checked</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Island Peak or Lobuche Peak</strong></td>\r\n` +
`                              <td>Add a mountaineering objective</td>\r\n` +
`                              <td>Technical preparation, separate permits, equipment and climbing support</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Helicopter return</strong></td>\r\n` +
`                              <td>Shorten the return walk after trekking up</td>\r\n` +
`                              <td>Higher cost, weight limits and weather-dependent aviation</td>\r\n` +
`                            </tr>\r\n` +
`                            <tr>\r\n` +
`                              <td><strong>Everest View trek</strong></td>\r\n` +
`                              <td>A shorter Khumbu experience</td>\r\n` +
`                              <td>Does not reach Everest Base Camp</td>\r\n` +
`                            </tr>\r\n` +
`                          </tbody>\r\n` +
`                        </table>\r\n` +
`                      </div>\r\n` +
`\r\n` +
`                      <p>Choose according to your time, previous experience and main goal. Do not trade away acclimatization to fit a longer route into a short holiday. Helicopter details and post-trek Nepal extensions have their own sections below.</p>\r\n                    `;

const updates = [
  { itemNum: 4, content: item4Content },
  { itemNum: 5, content: item5Content },
  { itemNum: 6, content: item6Content },
  { itemNum: 7, content: item7Content },
  { itemNum: 8, content: item8Content },
  { itemNum: 9, content: item9Content },
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
console.log('Successfully completed Batch 1 (Items 4-9) updates in', filePath);
