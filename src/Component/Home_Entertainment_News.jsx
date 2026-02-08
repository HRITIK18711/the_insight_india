import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home_Entertainment_News() {
  const CARD_WIDTH = 260;
  const GAP = 24; // gap-6 = 24px
  const VISIBLE = 4;

  const sliderRef = useRef(null);
  const [page, setPage] = useState(0);

  const news = [
    { img: "/Image/lt1.webp", title: "Indian Army के जवान को खंभे से बांधकर पीटने वाले टोल प्लाजा वालों के साथ क्या हुआ?", rating: "4.9", reviews: "3,149" },
    { img: "/Image/lt2.webp", title: "यौन उत्पीड़न की आरोपी महिला पर Karnataka High Court ने क्या फैसला सुनाया?", rating: "5.0", reviews: "287" },
    { img: "/Image/lt3.webp", title: "डायरेक्टर AR Murugadoss ने बताया, रात को 2 बजे शूट करने पड़ते थे सिकंदर के सीन", rating: "4.9", reviews: "240" },
    { img: "/Image/lt4.webp", title: "हरियाणा के भिवानी में 19 साल की मनीषा का मर्डर, लड़कों पर उतरे लोग", rating: "4.8", reviews: "313" },
    { img: "/Image/lt5.webp", title: "News example 5", rating: "4.7", reviews: "180" },
    { img: "/Image/lt6.webp", title: "News example 6", rating: "4.6", reviews: "220" },
    { img: "/Image/lt7.webp", title: "News example 7", rating: "4.9", reviews: "410" },
    { img: "/Image/lt8.webp", title: "News example 8", rating: "5.0", reviews: "512" },
  ];

  const maxPage = Math.ceil(news.length / VISIBLE) - 1;

  const scrollToPage = (p) => {
    setPage(p);
    const moveX = p * (CARD_WIDTH * VISIBLE + GAP * (VISIBLE - 1));
    sliderRef.current.style.transform = `translateX(-${moveX}px)`;
  };

  return (
    // ✅ removed white bg
    <section className="w-full px-6 py-10 bg-transparent text-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-3xl font-bold">
          Explore experiences near Uttrakhand
        </h2>
        <p className="text-black-300 mt-1">Can’t-miss picks near you</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-center">

        {/* LEFT ARROW */}
        {page > 0 && (
          <button
            onClick={() => scrollToPage(page - 1)}
            className="absolute -left-6 z-20 bg-black/60 text-black shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
          >
            ←
          </button>
        )}

        {/* VIEWPORT */}
        <div
          className="overflow-hidden"
          style={{ width: `${CARD_WIDTH * VISIBLE + GAP * (VISIBLE - 1)}px` }}
        >
          {/* TRACK */}
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500"
          >
            {news.map((item, index) => (
              <div
                key={index}
                className="w-[260px] flex-shrink-0 group"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[320px] object-cover rounded-xl group-hover:scale-105 transition duration-500"
                  />

                  {/* Heart */}
                  <button className="absolute top-3 right-3 bg-black/60 text-black rounded-full p-2 shadow">
                    ❤️
                  </button>
                </div>

                <h3 className="mt-3 font-semibold text-[16px] leading-snug line-clamp-2 text-black">
                  {item.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-sm">
                  <span className="text-black-400 font-bold">
                    {item.rating}
                  </span>
                  <span className="text-green-400">● ● ● ● ●</span>
                  <span className="text-black-400">({item.reviews})</span>
                </div>

                <p className="mt-1 text-sm text-black-300">
                  from ₹5,560 per adult
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        {page < maxPage && (
          <button
            onClick={() => scrollToPage(page + 1)}
            className="absolute -right-6 z-20 bg-black/60 text-black shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
