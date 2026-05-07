import React from "react";
import WhyUs from "../components/sections/WhyUs";
import PromoSec from "../components/sections/PromoSec";
import HeroSecond from "../components/sections/Hero-2";

export const metadata = {
  title: "About Us | French Polynesia",
  // description: "...",
};

const aboutUs = () => {
  return (
    <>
      <HeroSecond heading={"About Us"} />
      <WhyUs />
      <PromoSec />
    </>
  );
};

export default aboutUs;
