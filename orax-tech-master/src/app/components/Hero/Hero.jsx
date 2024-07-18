"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoDribbble } from "react-icons/bi";
import Image from "next/image";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Unlock Digital Transformation",
      "Build Digital Products",
      "Consult Your Idea",
      "The Top IT Firm",
    ],
    loop: true,
  });

  return (
    <div className="min-h-[700px]  px-5 sm:px-2 py-36 " id="home">
      <div className="flex justify-around items-center ">
        <div className="flex flex-col self-end pb-12 gap-5 sm:hidden">
          <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
            <AiOutlineTwitter />
          </p>
          <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
            <BiLogoFacebook />
          </p>
          <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
            <BiLogoLinkedin />
          </p>
          <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
            <BiLogoInstagram />
          </p>
          <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
            <BiLogoDribbble />
          </p>
        </div>
        <div className="flex flex-col gap-10 items-start w-full py-6 px-24 lg:px-20 sm:px-1">
          <h1 className="text-4xl leading-normal lg:text-3xl sm:text-xl ">
            We are your Trusted Digital Transformation Partner Delivered
            <span className="font-semibold"> 500+ Apps,</span>
            deriving <span className="font-semibold">7M+ Traffic,</span>
            generating <span className="font-semibold">$380M+ Revenue</span>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-4xl text-gray-400 font-semibold lg:text-2xl">
              Connect
            </p>
            <p className="text-4xl font-semibold lg:text-2xl">
              <span className="text-gray-400 ">to</span> {text}
              <Cursor />
            </p>
          </div>
          <button className="bg-sky-600 flex items-center gap-2 px-10 py-1.5 md:text-sm  rounded-full text-xl text-white">
            Let's Talk{" "}
            <span className="arrow-animation ">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="lg:hidden">
          <Image
            src="/heroimg.gif"
            width={900}
            height={900}
            alt="hero"
            className="w-[800px]"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
