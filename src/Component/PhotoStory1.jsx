import React from "react";
import { Link } from "react-router-dom";

const trending_stories = [
  { slug: "safdarjung-tomb-delhi-travel-guide", title: "Safdarjung’s Tomb: Delhi’s Most Underrated Mughal Monument History, Timings and Travel Guide", image: "/Image/safdarjung-tomb-delhi-travel-guide-01.jpg" },
  { slug: "red-fort-delhi-travel-guide", title: "Red Fort, Delhi: History, Timings, Best Time to Visit & The Story Most People Miss", image: "/Image/red-fort-delhi-01.png" },
  { slug: "chopta-tungnath-chandrashila-trek-uttarakhand-travel-guide", title: "Chopta Tungnath Chandrashila Trek Uttarakhand – Best Time, Itinerary & Travel Guide", image: "/Image/chopta-tungnath-chandrashila-trek-uttarakhand-01.jpg" },
  { slug: "hazrat-nizamuddin-dargah-delhi-travel-guide", title: "Hazrat Nizamuddin Dargah, Delhi: History, Qawwali Timings, Entry & Complete Travel Guide", image: "/Image/hazrat-nizamuddin-dargah-delhi-travel-guide-01.png" },
  { slug: "lotus-temple-delhi-travel-guide", title: "Lotus Temple Delhi: A Silent Escape in the Heart of Chaos–Timings, Entry & Travel Guide", image: "/Image/lotus-temple-delhi-travel-guide-01.png" },
  { slug: "connaught-place-new-delhi-travel-guide", title: "Things to Do in Connaught Place Delhi: Best Places & Food Guide", image: "/Image/connaught-place-new-delhi-travel-guide-01.png" },
  { slug: "qutub-minar-delhi-travel-guide", title: "Qutub Minar Delhi: History, Height, Timings, Entry Fee, How to Reach & Nearby Places", image: "/Image/qutub-minar-delhi-01.png" },
  { slug: "delhi-mysterious-place-travel-guide", title: "Delhi’s Most Mysterious Places People Still Talk About", image: "/Image/mysterious-places-in-delhi-01.png" },
  { slug: "malcha-mahal-delhi-travel-guide", title: "Malcha Mahal Delhi: The Haunted Palace Hidden Inside a Forest (Complete Travel Guide)", image: "/Image/malcha-mahal-delhi-01.png" },
  { slug: "great-buddha-statue-bihar-travel-guide", title: "Great Buddha Statue Bodh Gaya, Bihar: Exploring the 80-Foot Symbol of Peace and Spiritual Calm", image: "/Image/great-buddha-statue-bodh-gaya-bihar-01.png" },
  { slug: "india-gate-delhi-travel-guide", title: "India Gate Delhi Travel Guide: History, Timings, Best Time to Visit & How to Reach", image: "/Image/india-gate-delhi-01.png" },
  { slug: "jama-masjid-delhi-travel-guide", title: "Jama Masjid Delhi Travel Guide: Timings, Entry Fee, History, How to Reach & Nearby Places", image: "/Image/Jama-Masjid-Delhi.jpg" },
  { slug: "mahabodhi-temple-bihar-travel-guide", title: "Mahabodhi Temple, Bodh Gaya Bihar: The Sacred Place Where Lord Buddha Found Enlightenment", image: "/Image/mahabhodi-temple-01.jpg" },

];

export default function TrendingSidebar() {
  return (
    <div className="w-full px-2 ml-2 sm:px-4 md:px-10 mt-25 mb-5">

      <div className="
        w-full max-w-[1320px] mx-auto
        p-4 sm:p-6 rounded-2xl
        
        bg-black/50 backdrop-blur-md
        sm:bg-black/30
        lg:bg-white lg:backdrop-blur-0 lg:shadow-lg
      ">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-white lg:text-black">
          Trending Photo Stories / Articles
        </h2>

        {/* LIST */}
        <div className="h-[570px] overflow-y-auto pr-2">

          {trending_stories.map((item) => (
            <Link to={`/${item.slug}`} key={item.slug}>

              <div className="
                flex items-center gap-4 mb-4 p-2 rounded-lg
                hover:bg-white/10 lg:hover:bg-gray-100
                transition
              ">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[110px] h-[80px] object-cover rounded-md"
                />

                <p className="text-sm sm:text-base font-medium text-white lg:text-black">
                  {item.title}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}