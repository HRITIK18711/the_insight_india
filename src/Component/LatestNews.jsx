import React, { useState } from "react";
import { stories } from "./Webstories";
import { Link } from "react-router-dom";

const trending_stories = [
  {
    slug: "jama-masjid-delhi-travel-guide",
    title:
      "Jama Masjid Delhi Travel Guide: Timings, Entry Fee, History, How to Reach & Nearby Places",
    image: "/Image/Jama-Masjid-Delhi.jpg",
  },
  {
    slug: "mahabodhi-temple-bihar-travel-guide",
    title:
      "Mahabodhi Temple, Bodh Gaya Bihar: The Sacred Place Where Lord Buddha Found Enlightenment",
    image: "/Image/mahabhodi-temple-01.jpg",
  },
];

const Upcoming_events = [];

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState("trending");
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

        {/* LEFT PANEL */}
        <div className="lg:col-span-3 relative">

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ◀
          </button>

          <div className="flex gap-6 justify-center">
            {stories
              .slice(startIndex, startIndex + itemsPerSlide)
              .map((item) => (
                <Link to={`/webstories/${item.slug}`} key={item.slug}>
                  <div className="relative w-[220px] h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer">

                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

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

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-xl shadow p-4">

          <div className="flex border-b mb-4">

            <button
              onClick={() => setActiveTab("trending")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${
                activeTab === "trending"
                  ? "border-red-600 text-red-600"
                  : "text-gray-500"
              }`}
            >
              Trending Stories
            </button>

            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${
                activeTab === "upcoming"
                  ? "border-red-600 text-red-600"
                  : "text-gray-500"
              }`}
            >
              Upcoming Events
            </button>

          </div>

          <div className="space-y-4">
            {(activeTab === "trending"
              ? trending_stories
              : Upcoming_events
            ).map((news) => (

              <Link to={`/${news.slug}`} key={news.slug}>
                <div className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded cursor-pointer">

                  <img
                    src={news.image}
                    alt="news"
                    className="w-20 h-16 object-cover rounded"
                  />

                  <p className="text-sm font-medium">
                    {news.title}
                  </p>

                </div>
              </Link>

            ))}
          </div>

        </div>

      </div>
    </div>
  );
}