// Latest_News.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTheaterMasks } from "react-icons/fa"
export default function Home_Entertainment_News() {

    return (
        <section className="bg-white text-black py-8 px-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FaTheaterMasks/> Entertainment
                </h2>
                <Link
                    to="/latest_enter"
                    className="text-sm text-black hover:underline"
                >
                    और देखें &gt;
                </Link>
            </div>

            <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6">
                    {/* News Card 1 */}
                    <div className="flex flex-col">
                        <img
                            src="/Image/en1.webp"
                            alt="Ukraine talks"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-bold text-lg">
                            "...और मैंने देखा शाहरुख खान सेट पर पोछा लगाने लगे!" 
                        </h3>

                    </div>

                    {/* News Card 2 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/en2.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                               डायरेक्टर अनिल शर्मा बोले, "गदर 3 की स्क्रिप्ट पर काम शुरू, 'गदर 2' की तरह 20 साल नहीं लगेंगे"
                            </p>
                        </div>


                    </div>
                    {/* News Card 3 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/en3.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                               सलमान की फिल्म के 26 साल बाद रणबीर के साथ विदेश में शूट करेंगे भंसाली
                            </p>
                        </div>


                    </div>
                </div>

                {/* CENTER COLUMN (BIG STORY) */}
                <div className="col-span-1">
                    <div className="mb-4">
                        <img
                            src="/Image/en4.webp"
                            alt="Main News"
                            className="w-full h-56 object-cover rounded-md"
                        />
                        <h2 className="font-bold text-lg mt-2">
                            'धूम 4' में रणबीर कपूर के अपोजिट होगा 1200 करोड़ी फिल्म देने वाला सुपरस्टार?   
                        </h2>
                    </div>

                    <div className="space-y-3">
                        <div className="flex gap-2 items-start">
                            <img
                                src="/Image/en5.webp"
                                alt="News"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <p className="text-sm text-gray-800">
                               अल्लू अर्जुन-एटली की AA22xA6 में दीपिका वॉरियर लुक में दिखेंगी, वो भी स्पेशल हथियार के साथ
                            </p>
                        </div>
                        <div className="flex gap-2 items-start">
                            <img
                                src="/Image/en6.webp"
                                alt="News"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <p className="text-sm text-gray-800">
                               'वॉर 2' पर YRF के भीतर मचा बवाल, पठान के असिस्टेंट डायरेक्टर ने बताया स्पाय यूनिवर्स की सबसे कमज़ोर फिल्म
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (HEADLINES LIST) */}
                <div className="flex flex-col gap-6">
                    {/* News Card 1 */}
                    <div className="flex flex-col">
                        <img
                            src="/Image/en7.webp"
                            alt="Ukraine talks"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-bold text-lg">
                            'कुली' की दुर्गति के बाद फिर से लोकेश कनगराज के साथ फिल्म करेंगे रजनीकांत!              
                        </h3>

                    </div>

                    {/* News Card 2 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/en8.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                "स्पाय यूनिवर्स की सबसे कमज़ोर फिल्म", 'पठान' के असिस्टेंट डायरेक्टर ने 'वॉर 2' की भद्द पीट दी
                            </p>
                        </div>


                    </div>
                    {/* News Card 3 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/en9.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                
                                पहले सोमवार को ही टिकट खिड़की पर धराशाई हो गई रजनीकांत की 'कुली'
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}