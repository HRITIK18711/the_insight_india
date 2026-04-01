import React, { useState } from "react";
import { stories } from "./Webstories";
import { Link } from "react-router-dom";

// ✅ REQUIRED DATA (fix for blank screen)
const trending_stories = [
  {
    title: "३७ लाखमा आयो राइड हाइट ड्राइभ ‘फायरफ्लाई’",
    image: "/images/news1.jpg",
  },
  {
    title: "ग्राण्ड एक्सचेन्ज कार्निभल सुरु",
    image: "/images/news2.jpg",
  },
];

const Upcoming_events = [
  {
    title: "लोकप्रिय: नयाँ इलेक्ट्रिक कार",
    image: "/images/news1.jpg",
  },
  {
    title: "लोकप्रिय: टप बाइक २०२६",
    image: "/images/news2.jpg",
  },
];

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState("recent");

  // ✅ SLIDER STATE
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerSlide = 3;

  const handleNext = () => {
    if (startIndex + itemsPerSlide < stories.length) {
      setStartIndex(startIndex + itemsPerSlide);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerSlide >= 0) {
      setStartIndex(startIndex - itemsPerSlide);
    }
  };

  return (
    <div className="w-full py-8 px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* 🔥 LEFT PANEL (WEBSTORIES ONLY) */}
        <div className="lg:col-span-3 relative">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ◀
          </button>

          {/* STORIES */}
          <div className="flex gap-6 justify-center">
            {stories.length > 0 &&
              stories
                .slice(startIndex, startIndex + itemsPerSlide)
                .map((item) => (
                  <Link to={`/story/${item.id}`} key={item.id}>
                    <div className="relative w-[220px] h-[380px] rounded-xl overflow-hidden shadow-lg">

                      {/* ✅ SAFE FALLBACK (if video fails, still visible) */}
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>

                      {/* text */}
                      <div className="absolute bottom-0 p-3 text-white">
                        <p className="text-sm font-semibold">
                          {item.title}
                        </p>
                        <p className="text-xs opacity-80">
                          {item.createdBy}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* ✅ RIGHT PANEL */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("Trending Stories")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${
                activeTab === "recent"
                  ? "border-red-600 text-red-600"
                  : "text-gray-500"
              }`}
            >
              Trending Stories
            </button>

            <button
              onClick={() => setActiveTab("Upcoming Events")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${
                activeTab === "popular"
                  ? "border-red-600 text-red-600"
                  : "text-gray-500"
              }`}
            >
              Upcoming Events
            </button>
          </div>

          <div className="space-y-4">
            {(activeTab === "recent" ? trending_stories : Upcoming_events).map(
              (news, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded"
                >
                  <img
                    src={news.image}
                    alt="news"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <p className="text-sm font-medium">
                    {news.title}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}