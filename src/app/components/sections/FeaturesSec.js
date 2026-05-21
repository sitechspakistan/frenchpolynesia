import React from "react";
import FeatureCards from "../ui/FeaturesCard";
import AboutFeatureCard from "../ui/AboutFeatureCard";

const FeaturesSec = () => {
  return (
    <div className="max-w-7xl mx-auto  px-4 md:px-6">
      <h2 className="text-2xl md:text-5xl font-bold mb-10 text-center capitalize">
        Why travelers choose us
      </h2>
      <AboutFeatureCard />
    </div>
  );
};

export default FeaturesSec;
