"use client";

import React from "react";
import FeatureCards from "./FeaturesCard";
import { motion } from "framer-motion";

const AboutSec = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-16 px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-5xl font-bold mb-10 text-center capitalize"
      >
        We're more than just a travel agency we're your partner in adventure
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <FeatureCards />
      </motion.div>
    </div>
  );
};

export default AboutSec;
