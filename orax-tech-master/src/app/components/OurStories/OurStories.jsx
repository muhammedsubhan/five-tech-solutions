"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurStories = () => {
  const [isHovered, setIsHovered] = useState([false, false, false]);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
    videoRefs[index].current.currentTime = 0;
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center mb-10" id="stories">
        <div className="bg-gray-900 w-[1400px] min-h-[700px] md:w-full lg:w-full px-10 py-8 md:px-3 rounded-3xl md:rounded-none lg:rounded-none">
          <div>
            <div className="flex items-center justify-between px-8 sm:px-2">
              <h1 className="text-4xl font-semibold sm:text-xl text-white">
                Client Success Stories
              </h1>
              <button className="bg-sky-600 flex items-center gap-2 px-6 py-1.5 md:text-sm sm:text-xs rounded-full text-base text-white">
                View All
                <span className="arrow-animation">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="flex  gap-5 py-20 md:flex-col md:gap-5 lg:flex-col">
            <div className="flex flex-col gap-5">
              <div
                className="cursor-pointer border border-gray-800 w-[900px]  h-[330px] md:h-[255px] md:w-full sm:w-full lg:w-full sm:h-[500px]  rounded-2xl flex items-center sm:flex-col gap-10 sm:gap-0  xs:h-[480px]"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                {isHovered[0] ? (
                  <video
                    autoPlay
                    width={435}
                    height={400}
                    className="rounded-s-xl md:max-w-[340px] sm:max-w-full sm:rounded-t-xl"
                    ref={videoRefs[0]}
                    loop
                    playsInline
                  >
                    <source src="passio.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src="/story1.webp"
                    alt="mobile"
                    width={435}
                    height={400}
                    className="rounded-s-xl md:max-w-[340px] sm:max-w-full sm:rounded-t-xl "
                  />
                )}
                <div className="w-[400px] sm:w-full flex flex-col justify-center gap-5 sm:px-5 sm:h-[280px]">
                  <h1 className="text-3xl text-white font-semibold md:text-xl">
                    Edge-AI Platform
                  </h1>
                  <p className="text-xl text-white leading-loose md:text-base">
                    An edge AI platform enabling firms to embrace their apps and
                    culture with AI-driven UX.
                  </p>
                </div>
              </div>

              <div
                className="cursor-pointer border border-gray-800 w-[900px] h-[330px] md:h-[255px] md:w-full sm:w-full lg:w-full  sm:h-[500px] sm:flex-col rounded-2xl flex flex-row-reverse items-center gap-10 sm:gap-0 xs:h-[480px]"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                {isHovered[1] ? (
                  <video
                    autoPlay
                    width={435}
                    height={400}
                    className="rounded-r-xl md:max-w-[340px] sm:max-w-full sm:rounded-t-xl"
                    ref={videoRefs[1]}
                    loop
                    playsInline
                  >
                    <source src="pangea.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src="/story2.webp"
                    alt="mobile"
                    width={435}
                    height={400}
                    className="rounded-r-xl md:max-w-[340px] sm:max-w-full sm:rounded-t-xl"
                  />
                )}
                <div className="w-[400px] sm:w-full flex flex-col justify-center gap-5 sm:px-5   sm:h-[280px]">
                  <h1 className="text-3xl text-white font-semibold md:text-xl">
                    Hotel Management System
                  </h1>
                  <p className="text-xl text-white leading-loose md:text-base">
                    An innovative Pod Check-in/out system with amazing features
                    elevating hotel experiences.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="cursor-pointer border border-gray-800 w-[435px] h-[680px]  md:h-[255px] md:w-full sm:w-full lg:w-full  sm:h-[500px] flex flex-col sm:flex-col  md:flex-row  lg:flex-row lg:h-[330px] items-center rounded-2xl xs:h-[480px]"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              {isHovered[2] ? (
                <video
                  autoPlay
                  width={435}
                  height={435}
                  className="rounded-t-xl md:rounded-s-xl h-[380px] md:max-w-[340px] sm:max-w-full sm:rounded-t-xl"
                  ref={videoRefs[2]}
                  loop
                  playsInline
                >
                  <source src="/snug.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/story3.webp"
                  alt="mobile"
                  width={435}
                  height={435}
                  className="rounded-t-xl md:rounded-s-xl h-[330px] md:h-full md:max-w-[340px] sm:max-w-full sm:rounded-t-xl"
                />
              )}
              <div className="w-[400px] flex flex-col gap-5 px-4 justify-center sm:w-full sm:px-5 h-[400px]">
                <h1 className="text-3xl text-white font-semibold md:text-xl">
                  Home Rental Platform
                </h1>
                <p className="text-xl text-white leading-loose md:text-base">
                  A stellar web app, simplifying property rental in Australia
                  with an innovative approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStories;
