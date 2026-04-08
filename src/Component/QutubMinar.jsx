import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="qutub minar"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const QutubMinar = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Qutub Minar Delhi: History, Height, Timings, Entry Fee, How to Reach & Nearby Places
        </h1>

        {/* AUTHOR */}
        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Pragya Singh</span>
        </p>

        {/* HERO */}
        <SectionImage src="/Image/qutub-minar-delhi-01.jpg" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          I have walked past Qutub Minar more times than I can count. Growing up in Delhi, it was always there in the background of school trips and lazy weekend drives through South Delhi.
        </p>

        <p className="text-gray-700 mb-6">
          The minaret rises so steeply from the ground that staring upward feels slightly dizzying. The carved verses running across every surface, the layered bands of red sandstone and marble, the sheer scale of something built nearly nine hundred years ago without modern machinery - it suddenly becomes impossible to ignore.
        </p>

        <p className="text-gray-700 mb-6">
          Qutub Minar is not just Delhi's most visited monument. It is one of the most extraordinary examples of early Indo-Islamic architecture in the world.
        </p>

        {/* QUICK FACTS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Quick Facts About Qutub Minar</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border text-left">
            <tbody>
              <tr><td className="border p-2 font-semibold">Location</td><td className="border p-2">Mehrauli, South Delhi</td></tr>
              <tr><td className="border p-2 font-semibold">Built By</td><td className="border p-2">Qutb ud-Din Aibak, Iltutmish</td></tr>
              <tr><td className="border p-2 font-semibold">Construction Began</td><td className="border p-2">1193 CE</td></tr>
              <tr><td className="border p-2 font-semibold">Height</td><td className="border p-2">72.5 metres</td></tr>
              <tr><td className="border p-2 font-semibold">Floors</td><td className="border p-2">5</td></tr>
              <tr><td className="border p-2 font-semibold">Entry Fee</td><td className="border p-2">₹40 Indians, ₹600 Foreigners</td></tr>
              <tr><td className="border p-2 font-semibold">Timings</td><td className="border p-2">7 AM – 8 PM</td></tr>
              <tr><td className="border p-2 font-semibold">Nearest Metro</td><td className="border p-2">Qutub Minar</td></tr>
            </tbody>
          </table>
        </div>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">History of Qutub Minar</h2>
        <SectionImage src="/Image/qutub-minar-delhi-02.jpg" />

        <p className="text-gray-700 mb-6">
          Construction of Qutub Minar began in 1193 CE under Qutb ud-Din Aibak. His successor Iltutmish added more storeys, and later Firoz Shah Tughlaq repaired and completed the structure.
        </p>

        <p className="text-gray-700 mb-6">
          The tower served both as a call to prayer and a symbol of political power marking the rise of the Delhi Sultanate.
        </p>

        {/* INCIDENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">The Tragic Incident of 1981</h2>

        <p className="text-gray-700 mb-6">
          In December 1981, a stampede inside the staircase caused the death of 45 people. Since then, entry inside the tower has been permanently closed.
        </p>

        {/* ARCHITECTURE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Architecture of Qutub Minar</h2>
        <SectionImage src="/Image/qutub-minar-delhi-03.jpg" />

        <p className="text-gray-700 mb-6">
          Standing at 72.5 metres, Qutub Minar is the tallest brick minaret in the world. Built with red sandstone and marble, it features intricate carvings and Quranic inscriptions.
        </p>

        {/* FEATURES */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Five storeys with balconies</li>
          <li>Arabic calligraphy</li>
          <li>Tapering cylindrical structure</li>
        </ul>

        {/* COMPLEX */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Things to See at Qutub Complex</h2>
        <SectionImage src="/Image/qutub-minar-delhi-04.jpg" />

        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Iron Pillar</li>
          <li>Quwwat-ul-Islam Mosque</li>
          <li>Alai Minar</li>
          <li>Tomb of Iltutmish</li>
        </ul>

        {/* HOW TO REACH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">How to Reach</h2>

        <p className="text-gray-700 mb-6">
          The nearest metro station is Qutub Minar on the Yellow Line. You can take an auto or walk 10 minutes to reach the complex.
        </p>

        {/* BEST TIME */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit</h2>
        <SectionImage src="/Image/qutub-minar-delhi-05.jpg" />

        <p className="text-gray-700 mb-6">
          October to March is the best time to visit. Early mornings are ideal for fewer crowds and better photography.
        </p>

        {/* TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Travel Tips</h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Carry water</li>
          <li>Wear comfortable shoes</li>
          <li>Visit on weekdays</li>
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">FAQs</h2>

        <div className="space-y-4 text-gray-700">
          <p><b>Q1. What is the height of Qutub Minar?</b><br />72.5 metres</p>
          <p><b>Q2. Who built it?</b><br />Qutb ud-Din Aibak & Iltutmish</p>
          <p><b>Q3. Entry fee?</b><br />₹40 for Indians</p>
          <p><b>Q4. Can we go inside?</b><br />No</p>
        </div>

        {/* AUTHOR */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
          <p className="text-gray-700">
            Pragya Singh is a Delhi-based travel writer and heritage enthusiast passionate about uncovering lesser-known historical places across India.
          </p>
        </div>

      </div>
    </div>
  );
};

export default QutubMinar;