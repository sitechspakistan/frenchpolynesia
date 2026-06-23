"use client";
import { useState, useRef } from "react";
import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const VideoSec = ({ heading = "", paragraph = "", subheading = "" }) => {
  const [playing, setPlaying] = useState({});
  const [started, setStarted] = useState({});
  const [hovering, setHovering] = useState({});

  const videos = [
    {
      url: "https://www.youtube.com/watch?v=khSOkRQsjFM",
      thumbnail: "/assets/images/tahiti/landscape.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=xlh1q8D26fQ",
      thumbnail: "/assets/images/blog/blog-3.png",
    },
    {
      url: "https://www.youtube.com/watch?v=8PU-5fTjWWY",
      thumbnail: "/assets/images/why/why-3.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between  md:gap-10 text-center md:text-left overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pb-6 md:pb-16"
        >
          {heading}

          <h4 className="text-base w-full text-gray-500">{subheading}</h4>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-base  w-full pb-6 md:pb-0 text-gray-500"
        >
          {paragraph}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            className="relative rounded-[8px] overflow-hidden w-full aspect-video cursor-pointer"
            onMouseEnter={() =>
              setHovering((prev) => ({ ...prev, [index]: true }))
            }
            onMouseLeave={() =>
              setHovering((prev) => ({ ...prev, [index]: false }))
            }
          >
            <ReactPlayer
              src={video.url}
              playing={playing[index]}
              width="100%"
              height="100%"
              light={
                !started[index] || !playing[index] ? video.thumbnail : false
              }
              controls={false}
              onClickPreview={() => {
                setStarted((prev) => ({ ...prev, [index]: true }));
                setPlaying((prev) => ({ ...prev, [index]: true }));
              }}
              onPause={() => {
                setStarted((prev) => ({ ...prev, [index]: false }));
                setPlaying((prev) => ({ ...prev, [index]: false }));
              }}
              playIcon={
                <svg
                  width="107"
                  height="107"
                  viewBox="0 0 107 107"
                  fill="none"
                  className="w-[60px] h-[60px] md:w-[107px] md:h-[107px]"
                  style={{
                    transform: hovering[index] ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.3s ease",
                    filter: hovering[index]
                      ? "drop-shadow(0 0 20px rgba(255,255,255,0.5))"
                      : "none",
                  }}
                >
                  <path
                    d="M68.0512 64.0994C77.0512 58.8994 77.0512 50.3994 68.0512 45.1994L60.8012 40.9994L53.5512 36.7994C44.5512 31.5994 37.2012 35.8494 37.2012 46.2494V54.5994V62.9494C37.2012 71.2494 41.9012 75.6494 48.4012 74.3994"
                    stroke="white"
                    strokeWidth="7"
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
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        className="relative rounded-[20px] overflow-hidden w-full aspect-video md:aspect-auto md:h-[500px] cursor-pointer "
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <ReactPlayer
          src={YOUTUBE_URL}
          playing={playing}
          width="100%"
          height="100%"
          light={
            !started || !playing ? "/assets/images/tahiti/landscape.jpg" : false
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
      </motion.div> */}
    </div>
  );
};

export default VideoSec;
