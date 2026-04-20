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
    id: 11,
    slug: "akshardham-temple-delhi",
    title: "Akshardham Temple Delhi",
    createdBy: "Pragya Gautam",
    image: "/Image/akshardham-temple-delhi-travel-guide-01.jpg",
  },

  {
    id: 1,
    slug: "qutub-minar-delhi",
    title: "Qutub Minar Delhi",
    createdBy: "Pragya Singh",
    video: "/Video/qutub-minar-delhi/qutub-minar-delhi-01.mp4",
  },
  {
    id: 2,
    slug: "mahabodhi-temple-bodhgaya-bihar",
    title: "Mahabodhi Temple Bodhgaya Bihar",
    createdBy: "Kriti Singh",
    video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bodhgaya-bihar-01.mp4",
  },
  {
    id: 3,
    slug: "valley-of-flowers-trek-uttarakhand",
    title: "Valley Of Flowers Trek Uttarakhand",
    createdBy: "Rohit Upadhyay",
    video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-01.mp4",
  },
  {
    id: 4,
    slug: "kedarkantha-trek-uttarakhand",
    title: "Kedarkantha Trek Uttarakhand",
    createdBy: "Rohit Upadhyay",
    video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-01.mp4",
  },
  {
    id: 5,
    slug: "the-great-buddha-statue-bodhgaya-bihar",
    title: "The Great Buddha Statue Bodhgaya Bihar",
    createdBy: "Kriti Singh",
    video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-01.mp4",
  },
  {
    id: 6,
    slug: "jama-masjid-delhi",
    title: "Jama Masjid Delhi",
    createdBy: "Pragya Singh",
    video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4",
  },
  {
    id: 7,
    slug: "pench-national-park-safari-maharashtra",
    title: "Pench National Park",
    createdBy: "Shubham Ghodke",
    image: "/Image/pench-national-park-safari-maharashtra-01.jpg",
  },
  {
    id: 8,
    slug: "gawilgad-fort-amravati-maharashtra",
    title: "Gawilgad Fort",
    createdBy: "Shubham Ghodke",
    image: "/Image/gawilgad-fort-amravati-maharashtra-01.jpg",
  },
  {
    id: 9,
    slug: "nawegaon-nagzira-tiger-researve-maharashtra",
    title: "Nawegaon Nagzira Tiger Researve",
    createdBy: "Shubham Ghodke",
    image: "/Image/nawegaon-nagzira-tiger-researve-maharashtra-01.jpg",
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
        className="h-[100dvh] w-full bg-black flex justify-center items-center"
        onClick={handleClick}
      >
        <div className="relative w-full max-w-md h-full">

          {/* PROGRESS */}
          <div className="absolute top-0 w-full flex gap-1 px-2 pt-2 z-50">
            {stories.map((_, i) => (
              <div key={i} className="flex-1 h-[3px] bg-white/30">
                <div
                  className="h-full bg-white"
                  style={{
                    width:
                      i < currentIndex
                        ? "100%"
                        : i === currentIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* MEDIA */}
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
              className="w-full h-full object-cover"
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          {/* TEXT */}
          <div className="absolute bottom-0 w-full px-5 pb-12 text-white">
            <h2 className="text-lg font-semibold leading-snug">
              {story.title}
            </h2>
            <p className="text-sm mt-2 opacity-80">
              By {story.createdBy}
            </p>
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