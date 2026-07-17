"use client";
import { useState } from "react";
import ContactInput from "../ui/ContactInput";
import Button from "../ui/Button";
import ContactTextarea from "../ui/ContactTextArea";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setStatus("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full md:w-[50%]">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold md:font-extrabold mb-6 md:mb-10 capitalize text-center md:text-left"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" flex flex-col gap-4 "
          onSubmit={handleSubmit}
        >
          <ContactInput
            required
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />

          <ContactInput
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <ContactInput
            required
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <ContactTextarea
            required
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="self-center md:self-start"
          >
            <Button
              type="submit"
              className="w-full md:w-[100%] mt-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit now"}
            </Button>
          </motion.div>
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
        </motion.form>
      </div>
    </>
  );
}
