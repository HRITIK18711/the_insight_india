import { useState, useEffect } from "react";

const slides = [
  { img: "/Image/1.png" },
  { img: "/Image/2.png" },
  { img: "/Image/3.png" },
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
    <div className="w-full h-[100%]  flex items-center justify-center mb-6 relative pt-24">

      {/* Dark side overlay */}
      <div className="absolute inset-0  z-0"></div>

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
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Left button */}
        <button
          onClick={() => setIndex(index > 0 ? index - 1 : 0)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          ◀
        </button>

        {/* Right button */}
        <button
          onClick={() =>
            setIndex(index < slides.length - 1 ? index + 1 : index)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
