"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";
import DateRange from "../ui/DateRange";
import { useState } from "react";
import ContactInput from "../ui/ContactInput";
import ContactTextarea from "../ui/ContactTextArea";

export default function TravelPlannerSection({
  backgroundImage = "/assets/travel/hero-bg.jpg",
}) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nameOfPassengers: "",
    travelDates: null,
    island: "",
    budget: "",
    additionalNotes: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setStatus("");

      const response = await fetch("/api/get-a-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Form submitted successfully!");

        setFormData({
          nameOfPassengers: "",
          travelDates: null,
          island: "",
          budget: "",
          additionalNotes: "",
        });
      } else {
        setStatus("Failed to submit form");
      }
    } catch (error) {
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="relative flex flex-col md:flex-row rounded-4xl overflow-hidden bg-cover bg-center mx-4 md:mx-6 mb-16 p-6 md:p-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* Left - Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-10 md:p-10 text-center md:text-left">
        <span className="text-sm font-medium tracking-[0.15em] text-white/80 capitalize mb-3">
          Ready to explore
        </span>

        <span className="w-16 h-1 bg-(--primary) mb-4 self-center md:self-start" />
        <h1 className="text-4xl md:text-5xl font-bold text-white capitalize leading-[1.05] mb-4">
          Plan your perfect escape
        </h1>
        <p className="text-base  text-white leading-relaxed w-full md:max-w-[80%]">
          Tell us a few details about your dream trip and we'll create the
          perfect experience for you.
        </p>
      </div>

      {/* Right - Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex-[1.3] bg-white rounded-xl flex flex-col gap-4  p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold ">
              Name of passengers <span className="text-(--primary)">*</span>
            </label>
            <ContactInput
              required
              type="text"
              placeholder="e.g. John Doe, Jane Doe"
              value={formData.nameOfPassengers}
              onChange={(e) =>
                setFormData({ ...formData, nameOfPassengers: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold ">
              Dates of travel <span className="text-(--primary)">*</span>
            </label>
            <DateRange
              value={formData.travelDates}
              onChange={(dates) =>
                setFormData({
                  ...formData,
                  travelDates: dates,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold ">
            Islands interested in <span className="text-(--primary)">*</span>
          </label>
          <select
            required
            value={formData.island}
            onChange={(e) =>
              setFormData({ ...formData, island: e.target.value })
            }
            className="bg-(--section-bg) border border-gray-200 rounded-lg px-3 py-4 text-sm text-gray-500 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
          >
            <option value="" className="pr-3">
              Select or type islands
            </option>
            {["Tahiti", "Moorea", "Bora Bora", "Taha'a", "Raiatea"].map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold ">
            Budget range (USD) <span className="text-(--primary)">*</span>
          </label>
          <div className="relative">
            <ContactInput
              required
              type="text"
              placeholder="e.g. $2,000 - $5,000"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              $
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold ">Additional notes</label>
          <ContactTextarea
            value={formData.additionalNotes}
            onChange={(e) =>
              setFormData({ ...formData, additionalNotes: e.target.value })
            }
            rows={3}
            placeholder="Tell us more about your travel plans..."
          />
        </div>

        <Button type="submit" disabled={loading} className="cursor-pointer ">
          {loading ? "Sending..." : "Start planning my trip"}
        </Button>
        {status && (
          <p
            className={`mt-3 text-sm ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </motion.div>
  );
}
