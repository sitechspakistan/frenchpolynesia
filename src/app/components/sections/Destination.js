import React from "react";
import DestinationCard from "../ui/DestinationCard";

const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/tahiti/dest-01.jpg",
    category: "The Icon Of Luxury",
    date: "15 Mar, 2026",
    title: "BORA BORA",
    // href: "bulletin/detail",
  },
  {
    id: 2,
    imageSrc: "/assets/images/tahiti/dest-02.jpg",
    category: "The Cultural Heart",

    date: "1 Feb, 2026",
    title: "TAHITI",
    // href: "bulletin/detail",
  },
  {
    id: 3,
    imageSrc: "/assets/images/tahiti/dest-03.jpg",
    category: "Adventure Meets Beauty",
    date: "12 Jan, 2026",
    title: "MOOREA",
    // href: "/bulletin/detail",
  },
];

const DestinationSec = () => {
  return (
    <section className="py-10 md:py-16 bg-(--section-bg)">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 text-center uppercase">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <DestinationCard
              key={post.id}
              imageSrc={post.imageSrc}
              category={post.category}
              date={post.date}
              title={post.title}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSec;
