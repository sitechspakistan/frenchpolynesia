import Image from "next/image";
import React from "react";

const VideoSec = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className=" flex justify-between items-center ">
          <h2 className="w-1/2 text-5xl">
            See how we create trips travels
            <span className="text-pink-500"> that awaken dreams </span>
            bring the world closer
          </h2>
          <p className="text-lg mr-8">
            We don't just plan trips - we craft <br />
            experiences that stay with you
          </p>
        </div>
        <div className="max-w-7xl mx-auto pt-15">
          {/* Video Container */}
          <div className="relative rounded-[20px] overflow-hidden aspect-video w-full cursor-pointer h-[500px] ">
            <Image
              src="/assets/images/tahiti/landscape.jpg"
              alt="Travel destination"
              fill
              className="object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.0512 64.0994C77.0512 58.8994 77.0512 50.3994 68.0512 45.1994L60.8012 40.9994L53.5512 36.7994C44.5512 31.5994 37.2012 35.8494 37.2012 46.2494V54.5994V62.9494C37.2012 71.2494 41.9012 75.6494 48.4012 74.3994"
                  stroke="white"
                  strokeWidth="7"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 23.5C7.25 31.85 3.5 42.25 3.5 53.5C3.5 81.1 25.9 103.5 53.5 103.5C81.1 103.5 103.5 81.1 103.5 53.5C103.5 25.9 81.1 3.5 53.5 3.5C46.35 3.5 39.5 5 33.35 7.75"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSec;
