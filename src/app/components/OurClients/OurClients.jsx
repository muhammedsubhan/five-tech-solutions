"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardContent, Typography, Box } from "@mui/material";
const OurClients = () => {
  const carouselRef = useRef(null);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show for larger screens
    slidesToScroll: 2, // Default number of slides to scroll
    arrows: false,

    responsive: [
      {
        breakpoint: 1440, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1279, // xl
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1023, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 475, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prev = () => {
    carouselRef.current.slickPrev();
  };

  const next = () => {
    carouselRef.current.slickNext();
  };
  const clients = [
    {
      id: 1,
      name: "Erika Migilaccio",
      country: "United States",
      desc: "My dream of creating an app came true with the work of the people at MindInventory and I couldn't be happier with the way how everything turned out. I'm really grateful for everything your team did to fulfill my dream.",
      img: "client1.webp",
    },
    {
      id: 2,
      name: "Daniel Ferguson",
      country: "Australia",
      desc: "I wanted to thank MindInventory team for the fantastic job they did on my app development project. I'm really proud to say that I've been working with you guys and can't wait to get connected for the new project in the future!",
      img: "client2.png",
    },
    {
      id: 3,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 4,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 5,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 6,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 7,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
    {
      id: 8,
      name: "Chris Ragain",
      country: "United States",
      desc: "I hired MindInventory to design and develop a golf app, and I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development and the attention to detail is wonderful.",
      img: "client3.webp",
    },
  ];

  return (
    <Box className="min-h-[600px] py-14 px-12 sm:px-4">
      <Box className="flex items-center justify-between px-8 sm:px-2 mb-8">
        <Typography
          variant="h4"
          component="h1"
          className="font-semibold sm:text-xl"
        >
          Our Clients
        </Typography>
        <Box className="flex gap-4">
          <button
            onClick={prev}
            className="bg-sky-600 text-white px-3 py-3 rounded-full"
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={next}
            className="bg-sky-600 text-white px-3 py-3 rounded-full"
          >
            <ArrowForwardIcon />
          </button>
        </Box>
      </Box>
      <Box className="relative">
        <Slider ref={carouselRef} {...settings}>
          {clients.map((item) => (
            <Box key={item.id} className="px-2">
              <Card variant="outlined" className="h-full">
                <CardContent>
                  <Box className="flex items-center gap-4 mb-4">
                    <Image
                      src={`/${item.img}`}
                      width={60}
                      height={60}
                      alt="client"
                      className="rounded-full"
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        className="font-semibold sm:text-sm"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="sm:text-xs"
                      >
                        {item.country}
                      </Typography>
                    </Box>
                    <Image
                      src="/stars.png"
                      width={60}
                      height={60}
                      alt="stars"
                      className="ml-auto"
                    />
                  </Box>
                  <Typography variant="body2" className="sm:text-sm">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurClients;
