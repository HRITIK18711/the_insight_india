import React from "react";

const cards = [
  { title: "Outdoors", img: "/Image/outdoor.jpg" },
  { title: "Food", img: "/Image/food.jpg" },
  { title: "Culture", img: "/Image/culture.jpg" },
  { title: "Water", img: "/Image/water.jpg" },
];

export default function Main_News_Section() {
  return (
    // ✅ same transparent section like code 1
    <div className="w-full px-6 py-10 bg-transparent pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-1 text-black">
          Find things to do by interest
        </h2>
        <p className="text-black-300 mb-6">
          Whatever you're into, we’ve got it
        </p>

        {/* Cards Grid */}
        <div className="max-w-6xl justify-center mx-auto flex gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[260px] flex-shrink-0 group"
            >
              <div className="relative rounded-xl overflow-hidden">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Title */}
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
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
