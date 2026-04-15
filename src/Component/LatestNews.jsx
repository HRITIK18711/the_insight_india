import React, { useState, useEffect, useRef } from "react";
import { stories } from "./Webstories";
import { Link } from "react-router-dom";

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
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const visibleCards = 4;

  // 🔥 card width (240 + gap 16)
  const cardWidth = 256;

  // 🔥 Clone
  const extendedStories = [
    ...stories,
    ...stories.slice(0, visibleCards),
  ];

  // 👉 AUTO SLIDE
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // 👉 RESET LOOP
  useEffect(() => {
    if (index >= stories.length) {
      setTimeout(() => {
        setIndex(0);
      }, 200);
    }
  }, [index]);

  return (
    <div className="w-full py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT PANEL */}
        <div className="lg:col-span-3 relative overflow-hidden">

          {/* FADE EDGES */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>

          {/* WRAPPER (IMPORTANT FIX) */}
          <div className="pl-3"> {/* 👈 LEFT OFFSET FIX */}

            {/* SLIDER */}
            <div
              className="flex gap-4 items-center transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * cardWidth}px)`,
              }}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              {extendedStories.map((item, i) => {
                const isActive = i >= index && i < index + visibleCards;

                return (
                  <div
                    key={i}
                    className={`
                      flex-shrink-0 transition-all duration-700
                      ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}
                    `}
                    style={{ width: "240px" }}
                  >
                    <Link to={`/webstories/${item.slug}`}>

                      {/* CARD */}
                      <div className="relative w-full aspect-[9/16] rounded-[20px] overflow-hidden shadow-xl group cursor-pointer">

                        {/* MEDIA */}
                        {item.video ? (
                          <video
                            src={item.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        )}

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* TEXT */}
                        <div className="absolute bottom-0 p-4 text-white">
                          <p className="text-sm font-semibold leading-tight">
                            {item.title}
                          </p>
                          <p className="text-xs opacity-80 mt-1">
                            {item.createdBy}
                          </p>
                        </div>

                      </div>

                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-xl shadow p-4 h-[380px] flex flex-col">

          <h2 className="text-lg font-semibold mb-4">
            Upcoming Events
          </h2>

          <div className="space-y-4 overflow-y-auto pr-1 flex-1">
            {Upcoming_events.map((news) => (
              <Link to={`/events/${news.slug}`} key={news.slug}>
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