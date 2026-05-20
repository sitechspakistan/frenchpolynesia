import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs";
import DestinationSec from "./components/sections/Destination";
import BlogSec from "./components/sections/Blog";
import PromoSec from "./components/sections/PromoSec";
import CTASec from "./components/sections/CTASec";
import TravelPlannerSection from "./components/sections/TravelPlannerSection";

export const metadata = {
  title: "French Polynesia",
  // description: "...",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <DestinationSec />
      <PromoSec />
      <TravelPlannerSection backgroundImage="/assets/images/destinations/fp-bora.jpg" />

      {/* <BlogSec color={true} heading={"Our Blog"} /> */}
      {/* <CTASec /> */}
    </>
  );
}
