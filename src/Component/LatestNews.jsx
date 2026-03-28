import React from "react";

// Replace the data below with your dynamic content or API data
const featuredNews = {
  title: "बालोनको मोटरसाइकल केज, किन होन्डा सीआरएफ 300",
  description:
    "काठमाडौँ। भावी प्रधानमन्त्री बालेन शाहले चुनावी अभियानमा कम्मा प्रायः हरेक स्थानमा जाँदा फरक फरक गाडी चढे। कोशी भ्रमण गर्दा देखेको लुक्स र रेसिङ फील...",
  image: "/images/featured-bike.jpg",
};

const smallNews = [
  {
    title:
      "नेपालमा १६० सीसीमा पाइने एक मात्र क्रुजर मोटरसाइकल, ७ अब्बल पक्ष",
    image: "/images/news1.jpg",
  },
  {
    title:
      "सस्तो ब्याजदर र वारेन्टी बढेसँगै ‘मिनो’ एसयूभीको बिक्री बढ्यो",
    image: "/images/news2.jpg",
  },
  {
    title: "सन २०२६ मा १०० युनिट बढी नेपाल आएको ७ मोडेल",
    image: "/images/news3.jpg",
  },
];

const recentNews = [
  {
    title: "३७ लाखमा आयो राइड हाइट ड्राइभ ‘फायरफ्लाई’",
    image: "/images/side1.jpg",
  },
  {
    title:
      "भृकुटीमण्डपमा टिमिस्को ‘ग्राण्ड एक्सचेन्ज एण्ड फाइनान्स कार्निभल’ सुरु",
    image: "/images/side2.jpg",
  },
  {
    title: "शोभाती कोरिडोरको अवैध संरचनामा चलायो डोजर",
    image: "/images/side3.jpg",
  },
  {
    title: "चार कार ब्राण्डको ५ अफर, देशभर लिन सकिने",
    image: "/images/side4.jpg",
  },
];

const popularNews = [
  {
    title: "लोकप्रिय: नयाँ इलेक्ट्रिक कार बजारमा",
    image: "/images/pop1.jpg",
  },
  {
    title: "लोकप्रिय: २०२६ का टप ५ बाइक",
    image: "/images/pop2.jpg",
  },
  {
    title: "लोकप्रिय: एसयूभी बिक्रीमा वृद्धि",
    image: "/images/pop3.jpg",
  },
];

export default function LatestNews() {
  const [activeTab, setActiveTab] = React.useState("recent");
  return (
    <div className="w-full py-8 px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Featured News with Blur Background */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Background Image */}
            <img
              src={featuredNews.image}
              alt="featured"
              className="w-full h-[320px] object-cover"
            />

            {/* Blur + Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white z-10">
              <h2 className="text-xl md:text-2xl font-bold leading-snug max-w-2xl">
                {featuredNews.title}
              </h2>
              <p className="mt-2 text-sm md:text-base max-w-xl">
                {featuredNews.description}
              </p>
              <button className="mt-4 w-fit bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-sm font-semibold transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Bottom News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={news.image}
                  alt="news"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("recent")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 transition ${
                activeTab === "recent"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              Recent News
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 transition ${
                activeTab === "popular"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              Popular News
            </button>
          </div>

          <div className="space-y-4">
            {(activeTab === "recent" ? recentNews : popularNews).map((news, index) => (
              <div
                key={index}
                className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded transition"
              >
                <img
                  src={news.image}
                  alt="side news"
                  className="w-20 h-16 object-cover rounded"
                />
                <p className="text-sm font-medium leading-snug">
                  {news.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
