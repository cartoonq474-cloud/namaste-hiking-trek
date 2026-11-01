const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const origHtml = fs.readFileSync(filePath, 'utf8');

const item2HeaderIdx = origHtml.indexOf('<!-- Item 2: Available Food -->');
const item2ContentInnerStart = origHtml.indexOf('<div class="detail-accordion-content-inner">', item2HeaderIdx) + '<div class="detail-accordion-content-inner">'.length;
const item2ContentInnerEnd = origHtml.indexOf('</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Item 3:', item2ContentInnerStart);

if (item2HeaderIdx === -1 || item2ContentInnerStart === -1 || item2ContentInnerEnd === -1) {
  console.error('ERROR: Markers not found!');
  process.exit(1);
}

const newInnerContent = `\r\n` +
`                      <p>Food becomes much more important once you start walking for several hours a day at altitude. On the Everest Base Camp Trek, you do not need to carry two weeks of food. The classic route is supported by a network of mountain teahouses and lodges where trekkers can order breakfast, lunch, dinner and hot drinks throughout the journey.</p>\r\n` +
`                      <p>The food is generally simple rather than sophisticated, but there is much more variety than many first-time trekkers expect. In Lukla and Namche Bazaar, menus can include everything from traditional Nepali dishes to pasta, pizza, momos, noodles, pancakes and bakery items. Higher in the Khumbu, the menu becomes narrower as transporting ingredients becomes harder, but staple meals such as dal bhat, soups, potatoes, rice, noodles and pasta remain readily available.</p>\r\n` +
`                      <p>Our practical advice after spending time on the route is simple: Eat enough, choose familiar food, keep meals reasonably simple at high altitude, and do not underestimate how much energy several consecutive trekking days require.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Food Is Available During the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>The standard EBC trek food menu is a mixture of traditional Nepali, Sherpa and Tibetan-influenced dishes alongside familiar Western-style trekking food. Depending on the village and teahouse, you can expect:</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Dal Bhat: The Trekker's Staple</h5>\r\n` +
`                      <p>If there is one meal that deserves special attention on the Everest Base Camp route, it is dal bhat. Dal bhat traditionally combines:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Rice</li>\r\n` +
`                        <li>Lentil soup</li>\r\n` +
`                        <li>Vegetable curry</li>\r\n` +
`                        <li>Pickles or achar</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Additional side dishes may also be included depending on the teahouse. It is filling, familiar to local trekking crews and available throughout much of Nepal. One practical advantage is that dal bhat is often refillable, depending on the teahouse. That matters after a long day of climbing.</p>\r\n` +
`                      <p>By the time you return to the lodge after walking from Tengboche to Dingboche, climbing toward Kala Patthar or descending from the upper Khumbu, a simple plate of rice, lentils and vegetables can be much more satisfying than a small snack.</p>\r\n` +
`                      <p>Our guides and porters regularly choose dal bhat themselves because it is practical trekking food. It is not glamorous. It is useful. And on the trail, usefulness matters.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Do You Eat for Breakfast on the EBC Trek?</h5>\r\n` +
`                      <p>Breakfast usually needs to provide enough energy for the first major walking period of the day. Common options include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Porridge</li>\r\n` +
`                        <li>Muesli</li>\r\n` +
`                        <li>Oatmeal</li>\r\n` +
`                        <li>Eggs</li>\r\n` +
`                        <li>Tibetan bread</li>\r\n` +
`                        <li>Toast</li>\r\n` +
`                        <li>Pancakes</li>\r\n` +
`                        <li>Chapati</li>\r\n` +
`                        <li>Potatoes</li>\r\n` +
`                        <li>Tea</li>\r\n` +
`                        <li>Coffee</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A common combination is eggs with bread or potatoes, followed by tea or coffee. At high altitude, a large heavy breakfast is not always comfortable. A better strategy is to eat something that you know your stomach tolerates and then carry snacks to supplement your energy during the walking day. Your guide or lodge team will generally encourage you to eat early because morning departures are important on the high-altitude route.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Do You Eat for Lunch?</h5>\r\n` +
`                      <p>Lunch is usually taken at a teahouse or lodge along the route rather than waiting until you reach the overnight destination. Depending on the day's route, lunch may be at a small village or a teahouse positioned at an important rest point. Common lunch choices include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Dal bhat</li>\r\n` +
`                        <li>Fried rice</li>\r\n` +
`                        <li>Fried noodles</li>\r\n` +
`                        <li>Momos</li>\r\n` +
`                        <li>Thukpa</li>\r\n` +
`                        <li>Soup</li>\r\n` +
`                        <li>Pasta</li>\r\n` +
`                        <li>Potatoes</li>\r\n` +
`                        <li>Egg dishes</li>\r\n` +
`                        <li>Tibetan bread</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>A good lunch is not simply about enjoying the food. It also provides the opportunity to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Rest your legs</li>\r\n` +
`                        <li>Refill your water</li>\r\n` +
`                        <li>Add calories</li>\r\n` +
`                        <li>Warm up</li>\r\n` +
`                        <li>Adjust layers</li>\r\n` +
`                        <li>Use the bathroom</li>\r\n` +
`                        <li>Discuss the next part of the trail with your guide</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>On difficult days, this break becomes an important part of managing your energy.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Do You Eat for Dinner?</h5>\r\n` +
`                      <p>Dinner is generally your largest and most relaxed meal of the day. By then, you have already completed most of the walking and can focus on recovery.</p>\r\n` +
`                      <p>Typical evening dishes include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Dal bhat</li>\r\n` +
`                        <li>Sherpa stew</li>\r\n` +
`                        <li>Thukpa</li>\r\n` +
`                        <li>Fried rice</li>\r\n` +
`                        <li>Fried noodles</li>\r\n` +
`                        <li>Pasta</li>\r\n` +
`                        <li>Pizza</li>\r\n` +
`                        <li>Momos</li>\r\n` +
`                        <li>Potatoes</li>\r\n` +
`                        <li>Soup</li>\r\n` +
`                        <li>Vegetable curry</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>At higher elevations, our preference is usually for something warm, reasonably simple and filling. A bowl of soup followed by dal bhat or another carbohydrate-rich meal can be much more appealing in the cold upper Khumbu than a complicated meal.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Sherpa Food Like?</h5>\r\n` +
`                      <p>Sherpa food varies between communities and families, but the Everest region has a strong Tibetan and Himalayan culinary influence. You may encounter:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Sherpa stew</li>\r\n` +
`                        <li>Thukpa</li>\r\n` +
`                        <li>Momos</li>\r\n` +
`                        <li>Potato dishes</li>\r\n` +
`                        <li>Tibetan bread</li>\r\n` +
`                        <li>Butter tea</li>\r\n` +
`                        <li>Tsampa-based foods</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The food culture reflects the geography of the region. Warm, filling meals based on grains, potatoes and other available ingredients make practical sense in a cold mountain environment.</p>\r\n` +
`                      <p>Trying local dishes is one of the simplest ways to make the trek more culturally meaningful.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Are Momos?</h5>\r\n` +
`                      <p>Momos are steamed or cooked dumplings that are extremely popular throughout Nepal and the Himalaya. They may be filled with:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Vegetables</li>\r\n` +
`                        <li>Cheese</li>\r\n` +
`                        <li>Potato</li>\r\n` +
`                        <li>Meat</li>\r\n` +
`                        <li>Or other locally available ingredients.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>On the EBC trail, vegetarian momos are a particularly common choice. After a long walking day, a plate of hot momos can be one of the most satisfying snacks you can order.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Is Thukpa?</h5>\r\n` +
`                      <p>Thukpa is a Tibetan-style noodle soup that is particularly useful on cold evenings. It typically combines:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Noodles</li>\r\n` +
`                        <li>Vegetables</li>\r\n` +
`                        <li>Broth</li>\r\n` +
`                        <li>And sometimes egg, meat or other ingredients.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The warm broth makes it popular at altitude, especially when you return to a cold teahouse after several hours outside. It is one of the meals that feels much better in the Himalaya than it might on a restaurant menu at sea level. The best approach is variety rather than trying to recreate your normal city diet every evening.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is Vegetarian Food Available on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>Yes. Vegetarian food is widely available throughout the classic route. Common vegetarian meals include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Dal bhat</li>\r\n` +
`                        <li>Vegetable fried rice</li>\r\n` +
`                        <li>Vegetable noodles</li>\r\n` +
`                        <li>Vegetable momo</li>\r\n` +
`                        <li>Potato dishes</li>\r\n` +
`                        <li>Vegetable soups</li>\r\n` +
`                        <li>Pasta</li>\r\n` +
`                        <li>Pizza</li>\r\n` +
`                        <li>Egg dishes</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>When booking, tell your trekking operator and guide about your dietary requirements. Vegetarian diets are generally straightforward to accommodate because many of the basic teahouse dishes already have vegetarian versions.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is Vegan Food Available on the EBC Trek?</h5>\r\n` +
`                      <p>Vegan food can be arranged, but it requires more attention than a standard vegetarian diet. Some foods that appear vegetarian may still contain:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Butter</li>\r\n` +
`                        <li>Ghee</li>\r\n` +
`                        <li>Milk</li>\r\n` +
`                        <li>Cheese</li>\r\n` +
`                        <li>Yogurt</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Trekkers following a strict vegan diet should tell the operator in advance so that the guide and teahouses can identify suitable options. Simple dishes such as:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Dal</li>\r\n` +
`                        <li>Rice</li>\r\n` +
`                        <li>Vegetable curry</li>\r\n` +
`                        <li>Vegetable noodles</li>\r\n` +
`                        <li>Vegetable fried rice</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>can often be adapted, but ingredients and preparation methods vary between lodges. Do not assume that “vegetarian” automatically means vegan.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Gluten-Free Food?</h5>\r\n` +
`                      <p>Gluten-free trekking can be more complicated because bread, noodles, pasta and many common teahouse staples contain wheat. If you have celiac disease or a medically necessary gluten-free diet, tell your trekking company well before departure.</p>\r\n` +
`                      <p>Rice, potatoes, some vegetables, eggs and other naturally gluten-free foods can provide alternatives, but cross-contamination and ingredient availability must be considered. For medically necessary dietary restrictions, it is sensible to carry some familiar backup foods from Kathmandu.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What About Food Allergies?</h5>\r\n` +
`                      <p>Food allergies should be communicated clearly before the trek begins. Do not rely only on a general statement such as “I have an allergy.” Tell your guide:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>What ingredient causes the reaction</li>\r\n` +
`                        <li>How serious the reaction is</li>\r\n` +
`                        <li>Which foods you must avoid</li>\r\n` +
`                        <li>What medication you carry</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>If you have a severe allergy, bring the medication prescribed by your healthcare professional and keep it accessible in your daypack. Because mountain teahouses operate in relatively simple kitchens, ingredient separation is not equivalent to a specialized allergy-certified restaurant.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Eat Meat on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>You will see meat on some teahouse menus, particularly at lower elevations. However, our practical preference is to be cautious with meat as you move higher. Food-storage conditions become more limited at altitude, and refrigeration capacity is not comparable to a city restaurant.</p>\r\n` +
`                      <p>Vegetarian meals, dal bhat, soups, rice, potatoes and other cooked foods are often simpler choices. This is not because all meat on the trail is unsafe. It is because food handling, freshness and storage matter more as you move farther from reliable refrigeration and supply infrastructure. When in doubt, choose food that is:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Freshly prepared</li>\r\n` +
`                        <li>Properly cooked</li>\r\n` +
`                        <li>Served hot</li>\r\n` +
`                      </ul>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Food Hygiene on the EBC Trek</h5>\r\n` +
`                      <p>The basic rule we recommend is: Eat cooked food that is served hot. Some additional practical habits help:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Wash or sanitize your hands before eating.</li>\r\n` +
`                        <li>Avoid untreated drinking water.</li>\r\n` +
`                        <li>Be careful with raw foods if you are unsure how they were washed.</li>\r\n` +
`                        <li>Avoid food that has clearly been sitting out for long periods.</li>\r\n` +
`                        <li>Choose busy teahouses when possible.</li>\r\n` +
`                        <li>Do not experiment with unfamiliar food immediately before a difficult high-altitude day.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The last point is surprisingly important. A digestive problem at 4,900 meters is much more inconvenient than one in Kathmandu.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is the Food Safe on the Everest Base Camp Trek?</h5>\r\n` +
`                      <p>Food safety standards vary between individual lodges. The established trekking route has years of experience serving international trekkers, and many teahouses operate efficiently during the main seasons. Still, you are travelling through a remote mountain environment.</p>\r\n` +
`                      <p>The safest practical approach is to:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Choose well-cooked food</li>\r\n` +
`                        <li>Eat meals served hot</li>\r\n` +
`                        <li>Keep hands clean</li>\r\n` +
`                        <li>Drink treated water</li>\r\n` +
`                        <li>Use reputable teahouses</li>\r\n` +
`                        <li>Tell your guide immediately if you become unwell</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>Do not ignore persistent vomiting or severe gastrointestinal symptoms at altitude. Dehydration can make a difficult trekking day significantly harder and can complicate an already demanding altitude environment.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Is Tap Water Safe to Drink on the EBC Trek?</h5>\r\n` +
`                      <p>You should not assume untreated tap or stream water is safe to drink. Water sources may be available throughout the route, but they should be appropriately treated before consumption. Common options include:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Water purification tablets</li>\r\n` +
`                        <li>Water filters</li>\r\n` +
`                        <li>Purification pumps</li>\r\n` +
`                        <li>UV treatment</li>\r\n` +
`                        <li>Boiled water purchased from teahouses</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>The best method depends on your equipment and personal preference. The key principle is: Treat the water before drinking it.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Buy Bottled Water?</h5>\r\n` +
`                      <p>Bottled water is widely available along parts of the route, but it becomes increasingly expensive as altitude increases. There is also an environmental reason to minimize single-use plastic.</p>\r\n` +
`                      <p>Carrying a reusable bottle and using treated or boiled water is generally the better approach. Many trekkers carry two bottles so they can maintain enough water for the day's route. An insulated bottle can also be useful because hot water can help warm the sleeping bag at night.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Appetite Changes at High Altitude</h5>\r\n` +
`                      <p>It is common for trekkers to notice that food becomes less appealing as they move higher. The problem is that your energy requirements remain significant. Walking for several hours every day uses energy. Cold conditions also increase the challenge of maintaining warmth. This creates a situation where:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Your appetite can decrease</li>\r\n` +
`                        <li>While your energy needs remain high.</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>That is why your guide may encourage you to eat even when you do not feel particularly hungry. Simple, familiar food is often easier to manage.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Should You Eat Garlic Soup for Altitude?</h5>\r\n` +
`                      <p>Garlic soup is widely available and extremely popular with trekkers. You will hear many traditional claims about garlic being an “altitude remedy.” It is important not to confuse a popular trekking food with a medically proven treatment for altitude sickness. Garlic soup is:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Warm</li>\r\n` +
`                        <li>Comforting</li>\r\n` +
`                        <li>Easy to find</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>And can be part of a normal meal. But it should not be considered a treatment or prevention strategy for AMS. The real protective measures are gradual acclimatization, appropriate ascent, recognizing symptoms and descending when medically necessary.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Can You Get Food at Everest Base Camp?</h5>\r\n` +
`                      <p>Everest Base Camp itself is not a normal village with restaurants and teahouses. The substantial meals happen at Gorak Shep, before and after the Base Camp excursion. During expedition season, climbing camps have their own food systems for expedition members, but trekkers should not assume access to them. Carry water and appropriate snacks for the excursion from Gorak Shep.</p>\r\n` +
`\r\n` +
`                      <h5 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Food and Acclimatization Go Together</h5>\r\n` +
`                      <p>Food is not simply fuel. A good meal helps your body recover from the day's walking, while adequate nutrition supports the physical demands of high-altitude trekking. The practical routine is:</p>\r\n` +
`                      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">\r\n` +
`                        <li>Breakfast before walking</li>\r\n` +
`                        <li>Small snacks during the day</li>\r\n` +
`                        <li>Lunch on the trail</li>\r\n` +
`                        <li>Regular hydration</li>\r\n` +
`                        <li>Dinner after arriving at the teahouse</li>\r\n` +
`                      </ul>\r\n` +
`                      <p>This sounds ordinary. At 5,000 meters, doing it consistently becomes a significant part of your trekking performance.</p>\r\n` +
`                      <p>Drinking water. Use treated water and a purification system suitable for your trip. Confirm whether boiled or filtered water is available and what it costs. Carry reusable bottles, protect them from freezing, and drink regularly without forcing excessive water intake. Persistent nausea or inability to eat and drink should be reported to your guide.</p>\r\n` +
`                      <p>Trekking meals are included according to the confirmed package; snacks, extra drinks and some water purchases may be additional. Tell the team about allergies and dietary restrictions before booking. Availability of vegetarian dishes does not establish a kitchen free of allergens or cross-contact.</p>\r\n                    `;

const updatedHtml = origHtml.substring(0, item2ContentInnerStart) + newInnerContent + origHtml.substring(item2ContentInnerEnd);

fs.writeFileSync(filePath, updatedHtml, 'utf8');
console.log('Successfully updated Available Food accordion in', filePath);
