import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const stories = [
  {
    id: 1,
    title: "Simple Fitness Routines For Women",
    date: "March 06, 2026",
    img: "/Image/01.png",
  },
  {
    id: 2,
    title: "Impact Of Stress On Hormonal Balance",
    date: "March 06, 2026",
    img: "/Image/02.png",
  },
  {
    id: 3,
    title: "Signs Of A Weak Heart",
    date: "March 06, 2026",
    img: "/Image/03.png",
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={story.img}
                alt={story.title}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {story.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {story.date}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </>
  );
}