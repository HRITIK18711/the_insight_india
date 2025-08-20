// Latest_News.jsx
import React from "react";
import { Link } from "react-router-dom";
const newsItems = [
  {
    img: "/Image/news1.webp",
    title:
      "यूपी के अस्पताल में डॉक्टर बनकर पहुंचा शराबी, छात्रों से पूछकर किया मरीजों का इलाज, फिर...",
  },
  {
    img: "/Image/news2.webp",
    title:
      '"...और मैंने देखा शाहरुख खान सेट पर पोछा लगाने लगे!"',
  },
  {
    img: "/Image/news3.webp",
    title:
      "डायरेक्टर अनिल शर्मा बोले, 'गदर 3 की स्क्रिप्ट पर काम शुरू, गदर 2 की तरह 20 साल नहीं लगेंगे'",
  },
  {
    img: "/Image/news1.webp",
    title:
      "यूपी के अस्पताल में डॉक्टर बनकर पहुंचा शराबी, छात्रों से पूछकर किया मरीजों का इलाज, फिर...",
  },
  {
    img: "/Image/news2.webp",
    title:
      '"...और मैंने देखा शाहरुख खान सेट पर पोछा लगाने लगे!"',
  },
  {
    img: "/Image/news3.webp",
    title:
      "डायरेक्टर अनिल शर्मा बोले, 'गदर 3 की स्क्रिप्ट पर काम शुरू, गदर 2 की तरह 20 साल नहीं लगेंगे'",
  },
  {
    img: "/Image/news1.webp",
    title:
      "यूपी के अस्पताल में डॉक्टर बनकर पहुंचा शराबी, छात्रों से पूछकर किया मरीजों का इलाज, फिर...",
  },
  {
    img: "/Image/news2.webp",
    title:
      '"...और मैंने देखा शाहरुख खान सेट पर पोछा लगाने लगे!"',
  },
  {
    img: "/Image/news3.webp",
    title:
      "डायरेक्टर अनिल शर्मा बोले, 'गदर 3 की स्क्रिप्ट पर काम शुरू, गदर 2 की तरह 20 साल नहीं लगेंगे'",
  },
];

export default function Miscal() {
  return (
    <div className="w-full px-6 py-6 mt-15">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-pink-600 mb-4"><span className="text-red-600"><Link to="/">Home</Link></span>|Miscellaneous</h2>
      

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 leading-snug">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}