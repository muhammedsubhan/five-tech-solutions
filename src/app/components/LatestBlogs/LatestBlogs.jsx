import Image from "next/image";
import React from "react";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Dot Net Development Tools",
      publishDate: "27/10/2023",
      img: "dotNet.jpg",
    },
    {
      id: 2,
      title: "Salesforce vs ServiceNow",
      publishDate: "24/10/2023",
      img: "salesforce.jpg",
    },
    {
      id: 3,
      title: "Top Mobile App Development Trends 2024",
      publishDate: "18/10/2023",
      img: "topmobileapps.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-[650px] py-20" id="blogs">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-semibold sm:text-2xl ">Latest Blogs</h1>
          <p className="text-xl font-light sm:text-base text-center">
            Explore the Latest Blogs on Trends and Technology.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center  md:flex-col gap-5 py-28 px-3">
          {blogs.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[450px] sm:w-[380px] md:w-full xs:w-[300px] hover:text-sky-600 "
              >
                <Image
                  src={`/${item.img}`}
                  width={450}
                  height={400}
                  alt="blogs-images"
                  className="md:w-full"
                />

                <div className="flex flex-col w-full py-5 gap-3 px-3 md:min-h-[120px] min-h-[200px] sm:min-h-[0px] ">
                  <h1 className="text-xl font-semibold sm:text-base">
                    {item.title}
                  </h1>
                  <p className="text-base font-light tracking-widest sm:text-sm">
                    {item.publishDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
