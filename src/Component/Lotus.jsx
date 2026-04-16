import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="lotus-temple-delhi-travel-guide"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
  </div>
);

const Lotus = () => {
  return (
    <div  className="bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight mb-3">
        Lotus Temple Delhi: A Silent Escape in the Heart of Chaos-Timings, Entry & Travel Guide
      </h1>
      <p className="text-gray-600 mb-6">
         <span className="font-semibold">Published On: 8 April, 2026</span>
        </p>
      <p className="text-gray-500 mb-8">By Kriti Singh</p>

      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-01.png" source="Canva" />

      {/* Intro */}
      <div className="space-y-4 text-lg leading-relaxed text-justify">
        <p> 
          Delhi is loud. Constant traffic, honking and endless rush define the city. But right in the middle of all this chaos lies a place where silence isn’t just present - it’s powerful.
        </p>
        <p>
          The Lotus Temple is not just a monument - it’s an experience. Designed in the shape of a blooming lotus, this iconic structure invites people from all religions to sit in complete silence and simply reflect. No rituals. No prayers forced upon you. No distractions. Just a rare moment of peace - and honestly, that’s what makes it unforgettable.
        </p>
      </div>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">History & Background</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-02.png" source="Baháʼí House of Worship" />

      <div className="space-y-4 text-lg leading-relaxed text-justify">
        <p>
          Opened to the public in 1986, the Lotus Temple was designed by Iranian architect Fariborz Sahba. It serves as a Baháʼí House of Worship, following the belief that all religions are equal and humanity is one. What makes it different from traditional places of worship is its simplicity:
        </p>
      </div>

      <ul className="list-disc pl-6 my-6 space-y-2 text-lg">
        <li>No idols or images</li>
        <li>No rituals or ceremonies</li>
        <li>No religious restrictions, everyone is welcome</li>
      </ul>

      <p className="text-lg leading-relaxed text-justify">
        The temple has also received several international architecture awards and is often listed among the most visited buildings in the world with millions of visitors each year.
      </p>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">What Makes Lotus Temple Special?</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-03.png" source="Baháʼí House of Worship" />

      <div className="space-y-4 text-lg leading-relaxed text-justify">
        <p>
          The structure itself is breathtaking - 27 marble petals forming a perfect lotus shape. The temple has nine sides and nine entrances, symbolizing unity and completeness in the Baháʼí faith. Surrounding the structure are nine pools, which not only enhance its beauty but also help cool the building naturally.
        </p>
        <p>
          It is open to people of all religions, you don’t need to follow any specific faith to enter. But beyond its architecture, what truly stands out is the silence inside. Complete silence is maintained - no talking, no phones, no noise, creating a rare and calming experience. There are no idols, rituals or ceremonies, so you can sit and pray or reflect in your own way.
        </p>
        <p>
          For a few minutes, you disconnect from everything and in a city like Delhi, that feeling is rare.
        </p>
      </div>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">Things to Do at Lotus Temple</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-04.png" source="Wikipedia" />

      <ul className="list-disc pl-6 my-6 space-y-2 text-lg">
        <li>Sit quietly inside the prayer hall and experience complete silence.</li>
        <li>Capture aesthetic shots near the reflection pools.</li>
        <li>Walk through the well-maintained gardens.</li>
        <li>Visit during sunset for golden hour views.</li>
        <li>Try symmetrical photography for Instagram-worthy shots.</li>
      </ul>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">Lotus Temple Timings & Entry Fee</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-05.png" source="Canva" />

      <ul className="list-disc pl-6 my-6 space-y-2 text-lg">
        <li>Summer: 9:00 AM - 7:00 PM</li>
        <li>Winter: 9:30 AM - 5:30 PM</li>
        <li>Closed on: Monday</li>
        <li>Entry: Free for all</li>
      </ul>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">How to Reach Lotus Temple</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-06.png" source="Hindustan Times (Ajay Aggarwal)" />

      <ul className="list-disc pl-6 my-6 space-y-2 text-lg">
        <li>By Metro: The nearest metro station is Kalkaji Mandir Metro Station (Violet Line), located just a short walk from the Lotus Temple.</li>
        <li>By Train: New Delhi Railway Station (~30 mins)</li>
        <li>By Road: Auto-rickshaws, e-rickshaws, buses, and taxis are easily available from different parts of Delhi.</li>
        <li>By Air: Indira Gandhi International Airport (~45 mins)</li>
      </ul>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">Best Time to Visit</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-07.png" source="Baháʼí House of Worship" />

      <p className="text-lg leading-relaxed text-justify">
        The best time to visit is from October to March. Morning is peaceful and less crowded Evening is perfect for photos. Avoid summer afternoons due to extreme heat.
      </p>

      {/* Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-4">Nearby Places to Visit</h2>
      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-08.png" source="1, 2: Canva | 3, 4: Wikipedia" />

      <ul className="list-disc pl-6 my-6 space-y-2 text-lg">
        <li>ISKCON Temple Delhi - Known for spiritual energy and bhajans.</li>
        <li>Kalkaji Mandir - One of Delhi’s oldest temples.</li>
        <li>Nehru Place - Popular for shopping and tech markets.</li>
        <li>Humayun’s Tomb - A UNESCO World Heritage Site and Mughal marvel.</li>
      </ul>

      <SectionImage src="/Image/lotus-temple-delhi-travel-guide-09.png" source="Canva" />

      <p className="text-lg leading-relaxed text-justify">
        The Lotus Temple isn’t just about architecture - it’s about what you feel. You enter with noise in your head and walk out with a sense of calm you didn’t expect. And in a city like Delhi, that’s something rare.
      </p>

      {/* FAQs */}
      <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions (FAQs) about Lotus Temple</h2>

      <div className="space-y-4 text-lg leading-relaxed">
        <p><strong>1.</strong> <b>What are the Lotus Temple Delhi timings?</b><br/>The Lotus Temple is open from 9:00 AM to 7:00 PM (summer) and 9:30 AM to 5:30 PM (winter). Closed on Mondays.</p>
        <p><strong>2.</strong> <b>Is Lotus Temple free or paid?</b><br/>It is completely free for all visitors.</p>
        <p><strong>3.</strong> <b>What is the nearest metro station to the Lotus Temple, Delhi?</b><br/>Kalkaji Mandir metro station is just a short walk away.</p>
        <p><strong>4.</strong> <b>Can we take photos inside the Lotus Temple?</b><br/>Photography is not allowed inside but you can take photos outside.</p>
        <p><strong>5.</strong> <b>Is the Lotus Temple crowded on weekends?</b><br/>Yes, weekends can get quite crowded. Visit early in the morning for a peaceful experience.</p>
        <p><strong>6.</strong> <b>Can couples visit the Lotus Temple?</b><br/>Yes, couples, families and solo travellers - all are welcome.</p>
        <p><strong>7.</strong> <b>How much time is needed to visit the Lotus Temple?</b><br/>Around 1–2 hours is enough.</p>
      </div>

      {/* Author */}
      <div className="mt-6 pt-8">
        <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src="/Image/kritisingh.jpg"
            alt="Kriti Singh"
            className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
          />

          <p className="text-gray-800 leading-relaxed text-justify text-lg">
            <span className="font-semibold">Kriti Singh </span>
            is a writer and web story creator who started writing out of curiosity and over time, it became her way of understanding the world around her. Originally from Bihar and now based in Delhi for her studies, her perspective is shaped by both—her roots and the fast-paced life of the city. She writes about everyday places, food spots and small moments people often overlook, capturing them as they are, without trying to make them sound better than they feel. Her work is grounded in observation and honesty, focusing on stories that feel real, simple and relatable.
          </p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Lotus;