import React from "react";

const cards = [
  { title: "Outdoors", img: "/Image/outdoor.jpg" },
  { title: "Food", img: "/Image/food.jpg" },
  { title: "Culture", img: "/Image/culture.jpg" },
  { title: "Water", img: "/Image/water.jpg" },
];

export default function Main_News_Section() {
  return (
    <div className="w-full px-4 sm:px-6 py-12 pt-30 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-black">
          Find things to do by interest
        </h2>
        <p className="text-gray-600 mb-8">
          Whatever you're into, we’ve got it
        </p>

        {/* Responsive Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6
          place-items-center
        ">
          {cards.map((item, index) => (
            <div key={index} className="w-full max-w-[260px] group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full 
                    h-[260px] 
                    sm:h-[300px] 
                    object-cover 
                    group-hover:scale-110 
                    transition duration-500
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Title */}
                <h3 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
