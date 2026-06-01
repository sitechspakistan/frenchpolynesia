"use client";
import React from "react";
import DestinationCard from "../ui/DestinationCard";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/destinations/fp-tahiti.jpg",
    category: "The Cultural Heart",

    date: "1 Feb, 2026",
    title: "TAHITI",
    // href: "bulletin/detail",
  },
  {
    id: 2,
    imageSrc: "/assets/images/destinations/fp-moorea.jpg",
    category: "Adventure Meets Beauty",
    date: "12 Jan, 2026",
    title: "MOOREA",
    // href: "/bulletin/detail",
  },
  {
    id: 3,
    imageSrc: "/assets/images/destinations/fp-bora.jpg",
    category: "The Icon Of Luxury",
    date: "15 Mar, 2026",
    title: "BORA BORA",
    // href: "bulletin/detail",
  },
];

const DestinationSec = () => {
  return (
    <section className="py-10 md:py-16 bg-(--section-bg)">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 text-center capitalize"
        >
          Featured Destinations
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <DestinationCard
                imageSrc={post.imageSrc}
                category={post.category}
                date={post.date}
                title={post.title}
                href={post.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSec;
