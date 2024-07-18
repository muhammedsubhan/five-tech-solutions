"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";

import { Box, Drawer } from "@mui/material";
const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Industries</li>
                <li className="cursor-pointer">Insights</li>
                <li className="cursor-pointer">Portfolio</li>
              </ul>
              <button className="bg-sky-600 px-6 py-2 rounded-lg text-sm text-white ">
                Let's Talk
              </button>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default Menu;
