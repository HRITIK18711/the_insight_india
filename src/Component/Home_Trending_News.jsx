import React, { useRef, useState, useEffect } from "react";

export default function Home_Trending_News() {
  const sliderRef = useRef(null);

  const [visible, setVisible] = useState(4);
  const [cardWidth, setCardWidth] = useState(260);
  const GAP = 24;
  const [page, setPage] = useState(0);

  const news = [
    { img: "/Image/up.jpg", title: "Indian Army के जवान को खंभे से बांधकर पीटने वाले टोल प्लाजा वालों के साथ क्या हुआ?", rating: "4.9", reviews: "3,149" },
    { img: "/Image/up.jpg", title: "यौन उत्पीड़न की आरोपी महिला पर Karnataka High Court ने क्या फैसला सुनाया?", rating: "5.0", reviews: "287" },
    { img: "/Image/up.jpg", title: "डायरेक्टर AR Murugadoss ने बताया, रात को 2 बजे शूट करने पड़ते थे सिकंदर के सीन", rating: "4.9", reviews: "240" },
    { img: "/Image/up.jpg", title: "हरियाणा के भिवानी में 19 साल की मनीषा का मर्डर, लड़कों पर उतरे लोग", rating: "4.8", reviews: "313" },
    { img: "/Image/up01.jpg", title: "News example 5", rating: "4.7", reviews: "180" },
    { img: "/Image/up01.jpg", title: "News example 6", rating: "4.6", reviews: "220" },
    { img: "/Image/up01.jpg", title: "News example 7", rating: "4.9", reviews: "410" },
    { img: "/Image/up01.jpg", title: "News example 8", rating: "5.0", reviews: "512" },
  ];

  // 📱 Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisible(1); // mobile
        setCardWidth(280);
      } else {
        setVisible(4); // desktop
        setCardWidth(260);
      }
      setPage(0);
      if (sliderRef.current) {
        sliderRef.current.style.transform = "translateX(0px)";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPage = Math.ceil(news.length / visible) - 1;

  const scrollToPage = (p) => {
    setPage(p);
    const moveX = p * (cardWidth * visible + GAP * (visible - 1));
    sliderRef.current.style.transform = `translateX(-${moveX}px)`;
  };

  return (
    <section className="w-full px-4 md:px-6 py-10 bg-transparent text-black">
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore experiences near Delhi
        </h2>
        <p className="text-black-300 mt-1">Can’t-miss picks near you</p>
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">

        {page > 0 && (
          <button
            onClick={() => scrollToPage(page - 1)}
            className="absolute -left-3 md:-left-6 z-20 bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
          >
            ←
          </button>
        )}

        {/* VIEWPORT */}
        <div
          className="overflow-hidden"
          style={{
            width: `${cardWidth * visible + GAP * (visible - 1)}px`,
          }}
        >
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500"
          >
            {news.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                style={{ width: cardWidth }}
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[260px] md:h-[320px] object-cover rounded-xl group-hover:scale-105 transition duration-500"
                  />

                  <button className="absolute top-3 right-3 bg-black/60 rounded-full p-2">
                    ❤️
                  </button>
                </div>

                <h3 className="mt-3 font-semibold text-[15px] md:text-[16px] leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 mt-2 text-sm">
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-green-400">● ● ● ● ●</span>
                  <span>({item.reviews})</span>
                </div>

                <p className="mt-1 text-sm text-black-300">
                  from ₹5,560 per adult
                </p>
              </div>
            ))}
          </div>
        </div>

        {page < maxPage && (
          <button
            onClick={() => scrollToPage(page + 1)}
            className="absolute -right-3 md:-right-6 z-20 bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
