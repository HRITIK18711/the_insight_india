import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const slides = [
  { img: "/Image/01.png" },
  { img: "/Image/02.png" },
  { img: "/Image/03.png" },
  { img: "/Image/04.png" },
  { img: "/Image/05.png" },
  { img: "/Image/06.png" },
  { img: "/Image/07.png" },
  { img: "/Image/08.png" },
];

export default function Stories() {

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();   // ✅ added

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="w-full h-screen flex items-center justify-center bg-black">

      <div className="relative w-[380px] h-[680px] rounded-2xl overflow-hidden">

        {/* ❌ Close Button */}
        <button
          onClick={() => navigate("/webstories")}
          className="absolute top-4 right-4 z-30 bg-white w-10 h-10 rounded-full text-black font-bold"
        >
          ✕
        </button>

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

        {/* Left */}

        <button
          onClick={() => setIndex(index > 0 ? index - 1 : 0)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full"
        >
          ◀
        </button>

        {/* Right */}

        <button
          onClick={() =>
            setIndex(index < slides.length - 1 ? index + 1 : index)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full"
        >
          ▶
        </button>

      </div>

    </div>
  );
}