import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoDribbble } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-around md:flex-col md:items-start px-5 py-8">
      <div className="flex flex-col gap-10 py-10">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          className="sm:w-[200px] "
          alt="logo"
        />
        {/* <div>
          <h1 className="text-3xl font-bold">Five Solutions</h1>
        </div> */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold ">London</h1>
            <p>7 Bell yard London WC2A 2JR</p>
            <p className="font-normal">
              <span className="text-base font-semibold">Phone</span> +92
              3094109952
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold">Pakistan</h1>
            <p>Johar Town, Lahore</p>
            <p className="font-normal">
              <span className="text-base font-semibold">Phone</span> +92
              3094109952
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/sufyan-ahmed-web-development/"
            target="_blank"
          >
            <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
              <AiOutlineTwitter />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sufyan-ahmed-web-development/"
            target="_blank"
          >
            <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
              <BiLogoFacebook />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sufyan-ahmed-web-development/"
            target="_blank"
          >
            <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
              <BiLogoLinkedin />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sufyan-ahmed-web-development/"
            target="_blank"
          >
            <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
              <BiLogoInstagram />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sufyan-ahmed-web-development/"
            target="_blank"
          >
            <p className="text-2xl hover:text-blue-400 hover:scale-150 transition ease-in-out delay-75">
              <BiLogoDribbble />
            </p>
          </Link>
        </div>
      </div>
      <div className="grid-cols-3 grid md:grid md:grid-cols-3 gap-20 md:gap-8 sm:grid-cols-1">
        <div className="flex flex-col gap-3">
          <h1 className="text-base font-semibold">Services</h1>
          <p className="hover:text-sky-700 cursor-pointer">
            FullStack Development
          </p>
          <p className="hover:text-sky-700 cursor-pointer">
            Desktop Applications
          </p>
          <p className="hover:text-sky-700 cursor-pointer">DevOps</p>
          <p className="hover:text-sky-700 cursor-pointer">Mobile Apps</p>
          <p className="hover:text-sky-700 cursor-pointer">Web Development</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-base font-semibold">Industries</h1>
          <p className="hover:text-sky-700 cursor-pointer">Construction</p>
          <p className="hover:text-sky-700 cursor-pointer">Ecommerce</p>
          <p className="hover:text-sky-700 cursor-pointer">Finance App</p>
          <p className="hover:text-sky-700 cursor-pointer">Education</p>
          <p className="hover:text-sky-700 cursor-pointer">HealthCare</p>
          <p className="hover:text-sky-700 cursor-pointer">Sports</p>
          <p className="hover:text-sky-700 cursor-pointer">Travel</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-base font-semibold">Explore</h1>
          <p className="hover:text-sky-700 cursor-pointer">AXA Drive Easy</p>
          <p className="hover:text-sky-700 cursor-pointer">Haulink</p>
          <p className="hover:text-sky-700 cursor-pointer">Heatmiser</p>
          <p className="hover:text-sky-700 cursor-pointer">Journies</p>
          <p className="hover:text-sky-700 cursor-pointer">Pickleball Play</p>
          <p className="hover:text-sky-700 cursor-pointer">Rental Host</p>
          <p className="hover:text-sky-700 cursor-pointer">The Healthy Mummy</p>
          <p className="hover:text-sky-700 cursor-pointer">Volatiles</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
