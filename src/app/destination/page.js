import React from "react";
import HeroSecond from "../components/sections/Hero-2";
import DestinationSecCard from "../components/ui/DestinationSecCard";

const destinations = [
  {
    tagline: "The Icon of Luxury",
    name: "BORA BORA",
    description:
      "Bora Bora is the ultimate luxury destination known for its crystal-clear lagoon and overwater villas",
    activities: ["Plan your trip", "Jet Ski", "Sunset Cruises"],
    bestTime:
      "May to October - dry season with clear skies and calm lagoon waters.",
    perfectFor: "Honeymooners, luxury travelers, and water sports enthusiasts.",
    image: "/assets/images/blog/blog-1.png",
    imageAlt: "Bora Bora lagoon and overwater bungalows",
    imagePosition: "left",
  },
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
    image: "/assets/images/blog/blog-2.png",
    imageAlt: "Bora Bora lagoon and overwater bungalows",
    imagePosition: "right",
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
    image: "/assets/images/blog/blog-3.png",
    imageAlt: "Tahiti coastline and lush volcanic mountains",
    imagePosition: "left",
  },
];
const destinationPage = () => {
  return (
    <>
      <HeroSecond heading={"Destination"} />
      <section className="py-16 px-6">
        {destinations.map((destination, index) => (
          <DestinationSecCard key={index} {...destination} />
        ))}
      </section>
    </>
  );
};

export default destinationPage;
