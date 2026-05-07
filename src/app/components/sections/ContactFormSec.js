import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "../ui/ContactMap";
import ContactInfo from "../ui/ContactInfo";

const ContactFormSec = () => {
  return (
    <section className="py-16 ">
      <div className="flex max-w-7xl mx-auto px-6 mb-14 gap-5">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2604110283105!2d-97.748588!3d30.3435482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb0279fa0c4b%3A0x5fdfcae136a261ee!2sGullett%20Elementary%20School!5e0!3m2!1sen!2s!4v1778168823625!5m2!1sen!2s" />
    </section>
  );
};

export default ContactFormSec;
