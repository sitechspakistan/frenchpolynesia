import React from "react";
import Button from "../ui/Button";

const CTASec = () => {
  return (
    <>
      <section className="py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-[#5FAFE0] text-center px-8 md:px-12 py-10 md:py-15 text-white rounded-[15px] ">
          <h2 className="text-3xl md:text-5xl mb-4 max-w-2xl mx-auto font-bold uppercase">
            Let's Start your <br />
            Adventure
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We are dedicated to making your journey of discovery truly
            unforgettable. Our team of passionate travel
          </p>
          <Button href="/#">Send us a Message</Button>
        </div>
      </section>
    </>
  );
};

export default CTASec;
