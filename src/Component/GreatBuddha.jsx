import React from "react";

const SectionImage = ({ src, source = "Canva" }) => (
  <div className="my-6">
    <img
      src={src}
      alt="Great Buddha Statue Bodh Gaya"
      className="w-full h-[420px] object-cover rounded-lg"
    />
    <p className="text-sm text-blue-500 mt-2">
      Image Source: {source}
    </p>
  </div>
);

const GreatBuddha = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Great Buddha Statue Bodh Gaya, Bihar: Exploring the 80-Foot Symbol of Peace and Spiritual Calm
        </h1>

        {/* AUTHOR */}
        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        {/* HERO */}
        <SectionImage src="/Image/great-buddha-01.jpg" source="Kriti Singh" />

        {/* INTRO */}
        <p className="text-gray-700 mb-6">
          When you reach Bodh Gaya, Bihar, one thing you can’t miss is the Great Buddha Statue. Standing about 80 feet tall, it’s one of the most impressive sights in the area. Take a moment to pause and look around - the place has a quiet charm, with people sitting, taking pictures or simply enjoying the peaceful surroundings. This isn’t just a statue but a place where you can slow down and take a break from the rush. Whether you’re visiting as a tourist or just passing by, it leaves a lasting impression.
        </p>

        <p className="text-gray-700 mb-6">
          Surrounded by well-maintained gardens and quiet pathways, the monument creates a soothing atmosphere. Pilgrims from across the world come here to experience its spiritual significance, while travellers and photographers are drawn to its beauty. Located close to the Mahabodhi Temple, the Great Buddha Statue is one of the most iconic attractions in Bodh Gaya and a must-visit spot for anyone exploring this historic town.
        </p>

        {/* HISTORY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          History of Great Buddha Statue
        </h2>

        <SectionImage src="/Image/great-buddha-02.jpg" source="Kriti Singh" />

        <p className="text-gray-700 mb-6">
          The Great Buddha Statue was constructed between 1982 and 1989 with support from the Japanese Buddhist organization Daijokyo Buddhist Sect. The project was initiated with the goal of building a monument that would honour the teachings of Buddha and promote the message of peace and compassion across the world.
        </p>

        <p className="text-gray-700 mb-6">
          The construction process took several years and involved the efforts of skilled artisans and engineers. Carefully designed stone blocks were used to create the massive structure, ensuring both durability and artistic beauty. When the statue was finally completed and inaugurated in 1989, it quickly became one of the most recognizable landmarks in Bodh Gaya.
        </p>

        <p className="text-gray-700 mb-6">
          Today, the statue is admired not only for its size and design but also for the international collaboration behind its construction. It represents the shared devotion of Buddhist communities from different parts of the world.
        </p>

        {/* SPECIAL */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Makes This Place Special?
        </h2>

        <SectionImage src="/Image/great-buddha-03.jpg" />

        <p className="text-gray-700 mb-6">
          The most striking feature of the Great Buddha Statue is its impressive height of about 80 feet. When visitors stand near the monument, they immediately notice the calm and dignified posture of Buddha, seated in deep meditation. This posture symbolizes enlightenment, wisdom and inner balance.
        </p>

        <p className="text-gray-700 mb-6">
          The statue stands on a beautifully designed lotus-shaped pedestal, an important symbol in Buddhism that represents purity and spiritual awakening. The lotus base enhances the beauty of the monument while also reflecting the deeper philosophy of Buddhist teachings.
        </p>

        <p className="text-gray-700 mb-6">
          Another remarkable feature is the ten statues of Buddha’s disciples placed around the main monument. These statues represent important followers of Buddha and add a strong spiritual and historical dimension to the site.
        </p>

        <p className="text-gray-700 mb-6">
          The surrounding garden area also contributes to the peaceful atmosphere of the place. The neatly maintained pathways, greenery and open space make the entire complex feel calm and welcoming for visitors.
        </p>

        {/* EXPERIENCE */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Things to See or Experience Around
        </h2>

        <SectionImage src="/Image/great-buddha-04.jpg" />

        <p className="text-gray-700 mb-6">
          Visitors coming to the Great Buddha Statue can enjoy several experiences while exploring the complex. The main attraction is of course, the enormous statue itself. From every angle, the monument looks impressive and offers excellent opportunities for photography.
        </p>

        <p className="text-gray-700 mb-6">
          Walking around the statue allows visitors to observe the ten disciple statues placed around the main structure. Each sculpture adds artistic beauty and historical meaning to the site.
        </p>

        <p className="text-gray-700 mb-6">
          The gardens around the statue are also a wonderful place to spend some quiet time. Many visitors sit on the grass or benches to relax, meditate or simply enjoy the peaceful surroundings.
        </p>

        <p className="text-gray-700 mb-6">
          Early morning and late afternoon are particularly beautiful times to visit, as the sunlight gently highlights the statue and creates a calm atmosphere across the entire complex.
        </p>

        {/* HOW TO REACH */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How to Reach Bodh Gaya
        </h2>

        <SectionImage src="/Image/great-buddha-05.jpg" />

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-bold">By Air:</span> Gaya International Airport (10 km)</li>
          <li><span className="font-bold">By Train:</span> Gaya Junction Railway Station (15 km)</li>
          <li><span className="font-bold">By Road:</span> Well connected with Patna, Rajgir and Nalanda</li>
        </ul>

        {/* BEST TIME */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Best Time to Visit Bodh Gaya
        </h2>

        <SectionImage src="/Image/great-buddha-06.jpg" />

        <p className="text-gray-700 mb-6">
          The most comfortable time to visit the Great Buddha Statue is between October and March. During these months, the weather in Bodh Gaya remains cool and pleasant, making sightseeing more enjoyable.
        </p>

        <p className="text-gray-700 mb-6">
          Winter is also the period when many international pilgrims visit the town, giving visitors a chance to experience the global cultural atmosphere of Bodh Gaya.
        </p>

        <p className="text-gray-700 mb-6">
          Morning visits are ideal for those who want to enjoy the calm environment with fewer crowds while evening visits provide beautiful lighting conditions for photography.
        </p>

        {/* TRAVEL TIPS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Travel Tips
        </h2>

        <SectionImage src="/Image/great-buddha-07.jpg" />

        <p className="text-gray-700 mb-6">
          Entry to the Great Buddha Statue complex is free for all visitors. The site is generally open daily from 7:00 AM to 5:30 PM.
Since Bodh Gaya is an important religious destination, visitors are encouraged to maintain a peaceful and respectful atmosphere. Speaking softly and keeping the surroundings clean helps preserve the spiritual environment of the place.

        </p>

        

        <p className="text-gray-700 mb-6">
          It is also advisable to wear comfortable footwear, carry drinking water and visit early in the day if you want to explore the statue and nearby attractions without large crowds.

        </p>

        {/* NEARBY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Nearby Places to Visit
        </h2>

        <SectionImage src="/Image/great-buddha-08.jpg" />
        <p className="text-gray-700 mb-6">
         While visiting the Great Buddha Statue, travellers should also explore other important attractions in Bodh Gaya. 

        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>Mahabodhi Temple:</b> The most famous site nearby where Buddha is believed to have attained enlightenment under the Bodhi Tree.
</li>
          <li><b>Muchalinda Lake:</b> Another peaceful spot to visit known for its connection to an important Buddhist legend.
</li>
          <li><b>International Monasteries:</b> Visitors can also explore monasteries built by Buddhist communities from countries like Thailand, Japan, Bhutan and Tibet. Each one has its own unique architecture and reflects different cultural traditions, adding to the spiritual charm of Bodh Gaya.
</li>
        </ul>

        {/* FINAL */}
        <SectionImage src="/Image/great-buddha-09.jpg" />

        <p className="text-gray-700 mb-6">
          The Great Buddha Statue in Bodh Gaya is much more than an impressive monument.
           It stands as a symbol of peace, meditation and the timeless teachings of Buddha. 
           With its remarkable height, beautiful surroundings and deep spiritual significance, 
           the statue has become one of the most memorable landmarks in Bihar.
        </p>

        <p className="text-gray-700 mb-6">
         Whether you are a pilgrim seeking spiritual inspiration, 
         a traveller interested in history and culture or simply someone looking for a peaceful place to visit, 
         the Great Buddha Statue offers an experience that is both inspiring and unforgettable. The Great Buddha Statue, 
         Bodh Gaya – An Icon of Calm in the Heart of Bihar.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">FAQs</h2>

<div className="space-y-4 text-gray-700">
  <p><b>1. Why is the Great Buddha Statue famous?</b><br />It is one of the tallest Buddha statues in India and a major spiritual attraction.</p>

  <p><b>2. What is the height of the Great Buddha Statue?</b><br />Around 80 feet (25 metres) tall.</p>

  <p><b>3. Who built the Great Buddha Statue?</b><br />It was built by the Daijokyo Buddhist Association.</p>

  <p><b>4. When was the Great Buddha Statue built?</b><br />It was completed in 1989.</p>

  <p><b>5. What is the Great Buddha Statue made of?</b><br />It is made of sandstone and red granite.</p>

  <p><b>6. What are the timings of the Great Buddha Statue?</b><br />Usually open from 7:00 AM to 12:00 PM and 2:00 PM to 6:00 PM.</p>

  <p><b>7. Is there any entry fee to visit the Great Buddha Statue?</b><br />No, entry is free.</p>

  <p><b>8. What can you see around the Great Buddha Statue?</b><br />Smaller statues of Buddha’s disciples and a peaceful garden.</p>

  <p><b>9. What is the best time to visit the Great Buddha Statue?</b><br />October to March is the best time.</p>

  <p><b>10. How to reach the Great Buddha Statue?</b><br />The nearest airport is Gaya and the nearest railway station is Gaya Junction.</p>
</div>

        {/* AUTHOR */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">

            <img
              src="/Image/kritisingh.jpg"
              alt="Kriti Singh"
              className="w-44 h-44 md:w-40 md:h-40 object-cover rounded-md"
            />

            <p className="text-gray-800 leading-relaxed text-lg">
              Kriti Singh began writing out of curiosity but it soon became her way of observing and making sense of the world around her. Her writing reflects real experiences, thoughtful observations and an honest perspective of everyday life.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GreatBuddha;