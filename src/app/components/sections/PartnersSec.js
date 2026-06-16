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
    <section className="py-10 md:py-16 overflow-hidden">
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
          className="w-full                  
            flex overflow-x-auto snap-x snap-mandatory pl-5 md:pl-0
            md:flex-wrap
            md:justify-center
            md:overflow-x-hidden         
            gap-6 md:gap-10
            scrollbar-hide "
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-w-[65%]  
flex-shrink-0
          snap-center
          flex
          items-center
          justify-center
          md:min-w-fit"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-[180px] h-[100px]  md:h-full md:w-36 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSec;
