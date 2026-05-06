import React from "react";
import BlogSec from "../components/sections/Blog";
import HeroSecond from "../components/sections/Hero-2";

const BlogPage = () => {
  return (
    <>
      <HeroSecond heading={"Blog"} />
      <BlogSec color={false} />
    </>
  );
};

export default BlogPage;
