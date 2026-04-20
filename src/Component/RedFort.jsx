import React from "react";

const SectionImage = ({ src, source }) => (
  <div className="my-6">
    <img src={src} className="w-full h-[420px] object-cover rounded-lg" />
    <p className="text-sm text-blue-500 mt-2">Image Source: {source}</p>
  </div>
);

const RedFort = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow rounded-lg mt-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Red Fort, Delhi: History, Timings, Best Time to Visit & The Story Most People Miss
        </h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Published On: 19 April, 2026</span>
        </p>

        <p className="text-gray-600 mb-6">
          By <span className="font-semibold">Kriti Singh</span>
        </p>

        <SectionImage src="/Image/red-fort-delhi-01.png" source="Canva" />

        <p className="mb-4 text-gray-700">
          Most people walk into the Red Fort, take a few photos and leave. 
          But this place is not just stone and walls, it’s a witness.
           It has seen empires rise at their peak and fall into silence.
            It has survived invasions, betrayal and the slow fading of power. 
            Every arch, every corridor carries echoes of decisions that once shaped an empire.

        </p>

        <p className="mb-4 text-gray-700">
          And then, history shifted. What once stood as a symbol of Mughal authority became the voice of a free nation. 
          Even today, on Independence Day, the Prime Minister stands here not as a ruler, 
          but as a representative of the people.
        </p>

        <p className="mb-6 text-gray-700">
          So when you visit the Red Fort and step inside, pause for a moment. 
          Because you’re not just visiting a monument - you’re standing in a place where history still lives.
        </p>

        {/* Things to Do */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Things to Do at the Red Fort</h2>

        <SectionImage src="/Image/red-fort-delhi-02.png" source="Canva" />

        <h4 className="font-semibold text-black mb-1">Enter through the Lahori Gate & walk in Chatta Chowk</h4>
        <p className="mb-4">The Lahori Gate, once served as the main ceremonial entrance for the Mughal emperors,
             leads you into one of India’s oldest covered markets. Back in the Mughal era, it sold luxurious items like silk, 
             jewellery and perfumes for royalty. Even today, 
            the arched corridor and vibrant stalls give you a glimpse of that royal shopping experience.</p>

        <h4 className="font-semibold text-black mb-1">Visit Diwan-i-Aam & Diwan-i-Khas</h4>
        <p className="mb-4">These halls reveal how power and politics worked during the Mughal period.
Diwan-i-Aam (Hall of Public Audience) is where the emperor addressed common people and heard their grievances. Imagine large gatherings here, with the emperor seated on a throne of honour.
Diwan-i-Khas (Hall of Private Audience) is where the famous Peacock Throne once stood. The walls were once inlaid with precious stones, and the Persian inscription here says, “If there is a paradise on earth, it is this, it is this, it is this.”</p>

        <h4 className="font-semibold text-black mb-1">Spend some quiet time in the gardens</h4>
<p className="mb-4">
The gardens inside the fort reflect Mughal garden design principles with pavilions connected by water channels such as the Nahr-i-Bihisht (Stream of Paradise). Like other Mughal palace complexes, these spaces were designed for royal leisure, comfort, and relaxation.
</p>

<h4 className="font-semibold text-black mb-1">Explore the Museums</h4>
<p className="mb-4">
The Red Fort houses multiple museums that go beyond just Mughal history. Learn about India’s freedom struggle and the trials of revolutionaries. See exhibits related to Subhas Chandra Bose and the Indian National Army. Discover artifacts, paintings and weapons that tell stories from different eras. These museums add a deeper, emotional layer to your visit.
</p>

<h4 className="font-semibold text-black mb-1">Watch the Light & Sound Show</h4>
<p className="mb-4">
As evening falls, the fort transforms. The Light & Sound Show narrates Delhi’s history from Mughal glory to colonial rule and independence, using dramatic lighting, music and voiceovers. Hearing the story in the very place where history happened makes it much more immersive.
</p>

<h4 className="font-semibold text-black mb-1">Take photos</h4>
<p className="mb-4">
The red walls, arches and big open spaces make it a perfect place for simple and beautiful pictures.
</p>

        {/* History */}
        <h2 className="text-2xl font-bold mt-10 mb-4">History of Red Fort: Where It All Began</h2>

        <SectionImage src="/Image/red-fort-delhi-03.png" source="Pexels" />

        <p className="mb-6">
          The Red Fort was commissioned by Shah Jahan in 1639 after he decided in 1638 to shift his capital from Agra to the newly established city of Shahjahanabad (present-day Old Delhi). Construction of the fort began in 1639 and was completed in 1648. Originally known as Qila-i-Mubarak (the Blessed Fort), it served as the primary residence of the Mughal emperors for nearly 200 years.
Interestingly, the monument we see today does not fully reflect its original appearance. Although constructed using red sandstone, many parts of the fort were once finished with lime plaster and decorative coatings, giving it a smoother and more polished look. Over time, these surface layers eroded, exposing the red sandstone that now defines its iconic appearance.

        </p>

        <p className="mb-6">
          At its height, the Red Fort functioned as far more than a royal residence. It was the administrative and ceremonial center of the Mughal Empire, housing imperial courts such as the Diwan-i-Aam and Diwan-i-Khas, along with private palaces, gardens and a sophisticated water system known as the Nahr-i-Bihisht (Stream of Paradise). 
          The fort symbolized political authority, architectural sophistication, and the cultural richness of the Mughal era.
        </p>

        {/* City */}
        <h2 className="text-2xl font-bold mt-10 mb-4">A City Inside Walls (Not Just a Fort)</h2>

        <SectionImage src="/Image/red-fort-delhi-04.png" source="Canva" />

        <p className="mb-6">
          The Red Fort was never just a military structure - it was the political and urban core of Shahjahanabad, the Mughal capital built by Shah Jahan.
The fort was designed as a palace-city (qasr complex), a self-contained world where governance, residence, ceremony and culture all existed within one fortified space.
 </p>
        <p className="mb-6">Its internal layout followed a strict spatial hierarchy:</p>
    <p className="mb-6">Public zone → Diwan-i-Aam (justice and governance)</p>
   <p className="mb-6">Elite zone → Diwan-i-Khas (decision-making and diplomacy)</p> 
    <p className="mb-6">Private zone → royal apartments like Rang Mahal</p>
<p className="mb-6">A continuous water channel - Nahr-i-Bihisht (Stream of Paradise) flowed through the palaces, linking spaces both functionally and symbolically, representing the idea of paradise in Mughal design. The fort was directly connected to the city’s main axis - Chandni Chowk, ensuring that the emperor remained at the center of both political power and economic life.
Unlike purely defensive forts, its architecture emphasized openness, symmetry and ceremony, showing that it was built as much for displaying imperial authority as for protection.</p>

       

        {/* Engineering */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Ahead of Its Time: Smart Mughal Engineering</h2>

        <SectionImage src="/Image/red-fort-delhi-05.png" source="Canva" />

        <p className="mb-6">
          The Red Fort was not just about beauty—it was a masterpiece of advanced engineering for its time, built under Shah Jahan. Nahr-i-Bihisht (Stream of Paradise) flowed through the palaces, acting like a natural air-conditioning system, cooling rooms during Delhi’s intense summers. Buildings like the Rang Mahal used water basins and flowing streams beneath floors, creating a cooling effect similar to modern climate control.

        </p>
        <p className="mb-6">
          The fort had a well-planned drainage and water management system, ensuring cleanliness and preventing water stagnation, rare for that time. Intricate jali (lattice) screens allowed air circulation while reducing heat and direct sunlight, maintaining comfortable indoor temperatures. Thick red sandstone walls worked as thermal insulation, keeping interiors cooler during the day and warmer at night.
        </p>

        {/* Fall */}
        <h2 className="text-2xl font-bold mt-10 mb-4">The Fall of Red Fort</h2>

        <SectionImage src="/Image/red-fort-delhi-06.png" source="Wikipedia" />

        <p className="mb-6">
          In 1739, Nadir Shah invaded Delhi and the Red Fort was extensively looted. Priceless treasures were taken away, including the legendary Peacock Throne, marking a major blow to the Mughal Empire’s wealth and prestige. Although this event did not immediately destroy the fort, it gradually weakened its political and symbolic power. Later, during the Indian Rebellion of 1857, the British seized control of the fort and demolished many of its original structures. As a result, what we see today is only a fragment of the grand complex that once stood at the height of Mughal glory.
        </p>

        {/* Independence */}
        <h2 className="text-2xl font-bold mt-10 mb-4">From Empire to Independence</h2>

        <SectionImage src="/Image/red-fort-delhi-07.png" source="Canva" />

        <p className="mb-6">
         Then came 1947 and everything changed again. At the Red Fort, Jawaharlal Nehru hoisted the Indian flag for the first time, marking the end of colonial rule and the beginning of a new nation. Since then, every year on Independence Day, the Prime Minister stands at the same fort and addresses the country, continuing a tradition that connects the past to the present. The meaning of this place shifted completely. 
         What once symbolized royal authority and empire now represents freedom, democracy and the voice of the people.
        </p>

        {/* Timings */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
  Timings, Entry Fee & Best Time to Visit
</h2>

<SectionImage src="/Image/red-fort-delhi-08.png" source="Canva" />

<p className="mb-4">
  If you’re planning to visit the Red Fort, here’s everything you need:
</p>

<h4 className="font-semibold text-black mb-1">Timings</h4>
<p className="mb-4">
  Open: 9:30 AM - 9:00 PM
</p>

<h4 className="font-semibold text-black mb-1">Entry Fee</h4>
<p className="mb-4">
  Indians, SAARC Countries (Bangladesh, Nepal, Bhutan, Sri Lanka, Pakistan, Maldives and Afghanistan) and BIMSTEC Countries (Bangladesh, Nepal, Bhutan, Sri Lanka, Thailand and Myanmar): ₹50 per head (cash) or ₹35 (online).
</p>

<p className="mb-4">
  Children below 15 years: Free
</p>

<p className="mb-4">
  Foreign tourists: ₹550 (online) and ₹600 (cash)
</p>

<h4 className="font-semibold text-black mb-1">Best Time to Visit</h4>
<p className="mb-4">
  October to March - Best weather (pleasant & ideal for walking)
</p>

<p className="mb-4">
  Early morning - Less crowd, better photos
</p>

<p className="mb-4">
  Late afternoon - Good lighting and stay for the evening show
</p>

        {/* Facts */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Interesting Facts You Probably Didn’t Know</h2>

        <SectionImage src="/Image/red-fort-delhi-09.png" source="Canva" />

        <ul className="list-disc pl-6 mb-6">
          <li>The fort once held the Peacock throne</li>
          <li>It was originally designed as a royal city, not just a fort.</li>
          <li>Around 70-80% of its original structures were destroyed.</li>
          <li>There are believed to be underground tunnels beneath it.</li>
          <li>It became a UNESCO World Heritage Site in 2007.</li>
        </ul>

        {/* Tips */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Travel Tips</h2>

        <SectionImage src="/Image/red-fort-delhi-10.png" source="Canva" />

        <ul className="list-disc pl-6 mb-6">
          <li>Go early if you want peaceful exploration.</li>
          <li>Wear comfortable shoes -it’s bigger than it looks.</li>
          <li>Don’t rush, this place is better when you walk slowly.</li>
          <li>Try the light & sound show if you’re staying till evening.</li>
          <li>Combine your visit with Chandni Chowk nearby.</li>
        </ul>

        {/* Nearby */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
  Places to Visit near Red Fort
</h2>

<SectionImage src="/Image/red-fort-delhi-11.png" source="Canva" />

<p className="mb-4">
  Step outside the Red Fort and Delhi doesn’t just continue - it shifts.
</p>

<h4 className="font-semibold text-black mb-1">Chandni Chowk</h4>
<p className="mb-4">
  Chandni Chowk is full of food, crowds and colour. It’s busy, loud and feels completely alive.
</p>

<h4 className="font-semibold text-black mb-1">Jama Masjid</h4>
<p className="mb-4">
  Jama Masjid slows things down with its quiet, grand presence.
</p>

<h4 className="font-semibold text-black mb-1">Gurudwara Sis Ganj Sahib</h4>
<p className="mb-4">
  Gurudwara Sis Ganj Sahib feels warm, grounding, almost like a pause button.
</p>

<h4 className="font-semibold text-black mb-1">Raj Ghat</h4>
<p className="mb-4">
  Raj Ghat is quiet and simple. A space where you can just pause and reflect.
</p>

<p className="mb-4">
  The Red Fort in Delhi is not just a place you visit. It’s a place you understand slowly. The more you know about it, the more it changes the way you see it, and maybe that’s why it stays with you even after you leave.
</p>

<p className="mb-6">
  Because some places don’t just show history, they make you feel it.
</p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
  Frequently Asked Questions (FAQs) about Red Fort
</h2>

<div className="space-y-4 text-gray-700">

  <div>
    <p className="font-semibold text-black">
      1. What is the Red Fort famous for?
    </p>
    <p>
      The Red Fort is famous for its stunning Mughal architecture and historical significance. It served as the main residence of Mughal emperors and is now a symbol of India’s independence.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      2. Who built the Red Fort?
    </p>
    <p>
      The Red Fort was built by the Mughal emperor Shah Jahan in 1648 when he shifted his capital from Agra to Delhi.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      3. What are the Red Fort timings?
    </p>
    <p>
      The Red Fort is usually open from 9:30 AM to 4:30 PM, and it remains closed on Mondays. Timings may vary slightly, so it’s good to check before visiting.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      4. What is the entry fee for Red Fort?
    </p>
    <p>
      The entry fee for Red Fort is approximately ₹35 for Indian citizens and ₹550 for foreign tourists. Prices may change, so check official sources before visiting.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      5. What is the best time to visit Red Fort?
    </p>
    <p>
      The best time to visit Red Fort is during the winter months (October to March) when the weather is pleasant. Early morning or late afternoon is ideal to avoid crowds.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      6. How much time is required to explore Red Fort?
    </p>
    <p>
      It usually takes around 2 to 3 hours to explore the Red Fort comfortably, including its museums and main attractions.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      7. Is Red Fort a UNESCO World Heritage Site?
    </p>
    <p>
      Yes, the Red Fort is a UNESCO World Heritage Site recognized for its historical and architectural importance.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      8. What is the Light and Sound Show at Red Fort?
    </p>
    <p>
      The Light and Sound Show at Red Fort narrates the history of Delhi and the Mughal era through lights, music, and storytelling. It is held in the evening.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      9. How to reach Red Fort in Delhi?
    </p>
    <p>
      The nearest metro station is Lal Qila Metro Station (Violet Line). You can also reach via Chandni Chowk metro station and take a short walk or rickshaw.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      10. Why is Red Fort important in India?
    </p>
    <p>
      The Red Fort is important because India’s Prime Minister hoists the national flag here every year on Independence Day, making it a symbol of national pride.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      11. Which gate is the main entrance of Red Fort?
    </p>
    <p>
      The main entrance of Red Fort is the Lahori Gate, which faces Chandni Chowk and is the primary entry point for visitors.
    </p>
  </div>

  <div>
    <p className="font-semibold text-black">
      12. Can we visit Red Fort at night?
    </p>
    <p>
      Yes, you can visit Red Fort in the evening for the Light and Sound Show, but regular monument entry is allowed only during daytime hours.
    </p>
  </div>

</div>

        {/* Author */}
        <div className="mt-6 pt-8">
          <h3 className="text-2xl font-semibold mb-6">About the Author</h3>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/Image/kritisingh.jpg"
              alt="Kriti Singh"
              className="w-44 h-44 object-cover rounded-md"
            />

            <p className="text-gray-800 leading-relaxed text-lg">
              Kriti Singh began writing out of curiosity but it soon became her way of observing and making sense of the world around her. Originally from Bihar and now living in Delhi for her studies, her perspective is shaped by both, where rooted culture meets the fast pace of city life. She finds stories in everyday spaces, from crowded streets to familiar food corners, not to romanticize them but to understand and capture them as they are. Her writing reflects this in-between space, personal yet grounded, thoughtful yet unfiltered.

            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RedFort;