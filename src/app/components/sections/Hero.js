import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex items-end  bg-cover bg-center h-[400px] md:h-[750px]"
      style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
    >
      {/* <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white/90 to-transparent" /> */}

      {/* Glass effect bottom bar */}
      <div className="absolute w-full backdrop-blur-xs z-8 bottom-0 left-0 bg-white/10 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          {/* Left: Heading */}
          <h1
            className="flex-1 md:flex-2 text-white text-center md:text-left
           font-bold md:font-extrabold text-xl  md:text-5xl uppercase leading-tight "
          >
            Discover the Magic of <br />
            French Polynesia
          </h1>

          {/* Right: CTA Button */}
          <Button href={"/#"} className="mt-2 md:m-0">
            Plan Your Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
