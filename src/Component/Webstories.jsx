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
];

export default function Webstories() {
  return (
    <>
      <Helmet>
        <title>Travel Web Stories | RUExplores</title>
      </Helmet>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story) => (
            <Link
              key={story.id}
             to={`/webstories/${story.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition block"
            >
              {/* Video Preview */}
              <video
                src={story.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-[350px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {story.title}
                </h3>

                <p className="text-sm text-gray-600">
                  By {story.createdBy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}