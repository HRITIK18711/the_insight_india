import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { stories } from "./Webstories";

// 🔥 SLUG BASED DATA
const storiesData = {

"connaught-place-delhi": [
    { image: "/Image/connaught-place-delhi-01.jpg" },
    { image: "/Image/connaught-place-delhi-02.jpg" },
    { image: "/Image/connaught-place-delhi-03.jpg" },
    { image: "/Image/connaught-place-delhi-04.jpg" },
    { image: "/Image/connaught-place-delhi-05.jpg" },
    { image: "/Image/connaught-place-delhi-06.jpg" },
    { image: "/Image/connaught-place-delhi-07.jpg" },
    { image: "/Image/connaught-place-delhi-08.jpg" },
    { image: "/Image/connaught-place-delhi-9.jpg" },
    { image: "/Image/connaught-place-delhi-10.jpg" },
  ],

   "red-fort-delhi": [
    { image: "/Image/red-fort-delhi-01.jpg" },
    { image: "/Image/red-fort-delhi-02.jpg" },
    { image: "/Image/red-fort-delhi-03.jpg" },
    { image: "/Image/red-fort-delhi-04.jpg" },
    { image: "/Image/red-fort-delhi-05.jpg" },
    { image: "/Image/red-fort-delhi-06.jpg" },
    { image: "/Image/red-fort-delhi-07.jpg" },
    { image: "/Image/red-fort-delhi-08.jpg" },
    { image: "/Image/red-fort-delhi-09.jpg" },
  ],


"delhi-most-mysterious-places": [
    { image: "/Image/delhi-most-mysterious-places-01.jpg" },
    { image: "/Image/delhi-most-mysterious-places-02.jpg" },
    { image: "/Image/delhi-most-mysterious-places-03.jpg" },
    { image: "/Image/delhi-most-mysterious-places-04.jpg" },
    { image: "/Image/delhi-most-mysterious-places-05.jpg" },
    { image: "/Image/delhi-most-mysterious-places-06.jpg" },
    { image: "/Image/delhi-most-mysterious-places-07.jpg" },
    
  ],
"hazrat-nizamuddin-dargah-delhi": [
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-01.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-02.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-03.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-04.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-05.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-06.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-07.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-08.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-09.jpg" },
    { image: "/Image/hazrat-nizamuddin-dargah-delhi-10.jpg" },
    
  ],

  "ram-mandir-ayodhya-uttar-pradesh": [
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-01.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-02.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-03.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-04.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-05.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-06.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-07.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-08.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-09.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-10.jpg" },
    { image: "/Image/ram-mandir-ayodhya-uttar-pradesh-11.jpg" },
    
  ],

  "lotus-temple-delhi": [
    { image: "/Image/lotus-temple-delhi-01.jpg" },
    { image: "/Image/lotus-temple-delhi-02.jpg" },
    { image: "/Image/lotus-temple-delhi-03.jpg" },
    { image: "/Image/lotus-temple-delhi-04.jpg" },
    { image: "/Image/lotus-temple-delhi-05.jpg" },
    { image: "/Image/lotus-temple-delhi-06.jpg" },
    { image: "/Image/lotus-temple-delhi-07.jpg" },
    { image: "/Image/lotus-temple-delhi-08.jpg" },
    { image: "/Image/lotus-temple-delhi-09.jpg" },
    { image: "/Image/lotus-temple-delhi-10.jpg" },
    
  ],

  "malcha-mahal-delhi": [
    { image: "/Image/malcha-mahal-delhi-01.jpg" },
    { image: "/Image/malcha-mahal-delhi-02.jpg" },
    { image: "/Image/malcha-mahal-delhi-03.jpg" },
    { image: "/Image/malcha-mahal-delhi-04.jpg" },
    { image: "/Image/malcha-mahal-delhi-05.jpg" },
    { image: "/Image/malcha-mahal-delhi-06.jpg" },
    { image: "/Image/malcha-mahal-delhi-07.jpg" },
    { image: "/Image/malcha-mahal-delhi-08.jpg" },
  ],


  "qutub-minar-delhi": [
    { image: "/Image/qutub-minar-delhi-01.jpg" },
    { image: "/Image/qutub-minar-delhi-02.jpg" },
    { image: "/Image/qutub-minar-delhi-03.jpg" },
    { image: "/Image/qutub-minar-delhi-04.jpg" },
    { image: "/Image/qutub-minar-delhi-05.jpg" },
    { image: "/Image/qutub-minar-delhi-06.jpg" },
  ],

  "mahabodhi-temple-bodh-gaya-bihar": [
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-01.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-02.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-03.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-04.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-05.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-06.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-07.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-08.jpg" },
    {image: "/Image/mahabodhi-temple-bodh-gaya-bihar-09.jpg" },
  ],
"valley-of-flowers-trek-uttarakhand": [
    { image: "/Image/valley-of-flowers-trek-uttarakhand-01.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-02.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-03.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-04.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-05.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-06.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-07.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-08.jpg" },
    { image: "/Image/valley-of-flowers-trek-uttarakhand-09.jpg" },
  ],

  "kedarkantha-trek-uttarakhand": [
    { image: "/Image/kedarkantha-trek-uttarakhand-01.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-02.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-03.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-04.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-05.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-06.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-07.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-08.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-09.mp4" },
    { image: "/Image/kedarkantha-trek-uttarakhand-10.mp4" },
  ],

  "the-great-buddha-statue-bodh-gaya-bihar": [
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-01.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-02.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-03.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-04.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-05.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-06.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-07.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-08.jpg" },
    { image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-09.jpg" },
  ],

  "jama-masjid-delhi": [
    { image: "/Image/jama-masjid-delhi-01.jpg" },
    { image: "/Image/jama-masjid-delhi-02.jpg" },
    { image: "/Image/jama-masjidr-delhi-03.jpg" },
    { image: "/Image/jama-masjid-delhi-04.jpg" },
    { image: "/Image/jama-masjid-delhi-05.jpg" },
    { image: "/Image/jama-masjid-delhi-06.jpg" },
    { image: "/Image/jama-masjid-delhi-07.jpg" },
    { image: "/Image/jama-masjid-delhi-08.jpg" },
    { image: "/Image/jama-masjid-delhi-09.jpg" },
  ],
  "pench-national-park-safari-maharashtra": [
    {image: "/Image/pench-national-park-safari-maharashtra-01.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-02.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-03.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-04.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-05.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-06.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-07.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-08.jpg"},
    {image: "/Image/pench-national-park-safari-maharashtra-09.jpg"},
  ],

  "gawilgad-fort-amravati-maharashtra": [
    {image: "/Image/gawilgad-fort-amravati-maharashtra-01.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-02.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-03.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-04.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-05.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-06.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-07.jpg"},
    {image: "/Image/gawilgad-fort-amravati-maharashtra-08.jpg"},
  ],

  "nawegaon-nagzira-tiger-researve-maharashtra": [
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-01.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-02.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-03.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-04.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-05.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-06.jpg"},
    {image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-07.jpg"},
    
  ],

  "humayun-tomb-delhi": [
    {image: "/Image/humayun-tomb-delhi-travel-guide-01.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-02.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-03.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-04.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-05.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-06.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-07.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-08.jpg"},
    {image: "/Image/humayun-tomb-delhi-travel-guide-09.jpg"},
    
  ],


  "akshardham-temple-delhi": [
    {image: "/Image/akshardham-temple-delhi-travel-guide-01.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-02.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-03.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-04.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-05.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-06.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-07.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-08.jpg"},
    {image: "/Image/akshardham-temple-delhi-travel-guide-09.jpg"},
  ],
  // ⚡ (baaki tumhara same data — unchanged)
};

// 🔥 THUMBNAILS (IMPORTANT)
// 🔥 THUMBNAILS
const thumbnails = {
  "connaught-place-delhi": "/Image/connaught-place-delhi-01.jpg",

  "red-fort-delhi": "/Image/red-fort-delhi-01.jpg",

  "delhi-most-mysterious-places":
    "/Image/delhi-most-mysterious-places-01.jpg",

  "hazrat-nizamuddin-dargah-delhi":
    "/Image/hazrat-nizamuddin-dargah-delhi-01.jpg",

  "qutub-minar-delhi":
    "/Image/qutub-minar-delhi-01.png",

  "mahabodhi-temple-bodh-gaya-bihar":
    "/Image/mahabodhi-temple-bodh-gaya-bihar-01.jpg",

  "valley-of-flowers-trek-uttarakhand":
    "/Image/valley-of-flowers-trek-uttarakhand-01.jpg",

  "kedarkantha-trek-uttarakhand":
    "/Image/kedarkantha-trek-uttarakhand-01.jpg",

  // fixed slug
  "the-great-buddha-statue-bodh-gaya-bihar":
    "/Image/the-great-buddha-statue-bodh-gaya-bihar-01.png",

  "jama-masjid-delhi":
    "/Image/jama-masjid-delhi-01.jpg",

  "pench-national-park-safari-maharashtra":
    "/Image/pench-national-park-safari-maharashtra-01.jpg",

  "gawilgad-fort-amravati-maharashtra":
    "/Image/gawilgad-fort-amravati-maharashtra-01.jpg",

  "nawegaon-nagzira-tiger-researve-maharashtra":
    "/Image/nawegaon-nagzira-tiger-researve-maharashtra-01.jpg",

  "humayun-tomb-delhi":
    "/Image/humayun-tomb-delhi-travel-guide-01.jpg",

  "akshardham-temple-delhi":
    "/Image/akshardham-temple-delhi-travel-guide-01.jpg"
};

export default function Stories() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const slides = storiesData[slug] || [];
  const [index, setIndex] = useState(0);

  const domain = "https://yourdomain.com";

  // 🔥 FIRST VIDEO (for schema)
  const firstVideo = slides.find((item) => item.video);

  // 🔥 VIDEO SCHEMA
  const videoSchema =
    firstVideo && thumbnails[slug]
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: slug.replaceAll("-", " "),
          description: slug.replaceAll("-", " "),
          thumbnailUrl: domain + thumbnails[slug],
          uploadDate: "2026-04-10",
          contentUrl: domain + firstVideo.video,
        }
      : null;

  if (!slides.length) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Story not found
      </div>
    );
  }

  const nextSlide = () => index < slides.length - 1 && setIndex(index + 1);
  const prevSlide = () => index > 0 && setIndex(index - 1);

  return (
    <>
      {/* 🔥 SEO FIX */}
      <Helmet>
        {videoSchema && (
          <script type="application/ld+json">
            {JSON.stringify(videoSchema)}
          </script>
        )}
      </Helmet>

      <div className="w-full h-screen flex items-center justify-center bg-black relative px-2 sm:px-4">

        {/* CLOSE */}
        <button
          onClick={() => navigate("/webstories")}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 bg-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow"
        >
          ✕
        </button>

        <div className="relative flex items-center justify-center w-full max-w-md">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 z-30 bg-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md"
          >
            &#8249;
          </button>

          {/* FRAME */}
          <div className="relative w-full h-screen sm:w-[380px] sm:h-[680px] rounded-none sm:rounded-2xl overflow-hidden bg-black">

            {slides[index].video ? (
              <video
                src={slides[index].video}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={slides[index].image}
                alt="story"
                className="w-full h-full object-cover"
              />
            )}

            {/* PROGRESS */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex gap-1 z-20">
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

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 z-30 bg-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md"
          >
            &#8250;
          </button>

        </div>
      </div>
    </>
  );
}