import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import TechnologyStacks from "../TechnologyStacks/TechnologyStacks";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Andorid",
      text: "Development",
      img: "android.png",
    },
    {
      id: 2,
      name: "IOS",
      text: "Development",
      img: "ios.png",
    },
    {
      id: 3,
      name: "Dev Ops",
      text: "Development",
      img: "hybird.png",
    },
    {
      id: 4,
      name: "Web",
      text: "Development",
      img: "web.png",
    },
    {
      id: 5,
      name: "Desktop ",
      text: "Apps Dev",
      img: "desktop.png",
    },

    {
      id: 6,
      name: "BlockChain",
      text: "Development",
      img: "blockchain.png",
    },
  ];

  return (
    <>
      <div className="min-h-[700px] " id="services">
        <div className=" py-1 flex">
          <div className="w-[450px] md:hidden ">
            <Image
              src="/services.jpg"
              height={850}
              width={450}
              className="h-[850px] w-[450px] object-cover"
              alt="services-img"
            />
          </div>
          <div className="flex-auto ">
            <div className=" flex justify-between items-end md:flex-col md:gap-8 md:items-start px-10 sm:px-1 mb-4">
              <div className=" flex flex-col gap-5 p-2 sm:gap-2">
                <h1 className="text-5xl text-gray-400 font-medium sm:text-3xl sm:font-normal">
                  Our Digital
                </h1>
                <h2 className="text-4xl font-bold sm:text-3xl ">
                  Transformation Services
                </h2>
                <p className="text-2xl font-normal ">
                  With a blend of reliable & long-term partner than just a
                  partner
                </p>
              </div>
              <div className="flex flex-col text-center gap-4">
                <p className="text-xl sm:text-base">To Discuss a Project</p>
                <button className="bg-sky-600 flex items-center gap-2 px-6 py-1.5 md:text-sm sm:text-xs rounded-full text-base text-white">
                  Let's Connect
                  <span className="arrow-animation ">
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="px-10 py-10 mt-2 flex flex-wrap  items-center xs:justify-center gap-5">
              {services.map((item) => {
                return (
                  <>
                    <div
                      className="flex flex-col  border border-gray-300 gap-8  w-[165px] h-[210px] md:w-[140px] md:h-[180px] sm:w-[100px] sm:h-[110px] sm:p-3 md:gap-4 p-5 items-start rounded-2xl  hover:shadow-2xl transition duration-300"
                      key={item.id}
                    >
                      <Image
                        src={`/${item.img}`}
                        height={80}
                        width={80}
                        alt={item.name}
                        className="md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px]"
                      />
                      <div className="flex flex-col gap-2 text-xl md:gap-1 md:text-base sm:text-xs">
                        <p>{item.name}</p>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="  max-w-[1200px] px-10">
              <p className="text-2xl py-8 md:py-1 md:text-center sm:text-sm md:text-xl">
                We partnered with various Brands, SME’s & Startups with flexible
                Digital transformation solutions and offered packages that suit
                and fits their requirements. Our experts help you to choose the
                best combination of technology, team & approach basis on the
                requirements, time, size, and budget of your project. Contact us
                for Digital Transformation Consulting services.
              </p>
            </div>
          </div>
        </div>
        <div>
          <TechnologyStacks />
        </div>
      </div>
    </>
  );
};

export default Services;
