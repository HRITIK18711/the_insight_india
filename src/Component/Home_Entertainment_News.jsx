import React, { useEffect, useState } from "react";

const cards = [
  { title: "Ayodhya", img: "/Image/Delhi.png" },
  { title: "Varanasi", img: "/Image/food.jpg" },
  { title: "Lucknow", img: "/Image/culture.jpg" },
  { title: "Prayagraj", img: "/Image/water.jpg" },
];

export default function Home_Entertainment_News() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () =>
    setIndex((i) => (i - 1 + cards.length) % cards.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
          Things To Do in Uttar Pradesh
        </h2>
        <p className="text-black mb-8">Cities and Spirituality</p>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {cards.map((item, i) => (
            <div key={i} className="w-full max-w-[260px] group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden relative w-full flex justify-center items-center">
          <div className="w-[260px] mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {cards.map((item, i) => (
                <div key={i} className="min-w-full flex justify-center">
                  <div className="w-[260px]">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
