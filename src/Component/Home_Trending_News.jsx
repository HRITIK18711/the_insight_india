// Latest_News.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function Home_Trending_News() {
  
  return (
    <section className="bg-white text-black py-8 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          🗑️ Trending Video
        </h2>
        <Link
          to="/latest-news"
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
              src="/Image/lt1.webp"
              alt="Ukraine talks"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-lg">
              Indian Army के जवान को खंभे से बांधकर पीटने वाले टोल प्लाजा वालों के साथ क्या हुआ?
            </h3>

          </div>

          {/* News Card 2 */}
          <div className="flex flex-col">
            <img
              src="/Image/lt2.webp"
              alt="Air Canada"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-lg">
              यौन उत्पीड़न की आरोपी महिला पर Karnataka High Court ने क्या फैसला सुनाया?
            </h3>

          </div>
        </div>

        {/* CENTER COLUMN (BIG STORY) */}
        <div className="flex flex-col">
          <img
            src="/Image/lt3.webp"
            alt="Trump Ukraine"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h2 className="mt-3 text-2xl font-extrabold leading-snug">
            डायरेक्टर AR Murugadoss ने बताया, रात को 2 बजे शूट करने पड़ते थे सिकंदर के सीन
          </h2>

        </div>

        {/* RIGHT COLUMN (HEADLINES LIST) */}
        <div className="flex flex-col divide-y">
          <div className="flex flex-col gap-6">
          {/* News Card 1 */}
          <div className="flex flex-col">
            <img
              src="/Image/lt4.webp"
              alt="Ukraine talks"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-lg">
              हरियाणा के भिवानी में 19 साल की मनीषा का मर्डर, लड़कों पर उतरे लोग
            </h3>

          </div>

          {/* News Card 2 */}
          <div className="flex flex-col">
            <img
              src="/Image/lt5.webp"
              alt="Air Canada"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-lg">
              मुख्य चुनाव आयुक्त को हटाने के लिए विपक्ष लगा रहा जोर, लेकिन क्या ये संभव है?
            </h3>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}