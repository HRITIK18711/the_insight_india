// Jobs.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Content Writer",
      company: "The Insight India",
      location: "Delhi, India",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Graphic Designer",
      company: "Creative Media Hub",
      location: "Mumbai, India",
      type: "Part-time",
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "Social Media Manager",
      company: "TechBuzz Digital",
      location: "Bengaluru, India",
      type: "Remote",
      posted: "1 week ago",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-5 md:px-16 mt-30">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 inline-block">
        📰 Jobs Section
      </h2>
    <h2 className="text-xl font-bold text-pink-600 mb-4"><span className="text-red-600"><Link to="/">Home</Link></span></h2>
      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 mt-1">
                📍 {job.location} • {job.type}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-400">Posted {job.posted}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
