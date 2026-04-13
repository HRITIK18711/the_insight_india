import React from "react";
import { useParams, Link } from "react-router-dom";

const eventsData = [
  {
    slug: "javed-ali-spellbound-tour-noida",
    title: "Javed Ali Spellbound Tour Noida",
    image: "/Image/javed-ali-spellbound-tour-noida.jpg",
  },
  {
    slug: "sanam-night-of-nostalgia-delhi",
    title: "Sanam Night Of Nostalgia Delhi",
    image: "/Image/sanam-night-of-nostalgia-delhi.jpg",
  },
  {
    slug: "whipmantra-concert-gurugram",
    title: "Whipmantra Concert Gurugram",
    image: "/Image/whipmantra-concert-gurugram.jpg",
  },
];

const Events = () => {
  const { slug } = useParams();

  // 👉 If NO slug → show all events
  if (!slug) {
    return (
      <div className="bg-black min-h-screen py-10  flex flex-wrap justify-center gap-6">

        {eventsData.map((event) => (
          <Link to={`/events/${event.slug}`} key={event.slug}>
            <div className="mt-20 relative w-[250px] h-[420px] rounded-xl overflow-hidden shadow-lg">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-3 text-white">
                <h2 className="text-sm font-semibold">
                  {event.title}
                </h2>
              </div>

            </div>
          </Link>
        ))}

      </div>
    );
  }

  // 👉 If slug exists → show single event
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return <h2 className="text-center mt-10">Event not found</h2>;
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">

      <div className="mt-15 relative w-[350px] h-[600px] rounded-xl overflow-hidden shadow-xl">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-0 p-4 text-white">
          <h2 className="text-lg font-semibold">
            {event.title}
          </h2>
        </div>

      </div>

    </div>
  );
};

export default Events;