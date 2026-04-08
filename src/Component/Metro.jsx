import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const stories = [
  {
    id: 1,
    slug: "delhi-metro",
    title: "Delhi Metro",
    video: "/Video/qutub-minar-delhi/qutub-minar-delhi-01.mp4",
  },
  {
    id: 2,
    slug: "lucknow-metro",
    title: "Lucknow Metro",
    video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-01.mp4",
  },
  {
    id: 3,
    slug: "kanpur-metro",
    title: "Kanpur Metro",
    
    video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-01.mp4",
  },
  {
    id: 4,
    slug: "agra-metro",
    title: "Agra Metro",
    
    video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-01.mp4",
  },
  {
    id: 5,
    slug: "jaipur-metro",
    title: "Jaipur Metro",
    
    video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-01.mp4",
  },
  {
    id: 6,
    slug: "noida-metro",
    title: "Noida Metro",
    
    video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4",
  },

  {
    id: 7,
    slug: "noida-metro",
    title: "Noida Metro",
    
    video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4",
  },

  {
    id: 8,
    slug: "noida-metro",
    title: "Noida Metro",
    
    video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4",
  },
  
];

export default function Metro() {
  return (
    <>
      <Helmet>
        <title>Metro Stories | RUExplores</title>
      </Helmet>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">

          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/webstories/${story.slug}`}
              className="relative w-[240px] aspect-[9/16] rounded-[20px] overflow-hidden shadow-xl group cursor-pointer"
            >

              {/* VIDEO */}
              <video
                src={story.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-base font-semibold leading-tight">
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