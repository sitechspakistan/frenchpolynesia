import React from "react";
import HeroSecond from "../components/sections/Hero-2";
import PackageSec from "../components/sections/PackageSec";

export const metadata = {
  title: "Packages | French Polynesia",
  // description: "...",
};

const packagesPage = () => {
  return (
    <>
      <HeroSecond heading={"Packages"} />
      <PackageSec />
    </>
  );
};

export default packagesPage;
