import Image from "next/image";
import React from "react";

const WorkWith = () => {
  const ourWork = [
    {
      id: 1,
      title: "Start Up Business",
      img: "handshake.png",
    },
    {
      id: 2,
      title: "Small & Medium Busines",
      img: "statistic.png",
    },
    {
      id: 3,
      title: "Enterprise",
      img: "obligation.png",
    },
    {
      id: 4,
      title: "Agencies",
      img: "enterprise.png",
    },
  ];

  return (
    <>
      <div className="min-h-[400px] flex justify-evenly lg:gap-4 md:gap-8 items-center lg:flex-col bg-gradient-to-r from-blue-500 to-cyan-500 py-20 mb-10">
        <div className="flex flex-col gap-5 lg:px-14 md:px-4 ">
          <h1 className="text-5xl font-semibold sm:text-3xl xs:text-xl text-white">
            Who We Work With
          </h1>
          <p className="w-[390px] lg:w-full md:w-full text-white leading-loose">
            As a leading mobile app development company in USA and India, we
            worked with 2000+ businesses either it is a start-up or enterprise
            and delivers the best solution in the industry. At Hyperlink
            InfoSystem, we offer a broad range of app development services based
            on business requirements.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 	sm:gap-3">
          {ourWork.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="bg-white w-[350px] h-[160px] md:w-[280px] sm:h-[140px] sm:w-[200px] xs:w-[150px] rounded-xl flex flex-col items-center justify-center gap-2"
                >
                  <Image
                    src={`/${item.img}`}
                    width={80}
                    height={80}
                    alt="images"
                    className="xs:w-[40px]"
                  />
                  <p className="text-xl md:text-base sm:text-sm font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkWith;
