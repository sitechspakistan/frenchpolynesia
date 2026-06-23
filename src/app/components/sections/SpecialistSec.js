"use client";
import React, { useState } from "react";
import SpecialistCard from "../ui/SpecialistCard";
import SpecialistModal from "../ui/SpecialistModal";
import { motion } from "framer-motion";

const members = [
  {
    name: "Amanda Bisack",
    specialization: "Tahitian Islands Specialist and Concierge",
    image: "/assets/specialist/amanda.jpg",

    quote:
      "Amanda Bisack is a Certified Tahiti Specialist and the founder of The French Polynesia. Having visited French Polynesia twice and booked countless Tahiti vacations for her clients over the years, she combines personal experience with professional expertise to create unforgettable journeys throughout Tahiti, Bora Bora, Moorea, and beyond. French Polynesia is one of Amanda's favorite destinations to sell, and she is passionate about helping travelers experience the beauty, romance, and culture of these extraordinary islands.",
    email: "abisack@travelistatravels.com",
  },
  {
    name: "Stephanie Welsh",
    specialization: "Tahitian Islands Specialist & Concierge",
    image: "/assets/specialist/stephanie.png",
    quote: `Stephanie fell in love with French Polynesia during her honeymoon and has been passionate about the islands ever since. Inspired by their breathtaking beauty, warm culture, and unforgettable experiences, she is dedicated to helping others discover the magic of destinations like Bora Bora, Moorea, and beyond. As a Tahitian Islands Specialist & Concierge, Stephanie creates personalized journeys designed to turn dream vacations into lifelong memories.
`,
    email: "swelsh@travelistatravels.com",
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
