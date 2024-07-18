import React from "react";

const DiscussProject = () => {
  return (
    <div className="min-h-[400px] px-8 xs:px-2 flex items-center justify-center">
      <div className="w-[1400px] p-3 lg:w-[700px] md:w-[600px] sm:w-[500px] md:h-[280px] sm:h-[250px] xs:h-[230px] border-2 border-sky-600 h-[300px] rounded-xl flex flex-col items-center justify-center text-center gap-8">
        <h1 className="text-4xl font-semibold md:text-2xl sm:text-xl">
          Let's Discuss Your Project
        </h1>
        <p className="text-2xl font-light md:text-xl sm:text-sm leading-loose text-center">
          Let us know your project idea and get a free consultation to turn it
          into an amazing digital product.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center gap-2 px-6 py-2 md:text-sm sm:text-xs rounded-full text-base text-white">
          Talk to our Expert
        </button>
      </div>
    </div>
  );
};

export default DiscussProject;
