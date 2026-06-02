import React from "react";
import HeroSecond from "../components/sections/Hero-2";
import SpecialistSec from "../components/sections/SpecialistSec";

export const metadata = {
  title: "Specialists | French Polynesia",
  // description: "...",
};

const specialist = () => {
  return (
    <>
      <HeroSecond heading="French Polynesia Specialist" />
      <SpecialistSec />
    </>
  );
};

export default specialist;
