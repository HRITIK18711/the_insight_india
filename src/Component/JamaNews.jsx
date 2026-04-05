import React from "react";
const SectionImage = ({ src, source = "Pexels" }) => (
    <div className="my-6">
        <img
            src={src}
            alt="jama masjid"
            className="w-full h-[420px] object-cover rounded-lg"
        />
        <p className="text-sm text-blue-500 mt-2">
            Image Source: {source}
        </p>
    </div>
);
const JamaNews = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                    Jama Masjid Delhi Travel Guide: Timings, Entry Fee, History, How to Reach & Nearby Places
                </h1>

                {/* AUTHOR */}
                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Pragya Singh</span>
                </p>

                {/* HERO */}
                <SectionImage src="/Image/jama-masjid-01.jpg" />
                {/* INTRO */}
                <p className="text-gray-700 mb-6">
                    Jama Masjid Delhi is one of the largest and most famous mosques in India and a must-visit tourist attraction in Old Delhi. Built by Mughal emperor Shah Jahan in the 17th century, this grand monument showcases stunning Mughal architecture, massive courtyards, tall minarets and beautiful marble domes.
                </p>

                <p className="text-gray-700 mb-6">
                    Located near Red Fort and Chandni Chowk, Jama Masjid attracts thousands of Indian and international tourists every day. Whether you want to explore historical monuments, enjoy Old Delhi street food or experience local culture, this complete Jama Masjid travel guide will help you plan your visit.
                    with details about timings, entry fee, how to reach, best time to visit, photography tips and nearby attractions.
                </p>

                {/* QUICK FACTS */}
                <h2 className="text-2xl font-bold mt-8 mb-4">Quick Facts about Jama Masjid Delhi</h2>
                <SectionImage src="/Image/jama-masjid-02.jpg" />

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Location: Old Delhi, India</li>
                    <li>Built by: Mughal Emperor Shah Jahan</li>
                    <li>Construction Period: 1650–1656</li>
                    <li>Architecture Style: Mughal Architecture</li>
                    <li>Material Used: Red Sandstone and White Marble</li>
                    <li>Courtyard Capacity: Around 25,000 Worshippers</li>
                    <li>Minaret Height: Approximately 41 meters</li>
                    <li>Nearest Metro Station: Jama Masjid (Violet Line)</li>
                </ul>

                {/* HISTORY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">History of Jama Masjid Delhi</h2>
                <SectionImage src="/Image/jama-masjid-03.jpg" />

                <p className="text-gray-700 mb-6">
                    Jama Masjid originally known as Masjid-i-Jehan-Numa, meaning “mosque that reflects the world” was built during the peak of Mughal power. Construction began in 1650 and took nearly six years to complete with the help of over 5,000 craftsmen from India, Persia and Central Asia.
                </p>

                <p className="text-gray-700 mb-6">
                    The mosque served as the royal mosque of the Mughal emperors where important religious and
                    political gatherings were held. Over the centuries, Jama Masjid has witnessed major historical
                    events including the 1857 revolt and the Partition period. Today, it stands as a powerful symbol of Delhi’s rich heritage,
                    attracting historians, photographers and travelers from around the globe.
                </p>

                {/* ARCHITECTURE */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Architecture of Jama Masjid – A Mughal Masterpiece</h2>
                <SectionImage src="/Image/jama-masjid-04.jpg" />
                <p className="text-gray-700 mb-6">Jama Masjid is considered one of the finest examples of Mughal architecture in India.</p>
                <p className="text-gray-700 mb-6">Key architectural highlights include:</p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A massive raised platform offering panoramic views</li>
                    <li>Three grand marble domes with golden finials</li>
                    <li>Two tall minarets with spiral staircases</li>
                    <li>Intricate Arabic and Persian calligraphy</li>
                    <li>Large prayer hall with elegant arches</li>
                    <li>Red sandstone with white marble detailing</li>
                </ul>

                <p className="text-gray-700 mb-6 mt-3">The symmetrical design and grand scale make Jama Masjid one of the most photogenic monuments in Delhi.</p>

                <SectionImage src="/Image/jama-masjid-05.jpg" />

                {/* TIMINGS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Jama Masjid Delhi Timings</h2>
                <p className="text-gray-700 mb-6">
                    Jama Masjid is generally open to visitors during the following hours:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Morning: 7:00 AM to 12:00 PM</li>
                    <li>Afternoon: 1:30 PM to 6:30 PM</li>
                </ul>

                <p className="text-gray-700 mb-6">
                    Visitors are not allowed inside during prayer times.

                </p>
                <span>
                    <span className="font-bold">Pro Tip:</span> Early morning and sunset hours offer the best lighting for photography and fewer crowds.
                </span>

                {/* ENTRY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Entry Fee & Charges</h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Mosque Entry Fee: Free</li>
                    <li>Minaret Climbing Fee: ₹100–₹150(Approx)</li>
                    <li>Camera / Mobile Photography Charges: ₹200–₹300(Approx)</li>
                </ul>
                <p className="text-gray-700 mb-6  mt-3">
                    Climbing the southern minaret is highly recommended as it offers breathtaking views of Old Delhi’s skyline.
                </p>

                {/* HOW TO REACH */}
                <h2 className="text-2xl font-bold mt-5 mb-4">How to Reach Jama Masjid</h2>
                <SectionImage src="/Image/jama-masjid-06.jpg" source="Unsplash" />
                <p className="text-gray-700 mb-6  mt-3">
                    Reaching Jama Masjid is very easy as it is located in the heart of Old Delhi.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">

                    <li> <span className="font-bold"> By Metro</span>: The nearest metro station is Jama Masjid Metro Station (Violet Line)
                        which is just a few minutes’ walk from the mosque.</li>
                    <li><span className="font-bold">By Train:</span> Old Delhi Railway Station (2 km)</li>
                    <li><span className="font-bold">By Road:</span> Auto-rickshaws, e-rickshaws and taxis are easily available from Chandni Chowk,
                        Red Fort and other parts of Delhi.</li>
                    <li><span className="font-bold">By Air:</span> IGI Airport (20 km)</li>
                </ul>

                {/* BEST TIME */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit</h2>
                <SectionImage src="/Image/jama-masjid-07.jpg" />

                <p className="text-gray-700 mb-6">
                    The best time to visit Jama Masjid is between October and March when Delhi’s weather is pleasant.
                </p>
                <span className="mt-2">Best visiting hours:</span>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">

                    <li>Early morning for peaceful exploration</li>
                    <li>Late afternoon for sunset photography  </li>
                    <li>Evening during Ramadan for cultural experience  </li>
                    <li>Avoid visiting on Friday afternoons due to heavy crowds during prayers</li>
                </ul>

                {/* THINGS */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Things to Do at Jama Masjid
                </h2>
                <SectionImage src="/Image/jama-masjid-07.jpg" />
                <div className="space-y-6">

                    {/* 1 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">
                            1. Climb the Minaret
                        </h3>
                        <p className="text-gray-700">
                            One of the most exciting experiences is climbing the minaret. The narrow spiral staircase leads to a viewing point where you can see Red Fort, Chandni Chowk and Old Delhi rooftops.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">
                            2. Explore Mughal Architecture
                        </h3>
                        <p className="text-gray-700">
                            Observe the beautiful domes, arches, calligraphy and marble flooring that reflect Mughal artistic excellence.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">
                            3. Experience Ramadan Evenings
                        </h3>
                        <p className="text-gray-700">
                            During Ramadan, the entire area becomes lively with food stalls, prayers and cultural gatherings.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">
                            4. Enjoy Old Delhi Street Food
                        </h3>
                        <p className="text-gray-700 mb-3">
                            The food streets near Jama Masjid are famous across India.
                        </p>

                        <p className="font-semibold mb-2">Must-try places:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Karim’s for Mughlai dishes</li>
                            <li>Al Jawahar for kebabs</li>
                            <li>Street stalls for biryani, korma and sweets</li>
                        </ul>
                    </div>

                </div>

                {/* NEARBY */}
                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Nearby Attractions to Visit
                </h2>

                <SectionImage src="/Image/jama-masjid-09.jpg" source="Unsplash" />

                <p className="text-gray-700 mb-6">
                    You can easily explore several historic places near Jama Masjid:
                </p>

                {/* Nearby Cards */}
                <div className="grid md:grid-cols-3 gap-5 mb-10">

                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Red Fort</h3>
                        <p className="text-gray-600 text-sm">
                            A UNESCO World Heritage Site known for its rich Mughal history.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Chandni Chowk</h3>
                        <p className="text-gray-600 text-sm">
                            Famous market for shopping, street food and vibrant local culture.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Raj Ghat</h3>
                        <p className="text-gray-600 text-sm">
                            Peaceful memorial dedicated to Mahatma Gandhi.
                        </p>
                    </div>

                </div>

                {/* Travel Tips */}
                <h2 className="text-2xl font-bold mb-4">
                    Travel Tips for Visiting Jama Masjid
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg mb-10">
                    <ul className="space-y-2 text-gray-700">
                        <li>✔ Wear modest clothing (full sleeves and covered legs recommended)</li>
                        <li>✔ Remove footwear before entering</li>
                        <li>✔ Carry cash for photography or minaret fee</li>
                        <li>✔ Keep belongings safe due to crowds</li>
                        <li>✔ Respect religious practices and maintain silence</li>
                        <li>✔ Visit early morning to avoid rush</li>
                    </ul>
                </div>

                {/* Photography Tips */}
                <h2 className="text-2xl font-bold mb-4">
                    Photography Tips at Jama Masjid
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                        <li>📸 Capture wide-angle shots of the courtyard</li>
                        <li>📸 Sunset silhouette photography is very popular</li>
                        <li>📸 Minaret top view offers drone-like perspective</li>
                        <li>📸 Use symmetry of arches for aesthetic shots</li>
                    </ul>
                </div>


                <h2 className="text-2xl font-bold mt-10 mb-6">
                    Why Jama Masjid is Famous
                </h2>

                <SectionImage src="/Image/jama-masjid-07.jpg" source="Unsplash" />

                <p className="text-gray-700 mb-6">
                    Jama Masjid is famous for:
                </p>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            🕌 One of the largest mosques in India
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            ✨ Stunning Mughal architecture
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            📜 Rich historical importance
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            🕌 Cultural & religious significance
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            🍽️ Vibrant food streets nearby
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm text-center">
                        <p className="text-gray-700 font-medium">
                            🌆 Panoramic city views from minarets
                        </p>
                    </div>

                </div>

                {/* Conclusion Box */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-sm text-gray-700 leading-relaxed">
                    <p className="mb-4">
                        Jama Masjid Delhi is not just a place of worship but a complete cultural and historical experience. From grand Mughal architecture to bustling Old Delhi markets and delicious street food, the monument offers something for every traveler.
                    </p>

                    <p className="mb-4">
                        Whether you are a history lover, photographer, foodie or spiritual explorer, visiting Jama Masjid should definitely be on your Delhi travel itinerary.
                    </p>

                    <p className="font-semibold">
                        Plan your visit wisely, respect local traditions and enjoy the timeless charm of Old Delhi.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4"> FAQs </h2> 
                <div className="space-y-4 text-gray-700">
                    <p> <b>Q1. What is the entry fee for Jama Masjid Delhi?</b><br /> Entry is free, but visitors may need to pay for photography and minaret climbing.
                    </p> <p> <b>Q2. What are Jama Masjid visiting timings?</b><br /> Visitors can enter between 7 AM–12 PM and 1:30 PM–6:30 PM except during prayer times. </p> <p> <b>Q3. Which metro station is nearest to Jama Masjid?</b><br /> Jama Masjid Metro Station on the Violet Line is the nearest. </p> <p> <b>Q4. How much time is needed to explore Jama Masjid?</b><br /> Around 1–2 hours is enough including minaret climbing. </p> <p> <b>Q5. What is the best time to visit Jama Masjid?</b><br /> Early morning or sunset during winter months is ideal. </p>
                </div>


                {/* AUTHOR */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">

                        {/* Author Image */}
                        <img
                            src="/Image/pragya.jpg"
                            alt="Pragya Singh"
                            className="w-44 h-44 md:w-80 md:h-80 object-cover rounded-md"
                        />

                        {/* Author Content */}
                        <p className="text-gray-800 leading-relaxed text-justify text-lg mt-4 md:mt-10">
                            <span className="font-semibold">Pragya Singh</span> is a Delhi-based travel writer and
                             heritage enthusiast passionate about uncovering lesser-known historical places across India. 
                             From famous monuments like Qutub Minar 
                            to hidden ruins inside the Ridge forest, she focuses on telling the 
                            stories behind forgotten architecture and overlooked heritage sites.
                        </p>

                    </div>
                </div>

                {/* FAQ */}
                

            </div>
        </div>
    );
};

export default JamaNews;