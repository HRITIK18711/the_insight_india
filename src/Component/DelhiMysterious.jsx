import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="Delhi Mysterious Places"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const DelhiMysterious = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Delhi’s Most Mysterious Places People Still Talk About
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg text-gray-600 mb-4">
          From forgotten palaces to eerie ruins, these places reveal the darker legends of the capital
        </p>

        {/* AUTHOR */}
        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Pragya Singh</span>
        </p>

        {/* HERO */}
        <SectionImage src="/Image/delhi-mysterious-01.jpg" source="Freepix" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          The historic city of Delhi is known for its grand monuments, crowded markets and centuries of cultural heritage. Yet beyond the famous landmarks lies a different side of the capital, a mysterious world of abandoned forts, silent forests and legends that locals continue to whisper about even today.
        </p>

        <p className="text-gray-700 mb-6">
          Over the centuries, Delhi has witnessed the rise and fall of powerful empires, dramatic royal conflicts and spiritual traditions that shaped the city’s identity. These events left behind not only magnificent architecture but also stories that blur the line between history and folklore.
        </p>

        <p className="text-gray-700 mb-6">
          Some of these places are linked with strange traditions, others with ghost stories and a few with unexplained historical mysteries. Whether these tales are based on fact or imagination, they continue to fascinate explorers, historians and curious travellers.
        </p>

        <p className="text-gray-700 mb-6">
          Here are five of Delhi’s most mysterious places that people still talk about today.
        </p>

        {/* MALCHA MAHAL */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Forgotten Palace in the Forest - Malcha Mahal
        </h2>

        <SectionImage src="/Image/delhi-mysterious-02.jpg" source="India Today" />

        <p className="text-gray-700 mb-6">
          Hidden deep inside the forested ridge of Delhi stands the mysterious Malcha Mahal, a crumbling structure surrounded by thick vegetation and silence. Built during the 14th century under the rule of Firoz Shah Tughlaq, the building was originally used as a hunting lodge by the rulers of the Delhi Sultanate.
        </p>

        <p className="text-gray-700 mb-6">
          For centuries, the palace remained largely forgotten. However, in the 1980s the site gained attention when a woman claiming to be a descendant of the royal family of Oudh moved into the abandoned structure with her children.
        </p>

        <p className="text-gray-700 mb-6">
          Even today, the structure remains hidden among the trees, partially ruined and rarely visited. The silence of the surrounding forest and the strange history associated with the palace give Malcha Mahal an atmosphere that feels mysterious and almost frozen in time.
        </p>

        {/* FEROZ SHAH KOTLA */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Place Where People Write Letters to Spirits - Feroz Shah Kotla Fort
        </h2>

        <SectionImage src="/Image/delhi-mysterious-03.jpg" source="India.com" />

        <p className="text-gray-700 mb-6">
          Among Delhi’s historic ruins, Feroz Shah Kotla Fort holds one of the most unusual reputations. Built in the 14th century by Firoz Shah Tughlaq, the fort once served as a major administrative centre.
        </p>

        <p className="text-gray-700 mb-6">
          Many locals believe that supernatural beings known as jinns inhabit the ruins. Every Thursday, visitors arrive carrying letters, candles and offerings, placing them inside the structure hoping their wishes will be fulfilled.
        </p>

        {/* SANJAY VAN */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Quiet Forest with Unexplained Stories - Sanjay Van
        </h2>

        <SectionImage src="/Image/delhi-mysterious-04.jpg" source="The Times of India" />

        <p className="text-gray-700 mb-6">
          Sanjay Van is one of the largest urban forests in Delhi. During the day it appears peaceful with walking trails and greenery, but as evening approaches, the atmosphere changes.
        </p>

        <p className="text-gray-700 mb-6">
          Visitors have shared stories about strange sounds, whispers and shadows. Though there is no proof, the dense forest fuels imagination.
        </p>

        {/* DELHI CANTT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Famous Ghost Legend of Delhi Cantonment
        </h2>

        <SectionImage src="/Image/delhi-mysterious-05.jpg" source="India.com" />

        <p className="text-gray-700 mb-6">
          One of the most famous urban legends in Delhi comes from Delhi Cantonment. Drivers at night reportedly see a woman in white asking for a ride.
        </p>

        <p className="text-gray-700 mb-6">
          Some claim she runs alongside vehicles if ignored. While unverified, the story remains widely discussed.
        </p>

        {/* TUGHLAQABAD */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Cursed City of Ruins - Tughlaqabad Fort
        </h2>

        <SectionImage src="/Image/delhi-mysterious-06.jpg" source="Wikimedia Commons" />

        <p className="text-gray-700 mb-6">
          Tughlaqabad Fort was built in the 14th century but abandoned soon after. Legend says Sufi saint Nizamuddin Auliya cursed it.
        </p>

        <p className="text-gray-700 mb-6">
          Today, its massive ruins create a haunting yet majestic atmosphere.
        </p>

        {/* WHY FASCINATE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why These Places Continue to Fascinate People
        </h2>

        <p className="text-gray-700 mb-6">
          These places represent different chapters of Delhi’s history. Their abandoned structures and legends create intrigue and curiosity.
        </p>

        {/* VISITING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Visiting These Mysterious Places
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Visit during daylight hours</li>
          <li>Respect monuments</li>
          <li>Carry water and wear comfortable shoes</li>
          <li>Avoid isolated areas at night</li>
        </ul>

        <p className="text-gray-700 mb-6">
          These places offer a unique perspective beyond Delhi’s famous landmarks.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><b>Which is the most mysterious place in Delhi?</b><br />Feroz Shah Kotla Fort is widely considered the most mysterious.</p>

          <p><b>Can visitors explore Malcha Mahal?</b><br />Access is restricted but nearby areas can be explored.</p>

          <p><b>Why is Tughlaqabad Fort cursed?</b><br />Legend links it to Nizamuddin Auliya.</p>

          <p><b>Is Sanjay Van safe?</b><br />Yes, especially during daytime.</p>

          <p><b>What is the Delhi Cantt ghost story?</b><br />A woman in white asking for a ride at night.</p>
        </div>

        {/* AUTHOR */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-semibold mb-4">About the Author</h3>

          <p className="text-gray-700">
            Pragya Singh is a Delhi-based travel writer and heritage enthusiast passionate about uncovering lesser-known historical places across India.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DelhiMysterious;