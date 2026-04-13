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
  {
    slug: "india-gate-delhi-travel-guide",
    title:
      "India Gate Delhi Travel Guide: History, Timings, Best Time to Visit & How to Reach",
    image: "/Image/india-gate-delhi-01.png",
  },
  {
    slug: "great-buddha-statue-bihar-travel-guide",
    title:
      "Great Buddha Statue Bodh Gaya, Bihar: Exploring the 80-Foot Symbol of Peace and Spiritual Calm",
    image: "/Image/great-buddha-statue-bodh-gaya-bihar-01.png",
  },
  {
    slug: "malcha-mahal-delhi-travel-guide",
    title:
      "Malcha Mahal Delhi: The Haunted Palace Hidden Inside a Forest (Complete Travel Guide)",
    image: "/Image/malcha-mahal-delhi-01.png",
  },
  {
    slug: "delhi-mysterious-place-travel-guide",
    title:
      "Delhi’s Most Mysterious Places People Still Talk About",
    image: "/Image/mysterious-places-in-delhi-01.png",
  },
  {
    slug: "qutub-minar-delhi-travel-guide",
    title:
      "Qutub Minar Delhi: History, Height, Timings, Entry Fee, How to Reach & Nearby Places",
    image: "/Image/qutub-minar-delhi-01.png",
  },
  {
    slug: "connaught-place-new-delhi-travel-guide",
    title:
      "Things to Do in Connaught Place Delhi: Best Places & Food Guide",
    image: "/Image/connaught-place-new-delhi-travel-guide-01.png",
  },
  {
    slug: "lotus-temple-delhi-travel-guide",
    title:
      "Lotus Temple Delhi: A Silent Escape in the Heart of Chaos",
    image: "/Image/lotus-temple-delhi-travel-guide-01.png",
  },

  {
    slug: "hazrat-nizamuddin-dargah-delhi-travel-guide",
    title:
      "Hazrat Nizamuddin Dargah, Delhi: History, Qawwali Timings, Entry & Complete Travel Guide",
    image: "/Image/hazrat-nizamuddin-dargah-delhi-travel-guide-01.png",
  },


];

const Upcoming_events = [
  {
    slug: "javed-ali-spellbound-tour-noida",
    title: "Javed Ali Spellbound Tour Noida",
    image: "/Image/javed-ali-spellbound-tour-noida.jpg",
  },
  {
    slug: "sanam-night-of-nostalgia-delhi",
    title: "Sanam Night Of Nostalgia Delhi",
    image: "/Image/sanam-night-of-nostalgia-delhi.jpg",
  },
  {
    slug: "whipmantra-concert-gurugram",
    title: "Whipmantra Concert Gurugram",
    image: "/Image/whipmantra-concert-gurugram.jpg",
  },
];

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

        {/* LEFT PANEL (SLIDER) */}
        {/* LEFT PANEL (SLIDER) */}
        <div className="lg:col-span-3 relative">

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ◀
          </button>

          {/* SLIDER */}
          <div className="flex gap-6 justify-center">
            {stories
              .slice(startIndex, startIndex + itemsPerSlide)
              .map((item) => (

                <Link to={`/webstories/${item.slug}`} key={item.slug}>
                  <div className="relative w-[220px] h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer">

                    {/* 🔥 IMAGE + VIDEO SUPPORT */}
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* TEXT */}
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

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
          >
            ▶
          </button>

        </div>

        {/* RIGHT PANEL (SCROLLABLE) */}
        <div className="bg-white rounded-xl shadow p-4 h-[500px] flex flex-col">

          {/* TABS */}
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("trending")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${activeTab === "trending"
                ? "border-red-600 text-red-600"
                : "text-gray-500"
                }`}
            >
              Trending Stories
            </button>

            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-2 text-sm font-semibold border-b-2 ${activeTab === "upcoming"
                ? "border-red-600 text-red-600"
                : "text-gray-500"
                }`}
            >
              Upcoming Events
            </button>
          </div>

          {/* SCROLLABLE LIST */}
          <div className="space-y-4 overflow-y-auto pr-1 flex-1">

            {(activeTab === "trending"
  ? trending_stories
  : Upcoming_events
).map((news) => (

  <Link
    to={
      activeTab === "upcoming"
        ? `/events/${news.slug}`
        : `/${news.slug}`
    }
    key={news.slug}
  >
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