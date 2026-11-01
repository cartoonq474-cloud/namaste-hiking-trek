const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const origHtml = fs.readFileSync(filePath, 'utf8');

const item1HeaderIdx = origHtml.indexOf('<!-- Item 1: Accommodation -->');
const item1ContentInnerStart = origHtml.indexOf('<div class="detail-accordion-content-inner">', item1HeaderIdx) + '<div class="detail-accordion-content-inner">'.length;
const item1ContentInnerEnd = origHtml.indexOf('</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Item 2:', item1ContentInnerStart);

if (item1HeaderIdx === -1 || item1ContentInnerStart === -1 || item1ContentInnerEnd === -1) {
  console.error('ERROR: Markers not found!');
  process.exit(1);
}

const newInnerContent = `\r\n` +
`                      <p>The accommodation moves from a Kathmandu hotel to locally operated mountain teahouses. Standards vary by village, property and altitude. Most standard rooms are twin-sharing, and upper Khumbu lodges have fewer facilities than those around Lukla or Namche.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What to expect in Kathmandu for Accommodation?</h5>\r\n` +
`                      <p>Your Kathmandu accommodation is a completely different experience from the teahouses. The standard pre- and post-trek stay is normally in a tourist-standard hotel, often around Thamel, where you are close to restaurants, trekking shops, cafés, ATMs and other services. Nepal Tourism Board notes that Kathmandu has accommodation ranging from international-standard hotels to budget hotels and lodges, with Thamel being one of the main areas used by tourists. A Kathmandu hotel generally provides:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Private bathroom</li>\r\n` +
`                        <li>Hot shower</li>\r\n` +
`                        <li>Comfortable bed</li>\r\n` +
`                        <li>Electricity</li>\r\n` +
`                        <li>Wi-Fi</li>\r\n` +
`                        <li>Luggage storage</li>\r\n` +
`                        <li>Breakfast, depending on the package</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This is also where you can recover before entering the mountains and enjoy a proper shower after returning from the Everest region. After nearly two weeks in mountain accommodation, the contrast is noticeable.</p>\r\n` +
`                      <p>The source package includes two Kathmandu nights. Ask about early arrival, additional contingency nights, the single supplement, breakfast and luggage storage before assuming those services are included.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What to expect in a teahouse in the EBC Trek</h5>\r\n` +
`                      <p>A teahouse is like a simple guest house on the Everest Base Camp hike. It provides trekkers with accommodation, meals, and a place to socialize. These provide pretty basic accommodation, either in twin rooms or in dormitories. Toilets and bathrooms are shared, with either a Western-style toilet or a squat-style toilet.</p>\r\n` +
`                      <p>Showers normally only have cold water; you will be expected to pay for it in those with hot water on offer. The sleeping rooms consist of beds, blankets, and not much else. Bringing your own sleeping bag is always recommended. There are no 'single rooms' unless it is off-season, and you are lucky. Sharing a room is perfectly normal. There is no heating in the sleeping rooms.</p>\r\n` +
`                      <p>Some sort of stove usually warms the dining area. Light is provided by solar. Most teahouses have the ability to charge your gadgets, for which you have to pay. Breakfast and dinner are taken in the teahouses at communal tables where you can discuss the day’s journey with others.</p>\r\n` +
`                      <p>Some Everest Base Camp trek menus offer a variety of food. Boiled water is usually available, rather than in plastic bottles, which hurts the environment. There is a small charge for boiled water. Bringing your own sterilization tablets/ life straw is a good idea.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is a Teahouse on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>A teahouse is essentially a simple mountain guesthouse. It normally provides:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>A sleeping room</li>\r\n` +
`                        <li>Beds and bedding</li>\r\n` +
`                        <li>A dining room</li>\r\n` +
`                        <li>Meals</li>\r\n` +
`                        <li>Drinking water</li>\r\n` +
`                        <li>Basic toilet facilities</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and, depending on the location:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Hot showers</li>\r\n` +
`                        <li>Electricity</li>\r\n` +
`                        <li>Wi-Fi</li>\r\n` +
`                        <li>Charging</li>\r\n` +
`                        <li>Small shops or other services</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The exact facilities vary from lodge to lodge. There is no single standardized “EBC teahouse”. A lodge in Namche can have significantly more facilities than a small lodge in Lobuche. That difference becomes increasingly noticeable as you gain altitude.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Are the Teahouses Like at Different Elevations?</h5>\r\n` +
`                      <p>One of the biggest accommodation mistakes is assuming that all teahouses look the same. They do not.</p>\r\n` +
`                      <p><strong>Lukla and Phakding:</strong><br>You generally have more choice. Rooms can be relatively comfortable. Bathrooms and showers may be easier to access. Food options are broader. Electricity and communication are more convenient.</p>\r\n` +
`                      <p><strong>Namche Bazaar:</strong><br>Namche has some of the most developed accommodation infrastructure on the route. You can find:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Hotels</li>\r\n` +
`                        <li>Comfortable lodges</li>\r\n` +
`                        <li>Private rooms</li>\r\n` +
`                        <li>Attached or more convenient bathroom arrangements in some properties</li>\r\n` +
`                        <li>Restaurants and cafés</li>\r\n` +
`                      </ul>\r\n` +
`                      <p><strong>Tengboche and Pangboche:</strong><br>The environment becomes quieter and more basic. The emphasis is more on:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Warm dining rooms</li>\r\n` +
`                        <li>Simple bedrooms</li>\r\n` +
`                        <li>Mountain atmosphere</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>rather than hotel-style facilities.</p>\r\n` +
`                      <p><strong>Dingboche:</strong><br>You are now clearly in a high-altitude environment. Rooms are simple. The dining room becomes increasingly important because that is where people gather, eat and stay warm.</p>\r\n` +
`                      <p><strong>Lobuche and Gorak Shep:</strong><br>This is where your expectations need to change. Accommodation is basic. Rooms are cold. Bathrooms are usually shared. The dining room becomes the social and warming centre of the lodge. That is completely normal at this altitude.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Kind of Room Will You Get?</h5>\r\n` +
`                      <p>The standard setup is generally a twin-sharing room. You can expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Two beds</li>\r\n` +
`                        <li>Mattress</li>\r\n` +
`                        <li>Pillow</li>\r\n` +
`                        <li>Blanket or bedding</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and not much else. Some rooms may have:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Small tables</li>\r\n` +
`                        <li>Hooks</li>\r\n` +
`                        <li>Basic lighting</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>but do not expect wardrobes, desks or hotel-style storage. Your duffle usually arrives separately with your porter. You therefore keep your essential daytime equipment in your daypack.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are the Rooms Private?</h5>\r\n` +
`                      <p>Twin-sharing is the standard arrangement. Some lodges in lower sections of the route may have: Single rooms, Private rooms or more comfortable room configurations. However, availability becomes increasingly limited as you gain altitude, especially during busy trekking periods.</p>\r\n` +
`                      <p>Above the more developed settlements, room-sharing may simply be part of the trekking experience. If you are traveling with a friend or partner, we can normally arrange for you to share together where possible. If you are traveling as part of a group, room allocation depends on: Availability, Group size, Number of rooms, Season and The lodge's capacity</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Get a Private Room on the EBC Trek?</h5>\r\n` +
`                      <p>Sometimes. It is much easier to request a private room in: Lukla, Phakding, Namche Bazaar and some lower villages. As you move higher, private rooms become much harder to guarantee.</p>\r\n` +
`                      <p>During peak season, teahouses are busy and the available rooms may already be allocated. At Lobuche and Gorak Shep, the priority is often simply having a suitable bed for everyone. So if having your own room is important, tell your trekking company before departure. Do not assume it will automatically be possible at 5,000 meters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can Couples Get the Same Room?</h5>\r\n` +
`                      <p>Usually, yes, when appropriate rooms are available. For couples traveling together, we generally try to arrange: Twin beds in the same room or A private room where available and requested</p>\r\n` +
`                      <p>But the higher-altitude lodges have limited inventory. A couple should therefore be comfortable with the possibility that accommodation availability may require some flexibility.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Sleeping in a Teahouse Actually Like?</h5>\r\n` +
`                      <p>The first night can feel unusual. You have:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>A simple bed</li>\r\n` +
`                        <li>A sleeping bag</li>\r\n` +
`                        <li>Cold walls</li>\r\n` +
`                        <li>A wooden or stone lodge</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and other trekkers somewhere nearby.</p>\r\n` +
`                      <p>You may hear:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Doors opening</li>\r\n` +
`                        <li>Footsteps</li>\r\n` +
`                        <li>People talking</li>\r\n` +
`                        <li>Water running</li>\r\n` +
`                        <li>Someone waking up early</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and occasionally a snorer through the wall.</p>\r\n` +
`                      <p>This is part of teahouse trekking. An earplug can be one of the most useful five-dollar items in your entire packing list.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are Teahouse Rooms Heated?</h5>\r\n` +
`                      <p>Generally, sleeping rooms are not heated. This is an important distinction. The dining room is where the main warmth usually is. There may be a:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Wood-burning stove</li>\r\n` +
`                        <li>Yak-dung fuel stove</li>\r\n` +
`                        <li>Other heating system</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>depending on location.</p>\r\n` +
`                      <p>The sleeping room itself can be very cold, particularly at high elevation. This is why your: Sleeping bag, Thermal base layer, Warm socks and Down jacket matter so much.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why the Dining Room Becomes the Centre of the Teahouse</h5>\r\n` +
`                      <p>At lower elevations, your room can be comfortable enough that you spend time there. At higher elevations, everyone naturally migrates toward the dining room. There is usually:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>A central stove</li>\r\n` +
`                        <li>Tables</li>\r\n` +
`                        <li>Benches</li>\r\n` +
`                        <li>Tea</li>\r\n` +
`                        <li>Food</li>\r\n` +
`                        <li>Conversation</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This is where trekkers warm their hands, dry clothing, charge devices, play cards and talk about the next day's route.</p>\r\n` +
`                      <p>You can walk into a dining room at 6 PM with people from five different countries and, within twenty minutes, everyone is discussing:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>How cold Gorak Shep was</li>\r\n` +
`                        <li>How long Kala Patthar took</li>\r\n` +
`                        <li>Whether the weather will clear tomorrow</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>That social atmosphere is one of the defining parts of a teahouse trek.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Warm Are the Dining Rooms?</h5>\r\n` +
`                      <p>They are warm relative to the outside. Do not expect a centrally heated hotel lobby. The stove generally creates a warm area around which people gather. The farther you sit from the stove, the more you notice the cold. This makes clothing important even indoors. A fleece or down jacket is often your dining-room clothing above 4,000 meters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Are the Beds Like?</h5>\r\n` +
`                      <p>Beds are usually simple but adequate.</p>\r\n` +
`                      <p>Expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Wooden or metal bed frames</li>\r\n` +
`                        <li>Mattress</li>\r\n` +
`                        <li>Pillow</li>\r\n` +
`                        <li>Blanket</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The exact mattress quality varies. Some are surprisingly comfortable. Others are simply functional. That is another reason a good sleeping bag and sleeping bag liner are useful.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Bring Your Own Sleeping Bag?</h5>\r\n` +
`                      <p>Yes. We strongly recommend it. Teahouses provide blankets, but your own sleeping bag gives you:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Predictable warmth</li>\r\n` +
`                        <li>Better hygiene</li>\r\n` +
`                        <li>A consistent sleeping environment</li>\r\n` +
`                        <li>Greater comfort at high altitude</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This becomes increasingly important around:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Dingboche</li>\r\n` +
`                        <li>Lobuche</li>\r\n` +
`                        <li>Gorak Shep</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>where rooms can feel extremely cold overnight.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Sleeping Bag Temperature Rating Should You Choose?</h5>\r\n` +
`                      <p>The right rating depends on:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Season</li>\r\n` +
`                        <li>Altitude</li>\r\n` +
`                        <li>Your tolerance to cold</li>\r\n` +
`                        <li>Whether you sleep warm or cold</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A bag suitable for October is not necessarily the same bag you would choose for January.</p>\r\n` +
`                      <p>For a high-altitude EBC trek, choose a properly rated mountain sleeping bag, not a lightweight summer travel bag. If you are renting, ask the rental provider exactly what temperature rating the bag is designed for.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do You Need a Sleeping Bag Liner?</h5>\r\n` +
`                      <p>Not essential, but useful. A liner provides:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Extra warmth</li>\r\n` +
`                        <li>Better hygiene</li>\r\n` +
`                        <li>An additional barrier between you and the sleeping bag</li>\r\n` +
`                        <li>Easier washing</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>It is particularly helpful if you are renting your sleeping bag.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are Blankets Provided?</h5>\r\n` +
`                      <p>Most teahouses provide blankets or bedding. But do not plan on the blanket alone being enough for the coldest nights. At higher elevations, you want your own sleeping system. A blanket can be useful as an additional layer over the sleeping bag rather than the only source of insulation.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are Bathrooms Private?</h5>\r\n` +
`                      <p>Usually not. Shared bathrooms are common on the EBC route. Depending on the lodge, you may encounter:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Western-style toilets</li>\r\n` +
`                        <li>Squat toilets</li>\r\n` +
`                        <li>Shared bathroom blocks</li>\r\n` +
`                        <li>Simple wash areas</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The facilities generally become more basic as you gain elevation. This is one of the biggest differences between a trekking lodge and a city hotel.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Are Toilets Like at Higher Elevations?</h5>\r\n` +
`                      <p>At Lobuche and Gorak Shep, expect basic facilities. The toilet may be:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Small</li>\r\n` +
`                        <li>Cold</li>\r\n` +
`                        <li>Shared</li>\r\n` +
`                        <li>Simple</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>There may also be restrictions on water use depending on the lodge and weather.</p>\r\n` +
`                      <p>Carry your own:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Toilet paper</li>\r\n` +
`                        <li>Hand sanitizer</li>\r\n` +
`                        <li>Small toiletries bag</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Do not assume the toilet will have everything a Kathmandu hotel provides.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Do Teahouses Have Toilet Paper?</h5>\r\n` +
`                      <p>Sometimes. But you should carry your own. This is one of those tiny pieces of advice that sounds unnecessary until you are standing outside a cold mountain bathroom with no toilet paper. Keep a small roll or travel pack in your daypack.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are There Attached Bathrooms?</h5>\r\n` +
`                      <p>At lower elevations, some higher-standard lodges can offer: Attached bathrooms or more private facilities. But this is not standard throughout the EBC trail.</p>\r\n` +
`                      <p>Once you move into the upper Khumbu, shared bathrooms become much more normal. If a private bathroom is essential to you, tell the trekking operator at the time of booking and understand where it may realistically be available.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Accommodation Like in Tengboche?</h5>\r\n` +
`                      <p>Tengboche has a smaller accommodation base than Namche, but its location makes it one of the most memorable overnight stops. Nepal Tourism Board notes that Tengboche has rest houses, lodges and camping sites, and identifies it as one of the principal overnight halts on the Everest route. The appeal is less about luxurious accommodation and more about the setting. You are staying near the monastery with Ama Dablam and the surrounding Himalayan peaks forming the backdrop.</p>\r\n` +
`                      <p>Facilities are basic, but the location is exceptional. This is one of those nights when it is worth stepping outside after dinner, provided weather and conditions allow, and simply looking at the mountains.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Accommodation Like in Dingboche?</h5>\r\n` +
`                      <p>Dingboche marks a substantial transition toward high-altitude accommodation. The village is larger than Lobuche and offers several teahouses, but the facilities are noticeably more basic than in Namche. You spend two nights here, which is valuable for both acclimatization and recovery.</p>\r\n` +
`                      <p>The dining room becomes particularly important because temperatures outside can be very low, while evenings are spent around the communal stove. This is also where you begin to notice that basic conveniences matter differently. A warm drink. A dry pair of socks. A charged phone. A warm sleeping bag. A comfortable meal. At 4,410 meters, those simple things can make a meaningful difference to how you feel the next morning.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Accommodation Like in Lobuche?</h5>\r\n` +
`                      <p>Lobuche, at approximately 4,940 m, is where the accommodation becomes genuinely high altitude. There are fewer lodges, fewer rooms and fewer services. The rooms are basic. The nights are cold. The dining room is often the centre of activity. The environment is exposed, and there is little of the greenery that surrounds lower settlements.</p>\r\n` +
`                      <p>The important thing at Lobuche is not luxury. It is warmth, food, hydration, rest and a safe place to sleep before continuing toward Gorak Shep. Our advice from operating this section of the route is to keep your evening simple. Eat. Drink. Prepare your daypack. Stay warm. Get into your sleeping bag. Do not spend unnecessary energy trying to make the high-altitude night resemble a normal hotel evening.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Accommodation Like in Gorak Shep?</h5>\r\n` +
`                      <p>Gorak Shep, at approximately 5,164 m, has very limited accommodation compared with Namche or Dingboche. Nepal Tourism Board specifically describes Gorak Shep as the last settlement on the trail, with only a few teahouses providing shelter before the final journey to Everest Base Camp. This is important when setting expectations. You should expect:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Very basic rooms</li>\r\n` +
`                        <li>Cold temperatures</li>\r\n` +
`                        <li>Shared facilities</li>\r\n` +
`                        <li>Limited services</li>\r\n` +
`                        <li>A crowded dining room during busy seasons</li>\r\n` +
`                        <li>Shorter periods of comfortable indoor conditions</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Gorak Shep is not a place where you go because you want excellent accommodation. You stay there because its location makes the Everest Base Camp and Kala Patthar excursions possible within the classic itinerary. At this altitude, the mountain location matters far more than the standard of the room.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is the Highest You Sleep on the EBC Trek?</h5>\r\n` +
`                      <p>On the classic itinerary, you normally sleep at Gorak Shep, approximately 5,164 m (16,942 ft). That is higher than Everest Base Camp itself. This distinction surprises many trekkers:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Everest Base Camp: 5,364 m — destination and daytime excursion.</li>\r\n` +
`                        <li>Gorak Shep: ~5,164 m — highest normal sleeping settlement.</li>\r\n` +
`                        <li>Kala Patthar: ~5,545 m — highest viewpoint reached during the trek.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Sleeping at 5,164 m can be difficult even when the accommodation is perfectly adequate. You may sleep lightly, wake frequently or notice changes in your breathing. That is primarily an altitude issue, not necessarily a problem with the teahouse.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Wash Clothes During the EBC Trek?</h5>\r\n` +
`                      <p>Laundry services may be available in larger lower-elevation settlements, but they become increasingly limited as you climb. For a two-week EBC trek, it is more practical to pack quick-drying trekking clothing and rotate layers rather than planning to wash a complete wardrobe every day. Your most important clothing strategy is layering. You need the ability to add or remove:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Base layer</li>\r\n` +
`                        <li>Fleece or mid-layer</li>\r\n` +
`                        <li>Down jacket</li>\r\n` +
`                        <li>Waterproof/windproof outer layer</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This lets you manage the rapidly changing conditions between sunny walking periods, windy ridges and cold evenings.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Luxury lodges on the Everest Base Camp trail</h5>\r\n` +
`                      <p>Yes, but the word luxury needs context. Some lower sections have high-end mountain lodges offering:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Private rooms</li>\r\n` +
`                        <li>Better bathrooms</li>\r\n` +
`                        <li>Higher-end food</li>\r\n` +
`                        <li>More comfortable beds</li>\r\n` +
`                        <li>Modern amenities</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>These can be particularly attractive around:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Lukla</li>\r\n` +
`                        <li>Phakding</li>\r\n` +
`                        <li>Namche</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>and some parts of the lower Khumbu. But the upper route still has geographical limitations. No lodge in Gorak Shep can behave like a city five-star hotel simply because you are willing to pay more.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is a Luxury Lodge Trek?</h5>\r\n` +
`                      <p>A luxury lodge trek generally upgrades accommodation where suitable properties exist. You may get:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Private rooms</li>\r\n` +
`                        <li>Better bedding</li>\r\n` +
`                        <li>Improved bathrooms</li>\r\n` +
`                        <li>More refined meals</li>\r\n` +
`                        <li>Higher service levels</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>It does not eliminate:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Altitude</li>\r\n` +
`                        <li>Cold</li>\r\n` +
`                        <li>Long walking days</li>\r\n` +
`                        <li>Mountain weather</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>You still have to walk the same Himalaya. The luxury applies mainly to what happens when you arrive at the lodge.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Get a Single Room Throughout a Luxury EBC Trek?</h5>\r\n` +
`                      <p>Not necessarily. Even luxury lodge itineraries become constrained by the physical geography of the upper Everest region. You may have excellent private accommodation at lower elevations and more limited options higher up. A responsible operator should tell you that before booking rather than implying that every night will have hotel-standard privacy.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Are There Hot Showers and Electricity on EBC Trek?</h5>\r\n` +
`                      <p>Yes, hot showers are available at many teahouses, particularly at lower and middle elevations, but they are generally an extra-cost service. The cost and availability vary by lodge and altitude. As you climb higher, hot water becomes increasingly expensive because fuel and other supplies must be transported into the mountains.</p>\r\n` +
`                      <p>You may also find that the meaning of “hot shower” changes as you climb. At Namche, a hot shower can feel relatively normal. At Lobuche or Gorak Shep, you may decide that conserving warmth, time and money is a better strategy.</p>\r\n` +
`                      <p>There is another practical consideration: Taking a shower means getting undressed in a cold environment. At high altitude, many trekkers understandably prefer a quick wash and changing into clean base layers rather than taking a full shower every day.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How Much Do Hot Showers Cost?</h5>\r\n` +
`                      <p>Prices vary between lodges and locations, and they generally become more expensive as elevation increases. A practical budget is approximately USD 3–6 per hot shower, but the actual rate should be confirmed at your lodge.</p>\r\n` +
`                      <p>The reason for the increasing cost is straightforward: fuel, water heating and other supplies have to be transported into remote mountain settlements. Do not think of the charge simply as a tourist fee. It reflects the cost of delivering a relatively resource-intensive service in a high-altitude environment.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is There Electricity on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>Yes, but electricity availability becomes less predictable and more limited as you climb. Many teahouses have electrical charging facilities, while some depend on solar power or local micro-hydropower systems. Charging your phone, camera or power bank may involve an additional fee. At lower elevations, the experience can be relatively straightforward. At higher elevations, power may be:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Limited</li>\r\n` +
`                        <li>Slower</li>\r\n` +
`                        <li>Available only during certain periods</li>\r\n` +
`                        <li>Affected by weather or local supply</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>For this reason, we strongly recommend carrying a power bank. Do not make the assumption that you will be able to find a functioning electrical outlet every evening.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Charge Your Phone and Camera?</h5>\r\n` +
`                      <p>Yes. Many teahouses have charging services, particularly along the established route. However, charging availability and reliability vary from lodge to lodge. Your best strategy is to treat electricity as a service that may be available rather than a guaranteed utility.</p>\r\n` +
`                      <p>Keep your devices charged when power is available. Carry a power bank. Avoid unnecessarily draining your phone battery during the day. Use airplane mode or low-power settings when you do not need connectivity.</p>\r\n` +
`                      <p>Your phone is not only a camera. It may also contain:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Emergency contacts</li>\r\n` +
`                        <li>Travel documents</li>\r\n` +
`                        <li>Maps</li>\r\n` +
`                        <li>Booking information</li>\r\n` +
`                        <li>Insurance details</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>That makes battery management a practical safety consideration.</p>\r\n` +
`                      <p>Availability, operating hours and fees vary. Carry a power bank and keep electronics warm. A shower or charging point advertised at one lodge should not be assumed available at every overnight stop. Internet and mobile connectivity are explained under Important Notes.</p>\r\n                    `;

const updatedHtml = origHtml.substring(0, item1ContentInnerStart) + newInnerContent + origHtml.substring(item1ContentInnerEnd);

fs.writeFileSync(filePath, updatedHtml, 'utf8');
console.log('Successfully wrote updated Accommodation HTML to', filePath);
