import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const stories = [
  {
    //Pragya Singh
    id: 1,
    title: "Qutub Minar Delhi",
    Created_By: "Pragya Singh",
    video: "/Video/qutub-minar-delhi/qutub-minar-delhi-01.mp4",
  },
  {
    //Kriti singh
    id: 2,
    title: "Mahabodhi Temple Bodhgaya Bihar",
    Created_By: "Kriti Singh",
    video: "/Video/mahabodhi-temple-bodhgaya-bihar/mahabodhi-temple-bodhgaya-bihar-01.mp4",
  },
  {
    //Rohit Upadhyay
    id: 3,
    title: "Valley Of Flowers Trek Uttarakhand",
    Created_By: "Rohit Upadhyay",
     video: "/Video/valley-of-flowers-trek-uttarakhand/valley-of-flowers-trek-uttarakhand-01.mp4"
  },
  {
    //Rohit Upadhyay
    id: 4,
    title: "Kedarkhantha Trek Uttarakhand",
    Created_By: "Rohit Upadhyay",
    video: "/Video/kedarkantha-trek-uttarakhand/kedarkantha-trek-uttarakhand-01.mp4"
  },
   {
    //kriti Singh
    id: 5,
    title: "The Great Buddha Statue Bodhgaya Bihar",
    Created_By: "Kriti Singh",
    video: "/Video/the-great-buddha-statue-bodhgaya-bihar/the-great-buddha-statue-bodhgaya-bihar-01.mp4"
  },
  {
    //Pragya Singh
    id: 6,
    title: "Jama Masjid Delhi",
    Created_By: "Pragya Singh",
    video: "/Video/jama-masjid-delhi/jama-masjid-delhi-01.mp4"
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
              to={`/story/${story.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition block"
            >
              {/* Video Slide */}
              <video
                src={story.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[350px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {story.title}
                </h3>

                <p className="text-lg font-semibold mb-2">
                  {story.Created_By}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}