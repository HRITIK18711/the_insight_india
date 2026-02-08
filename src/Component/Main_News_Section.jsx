import React from "react";

const cards = [
  {
    title: "Outdoors",
    img: "/Image/outdoor.jpg",
  },
  {
    title: "Food",
    img: "/Image/food.jpg",
  },
  {
    title: "Culture",
    img: "/Image/culture.jpg",
  },
  {
    title: "Water",
    img: "/Image/water.jpg",
  },
];

export default function Main_News_Section() {
  return (
    // ✅ No white background, full width
    <div className="w-full px-4 py-10 bg-transparent">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-1 text-black">
        Find things to do by interest
      </h2>
      <p className="text-black-300 mb-6">
        Whatever you're into, we’ve got it
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Title */}
            <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
