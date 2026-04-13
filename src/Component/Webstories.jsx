import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const stories = [
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
    video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-01.mp4",
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
  return (
    <>
      <Helmet>
        <title>Travel Web Stories | RUExplores</title>
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

              {/* MEDIA (VIDEO OR IMAGE) */}
              {story.video ? (
                <video
                  src={story.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              ) : (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              )}

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