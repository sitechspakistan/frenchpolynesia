"use client";
import { useState, useRef } from "react";
import React from "react";
import ReactPlayer from "react-player";

const VideoSec = () => {
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const YOUTUBE_URL = "https://www.youtube.com/watch?v=khSOkRQsjFM";

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center md:text-left">
        <h2 className="w-full md:w-1/2 text-3xl md:text-5xl">
          See how we create trips travels
          <span className="text-pink-500"> that awaken dreams </span>
          bring the world closer
        </h2>
        <p className="text-base md:text-lg md:mr-8">
          We don't just plan trips - we craft <br />
          experiences that stay with you
        </p>
      </div>

      <div className="pt-10 md:pt-15">
        <div
          className="relative rounded-[20px] overflow-hidden w-full aspect-video md:aspect-auto md:h-[500px] cursor-pointer "
          onMouseEnter={() => setHovering(true)} // 👈
          onMouseLeave={() => setHovering(false)}
        >
          <ReactPlayer
            src={YOUTUBE_URL}
            playing={playing}
            width="100%"
            height="100%"
            light={
              !started || !playing
                ? "/assets/images/tahiti/landscape.jpg"
                : false
            }
            controls={false}
            onClickPreview={() => {
              setStarted(true);
              setPlaying(true);
            }}
            onPause={() => {
              setStarted(false);
              setPlaying(false);
            }}
            playIcon={
              <svg
                width="107"
                height="107"
                viewBox="0 0 107 107"
                fill="none"
                className="w-[60px] h-[60px] md:w-[107px] md:h-[107px]"
                style={{
                  transform: hovering ? "scale(1.15)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  filter: hovering
                    ? "drop-shadow(0 0 20px rgba(255,255,255,0.5))"
                    : "none",
                }}
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
            }
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
