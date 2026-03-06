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
        <div className="relative z-10 text-center -pt-15">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-widest mb-10">
            WELCOME TO RU EXPLORES
          </h1>

          <div className="flex flex-wrap gap-4 justify-center">
            <h3 className="text-white font-extrabold text-xl md:text-6xl lg:text-2xl tracking-widest mb-10">
            “We travel to understand the world — and in the process, understand ourselves.”
          </h3>
          </div>
        </div>
      </div>
    </>
  );
}
