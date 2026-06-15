"use client";
import { useState } from "react";
import ContactInput from "../ui/ContactInput";
import Button from "../ui/Button";
import ContactTextarea from "../ui/ContactTextArea";
import { motion } from "framer-motion";

// const reasonOptions = [
//   { value: "booking", label: "Booking Enquiry" },
//   { value: "experience", label: "Experience Enquiry" },
//   { value: "general", label: "General Question" },
//   { value: "complaint", label: "Complaint" },
//   { value: "other", label: "Other" },
// ];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    reason: "",
    email: "",
    phone: "",
    description: "",
    gdpr: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
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
        >
          <ContactInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            // value={formData.fullName}
            // onChange={handleChange}
          />

          <ContactInput
            type="email"
            name="email"
            placeholder="Email Address"
            // value={formData.email}
            // onChange={handleChange}
          />

          <ContactInput
            type="tel"
            name="phone"
            placeholder="Phone Number"
            // value={formData.phone}
            // onChange={handleChange}
          />
          <ContactTextarea
            name="description"
            placeholder="Description"
            // value={formData.description}
            // onChange={handleChange}
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
            <Button className="w-full md:w-[100%] mt-4">Submit now</Button>
          </motion.div>
        </motion.form>
      </div>
    </>
  );
}
