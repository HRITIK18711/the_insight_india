import React, { useState, useEffect } from "react";
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
  const [startIndex, setStartIndex] = useState(0);
  const [autoIndex, setAutoIndex] = useState(0);

  const itemsPerSlide = 4;

  // 🔥 AUTO SLIDER (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prev) =>
        prev + 1 >= stories.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="lg:col-span-3 relative overflow-hidden">

          {/* DESKTOP (UNCHANGED) */}
          <div className="hidden sm:block mr-1">

            <button
              onClick={handlePrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
            >
              ◀
            </button>

            <div className="flex gap-6 justify-center">
              {stories
                .slice(startIndex, startIndex + itemsPerSlide)
                .map((item) => (
                  <Link to={`/webstories/${item.slug}`} key={item.slug}>
                    <div className="relative w-[220px] h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer">

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

                      <div className="absolute inset-0 bg-black/40"></div>

                      <div className="absolute bottom-0 p-3 text-white">
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs opacity-80">{item.createdBy}</p>
                      </div>

                    </div>
                  </Link>
                ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black text-white px-3 py-2 rounded-full"
            >
              ▶
            </button>

          </div>

          {/* MOBILE */}
          <div className="sm:hidden overflow-hidden w-full">

            <div
              className="flex transition-transform duration-500 w-full"
              style={{
                transform: `translateX(-${autoIndex * 100}%)`,
              }}
            >
              {stories.map((item) => (
                <div className="w-full flex-shrink-0" key={item.slug}>

                  <Link to={`/webstories/${item.slug}`}>
                    <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg cursor-pointer">

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

                      <div className="absolute inset-0 bg-black/40"></div>

                      <div className="absolute bottom-0 p-3 text-white">
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs opacity-80">{item.createdBy}</p>
                      </div>

                    </div>
                  </Link>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* RIGHT PANEL (ONLY UPCOMING) */}
        <div className="bg-white rounded-xl shadow p-4 h-[380px] flex flex-col">

          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

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