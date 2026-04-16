import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
    <div className="my-6">
        <img
            src={src}
            alt="Malcha Mahal Delhi"
            className="w-full h-[420px] object-cover rounded-lg"
        />
        <p className="text-sm text-blue-500 mt-2">
            Image Source: {source}
        </p>
    </div>
);

const MalchaMahal = () => {
    return (
        <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                    Malcha Mahal Delhi: The Haunted Palace Hidden Inside a Forest (Complete Travel Guide)
                </h1>
                <p className="text-gray-600 mb-6">
         <span className="font-semibold">Published On: 31 March, 2026</span>
        </p>

                {/* AUTHOR */}
                <p className="text-gray-600 mb-6">
                    By <span className="font-semibold">Pragya Singh</span>
                </p>

                {/* HERO */}
                <SectionImage src="/Image/malcha-mahal-delhi-01.png" source="Times Now" />

                {/* INTRO */}
                <p className="text-gray-700 mb-6">
                    I have lived in Delhi for years. I have climbed the steps of Qutub Minar, walked through the gardens of Humayun’s Tomb and spent countless Sunday mornings wandering around Lodhi Garden. But nothing in Delhi prepared me for the afternoon I discovered Malcha Mahal. There are no ticket counters here. No tour groups and no guidebooks pointing the way.
                </p>

                <p className="text-gray-700 mb-6">
                    Instead, you walk along a quiet trail through thick forest inside Delhi’s Ridge. The sound of the city fades behind you replaced by birds calling from the trees. And suddenly rising from the wilderness, stands a crumbling stone palace that looks untouched by time.
                </p>

                <p className="text-gray-700 mb-6">
                    Malcha Mahal is one of the most mysterious monuments in New Delhi. Hidden inside the Ridge forest near Chanakyapuri, the palace carries a story of forgotten sultans, a self-proclaimed royal family and decades of isolation.
                </p>

                <p className="text-gray-700 mb-6">
                    If you are looking for a place in Delhi that feels genuinely hidden and unusual, Malcha Mahal might be the most fascinating discovery you can make.
                </p>

                {/* QUICK FACTS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Malcha Mahal Quick Facts</h2>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border border-gray-200 text-left">
                        <tbody>
                            {[
                                ["Location", "Central Ridge Forest, Chanakyapuri"],
                                ["Built By", "Feroz Shah Tughlaq"],
                                ["Built In", "14th Century"],
                                ["Famous For", "Residence of Begum Wilayat Mahal"],
                                ["Entry Fee", "Free"],
                                ["Visiting Hours", "Daylight only"],
                                ["Walking Time", "10–15 minutes through forest trail"],
                                ["Nearest Metro", "Lok Kalyan Marg"],
                            ].map(([key, value], i) => (
                                <tr key={i} className="border-b">
                                    <td className="p-3 font-semibold">{key}</td>
                                    <td className="p-3">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* HISTORY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">History of Malcha Mahal</h2>
                <SectionImage src="/Image/malcha-mahal-delhi-02.png" source="India Today" />

                <h8 className="text-xs font-bold mt-10 mb-4">The ruins of Malcha Mahal hidden within the dense Central Ridge Forest of Delhi
                </h8>
                <p className="text-gray-700 mb-6">
                    The origins of Malcha Mahal date back to the <span className= "text-black font-bold mr-1">14th century</span>
                     during the reign of Feroz Shah Tughlaq. At the time, the forests of the Delhi Ridge were used as
                      royal hunting grounds. To support these expeditions, the sultan constructed a hunting lodge known as 
                       <span className="text-black font-bold ml-1">Malcha Mahal Shikar Gah</span>.
                </p>

                <p className="text-gray-700 mb-6">
                    The palace was not designed for luxury. Instead, it followed the characteristic Tughlaq architectural style—thick stone walls, sloping defensive surfaces and large arched entrances meant to withstand both time and conflict.
                </p>

                <p className="text-gray-700 mb-6">
                    After the decline of the Tughlaq dynasty, the palace slowly fell into neglect. For centuries, the forest grew around it and the monument remained largely forgotten.
                </p>

                {/* ROYAL STORY */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    The Strange Royal Story of Begum Wilayat Mahal
                </h2>

                <SectionImage src="/Image/malcha-mahal-delhi-03.png" source="The New York Times" />
                <h8 className="text-xs font-bold mt-10 mb-4">Malcha Mahal gained international attention after the mysterious royal family 
                    led by Begum Wilayat Mahal moved into the ruins in 1985
                </h8>
                <p className="text-gray-700 mb-6">
                    In 1975, a woman appeared at a railway station in Delhi claiming to be royalty.
                    She introduced herself as Begum Wilayat Mahal and said she was a descendant of Wajid Ali Shah,
                    the last Nawab of Awadh. When the government ignored her requests for recognition and compensation,
                    she began an extraordinary protest. For nearly ten years, Begum Wilayat Mahal and her two children lived
                    inside the railway station itself. They refused to leave.
                </p>

                <p className="text-gray-700 mb-6">
                    Eventually, in 1985, the government allowed them to occupy the abandoned ruins of Malcha Mahal.
                    The family moved into the palace and lived there in isolation. They kept guard dogs to scare away
                    visitors and placed warning boards near the entrance. Begum Wilayat Mahal died in 1993, reportedly by swallowing crushed
                    diamonds, a method historically associated with royal suicide. Her son, Prince Riaz, continued living
                    there until 2017, after which the palace became empty once again.

                </p>



                {/* ARCHITECTURE */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Architecture of Malcha Mahal</h2>
                <SectionImage src="/Image/malcha-mahal-delhi-04.png" source="Hindustan Times" />
                <h8 className="text-xs font-bold mt-10 mb-4">The thick stone walls and large arches
                    reflect the defensive architecture of the Tughlaq dynasty</h8>
                <p className="text-gray-700 mb-6">
                    Malcha Mahal is a rare surviving example of Tughlaq architecture. Unlike later Mughal monuments, Tughlaq buildings focused on strength rather than decoration.
                </p>

                <p className="text-gray-700 mb-6">Key architectural elements include:</p>

                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Massive stone walls</li>
                    <li>Elevated platforms</li>
                    <li>Wide arched gateways</li>
                    <li>Sloping defensive structures</li>
                </ul>
                <p className="text-gray-700 mb-6">These features allowed the building to survive centuries of weather, neglect and forest growth.</p>


                {/* WHY HIDDEN */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    Why Most Tourists Never Find Malcha Mahal
                </h2>

                <SectionImage src="/Image/malcha-mahal-delhi-05.png" source="Wikimedia Commons" />
                <h8 className="text-xs font-bold mt-10 mb-4">The trail leading to Malcha Mahal winds through the wild forest of the Delhi Ridge</h8>
                <p className="text-gray-700 mb-3">
                    Despite being in central Delhi, Malcha Mahal remains one of the city’s least visited monuments.
                    

                </p>

                <p className="text-gray-700 mb-4">
                   
                    There are several reasons why the palace is hidden deep inside the Ridge forest, there are very few signs directing visitors to the trail and no ticket counters or tourism facilities exist here.
                    

                </p>

                <p className="text-gray-700 mt-1">
                    
                    Unlike major attractions such as Qutub Minar or Humayun's Tomb, Malcha Mahal is not part of the typical tourist circuit.
                    Ironically, this hidden nature is exactly what makes it so special.

                </p>

                {/* THINGS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Things to See at Malcha Mahal</h2>

                <SectionImage src="/Image/malcha-mahal-delhi-06.png" source="Wikimedia Commons" />
                <h8 className="text-xs font-bold mt-10 mb-4">The central ruins of Malcha Mahal still stand after more than 700 years.</h8>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li><b>The Main Ruins:</b>The central structure contains large arches and thick stone walls typical of Tughlaq construction.</li>
                    <li><b>The Warning Boards:</b> Some of the old warning signs installed by the royal family are still visible near the entrance.</li>
                    <li><b>The Ridge Forest Trail:</b> The walk through the forest is part of the experience. Peacocks, monkeys, and numerous bird species are frequently seen here.
                    </li>
                    <li><b>The Sunset Photography:</b>Late afternoon provides the most dramatic lighting for photographs of the palace ruins.
                    </li>
                </ul>

                {/* TIME */}
                <h2 className="text-2xl font-bold mt-10 mb-4">
                    How Much Time Should You Spend Here?
                </h2>

                <p className="text-gray-700 mb-2">
                    Most visitors spend 45 minutes to 1 hour exploring Malcha Mahal.
                </p>
                <p className="text-gray-700 mb-2">The forest trail takes around 10–15 minutes each way, while exploring the ruins and taking photographs typically takes another 30 minutes.</p>

                <p className="text-gray-700 mb-2">If you enjoy photography, you may want to stay longer especially during sunset when golden light filters through the trees.</p>
                    

                {/* HOW TO REACH */}
                <h2 className="text-2xl font-bold mt-10 mb-4">How to Reach Malcha Mahal</h2>

                <div className="space-y-4 text-gray-700">
                    <p>Malcha Mahal is located near the diplomatic area of Chanakyapuri in New Delhi.</p>

                    <p className="text-gray-700 mb-6"><b>By Metro</b><br />
                        The nearest metro station is Lok Kalyan Marg, about 1.5 km away.</p>

                    <p className="text-gray-700 mb-6"><b>By Road</b><br />
                        Autos, taxis, and ride-sharing services can easily reach the entry point near Sardar Patel Marg. From there, visitors must walk through the forest trail to reach the palace.</p>
                </div>

                {/* BEST TIME */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit</h2>

                The best time to visit Malcha Mahal is between October and March, when Delhi’s weather is pleasant.
                Summer months can be extremely hot, while the monsoon season may make forest trails slippery.
                Early morning and late afternoon visits provide the most comfortable temperatures and the best photography light.

                {/* TIPS */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Travel Tips Before Visiting
</h2>

                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Visit only during daylight hours</li>
                    <li>Wear comfortable walking shoes</li>
                    <li>Carry water</li>
                    <li>Avoid visiting alone due to the isolated location
</li>
                    Download offline maps before entering the forest
                <li>Respect the monument and avoid damaging the ruins</li>
                </ul>


                <h2 className="text-2xl font-bold mt-10 mb-4">Nearby Places to Visit
</h2>

<p className="text-gray-700 mb-6">If you are exploring Malcha Mahal, you can also visit nearby attractions such as:
</p> 
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Lodhi Garden
</li>
                    <li>Safdarjung's Tomb
</li>
                    <li>Humayun’s Tomb
</li>
                    <li> Agrasen ki Baoli
</li>
                    Download offline maps before entering the forest
                <li>Respect the monument and avoid damaging the ruins</li>
                </ul>

                {/* FAQ */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Frequently Asked Questions (FAQs) about the Malcha Mahal
</h2>

                <div className="space-y-4 text-gray-700">
                    <p><b>Is Malcha Mahal haunted?</b><br />Malcha Mahal is often listed among Delhi’s haunted places due to its abandoned appearance and unusual history. However, there is no verified paranormal evidence.
</p>
                    <p><b>Is Malcha Mahalit safe?</b><br />Yes, during daytime.</p>
                    <p><b>Entry fee?</b><br />Free.</p>
                    <p><b>Walking time?</b><br />10–15 minutes.</p>
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

export default MalchaMahal;