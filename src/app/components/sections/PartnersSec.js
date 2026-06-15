"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/assets/partners/part-1.png" },
  { name: "Partner 2", logo: "/assets/partners/part-2.png" },
  { name: "Partner 3", logo: "/assets/partners/part-3.png" },
  { name: "Partner 4", logo: "/assets/partners/part-4.png" },
  { name: "Partner 5", logo: "/assets/partners/part-5.webp" },
];

const PartnersSec = () => {
  return (
    <section className="py-10 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 text-center capitalize"
      >
        Our Partners
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-36 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSec;
