"use client";
import Button from "../ui/Button";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative flex items-end h-[400px] md:h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/images/fp-hero-image.jpg')" }}
    >
      {/* <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white/90 to-transparent" /> */}

      {/* Glass effect bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full backdrop-blur-xs z-8 bottom-0 left-0 bg-white/10 border-t border-white/10 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-6"
        >
          {/* Left: Heading */}
          <h1
            className="flex-1 md:flex-2 text-white text-center md:text-left
           font-bold md:font-extrabold text-xl  md:text-4xl uppercase leading-tight "
          >
            Discover the Magic of French Polynesia
          </h1>

          {/* Right: CTA Button */}
          <Button href={"/contact"} className="mt-2 md:m-0">
            Plan Your Trip
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
