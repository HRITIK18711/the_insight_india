import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
    <div className="my-6">
        <img
            src={src}
            alt="india-gate-delhi"
            className="w-full h-[420px] object-cover rounded-lg"
        />
        <p className="text-sm text-blue-500 mt-2">
            Image Source: {source}
        </p>
    </div>
);

const IndiaGate = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                    India Gate Delhi Travel Guide: History, Timings, Best Time to Visit & How to Reach
                </h1>
                <p className="text-gray-600 mb-6">
         <span className="font-semibold">Published On: 26 March, 2026</span>
        </p>
                {/* AUTHOR */}
                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Pragya Singh</span>
                </p>

                {/* HERO */}
                <SectionImage src="/Image/india-gate-delhi-01.png" source="Zee News" />

                {/* INTRO */}
                <p className="text-gray-700 mb-6">
                    Standing proudly in the heart of New Delhi, India Gate is one of the most famous monuments in India and a powerful symbol of national pride.
                </p>

                <p className="text-gray-700 mb-6">
                    At first glance, the towering sandstone arch looks like a grand historical landmark - and it certainly is. But the moment you walk closer, the experience becomes more personal. The names carved into the stone walls tell the stories of thousands of soldiers who lost their lives in war.
                </p>

                <p className="text-gray-700 mb-6">
                    Today, India Gate is both a war memorial and one of the city’s most beloved public spaces. Families picnic on the lawns, street vendors sell kulfi and chaat, photographers capture the golden glow of sunset and travellers from across the world gather to admire the monument.
                </p>

                <p className="text-gray-700 mb-6">
                    Having visited India Gate several times during quiet mornings, crowded evenings and even late nights,
                    I can confidently say that the atmosphere here changes with every hour of the day.
                    If you're planning a trip to Delhi, this India Gate travel guide will help you understand the monument’s history,
                    architecture, visiting tips and nearby attractions.
                </p>

                {/* QUICK FACTS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Quick Facts about India Gate</h2>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border border-gray-200">
                        <tbody>
                            <tr className="border-b"><td className="p-3 font-semibold">Location</td><td className="p-3">Kartavya Path, New Delhi</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Built</td><td className="p-3">1931</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Height</td><td className="p-3">42 metres</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Architect</td><td className="p-3">Edwin Lutyens</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Type</td><td className="p-3">War Memorial</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Entry Fee</td><td className="p-3">Free</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Open Hours</td><td className="p-3">24 hours</td></tr>
                            <tr className="border-b"><td className="p-3 font-semibold">Nearest Metro</td><td className="p-3">Central Secretariat</td></tr>
                            <tr><td className="p-3 font-semibold">Best Time to visit</td><td className="p-3">Evening / Sunset</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* HISTORY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">History of India Gate</h2>
                <SectionImage src="/Image/india-gate-delhi-02.png" source="Pexels" />

                <p className="text-gray-700 mb-6">
                    The story of India Gate Delhi begins in the aftermath of World War I. The monument was built to honour more than 84,000 soldiers of the British Indian Army.
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>World War I (1914–1918)</li>
                    <li>The Third Anglo-Afghan War (1919)</li>
                </ul>

                <p className="text-gray-700 mb-6">
                    The structure was designed by the famous British architect Sir Edwin Lutyens who also planned much of modern New Delhi.
                    Construction of the memorial began in 1921 and the monument was officially inaugurated on 12 February 1931.
                </p>
                <p className="text-gray-700 mb-6">
                    Look closely at the sandstone surface and you will notice thousands of names carved into the walls.
                    These inscriptions commemorate soldiers who died in battle. Reading even a few of these names is
                    enough to remind visitors that India Gate is not just a beautiful monument, it is a place of remembrance.
                </p>

                {/* AMAR JAWAN */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Amar Jawan Jyoti & National War Memorial</h2>
                <SectionImage src="/Image/india-gate-delhi-03.png" source="National War Memorial" />

                <p className="text-gray-700 mb-6">
                    For decades, the base of India Gate held a powerful national symbol known as the Amar Jawan Jyoti or the Flame of the Immortal Soldier.
                    This eternal flame was lit in 1972 after the 1971 Indo-Pakistani War, honouring the soldiers who sacrificed their lives defending the country.
                    In 2022, the flame was ceremonially merged with the flame at the nearby National War Memorial, located just behind India Gate.
                    The modern memorial now serves as the primary national site honouring India’s fallen soldiers. Visitors are encouraged to walk over and spend a few quiet moments there.

                </p>

                {/* ARCHITECTURE */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Architecture of India Gate</h2>
                <SectionImage src="/Image/india-gate-delhi-04.png" source="DNN24" />

                <p className="text-gray-700 mb-6">
                    Standing 42 metres tall, India Gate is one of the most recognizable architectural landmarks in the country. The structure is built from Bharatpur sandstone which gives the monument its distinctive warm colour. During sunset, the sandstone glows golden under the fading sunlight - making it a favourite subject for photographers.
                    Architect Edwin Lutyens drew inspiration from European triumphal arches such as the Arc de Triomphe in Paris but the final design remains uniquely suited to the monumental scale of New Delhi.
                    Across the top of the arch, the word INDIA is carved prominently. Unlike ornate palaces or temples, the monument’s beauty lies in its simplicity and proportion. Every line of the structure feels intentional and dignified.

                </p>

                {/* CANOPY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">The Canopy</h2>
                <SectionImage src="/Image/india-gate-delhi-05.png" source="Unsplash" />

                <p className="text-gray-700 mb-6">
                    A short distance from India Gate stands a stone pavilion known as The Canopy. This structure once held a statue of King George V which was installed during British rule. After India gained independence in 1947, the statue was removed.
                    Today, the empty canopy stands quietly along Kartavya Path - a subtle reminder of India’s transition from colonial rule to independence.

                </p>

                {/* KARTAVYA PATH */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Kartavya Path– Delhi’s Grand Boulevard</h2>
                <SectionImage src="/Image/india-gate-delhi-06.png" source="The Print" />

                <p className="text-gray-700 leading-relaxed mb-4">
                    India Gate stands at the eastern end of Kartavya Path, the grand ceremonial boulevard that stretches all the way to Rashtrapati Bhavan, the official residence of the President of India.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Formerly known as Rajpath, this massive avenue is lined with:
                </p>

                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                    <li>gardens</li>
                    <li>fountains</li>
                    <li>tree-lined pathways</li>
                    <li>long reflecting canals</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Every year on 26 January, this road becomes the stage for the famous Republic Day Parade, one of the most important national events in India.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    On normal days, Kartavya Path is perfect for a peaceful walk while enjoying panoramic views of central Delhi.
                </p>

                {/* BEST TIME */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit India Gate</h2>
                <SectionImage src="/Image/india-gate-delhi-07.png" source="Pexels" />

                <table className="w-full text-left border border-gray-200">
                    <tbody>
                        <tr className="border-b"><td className="p-3 font-semibold">Season</td><td className="p-3">Months</td><td className="p-3">Experience</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold">Winter</td><td className="p-3">October – March</td><td className="p-3">Best weather for sightseeing</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold">Monsoon</td><td className="p-3">July – September</td><td className="p-3">Green lawns and dramatic skies</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold">Summer</td><td className="p-3">April – June</td><td className="p-3">Very hot afternoons</td></tr>
                    </tbody>
                </table>
                <p className="text-gray-700 leading-relaxed">The best time to visit India Gate Delhi
                    is during the evening. As the sun sets, the monument is illuminated with
                    golden lighting and the surrounding lawns fill with people enjoying the cooler air.
                    This is also the best time for photography.
                </p>
                {/* NEARBY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Things to See near India Gate</h2>
                <SectionImage src="/Image/india-gate-delhi-08.jpg" source="Rashtrapati Bhavan" />

                <p className="text-gray-700 leading-relaxed">One of the best things about visiting India Gate is its location in the center of Delhi’s heritage district. Located just 5 minutes away,
                    there is the modern National War Memorial that honours soldiers who sacrificed their lives after independence.</p>

                <p className="text-gray-700 leading-relaxed">At the opposite end of Kartavya Path stands the Presidential Palace, one of the largest residences of any head of state in the world. Then there is the National Museum that houses artefacts covering over 5,000 years of Indian history. You can also explore Khan Market which is one of Delhi’s most popular neighbourhoods for cafes, restaurants, bookstores and boutique shopping.
                </p>
                <p className="text-gray-700 leading-relaxed">The lawns surrounding the monument are famous for local snacks like gol gappa, kulfi, chaat, ice cream. Enjoying these snacks while sitting on the grass is one of Delhi’s simplest pleasures.
                </p>

                {/* HOW TO REACH */}
                <h2 className="text-2xl font-bold mt-10 mb-4">How to Reach India Gate</h2>
                <SectionImage src="/Image/india-gate-delhi-09.png" source="Unsplash" />

                <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li><b>Metro:</b> The nearest metro station is Central Secretariat on the Yellow and Violet lines.
                        From there you can take an auto-rickshaw
                        book a taxi
                        walk for about 15 minutes
                    </li>
                    <li><b>Cab:</b> Uber / Ola</li>
                    <li><b>Distance:</b> 3 km from Connaught Place</li>
                </ul>

                {/* TIPS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Practical Travel Tips</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>Visit during golden hour for the best photos.</li>
                    <li>Weekday mornings are the quietest time.</li>
                    <li>Weekends can get crowded.</li>
                    <li>Wear comfortable shoes if walking along Kartavya Path.</li>
                    <li>The canals near the monument are perfect for reflection photos.
                        Most importantly, take your time. India Gate is not just a place to take pictures - it is a place to slow down and appreciate history.</li>
                </ul>

                {/* EXPERIENCE */}
                <h2 className="text-2xl font-bold mt-10 mb-4">The Real Experience of Visit India Gate/ Why Every Traveller Should Visit India Gate at Least Once</h2>
                <p className="text-gray-700 mb-6">
                    India Gate is far more than a monument. It represents remembrance, sacrifice and the spirit of the nation. 
                    Yet it is also a place where everyday life unfolds where families relax on the lawns, 
                    tourists admire the architecture and the city of Delhi gathers in the cool evening air. 
                    Whether you visit for the history, photography or simply to experience one of Delhi’s most iconic landmarks, 
                    India Gate is a place you will remember long after your trip ends.

                </p>

                {/* FAQs */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Frequently Asked Questions (FAQs) about the India Gate</h2>
                <div className="space-y-3 text-gray-700">
                    <p><b>Is India Gate open 24 hours?</b><br />Yes, India Gate is open to visitors at all times.</p>
                    <p><b>Is there an entry fee for India Gate??</b><br />No, visiting India Gate is completely free.
                    </p>
                    <p><b>Which metro station is closest to India Gate?</b><br />Central Secretariat Metro Station is the nearest.</p>
                    <p><b>What is the best time to visit India Gate?</b><br />Evening around sunset is the best time.</p>
                    <p><b>How far is India Gate from Connaught Place?</b><br />Approximately 3 kilometres about a 10-minute drive.</p>
                </div>

                {/* AUTHOR */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

                    <div className="flex flex-col md:flex-row items-start gap-6">

                        {/* Author Image */}
                        <img
                            src="/Image/pragya.jpg"
                            alt="Pragya Singh"
                            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
                        />

                        {/* Author Content */}
                        <p className="text-gray-800 leading-relaxed text-justify text-lg mt-4 md:mt-1">
                            <span className="font-semibold">Pragya Singh</span> is a Delhi-based travel writer and
                            heritage enthusiast passionate about uncovering lesser-known historical places across India.
                            From famous monuments like Qutub Minar
                            to hidden ruins inside the Ridge forest, she focuses on telling the
                            stories behind forgotten architecture and overlooked heritage sites.
                        </p>

                    </div>
                </div> 

            </div>
        </div>
    );
};

export default IndiaGate;