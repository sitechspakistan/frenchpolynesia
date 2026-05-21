import React from "react";
import HeroSecond from "../components/sections/Hero-2";
import DestinationSecCard from "../components/ui/DestinationSecCard";

const destinations = [
  {
    tagline: "The Cultural Heart",
    name: "Tahiti",
    description:
      "Tahiti is the cultural and economic center with vibrant markets and black sand beaches.",
    activities: ["Papeete Market", "Sand Beaches", "Waterfalls"],
    bestTime:
      "May to October — ideal weather with low humidity and refreshing breezes.",
    perfectFor:
      "Culture seekers, foodies, and travelers wanting authentic Polynesian life.",
    image: "/assets/images/destinations/fp-tahiti.jpg",
    imageAlt: "Bora Bora lagoon and overwater bungalows",
    imagePosition: "left",
  },
  {
    tagline: "Adventure Meets Beauty",
    name: "Moorea",
    description:
      "Moorea offers lush mountains, adventure activities, and scenic beauty.",
    activities: ["Mountain Hiking", "Diving", "Whale Watching"],
    bestTime:
      "July to October — whale watching season and perfect hiking weather.",
    perfectFor:
      "Adventure travelers, divers, and those seeking dramatic natural landscapes.",
    image: "/assets/images/destinations/fp-moorea.jpg",
    imageAlt: "Tahiti coastline and lush volcanic mountains",
    imagePosition: "right",
  },
  {
    tagline: "The Icon of Luxury",
    name: "Bora Bora",
    description:
      "Bora Bora is the ultimate luxury destination known for its crystal-clear lagoon and overwater villas",
    activities: ["Plan your trip", "Jet Ski", "Sunset Cruises"],
    bestTime:
      "May to October - dry season with clear skies and calm lagoon waters.",
    perfectFor: "Honeymooners, luxury travelers, and water sports enthusiasts.",
    image: "/assets/images/destinations/fp-bora.jpg",
    imageAlt: "Bora Bora lagoon and overwater bungalows",
    imagePosition: "left",
  },

  {
    tagline: "Hidden Paradise Escape",
    name: "Taha'a Island",
    description:
      "Taha'a Island is known for its tranquil lagoons, vanilla plantations, and authentic Polynesian charm.",
    activities: ["Lagoon Tours", "Vanilla Farm Visits", "Snorkeling"],
    bestTime:
      "May to October - ideal weather for lagoon activities and island exploration.",
    perfectFor:
      "Couples, honeymooners, and travelers seeking a peaceful tropical retreat.",
    image: "/assets/images/destinations/fp-taha.jpg",
    imageAlt: "Crystal-clear lagoon and overwater bungalows in Taha'a Island",
    imagePosition: "right",
  },
  {
    tagline: "The Sacred Island Experience",
    name: "Raiatea",
    description:
      "Raiatea blends rich Polynesian history with lush landscapes, waterfalls, and world-class sailing adventures.",
    activities: ["River Kayaking", "Sailing", "Cultural Tours"],
    bestTime:
      "April to November - comfortable temperatures and excellent sailing conditions.",
    perfectFor:
      "Culture enthusiasts, sailors, and nature lovers looking for authentic island experiences.",
    image: "/assets/images/destinations/fp-raiatea.jpg",
    imageAlt: "Raiatea tropical mountains and turquoise lagoon",
    imagePosition: "left",
  },
];
export const metadata = {
  title: "Destinations | French Polynesia",
  // description: "...",
};
const destinationPage = () => {
  return (
    <>
      <HeroSecond heading={"Destinations"} />
      <section className="py-10 md:py-16 px-4 md:px-6 ">
        {destinations.map((destination, index) => (
          <DestinationSecCard key={index} {...destination} />
        ))}
      </section>
    </>
  );
};

export default destinationPage;
