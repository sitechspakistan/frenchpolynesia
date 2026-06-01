import React from "react";
import VideoSec from "../ui/VideoSec";
import AboutSec from "../ui/AboutSec";

const PromoSec = () => {
  return (
    <section className="py-10 md:py-16">
      <VideoSec
        heading={
          <>
            <h2 className="text-2xl md:text-4xl pb-6 md:pb-1 capitalize">
              Why Book with{" "}
              <span className="text-pink-500"> The French Polynesia </span>
              Concierge Team?
            </h2>
          </>
        }
        subheading="Because a destination this extraordinary deserves true expertise."
        paragraph="At The French Polynesia, we specialize exclusively in crafting elevated, seamless journeys throughout French Polynesia. From luxury resorts and overwater bungalows to inter-island logistics, private experiences, and insider recommendations, we handle every detail with precision and care."
      />
      <AboutSec />
    </section>
  );
};

export default PromoSec;
