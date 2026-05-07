import React from "react";
import HeroSecond from "../components/sections/Hero-2";
import ContactFormSec from "../components/sections/ContactFormSec";

export const metadata = {
  title: "Contact Us | French Polynesia",
  // description: "...",
};

const contactPage = () => {
  return (
    <>
      <HeroSecond heading={"Contact Us"} />
      <ContactFormSec />
    </>
  );
};

export default contactPage;
