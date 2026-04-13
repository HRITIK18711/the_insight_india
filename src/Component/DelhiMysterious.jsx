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
        <p className="text-xl font-bold text-black mb-4">
          From forgotten palaces to eerie ruins, these places reveal the darker legends of the capital
        </p>

        {/* AUTHOR */}
        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Pragya Singh</span>
        </p>

        {/* HERO */}
        <SectionImage src="/Image/mysterious-places-in-delhi-01.png" source="Freepix" />

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

        <p className="text-xl font-bold text-black mb-4">
          Here are five of Delhi’s most mysterious places that people still talk about today.
        </p>

        {/* MALCHA MAHAL */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Forgotten Palace in the Forest - Malcha Mahal
        </h2>

        <SectionImage src="/Image/mysterious-places-in-delhi-02.png" source="India Today" />

        <p className="text-gray-700 mb-6">
          Hidden deep inside the forested ridge of Delhi stands the mysterious Malcha Mahal, a crumbling structure surrounded by thick vegetation and silence. Built during the 14th century under the rule of Firoz Shah Tughlaq, the building was originally used as a hunting lodge by the rulers of the Delhi Sultanate.
        </p>

        <p className="text-gray-700 mb-6">
          For centuries, the palace remained largely forgotten. However, in the 1980s the site gained attention when a woman claiming to be a descendant of the royal family of Oudh moved into the abandoned structure with her children. The family lived there for decades in near isolation without electricity or modern facilities, turning the palace into one of Delhi’s most unusual residential stories.
        </p>

        <p className="text-gray-700 mb-6">
          Even today, the structure remains hidden among the trees, partially ruined and rarely visited. The silence of the surrounding forest and the strange history associated with the palace give Malcha Mahal an atmosphere that feels mysterious and almost frozen in time.
        </p>

        {/* FEROZ SHAH KOTLA */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Place Where People Write Letters to Spirits - Feroz Shah Kotla Fort
        </h2>

        <SectionImage src="/Image/mysterious-places-in-delhi-03.png" source="India.com" />

        <p className="text-gray-700 mb-6">
          Among Delhi’s historic ruins, Feroz Shah Kotla Fort holds one of the most unusual reputations. Built in the 14th century by Firoz Shah Tughlaq, the fort once served as a major administrative centre of the Delhi Sultanate.
        </p>

        <p className="text-gray-700 mb-6">
          Today, the site is famous for a tradition that blends spirituality and mystery. Many locals believe that supernatural beings known as jinns inhabit the ruins of the fort. Every Thursday, visitors arrive carrying letters, candles and offerings.
        </p>

        <p className="text-gray-700 mb-6">
          These letters are placed inside the ancient chambers and walls of the structure with the hope that the unseen spirits will solve personal problems or grant wishes.
        </p>

        <p className="text-gray-700 mb-6">
          Whether viewed as faith or folklore, the practice continues to attract curious visitors and researchers who want to witness one of Delhi’s most intriguing traditions.
        </p>

        {/* SANJAY VAN */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Quiet Forest with Unexplained Stories - Sanjay Van
        </h2>

        <SectionImage src="/Image/mysterious-places-in-delhi-04.png" source="The Times of India" />

        <p className="text-gray-700 mb-6">
          Spread across a large green area near the historic region of Mehrauli, Sanjay Van is one of the largest urban forests in Delhi. During the day it appears peaceful, filled with walking trails, birds, and historical tombs hidden among the trees.
        </p>

        <p className="text-gray-700 mb-6">
          But as evening approaches, the atmosphere of the forest changes dramatically.
        </p>

        <p className="text-gray-700 mb-6">
          Over the years, visitors have shared stories about strange sounds, unexplained whispers, or shadows moving between the trees after sunset. Some walkers claim they feel an unusual sense of unease while exploring deeper parts of the forest.
        </p>

        <p className="text-gray-700 mb-6">
          Although there is no evidence supporting these stories, the dense vegetation and isolated ruins easily fuel the imagination. Because of this mysterious reputation, many locals prefer to explore Sanjay Van during the daytime.
        </p>

        {/* DELHI CANTT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Famous Ghost Legend of Delhi Cantonment
        </h2>

        <SectionImage src="/Image/mysterious-places-in-delhi-05.png" source="India.com" />

        <p className="text-gray-700 mb-6">
          One of the most famous urban legends associated with Delhi comes from the quiet, tree-lined roads of Delhi Cantonment.
        </p>

        <p className="text-gray-700 mb-6">
          According to a story that has circulated for decades, drivers traveling late at night sometimes encounter a woman dressed in white standing beside the road asking for a ride. Some versions of the story claim that if the driver refuses to stop, the woman begins running alongside the vehicle at an unusually fast speed.
        </p>

        <p className="text-gray-700 mb-6">
          Despite the lack of verified evidence, the legend has become one of the most widely shared ghost stories in the city. Many residents consider it nothing more than folklore, but the story continues to capture the curiosity of people who enjoy mysterious tales.
        </p>

        {/* TUGHLAQABAD */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Cursed City of Ruins - Tughlaqabad Fort
        </h2>

        <SectionImage src="/Image/mysterious-places-in-delhi-06.png" source="Wikimedia Commons" />

        <p className="text-gray-700 mb-6">
          Standing on the south eastern edge of Delhi, the massive stone walls of Tughlaqabad Fort represent one of the most ambitious construction projects of the Delhi Sultanate. The fortress was built in the 14th century by Ghiyasuddin Tughlaq and was intended to become a powerful fortified capital.
        </p>

        <p className="text-gray-700 mb-6">
          However, the city was abandoned not long after its construction. According to legend, the famous Sufi saint Nizamuddin Auliya cursed the fort after a conflict with the ruler. The saint reportedly declared that the city would never flourish.
        </p>

        <p className="text-gray-700 mb-6">
          Over time, the once-grand capital gradually fell into ruin. Today the towering stone walls, empty pathways, and silent surroundings give the fort a haunting yet majestic atmosphere.
        </p>

        <p className="text-gray-700 mb-6">
          Photographers, historians, and curious explorers often visit the ruins to experience one of Delhi’s most dramatic historical landscapes.
        </p>

        {/* WHY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why These Places Continue to Fascinate People
        </h2>

        <p className="text-gray-700 mb-6">
          The fascination with these locations goes beyond ghost stories. Each site represents a different chapter of the long and complex history of Delhi.
        </p>

        <p className="text-gray-700 mb-6">
          Abandoned architecture, centuries-old legends, and unexplained traditions create a powerful sense of intrigue. These places remind visitors that history is not only about monuments and dates - it is also about the stories people continue to share across generations.
        </p>

        <p className="text-gray-700 mb-6">
          For travellers who enjoy exploring unusual destinations, these mysterious locations offer a completely different perspective on the capital.
        </p>

        {/* VISITING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Visiting These Mysterious Places
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Visit historical ruins during daylight hours.</li>
          <li>Respect protected monuments and restricted areas.</li>
          <li>Carry water and comfortable walking shoes.</li>
          <li>Avoid exploring isolated areas alone at night.</li>
        </ul>

        <p className="text-gray-700 mb-6">
          These places are fascinating from a historical perspective and exploring them responsibly helps preserve their heritage.
        </p>

        <p className="text-gray-700 mb-6">
          While Delhi is famous for its iconic landmarks, the city’s mysterious locations reveal a hidden layer of history and folklore that continues to intrigue people even today.
        </p>

        <p className="text-gray-700 mb-6">
          From the silent ruins of Malcha Mahal to the legendary walls of Tughlaqabad Fort, these places remind us that the past often leaves behind unanswered questions and fascinating stories.
        </p>

        <p className="text-gray-700 mb-6">
          For curious travellers and history enthusiasts, exploring these mysterious corners of Delhi offers a unique way to experience the capital beyond its famous monuments.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><b>Which is the most mysterious place in Delhi?</b><br />Many people consider Feroz Shah Kotla Fort one of the most mysterious places because of the tradition of leaving letters for jinns.</p>

          <p><b>Can visitors explore Malcha Mahal?</b><br />Access to Malcha Mahal is restricted, but the surrounding forest areas of the ridge can be explored carefully.</p>

          <p><b>Why is Tughlaqabad Fort associated with a curse?</b><br />Legend says the Sufi saint Nizamuddin Auliya cursed the city after a conflict with Ghiyasuddin Tughlaq.</p>

          <p><b>Is Sanjay Van safe to visit?</b><br />Yes, Sanjay Van is generally safe and popular among walkers and nature lovers, especially during the daytime.</p>

          <p><b>What is the ghost story linked with Delhi Cantonment?</b><br />A popular urban legend describes a mysterious woman appearing along the roads of Delhi Cantonment late at night asking for a ride.</p>
        </div>

        {/* AUTHOR */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">

            {/* Author Image */}
            <img
              src="/Image/pragya.jpg"
              alt="Pragya Singh"
              className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
            />

            {/* Author Content */}
            <p className="text-gray-800 leading-relaxed text-justify text-lg mt-4 md:mt-1">
              <span className="font-semibold">Pragya Singh</span> is a Delhi-based travel writer and
              heritage enthusiast passionate about uncovering lesser-known historical places across India.
              From famous monuments like Qutub Minar
              to hidden ruins inside the Ridge forest, she focuses on telling the
              stories behind forgotten architecture and overlooked heritage sites.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DelhiMysterious;