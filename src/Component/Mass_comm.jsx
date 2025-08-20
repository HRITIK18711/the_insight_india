import React from "react";
import { Link } from "react-router-dom";
const notes = [
  {
    id: 1,
    title: "India's Moon Mission Update",
    date: "20 Aug 2025",
    content:
      "ISRO’s Chandrayaan project has achieved new milestones in lunar exploration...",
  },
  {
    id: 2,
    title: "Global Climate Summit",
    date: "19 Aug 2025",
    content:
      "Leaders from 50+ nations gathered to address the urgent need for sustainable policies...",
  },
  {
    id: 3,
    title: "Stock Market Insights",
    date: "18 Aug 2025",
    content:
      "The Sensex and Nifty witnessed major fluctuations amid global economic shifts...",
  },
];

export default function Mass_comm() {
  return (
    <section className="bg-gray-100 py-10 px-6 md:px-20 mt-15">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📌 Mass Communication Notes
      </h2>
      <h2 className="text-xl font-bold text-pink-600 mb-4"><span className="text-red-600"><Link to="/">Home</Link></span></h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {note.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{note.date}</p>
            <p className="text-gray-700 mb-4 line-clamp-3">{note.content}</p>
            <button className="text-orange-500 font-medium hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}