import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="connaught place delhi"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const CP = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Connaught Place Delhi: Why Everyone Ends Up in CP (Best Places & Food Guide)
        </h1>

        {/* AUTHOR */}
        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        {/* HERO */}
        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-01.png" source="Kriti Singh" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          Ever noticed how every plan in Delhi somehow ends with “Let’s meet in CP”? That’s the magic of Connaught Place (CP). Right in the heart of the city, CP isn’t just a market - it’s where Delhi breathes, celebrates and comes alive. From spontaneous shopping and cafe hopping to late-night walks under glowing colonial pillars, CP has a vibe that’s impossible to replicate.
        </p>

        <p className="text-gray-700 mb-6">
          Whether you're searching for the best things to do in CP, hidden gems or just a place to hang out, this guide will show you exactly why it is the ultimate destination in Delhi.
        </p>

        {/* STORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Story behind Connaught Place
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-02.png" source="Pexels" />

        <p className="text-gray-700 mb-6">
          Built in 1933 and designed by British architect Robert Tor Russell, Connaught Place reflects elegant Georgian-style architecture. Named after the Duke of Connaught, it was originally created as a commercial hub for British India.
        </p>

        <p className="text-gray-700 mb-6">
          Even today, its iconic circular layout- Inner Circle, Middle Circle and Outer Circle - makes it one of the most recognizable places in India.
        </p>

        {/* SPECIAL */}
        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-03.png" source="Kriti Singh" />

        <p className="text-gray-700 mb-6">
          Evolving from colonial roots to modern chaos, CP perfectly balances heritage and hype. It isn’t just the heart of Delhi, it’s a vibe you can feel. Surrounded by the iconic white colonnades, it blends old world charm with a constantly buzzing modern vibe. From street performers at Central Park to cafes, shopping streets and spots like Wenger's, every corner feels alive.
        </p>

        <p className="text-gray-700 mb-6">
          It is well connected by the Delhi Metro, it’s the kind of place where a quick visit quietly turns into hours, making CP less of a destination and more of a feeling you keep coming back to.
        </p>

        {/* WHY DIFFERENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why does Connaught Place feel different?
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-04.png" source="Indian Express (Praveen Khanna)" />

        <p className="text-gray-700 mb-4">
          There are hundreds of markets in Delhi but nothing feels like CP.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>That perfect circular design (you’ll never feel lost, just keep exploring).</li>
          <li>White colonial pillars that glow beautifully at night.</li>
          <li>A mix of old-school charm and Gen Z energy.</li>
          <li>Street chaos outside, aesthetic cafes inside.</li>
        </ul>

        {/* THINGS TO DO */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Things to Do in Connaught Place (Don’t Miss These)
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-05.png" />

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Street Shopping That Hits Different</h3>
        <p className="text-gray-700 mb-4">
          Janpath Market - fashion, accessories and thrift vibes.
        </p>
        <p className="text-gray-700 mb-4">
          Palika Bazaar - underground maze of budget deals.
        </p>
        <p className="text-gray-700 mb-6">
          (Pro tip: If you didn’t bargain, you overpaid)
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Eat Like There’s No Tomorrow</h3>
        <p className="text-gray-700 mb-6">
          From ₹50 street food to luxury dining, CP has it all. Must try: Chaat and Momo from street stalls and iconic cafes & restaurants.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Sit at Central Park and Do Nothing</h3>
        <p className="text-gray-700 mb-6">
          Sounds boring? It’s actually not. Right in the middle of CP, this place feels calm and lively at the same time. Around 7 PM, the fountains light up with soft colours and create a really nice vibe. It is a nice place to relax and a good spot for a date. Sometimes you’ll even find music and small events happening.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Experience CP Nightlife</h3>
        <p className="text-gray-700 mb-6">
          After sunset, CP feels completely different. The lights glow brighter, music fills the air and the whole place comes alive with energy. It’s the perfect place to hang out with friends, go for a late-night walk or simply enjoy the lively party vibe of the city.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Get Lost (Best Part Honestly)</h3>
        <p className="text-gray-700 mb-6">
          Walk without a plan, you’ll find hidden bookstores, quiet cafes and random aesthetic corners. That’s where CP hits hardest.
        </p>

        {/* HIDDEN GEMS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Hidden Gems Most People Miss
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-06.png" source="Aaj Tak" />

        <p className="text-gray-700 mb-6">
          This is where you beat most tourists. The inner circle lanes have some of the best cafes while early mornings in CP feel calm and almost empty, a rare kind of peace in Delhi. Rooftop cafes offer underrated sunset views, and the small shops tucked between blocks often have unique finds. CP isn’t just about seeing places, it’s about discovering them.
        </p>

        {/* FOOD */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Food & Shopping in Connaught Place
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-07.png" source="Delhi Tourism" />

        <p className="text-gray-700 mb-6">
          Connaught Place is a complete experience. You’ll find everything here - from budget shopping to luxury brands, from street food to fine dining and from local vibes to global names. It’s truly a one-stop lifestyle hub where there’s something for everyone.
        </p>

        <p className="text-gray-700 mb-6">
          It is the place where Delhi’s most iconic flavours come alive in every corner. Start your trail with the legendary cold coffee from Depaul's creamy, chilled and perfectly nostalgic. For a hearty South Indian fix, Sagar Ratna serves crispy masala dosas and soft idlis soaked in rich, flavourful sambar. When the heat kicks in, nothing beats the thick and creamy lassi from Baba Nagpal Corner. Craving proper Delhi street indulgence? The chhole bhature and rajma chawal at Jain Chawal Wale is spicy, tangy and unapologetically satisfying. And to end on a classic note, Wenger's offers old-school burgers, pastries and patties that never go out of style.
        </p>

        {/* NEARBY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Places to Visit near Connaught Place
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-08.png" />

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>India Gate</li>
          <li>Jantar Mantar</li>
          <li>Janpath Market</li>
          <li>Palika Bazaar</li>
          <li>Hanuman Mandir</li>
          <li>Gurudwara Shri Bangla Sahib</li>
        </ul>

        {/* BEST TIME */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Time to Visit Connaught Place
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-09.png" />

        <p className="text-gray-700 mb-6">
          The best time to visit is between October and March, when the weather is pleasant and comfortable. Evenings are especially enjoyable with bright lights and a lively crowd creating a great vibe. If you prefer a quieter experience, weekdays are a better choice as weekends can get quite crowded.
        </p>

        {/* HOW TO REACH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How to Reach Connaught Place
        </h2>

        <SectionImage src="/Image/connaught-place-new-delhi-travel-guide-10.png" source="Wikipedia" />

        <p className="text-gray-700 mb-4">
          By Metro: Rajiv Chowk Metro Station (Yellow & Blue Line)
        </p>

        <p className="text-gray-700 mb-6">
          By DTC Bus: Shivaji Stadium, Super Bazar, Patel Chowk, Palika Kendra
        </p>

        {/* TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Travel Tips
        </h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Bargain hard in Janpath Market</li>
          <li>Keep cash</li>
          <li>Stay alert in crowds</li>
          <li>Wear comfy shoes</li>
          <li>Don’t rush, explore slowly</li>
        </ul>

        {/* CONCLUSION */}
        <p className="text-gray-700 mb-6">
          Connaught Place isn’t just a place you visit, it’s a place you keep coming back to. Every time feels a little different and every visit turns into a new story. And honestly, that’s why every plan in Delhi somehow ends with “Chal CP chalte hain.”
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><b>What is Connaught Place famous for?</b><br />Shopping, cafes, nightlife and colonial architecture.</p>
          <p><b>Is Connaught Place safe at night?</b><br />Yes, especially in crowded areas but basic precautions are important.</p>
          <p><b>What are the best things to do?</b><br />Shopping, food, nightlife and exploring hidden spots.</p>
          <p><b>Closest metro station?</b><br />Rajiv Chowk Metro Station</p>
        </div>

        {/* AUTHOR */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">

            {/* Author Image */}
            <img
              src="/Image/kritisingh.jpg"
              alt="Pragya Singh"
              className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
            />

            {/* Author Content */}
            <p className="text-gray-800 leading-relaxed text-justify text-lg mt-4 md:mt-1">
              <span className="font-semibold">Kriti Singh </span>is a writer and web story creator who started writing out of curiosity and over time, it became her way of understanding the world around her. Originally from Bihar and now based in Delhi for her studies, her perspective is shaped by both—her roots and the fast-paced life of the city. She writes about everyday places, food spots and small moments people often overlook, capturing them as they are, without trying to make them sound better than they feel. Her work is grounded in observation and honesty, focusing on stories that feel real, simple and relatable.

            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CP;