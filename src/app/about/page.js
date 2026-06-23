import React from "react";
import WhyUs from "../components/sections/WhyUs";
import PromoSec from "../components/sections/PromoSec";
import HeroSecond from "../components/sections/Hero-2";
import VideoSec from "../components/ui/VideoSec";
import AboutSec from "../components/ui/AboutSec";
import FeaturesSec from "../components/sections/FeaturesSec";
import CTATeamJoin from "../components/sections/CTATeamJoin";
import PartnersSec from "../components/sections/PartnersSec";

export const metadata = {
  title: "About Us | French Polynesia",
  // description: "...",
};

const aboutUs = () => {
  return (
    <>
      <HeroSecond heading={"About Us"} />
      <WhyUs
        subheading="Certified Tahiti Specialist"
        imageLayout="two-column"
        singleImage="/assets/certificate/certificate.png"
      />
      <CTATeamJoin />
      <PartnersSec />
      <FeaturesSec />
      <section className="pb-10 md:pb-16">
        <VideoSec />
        <AboutSec />
      </section>
      {/* <PromoSec /> */}
    </>
  );
};

export default aboutUs;
