"use client";
import React from "react";
import AboutFeatureCard from "../ui/AboutFeatureCard";
import { motion } from "framer-motion";

const FeaturesSec = () => {
  return (
    <div className="max-w-7xl mx-auto  px-4 md:px-6 pt-10 md:pt-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl md:text-5xl font-bold mb-10 text-center capitalize"
      >
        Why travelers choose us
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <AboutFeatureCard />
      </motion.div>
    </div>
  );
};

export default FeaturesSec;
