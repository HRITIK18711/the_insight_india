import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const stories = [
  { id: 1, slug: "delhi-metro", title: "Delhi Metro", image: "/Image/delhi-metro.png" },
  { id: 2, slug: "jaipur-metro", title: "Jaipur Metro", image: "/Image/jaipur-metro.png" },
  { id: 3, slug: "mumbai-metro", title: "Mumbai Metro", image: "/Image/mumbai-metro.png" },
  { id: 4, slug: "patna-metro", title: "Patna Metro", image: "/Image/patna-metro.png" },
  { id: 5, slug: "pune-metro", title: "Pune Metro", image: "/Image/pune-metro.png" },
  { id: 6, slug: "uttar-pradesh-metro", title: "Uttar Pradesh Metro", image: "/Image/uttar-pradesh-metro.png" },
];

export default function Metro() {
  return (
    <>
      <Helmet>
        <title>Metro Stories | RUExplores</title>
      </Helmet>

      <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight">
          🚇 Metro Stories
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 place-items-center">

          {stories.map((story) => (
           <Link
  key={story.id}
  to={`/metro/${story.slug}`}   // ✅ FIXED
  className="flex flex-col items-center group"
>

              {/* OUTER CIRCLE */}
              <div className="
                relative
                w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]
                rounded-full
                bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300
                shadow-md
                flex items-center justify-center
                
                transition-all duration-300 ease-in-out
                group-hover:scale-110 group-hover:shadow-xl
              ">

                {/* INNER WHITE CIRCLE (LOGO FIX) */}
                <div className="
                  w-[70%] h-[70%]
                  bg-white
                  rounded-full
                  flex items-center justify-center
                  p-2
                  shadow-inner
                ">

                  <img
                    src={story.image}
                    alt={story.title}
                    className={`
                      max-w-full max-h-full object-contain
                      transition duration-300

                      ${story.slug === "mumbai-metro" ? "scale-90" : ""}
                      ${story.slug === "patna-metro" ? "scale-95" : ""}
                    `}
                  />

                </div>

              </div>

              {/* TITLE */}
              <p className="
                mt-4 text-xl sm:text-base text-center font-semibold
                text-black group-hover:text-black
                transition duration-300
              ">
                {story.title}
              </p>

            </Link>
          ))}

        </div>

      </div>
    </>
  );
}