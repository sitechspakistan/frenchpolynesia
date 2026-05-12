import React from "react";

const HeroSecond = ({ heading }) => {
  return (
    <section
      className="relative flex items-end  bg-cover bg-center h-[450px]"
      style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
    >
      {/* Glass effect bottom bar */}
      <div className="absolute w-full backdrop-blur-xs z-8 bottom-0 left-0 bg-white/10 border-t border-white/10 ">
        <div className="max-w-7xl mx-auto flex px-4 md:px-6 justify-center items-center h-[80px] md:h-[200px]">
          {/* Left: Heading */}
          <h1 className="text-white font-bold md:font-extrabold text-3xl md:text-5xl uppercase leading-tight ">
            {heading}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSecond;
