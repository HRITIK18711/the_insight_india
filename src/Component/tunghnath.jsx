import React from "react";

const SectionImage = ({ src, source }) => (
    <div className="my-6">
        <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
        <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
    </div>
);

const Tunghnath = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Chopta Tungnath Chandrashila Trek Uttarakhand – Best Time, Itinerary & Travel Guide
                </h1>

                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Published On: 18 April, 2026</span>
                </p>

                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Rohit Upadhyay</span>
                </p>

                {/* 1 */}
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-01.jpg" source="Pexels / Vikas Bhandari" />

                <p className="mb-6 text-gray-700">
                    A trekking trail where the sound of temple bells echoes through misty mountains where green meadows stretch endlessly under the open Himalayan sky and where a golden sunrise from a snowy summit makes you feel closer to nature than ever before.
                    Welcome to the magical journey of the Chopta Tungnath Chandrashila Trek in Uttarakhand.
                </p>

                <p className="mb-6 text-gray-700">
                    Located in the Garhwal Himalayas, this trek is one of the most beautiful short Himalayan adventures in India. It combines spirituality, scenic landscapes and summit thrill in a single journey. Trekkers walk through lush bugyals (alpine meadows), dense forests and ancient stone paths to reach Tungnath Temple, the highest Shiva temple in the world. From there, a further climb leads to Chandrashila Summit, famous for its breathtaking sunrise views.
                </p>

                <p className="mb-6 text-gray-700">
                    Whether you are a beginner trekker, a spiritual traveler or a photography enthusiast, this complete guide will help you plan every detail.
                </p>

                {/* 2 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Chopta Tungnath Chandrashila Trek is So Special
                </h2>

                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-02.jpg" source="Unsplash/Anubhav Sonker" />

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-4">

                    <li>
                        <b>Highest Shiva Temple Trek</b><br />
                        The trail leads to Tungnath Temple, one of the sacred Panch Kedar temples dedicated to Lord Shiva.
                    </li>

                    <li>
                        <b>Beginner-Friendly Summit Trek</b><br />
                        Chandrashila summit at around 4,000 meters offers Himalayan summit experience without extreme difficulty.
                    </li>

                    <li>
                        <b>Beautiful Bugyal Meadows</b><br />
                        The trek passes through vast green meadows that look magical during spring and monsoon.
                    </li>

                    <li>
                        <b>Mesmerizing Sunrise Views</b><br />
                        The summit sunrise is one of the most unforgettable experiences in the Himalayas.
                    </li>

                    <li>
                        <b>Snow Trek in Winter</b><br />
                        During winter, the trail becomes a snow trekking paradise.
                    </li>

                    <li>
                        <b>Spiritual + Adventure Combination</b><br />
                        Very few treks offer such a perfect blend of devotion and adventure.
                    </li>

                </ul>

                {/* 3 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Where is Chopta Located in Uttarakhand
                </h2>

                <SectionImage
                    src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-03.jpg"
                    source="Unsplash / Shubham Borade"
                />

                <p className="text-gray-700 mb-6">
                    Chopta is located in the Rudraprayag district of Uttarakhand in the Garhwal Himalayas. It serves as the base point for the Tungnath and Chandrashila trek.
                </p>

                <p className="text-gray-700 font-semibold mb-2">
                    Quick Facts
                </p>

                <p className="text-gray-700 mb-6">
                    State: Uttarakhand <br />
                    District: Rudraprayag <br />
                    Altitude of Chopta: Approx. 2,680 meters <br />
                    Tungnath Altitude: 3,680 meters <br />
                    Chandrashila Altitude: ~4,000 meters
                </p>

                {/* 4 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit</h2>

                <SectionImage
                    src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-04.jpg"
                    source="Pexels / Vinod Singh"
                />

                <ul className="space-y-3 mb-6 text-gray-700">
                    <li>
                        <span className="font-semibold text-black">Winter (Dec – Feb):
                        </span> Perfect for snow lovers. Ideal for snow trekking and experiencing a white Himalayan landscape.
                    </li>

                    <li>
                        <span className="font-semibold text-black">Spring (Mar – Apr):</span> Lush green meadows with blooming rhododendrons. Best for nature photography.
                    </li>

                    <li>
                        <span className="font-semibold text-black">Summer (May – Jun):</span> Pleasant weather with clear mountain views. Great for trekking and camping.
                    </li>

                    <li>
                        <span className="font-semibold text-black">Autumn (Sep – Nov):</span> Crystal-clear skies and best visibility of Himalayan peaks. Ideal for scenic views.
                    </li>
                </ul>
                {/* 5 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Trek Distance and Difficulty</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-05.jpg" source="Pexels / Saurav Negi" />

                <table className="w-full border mb-6">
                    <tbody>
                        <tr><td className="border p-2">Chopta → Tungnath</td><td className="border p-2">3.5 km</td></tr>
                        <tr><td className="border p-2">Tungnath → Chandrashila</td><td className="border p-2">1.5 km</td></tr>
                        <tr><td className="border p-2">Total</td><td className="border p-2">5 km</td></tr>
                    </tbody>
                </table>

                {/* 6 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">How to Reach Chopta Base</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-06.jpg" source="Pexels / Priyan Rughani" />
                <p>Nearest major cities:</p>
                <ul className="list-disc pl-6 mb-6 text-black">
                    <li>Rishikesh</li>
                    <li>Haridwar </li>
                    <li>Dehradun </li>
                </ul>
                <p>Route:</p>
                <p>Rishikesh → Devprayag → Rudraprayag → Ukhimath → Chopta</p>

                {/* 7 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Detailed Trek Route Experience</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-07.JPG" source="Anjana Rawat" />

                <p className="mb-6">
                    The trek begins from Chopta through a stone-paved path surrounded by forests.
                    As you climb higher, panoramic Himalayan views begin to appear.
                    After reaching Tungnath Temple, trekkers continue the final steep climb to Chandrashila summit.
                </p>
                <h5 className="text-2xl font-bold mt-10 mb-4">Tungnath Temple Spiritual Significance</h5>
                <p>Tungnath is one of the Panch Kedar temples. According to mythology,
                    Lord Shiva’s arms appeared here after the Mahabharata war.
                    The temple attracts pilgrims seeking peace and blessings.</p>
                {/* 8 */}


                {/* 9 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Accommodation and Food Options</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-08.jpg" source="Pexels" />

                <ul className="list-disc pl-6 mb-6">
                    <li>Camps</li>
                    <li>Homestays</li>
                    <li>Dhabas</li>
                </ul>

                {/* 10 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Things to Carry</h2>


                <ul className="list-disc pl-6 mb-6">
                    <li>Trekking shoes</li>
                    <li>Warm clothing</li>
                    <li>Rain protection</li>
                    <li>Sunglasses</li>
                    <li>Power bank</li>
                </ul>

                {/* 11 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Weather and Safety Tips</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Weather changes fast</li>
                    <li>Snow can make trail slippery</li>
                    <li>Start summit trek early</li>
                </ul>

                {/* 12 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Budget for Chopta Trek</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Travel cost: ₹2000–4000</li>
                    <li>Stay: ₹800–1500 </li>
                    <li>Total trip budget: ₹6000–10000</li>
                </ul>

                {/* 13 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Photography Spots</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Bugyal meadows</li>
                    <li>Tungnath temple backdrop</li>
                    <li>Chandrashila summit sunrise</li>
                </ul>
                {/* 14 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Winter vs Summer Trek Comparison</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-09.JPG" source="Anjana Rawat" />
                <p><b>Winter:</b> Snow trekking, magical views, tougher trail</p>
                <p><b>Summer:</b> Green landscapes, easier trekking</p>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-10.JPG" source="Anjana Rawat" />
                {/* 15 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Self-Trek vs Trek Package</h2>
                <p>Self-trek gives flexibility but requires planning. Package trek offers safety and convenience.</p>

                {/* 16 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Why Chopta is Called Mini Switzerland of India</h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-11.jpg" source="Pexels/Akshay Salunke" />
                <p>Chopta’s rolling meadows, pine forests and mountain views resemble Swiss alpine landscapes, earning it the nickname Mini Switzerland of Uttarakhand.</p>
                {/* 17 */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Chandrashila Sunrise Guide</h2>
                <p>Start trekking around 3-4 am to reach summit before sunrise. Watching sunlight slowly illuminate Himalayan peaks is the once-in-a-lifetime experience.
                    The Chopta Tungnath Chandrashila Trek is not just a short Himalayan trail — it is a journey of spirituality, adventure and unforgettable natural beauty.
                </p>

                {/* ITINERARY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    3-Day Itinerary of Chopta Tungnath Trek
                </h2>
                <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-18.jpeg" source="Anjana Rawat" />

                <div className="space-y-6">

                    {/* Day 1 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">Day 1: Travel to Chopta</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Start your journey from Rishikesh / Haridwar</li>
                            <li>Reach Chopta by evening</li>
                            <li>Enjoy sunset views & relax</li>
                            <li>Overnight stay in Chopta</li>
                        </ul>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">Day 2: Tungnath & Chandrashila Trek</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Start trek early morning</li>
                            <li>Reach Tungnath Temple</li>
                            <li>Continue to Chandrashila summit</li>
                            <li>Witness sunrise (if starting early)</li>
                            <li>Return to Chopta</li>
                            <li>Overnight stay</li>
                        </ul>
                    </div>

                    {/* Day 3 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">Day 3: Deoria Tal & Departure</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Drive to Sari Village</li>
                            <li>Trek to Deoria Tal</li>
                            <li>Spend time at lake</li>
                            <li>Return and head back</li>
                        </ul>
                    </div>

                </div>

                {/* Nearby Places */}
                <h2 className="text-2xl font-bold mt-12 mb-4">
                    Nearby Places to Visit During Chopta Tungnath Chandrashila Trek
                </h2>

                <div className="space-y-6 text-gray-700">

                    <div>
                        <h3 className="text-lg font-semibold">Deoria Tal (Deoriatal Lake)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-12.jpg" source="Anjana Rawat" />
                        <p>
                            Located near Chopta, Deoria Tal is a peaceful lake famous for its crystal-clear reflection of the
                            Chaukhamba peaks. The trek starts from Sari Village and is around 2–3 km, making it perfect for
                            beginners. Early morning and sunset offer the most magical views, making it a must-visit spot
                            during your Chopta itinerary.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Ukhimath (Winter Seat of Kedarnath)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-13.jpg" source="Wikimedia Commons" />
                        <p>
                            Ukhimath is an important spiritual destination located around 30 km from Chopta.
                            During winter, the idol of Kedarnath is brought here and worshipped at the Omkareshwar Temple.
                            It offers a peaceful village atmosphere along with stunning Himalayan views.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Sari Village (Gateway to Deoria Tal)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-14.jpg" source="Wikimedia Commons" />
                        <p>
                            Sari Village is a small and beautiful Himalayan village that serves as
                            the starting point for the Deoria Tal trek.
                            Staying here gives you a glimpse of local life, simple homestays,
                            and breathtaking mountain surroundings.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Rudraprayag (Confluence of Rivers)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-15.jpg" source="Wikimedia Commons" />
                        <p>
                            Rudraprayag is located on the route to Chopta and is known for the sacred confluence of
                            the Alaknanda and Mandakini rivers. It is a great stopover to experience both spirituality
                            and scenic beauty.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Kalimath Temple (Hidden Spiritual Gem)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-16.jpg" source="Wikipedia" />
                        <p>
                            Kalimath is a lesser-known yet powerful spiritual destination dedicated to Goddess Kali.
                            Surrounded by mountains and river valleys, it offers a peaceful and less crowded experience compared to other temples.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Kedarnath (Extended Travel Option)</h3>
                        <SectionImage src="/Image/chopta-tungnath-chandrashila-trek-uttarakhand-17.jpg" source="Rohit Upadhyay" />
                        <p>
                            If you have extra time, you can extend your trip to Kedarnath,
                            one of the 12 Jyotirlingas of Lord Shiva. Located around 100 km from Chopta
                            (via Guptkashi), it is one of the most sacred pilgrimage sites in India.
                        </p>
                    </div>

                </div>

                {/* FAQ */}
                <h2 className="text-2xl font-bold mt-12 mb-4">
                    Frequently Asked Questions (FAQs) about Chopta Tungnath Chandrashila Trek Uttarakhand
                </h2>

                <div className="space-y-4 text-gray-700">

                    <div>
                        <p className="font-semibold text-black">
                            1. Is Chopta Tungnath Chandrashila Trek difficult?
                        </p>
                        <p>
                            The trek is considered easy to moderate. The trail is well-defined and beginner-friendly,
                            though the final climb to Chandrashila summit is slightly steep.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            2. What is the total distance of the trek?
                        </p>
                        <p>
                            The total distance is around 5 km one way — 3.5 km from Chopta to Tungnath and
                            1.5 km further to Chandrashila summit.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            3. What is the best time to visit?
                        </p>
                        <p>
                            Visit from December to February for snow trekking, and March to June or
                            September to November for clear views and pleasant weather.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            4. Can beginners do this trek?
                        </p>
                        <p>
                            Yes, it is one of the best beginner-friendly treks in Uttarakhand.
                            Basic fitness is enough to complete it comfortably.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            5. Is Tungnath Temple open throughout the year?
                        </p>
                        <p>
                            No, the temple remains open from April/May to October/November.
                            During winter, the idol is shifted to Mukkumath village.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            6. How long does it take to complete the trek?
                        </p>
                        <p>
                            It usually takes around 4–6 hours to reach Chandrashila summit
                            and return to Chopta on the same day.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            7. Is a guide required?
                        </p>
                        <p>
                            A guide is not mandatory as the trail is well-marked.
                            However, in winter (snow conditions), hiring a guide is recommended.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            8. Are accommodation options available in Chopta?
                        </p>
                        <p>
                            Yes, Chopta offers camps, guesthouses, and homestays with basic
                            food and stay facilities.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            9. What should I carry for the trek?
                        </p>
                        <p>
                            Carry trekking shoes, warm clothes, gloves, water, snacks,
                            sunscreen, and a power bank. In winter, proper snow gear is essential.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-black">
                            10. Is the Chandrashila summit safe?
                        </p>
                        <p>
                            Yes, it is generally safe. Start early, avoid bad weather,
                            and be cautious on snowy trails.
                        </p>
                    </div>

                </div>
                <div className="mt-6 pt-8">
        <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src="/Image/rohit.jpeg"
            alt="Rohit"
            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
          />

          <p className="text-gray-800 leading-relaxed text-justify text-lg">
            Hi, I’m Rohit, the explorer behind RU Explores. For me, travel is not just about reaching a destination but about 
            understanding its culture, people, food and stories. I enjoy exploring places deeply, 
            from mountain villages to local streets and sharing those experiences in a way that helps others travel with purpose. 
            RU Explores is my attempt to turn travel into something more meaningful than just ticking locations off a list.</p>
        </div>
      </div>

            </div>
        </div>
    );
};

export default Tunghnath;