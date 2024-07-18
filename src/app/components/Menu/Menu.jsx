"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";

import { Box, Drawer } from "@mui/material";
import { smoothScroll } from "../smooth/smoothScroll";
import Link from "next/link";
const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    smoothScroll("contact");
  };

  return (
    <>
      <div>
        <AiOutlineMenu onClick={toggleDrawer(true)} />

        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation">
            <div className="flex items-end justify-end py-10 px-8 ">
              <CloseIcon
                onClick={toggleDrawer(false)}
                sx={{
                  fontSize: "26px",
                }}
              />
            </div>
            <div className="flex flex-col gap-10 px-5 py-5">
              <ul className="flex flex-col items-start gap-10 text-base font-medium">
                <Link href="/#home" onClick={() => smoothScroll("home")}>
                  <li className="cursor-pointer">Home</li>
                </Link>
                <Link
                  href="/#services"
                  onClick={() => smoothScroll("services")}
                >
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
              </ul>
              <Link href="/#contact" onClick={handleScrollToContact}>
                <button className="bg-sky-600 px-3 py-2 rounded-lg w-full text-sm text-white cursor-pointer">
                  Let's Talk
                </button>
              </Link>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Menu;
