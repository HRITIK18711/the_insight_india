import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// All stories grouped by id
const storiesData = {
  1: [
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-01.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-02.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-03.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-04.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-05.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-06.mp4" },
  ],

  2: [
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-01.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-02.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-03.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-04.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-05.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-06.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-07.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-08.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-09.mp4" },
  ],

  3: [
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-01.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-02.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-03.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-04.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-05.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-06.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-07.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-08.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-09.mp4" },
  ],

  4: [
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-01.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-02.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-03.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-04.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-05.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-06.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-07.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-08.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-09.mp4" },
    { video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-10.mp4" },
  ],

  5: [
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-01.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-02.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-03.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-04.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-05.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-06.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-07.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-08.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bodhgaya-bihar-09.mp4" },
  ],

  6: [
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-02.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-03.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-04.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-05.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-06.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-07.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-08.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-09.mp4" },
  ],
};

export default function Stories() {
  const { id } = useParams();
  const navigate = useNavigate();

  const slides = storiesData[id] || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Story not found
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">

      {/* Close button outside */}
      <button
        onClick={() => navigate("/webstories")}
        className="absolute top-6 right-6 z-30 bg-white w-10 h-10 rounded-full text-black font-bold"
      >
        ✕
      </button>

      {/* Left navigation outside */}
      <button
        onClick={() => setIndex(index > 0 ? index - 1 : 0)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full z-30"
      >
        ◀
      </button>

      {/* Right navigation outside */}
      <button
        onClick={() =>
          setIndex(index < slides.length - 1 ? index + 1 : index)
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full z-30"
      >
        ▶
      </button>

      {/* Story frame */}
      <div className="relative w-[380px] h-[680px] rounded-2xl overflow-hidden">

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

        {/* Video */}
        <video
          key={index}
          src={slides[index].video}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}