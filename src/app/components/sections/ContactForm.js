"use client";
import { useState } from "react";
import ContactInput from "../ui/ContactInput";
import Button from "../ui/Button";

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
      <div className="w-[40%]">
        <h2 className="text-5xl font-extrabold mb-10 uppercase">
          Get in Touch
        </h2>
        <form className=" flex flex-col gap-4 ">
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
          <ContactInput
            type="text"
            name="phone"
            placeholder="Description"
            // value={formData.phone}
            // onChange={handleChange}
          />
          <Button className="w-[40%] mt-4">Submit now</Button>
        </form>
      </div>
    </>
  );
}
