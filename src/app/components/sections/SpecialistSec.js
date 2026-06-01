"use client";
import React, { useState } from "react";
import SpecialistCard from "../ui/SpecialistCard";
import SpecialistModal from "../ui/SpecialistModal";
import { motion } from "framer-motion";

const members = [
  {
    name: "Monica ",
    specialization: "Travel Advisor",
    image: "/assets/specialist/monica.jpg",
    quote: `I'm a calm and understanding person who enjoys living in harmony. My favorite Portuguese dish is Cod with Cream (Bacalhau
com Natas). I haven't explored many places yet,
but Caxias beach has already won me over
with its beauty, organization, and amazing
view.`,
  },
  {
    name: "Ashley",
    specialization: "Travel Advisor",
    image: "/assets/specialist/ashley.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
  {
    name: "Kat",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kat.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
  {
    name: "Kristen Fischer",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kristan.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
  {
    name: "Courtney",
    specialization: "Travel Advisor",
    image: "/assets/specialist/courtney.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
  {
    name: "Jordan Poe",
    specialization: "Travel Advisor",
    image: "/assets/specialist/jordan.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
  {
    name: "Kelly",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kelly.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in odio nunc. Donec mollis, erat sed finibus efficitur, ante leo laoreet sem, nec dapibus ante ligula non tortor. Vestibulum ultricies mauris diam, eu fringilla nulla sodales at. Nullam vel posuere erat. Praesent ut lacus scelerisque, finibus urna ac, rutrum magna. Quisque vel convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis at justo eu imperdiet. In metus justo, scelerisque eget metus eget, dictum mattis orci.",
  },
];

const SpecialistSec = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(i * 0.1, 0.4),
              }}
            >
              <SpecialistCard
                key={i}
                specialist={member}
                onClick={setSelected}
              />
            </motion.div>
          ))}
        </div>
        <SpecialistModal
          specialist={selected}
          onClose={() => setSelected(null)}
        />
      </section>
    </>
  );
};

export default SpecialistSec;
