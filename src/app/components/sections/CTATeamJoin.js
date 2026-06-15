"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const CTATeamJoin = () => {
  return (
    <section className="py-10 md:py-16 bg-(--section-bg)">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 text-center capitalize"
        >
          Join Our Concierge Team
        </motion.h2>
        <motion.div className="">
          <h3 className="text-lg md:text-3xl  mb-4">
            Are you passionate about French Polynesia?
          </h3>
          <p>
            The French Polynesia Concierge is growing, and we're looking for
            travel advisors who dream of helping clients experience the magic of
            Tahiti, Bora Bora, Moorea, Taha'a, Rangiroa, and beyond. If you love
            creating unforgettable luxury getaways, building custom itineraries,
            and sharing your knowledge of one of the most breathtaking
            destinations on Earth, we'd love to connect with you. ✨
            Specializing in French Polynesia ✨ Luxury & honeymoon travel ✨
            Personalized concierge-level service ✨ Work alongside a team
            dedicated to this incredible region Whether you're already booking
            French Polynesia or eager to become a destination expert, this could
            be the perfect opportunity. Ready to turn your passion for paradise
            into something more?
          </p>
          <Button className="mt-5" href="/concierge-team">
            Our Concierge Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTATeamJoin;
