import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const cards = [
  { title: "Treks to Explore", img: "/Image/Treks.png" },
  { title: "Food to Explore ", img: "/Image/fooduttarakhand.png" },
  { title: "Yatras to Explore", img: "/Image/Yatras.png" },
  { title: "Hidden Getaway", img: "/Image/Hiddengateaways.png" },
];

export default function Home_Sports_News() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () =>
    setIndex((i) => (i - 1 + cards.length) % cards.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* SEO TAGS */}
      <Helmet>
        <title>Things To Do in Uttarakhand | Treks, Temples & Hidden Places | RUExplores</title>

        <meta
          name="description"
          content="Discover the best things to do in Uttarakhand including treks, temples, yatras, food and hidden travel destinations. Explore Uttarakhand with RUExplores."
        />

        <meta
          name="keywords"
          content="Things to do in Uttarakhand, Uttarakhand treks, Uttarakhand temples, yatras in Uttarakhand, hidden places in Uttarakhand, Uttarakhand travel guide"
        />

        <link rel="canonical" href="https://ruexplores.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Things To Do in Uttarakhand | RUExplores"
        />
        <meta
          property="og:description"
          content="Explore treks, temples, yatras and hidden destinations in Uttarakhand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruexplores.com/" />
        <meta
          property="og:image"
          content="https://ruexplores.com/Image/Treks.png"
        />
      </Helmet>

      <div className="w-full px-4 sm:px-6 py-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
            Things To Do in Uttarakhand
          </h2>
          <p className="text-white mb-8">Treks and Temples</p>

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
    </>
  );
}