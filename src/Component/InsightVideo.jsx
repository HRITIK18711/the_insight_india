// Latest_News.jsx
import React from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    img: "/Image/iv1.webp",
    title: "George Soros: The master of Anti India Evil Conspirators",
    link: "https://youtu.be/FxqPoJEiWKk?feature=shared",
  },
  {
    img: "/Image/iv2.webp",
    title: "When will India get POK back | Sankalp Diwas | POK demands....",
    link: "https://youtu.be/67nHYkooL_k?feature=shared",
  },
  {
    img: "/Image/iv3.webp",
    title: "Civil Society and Urban Naxals EXPOSED मोदी जी ने खोली civil",
    link: "https://youtu.be/2akjlGoC2v0?feature=shared",
  },
  {
    img: "/Image/iv4.webp",
    title: "Complete Republic Day Parade 2023 in just minutes Delhi",
    link: "https://youtu.be/6KhW0gMTtgM?feature=shared",
  },
  {
    img: "/Image/iv5.webp",
    title: "Congress ki Bharat Todo Yatra कांग्रेस की भारत तोड़ो यात्रा",
    link: "https://youtu.be/7Afp9asuHQw?feature=shared",
  },
  {
    img: "/Image/iv6.webp",
    title: "Swami Vivekananda: Hindu Dharm ke Yug Pravartak",
    link: "https://youtu.be/rndCUtVc-sc?feature=shared",
  },
  {
    img: "/Image/iv7.webp",
    title: "Bollywood me Anti Hindu gang ka latest kaand",
    link: "https://youtu.be/evjVOdbicXM?feature=shared",
  },
  {
    img: "/Image/iv8.webp",
    title: "Haldwani bana Shaheen Bagh Sanyog ya Prayog",
    link: "https://youtu.be/x9ee_xzT4F8?feature=shared",
  },
  {
    img: "/Image/iv9.webp",
    title: "Love Jihad Truth Or Propaganda A Factual Analysis",
    link: "https://youtu.be/h_cHlQ5tqKI?feature=shared",
  },
];

export default function InsightVideo() {
  return (
    <div className="w-full px-6 py-6 mt-15">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-pink-600 mb-4">
        <span className="text-red-600">
          <Link to="/">Home</Link>
        </span>{" "}
        | Insight
      </h2>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex-1">
              <p className="text-base text-gray-900 font-semibold leading-snug">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}