// Latest_News.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    img: "/Image/IV1.jpg",
    title: "George Soros: The master of Anti India Evil Conspirators",
    link: "https://www.youtube.com/embed/FxqPoJEiWKk",
  },
  {
    img: "/Image/IV2.jpg",
    title: "When will India get POK back | Sankalp Diwas | POK demands....",
    link: "https://www.youtube.com/embed/67nHYkooL_k",
  },
  {
    img: "/Image/IV3.jpg",
    title: "Civil Society and Urban Naxals EXPOSED मोदी जी ने खोली civil",
    link: "https://www.youtube.com/embed/2akjlGoC2v0",
  },
  {
    img: "/Image/IV4.jpg",
    title: "Complete Republic Day Parade 2023 in just minutes Delhi",
    link: "https://www.youtube.com/embed/6KhW0gMTtgM",
  },
  {
    img: "/Image/IV5.jpg",
    title: "Congress ki Bharat Todo Yatra कांग्रेस की भारत तोड़ो यात्रा",
    link: "https://www.youtube.com/embed/7Afp9asuHQw",
  },
  {
    img: "/Image/IV6.jpg",
    title: "Swami Vivekananda: Hindu Dharm ke Yug Pravartak",
    link: "https://www.youtube.com/embed/rndCUtVc-sc",
  },
  {
    img: "/Image/IV7.jpg",
    title: "Bollywood me Anti Hindu gang ka latest kaand",
    link: "https://www.youtube.com/embed/evjVOdbicXM",
  },
  {
    img: "/Image/IV8.jpg",
    title: "Haldwani bana Shaheen Bagh Sanyog ya Prayog",
    link: "https://www.youtube.com/embed/x9ee_xzT4F8",
  },
  {
    img: "/Image/IV9.jpg",
    title: "Love Jihad Truth Or Propaganda A Factual Analysis",
    link: "https://www.youtube.com/embed/h_cHlQ5tqKI",
  },
];

export default function InsightVideo() {
  const [activeVideo, setActiveVideo] = useState(null);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col"
            onClick={() => setActiveVideo(activeVideo === index ? null : index)}
          >
            {activeVideo === index ? (
              <iframe
                src={item.link}
                title={item.title}
                className="w-full h-56"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-4 flex-1">
              <p className="text-base text-gray-900 font-semibold leading-snug">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}