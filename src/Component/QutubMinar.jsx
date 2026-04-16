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

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Qutub Minar Delhi: History, Height, Timings, Entry Fee, How to Reach & Nearby Places
        </h1>
        <p className="text-gray-600 mb-6">
         <span className="font-semibold">Published On: 4 April, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Pragya Singh</span>
        </p>

        <SectionImage src="/Image/qutub-minar-delhi-01.png" />

        <p className="text-gray-700 mb-6">
          I have walked past Qutub Minar more times than I can count. Growing up in Delhi, it was always there in the background of school trips and lazy weekend drives through South Delhi. Familiar, almost routine. The kind of monument you stop noticing precisely because it has always been around. And then one winter morning, I stood directly at its base and looked up.
        </p>

        <p className="text-gray-700 mb-6">
          The minaret rises so steeply from the ground that staring upward feels slightly dizzying. The carved verses running across every surface, the layered bands of red sandstone and marble, the sheer scale of something built nearly nine hundred years ago without modern machinery - it suddenly becomes impossible to ignore.
        </p>

        <p className="text-gray-700 mb-6">
          Qutub Minar is not just Delhi's most visited monument. It is one of the most extraordinary examples of early Indo-Islamic architecture in the world. Within the larger Qutub complex are ruins, mosques, tombs and inscriptions that span more than a thousand years of Delhi's layered history - from ancient Hindu temples to the rise of the Delhi Sultanate.
        </p>

        <p className="text-gray-700 mb-6">
          If you have been putting off a visit because it feels too familiar or too touristy, I understand. But Qutub Minar rewards a slower visit. And this guide will help you experience it properly.
        </p>

        {/* QUICK FACTS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Quick Facts About Qutub Minar</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border text-left">
            <tbody>
              <tr><td className="border p-2 font-semibold">Location</td><td className="border p-2">Mehrauli, South Delhi</td></tr>
              <tr><td className="border p-2 font-semibold">Built By</td><td className="border p-2">Started by Qutb ud-Din Aibak, completed by Iltutmish</td></tr>
              <tr><td className="border p-2 font-semibold">Construction Began</td><td className="border p-2">1193 CE</td></tr>
              <tr><td className="border p-2 font-semibold">UNESCO Status</td><td className="border p-2">World Heritage Site (1993)</td></tr>
              <tr><td className="border p-2 font-semibold">Height</td><td className="border p-2">72.5 metres</td></tr>
              <tr><td className="border p-2 font-semibold">Floors</td><td className="border p-2">5 storeys</td></tr>
              <tr><td className="border p-2 font-semibold">Entry Fee</td><td className="border p-2">INR 40 (Indians), INR 600 (Foreigners), Free for children up to 15 years</td></tr>
              <tr><td className="border p-2 font-semibold">Visiting Hours</td><td className="border p-2">7 am to 8 pm</td></tr>
              <tr><td className="border p-2 font-semibold">Nearest Metro</td><td className="border p-2">Qutub Minar (Yellow Line)</td></tr>
              <tr><td className="border p-2 font-semibold">Time Needed</td><td className="border p-2">1.5–2 hours</td></tr>
            </tbody>
          </table>
        </div>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">History of Qutub Minar</h2>
        <SectionImage src="/Image/qutub-minar-delhi-02.png" />

        <p className="text-gray-700 mb-6">
          Construction of Qutub Minar began in 1193 CE under Qutb ud-Din Aibak, founder of the Delhi Sultanate. The tower was built beside the Quwwat-ul-Islam Mosque, the first mosque constructed in India after the Islamic conquest of Delhi.
        </p>

        <p className="text-gray-700 mb-6">The minaret had two purposes:</p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>A religious tower for the call to prayer</li>
          <li>A political symbol marking the arrival of a new empire</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Aibak died in 1210 CE after completing only the first storey. His successor Shamsuddin Iltutmish added three additional storeys between 1211 and 1236 CE. He also expanded the mosque complex and constructed several structures nearby including his own tomb. The fifth storey was later added by Firoz Shah Tughlaq after earthquake damage destroyed the upper section. As a result, the tower we see today is a layered monument shaped by several rulers across decades.
        </p>

        {/* EARTHQUAKE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Earthquakes, Lightning and Repairs</h2>

        <p className="text-gray-700 mb-6">
          Qutub Minar has survived numerous natural disasters. The most severe damage occurred in 1368 CE, when lightning struck the tower.
        </p>

        <p className="text-gray-700 mb-6">
          Firoz Shah Tughlaq repaired the structure and rebuilt the upper levels using marble and sandstone, which is why the upper floors appear lighter than the lower ones.
        </p>

        <p className="text-gray-700 mb-6">
          Another earthquake in 1803 damaged the monument again. A British engineer Major Robert Smith restored it in 1828 and added a cupola at the top. The addition was later removed and placed inside the complex garden where it still stands today as Smith's Cupola.
        </p>

        {/* INCIDENT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">The Tragic Incident of 1981</h2>

        <p className="text-gray-700 mb-6">
          In December 1981, a power failure caused panic inside the narrow staircase of the tower during a school visit. A stampede followed and 45 people died most of them children. After this incident, authorities permanently closed the interior staircase to visitors. Today, tourists can explore the complex but cannot climb the tower.
        </p>

        {/* ARCHITECTURE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Architecture of Qutub Minar</h2>
        <SectionImage src="/Image/qutub-minar-delhi-03.png" />

        <p className="text-gray-700 mb-6">
          Qutub Minar is an extraordinary architectural achievement and remains the tallest brick minaret in the world. Standing at 72.5 metres, it dominates the skyline of South Delhi and has been recognized as a UNESCO World Heritage Site since 1993.
        </p>

        {/* FIVE STOREYS */}
        <h3 className="text-xl font-semibold mt-8 mb-4">The Five Storeys</h3>
        <SectionImage src="/Image/qutub-minar-delhi-04.png" />

        <p className="text-gray-700 mb-6">
          The minaret consists of five distinct storeys each separated by a projecting balcony.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Lower three floors made of red sandstone</li>
          <li>Upper floors rebuilt using marble and sandstone</li>
          <li>Base diameter: 14.3 metres</li>
          <li>Top diameter: 2.7 metres</li>
        </ul>

        <p className="text-gray-700 mb-6">
          This tapering structure gives the monument its elegant silhouette.
        </p>

        {/* CALLIGRAPHY */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Arabic Calligraphy</h3>
        <SectionImage src="/Image/qutub-minar-delhi-05.png" />

        <p className="text-gray-700 mb-6">
          One of the most striking features of Qutub Minar is the bands of Arabic calligraphy carved across the tower.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Verses from the Quran</li>
          <li>Historical records</li>
          <li>Names of rulers who contributed to the construction</li>
        </ul>

        <p className="text-gray-700 mb-6">
          The scripts include Naskh and Kufic styles both beautifully carved into the stone.
        </p>

        {/* IRON PILLAR */}
        <h3 className="text-xl font-semibold mt-8 mb-4">The Iron Pillar</h3>
        <SectionImage src="/Image/qutub-minar-delhi-06.png" />

        <p className="text-gray-700 mb-6">
          Standing in the courtyard of the Quwwat-ul-Islam Mosque is the famous Iron Pillar of Delhi. Dating back to the 4th century CE, the pillar predates the minaret by nearly 700 years.
          It was originally erected in honour of Lord Vishnu most likely during the Gupta Empire. What makes the pillar remarkable is its resistance to rust, despite standing outdoors for more than 1600 years.

        </p>

        <p className="text-gray-700 mb-6">
          For centuries, visitors believed that wrapping their arms around the pillar while touching fingers behind the back would grant a wish, though touching it is now restricted.
        </p>

        {/* MORE SECTIONS CONTINUE SAME... */}

        {/* QUWWAT-UL-ISLAM */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Quwwat-ul-Islam Mosque</h3>

        <p className="text-gray-700 mb-6">
          Adjacent to the minaret lies the Quwwat-ul-Islam Mosque, one of the earliest Islamic structures in India.
        </p>

        <p className="text-gray-700 mb-6">
          It was built using materials from demolished Hindu and Jain temples.
        </p>

        <p className="text-gray-700 mb-6">
          Because of this, the mosque displays a fascinating blend of architecture:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Hindu temple columns with intricate carvings</li>
          <li>Islamic arches inscribed with Quranic verses</li>
        </ul>

        <p className="text-gray-700 mb-6">
          This fusion makes it one of the most historically layered monuments in Delhi.
        </p>

        {/* ILTUTMISH */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Tomb of Iltutmish</h3>
        <SectionImage src="/Image/qutub-minar-delhi-07.png" />

        <p className="text-gray-700 mb-6">
          Inside the complex stands the Tomb of Iltutmish built in 1235 CE.
        </p>

        <p className="text-gray-700 mb-6">
          Although its roof collapsed centuries ago, the interior walls still feature some of the finest stone carvings in early Indo-Islamic architecture.
        </p>

        <p className="text-gray-700 mb-6">
          Geometric patterns, Quranic calligraphy and ornate carvings cover nearly every inch of the chamber.
        </p>

        {/* ALAI MINAR */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Alai Minar: The Tower That Was Never Finished</h3>
        <SectionImage src="/Image/qutub-minar-delhi-08.jpg" />

        <p className="text-gray-700 mb-6">
          One of the most fascinating structures in the complex is Alai Minar.
        </p>

        <p className="text-gray-700 mb-6">
          It was begun by Alauddin Khalji, who planned to build a tower twice the height of Qutub Minar.
        </p>

        <p className="text-gray-700 mb-6">
          Construction stopped after his death in 1316 CE. Today only the massive base of the tower remains - a reminder of an ambition that history never completed.
        </p>

        {/* FACTS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Interesting Facts About Qutub Minar</h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Qutub Minar is the tallest brick minaret in the world</li>
          <li>The tower once had 379 internal steps leading to the top</li>
          <li>Lightning has struck the monument multiple times over the centuries</li>
          <li>The Iron Pillar nearby is over 1600 years old</li>
          <li>The monument is part of the Qutub Complex UNESCO World Heritage Site</li>
          <li>Construction of the tower spanned around 20 years</li>
        </ul>

        {/* THINGS TO SEE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Things to See at Qutub Minar Complex</h2>

        <SectionImage src="/Image/qutub-minar-delhi-09.jpg" source="Rohit Upadhyay" />

        <p className="text-gray-700 mb-6">
          When visiting the complex, don't just stop at the tower. Explore the surrounding monuments as well.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><b>Qutub Minar</b> - Observe the carved calligraphy, balconies and tapering structure.</li>
          <li><b>Iron Pillar</b> - One of the oldest surviving metal monuments in the world.</li>
          <li><b>Quwwat-ul-Islam Mosque</b> - Blend of Hindu and Islamic architecture.</li>
          <li><b>Alai Darwaza</b> - Built in 1311 CE, early Islamic architecture.</li>
          <li><b>Tomb of Iltutmish</b> - 13th century carved chamber.</li>
          <li><b>Alai Minar</b> - Unfinished giant tower.</li>
          <li><b>Smith's Cupola</b> - British-era structure.</li>
        </ul>

        {/* HOW TO REACH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">How to Reach Qutub Minar</h2>

        <h3 className="text-lg font-semibold mt-4 mb-2">By Metro</h3>
        <p className="text-gray-700 mb-4">
          Take the Delhi Metro Yellow Line and get down at Qutub Minar Station.
          The monument is about 10 minutes away by auto or cab.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">By Road</h3>
        <p className="text-gray-700 mb-4">
          Cabs, autos and ride-sharing services can drop visitors directly at the entrance.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">By Bus</h3>
        <p className="text-gray-700 mb-6">
          Several Delhi Transport Corporation buses connect the area with Connaught Place, Lajpat Nagar and other parts of the city.
        </p>

        {/* BEST TIME */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Best Time to Visit Qutub Minar</h2>

        <SectionImage src="/Image/qutub-minar-delhi-10.jpg" source="Rohit Upadhyay" />

        <p className="text-gray-700 mb-6">
          The best time to visit is October to March when Delhi's weather is cool and comfortable.
        </p>

        <p className="text-gray-700 mb-6">
          Summers from April to June can be extremely hot.
        </p>

        <p className="text-gray-700 mb-4">
          Early mornings are ideal because:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>crowds are smaller</li>
          <li>the lighting is perfect for photography</li>
          <li>the temperature is cooler</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Winter afternoons also offer beautiful golden light on the sandstone surfaces.
        </p>

        {/* TRAVEL TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Travel Tips Before Visiting</h2>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Carry a valid photo ID</li>
          <li>Wear comfortable walking shoes</li>
          <li>Bring drinking water</li>
          <li>Weekday visits are less crowded</li>
          <li>Photography is allowed throughout the complex</li>
          <li>Hiring a licensed guide can greatly enrich the experience</li>
          <li>Allow 1.5–2 hours to explore the entire complex</li>
        </ul>

        {/* NEARBY PLACES */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Nearby Places to Visit</h2>

        <p className="text-gray-700 mb-6">
          Qutub Minar is located in the historic Mehrauli area, which contains many lesser-known heritage sites.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><b>Mehrauli Archaeological Park (5 minutes)</b> - A vast historical park containing dozens of medieval tombs and ruins.</li>
          <li><b>Jamali Kamali Mosque and Tomb (inside the park)</b> - A beautifully decorated 16th-century monument known for its intricate interiors.</li>
          <li><b>Hauz-i-Shamsi (10 minutes)</b> - A large medieval water reservoir built by Iltutmish.</li>
          <li><b>Adham Khan's Tomb (10 minutes)</b> - A massive Mughal-era tomb located near Mehrauli bus terminal.</li>
        </ul>

        {/* IMPORTANCE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Why Qutub Minar Is Important in Indian History</h2>

        <p className="text-gray-700 mb-6">
          Qutub Minar represents the beginning of the Delhi Sultanate, one of the most important political periods in Indian history.
        </p>

        <p className="text-gray-700 mb-4">
          The monument marks:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>the establishment of Islamic rule in northern India</li>
          <li>the development of Indo-Islamic architecture</li>
          <li>the transformation of Delhi into a major imperial capital</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Over the centuries, the Qutub complex evolved into a historical archive of medieval architecture where Hindu, Islamic and later Mughal influences can all be seen together.
        </p>

        {/* CONCLUSION */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Why Qutub Minar Should Be on Every Delhi Travel Itinerary
        </h2>

        <p className="text-gray-700 mb-6">
          Qutub Minar is not simply a tall tower. It is a nine-hundred-year story carved in stone, a monument shaped by ambition, devotion, conquest and craftsmanship.
        </p>

        <p className="text-gray-700 mb-6">
          From the ancient Iron Pillar that predates the minaret by centuries to the unfinished Alai Minar standing frozen mid-construction, the Qutub complex reveals layer after layer of Delhi's past.
        </p>

        <p className="text-gray-700 mb-6">
          Whether you are visiting the city for the first time or rediscovering places you thought you already knew Qutub Minar rewards patience.
        </p>

        <p className="text-gray-700 mb-6">
          Stand at its base, look up and the scale of history becomes impossible to ignore.
        </p>

        {/* FAQ FULL */}
        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Frequently Asked Questions (FAQs) about Qutub Minar
        </h2>

        <div className="space-y-4 text-gray-700">

          <p><b>1. What is the height of Qutub Minar?</b><br />
            Qutub Minar stands 72.5 metres tall making it the tallest brick minaret in the world.</p>

          <p><b>2. Who built Qutub Minar?</b><br />
            Construction was begun by Qutb ud-Din Aibak in 1193 CE and completed by his successor Iltutmish. Later storeys were added by Firoz Shah Tughlaq.</p>

          <p><b>3. What are the visiting hours of Qutub Minar?</b><br />
            The complex is open from sunrise to sunset, approximately 7:00 AM to 5:00 PM daily.</p>

          <p><b>4. What is the entry fee for Qutub Minar?</b><br />
            The entry fee is INR 40 for Indian nationals, visitors of SAARC and BIMSTEC Countries and INR 600 for foreign tourists. Its free for children up to 15 years of age.</p>

          <p><b>5. Can visitors climb inside Qutub Minar?</b><br />
            No. Entry inside the minaret has been closed to the public since a tragic accident in 1981. Visitors can explore the surrounding complex but cannot climb the tower.</p>

          <p><b>6. Is Qutub Minar a UNESCO World Heritage Site?</b><br />
            Yes. Qutub Minar and its monuments were inscribed as a UNESCO World Heritage Site in 1993.</p>

          <p><b>7. How long does it take to visit Qutub Minar?</b><br />
            Most visitors spend 1.5 to 2 hours exploring the full complex, including the mosque ruins, the Iron Pillar, Alai Darwaza and the Tomb of Iltutmish.</p>

          <p><b>8. What is special about the Iron Pillar at Qutub Minar?</b><br />
            The Iron Pillar dates to the 4th century CE and has resisted corrosion for over 1,600 years - a feat that continues to puzzle metallurgists and scientists worldwide.</p>

          <p><b>9. What is the best time of year to visit?</b><br />
            October to March is the most comfortable time, with pleasant weather and clear skies ideal for photography.</p>

          <p><b>10. How do I reach Qutub Minar by metro?</b><br />
            Take the Yellow Line to Qutab Minar station. The complex is roughly a 10-minute walk from the station exit.</p>

          <p><b>11. Are guides available at Qutub Minar?</b><br />
            Yes. Licensed guides are available for hire at the entrance and are strongly recommended for a deeper understanding of the complex.</p>

          <p><b>12. What are the nearby attractions to Qutub Minar?</b><br />
            Mehrauli Archaeological Park, Jamali Kamali Tomb, Adham Khan's Tomb and Hauz-i-Shamsi are all within walking distance.</p>

          <p><b>13. Is photography allowed inside Qutub Minar complex?</b><br />
            Yes, photography is permitted throughout the complex for personal use.</p>

          <p><b>14. What is the Alai Minar?</b><br />
            Alai Minar is an unfinished tower within the Qutub complex begun by Alauddin Khalji who intended it to be twice the height of Qutub Minar. It was abandoned after his death.</p>

          <p><b>15. Is Qutub Minar suitable for children?</b><br />
            Yes, the complex is family-friendly and a great way to introduce children to medieval history. The open pathways and expansive grounds make it easy to explore with kids.</p>

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

export default QutubMinar;