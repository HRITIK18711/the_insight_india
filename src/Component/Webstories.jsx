import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

export const stories = [

  {
    id: 10,
    slug: "humayun-tomb-delhi",
    title: "Humayun Tomb Delhi",
    createdBy: "Pragya Gautam",
    image: "/Image/humayun-tomb-delhi-travel-guide-01.jpg",
  },

  {
    id: 15,
    slug: "red-fort-delhi",
    title: "Red Fort Delhi",
    createdBy: "Kriti Singh",
    image: "/Image/red-fort-delhi-01.jpg",
  }, 
  {
    id: 16,
    slug: "ram-mandir-ayodhya-uttar-pradesh",
    title: "Ram Mandir Ayodhya",
    createdBy: "Pragya Singh",
    image: "/Image/ram-mandir-ayodhya-uttar-pradesh-01.jpg",
  }, 

  {
    id: 17,
    slug: "lotus-temple-delhi",
    title: "Lotus Temple Delhi",
    createdBy: "Kriti Singh",
    image: "/Image/lotus-temple-delhi-01.jpg",
  }, 

  {
    id: 18,
    slug: "malcha-mahal-delhi",
    title: "Malcha Mahal Delhi",
    createdBy: "Pragya Singh",
    image: "/Image/malcha-mahal-delhi-01.jpg",
  }, 

  
  {
    id: 11,
    slug: "akshardham-temple-delhi",
    title: "Akshardham Temple Delhi",
    createdBy: "Pragya Gautam",
    image: "/Image/akshardham-temple-delhi-travel-guide-01.jpg",
  },

  {
    id: 12,
    slug: "connaught-place-delhi",
    title: "Connaught Place Delhi",
    createdBy: "Kirti Singh",
    image: "/Image/connaught-place-delhi-01.jpg",
  },


  {
    id: 13,
    slug: "delhi-most-mysterious-places",
    title: "Delhi Most Mysterious Places",
    createdBy: "Pragya Singh",
    image: "/Image/delhi-most-mysterious-places-01.jpg",
  },


  {
    id: 14,
    slug: "hazrat-nizamuddin-dargah-delhi",
    title: "Hazrat Nizamuddin Dargah Delhi",
    createdBy: "Pragya Singh",
    image: "/Image/hazrat-nizamuddin-dargah-delhi-01.jpg",
  },

  {
    id: 1,
    slug: "qutub-minar-delhi",
    title: "Qutub Minar Delhi",
    createdBy: "Pragya Singh",
    image: "/Image/qutub-minar-delhi-01.jpg",
  },
  {
    id: 2,
    slug: "mahabodhi-temple-bodh-gaya-bihar",
    title: "Mahabodhi Temple Bodhgaya Bihar",
    createdBy: "Kriti Singh",
    image: "/Image/mahabodhi-temple-bodh-gaya-bihar-01.jpg",
  },
  {
    id: 3,
    slug: "valley-of-flowers-trek-uttarakhand",
    title: "Valley Of Flowers Trek Uttarakhand",
    createdBy: "Rohit Upadhyay",
    image: "/Image/valley-of-flowers-trek-uttarakhand-01.jpg",
  },
  {
    id: 4,
    slug: "kedarkantha-trek-uttarakhand",
    title: "Kedarkantha Trek Uttarakhand",
    createdBy: "Rohit Upadhyay",
    image: "/Image/kedarkantha-trek-uttarakhand-01.jpg",
  },
  {
    id: 5,
    slug: "the-great-buddha-statue-bodh-gaya-bihar",
    title: "The Great Buddha Statue Bodh gaya Bihar",
    createdBy: "Kriti Singh",
    image: "/Image/the-great-buddha-statue-bodh-gaya-bihar-01.jpg"
  },
  {
    id: 6,
    slug: "jama-masjid-delhi",
    title: "Jama Masjid Delhi",
    createdBy: "Pragya Singh",
    image: "/Image/jama-masjid-delhi-01.jpg"
  },
  {
    id: 7,
    slug: "pench-national-park-safari-maharashtra",
    title: "Pench National Park",
    createdBy: "Shubham Ghodke",
    image: "/Image/pench-national-park-safari-maharashtra-01.jpg"
  },
  {
    id: 8,
    slug: "gawilgad-fort-amravati-maharashtra",
    title: "Gawilgad Fort",
    createdBy: "Shubham Ghodke",
   image: "/Image/gawilgad-fort-amravati-maharashtra-01.jpg"
  },
  {
    id: 9,
    slug: "nawegaon-nagzira-tiger-researve-maharashtra",
    title: "Nawegaon Nagzira Tiger Researve",
    createdBy: "Shubham Ghodke",
   image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-01.jpg"
  },
];

