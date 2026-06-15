"use client";
import Button from "../ui/Button";
import FeatureCard from "../ui/FeatureCard";
import { motion } from "framer-motion";

export default function WhyUs({
  paragraph = `At The French Polynesia, we don't just book vacations - we curate seamless, deeply personalized journeys throughout the islands of French Polynesia. From the overwater bungalows of Bora Bora to the lush mountains of Moorea, the black sand beaches of Tahiti, and the untouched beauty of Taha'a and Rangiroa, our team specializes exclusively in crafting extraordinary experiences across these islands.`,
  button = false,
  subheading = ` Where luxury travel meets true destination expertise.`,
  imageLayout = "two-column", // "two-column" | "single"
  singleImage = "/assets/images/why/why-1.png",
}) {
  return (
    <section className="relative py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* LEFT: Text — full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 md:pr-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Welcome to <br /> French Polynesia
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-4 text-gray-500"
          >
            {subheading}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-base text-gray-500 mb-4 md:mb-6"
          >
            {paragraph}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            {button && <Button href="/about">Learn More</Button>}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex w-1/2 shrink-0 h-[520px] gap-3"
        >
          {imageLayout === "single" ? (
            // ─── Single Image ───
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src={singleImage}
                alt="resort view"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            // ─── Two Column Layout ───
            <>
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-3 pt-10">
                <div className="flex-1 rounded-2xl overflow-hidden h-[270px]">
                  <img
                    src="/assets/images/why/why-1.png"
                    alt="resort view 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[230px] rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/why/why-2.png"
                    alt="resort view 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-3 pb-10">
                <div className="h-[280px] rounded-2xl overflow-hidden flex-1">
                  <img
                    src="/assets/images/why/why-3.png"
                    alt="resort view 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden flex-1">
                  <img
                    src="/assets/images/why/why-4.png"
                    alt="resort view 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
