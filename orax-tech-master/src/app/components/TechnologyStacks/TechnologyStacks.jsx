import Image from "next/image";
import React from "react";

const TechnologyStacks = () => {
  const Technology = [
    {
      id: 1,
      name: "Next.js",
      img: "next.png",
    },
    {
      id: 2,
      name: "React.js",
      img: "React.png",
    },
    {
      id: 3,
      name: "Node.js",
      img: "node.png",
    },
    {
      id: 4,
      name: "IOS Dev.",
      img: "IOSDev.png",
    },
    {
      id: 5,
      name: "Discovery",
      img: "discovery.png",
    },
    {
      id: 6,
      name: "User Interface",
      img: "webInterface.png",
    },
    {
      id: 7,
      name: "User Experience",
      img: "userexperience.png",
    },
    {
      id: 8,
      name: "React Native",
      img: "React.png",
    },
    {
      id: 9,
      name: "Android Dev",
      img: "androidDev.png",
    },
    {
      id: 10,
      name: "Product Design",
      img: "productDesign.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10 p-16 md:p-10">
        <div>
          <h1 className="text-3xl md:text-2xl">Technology Stacks</h1>
        </div>
        <div className="flex items-center md:justify-center gap-10  text-center flex-wrap">
          {Technology.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className=" flex flex-col items-center  justify-center gap-2 w-[100px] "
                >
                  <Image
                    src={`/${item.img}`}
                    width={80}
                    height={80}
                    alt="technology"
                    className="md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px]"
                  />
                  <p className="text-xl md:text-base sm:text-xs">{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechnologyStacks;
