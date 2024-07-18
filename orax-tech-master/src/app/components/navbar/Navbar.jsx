"use client";
import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Link from "next/link";
import { smoothScroll } from "../smooth/smoothScroll";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check scroll position immediately when component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    smoothScroll("contact");
  };

  return (
    <>
      <div
        className={`fixed top-0 z-10 w-full transition-all duration-300   ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent "
        }`}
      >
        <div
          className={`flex justify-around h-24 items-center  ${
            isScrolled ? "" : "bg-transparent"
          }`}
        >
          <div>
            {/* <Link href="/#home" onClick={() => smoothScroll("home")}>
              <h1 className="text-3xl font-bold">Five Solutions</h1>
            </Link> */}
            <Image
              src="/logo.png"
              width={300}
              height={300}
              className="sm:w-[200px] "
              alt="logo"
            />
          </div>
          <div className="md:hidden">
            <ul className="flex items-center gap-5 text-base font-medium">
              <Link href="/#home" onClick={() => smoothScroll("home")}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/#services" onClick={() => smoothScroll("services")}>
                <li className="cursor-pointer">Services</li>
              </Link>
              <Link href="/#stories" onClick={() => smoothScroll("stories")}>
                <li className="cursor-pointer">Our Stories</li>
              </Link>
              <Link href="/#blogs" onClick={() => smoothScroll("blogs")}>
                <li className="cursor-pointer">Blogs</li>
              </Link>
              <Link
                href="/#portfolio"
                onClick={() => smoothScroll("portfolio")}
              >
                <li className="cursor-pointer">Portfolio</li>
              </Link>

              <Link href="/#contact" onClick={handleScrollToContact}>
                <li className="bg-sky-600 px-3 py-2 rounded-lg text-sm text-white cursor-pointer">
                  Let's Talk
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden md:flex text-2xl">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