export default function Webstories() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = stories.findIndex((s) => s.slug === slug);
  const [progress, setProgress] = useState(0);

  // ================= VIEWER MODE =================
  if (slug) {
    const story = stories[currentIndex];

    useEffect(() => {
      setProgress(0);

      const duration = 5000;
      const interval = 50;
      let current = 0;

      const timer = setInterval(() => {
        current += interval;
        setProgress((current / duration) * 100);

        if (current >= duration) {
          clearInterval(timer);

          if (currentIndex < stories.length - 1) {
            navigate(`/webstories/${stories[currentIndex + 1].slug}`);
          } else {
            navigate("/webstories");
          }
        }
      }, interval);

      return () => clearInterval(timer);
    }, [slug]);

    const handleClick = (e) => {
      const x = e.clientX;
      const width = window.innerWidth;

      if (x < width / 2) {
        if (currentIndex > 0) {
          navigate(`/webstories/${stories[currentIndex - 1].slug}`);
        }
      } else {
        if (currentIndex < stories.length - 1) {
          navigate(`/webstories/${stories[currentIndex + 1].slug}`);
        }
      }
    };

    return (
  <div
    onClick={handleClick}
    className="h-[100dvh] bg-black flex items-center justify-center overflow-hidden"
  >
    {/* 1. Use aspect-[9/16] to keep the story shape consistent.
      2. Use max-h-screen to ensure it never grows taller than the mobile viewport.
    */}
    <div className="relative w-full aspect-[9/16] max-h-screen bg-neutral-900 shadow-2xl overflow-hidden">
      
      {/* STORY MEDIA */}
      {story.video ? (
        <video
          src={story.video}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={story.image}
          alt={story.title}
          /* Changed object-fill to object-cover for better visuals, 
             or use object-contain if you never want any cropping at all */
          className="w-full h-full object-cover" 
        />
      )}

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-60% to-black/80" />

      {/* Progress bars - Moved slightly down to avoid phone notches */}
      <div className="absolute top-4 left-0 right-0 z-50 flex gap-1 px-3">
        {stories.map((_, i) => (
          <div key={i} className="flex-1 h-[2px] bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-75 ease-linear"
              style={{
                width:
                  i < currentIndex
                    ? "100%"
                    : i === currentIndex
                    ? `${progress}%`
                    : "0%"
              }}
            />
          </div>
        ))}
      </div>

      {/* TEXT CONTENT - Using 'Safe Zones' */}
      <div className="absolute inset-0 z-40 flex flex-col justify-between p-6 pointer-events-none">
        
        {/* Top Text (Title) */}
        <div className="mt-8">
          <h2 className="text-white text-2xl md:text-xl font-bold leading-tight drop-shadow-2xl">
            {story.title}
          </h2>
        </div>

        {/* Bottom Text (Creator) */}
        <div className="mb-6">
          <p className="text-white/90 text-sm font-medium bg-black/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full">
            By: {story.createdBy}
          </p>
        </div>
      </div>

      {/* Navigation Buttons - Hidden on small mobile to prevent mis-clicks */}
      <div className="hidden md:block">
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/webstories/${stories[currentIndex - 1].slug}`); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white"
          >
            ‹
          </button>
        )}
        {currentIndex < stories.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/webstories/${stories[currentIndex + 1].slug}`); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white"
          >
            ›
          </button>
        )}
      </div>
    </div>
  </div>
);
  }

  // ================= GRID MODE =================
  return (
    <>
      <Helmet>
        <title>Travel Web Stories | RUExplores</title>
      </Helmet>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-3 md:gap-6 
          justify-items-center
        ">

          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/webstories/${story.slug}`}
              className="
                relative 
                w-full 
                max-w-[240px] 
                aspect-[9/16] 
                rounded-[20px] 
                overflow-hidden 
                shadow-xl 
                group
              "
            >

              {story.video ? (
                <video
                  src={story.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={story.image}
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 w-full px-4 pb-10 text-white">
                <h3 className="text-sm font-semibold leading-snug line-clamp-3">
                  {story.title}
                </h3>
                <p className="text-xs opacity-80 mt-1">
                  {story.createdBy}
                  
                </p>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </>
  );
}