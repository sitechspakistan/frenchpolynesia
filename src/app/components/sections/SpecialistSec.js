"use client";
import React, { useState } from "react";
import SpecialistCard from "../ui/SpecialistCard";
import SpecialistModal from "../ui/SpecialistModal";

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
    quote: "Apna quote yahan...",
  },
  {
    name: "Kat",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kat.jpg",
    quote: "Apna quote yahan...",
  },
  {
    name: "Kristen Fischer",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kristan.jpg",
    quote: "Apna quote yahan...",
  },
  {
    name: "Courtney",
    specialization: "Travel Advisor",
    image: "/assets/specialist/courtney.jpg",
    quote: "Apna quote yahan...",
  },
  {
    name: "Jordan Poe",
    specialization: "Travel Advisor",
    image: "/assets/specialist/jordan.jpg",
    quote: "Apna quote yahan...",
  },
  {
    name: "Kelly",
    specialization: "Travel Advisor",
    image: "/assets/specialist/kelly.jpg",
    quote: "Apna quote yahan...",
  },
];

const SpecialistSec = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <SpecialistCard key={i} specialist={member} onClick={setSelected} />
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
