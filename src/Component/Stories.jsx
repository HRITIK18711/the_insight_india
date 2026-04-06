import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { stories } from "./Webstories"; // make sure slug yaha defined ho

// 🔥 SLUG BASED DATA
const storiesData = {
  "qutub-minar-delhi": [
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-01.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-02.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-03.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-04.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-05.mp4" },
    { video: "/Video/qutub-minar-delhi/qutub-minar-delhi-06.mp4" },
  ],

  "mahabodhi-temple-bodhgaya-bihar": [
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-01.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-02.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-03.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-04.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-05.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-06.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-07.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-08.mp4" },
    { video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-09.mp4" },
  ],

  "valley-of-flowers-trek-uttarakhand": [
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-01.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-02.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-03.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-04.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-05.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-06.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-07.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-08.mp4" },
    { video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-09.mp4" }
  ],

  "kedarkantha-trek-uttarakhand": [
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

  "the-great-buddha-statue-bodhgaya-bihar": [
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-01.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-02.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-03.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-04.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-05.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-06.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-07.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-08.mp4" },
    { video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-09.mp4" },
  ],

  "jama-masjid-delhi": [
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-02.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-03.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-04.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-05.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-06.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-07.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-08.mp4" },
    { video: "/Video/jama-masjid-delhi/jama-masjid-delhi-09.mp4" }
  ],
};

export default function Stories() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // 🔥 current story (title ke liye)
  const currentStory = stories.find((s) => s.slug === slug);

  // 🔥 slides
  const slides = storiesData[slug] || [];

  const [index, setIndex] = useState(0);

  if (!slides.length) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Story not found
      </div>
    );
  }

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">

      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={() => navigate("/webstories")}
        className="absolute top-6 right-6 z-40 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
      >
        ✕
      </button>

      <div className="relative flex items-center justify-center">

        {/* ⬅️ LEFT */}
        <button
          onClick={prevSlide}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          &#8249;
        </button>

        {/* 📱 STORY FRAME */}
        <div className="relative w-[380px] h-[680px] rounded-2xl overflow-hidden bg-black">

        

          {/* 🎥 VIDEO */}
          <video
            src={slides[index].video}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* 📊 PROGRESS */}
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
        </div>

        {/* ➡️ RIGHT */}
        <button
          onClick={nextSlide}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          &#8250;
        </button>

      </div>
    </div>
  );
}