import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurProjects = () => {
  const awards = [
    {
      id: 1,
      name: "20+ Awards",
      title: "Best App Development company",
    },
    {
      id: 2,
      name: "500+ Million",
      title: "User-interaction + Counting",
    },
    {
      id: 3,
      name: "95% Completion",
      title: "Project Success & On-Time Delivery",
    },
    {
      id: 4,
      name: "150+ Experts",
      title: "Architecting Next-Gen Apps",
    },
  ];

  return (
    <>
      <div className="min-h-[700px]  ">
        <div className=" flex gap-5 flex-col py-16 px-28 md:px-3 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-gray-400 font-semibold md:text-2xl sm:text-xl">
              Innovative Digital Transformation Solutions
            </h1>
            <h2 className="text-4xl font-bold md:text-2xl ">
              Empowering Brands & Startups
            </h2>
          </div>
          <p className="max-w-[1300px] text-xl md:leading-9 leading-loose sm:text-sm sm:leading-loose">
            We are a top IT Solutions Company in USA, India, UAE, providing
            Digital Transformation Consulting that precisely analyzes your
            business requirements. Our Digital transformation services ensure
            scalability, speed, and security for your business. Our app
            development experts have domain-specific experience in building
            mobile and web apps. We embed intelligent algorithms so that your
            app checks on all the modern app development trends. From
            consultation & design to development and deployment, we tailor apps
            that are specific to your business requirements and highly align
            with your customers.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/projects-bg.jpg"
            width={1300}
            height={400}
            alt="banner"
            className="w-full h-[400px] object-cover md:object-contain md:h-full "
          />
          <div className="absolute right-[120px] top-[350px] max-w-[750px] h-[350px] bg-gradient-to-r from-blue-500 to-cyan-500  lg:right-[20px] md:right-[30px] md:top-[240px] md:max-w-[600px] md:h-[300px] sm:max-w-[350px] sm:h-[250px] sm:top-[140px] sm:right-[10px] xs:max-w-[290px] xs:h-[200px] xs:top-[80px]">
            <div className=" flex flex-wrap pt-10 p-5 sm:pt-2 sm:justify-center gap-2 ">
              {awards.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="p-2 w-[270px] sm:w-[140px] xs:w-[120px]"
                    >
                      <h1 className="text-3xl font-medium text-white md:text-xl sm:text-sm">
                        {item.name}
                      </h1>
                      <p className="text-xl font-extralight text-white md:text-sm sm:text-xs">
                        {item.title}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-52 pt-28 lg:pt-96 lg:px-12 md:px-16 md:pt-80 sm:pt-60 sm:px-10 xs:pt-48 xs:px-5">
          <button className="bg-sky-600 flex items-center gap-2 px-6 py-2 md:text-sm sm:text-xs rounded-full text-base text-white">
            Know More About Us
            <span className="arrow-animation ">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
