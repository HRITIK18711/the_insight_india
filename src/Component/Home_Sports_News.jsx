// Latest_News.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSportsBaseball } from "react-icons/md";
export default function Home_Sports_News() {

    return (
        <section className="bg-white text-black py-8 px-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MdOutlineSportsBaseball/> Sports
                </h2>
                <Link
                    to="/sports"
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
                            src="/Image/sp1.webp"
                            alt="Ukraine talks"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-bold text-lg">
                            पीटरसन ने 'जोकर' कहा तब भी नहीं दिया जवाब, रायुडू ने अब बताई वजह
                        </h3>

                    </div>

                    {/* News Card 2 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/sp2.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                हॉकी एशिया कप के लिए भारत नहीं आएगा पाकिस्तान, कहा- 'सुरक्षा का डर है'
                            </p>
                        </div>


                    </div>
                    {/* News Card 3 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/sp3.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                रोहित शर्मा 2027 का वर्ल्ड कप जरूर खेलेंगे क्योंकि...', रायुडू का बड़ा दावा
                            </p>
                        </div>


                    </div>
                </div>

                {/* CENTER COLUMN (BIG STORY) */}
                <div className="col-span-1">
                    <div className="mb-4">
                        <img
                            src="/Image/sp4.webp"
                            alt="Main News"
                            className="w-full h-56 object-cover rounded-md"
                        />
                        <h2 className="font-bold text-lg mt-2">
                            यानिक सिनर से जीतकर भी खुश नहीं अल्कराज, भावुक पोस्ट में बताई वजह
                        </h2>
                    </div>

                    <div className="space-y-3">
                        <div className="flex gap-2 items-start">
                            <img
                                src="/Image/sp5.webp"
                                alt="News"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <p className="text-sm text-gray-800">
                                महिला वर्ल्ड कप के लिए टीम इंडिया घोषित, शेफाली को नहीं मिला मौका
                            </p>
                        </div>
                        <div className="flex gap-2 items-start">
                            <img
                                src="/Image/sp6.webp"
                                alt="News"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <p className="text-sm text-gray-800">
                                'वैभव सूदवंशी को मौका दो', एशिया कप की टीम अनाउंसमेंट से पहले...
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (HEADLINES LIST) */}
                <div className="flex flex-col gap-6">
                    {/* News Card 1 */}
                    <div className="flex flex-col">
                        <img
                            src="/Image/sp7.webp"
                            alt="Ukraine talks"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-bold text-lg">
                            नहीं रुकने वाले सरफराज! एक और सेंचुरी के साथ सेलेक्टर्स को दिया जवाब, कब तक करेंगे नजरअंदाज
                        </h3>

                    </div>

                    {/* News Card 2 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/sp8.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                रोहित-कोहली को सलाह, गावस्कर की इज्जत करो!
                            </p>
                        </div>


                    </div>
                    {/* News Card 3 */}
                    <div className="flex flex-col">
                        <div className="flex items-start gap-3 p-2  rounded-md shadow-sm w-[400px] bg-white">
                            {/* Image */}
                            <img
                                src="/Image/sp9.webp"
                                alt="Hockey News"
                                className="w-32 h-20 object-cover rounded"
                            />

                            {/* Text */}
                            <p className="text-lg text-gray-800 leading-snug">
                                
                                'खेल से ऊपर कोई नहीं', बुमराह को लेकर आगरकर पर भड़के गावस्कर
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}