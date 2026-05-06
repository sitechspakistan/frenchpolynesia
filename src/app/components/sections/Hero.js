import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex items-end  bg-cover bg-center h-[750px]"
      style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
    >
      {/* <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white/90 to-transparent" /> */}

      {/* Glass effect bottom bar */}
      <div className="absolute w-full backdrop-blur-xs z-8 bottom-0 left-0 bg-white/10 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto  py-6 flex items-center justify-between px-6">
          {/* Left: Heading */}
          <h1 className="text-white font-extrabold text-5xl uppercase leading-tight">
            Discover the Magic of <br /> French Polynesia
          </h1>

          {/* Right: CTA Button */}
          <Button href={"/#"}>Plan Your Trip</Button>
        </div>
      </div>
    </section>
  );
}
