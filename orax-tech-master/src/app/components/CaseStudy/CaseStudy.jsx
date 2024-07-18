import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const CaseStudy = () => {
  const Projects = [
    {
      id: 1,
      name: "Papa John's Pizza Delivery App",
      tech: ["Android", "IOS", "Node Js"],
      img: "Project1.jpg",
    },
    {
      id: 2,
      name: "Papa John's Pizza Delivery App",
      tech: ["Android", "SQL", "Node Js"],
      img: "Project2.png",
    },
    {
      id: 3,
      name: "Papa John's Pizza Delivery App",
      tech: ["Flutter", "IOS", "Node Js"],
      img: "Project3.jpg",
    },
    {
      id: 4,
      name: "Q-SYS a Queue Management System",
      tech: ["IOT"],
      img: "Project4.jpg",
    },
    {
      id: 5,
      name: "Zydus Verify - Zydus Cadilo IOT Solution",
      tech: ["Flutter", "IOS", "Node Js"],
      img: "Project5.png",
    },
    {
      id: 6,
      name: "Tata Power Skill Development Institude App",
      tech: ["Android", "IOS", "Laravel"],
      img: "Project6.png",
    },
  ];

  return (
    <div
      className="mb-52 min-h-[700px] sm:pt-[100px] md:pt-[100px] lg:pt-[100px] pt-[300px] relative"
      id="portfolio"
    >
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold">Case Study</h1>
        <p className="text-xl font-light sm:text-sm text-center sm:px-2">
          See How We Deliver Client's Idea Into Excellent Result!
        </p>
      </div>
      <div className="py-2 px-4 relative flex justify-center  flex-wrap gap-5">
        {Projects.map((item) => {
          return (
            <div
              key={item.id}
              className="relative mt-28 flex items-center flex-col justify-center gap-8 flex-wrap"
            >
              <Image
                src={`/${item.img}`}
                width={400}
                height={100}
                alt="case-study"
                className="rounded-xl sm:w-[320px]"
              />
              <div className=" absolute  flex flex-col items-center gap-3 min-w-full justify-center h-[150px] top-[80%] bg-white drop-shadow-2xl p-6 xs:p-3 rounded-xl xs:top-[80%]">
                <h1 className="text-base font-semibold text-center">
                  {item.name}
                </h1>
                <div className="flex gap-3 justify-center flex-wrap">
                  {item.tech.map((tech, index) => (
                    <p
                      key={index}
                      className="bg-gray-200 rounded-full p-1 text-sm sm:text-xs px-2"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <button className="bg-sky-600 flex items-center gap-2 px-6 py-1.5 md:text-sm sm:text-xs rounded-full text-base text-white">
                  View Portfolio
                  <span className="arrow-animation ">
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudy;
