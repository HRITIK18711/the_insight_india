import React from "react";

export default function Main_News_Section() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6">
                {/* News Card 1 */}
                <div className="flex flex-col">
                    <img
                        src="/Image/news1.jpg" 
                        alt="Ukraine talks"
                        className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="mt-2 font-bold text-lg">
                        वाशिंगटन में यूक्रेन वार्ता से चार प्रमुख निष्कर्ष
                    </h3>
                    <p className="text-sm text-gray-600">
                        यूक्रेन के राष्ट्रपति ज़ेलेंस्की डोनाल्ड ट्रम्प के साथ ओवल ऑफिस में एक और विनाशकारी बैठक से बचने में कामयाब रहे।
                    </p>
                    <span className="text-xs text-gray-400 mt-1">14 hrs ago | Europe</span>
                </div>

                {/* News Card 2 */}
                <div className="flex flex-col">
                    <img
                        src="/Image/news2.jpg"
                        alt="Air Canada"
                        className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="mt-2 font-bold text-lg">
                        यूनियन के साथ वेतन समझौते के बाद एयर कनाडा उड़ानें फिर से शुरू करेगा
                    </h3>
                    <p className="text-sm text-gray-600">
                        शनिवार को वेतन को लेकर लगभग 10,000 केबिन क्रू ने विरोध प्रदर्शन किया, लेकिन मध्यस्थता से हुई बातचीत से सफलता मिली।
                    </p>
                    <span className="text-xs text-gray-400 mt-1">12 hrs ago | US & Canada</span>
                </div>
            </div>

            {/* CENTER COLUMN (BIG STORY) */}
            <div className="flex flex-col">
                <img
                    src="/Image/mainnews.jpg"
                    alt="Trump Ukraine"
                    className="w-full h-80 object-cover rounded-lg"
                />
                <h2 className="mt-3 text-2xl font-extrabold leading-snug">
                    
                   ट्रम्प ने सुरक्षा गारंटी के तहत यूक्रेन में अमेरिकी सेना भेजने की संभावना से इनकार किया।
                </h2>
                <p className="mt-2 text-gray-700">
                    अमेरिकी राष्ट्रपति ने कहा कि यदि रूस के राष्ट्रपति व्लादिमीर पुतिन शांति प्रक्रिया में सहयोग नहीं करेंगे तो उन्हें "कठिन स्थिति" का सामना करना पड़ेगा।
                </p>
            </div>

            {/* RIGHT COLUMN (HEADLINES LIST) */}
            <div className="flex flex-col divide-y">
                <div className="pb-3">
                    <h3 className="font-bold text-lg">
                       उपचुनाव में जीत से कनाडा के कंजर्वेटिव नेता पोलीव्रे की वापसी का रास्ता साफ
                    </h3>
                    <p className="text-sm text-gray-600">
                        अप्रैल के आम चुनाव में एक अन्य निर्वाचन क्षेत्र में अपनी सीट हारने के बाद पोलीव्रे को उपचुनाव में जीत मिलने की संभावना है।
                    </p>
                    <span className="text-xs text-gray-400">6 hrs ago | US & Canada</span>
                </div>

                <div className="py-3">
                    <h3 className="font-bold text-lg">
                       पूरा चर्च स्वीडिश शहर में दो दिवसीय यात्रा पर निकला
                    </h3>
                    <p className="text-sm text-gray-600">
                        113 वर्ष पुरानी इस ऐतिहासिक लकड़ी की इमारत के धंसने का खतरा है और इसे विशाल लुढ़कते प्लेटफार्मों पर 5 किमी दूर ले जाया जाएगा।
                    </p>
                    <span className="text-xs text-gray-400">5 hrs ago | Europe</span>
                </div>

                <div className="py-3">
                    <h3 className="font-bold text-lg">
                        केटामाइन क्वीन' मैथ्यू पेरी ओवरडोज़ मामले में दोषी करार देगी
                    </h3>
                    <p className="text-sm text-gray-600">
                        अमेरिकी-ब्रिटिश दोहरी नागरिकता वाला यह व्यक्ति उन पांच लोगों में से एक है जिन पर अभिनेता को केटामाइन की आपूर्ति करने का आरोप लगाया गया था।
                    </p>
                    <span className="text-xs text-gray-400">15 hrs ago | US & Canada</span>
                </div>

                <div className="pt-3">
                    <h3 className="font-bold text-lg">
                       मध्यस्थ गाजा में नए युद्धविराम प्रस्ताव पर इजरायल की प्रतिक्रिया का इंतजार कर रहे हैं
                    </h3>
                    <p className="text-sm text-gray-600">
                        कतर का कहना है कि यह 60 दिन के युद्ध विराम के अमेरिकी प्रस्ताव के "लगभग समान" है, जिसके दौरान 50 बंधकों में से लगभग आधे को 
                        रिहा कर दिया जाएगा।
                    </p>
                    <span className="text-xs text-gray-400">3 hrs ago | World</span>
                </div>
            </div>
        </div>
    );
}