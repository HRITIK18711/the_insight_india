import React from "react";

export default function Content() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-[100vh] flex items-center justify-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/Image/hero.jpeg')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-widest mb-10">
            WELCOME TO RU EXPLORES
          </h1>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white mt-3 px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
              See iconic landmarks
            </button>
            <button className="bg-white px-6 mt-3 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Go beyond the big city
            </button>
            <button className="bg-white px-6 py-3 mt-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Get road trip ideas
            </button>
            <button className="bg-white px-6 py-3 mt-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Plan a national park adventure
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
