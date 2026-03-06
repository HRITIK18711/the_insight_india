import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const slides = [
  { img: "/Image/1.png", alt: "Travel story exploring destinations in India" },
  { img: "/Image/2.png", alt: "Travel story featuring culture and food" },
  { img: "/Image/3.png", alt: "Travel story showcasing hidden places" },
];

export default function Webstories() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* SEO TAGS */}
      <Helmet>
        <title>Travel Web Stories | Explore India Stories | RUExplores</title>

        <meta
          name="description"
          content="Explore visual travel web stories from Delhi, Uttarakhand and Uttar Pradesh. Discover places, food, markets and hidden travel destinations through RUExplores stories."
        />

        <meta
          name="keywords"
          content="travel web stories, Delhi travel stories, Uttarakhand travel stories, Uttar Pradesh travel stories, India travel stories"
        />

        <link rel="canonical" href="https://ruexplores.com/webstories" />

        {/* Open Graph */}
        <meta property="og:title" content="Travel Web Stories | RUExplores" />
        <meta
          property="og:description"
          content="Discover travel stories and destinations through visual web stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruexplores.com/webstories" />
        <meta property="og:image" content="https://ruexplores.com/Image/1.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Web Stories | RUExplores" />
        <meta
          name="twitter:description"
          content="Explore visual travel stories and discover new destinations."
        />
        <meta name="twitter:image" content="https://ruexplores.com/Image/1.png" />
      </Helmet>

      <div className="w-full h-[100%] flex items-center justify-center mb-6 relative pt-24">
        {/* Dark side overlay */}
        <div className="absolute inset-0 z-0"></div>

        {/* Story container */}
        <div className="relative z-10 w-[380px] h-[680px] rounded-2xl overflow-hidden shadow-2xl bg-black">

          {/* Progress bars */}
          <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i <= index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Image */}
          <img
            src={slides[index].img}
            alt={slides[index].alt}
            className="w-full h-full object-cover"
          />

          {/* Left button */}
          <button
            onClick={() => setIndex(index > 0 ? index - 1 : 0)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
            aria-label="Previous story"
          >
            ◀
          </button>

          {/* Right button */}
          <button
            onClick={() =>
              setIndex(index < slides.length - 1 ? index + 1 : index)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
            aria-label="Next story"
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
}